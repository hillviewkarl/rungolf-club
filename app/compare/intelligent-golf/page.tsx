import type { Metadata } from 'next';
import Link from 'next/link';
import { ComparisonTable } from '@/components/sections/comparison-table';

export const metadata: Metadata = {
  title: 'Intelligent Golf Alternative | rungolf.club',
  description:
    'Looking for an Intelligent Golf alternative? rungolf.club offers independent golf club management software at a fraction of the cost.',
  alternates: { canonical: '/compare/intelligent-golf' },
};

const rows = [
  { feature: 'Independent ownership (no PE)', rungolf: true, competitor: false, highlight: true },
  { feature: 'Monthly cost', rungolf: 'From €79/mo', competitor: 'Contact for pricing', highlight: true },
  { feature: 'Modern mobile-first member app', rungolf: true, competitor: true },
  { feature: 'Setup in under 2 weeks', rungolf: true, competitor: false, highlight: true },
  { feature: 'Tee sheet management', rungolf: true, competitor: true },
  { feature: 'Competition management', rungolf: true, competitor: true },
  { feature: 'Member purse / cashless payments', rungolf: true, competitor: true },
  { feature: 'Winter handicap management', rungolf: true, competitor: false },
  { feature: 'Waiting list automation', rungolf: true, competitor: true },
  { feature: '24/7 dedicated support contact', rungolf: true, competitor: false },
  { feature: 'Flat pricing (no per-member fees)', rungolf: true, competitor: false },
  { feature: 'No tee time extraction', rungolf: true, competitor: true },
];

export default function IntelligentGolfComparePage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4" style={{ backgroundColor: '#1B3A2B' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#C9963B' }}>
            Intelligent Golf alternative
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5 text-balance leading-tight">
            Intelligent Golf alternative — without the PE price tag
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto text-balance">
            Intelligent Golf is a capable platform, but it's PE-backed, opaque on pricing,
            and built for large club operations. rungolf.club is built for independent clubs
            that want modern software at a price that makes sense.
          </p>
        </div>
      </section>

      {/* Context */}
      <section className="py-16 px-4" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1B3A2B' }}>
            What's different about rungolf.club
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              { label: 'Built for independents', desc: 'Intelligent Golf is designed for large club operations with full-time IT staff. rungolf.club is built for the secretary and pro shop manager who wear many hats.' },
              { label: 'Transparent pricing', desc: 'Published flat monthly rates from €79. No per-member fees, no booking commissions, no negotiated enterprise contracts.' },
              { label: 'Go live in days', desc: 'Most clubs are live in under two weeks. We handle the import, setup call, and staff training — no lengthy implementation project.' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-5 border border-gray-100">
                <h3 className="font-semibold mb-2" style={{ color: '#1B3A2B' }}>{item.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-8 text-center" style={{ color: '#1B3A2B' }}>
            rungolf.club vs Intelligent Golf — feature by feature
          </h2>
          <ComparisonTable competitorName="Intelligent Golf" rows={rows} />
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
