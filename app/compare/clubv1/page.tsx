import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ClubV1 Alternative for Golf Clubs",
  alternates: { canonical: "/compare/clubv1" },
};

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="font-display text-3xl" style={{ color: '#1B3A2B' }}>ClubV1 Comparison — coming soon</h1>
    </main>
  );
}
