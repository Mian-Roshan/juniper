import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { CookieConsent } from "@/components/layout/CookieConsent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: {
    default: "Renura Health — Medical weight loss, made personal",
    template: "%s · Renura Health",
  },
  description:
    "Clinician-led weight loss programmes combining GLP-1 medication, coaching and lab testing. Take the 3-minute assessment to see if Renura is right for you.",
  metadataBase: new URL("https://renura.health"),
  openGraph: {
    title: "Renura Health — Medical weight loss, made personal",
    description:
      "Clinician-led weight loss combining GLP-1 medication, coaching and lab testing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
