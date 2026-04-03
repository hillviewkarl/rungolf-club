import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started | rungolf.club",
  alternates: { canonical: "/signup" },
};

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="font-display text-3xl" style={{ color: '#1B3A2B' }}>Sign Up — coming soon</h1>
    </main>
  );
}
