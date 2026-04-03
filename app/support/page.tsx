import type { Metadata } from 'next';
import Link from 'next/link';
import { SupportFaq } from './_components/support-faq';

export const metadata: Metadata = {
  title: 'Golf Club Software Support & Onboarding | rungolf.club',
  description:
    '24/7 dedicated support for every rungolf.club club. Real people, not a chatbot. Named support contact, video onboarding, and a go-live guarantee.',
  alternates: { canonical: '/support' },
};

const CHANNELS = [
  {
    icon: '✉️',
    title: 'Email',
    detail: 'hello@rungolf.club',
    response: 'Response within 1 hour',
    href: 'mailto:hello@rungolf.club',
  },
  {
    icon: '💬',
    title: 'WhatsApp / Phone',
    detail: 'Available 24/7 for urgent issues',
    response: 'For anything time-sensitive',
    href: 'https://wa.me/353000000000',
  },
  {
    icon: '📹',
    title: 'Video Call',
    detail: 'Included for every new club',
    response: 'Scheduled at your convenience',
    href: 'mailto:hello@rungolf.club?subject=Book onboarding call',
  },
];

const PHASES = [
  {
    num: 1,
    title: 'Setup call',
    description:
      "We schedule a 30-minute call and configure your tee sheet together — course details, tee intervals, competition settings. You don't need to know anything technical.",
  },
  {
    num: 2,
    title: 'Member import',
    description:
      'Send us your member list as a CSV or spreadsheet. We import everyone, set up their accounts, and send them a welcome email with their login link.',
  },
  {
    num: 3,
    title: 'Go live training',
    description:
      'A 30-minute walkthrough for your pro shop staff — how to manage the tee sheet, run competitions, and handle bookings day-to-day. Usually done in one session.',
  },
];

export default function SupportPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 text-center" style={{ backgroundColor: '#1B3A2B' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#C9963B' }}>
            Support & Onboarding
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5 text-balance leading-tight">
            24/7 dedicated support.{' '}
            <span style={{ color: '#C9963B' }}>Real people. Not a chatbot.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto text-balance">
            Every rungolf.club club has a named support contact. We answer within the hour,
            any time of day — including during your Saturday morning competition.
          </p>
        </div>
      </section>

      {/* Support channels */}
      <section className="py-16 px-4" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-10 text-center" style={{ color: '#1B3A2B' }}>
            How to reach us
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {CHANNELS.map(c => (
              <a
                key={c.title}
                href={c.href}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-green/30 hover:shadow-md transition-all block"
              >
                <div className="text-3xl mb-4">{c.icon}</div>
                <h3 className="font-display text-lg font-bold mb-1 group-hover:text-green transition-colors" style={{ color: '#1B3A2B' }}>
                  {c.title}
                </h3>
                <p className="font-medium text-sm mb-1" style={{ color: '#2D6A4F' }}>{c.detail}</p>
                <p className="text-gray-400 text-xs">{c.response}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How we onboard you */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3" style={{ color: '#1B3A2B' }}>
              How we onboard your club
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Most clubs are live within two weeks. Here's exactly what happens.
            </p>
          </div>
          <div className="relative">
            {/* Connector line */}
            <div className="hidden sm:block absolute left-[2.25rem] top-10 bottom-10 w-0.5" style={{ backgroundColor: '#e5e7eb' }} />
            <div className="space-y-8">
              {PHASES.map(p => (
                <div key={p.num} className="flex gap-6 items-start">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shrink-0 relative z-10"
                    style={{ backgroundColor: '#1B3A2B', color: '#C9963B' }}
                  >
                    {p.num}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-display text-lg font-bold mb-2" style={{ color: '#1B3A2B' }}>
                      {p.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-4" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="text-4xl mb-4">🏌️</div>
            <h2 className="font-display text-2xl font-bold mb-3" style={{ color: '#1B3A2B' }}>
              The go-live guarantee
            </h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              If you&apos;re not live and confident within 2 weeks of starting your pilot,
              your first month is free. No questions asked.
            </p>
            <p className="text-gray-400 text-sm">
              We&apos;ve never had to honour it — but it&apos;s there because we mean it.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <SupportFaq />

      {/* CTA */}
      <section className="py-20 px-4 text-center" style={{ backgroundColor: '#1B3A2B' }}>
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-white/60 mb-8">
            Free 3-month pilot. We handle the setup. No card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#C9963B' }}
            >
              Start Free Pilot
            </Link>
            <a
              href="mailto:hello@rungolf.club"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold border text-white transition-colors"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            >
              Email us first
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
