export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  keywords: string[];
  author: string;
  readMinutes: number;
  related?: string[];
}

export const ARTICLES: ArticleMeta[] = [
  {
    slug: 'brs-golf-tee-time-cost',
    title: 'How Much Is the BRS Golf Free Tee Time Deal Actually Costing Your Club?',
    description:
      'BRS Golf is "free" — but the GolfNow tee time arrangement costs most Irish and UK clubs €10,000–€18,000 per year in surrendered green fee revenue. Here\'s the maths.',
    publishedAt: '2026-04-01',
    keywords: ['BRS Golf cost', 'GolfNow tee time extraction', 'golf club software Ireland'],
    author: 'rungolf.club',
    readMinutes: 5,
    related: ['golf-club-software-cost-ireland'],
  },
  {
    slug: 'golf-club-software-cost-ireland',
    title: 'How Much Does Golf Club Management Software Cost in Ireland in 2026?',
    description:
      'A plain-English breakdown of what Irish golf clubs pay for management software — from "free" BRS Golf to enterprise platforms — and what you should actually expect to pay.',
    publishedAt: '2026-04-01',
    keywords: ['golf club management software cost Ireland', 'golf club software pricing'],
    author: 'rungolf.club',
    readMinutes: 4,
    related: ['brs-golf-tee-time-cost'],
  },
  {
    slug: 'winter-handicap-management',
    title: 'How Golf Clubs Can Stop Managing Winter Handicaps on Spreadsheets',
    description:
      'Every autumn, club secretaries face the same spreadsheet nightmare. Here\'s how modern golf club software handles the full winter handicap cycle automatically.',
    publishedAt: '2026-04-01',
    keywords: ['winter handicap management golf club', 'golf handicap software Ireland'],
    author: 'rungolf.club',
    readMinutes: 4,
    related: ['golf-club-software-cost-ireland'],
  },
];

export function getArticle(slug: string): ArticleMeta | undefined {
  return ARTICLES.find(a => a.slug === slug);
}
