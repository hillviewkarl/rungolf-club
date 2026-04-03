import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golf Club Member Booking App",
  alternates: { canonical: "/features/member-app" },
};

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="font-display text-3xl" style={{ color: '#1B3A2B' }}>Member App — coming soon</h1>
    </main>
  );
}
