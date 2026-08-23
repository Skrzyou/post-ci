import type { Metadata } from "next";
import { Kontakt } from "@/components/sections/Kontakt";

const title = "Kontakt - POST-CI LAB";
const description = "Napisz do nas - jako firma, partner instytucjonalny albo specjalista.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
};

export default function KontaktPage() {
  return <Kontakt />;
}
