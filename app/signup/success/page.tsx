import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up Successful | rungolf.club",
  robots: { index: false },
};

export default function SignupSuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="font-display text-3xl" style={{ color: '#1B3A2B' }}>Welcome to rungolf.club</h1>
    </main>
  );
}
