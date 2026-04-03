import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Golf Club Management Software Ireland & UK | rungolf.club",
  description:
    "Modern golf club management software for Irish and UK clubs. Tee sheet, competition management, member booking and cashless payments — at 50-70% less than BRS Golf.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      {/* Hero — dark bg so nav stays transparent/white on load */}
      <section
        className="min-h-screen flex items-center justify-center px-4"
        style={{ backgroundColor: '#1B3A2B' }}
      >
        <div className="text-center max-w-3xl">
          <p className="font-display text-sm uppercase tracking-widest mb-5" style={{ color: '#C9963B' }}>
            rungolf.club
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 text-balance leading-tight">
            Golf club software that works for you. Not GolfNow.
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto mb-10 text-balance">
            Modern tee sheet, competition management and member booking —
            at 50–70% less than what Irish and UK clubs pay today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#C9963B' }}
            >
              See Pricing
            </Link>
            <Link
              href="/signup"
              className="px-6 py-3 rounded-lg font-semibold border transition-colors"
              style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
