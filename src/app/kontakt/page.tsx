import type { Metadata } from "next";
import { Kontakt } from "@/components/sections/Kontakt";

export const metadata: Metadata = {
  title: "Kontakt - POST-CI LAB",
  description:
    "Napisz do nas - jako firma, partner instytucjonalny albo specjalista. Odpisujemy zwykle w ciągu jednego dnia roboczego.",
};

export default function KontaktPage() {
  return <Kontakt />;
}
