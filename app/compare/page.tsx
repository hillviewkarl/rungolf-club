import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Golf Club Software Comparison | rungolf.club vs BRS Golf, ClubV1 & More',
  description:
    'Compare rungolf.club with BRS Golf, ClubV1, and Intelligent Golf. Independent, modern, and affordable golf club management software for Irish and UK clubs.',
  alternates: { canonical: '/compare' },
};

const COMPARISONS = [
  {
    href: '/compare/brs-golf',
    competitor: 'BRS Golf',
    headline: 'rungolf.club vs BRS Golf',
    summary: 'BRS Golf is "free" — but GolfNow takes one tee time per day, worth €10,000–€18,000/yr in surrendered green fee revenue. See the real cost breakdown.',
    badge: 'Most searched',
    badgeColor: '#C9963B',
  },
  {
    href: '/compare/clubv1',
    competitor: 'ClubV1',
    headline: 'rungolf.club vs ClubV1',
    summary: 'ClubV1 is owned by ClearCourse, a PE-backed software consolidator. rungolf.club is independently owned with published flat pricing from €79/month.',
    badge: null,
    badgeColor: null,
  },
  {
    href: '/compare/intelligent-golf',
    competitor: 'Intelligent Golf',
    headline: 'rungolf.club vs Intelligent Golf',
    summary: 'Intelligent Golf is built for large operations with enterprise pricing. rungolf.club is built for independent clubs — simple, modern, and affordable.',
    badge: null,
    badgeColor: null,
  },
  {
    href: '/compare/golfmanager',
    competitor: 'GolfManager',
    headline: 'rungolf.club vs GolfManager',
    summary: 'GolfManager is a well-reviewed global platform built for resorts and hotels. rungolf.club is purpose-built for independent member clubs — at half the price.',
    badge: null,
    badgeColor: null,
  },
];

const SWITCHING_REASONS = [
  {
    title: 'GolfNow tee time extraction',
    description: 'Clubs on BRS Golf surrender one tee time per day to GolfNow. At average green fees, that\'s €10,000–€18,000 per year in lost revenue — paid in inventory, not cash.',
  },
  {
    title: 'PE ownership and pricing pressure',
    description: 'Most golf club software is owned by private equity-backed consolidators. Prices rise after acquisition, support quality drops, and the software stops serving clubs.',
  },
  {
    title: 'Legacy interfaces on mobile',
    description: 'Members expect to book on their phone in under 60 seconds. Most existing golf club software was designed for desktop browsers a decade ago.',
  },
  {
    title: 'Opaque, per-member pricing',
    description: 'Many providers charge per member or per booking. As your membership grows, so does your software bill. rungolf.club is flat rate regardless of member count.',
  },
];

export default function ComparePage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4" style={{ backgroundColor: '#1B3A2B' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#C9963B' }}>
            Software comparisons
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5 text-balance leading-tight">
            Why clubs are switching to rungolf.club
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto text-balance">
            Independent, modern, and transparent — see how rungolf.club compares
            to the software most Irish and UK clubs are currently paying for.
          </p>
        </div>
      </section>

      {/* Comparison cards */}
      <section className="py-16 px-4" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {COMPARISONS.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-green/30 hover:shadow-md transition-all flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <h2 className="font-display text-lg font-bold group-hover:text-green transition-colors" style={{ color: '#1B3A2B' }}>
                    {c.headline}
                  </h2>
                  {c.badge && (
                    <span className="shrink-0 ml-2 text-xs font-semibold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: c.badgeColor ?? '#C9963B' }}>
                      {c.badge}
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{c.summary}</p>
                <span className="mt-4 text-sm font-semibold group-hover:underline" style={{ color: '#2D6A4F' }}>
                  See full comparison →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why clubs are switching */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-10 text-center" style={{ color: '#1B3A2B' }}>
            The four reasons clubs switch to rungolf.club
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {SWITCHING_REASONS.map((r) => (
              <div key={r.title} className="bg-gray-50 rounded-2xl p-6">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mb-4 text-sm font-bold shrink-0"
                  style={{ backgroundColor: '#1B3A2B', color: '#C9963B' }}
                >
                  ✓
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#1B3A2B' }}>{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center" style={{ backgroundColor: '#1B3A2B' }}>
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready to see it yourself?
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
