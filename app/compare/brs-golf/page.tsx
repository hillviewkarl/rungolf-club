import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BRS Golf Alternative for Irish & UK Clubs",
  alternates: { canonical: "/compare/brs-golf" },
};

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="font-display text-3xl" style={{ color: '#1B3A2B' }}>BRS Golf Comparison — coming soon</h1>
    </main>
  );
}
