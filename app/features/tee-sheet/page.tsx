import type { Metadata } from 'next';
import { FeaturePageLayout } from '@/components/sections/feature-page-layout';
import { HeroVisual } from '@/components/sections/hero-visual';

export const metadata: Metadata = {
  title: 'Tee Sheet Management Software for Golf Clubs',
  description:
    'Real-time tee sheet management for Irish and UK golf clubs. Automated slot generation, visitor booking, pro shop controls. Replace BRS Golf for less.',
  alternates: { canonical: '/features/tee-sheet' },
};

export default function TeeSheetPage() {
  return (
    <FeaturePageLayout
      eyebrow="Tee sheet management software"
      headline="Your tee sheet, fully automated"
      subheadline="Real-time availability, automated slot generation, visitor booking and pro shop controls — all from one screen, on any device."
      problem="Most clubs still manage their tee sheet through legacy software that requires manual slot creation, phone-in bookings, and a full-time pro shop presence to handle changes. When something goes wrong mid-competition, there's no fast way to fix it."
      solution="rungolf.club auto-generates your tee sheet from your course configuration — holes, interval, first and last tee time. Slots open at the scheduled time, members book online, and the pro shop sees everything live. Block a slot, cancel a booking, or hand-enter a visitor booking in seconds."
      benefits={[
        {
          title: 'Automated slot generation',
          description: 'Configure your course once — holes, interval, tee times — and slots are generated automatically for every day.',
        },
        {
          title: 'Scheduled sheet opens',
          description: 'Set the exact time the tee sheet opens for member booking. No manual intervention needed.',
        },
        {
          title: 'Live pro shop view',
          description: 'See all bookings, players, and slot status in real time. Cancel, edit, or block slots instantly.',
        },
        {
          title: 'Visitor booking',
          description: 'Add visitor players directly to slots with guest names. Green fees tracked separately from member rates.',
        },
      ]}
      visual={<HeroVisual />}
    />
  );
}
