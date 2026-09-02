import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { MotionConfig } from "motion/react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const fontBody = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const fontHeading = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://post-gray.vercel.app"),
  title: "POST-CI | Realne problemy firm MŚP. Jeden ruch w 30 dni",
  description:
    "POST-CI to format pracy nad problemami firm, które wracają mimo wcześniejszych prób. Fakty, mechanizm, jeden ruch i sprawdzenie po 30 dniach.",
  openGraph: {
    title: "POST-CI | Realne problemy firm MŚP. Jeden ruch w 30 dni",
    description:
      "POST-CI to format pracy nad problemami firm, które wracają mimo wcześniejszych prób. Fakty, mechanizm, jeden ruch i sprawdzenie po 30 dniach.",
    type: "website",
    locale: "pl_PL",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${fontBody.variable} ${fontHeading.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MotionConfig reducedMotion="user">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
