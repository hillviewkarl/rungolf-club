import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleLayout } from '../_components/article-layout';
import { getArticle } from '@/lib/blog';

const meta = getArticle('brs-golf-tee-time-cost')!;

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
        BRS Golf is used by thousands of golf clubs across Ireland and the UK. The pitch is simple:
        free tee sheet and competition management software, in exchange for one tee time per day.
        It sounds like a good deal — until you do the maths.
      </p>

      <h2>What the arrangement actually involves</h2>
      <p>
        BRS Golf was acquired by GolfNow in 2016. GolfNow is owned by NBC Sports Group, a division
        of Comcast. The "free software" model works like this: your club surrenders one tee time per
        day to GolfNow, who lists it on their online marketplace at whatever price they choose.
        Members of the public book that slot — not your members.
      </p>
      <p>
        You have limited control over the pricing of that slot, the type of player who books it,
        or how it interacts with your own members' booking preferences. The slot is simply gone.
      </p>

      <h2>The real cost calculation</h2>
      <p>Here's the maths, based on average green fees for member clubs in Ireland and the UK:</p>

      <table>
        <thead>
          <tr>
            <th>Green fee (avg)</th>
            <th>Tee times/year</th>
            <th>Annual cost equivalent</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>€30</td><td>365</td><td>€10,950</td></tr>
          <tr><td>€35</td><td>365</td><td>€12,775</td></tr>
          <tr><td>€45</td><td>365</td><td>€16,425</td></tr>
          <tr><td>€55</td><td>365</td><td>€20,075</td></tr>
        </tbody>
      </table>

      <p>
        For most clubs, the "free" BRS Golf arrangement costs between <strong>€11,000 and €20,000
        per year</strong> in surrendered green fee revenue. That's not a software cost that appears
        on your P&amp;L — but it absolutely affects your income.
      </p>

      <h2>What clubs are giving up beyond the money</h2>
      <p>
        The financial cost is only part of the picture. Clubs on BRS Golf also give up:
      </p>
      <ul>
        <li><strong>Control over their tee sheet inventory.</strong> One slot per day is committed to GolfNow regardless of how busy the course is or what competitions are running.</li>
        <li><strong>Pricing integrity.</strong> GolfNow may discount that slot to drive bookings on their platform, which can undercut the club's own visitor pricing.</li>
        <li><strong>Member experience.</strong> Members who try to book may find slots unavailable because GolfNow has claimed them.</li>
        <li><strong>Data.</strong> Players who book via GolfNow are GolfNow's customers, not your club's.</li>
      </ul>

      <h2>What alternatives cost</h2>
      <p>
        Independent golf club management software — software that doesn't involve any tee time
        arrangement — typically costs between €79 and €249 per month for a full-featured platform.
        That's €948 to €2,988 per year.
      </p>
      <p>
        Compared to the €11,000–€20,000 annual cost equivalent of the BRS Golf arrangement,
        independent software represents a saving of <strong>€8,000–€17,000 per year</strong> for
        most clubs.
      </p>

      <h2>The bottom line</h2>
      <p>
        BRS Golf is not free. It costs your club one tee time per day, every day of the year.
        The question isn't whether you're paying — it's whether you're paying in a way that's
        visible on your accounts.
      </p>
      <p>
        If your average visitor green fee is €40 and you're giving away 365 tee times per year,
        you're paying €14,600 annually for software that an independent provider would charge
        €79–€149/month for.
      </p>

      <p>
        <Link href="/compare/brs-golf">See the full BRS Golf vs rungolf.club comparison →</Link>
      </p>
    </ArticleLayout>
  );
}
