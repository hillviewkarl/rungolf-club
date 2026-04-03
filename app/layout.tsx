import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@/components/layout/analytics";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://rungolf.club";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: "Golf Club Management Software Ireland & UK | rungolf.club",
    template: "%s | rungolf.club",
  },
  description:
    "Modern golf club management software for Irish and UK clubs. Tee sheet, competition management, member booking and cashless payments — at 50-70% less than BRS Golf.",
  keywords: [
    "golf club management software Ireland",
    "golf club booking software UK",
    "tee sheet management software",
    "golf club admin software",
    "golf competition management software",
  ],
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: APP_URL,
    siteName: "rungolf.club",
    title: "Golf Club Management Software Ireland & UK | rungolf.club",
    description:
      "Modern golf club management software for Irish and UK clubs. Tee sheet, competition management, member booking and cashless payments — at 50-70% less than BRS Golf.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "rungolf.club — Golf Club Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Golf Club Management Software Ireland & UK | rungolf.club",
    description:
      "Modern tee sheet, competition management and member booking — at 50-70% less than BRS Golf.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: APP_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <Analytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
