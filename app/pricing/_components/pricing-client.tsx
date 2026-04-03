'use client';

import { useState } from 'react';
import Link from 'next/link';

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 79,
    annualPrice: 66,
    description: 'Perfect for smaller clubs getting started with digital booking.',
    features: [
      'Tee sheet management',
      'Member booking app',
      'Up to 150 members',
      'Competition management',
      'Email notifications',
      'Standard support (business hours)',
    ],
    notIncluded: [
      'Member purse & cashless payments',
      'Winter handicap management',
      'Priority 24/7 support',
      'Custom onboarding session',
    ],
    popular: false,
    ctaLabel: 'Start Free Pilot',
  },
  {
    id: 'club',
    name: 'Club',
    monthlyPrice: 149,
    annualPrice: 124,
    description: 'Everything most clubs need. The most popular choice.',
    features: [
      'Everything in Starter',
      'Unlimited members',
      'Member purse & cashless payments',
      'Winter handicap management',
      'Waiting list automation',
      'Stripe Connect payments',
      '24/7 dedicated support',
      'Custom onboarding session',
    ],
    notIncluded: [
      'Multi-course management',
      'Advanced reporting & analytics',
    ],
    popular: true,
    ctaLabel: 'Start Free Pilot',
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: 249,
    annualPrice: 207,
    description: 'For larger clubs with multiple courses or complex requirements.',
    features: [
      'Everything in Club',
      'Multi-course / multi-sheet management',
      'Advanced reporting & analytics',
      'Custom member categories',
      'Bulk competition import',
      'Priority support with named contact',
      'Quarterly review calls',
    ],
    notIncluded: [],
    popular: false,
    ctaLabel: 'Start Free Pilot',
  },
];

const MATRIX_FEATURES = [
  { feature: 'Tee sheet management', starter: true, club: true, pro: true },
  { feature: 'Member booking app', starter: true, club: true, pro: true },
  { feature: 'Competition management', starter: true, club: true, pro: true },
  { feature: 'Email notifications', starter: true, club: true, pro: true },
  { feature: 'Members', starter: 'Up to 150', club: 'Unlimited', pro: 'Unlimited' },
  { feature: 'Member purse & cashless payments', starter: false, club: true, pro: true },
  { feature: 'Winter handicap management', starter: false, club: true, pro: true },
  { feature: 'Waiting list automation', starter: false, club: true, pro: true },
  { feature: 'Stripe Connect payments', starter: false, club: true, pro: true },
  { feature: 'Multi-course management', starter: false, club: false, pro: true },
  { feature: 'Advanced reporting', starter: false, club: false, pro: true },
  { feature: 'Custom onboarding session', starter: false, club: true, pro: true },
  { feature: 'Support', starter: 'Business hours', club: '24/7 dedicated', pro: 'Priority + named contact' },
  { feature: 'Quarterly review calls', starter: false, club: false, pro: true },
];

const FAQ = [
  {
    q: 'How much does golf club software cost in Ireland?',
    a: 'Golf club management software in Ireland typically ranges from "free" (BRS Golf, which extracts tee times worth €10,000–€18,000/year) to €300+/month for enterprise platforms. rungolf.club starts at €79/month with no hidden fees — the real cost is the monthly subscription and nothing else.',
  },
  {
    q: 'Is there a setup fee?',
    a: 'No. There are no setup fees, no implementation charges, and no onboarding costs. Every club gets a free guided setup call, member import, and staff walkthrough as part of the subscription.',
  },
  {
    q: 'Can I cancel any time?',
    a: 'Yes. Monthly subscriptions can be cancelled at any time with no penalty. Annual subscriptions are billed yearly and are non-refundable after the billing date, but you can cancel renewal at any time.',
  },
  {
    q: 'Do you charge per member?',
    a: 'No. Starter plans support up to 150 members. Club and Pro plans are unlimited — your bill stays the same whether you have 200 or 2,000 members.',
  },
  {
    q: 'What happens to my data if I cancel?',
    a: "Your data remains in the system for 90 days after cancellation. You can export your member list, booking history, and ledger records at any time during that window. After 90 days, data is permanently deleted from our servers.",
  },
  {
    q: 'How does the BRS Golf free tee time deal actually cost clubs?',
    a: 'BRS Golf is provided "free" in exchange for one tee time per day, which GolfNow lists on their marketplace. At an average green fee of €45 in Ireland, that\'s 365 × €45 = €16,425/year in surrendered revenue — paid in inventory, not cash. See our full breakdown on the BRS Golf comparison page.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <circle cx="8" cy="8" r="8" fill="#dcfce7" />
      <path d="M4.5 8l2.5 2.5 4-4.5" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <circle cx="8" cy="8" r="8" fill="#f3f4f6" />
      <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function TableCell({ value }: { value: boolean | string }) {
  if (value === true) return <CheckIcon />;
  if (value === false) return <CrossIcon />;
  return <span className="text-xs text-gray-600">{value}</span>;
}

export function PricingClient() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 text-center" style={{ backgroundColor: '#1B3A2B' }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#C9963B' }}>
            Pricing
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4 text-balance">
            Simple, honest pricing
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
            No per-member fees. No booking commissions. No hidden costs.
            Just a flat monthly rate.
          </p>

          {/* Annual/monthly toggle */}
          <div className="inline-flex items-center gap-3 bg-white/10 rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
              style={!annual ? { backgroundColor: 'white', color: '#1B3A2B' } : { color: 'rgba(255,255,255,0.7)' }}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center gap-2"
              style={annual ? { backgroundColor: 'white', color: '#1B3A2B' } : { color: 'rgba(255,255,255,0.7)' }}
            >
              Annual
              <span className="text-xs px-1.5 py-0.5 rounded-full font-semibold" style={{ backgroundColor: '#C9963B', color: 'white' }}>
                2 months free
              </span>
            </button>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="px-4 pb-16 -mt-4" style={{ backgroundColor: '#1B3A2B' }}>
          <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className="relative rounded-2xl overflow-hidden flex flex-col"
                style={{
                  backgroundColor: plan.popular ? '#C9963B' : 'white',
                  boxShadow: plan.popular ? '0 20px 60px rgba(0,0,0,0.3)' : undefined,
                  transform: plan.popular ? 'translateY(-8px)' : undefined,
                }}
              >
                {plan.popular && (
                  <div className="text-center py-2 text-xs font-bold uppercase tracking-widest text-white/80">
                    ★ Most Popular
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1">
                  <h2
                    className="font-display text-xl font-bold mb-1"
                    style={{ color: plan.popular ? 'white' : '#1B3A2B' }}
                  >
                    {plan.name}
                  </h2>
                  <p
                    className="text-sm mb-5"
                    style={{ color: plan.popular ? 'rgba(255,255,255,0.75)' : '#6b7280' }}
                  >
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span
                      className="font-display text-4xl font-bold"
                      style={{ color: plan.popular ? 'white' : '#1B3A2B' }}
                    >
                      €{annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span
                      className="text-sm ml-1"
                      style={{ color: plan.popular ? 'rgba(255,255,255,0.65)' : '#9ca3af' }}
                    >
                      /month
                    </span>
                    {annual && (
                      <p
                        className="text-xs mt-1"
                        style={{ color: plan.popular ? 'rgba(255,255,255,0.6)' : '#9ca3af' }}
                      >
                        Billed €{plan.annualPrice * 12}/year
                      </p>
                    )}
                  </div>

                  <ul className="space-y-2.5 mb-6 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm"
                        style={{ color: plan.popular ? 'rgba(255,255,255,0.9)' : '#374151' }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
                          <circle cx="8" cy="8" r="8" fill={plan.popular ? 'rgba(255,255,255,0.2)' : '#dcfce7'} />
                          <path d="M4.5 8l2.5 2.5 4-4.5" stroke={plan.popular ? 'white' : '#16a34a'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/signup?plan=${plan.id}${annual ? '&interval=annual' : ''}`}
                    className="block text-center px-5 py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
                    style={
                      plan.popular
                        ? { backgroundColor: 'white', color: '#1B3A2B' }
                        : { backgroundColor: '#1B3A2B', color: 'white' }
                    }
                  >
                    {plan.ctaLabel}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-12 px-4" style={{ backgroundColor: '#F5F0E8' }}>
          <div className="max-w-2xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-3 bg-white rounded-2xl px-8 py-5 shadow-sm border border-gray-100"
            >
              <span className="text-3xl">🏌️</span>
              <div className="text-left">
                <p className="font-semibold text-sm" style={{ color: '#1B3A2B' }}>
                  Free 3-month pilot. No card required.
                </p>
                <p className="text-gray-500 text-xs mt-0.5">
                  Every new club gets a full pilot before committing. We set everything up, train your staff, and only ask for payment when you're happy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison matrix */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 text-center" style={{ color: '#1B3A2B' }}>
              Full feature comparison
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm min-w-[500px]">
                <thead>
                  <tr style={{ backgroundColor: '#1B3A2B' }}>
                    <th className="text-left px-6 py-4 text-white/60 font-medium text-xs uppercase tracking-wide">Feature</th>
                    {PLANS.map((p) => (
                      <th key={p.id} className="px-6 py-4 text-center text-xs font-bold uppercase tracking-wide"
                        style={{ color: p.popular ? '#C9963B' : 'rgba(255,255,255,0.7)' }}>
                        {p.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 bg-white">
                  {MATRIX_FEATURES.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'}>
                      <td className="px-6 py-3.5 text-gray-700 font-medium">{row.feature}</td>
                      <td className="px-6 py-3.5 text-center"><TableCell value={row.starter} /></td>
                      <td className="px-6 py-3.5 text-center"><TableCell value={row.club} /></td>
                      <td className="px-6 py-3.5 text-center"><TableCell value={row.pro} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4" style={{ backgroundColor: '#F5F0E8' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 text-center" style={{ color: '#1B3A2B' }}>
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {FAQ.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                  >
                    <span className="font-semibold text-sm" style={{ color: '#1B3A2B' }}>{item.q}</span>
                    <span
                      className="shrink-0 text-lg transition-transform"
                      style={{
                        color: '#C9963B',
                        transform: openFaq === i ? 'rotate(45deg)' : 'none',
                      }}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 text-center" style={{ backgroundColor: '#1B3A2B' }}>
          <div className="max-w-xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Start your free pilot today
            </h2>
            <p className="text-white/60 mb-8">
              No card required. We set everything up and train your staff before you pay a penny.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-white text-base transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#C9963B' }}
              >
                Start Free Pilot
              </Link>
              <Link
                href="/compare/brs-golf"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border text-white text-base transition-colors"
                style={{ borderColor: 'rgba(255,255,255,0.3)' }}
              >
                Compare vs BRS Golf
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
