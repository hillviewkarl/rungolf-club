import Link from 'next/link';

interface Benefit {
  title: string;
  description: string;
}

interface Props {
  eyebrow: string;
  headline: string;
  subheadline: string;
  problem: string;
  solution: string;
  benefits: Benefit[];
  visual: React.ReactNode;
  ctaLabel?: string;
}

export function FeaturePageLayout({
  eyebrow,
  headline,
  subheadline,
  problem,
  solution,
  benefits,
  visual,
  ctaLabel = 'Start Free Pilot',
}: Props) {
  return (
    <main>
      {/* Hero */}
      <section
        className="pt-32 pb-20 px-4"
        style={{ backgroundColor: '#1B3A2B' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#C9963B' }}
          >
            {eyebrow}
          </p>
          <h1
            className="font-display text-4xl sm:text-5xl font-bold text-white mb-5 text-balance leading-tight"
          >
            {headline}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto text-balance">
            {subheadline}
          </p>
        </div>
      </section>

      {/* Visual */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: '#F5F0E8' }}
      >
        <div className="max-w-5xl mx-auto">
          {visual}
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2
              className="font-display text-2xl font-bold mb-4"
              style={{ color: '#1B3A2B' }}
            >
              The problem clubs face today
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">{problem}</p>
          </div>
          <div>
            <h2
              className="font-display text-2xl font-bold mb-4"
              style={{ color: '#1B3A2B' }}
            >
              How rungolf.club solves it
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">{solution}</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-display text-2xl sm:text-3xl font-bold mb-10 text-center"
            style={{ color: '#1B3A2B' }}
          >
            What you get
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-2xl p-6 border border-gray-100"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mb-4 text-sm font-bold"
                  style={{ backgroundColor: '#1B3A2B', color: '#C9963B' }}
                >
                  ✓
                </div>
                <h3
                  className="font-display text-lg font-bold mb-2"
                  style={{ color: '#1B3A2B' }}
                >
                  {b.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-4 text-center"
        style={{ backgroundColor: '#1B3A2B' }}
      >
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready to see it in action?
          </h2>
          <p className="text-white/60 mb-8">
            Every club gets a free 3-month pilot. No card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#C9963B' }}
            >
              {ctaLabel}
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
