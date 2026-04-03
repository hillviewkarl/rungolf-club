import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createAdminClient } from '@/lib/supabase';

const bodySchema = z.object({
  email: z.string().email(),
});

export async function POST(request: NextRequest) {
  const body = await request.json() as unknown;
  const parsed = bodySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  const { email } = parsed.data;
  const admin = createAdminClient();

  // Look up member to get club slug + role
  const { data: member } = await admin
    .from('members')
    .select('role, club:clubs(slug)')
    .eq('email', email)
    .eq('active', true)
    .maybeSingle();

  if (!member) {
    return NextResponse.json({ error: 'Email not found.', code: 'not_found' }, { status: 404 });
  }

  const club = Array.isArray(member.club) ? member.club[0] : member.club;
  const slug = club?.slug;
  const role = member.role ?? 'member';

  // Construct redirect based on role
  const redirectTo = slug
    ? role === 'club_admin'
      ? `https://${slug}.rungolf.club/dashboard`
      : `https://${slug}.rungolf.club/book`
    : 'https://rungolf.club';

  // Generate and send magic link
  const { error: linkError } = await admin.auth.admin.generateLink({
    type: 'magiclink',
    email,
    options: { redirectTo },
  });

  if (linkError) {
    // Supabase rate limit surfaces as a specific error message
    if (linkError.message?.toLowerCase().includes('rate')) {
      return NextResponse.json({ error: 'Rate limited.', code: 'rate_limited' }, { status: 429 });
    }
    return NextResponse.json({ error: linkError.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, message: 'Magic link sent.' });
}
