import type { Metadata } from 'next';
import { LoginForm } from './_components/login-form';

export const metadata: Metadata = {
  title: 'Club Login | rungolf.club',
  description: 'Log in to your golf club dashboard or member app. Magic link — no password required.',
  alternates: { canonical: '/login' },
  robots: { index: false },
};

export default function LoginPage() {
  return <LoginForm />;
}
