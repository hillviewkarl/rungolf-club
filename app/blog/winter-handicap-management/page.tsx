import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleLayout } from '../_components/article-layout';
import { getArticle } from '@/lib/blog';

const meta = getArticle('winter-handicap-management')!;

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
        Every October, club secretaries across Ireland and the UK face the same task: freeze
        every member's WHS handicap index and create a winter playing handicap. For most clubs,
        this means exporting a spreadsheet, manually editing hundreds of rows, re-importing the
        data, and hoping nothing broke in the process.
      </p>
      <p>
        It's time-consuming, error-prone, and entirely unnecessary in 2026. Here's how modern
        golf club software handles the full winter handicap cycle automatically.
      </p>

      <h2>What the winter handicap process actually involves</h2>
      <p>
        Under WHS (World Handicap System), players have a dynamic handicap index that updates
        after every qualifying round. During winter, most Irish and UK clubs "freeze" this index
        and use a fixed winter playing handicap for the season. This means:
      </p>
      <ul>
        <li>Recording each member's WHS index at a specific snapshot date</li>
        <li>Setting that figure as their winter handicap for all qualifying winter rounds</li>
        <li>Allowing manual adjustments by the handicap secretary with a documented reason</li>
        <li>Maintaining an audit trail of any changes</li>
        <li>Resetting all members back to WHS mode in spring</li>
      </ul>
      <p>
        None of this is technically complex — but doing it for 300–600 members using a spreadsheet
        is slow, error-prone, and impossible to audit properly.
      </p>

      <h2>The spreadsheet nightmare</h2>
      <p>
        The typical spreadsheet-based process looks something like this:
      </p>
      <ol>
        <li>Export your member list from your golf club software (if it allows it)</li>
        <li>Open the file in Excel and add a "Winter Handicap" column</li>
        <li>Manually copy each member's current WHS index into the winter column</li>
        <li>Re-import the file — hoping the columns map correctly</li>
        <li>Handle the 15 members whose names changed or who joined mid-season manually</li>
        <li>Answer calls from members asking why their handicap is wrong</li>
      </ol>
      <p>
        If someone updates a formula incorrectly, truncates a decimal, or imports the wrong
        column, the entire season's data is compromised. And in spring, you do the whole thing
        again in reverse.
      </p>

      <h2>How software handles it</h2>
      <p>
        Modern golf club management software handles the winter handicap cycle in a dashboard
        — no spreadsheet required.
      </p>

      <h3>1. One-click WHS snapshot</h3>
      <p>
        The handicap secretary clicks one button. The system reads each active member's current
        WHS handicap index and stores it as their winter handicap. The process takes seconds
        regardless of member count.
      </p>

      <h3>2. Individual adjustments with audit trail</h3>
      <p>
        Need to adjust a member's winter handicap after the snapshot? The secretary enters the
        new value and a mandatory reason. Every change is logged with the date, the person who
        made it, the previous value, and the new value. The audit trail is permanent.
      </p>

      <h3>3. Member app display</h3>
      <p>
        Members see their current winter handicap in their booking app alongside their WHS index.
        No confusion, no calls to the pro shop asking which number applies.
      </p>

      <h3>4. Spring reset</h3>
      <p>
        At the end of winter, one button resets all members back to WHS mode. The winter
        handicap records are retained for audit purposes, but all future qualifying rounds
        use the live WHS index again.
      </p>

      <h2>What to look for in golf club software</h2>
      <p>
        If winter handicap management is important to your club, look for software that offers:
      </p>
      <ul>
        <li>A bulk snapshot function (not manual entry per member)</li>
        <li>An audit trail for all adjustments</li>
        <li>Separate storage of WHS index and winter handicap</li>
        <li>Member-facing display of the correct active handicap</li>
        <li>A simple one-action spring reset</li>
      </ul>

      <p>
        <Link href="/features/handicaps">See how rungolf.club handles winter handicaps →</Link>
      </p>
    </ArticleLayout>
  );
}
