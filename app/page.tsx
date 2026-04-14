import type { Metadata } from "next";
import Link from "next/link";
import { HeroVisual } from "@/components/sections/hero-visual";
import { FeaturesGrid } from "@/components/sections/features-grid";

export const metadata: Metadata = {
  title: "rungolf.club — Modern Golf Club Management Software",
  description:
    "Tee sheets, competitions, and winter handicap management for independent member clubs. Flat transparent pricing. No tee time extraction deals.",
  alternates: { canonical: "/" },
};

const VALUE_PROPS = [
  {
    icon: "🏛️",
    title: "Independent",
    description:
      "No PE ownership. No GolfNow tee time extraction. Your members book directly with your club — and it stays that way. Forever.",
  },
  {
    icon: "💷",
    title: "Affordable",
    description:
      "From €79/month. Flat pricing, no per-member fees, no booking commissions. You know exactly what you pay every month.",
  },
  {
    icon: "⚡",
    title: "Modern",
    description:
      "Built in 2024 for how clubs actually work today. Mobile-first member app, real-time tee sheet, automated competition management.",
  },
];

const STATS = [
  { value: "50–70%", label: "cheaper than BRS Golf" },
  { value: "24/7", label: "dedicated support" },
  { value: "< 2 weeks", label: "to go live" },
];

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
        style={{ backgroundColor: "#1B3A2B" }}
      >
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(45,106,79,0.5) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance"
            >
              Run your club,{" "}
              <span style={{ color: "#C9963B" }}>not your spreadsheets.</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-8 max-w-lg text-balance leading-relaxed">
              rungolf.club is modern golf club management software — tee sheets,
              competitions, handicaps and payments, all in one place. Built for member
              clubs that deserve better than 20-year-old software and backdoor tee time deals.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-semibold text-white transition-opacity hover:opacity-90 text-base"
                style={{ backgroundColor: "#C9963B" }}
              >
                Book a demo
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg font-semibold border transition-colors text-base"
                style={{
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "white",
                }}
              >
                See the features
              </Link>
            </div>
          </div>

          {/* Right: tee sheet illustration */}
          <div className="hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section style={{ backgroundColor: "#C9963B" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
            {STATS.map((s) => (
              <div key={s.label} className="flex items-center gap-3 py-4 sm:py-0 sm:px-8 first:pl-0 last:pr-0">
                <span className="font-display text-2xl font-bold text-white">
                  {s.value}
                </span>
                <span className="text-white/80 text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem section ── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-display text-3xl sm:text-4xl font-bold mb-6 text-balance"
            style={{ color: "#1B3A2B" }}
          >
            Your members deserve better. So does your committee.
          </h2>
          <div className="text-gray-600 text-lg leading-relaxed space-y-4">
            <p>
              Most golf club software was built in the early 2000s and hasn&apos;t changed much since.
              It&apos;s clunky, expensive, and owned by private equity firms or media companies with their
              own agenda.
            </p>
            <p>
              BRS Golf hands one free tee time per day to GolfNow — costing busy clubs thousands in
              lost green fee revenue every year. ClubV1 and Intelligent Golf are both owned by the same
              PE house. HandicapMaster is still desktop software.
            </p>
            <p>
              Meanwhile, your secretary is managing winter handicaps on a spreadsheet and chasing
              members for competition fees by email.
            </p>
            <p className="font-semibold" style={{ color: "#1B3A2B" }}>There&apos;s a better way.</p>
          </div>
        </div>
      </section>

      {/* ── Value proposition ── */}
      <section className="py-24 px-4" style={{ backgroundColor: "#F5F0E8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="font-display text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "#1B3A2B" }}
            >
              Built for clubs that want independence
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto text-balance">
              Most golf club software is owned by GolfNow, private equity, or companies
              that profit from your members' data. We're not.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {VALUE_PROPS.map((prop) => (
              <div
                key={prop.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="text-3xl mb-4">{prop.icon}</div>
                <h3
                  className="font-display text-xl font-bold mb-3"
                  style={{ color: "#1B3A2B" }}
                >
                  {prop.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features grid ── */}
      <div id="features">
        <FeaturesGrid />
      </div>

      {/* ── Bottom CTA ── */}
      <section
        className="py-20 px-4 text-center"
        style={{ backgroundColor: "#1B3A2B" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
            Ready to make the switch?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Every club gets a free 3-month pilot. No card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-white text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9963B" }}
            >
              Start Free Pilot
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border text-white text-base transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.3)" }}
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
