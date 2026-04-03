import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { stripe } from '@/lib/stripe';
import { createAdminClient } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');

  if (!sig) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (event.type !== 'checkout.session.completed') {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const meta = session.metadata;

  if (!meta?.slug || !meta.club_name || !meta.admin_email) {
    return NextResponse.json({ error: 'Missing metadata' }, { status: 400 });
  }

  const admin = createAdminClient();

  // 1. Create club record
  const { data: club, error: clubError } = await admin
    .from('clubs')
    .insert({
      name: meta.club_name,
      slug: meta.slug,
      subscription_tier: meta.plan ?? 'club',
      active: true,
      setup_complete: false,
    })
    .select('id')
    .single();

  if (clubError || !club) {
    console.error('Failed to create club:', clubError);
    return NextResponse.json({ error: 'Failed to create club' }, { status: 500 });
  }

  // 2. Create auth user + member record
  const { data: authData, error: authError } = await admin.auth.admin.createUser({
    email: meta.admin_email,
    email_confirm: true,
    user_metadata: {
      role: 'club_admin',
      club_id: club.id,
      first_name: meta.admin_first_name,
      last_name: meta.admin_last_name,
    },
  });

  if (authError || !authData.user) {
    console.error('Failed to create auth user:', authError);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }

  await admin.from('members').insert({
    club_id: club.id,
    user_id: authData.user.id,
    email: meta.admin_email,
    first_name: meta.admin_first_name ?? '',
    last_name: meta.admin_last_name ?? '',
    role: 'club_admin',
    active: true,
  });

  // 3. Send magic link (fire and forget)
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://rungolf.club';
  admin.auth.admin
    .generateLink({
      type: 'magiclink',
      email: meta.admin_email,
      options: {
        redirectTo: `https://${meta.slug}.rungolf.club/dashboard/setup`,
      },
    })
    .then(async ({ data }) => {
      if (!data.properties?.action_link) return;
      // Send welcome email via Resend
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'rungolf.club <no-reply@rungolf.club>',
          to: [meta.admin_email],
          subject: `Welcome to rungolf.club — set up ${meta.club_name}`,
          html: welcomeEmail(
            `${meta.admin_first_name ?? ''} ${meta.admin_last_name ?? ''}`.trim(),
            meta.club_name,
            data.properties.action_link,
            `${appUrl}/support`,
          ),
        }),
      });
    })
    .catch(err => console.error('Magic link / email error:', err));

  return NextResponse.json({ ok: true });
}

function welcomeEmail(name: string, clubName: string, magicLink: string, supportUrl: string) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f0e8;font-family:Arial,sans-serif;">
  <div style="max-width:560px;margin:40px auto;background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
    <div style="background:#1B3A2B;padding:32px 40px;">
      <p style="color:#C9963B;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 8px">rungolf.club</p>
      <h1 style="color:white;font-size:22px;margin:0;">Welcome, ${name}!</h1>
    </div>
    <div style="padding:32px 40px;">
      <p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 16px">
        Your club <strong>${clubName}</strong> has been created on rungolf.club.
        Your free 3-month pilot starts now.
      </p>
      <p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 24px">
        Click the button below to access your dashboard and complete your club setup.
      </p>
      <a href="${magicLink}" style="display:inline-block;background:#C9963B;color:white;font-weight:700;font-size:14px;padding:14px 28px;border-radius:10px;text-decoration:none;">
        Access my dashboard →
      </a>
      <p style="color:#9ca3af;font-size:13px;margin:24px 0 0">
        This link expires in 24 hours. If you need help, visit <a href="${supportUrl}" style="color:#2D6A4F;">${supportUrl}</a>.
      </p>
    </div>
    <div style="background:#f9fafb;padding:16px 40px;border-top:1px solid #f3f4f6;">
      <p style="color:#9ca3af;font-size:12px;margin:0;">rungolf.club · Golf Club Management Software · Independent. Not PE-owned.</p>
    </div>
  </div>
</body>
</html>`;
}
