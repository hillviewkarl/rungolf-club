import type { Metadata } from 'next';
import { FeaturePageLayout } from '@/components/sections/feature-page-layout';
import { MemberAppVisual } from '@/components/sections/member-app-visual';

export const metadata: Metadata = {
  title: 'Golf Club Member Booking App | rungolf.club',
  description:
    'Mobile-first member booking app for golf clubs. Tee time booking, competition entry, purse top-up and handicap display — no app store required.',
  alternates: { canonical: '/features/member-app' },
};

export default function MemberAppPage() {
  return (
    <FeaturePageLayout
      eyebrow="Golf club member booking app"
      headline="A booking app your members will actually use"
      subheadline="Mobile-first tee time booking, competition entry, purse top-up and handicap display — from any device, with no app to download."
      problem="Members at most clubs either call the pro shop to book, or struggle through a clunky desktop website on their phone. Competition entry requires a trip to the noticeboard. Purse top-ups involve cash and a ledger book. It's 2024 and clubs are still operating like it's 2004."
      solution="rungolf.club's member app is a progressive web app — it works on any phone browser without an App Store download. Members bookmark it to their home screen and get a native app experience. They can book tee times, enter competitions, top up their purse via card, and see their handicap in under 30 seconds."
      benefits={[
        {
          title: 'No app store required',
          description: 'Members add the app to their home screen from Safari or Chrome. No downloads, no updates, no App Store approval delays.',
        },
        {
          title: 'Tee time booking',
          description: 'Browse available slots by date, select a time, add playing partners, and confirm — all in under a minute.',
        },
        {
          title: 'Competition entry',
          description: 'Members see upcoming competitions, entry fees, and available slots. Entry deducts from their purse balance instantly.',
        },
        {
          title: 'Purse top-up by card',
          description: 'Members top up their purse via Stripe-powered card payment. Funds are available immediately for bookings and entry fees.',
        },
      ]}
      visual={<MemberAppVisual />}
    />
  );
}
