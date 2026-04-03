import { MetadataRoute } from "next";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://rungolf.club";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" },
    { url: "/pricing", priority: 0.9, changeFrequency: "monthly" },
    { url: "/features/tee-sheet", priority: 0.8, changeFrequency: "monthly" },
    { url: "/features/competitions", priority: 0.8, changeFrequency: "monthly" },
    { url: "/features/handicaps", priority: 0.8, changeFrequency: "monthly" },
    { url: "/features/member-app", priority: 0.8, changeFrequency: "monthly" },
    { url: "/features/payments", priority: 0.8, changeFrequency: "monthly" },
    { url: "/compare", priority: 0.8, changeFrequency: "monthly" },
    { url: "/compare/brs-golf", priority: 0.9, changeFrequency: "monthly" },
    { url: "/compare/clubv1", priority: 0.8, changeFrequency: "monthly" },
    { url: "/compare/intelligent-golf", priority: 0.8, changeFrequency: "monthly" },
    { url: "/support", priority: 0.7, changeFrequency: "monthly" },
    { url: "/signup", priority: 0.9, changeFrequency: "monthly" },
    { url: "/login", priority: 0.6, changeFrequency: "monthly" },
    { url: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { url: "/blog/brs-golf-tee-time-cost", priority: 0.8, changeFrequency: "monthly" },
    { url: "/blog/golf-club-software-cost-ireland", priority: 0.8, changeFrequency: "monthly" },
    { url: "/blog/winter-handicap-management", priority: 0.7, changeFrequency: "monthly" },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${APP_URL}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
