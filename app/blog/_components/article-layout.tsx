import Link from 'next/link';
import type { ArticleMeta } from '@/lib/blog';
import { ARTICLES } from '@/lib/blog';

interface Props {
  meta: ArticleMeta;
  children: React.ReactNode;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IE', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

export function ArticleLayout({ meta, children }: Props) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.description,
    author: { '@type': 'Organization', name: 'rungolf.club' },
    publisher: {
      '@type': 'Organization',
      name: 'rungolf.club',
      url: 'https://rungolf.club',
    },
    datePublished: meta.publishedAt,
    dateModified: meta.updatedAt ?? meta.publishedAt,
    keywords: meta.keywords.join(', '),
    url: `https://rungolf.club/blog/${meta.slug}`,
  };

  const related = meta.related
    ?.map(slug => ARTICLES.find(a => a.slug === slug))
    .filter(Boolean) as ArticleMeta[];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 px-4" style={{ backgroundColor: '#1B3A2B' }}>
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="text-white/40 text-xs hover:text-white/70 mb-4 inline-block transition-colors">
              ← Blog
            </Link>
            <div className="flex items-center gap-3 text-xs mb-4" style={{ color: '#C9963B' }}>
              <span>{formatDate(meta.publishedAt)}</span>
              <span>·</span>
              <span>{meta.readMinutes} min read</span>
              <span>·</span>
              <span>{meta.author}</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white text-balance leading-tight">
              {meta.title}
            </h1>
          </div>
        </section>

        {/* Article body */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-headings:font-display prose-headings:text-forest prose-a:text-green prose-strong:text-forest max-w-none">
              {children}
            </div>
          </div>
        </section>

        {/* Related articles */}
        {related && related.length > 0 && (
          <section className="py-12 px-4" style={{ backgroundColor: '#F5F0E8' }}>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-xl font-bold mb-6" style={{ color: '#1B3A2B' }}>
                Related articles
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map(r => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group bg-white rounded-xl p-5 border border-gray-100 hover:border-green/30 hover:shadow-sm transition-all"
                  >
                    <p className="font-semibold text-sm mb-1 group-hover:text-green transition-colors text-balance" style={{ color: '#1B3A2B' }}>
                      {r.title}
                    </p>
                    <p className="text-xs text-gray-400">{r.readMinutes} min read</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 px-4 text-center" style={{ backgroundColor: '#1B3A2B' }}>
          <div className="max-w-xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-white mb-3">
              Ready to make the switch?
            </h2>
            <p className="text-white/60 mb-6">Free 3-month pilot. No card required.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#C9963B' }}
              >
                Start Free Pilot
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold border text-white transition-colors"
                style={{ borderColor: 'rgba(255,255,255,0.3)' }}
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
