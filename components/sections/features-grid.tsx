import Link from 'next/link';

const FEATURES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="24" height="20" rx="3" stroke="#2D6A4F" strokeWidth="2" fill="none"/>
        <line x1="2" y1="10" x2="26" y2="10" stroke="#2D6A4F" strokeWidth="2"/>
        <line x1="9" y1="4" x2="9" y2="10" stroke="#2D6A4F" strokeWidth="2"/>
        <rect x="6" y="14" width="4" height="4" rx="1" fill="#C9963B"/>
        <rect x="12" y="14" width="4" height="4" rx="1" fill="#2D6A4F"/>
        <rect x="18" y="14" width="4" height="4" rx="1" fill="#2D6A4F"/>
      </svg>
    ),
    title: 'Tee Sheet Management',
    description:
      'Real-time availability, automated slot generation, visitor booking, and pro shop controls — all from one screen.',
    href: '/features/tee-sheet',
    keyword: 'tee sheet management software',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="11" stroke="#2D6A4F" strokeWidth="2" fill="none"/>
        <path d="M14 8v6l4 3" stroke="#C9963B" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="2" fill="#2D6A4F"/>
      </svg>
    ),
    title: 'Competition Management',
    description:
      'Automated sheet opens, entry fee collection, waiting lists, and instant member notifications — no manual work.',
    href: '/features/competitions',
    keyword: 'golf competition management software',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="8" y="2" width="12" height="22" rx="3" stroke="#2D6A4F" strokeWidth="2" fill="none"/>
        <line x1="11" y1="7" x2="17" y2="7" stroke="#2D6A4F" strokeWidth="1.5"/>
        <line x1="11" y1="11" x2="17" y2="11" stroke="#C9963B" strokeWidth="1.5"/>
        <circle cx="14" cy="20" r="1.5" fill="#2D6A4F"/>
      </svg>
    ),
    title: 'Member App',
    description:
      'Booking, competition entry, purse top-up, and handicap display — all from any device, no app store required.',
    href: '/features/member-app',
    keyword: 'golf club member booking app',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="7" width="22" height="15" rx="3" stroke="#2D6A4F" strokeWidth="2" fill="none"/>
        <circle cx="14" cy="14" r="4" stroke="#C9963B" strokeWidth="2" fill="none"/>
        <circle cx="14" cy="14" r="1.5" fill="#C9963B"/>
      </svg>
    ),
    title: 'Member Purse & Payments',
    description:
      'Cashless club payments via pre-loaded member purse. Stripe-powered top-ups. No e-money licence headaches.',
    href: '/features/payments',
    keyword: 'golf club cashless payments',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4L17 10H23L18 14L20 20L14 16L8 20L10 14L5 10H11L14 4Z" stroke="#2D6A4F" strokeWidth="2" fill="none" strokeLinejoin="round"/>
        <path d="M14 9L15.5 12H18.5L16 13.5L17 16.5L14 14.5L11 16.5L12 13.5L9.5 12H12.5L14 9Z" fill="#C9963B"/>
      </svg>
    ),
    title: 'Winter Handicap Management',
    description:
      'Automatic WHS snapshot, frozen winter index, manual adjustments with audit trail — no spreadsheets, no errors.',
    href: '/features/handicaps',
    keyword: 'golf winter handicap management',
    badge: 'Key differentiator',
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#C9963B' }}
          >
            Everything your club needs
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: '#1B3A2B' }}
          >
            One platform. Every tool your club needs.
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From the tee sheet to competitions to payments — rungolf.club replaces
            the patchwork of tools most clubs are stuck with.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="group block bg-white border border-gray-100 rounded-2xl p-7 hover:border-green/30 hover:shadow-md transition-all relative overflow-hidden"
            >
              {'badge' in f && f.badge && (
                <span
                  className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: '#C9963B', color: '#fff' }}
                >
                  {f.badge}
                </span>
              )}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: '#F5F0E8' }}
              >
                {f.icon}
              </div>
              <h3
                className="font-display text-lg font-bold mb-2 group-hover:text-green transition-colors"
                style={{ color: '#1B3A2B' }}
              >
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {f.description}
              </p>
              <span
                className="text-sm font-semibold group-hover:underline"
                style={{ color: '#2D6A4F' }}
              >
                Learn more →
              </span>
            </Link>
          ))}

          {/* CTA card */}
          <div
            className="rounded-2xl p-7 flex flex-col justify-between"
            style={{ backgroundColor: '#1B3A2B' }}
          >
            <div>
              <p className="text-white/50 text-xs uppercase tracking-wide mb-2">Pricing</p>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                From €79/month
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Flat pricing. No per-member fees, no booking commissions, no hidden costs.
              </p>
            </div>
            <Link
              href="/pricing"
              className="mt-6 inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#C9963B', color: '#fff' }}
            >
              See all plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
