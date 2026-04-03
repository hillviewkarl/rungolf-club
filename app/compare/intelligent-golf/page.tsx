import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intelligent Golf Alternative",
  alternates: { canonical: "/compare/intelligent-golf" },
};

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="font-display text-3xl" style={{ color: '#1B3A2B' }}>Intelligent Golf Comparison — coming soon</h1>
    </main>
  );
}
