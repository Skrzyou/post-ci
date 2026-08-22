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
  title: "POST-CI Lab - laboratorium decyzji dla MŚP",
  description:
    "Kuratorowane laboratorium decyzji dla MŚP z Dolnego Śląska. Realny problem trafia na stół, kilku specjalistów patrzy na niego z różnych stron, a firma wychodzi z jednym ruchem do sprawdzenia w 30 dni.",
  openGraph: {
    title: "POST-CI Lab - laboratorium decyzji dla MŚP",
    description:
      "Realny problem MŚP trafia na stół, kilku specjalistów patrzy na niego z różnych stron, a firma wychodzi z jednym ruchem do sprawdzenia w 30 dni.",
    type: "website",
    locale: "pl_PL",
    images: ["/og.png"],
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
