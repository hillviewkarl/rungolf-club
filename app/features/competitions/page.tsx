import type { Metadata } from 'next';
import { FeaturePageLayout } from '@/components/sections/feature-page-layout';
import { CompVisual } from '@/components/sections/comp-visual';

export const metadata: Metadata = {
  title: 'Golf Competition Management Software | rungolf.club',
  description:
    'Automated golf competition management for Irish and UK clubs. Entry fee collection, waiting lists, automated sheet opens, member notifications.',
  alternates: { canonical: '/features/competitions' },
};

export default function CompetitionsPage() {
  return (
    <FeaturePageLayout
      eyebrow="Golf competition management software"
      headline="Run competitions without the admin overhead"
      subheadline="Automated sheet opens, online entry fee collection, waiting lists and instant notifications — your secretary gets their weekends back."
      problem="Running club competitions involves dozens of manual steps: opening the sheet, collecting entry fees, managing a waiting list on paper, notifying members of changes, and handling cancellations that ripple across the draw. One mistake and the phone doesn't stop ringing."
      solution="rungolf.club automates the entire flow. Set the competition date, format, entry fee, and max players — the platform opens the sheet at the configured time, collects entry fees from member purses, manages the waiting list automatically, and sends notifications when a spot opens up."
      benefits={[
        {
          title: 'Automated entry opening',
          description: 'Set a future date and time for the competition sheet to open. Members are notified and can enter immediately.',
        },
        {
          title: 'Entry fee collection',
          description: 'Fees are deducted from member purse balances on entry. No cash handling, no chasing payments.',
        },
        {
          title: 'Waiting list management',
          description: 'When a player cancels, the next person on the waiting list is automatically promoted and notified by email.',
        },
        {
          title: 'Cancellation with auto-refund',
          description: 'If you cancel a competition, all entry fees are automatically credited back to member purses.',
        },
      ]}
      visual={<CompVisual />}
    />
  );
}
