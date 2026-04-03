import type { Metadata } from 'next';
import Link from 'next/link';
import { ComparisonTable } from '@/components/sections/comparison-table';

export const metadata: Metadata = {
  title: 'BRS Golf Alternative for Irish & UK Clubs | rungolf.club',
  description:
    'Looking for a BRS Golf alternative? rungolf.club gives Irish and UK clubs a modern tee sheet without GolfNow tee time extraction. 50-70% cheaper.',
  alternates: { canonical: '/compare/brs-golf' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does the BRS Golf free tee time deal actually cost clubs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BRS Golf offers "free" software in exchange for one tee time per day, which GolfNow sells on their platform. At an average green fee of £35–£50 in the UK and €30–€45 in Ireland, that is worth £12,775–£18,250 (or €10,950–€16,425) per year — paid in tee times, not cash. Clubs also lose control over who books those slots and at what price.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is BRS Golf owned by GolfNow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BRS Golf was acquired by GolfNow (owned by NBC Sports Group / Comcast) in 2016. The "free" software model is structured to funnel tee time inventory onto the GolfNow marketplace.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I switch from BRS Golf to rungolf.club?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. rungolf.club includes a full onboarding service — we import your member list, configure your tee sheet, and walk your pro shop team through the system. Most clubs are live within two weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does rungolf.club cost compared to BRS Golf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'rungolf.club starts from €79/month (flat rate, no hidden fees). BRS Golf is nominally "free" but the one-tee-time-per-day arrangement is equivalent to £10,000–£18,000 per year in surrendered green fee revenue for most clubs.',
      },
    },
  ],
};

const rows = [
  { feature: 'Monthly cost', rungolf: 'From €79/mo', competitor: '"Free"', highlight: true },
  { feature: 'Tee time extraction by GolfNow', rungolf: false, competitor: true, highlight: true },
  { feature: 'PE / GolfNow ownership', rungolf: false, competitor: true, highlight: true },
  { feature: 'Real cost (tee time equivalent)', rungolf: '€79–€249/mo', competitor: '€900–€1,500/mo', highlight: true },
  { feature: 'Modern mobile-first member app', rungolf: true, competitor: false },
  { feature: 'Automated competition management', rungolf: true, competitor: true },
  { feature: 'Member purse / cashless payments', rungolf: true, competitor: false },
  { feature: 'Winter handicap management', rungolf: true, competitor: false },
  { feature: 'Waiting list automation', rungolf: true, competitor: true },
  { feature: 'Setup in under 2 weeks', rungolf: true, competitor: false },
  { feature: '24/7 dedicated support contact', rungolf: true, competitor: false },
  { feature: 'Flat pricing (no per-member fees)', rungolf: true, competitor: false },
  { feature: 'Funds go to club Stripe account', rungolf: true, competitor: 'Via GolfNow' },
];

export default function BrsGolfComparePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 px-4" style={{ backgroundColor: '#1B3A2B' }}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#C9963B' }}>
              BRS Golf alternative
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5 text-balance leading-tight">
              The BRS Golf alternative that doesn't extract your tee times
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto text-balance">
              BRS Golf is "free" — but GolfNow takes one tee time per day. At average green fees,
              that's worth €10,000–€18,000 per year in surrendered revenue.
            </p>
          </div>
        </section>

        {/* The real cost explainer */}
        <section className="py-16 px-4" style={{ backgroundColor: '#F5F0E8' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1B3A2B' }}>
              What the "free tee time" deal actually costs your club
            </h2>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 mb-8">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold font-display mb-1" style={{ color: '#1B3A2B' }}>1</p>
                  <p className="text-sm text-gray-500">tee time surrendered per day to GolfNow</p>
                </div>
                <div>
                  <p className="text-3xl font-bold font-display mb-1" style={{ color: '#C9963B' }}>365</p>
                  <p className="text-sm text-gray-500">tee times per year handed over</p>
                </div>
                <div>
                  <p className="text-3xl font-bold font-display mb-1" style={{ color: '#dc2626' }}>€16,000+</p>
                  <p className="text-sm text-gray-500">equivalent value at €45 avg green fee</p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              BRS Golf was acquired by GolfNow (owned by NBC Sports / Comcast) in 2016. The software is provided
              free in exchange for one tee time per day, which GolfNow lists on their marketplace. Clubs lose
              control over who books that slot, at what price, and whether discounting undermines their own
              direct pricing.
            </p>
            <p className="text-gray-600 leading-relaxed">
              rungolf.club charges a flat monthly fee — from €79/month — and never touches your tee sheet
              inventory. Your members book directly with your club. That's how it should work.
            </p>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-8 text-center" style={{ color: '#1B3A2B' }}>
              rungolf.club vs BRS Golf — feature by feature
            </h2>
            <ComparisonTable competitorName="BRS Golf" rows={rows} />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4" style={{ backgroundColor: '#F5F0E8' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-8" style={{ color: '#1B3A2B' }}>
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((item) => (
                <div key={item.name} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 text-center" style={{ backgroundColor: '#1B3A2B' }}>
          <div className="max-w-xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Ready to stop paying in tee times?
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
    </>
  );
}
