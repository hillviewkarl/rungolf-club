import type { Metadata } from 'next';
import { PricingClient } from './_components/pricing-client';

export const metadata: Metadata = {
  title: 'Golf Club Software Pricing Ireland & UK',
  description:
    'Simple, transparent pricing for Irish and UK golf clubs. From €79/month. No per-member fees, no booking commissions, no hidden costs. Free 3-month pilot.',
  alternates: { canonical: '/pricing' },
};

export default function PricingPage() {
  return <PricingClient />;
}
