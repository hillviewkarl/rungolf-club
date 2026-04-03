import type { Metadata } from 'next';
import { FeaturePageLayout } from '@/components/sections/feature-page-layout';
import { PaymentsVisual } from '@/components/sections/payments-visual';

export const metadata: Metadata = {
  title: 'Golf Club Cashless Payments & Member Purse | rungolf.club',
  description:
    'Cashless golf club payments via member purse. Stripe-powered top-ups, competition fees, green fees. No e-money licence required.',
  alternates: { canonical: '/features/payments' },
};

export default function PaymentsPage() {
  return (
    <FeaturePageLayout
      eyebrow="Golf club cashless payments"
      headline="Cashless payments without the complexity"
      subheadline="Members pre-load a purse balance by card. Tee time fees, competition entry, and green fees are deducted automatically. No cash, no manual ledger, no e-money licence headaches."
      problem="Clubs that try to go cashless often hit a wall: payment processors require e-money licences, per-transaction fees eat into margins, or the system is so complex that staff won't use it. Meanwhile, the cash tin and ledger book are still behind the counter."
      solution="rungolf.club uses a pre-loaded purse model. Members top up their balance via Stripe — funds go straight to your club's Stripe account, not ours. Deductions for tee times and comp entry are instant ledger entries. No e-money licence is required because no float is held on our platform. Simple, legal, and clean."
      benefits={[
        {
          title: 'Member purse pre-loading',
          description: 'Members top up by card via Stripe Checkout. Minimum top-up is €10. Funds appear in their purse immediately.',
        },
        {
          title: 'Automatic fee deductions',
          description: 'Tee time green fees and competition entry fees are deducted from purse on booking. No manual processing.',
        },
        {
          title: 'Funds go to your club account',
          description: 'Stripe Connect routes payments directly to your club\'s Stripe account. rungolf.club never holds your money.',
        },
        {
          title: 'Low balance alerts',
          description: 'Members are warned when their purse balance drops below €10 and are blocked from booking if they can\'t cover the fee.',
        },
      ]}
      visual={<PaymentsVisual />}
    />
  );
}
