import type { Metadata } from "next";
import { IBM_Plex_Sans, Archivo } from "next/font/google";
import { MotionConfig } from "motion/react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const fontBody = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const fontHeading = Archivo({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://post-ci.com"),
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
