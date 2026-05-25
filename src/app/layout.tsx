import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/site/Header";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cristianreyes.io"),
  title: "Cristian Reyes, CEO & Founder, Crypted",
  description:
    "Founder of Crypted. Scientist at Pfizer. Working at the intersection of biology, AI, and software.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Cristian Reyes", url: "https://www.cristianreyes.io" }],
  creator: "Cristian Reyes",
  openGraph: {
    title: "Cristian Reyes, CEO & Founder, Crypted",
    description:
      "Founder of Crypted. Scientist at Pfizer. Working at the intersection of biology, AI, and software.",
    url: "https://www.cristianreyes.io",
    siteName: "Cristian Reyes",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristian Reyes, CEO & Founder, Crypted",
    description:
      "Founder of Crypted. Scientist at Pfizer. Working at the intersection of biology, AI, and software.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg text-fg-primary font-sans antialiased">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[100] opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: "url('/grain.svg')",
            backgroundSize: "180px 180px",
          }}
        />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
