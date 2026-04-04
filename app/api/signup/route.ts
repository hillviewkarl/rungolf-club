import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getStripe } from '@/lib/stripe';
import { createAdminClient } from '@/lib/supabase';

const PRICE_IDS: Record<string, Record<string, string>> = {
  starter: {
    monthly: process.env.STRIPE_PRICE_STARTER_MONTHLY ?? '',
    annual: process.env.STRIPE_PRICE_STARTER_ANNUAL ?? '',
  },
  club: {
    monthly: process.env.STRIPE_PRICE_CLUB_MONTHLY ?? '',
    annual: process.env.STRIPE_PRICE_CLUB_ANNUAL ?? '',
  },
  pro: {
    monthly: process.env.STRIPE_PRICE_PRO_MONTHLY ?? '',
    annual: process.env.STRIPE_PRICE_PRO_ANNUAL ?? '',
  },
};

const bodySchema = z.object({
  clubName: z.string().min(2).max(80),
  country: z.enum(['Ireland', 'United Kingdom']),
  slug: z.string().regex(/^[a-z0-9-]{2,32}$/),
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  email: z.string().email(),
  plan: z.enum(['starter', 'club', 'pro']),
  interval: z.enum(['monthly', 'annual']),
});

export async function POST(request: NextRequest) {
  const body = await request.json() as unknown;
  const parsed = bodySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid form data. Please check your details and try again.' },
      { status: 400 },
    );
  }

  const { clubName, country, slug, firstName, lastName, email, plan, interval } = parsed.data;

  // Re-check slug availability
  const admin = createAdminClient();
  const { data: existing } = await admin
    .from('clubs')
    .select('id')
    .eq('slug', slug)
    .maybeSingle();

  if (existing) {
    return NextResponse.json(
      { error: 'That subdomain is already taken. Please choose another.' },
      { status: 409 },
    );
  }

  const priceId = PRICE_IDS[plan]?.[interval];
  if (!priceId) {
    return NextResponse.json(
      { error: 'Invalid plan selected. Please try again.' },
      { status: 400 },
    );
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://rungolf.club';

  const session = await getStripe().checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price: priceId, quantity: 1 }],
    customer_email: email,
    success_url: `${appUrl}/signup/success`,
    cancel_url: `${appUrl}/signup`,
    subscription_data: {
      trial_period_days: 90,
      metadata: {
        club_name: clubName,
        slug,
        country,
        admin_email: email,
        admin_first_name: firstName,
        admin_last_name: lastName,
        plan,
        interval,
      },
    },
    metadata: {
      club_name: clubName,
      slug,
      country,
      admin_email: email,
      admin_first_name: firstName,
      admin_last_name: lastName,
      plan,
      interval,
    },
  });

  return NextResponse.json({ checkoutUrl: session.url });
}
