import Link from 'next/link';

const COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'Tee Sheet', href: '/features/tee-sheet' },
      { label: 'Competitions', href: '/features/competitions' },
      { label: 'Member App', href: '/features/member-app' },
      { label: 'Payments & Purse', href: '/features/payments' },
      { label: 'Winter Handicaps', href: '/features/handicaps' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    heading: 'Compare',
    links: [
      { label: 'vs BRS Golf', href: '/compare/brs-golf' },
      { label: 'vs ClubV1', href: '/compare/clubv1' },
      { label: 'vs Intelligent Golf', href: '/compare/intelligent-golf' },
      { label: 'All Comparisons', href: '/compare' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Support & Onboarding', href: '/support' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Get Started', href: '/signup' },
      { label: 'Club Login', href: '/login' },
      { label: 'Contact Us', href: 'mailto:hello@rungolf.club' },
    ],
  },
];

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'rungolf.club',
  url: 'https://rungolf.club',
  logo: 'https://rungolf.club/og-image.png',
  description:
    'Golf club management software for Irish and UK golf clubs. Tee sheet, competition management, member booking and cashless payments.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@rungolf.club',
    contactType: 'customer support',
    availableLanguage: 'English',
  },
  areaServed: ['Ireland', 'United Kingdom'],
  sameAs: [],
};

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#1B3A2B' }} className="text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top: logo + columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-display font-bold text-xl mb-2" style={{ color: '#C9963B' }}>
              rungolf.club
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Modern golf club software for Ireland and the UK.
            </p>
            <p className="text-white/40 text-xs mt-3 font-medium uppercase tracking-wide">
              Independent. Not PE-owned.
            </p>
          </div>

          {/* Link columns */}
          {COLUMNS.map(col => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#C9963B' }}>
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} rungolf.club. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Independent golf club software. Not affiliated with GolfNow, BRS Golf, or any PE-owned provider.
          </p>
        </div>
      </div>
    </footer>
  );
}
