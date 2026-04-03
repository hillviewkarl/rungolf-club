import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleLayout } from '../_components/article-layout';
import { getArticle } from '@/lib/blog';

const meta = getArticle('golf-club-software-cost-ireland')!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  alternates: { canonical: `/blog/${meta.slug}` },
  openGraph: { title: meta.title, description: meta.description, type: 'article', publishedTime: meta.publishedAt },
};

export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <p>
        If you're a golf club secretary or manager in Ireland shopping for management software,
        you'll quickly find that pricing is remarkably difficult to pin down. Most providers either
        don't publish prices at all, or hide the real cost behind arrangements like the BRS Golf
        "free tee time" deal. Here's a plain-English breakdown of what clubs are actually paying.
      </p>

      <h2>The four pricing models in the market</h2>

      <h3>1. The "free in exchange for tee times" model</h3>
      <p>
        The most widely used model in Ireland and the UK. BRS Golf (owned by GolfNow/Comcast)
        provides software at no direct charge in exchange for one tee time per day. As we've
        calculated elsewhere, this arrangement costs most clubs <strong>€11,000–€20,000 per year</strong>{' '}
        in surrendered green fee revenue. It doesn't appear on your accounts as a software cost,
        which is precisely why clubs don't always recognise how expensive it is.
      </p>

      <h3>2. Per-member pricing</h3>
      <p>
        Some providers charge per active member per month — typically €1–€3 per member. For a club
        with 400 members, that's €400–€1,200/month (€4,800–€14,400/year). As your membership grows,
        so does your software bill. This model is common among platforms that also handle membership
        subscriptions and accounts.
      </p>

      <h3>3. Enterprise / negotiated pricing</h3>
      <p>
        Platforms like ClubV1 and Intelligent Golf don't publish prices. You fill in a contact form,
        speak to a salesperson, and receive a quote. Clubs that have gone through this process
        report annual costs ranging from €3,000 to €15,000+ depending on club size and features
        required. The lack of published pricing makes comparison very difficult.
      </p>

      <h3>4. Flat monthly subscription</h3>
      <p>
        The simplest model: a fixed monthly fee regardless of member count or booking volume.
        rungolf.club uses this model — from €79/month (€948/year) for smaller clubs to
        €249/month (€2,988/year) for larger clubs with advanced requirements.
      </p>

      <h2>What's typically included</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>BRS Golf</th>
            <th>Per-member platforms</th>
            <th>rungolf.club</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Tee sheet management</td><td>✓</td><td>✓</td><td>✓</td></tr>
          <tr><td>Competition management</td><td>✓</td><td>✓</td><td>✓</td></tr>
          <tr><td>Mobile member app</td><td>Limited</td><td>Varies</td><td>✓</td></tr>
          <tr><td>Cashless payments</td><td>✗</td><td>Varies</td><td>✓</td></tr>
          <tr><td>Winter handicaps</td><td>✗</td><td>✗</td><td>✓</td></tr>
          <tr><td>No tee time extraction</td><td>✗</td><td>✓</td><td>✓</td></tr>
          <tr><td>Published pricing</td><td>N/A</td><td>Sometimes</td><td>✓</td></tr>
        </tbody>
      </table>

      <h2>What should a golf club in Ireland expect to pay?</h2>
      <p>
        For a typical Irish golf club (200–600 members, 18 holes, one competition per week),
        a fair price for modern, independent golf club management software is
        <strong> €100–€200 per month</strong>. That's €1,200–€2,400 per year — a fraction of
        what the BRS Golf arrangement costs in surrendered tee times.
      </p>
      <p>
        Any platform charging significantly more than this for a standard club setup should be
        able to clearly justify the premium with features or service levels that a smaller club
        genuinely needs.
      </p>

      <h2>Questions to ask before signing up</h2>
      <ul>
        <li>Is there a tee time extraction arrangement? If so, what's the real annual cost?</li>
        <li>Is pricing per member or flat rate?</li>
        <li>Are there setup fees or implementation charges?</li>
        <li>What does support look like — is there a named contact?</li>
        <li>How long does setup take, and who does the work?</li>
      </ul>

      <p>
        <Link href="/pricing">See rungolf.club's published pricing →</Link>
      </p>
    </ArticleLayout>
  );
}
