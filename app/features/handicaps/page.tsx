import type { Metadata } from 'next';
import { FeaturePageLayout } from '@/components/sections/feature-page-layout';
import { HandicapVisual } from '@/components/sections/handicap-visual';

export const metadata: Metadata = {
  title: 'Golf Winter Handicap Management Software | rungolf.club',
  description:
    'Stop managing winter handicaps on spreadsheets. Automatic WHS snapshot, frozen winter index, manual adjustments with audit trail.',
  alternates: { canonical: '/features/handicaps' },
};

export default function HandicapsPage() {
  return (
    <FeaturePageLayout
      eyebrow="Golf winter handicap management"
      headline="Winter handicaps without the spreadsheet nightmare"
      subheadline="Automatic WHS snapshot at season start, frozen winter index, manual adjustments with full audit trail — and a one-click reset in spring."
      problem="Every autumn, club secretaries face the same pain: exporting member handicaps to a spreadsheet, manually freezing winter indices, fielding calls when the formula breaks, and re-importing everything in spring. One wrong paste and the whole season's data is compromised."
      solution="rungolf.club handles the full winter handicap cycle in your dashboard. Trigger the snapshot with one click — the platform freezes every active member's WHS index as their winter handicap. Adjust individual members with a reason and audit trail. When spring arrives, reset all members back to WHS mode in one action."
      benefits={[
        {
          title: 'One-click WHS snapshot',
          description: 'Trigger winter mode for all active members at once. Each member\'s current WHS index is preserved as their winter handicap.',
        },
        {
          title: 'Manual adjustments with audit trail',
          description: 'Adjust individual winter handicaps with a mandatory reason. Every change is logged with who made it and when.',
        },
        {
          title: 'Member app display',
          description: 'Members see their current winter handicap and WHS index in the member app. No confusion about which index applies.',
        },
        {
          title: 'Spring reset in one action',
          description: 'Reset all members back to WHS mode at the end of winter. Clean, reversible, and instant.',
        },
      ]}
      visual={<HandicapVisual />}
    />
  );
}
