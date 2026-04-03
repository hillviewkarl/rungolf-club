import type { Metadata } from 'next';
import Link from 'next/link';
import { ComparisonTable } from '@/components/sections/comparison-table';

export const metadata: Metadata = {
  title: 'ClubV1 Alternative for Golf Clubs | rungolf.club',
  description:
    'Looking for a ClubV1 alternative? rungolf.club is independent, modern, and affordable. No PE ownership, no legacy UI, no hidden costs.',
  alternates: { canonical: '/compare/clubv1' },
};

const rows = [
  { feature: 'Independent ownership (no PE)', rungolf: true, competitor: false, highlight: true },
  { feature: 'Monthly cost', rungolf: 'From €79/mo', competitor: 'Contact for pricing', highlight: true },
  { feature: 'Modern mobile-first member app', rungolf: true, competitor: false, highlight: true },
  { feature: 'Setup in under 2 weeks', rungolf: true, competitor: false },
  { feature: 'Tee sheet management', rungolf: true, competitor: true },
  { feature: 'Competition management', rungolf: true, competitor: true },
  { feature: 'Member purse / cashless payments', rungolf: true, competitor: false },
  { feature: 'Winter handicap management', rungolf: true, competitor: false },
  { feature: 'Waiting list automation', rungolf: true, competitor: true },
  { feature: '24/7 dedicated support contact', rungolf: true, competitor: false },
  { feature: 'Flat pricing (no per-member fees)', rungolf: true, competitor: false },
  { feature: 'No tee time extraction', rungolf: true, competitor: true },
];

export default function ClubV1ComparePage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4" style={{ backgroundColor: '#1B3A2B' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#C9963B' }}>
            ClubV1 alternative
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5 text-balance leading-tight">
            Modern ClubV1 alternative — independent, affordable, built for today
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto text-balance">
            ClubV1 is owned by ClearCourse, a private equity-backed software consolidator.
            rungolf.club is independently owned and built specifically for how clubs work today.
          </p>
        </div>
      </section>

      {/* Context */}
      <section className="py-16 px-4" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1B3A2B' }}>
            Why clubs are moving away from ClubV1
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              { label: 'PE-owned', desc: 'ClubV1 is part of ClearCourse, a PE-backed software group. Pricing decisions are made by investors, not club operators.' },
              { label: 'Legacy UI', desc: 'The interface was designed for desktop browsers a decade ago. Members on mobile get a degraded experience.' },
              { label: 'Opaque pricing', desc: 'Most clubs can\'t get a price without a sales call. rungolf.club publishes flat monthly pricing with no surprises.' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-5 border border-gray-100">
                <h3 className="font-semibold mb-2" style={{ color: '#1B3A2B' }}>{item.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">
            rungolf.club is founder-owned and will remain that way. We don't answer to investors
            or a consolidator's growth targets — we answer to the clubs that use our software.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-8 text-center" style={{ color: '#1B3A2B' }}>
            rungolf.club vs ClubV1 — feature by feature
          </h2>
          <ComparisonTable competitorName="ClubV1" rows={rows} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center" style={{ backgroundColor: '#1B3A2B' }}>
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready to make the switch?
          </h2>
          <p className="text-white/60 mb-8">Every club gets a free 3-month pilot. No card required.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#C9963B' }}
            >
              Start Free Pilot
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold border text-white transition-colors"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
