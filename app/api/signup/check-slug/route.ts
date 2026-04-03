import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get('slug');

  if (!slug || !/^[a-z0-9-]{2,32}$/.test(slug)) {
    return NextResponse.json({ available: false });
  }

  const admin = createAdminClient();
  const { data } = await admin
    .from('clubs')
    .select('id')
    .eq('slug', slug)
    .maybeSingle();

  return NextResponse.json({ available: data === null });
}
