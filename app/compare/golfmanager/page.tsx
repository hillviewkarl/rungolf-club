import type { Metadata } from 'next';
import Link from 'next/link';
import { ComparisonTable } from '@/components/sections/comparison-table';

export const metadata: Metadata = {
  title: 'rungolf.club vs GolfManager — Golf Club Software Comparison',
  description:
    'Comparing rungolf.club and GolfManager? See how pricing, features, and focus differ — especially for independent member clubs in Ireland and the UK.',
  alternates: { canonical: '/compare/golfmanager' },
};

const rows = [
  { feature: 'Starting price', rungolf: '€79/month', competitor: '€299+/month', highlight: true },
  { feature: 'Pricing model', rungolf: 'Flat monthly tiers', competitor: 'Per-module, custom quote', highlight: true },
  { feature: 'Built for', rungolf: 'Independent member clubs', competitor: 'Resorts, hotels, public courses' },
  { feature: 'Ireland/UK member club focus', rungolf: true, competitor: false, highlight: true },
  { feature: 'Winter handicap automation', rungolf: true, competitor: false, highlight: true },
  { feature: 'Tee sheet', rungolf: true, competitor: true },
  { feature: 'Competition management', rungolf: true, competitor: 'Limited' },
  { feature: 'Member purse / Stripe payments', rungolf: true, competitor: true },
  { feature: 'Cloud-based', rungolf: true, competitor: true },
  { feature: 'Setup complexity', rungolf: 'Low — opinionated, fast', competitor: 'Higher — modular config' },
  { feature: 'Ownership', rungolf: 'Independent, founder-led', competitor: 'VC-backed, Spanish HQ' },
  { feature: 'Monthly contract', rungolf: true, competitor: false },
  { feature: 'Data location', rungolf: 'EU (Ireland)', competitor: 'Varies' },
];

export default function GolfManagerComparePage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4" style={{ backgroundColor: '#1B3A2B' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#C9963B' }}>
            GolfManager alternative
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5 text-balance leading-tight">
            rungolf.club vs GolfManager
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto text-balance">
            GolfManager is a well-reviewed global platform. rungolf.club is purpose-built for
            independent member clubs in Ireland and the UK — at a fraction of the price.
          </p>
          <div className="mt-8">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#C9963B' }}
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 px-4" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8" style={{ color: '#1B3A2B' }}>
            Feature comparison
          </h2>
          <ComparisonTable competitorName="GolfManager" rows={rows} />
        </div>
      </section>

      {/* Where GolfManager wins */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1B3A2B' }}>
            Where GolfManager wins
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We believe in honest comparisons. GolfManager has genuine strengths:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Extensive review history', body: '27+ verified reviews with consistently strong ratings — a well-established track record.' },
              { title: 'Large feature set', body: 'POS, marketing tools, website builder, analytics — a broad platform for complex operations.' },
              { title: 'Strong support reputation', body: '5-minute average response time via WhatsApp — genuinely impressive for a software product.' },
              { title: 'Established globally', body: 'Used across a dozen+ countries with a mature, battle-tested platform.' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-5">
                <h3 className="font-semibold mb-2" style={{ color: '#1B3A2B' }}>{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-6 leading-relaxed">
            If you&apos;re running a hotel golf facility, a large resort, or a multi-course operation
            with complex retail and F&amp;B needs, GolfManager is worth a look.
          </p>
        </div>
      </section>

      {/* Where rungolf.club wins */}
      <section className="py-16 px-4" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8" style={{ color: '#1B3A2B' }}>
            Where rungolf.club wins
          </h2>

          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-display text-lg font-bold mb-2" style={{ color: '#1B3A2B' }}>Price.</h3>
              <p className="text-gray-600 leading-relaxed">
                GolfManager starts at €299/month. rungolf.club starts at €79/month. Our full Club plan —
                which covers unlimited members, full competition management and winter handicap automation —
                is €149/month. That&apos;s half the GolfManager entry price for a product purpose-built for
                exactly what you need.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold mb-2" style={{ color: '#1B3A2B' }}>Built for member clubs, not resorts.</h3>
              <p className="text-gray-600 leading-relaxed">
                GolfManager is designed for operations that sell green fees online, manage hotel bookings,
                and run spa facilities. It&apos;s built for public-facing courses that want to maximise occupancy
                and online revenue. If you run an independent members club in Ireland or the UK, most of
                that feature set is noise — and you&apos;ll be paying for it.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                rungolf.club is built around the actual workflows of a member club: a tee sheet that members
                and the pro shop share, competitions with automated entry and waitlist management, and a
                winter handicap process that doesn&apos;t require a spreadsheet.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border-l-4" style={{ borderLeftColor: '#C9963B' }}>
              <h3 className="font-display text-lg font-bold mb-2" style={{ color: '#1B3A2B' }}>Winter handicap automation.</h3>
              <p className="text-gray-600 leading-relaxed">
                This is the feature GolfManager doesn&apos;t have — and the one club secretaries care about most.
                rungolf.club automates the full winter handicap cycle: snapshot at end of season, locked
                winter index per member, admin adjustments with audit trail, automatic reset in spring.
                If your club is still doing this on a spreadsheet, this feature alone is worth the switch.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold mb-2" style={{ color: '#1B3A2B' }}>Simplicity.</h3>
              <p className="text-gray-600 leading-relaxed">
                GolfManager&apos;s modular system is powerful, but it requires configuration. You&apos;ll choose modules,
                configure pricing, negotiate a contract. rungolf.club is deliberately opinionated — it works
                the way Irish and UK member clubs work, out of the box, with a setup that takes hours not weeks.
              </p>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold mb-2" style={{ color: '#1B3A2B' }}>Independence.</h3>
              <p className="text-gray-600 leading-relaxed">
                rungolf.club is independently owned. There&apos;s no VC pressure to upsell, no parent company with
                competing products, no tee time extraction deal in the background. What you pay is what it
                costs. That&apos;s it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 text-center" style={{ backgroundColor: '#1B3A2B' }}>
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Want to see the difference for yourself?
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Book a 30-minute demo and we&apos;ll walk you through the tee sheet, competitions, and winter
            handicap system on a live account. No sales pressure, no commitments.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#C9963B' }}
            >
              Book a demo →
            </Link>
            <Link
              href="/compare"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold border text-white transition-colors"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            >
              Back to all comparisons →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
