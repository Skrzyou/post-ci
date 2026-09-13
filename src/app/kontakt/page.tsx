import type { Metadata } from "next";
import { Kontakt } from "@/components/sections/Kontakt";

const WARIANTY: Record<string, { title: string; description: string }> = {
  "firma-lab": {
    title: "Zgłoś problem firmy na POST-CI LAB",
    description:
      "Masz w firmie problem, który wraca mimo wcześniejszych prób naprawy? Zgłoś się na bezpłatny POST-CI LAB - sprawdzimy, czy Twój temat pasuje do formatu.",
  },
  "firma-inside": {
    title: "POST-CI INSIDE - umów rozmowę",
    description:
      "Zamknięta praca nad problemem tylko dla Twojej firmy. Umów rozmowę o POST-CI INSIDE.",
  },
  partner: {
    title: "Kontakt dla partnerów instytucjonalnych - POST-CI LAB",
    description:
      "Sprawdźmy, czy POST-CI LAB pasuje do Waszej organizacji i firm członkowskich. Napisz do nas jako partner instytucjonalny.",
  },
  specjalista: {
    title: "Dołącz do koalicji POST-CI jako praktyk",
    description: "Zgłoś się do koalicji praktyków POST-CI - napisz, co wnosisz do stołu.",
  },
};

const domyslny = {
  title: "Kontakt - POST-CI LAB",
  description: "Napisz do nas - jako firma, partner instytucjonalny albo specjalista.",
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ jestem?: string }>;
}): Promise<Metadata> {
  const { jestem } = await searchParams;
  const tresc = (jestem && WARIANTY[jestem]) || domyslny;

  return {
    title: tresc.title,
    description: tresc.description,
    alternates: { canonical: "/kontakt" },
    openGraph: { title: tresc.title, description: tresc.description, url: "/kontakt" },
  };
}

export default function KontaktPage() {
  return <Kontakt />;
}
