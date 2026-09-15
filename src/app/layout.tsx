import type { Metadata } from "next";
import { IBM_Plex_Sans, Barlow_Condensed } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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

const fontHeading = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const homeTitle = "POST-CI | Realne problemy firm MŚP. Jeden ruch w 30 dni";
const homeDescription =
  "Masz w firmie problem, który wraca mimo kolejnych prób naprawy? POST-CI LAB to bezpłatny warsztat operacyjny dla właścicieli MŚP - jeden realny problem, fakty, mechanizm i jeden ruch do sprawdzenia w 30 dni.";

export const metadata: Metadata = {
  metadataBase: new URL("https://post-ci.com"),
  title: homeTitle,
  description: homeDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    type: "website",
    locale: "pl_PL",
    url: "/",
    siteName: "POST-CI LAB",
    images: ["/og.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "POST-CI LAB",
  url: "https://post-ci.com",
  logo: "https://post-ci.com/og.jpg",
  description:
    "POST-CI LAB to warsztat operacyjny dla właścicieli i osób decyzyjnych w MŚP - praca nad jednym realnym, powracającym problemem firmy, zakończona jednym ruchem do sprawdzenia w 30 dni.",
  email: "kontakt@post-ci.com",
  founder: [
    { "@type": "Person", name: "Krzysztof Skrzypczak" },
    { "@type": "Person", name: "Jakub Giełbaga" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wrocław",
    addressRegion: "Dolnośląskie",
    addressCountry: "PL",
  },
  areaServed: "PL",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${fontBody.variable} ${fontHeading.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionConfig reducedMotion="user">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionConfig>
        <Analytics />
      </body>
    </html>
  );
}
