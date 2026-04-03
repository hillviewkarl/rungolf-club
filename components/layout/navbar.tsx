'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  {
    label: 'Features',
    href: '/features/tee-sheet',
    dropdown: [
      { label: 'Tee Sheet', href: '/features/tee-sheet' },
      { label: 'Competitions', href: '/features/competitions' },
      { label: 'Member App', href: '/features/member-app' },
      { label: 'Payments & Purse', href: '/features/payments' },
      { label: 'Winter Handicaps', href: '/features/handicaps' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'Compare',
    href: '/compare',
    dropdown: [
      { label: 'vs BRS Golf', href: '/compare/brs-golf' },
      { label: 'vs ClubV1', href: '/compare/clubv1' },
      { label: 'vs Intelligent Golf', href: '/compare/intelligent-golf' },
    ],
  },
  { label: 'Support', href: '/support' },
  { label: 'Blog', href: '/blog' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setMobileOpen(false);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled || mobileOpen
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setMobileOpen(false)}>
            <LogoMark />
            <span
              className="font-display font-bold text-lg leading-none"
              style={{ color: scrolled || mobileOpen ? '#1B3A2B' : 'white' }}
            >
              rungolf.club
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(item => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    scrolled
                      ? 'text-gray-700 hover:text-forest'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <span className="ml-1 text-xs opacity-60">▾</span>
                  )}
                </Link>

                {item.dropdown && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 z-50">
                    {item.dropdown.map(d => (
                      <Link
                        key={d.href}
                        href={d.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-cream hover:text-forest transition-colors"
                      >
                        {d.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className={`text-sm font-medium px-4 py-2 rounded-lg border transition-colors ${
                scrolled
                  ? 'border-forest/30 text-forest hover:border-forest'
                  : 'border-white/40 text-white hover:border-white'
              }`}
            >
              Club Login
            </Link>
            <Link
              href="/signup"
              className="text-sm font-semibold px-4 py-2 rounded-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#C9963B', color: '#fff' }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-0.5 mb-1 transition-all"
              style={{ backgroundColor: scrolled || mobileOpen ? '#1B3A2B' : 'white' }}
            />
            <span
              className="block w-5 h-0.5 mb-1 transition-all"
              style={{ backgroundColor: scrolled || mobileOpen ? '#1B3A2B' : 'white' }}
            />
            <span
              className="block w-5 h-0.5 transition-all"
              style={{ backgroundColor: scrolled || mobileOpen ? '#1B3A2B' : 'white' }}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-1">
          {NAV_LINKS.map(item => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block px-3 py-2.5 text-sm font-medium text-forest rounded-lg hover:bg-cream transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.dropdown && (
                <div className="pl-4 mt-1 space-y-1">
                  {item.dropdown.map(d => (
                    <Link
                      key={d.href}
                      href={d.href}
                      className="block px-3 py-2 text-sm text-gray-500 hover:text-forest rounded-lg hover:bg-cream transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {d.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <Link
              href="/login"
              className="block text-center px-4 py-2.5 text-sm font-medium text-forest border border-forest/30 rounded-lg hover:border-forest transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Club Login
            </Link>
            <Link
              href="/signup"
              className="block text-center px-4 py-2.5 text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#C9963B', color: '#fff' }}
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="14" fill="#C9963B" />
      <path
        d="M9 20 C9 14 11 10 14 10 C17 10 19 14 19 20"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="14" cy="8" r="2" fill="white" />
    </svg>
  );
}
