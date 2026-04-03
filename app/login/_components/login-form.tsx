'use client';

import { useState } from 'react';
import Link from 'next/link';

type State = 'idle' | 'loading' | 'sent' | 'not_found' | 'rate_limited' | 'error';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<State>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state === 'loading') return;
    setState('loading');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json() as { success?: boolean; error?: string; code?: string };

      if (res.status === 404 || data.code === 'not_found') {
        setState('not_found');
      } else if (res.status === 429 || data.code === 'rate_limited') {
        setState('rate_limited');
      } else if (!res.ok) {
        setState('error');
      } else {
        setState('sent');
      }
    } catch {
      setState('error');
    }
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: '#1B3A2B' }}
    >
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <p className="font-display font-bold text-2xl" style={{ color: '#C9963B' }}>
            rungolf.club
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {state === 'sent' ? (
            <div className="text-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mx-auto mb-4"
                style={{ backgroundColor: '#1B3A2B' }}
              >
                <span className="text-white">✓</span>
              </div>
              <h1 className="font-display text-xl font-bold mb-2" style={{ color: '#1B3A2B' }}>
                Check your email
              </h1>
              <p className="text-gray-500 text-sm mb-1">
                Magic link sent to
              </p>
              <p className="font-semibold text-sm mb-6" style={{ color: '#1B3A2B' }}>
                {email}
              </p>
              <p className="text-gray-400 text-xs">
                The link will log you into your club dashboard or member app automatically.
                It expires in 1 hour.
              </p>
              <button
                onClick={() => { setEmail(''); setState('idle'); }}
                className="mt-5 text-xs text-gray-400 hover:text-gray-600 underline transition-colors"
              >
                Use a different email
              </button>
            </div>
          ) : (
            <>
              <h1 className="font-display text-xl font-bold mb-1" style={{ color: '#1B3A2B' }}>
                Welcome back
              </h1>
              <p className="text-gray-500 text-sm mb-6">
                Enter your email to receive a login link.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setState('idle'); }}
                    placeholder="you@yourclub.ie"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green/40 focus:border-green/60 transition-colors"
                    style={{ fontSize: '16px' }}
                  />
                </div>

                {/* Error states */}
                {state === 'not_found' && (
                  <div className="rounded-xl px-4 py-3 text-sm" style={{ backgroundColor: '#fef9c3', color: '#854d0e' }}>
                    We don&apos;t recognise that email. Are you a member of a club on rungolf.club?{' '}
                    <Link href="/signup" className="font-semibold underline">
                      Get started →
                    </Link>
                  </div>
                )}
                {state === 'rate_limited' && (
                  <div className="rounded-xl px-4 py-3 text-sm bg-red-50 text-red-700">
                    Too many attempts — please try again in a few minutes.
                  </div>
                )}
                {state === 'error' && (
                  <div className="rounded-xl px-4 py-3 text-sm bg-red-50 text-red-700">
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="w-full py-3.5 rounded-xl font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                  style={{ backgroundColor: '#1B3A2B' }}
                >
                  {state === 'loading' ? 'Sending…' : 'Send login link'}
                </button>
              </form>

              <p className="text-center text-xs text-gray-400 mt-5">
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="font-semibold underline" style={{ color: '#2D6A4F' }}>
                  Get started →
                </Link>
              </p>
            </>
          )}
        </div>

        <p className="text-center text-white/30 text-xs mt-6">
          No password required. Magic link login only.
        </p>
      </div>
    </main>
  );
}
