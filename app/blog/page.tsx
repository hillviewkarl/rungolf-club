import type { Metadata } from 'next';
import Link from 'next/link';
import { ARTICLES } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Golf Club Software Blog | rungolf.club',
  description:
    'Practical guides for golf club secretaries and pro shop managers in Ireland and the UK — tee sheet management, competition software, handicaps and more.',
  alternates: { canonical: '/blog' },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IE', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

export default function BlogIndexPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: '#1B3A2B' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#C9963B' }}>
            Blog
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white text-balance leading-tight">
            Golf club software guides
          </h1>
        </div>
      </section>

      <section className="py-16 px-4" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-3xl mx-auto space-y-6">
          {ARTICLES.map(article => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block bg-white rounded-2xl p-7 border border-gray-100 hover:border-green/30 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                <span>{formatDate(article.publishedAt)}</span>
                <span>·</span>
                <span>{article.readMinutes} min read</span>
              </div>
              <h2
                className="font-display text-xl font-bold mb-2 group-hover:text-green transition-colors text-balance"
                style={{ color: '#1B3A2B' }}
              >
                {article.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">{article.description}</p>
              <span className="mt-4 inline-block text-sm font-semibold group-hover:underline" style={{ color: '#2D6A4F' }}>
                Read article →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
