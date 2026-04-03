import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golf Club Management Software Ireland & UK | rungolf.club",
  description:
    "Modern golf club management software for Irish and UK clubs. Tee sheet, competition management, member booking and cashless payments — at 50-70% less than BRS Golf.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <section className="min-h-screen flex items-center justify-center bg-forest text-white">
        <div className="text-center px-4">
          <p className="text-gold font-display text-sm uppercase tracking-widest mb-4">
            rungolf.club
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-balance">
            Golf club software that works for you. Not GolfNow.
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Modern tee sheet, competition management and member booking —
            at 50-70% less than what Irish and UK clubs pay today.
          </p>
        </div>
      </section>
    </main>
  );
}
