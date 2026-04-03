import type { Metadata } from 'next';
import { SignupForm } from './_components/signup-form';

export const metadata: Metadata = {
  title: 'Get Started — Free 3-Month Pilot | rungolf.club',
  description:
    'Start your free 3-month pilot. No card required. Set up your club tee sheet, competition management and member app in under 2 weeks.',
  alternates: { canonical: '/signup' },
  robots: { index: true, follow: true },
};

interface Props {
  searchParams: Promise<{ plan?: string; interval?: string }>;
}

export default async function SignupPage({ searchParams }: Props) {
  const { plan, interval } = await searchParams;
  return <SignupForm initialPlan={plan ?? 'club'} initialInterval={interval ?? 'monthly'} />;
}
