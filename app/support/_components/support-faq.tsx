'use client';

import { useState } from 'react';

const FAQ = [
  {
    q: 'How long does setup take?',
    a: 'Most clubs are fully live within two weeks of starting their pilot. The setup call usually takes 30 minutes. Member import depends on the size of your list — for up to 500 members it\'s done the same day.',
  },
  {
    q: 'Do you help migrate our member data?',
    a: 'Yes. Send us your existing member list as a CSV or spreadsheet and we handle the import. Every member gets a welcome email with their login link. You don\'t need to do anything.',
  },
  {
    q: 'What if something breaks during a competition?',
    a: 'Call or WhatsApp us directly. We have a named contact for every club and we respond within minutes for competition-day issues. If the platform has a problem, we\'ll tell you immediately and stay on until it\'s resolved.',
  },
  {
    q: 'Is there a phone number I can call?',
    a: 'Yes — every club gets a direct WhatsApp/phone number for their support contact. It\'s not a call centre queue. It\'s a direct line to the person who knows your club setup.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export function SupportFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 text-center" style={{ color: '#1B3A2B' }}>
          Common questions
        </h2>
        <div className="space-y-3">
          {FAQ.map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
              >
                <span className="font-semibold text-sm" style={{ color: '#1B3A2B' }}>{item.q}</span>
                <span
                  className="shrink-0 text-lg transition-transform"
                  style={{ color: '#C9963B', transform: open === i ? 'rotate(45deg)' : 'none' }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
