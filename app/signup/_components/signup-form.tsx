'use client';

import { useState, useEffect, useRef } from 'react';

const PLANS = [
  { id: 'starter', name: 'Starter', monthly: 79, annual: 66 },
  { id: 'club', name: 'Club', monthly: 149, annual: 124 },
  { id: 'pro', name: 'Pro', monthly: 249, annual: 207 },
];

interface FormData {
  clubName: string;
  country: string;
  slug: string;
  firstName: string;
  lastName: string;
  email: string;
  plan: string;
  interval: string;
}

interface Props {
  initialPlan: string;
  initialInterval: string;
}

function slugify(val: string) {
  return val
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 32);
}

export function SignupForm({ initialPlan, initialInterval }: Props) {
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState<FormData>({
    clubName: '',
    country: 'Ireland',
    slug: '',
    firstName: '',
    lastName: '',
    email: '',
    plan: initialPlan,
    interval: initialInterval,
  });
  const [slugStatus, setSlugStatus] = useState<'idle' | 'checking' | 'available' | 'taken'>('idle');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const slugCheckRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-fill slug from club name
  useEffect(() => {
    if (form.clubName && !form.slug) {
      setForm(f => ({ ...f, slug: slugify(form.clubName) }));
    }
  }, [form.clubName, form.slug]);

  // Debounced slug availability check
  useEffect(() => {
    if (!form.slug) { setSlugStatus('idle'); return; }
    setSlugStatus('checking');
    if (slugCheckRef.current) clearTimeout(slugCheckRef.current);
    slugCheckRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/signup/check-slug?slug=${encodeURIComponent(form.slug)}`);
        const data = await res.json() as { available: boolean };
        setSlugStatus(data.available ? 'available' : 'taken');
      } catch {
        setSlugStatus('idle');
      }
    }, 500);
  }, [form.slug]);

  function set(field: keyof FormData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [field]: e.target.value }));
  }

  function step1Valid() {
    return (
      form.clubName.trim() &&
      form.slug.trim() &&
      form.firstName.trim() &&
      form.lastName.trim() &&
      form.email.trim() &&
      slugStatus === 'available'
    );
  }

  async function handleCheckout() {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json() as { checkoutUrl?: string; error?: string };
      if (!res.ok || !data.checkoutUrl) {
        setError(data.error ?? 'Something went wrong. Please try again.');
        return;
      }
      window.location.href = data.checkoutUrl;
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  const selectedPlan = PLANS.find(p => p.id === form.plan) ?? PLANS[1];
  const price = form.interval === 'annual' ? selectedPlan.annual : selectedPlan.monthly;

  const inputClass = 'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green/40 focus:border-green/60 transition-colors';

  return (
    <main className="min-h-screen pt-24 pb-16 px-4" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#C9963B' }}>
            Free 3-month pilot
          </p>
          <h1 className="font-display text-3xl font-bold" style={{ color: '#1B3A2B' }}>
            {step === 1 ? 'Tell us about your club' : 'Review and proceed to payment'}
          </h1>
          <p className="text-gray-500 text-sm mt-2">No card required for the free pilot.</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-3 mb-8">
          {[1, 2].map(s => (
            <div key={s} className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors"
                style={
                  s === step
                    ? { backgroundColor: '#1B3A2B', color: 'white' }
                    : s < step
                    ? { backgroundColor: '#C9963B', color: 'white' }
                    : { backgroundColor: '#e5e7eb', color: '#9ca3af' }
                }
              >
                {s < step ? '✓' : s}
              </div>
              {s < 2 && <div className="w-12 h-0.5" style={{ backgroundColor: s < step ? '#C9963B' : '#e5e7eb' }} />}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7">
          {step === 1 && (
            <div className="space-y-5">
              {/* Club name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">Club name *</label>
                <input
                  type="text"
                  value={form.clubName}
                  onChange={e => {
                    const val = e.target.value;
                    setForm(f => ({ ...f, clubName: val, slug: slugify(val) }));
                  }}
                  placeholder="Elmwood Golf Club"
                  className={inputClass}
                  style={{ fontSize: '16px' }}
                />
              </div>

              {/* Slug */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">
                  Club subdomain *
                </label>
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-green/40 focus-within:border-green/60">
                  <input
                    type="text"
                    value={form.slug}
                    onChange={e => setForm(f => ({ ...f, slug: slugify(e.target.value) }))}
                    placeholder="elmwood"
                    className="flex-1 px-4 py-3 text-sm focus:outline-none"
                    style={{ fontSize: '16px' }}
                  />
                  <span className="px-3 py-3 text-sm text-gray-400 bg-gray-50 border-l border-gray-200 whitespace-nowrap">
                    .rungolf.club
                  </span>
                </div>
                <div className="mt-1.5 h-4 flex items-center">
                  {form.slug && (
                    <p className="text-xs" style={{
                      color: slugStatus === 'available' ? '#16a34a' : slugStatus === 'taken' ? '#dc2626' : '#9ca3af'
                    }}>
                      {slugStatus === 'checking' && '⟳ Checking availability…'}
                      {slugStatus === 'available' && `✓ ${form.slug}.rungolf.club is available`}
                      {slugStatus === 'taken' && `✗ ${form.slug}.rungolf.club is already taken`}
                    </p>
                  )}
                </div>
              </div>

              {/* Country */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">Country *</label>
                <select value={form.country} onChange={set('country')} className={inputClass} style={{ fontSize: '16px' }}>
                  <option>Ireland</option>
                  <option>United Kingdom</option>
                </select>
              </div>

              {/* Name */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">First name *</label>
                  <input type="text" value={form.firstName} onChange={set('firstName')} placeholder="John" className={inputClass} style={{ fontSize: '16px' }} />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">Last name *</label>
                  <input type="text" value={form.lastName} onChange={set('lastName')} placeholder="Murphy" className={inputClass} style={{ fontSize: '16px' }} />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">Admin email *</label>
                <input type="email" value={form.email} onChange={set('email')} placeholder="john@elmwoodgolf.ie" className={inputClass} style={{ fontSize: '16px' }} />
              </div>

              {/* Plan */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">Plan</label>
                <div className="grid grid-cols-3 gap-2">
                  {PLANS.map(p => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setForm(f => ({ ...f, plan: p.id }))}
                      className="rounded-xl py-3 px-2 text-center border transition-colors"
                      style={form.plan === p.id
                        ? { backgroundColor: '#1B3A2B', borderColor: '#1B3A2B', color: 'white' }
                        : { borderColor: '#e5e7eb', color: '#374151' }
                      }
                    >
                      <p className="font-semibold text-sm">{p.name}</p>
                      <p className="text-xs mt-0.5 opacity-75">€{form.interval === 'annual' ? p.annual : p.monthly}/mo</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Interval */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Billing:</span>
                <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
                  {['monthly', 'annual'].map(i => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setForm(f => ({ ...f, interval: i }))}
                      className="px-3 py-1 rounded-full text-xs font-medium capitalize transition-colors"
                      style={form.interval === i
                        ? { backgroundColor: 'white', color: '#1B3A2B', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }
                        : { color: '#6b7280' }
                      }
                    >
                      {i}
                    </button>
                  ))}
                </div>
                {form.interval === 'annual' && (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: '#fef9c3', color: '#854d0e' }}>
                    2 months free
                  </span>
                )}
              </div>

              <button
                onClick={() => setStep(2)}
                disabled={!step1Valid()}
                className="w-full py-3.5 rounded-xl font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-40"
                style={{ backgroundColor: '#1B3A2B' }}
              >
                Review & continue →
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              {/* Summary */}
              <div className="rounded-xl p-5 space-y-3" style={{ backgroundColor: '#F5F0E8' }}>
                <h3 className="font-semibold text-sm" style={{ color: '#1B3A2B' }}>Order summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Club</span>
                    <span className="font-medium">{form.clubName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Subdomain</span>
                    <span className="font-medium font-mono text-xs">{form.slug}.rungolf.club</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Admin</span>
                    <span className="font-medium">{form.firstName} {form.lastName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Email</span>
                    <span className="font-medium">{form.email}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 flex justify-between">
                    <span className="text-gray-500">{selectedPlan.name} — {form.interval}</span>
                    <span className="font-bold" style={{ color: '#1B3A2B' }}>€{price}/month</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl p-4 border text-sm text-center" style={{ borderColor: '#86efac', backgroundColor: '#f0fdf4', color: '#166534' }}>
                🏌️ Your first 3 months are <strong>free</strong>. Payment only starts after your pilot.
              </div>

              {error && (
                <p className="text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3">{error}</p>
              )}

              <button
                onClick={handleCheckout}
                disabled={submitting}
                className="w-full py-3.5 rounded-xl font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                style={{ backgroundColor: '#C9963B' }}
              >
                {submitting ? 'Redirecting…' : 'Proceed to payment →'}
              </button>

              <button
                onClick={() => setStep(1)}
                className="w-full py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                ← Back to edit details
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
