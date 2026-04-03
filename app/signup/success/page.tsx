import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Welcome to rungolf.club — Setup in Progress',
  robots: { index: false },
};

export default function SignupSuccessPage() {
  const steps = [
    { num: 1, title: 'Confirm your email', desc: 'Click the magic link we just sent you to verify your email address.' },
    { num: 2, title: 'Complete your setup', desc: 'Log into your dashboard and follow the setup wizard — course config, invite your team, import members.' },
    { num: 3, title: 'Go live', desc: 'We\'ll schedule a 30-minute walk-through with your pro shop staff. Most clubs are live within 2 weeks.' },
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 px-4" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="max-w-lg mx-auto text-center">
        {/* Success icon */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-6"
          style={{ backgroundColor: '#1B3A2B' }}
        >
          🏌️
        </div>

        <h1 className="font-display text-3xl font-bold mb-3" style={{ color: '#1B3A2B' }}>
          Welcome to rungolf.club!
        </h1>
        <p className="text-gray-600 mb-10">
          Your club is being set up. Check your email — your login link is on its way.
        </p>

        {/* Steps */}
        <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50 text-left mb-8">
          {steps.map(s => (
            <div key={s.num} className="flex items-start gap-4 px-6 py-5">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                style={{ backgroundColor: '#C9963B', color: 'white' }}
              >
                {s.num}
              </div>
              <div>
                <p className="font-semibold text-sm mb-0.5" style={{ color: '#1B3A2B' }}>{s.title}</p>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-sm mb-6">
          Didn't get an email? Check your spam folder or{' '}
          <Link href="/support" className="underline" style={{ color: '#2D6A4F' }}>contact support</Link>.
        </p>

        <Link
          href="/"
          className="text-sm font-medium"
          style={{ color: '#2D6A4F' }}
        >
          ← Back to rungolf.club
        </Link>
      </div>
    </main>
  );
}
