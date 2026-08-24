"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Stan = "bezczynny" | "wysylanie" | "ok" | "blad";

const OPCJE_KIM_JESTEM = [
  { value: "", label: "Wybierz temat wiadomości" },
  { value: "firma-lab", label: "Firma - zgłaszam się na LAB" },
  { value: "firma-inside", label: "Firma - chcę POST-CI INSIDE" },
  { value: "partner", label: "Partner instytucjonalny" },
  { value: "specjalista", label: "Specjalista" },
  { value: "inne", label: "Inne" },
];

const TRESCI: Record<string, { naglowek: string; opis: string; cta: string }> = {
  "firma-lab": {
    naglowek: "Zgłoś problem do POST-CI",
    opis: "Nie potrzebujemy prezentacji firmy ani perfekcyjnego opisu. Napisz po prostu, co wraca i czego już próbowaliście. Sprawdzimy, czy ten problem nadaje się do pracy w formule POST-CI.",
    cta: "Zgłaszam problem",
  },
  "firma-inside": {
    naglowek: "Porozmawiajmy o problemie Twojej firmy",
    opis: "POST-CI INSIDE ma sens wtedy, gdy problem wymaga pracy wyłącznie na Waszym kontekście, danych i zespole. Opisz go w kilku zdaniach. Na pierwszej rozmowie sprawdzimy, czy ten format jest właściwym ruchem.",
    cta: "Umów rozmowę o INSIDE",
  },
  domyslne: {
    naglowek: "Napisz do nas",
    opis: "Wybierz temat i opisz sytuację w kilku zdaniach - odpiszemy tak szybko, jak się da.",
    cta: "Wyślij wiadomość",
  },
};

export function Kontakt() {
  const [stan, setStan] = useState<Stan>("bezczynny");
  const [blad, setBlad] = useState("");
  const [startedAt] = useState(() => Date.now());
  const [kimJestem, setKimJestem] = useState("");

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("jestem");
    if (param && OPCJE_KIM_JESTEM.some((o) => o.value === param)) {
      setKimJestem(param);
    }
  }, []);

  const tresc = TRESCI[kimJestem] || TRESCI.domyslne;
  const jestFirma = kimJestem === "firma-lab" || kimJestem === "firma-inside";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStan("wysylanie");
    setBlad("");

    const form = e.currentTarget;
    const getVal = (name: string) => (form.elements.namedItem(name) as HTMLInputElement | null)?.value ?? "";

    const dane = {
      imie: getVal("imie"),
      email: getVal("email"),
      wiadomosc: jestFirma
        ? [
            getVal("firmaNazwa") && `Firma: ${getVal("firmaNazwa")}`,
            getVal("rola") && `Rola: ${getVal("rola")}`,
            getVal("telefon") && `Telefon: ${getVal("telefon")}`,
            getVal("problem") && `Jaki problem ciągle wraca:\n${getVal("problem")}`,
            getVal("probowali") && `Czego już próbowali:\n${getVal("probowali")}`,
            getVal("konsekwencje") &&
              `Co się stanie, jeśli nic się nie zmieni:\n${getVal("konsekwencje")}`,
          ]
            .filter(Boolean)
            .join("\n\n")
        : getVal("wiadomosc"),
      kimJestem,
      firma: getVal("strona_www"),
      startedAt,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dane),
      });
      const json = await res.json();
      if (!res.ok) {
        setStan("blad");
        setBlad(json.error || "Nie udało się wysłać. Spróbuj ponownie.");
        return;
      }
      setStan("ok");
      form.reset();
    } catch {
      setStan("blad");
      setBlad("Brak połączenia. Sprawdź internet i spróbuj ponownie.");
    }
  }

  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-[1100px] gap-12 md:grid-cols-[5fr_7fr]">
        <div>
          <h1 className="text-balance font-heading text-3xl font-semibold md:text-4xl">
            {tresc.naglowek}
          </h1>
          <p className="mt-4 max-w-[48ch] text-pretty text-muted-foreground">{tresc.opis}</p>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1.5 text-sm">
            Temat wiadomości
            <select
              name="kimJestemSelect"
              value={kimJestem}
              onChange={(e) => setKimJestem(e.target.value)}
              required
              className="rounded-[var(--radius)] border border-border bg-transparent px-4 py-3 text-foreground outline-none focus:border-accent"
            >
              {OPCJE_KIM_JESTEM.map((o) => (
                <option key={o.value} value={o.value} disabled={o.value === ""}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1.5 text-sm">
            Imię i nazwisko
            <Input name="imie" required maxLength={80} />
          </label>

          {jestFirma && (
            <>
              <label className="flex flex-col gap-1.5 text-sm">
                Firma
                <Input name="firmaNazwa" required maxLength={120} />
              </label>
              <label className="flex flex-col gap-1.5 text-sm">
                Twoja rola w firmie
                <Input name="rola" maxLength={80} />
              </label>
            </>
          )}

          <label className="flex flex-col gap-1.5 text-sm">
            E-mail
            <Input name="email" type="email" required maxLength={120} />
          </label>

          {jestFirma && (
            <label className="flex flex-col gap-1.5 text-sm">
              Telefon
              <Input name="telefon" type="tel" maxLength={30} />
            </label>
          )}

          {jestFirma ? (
            <>
              <label className="flex flex-col gap-1.5 text-sm">
                Jaki problem ciągle wraca?
                <span className="text-xs text-muted-foreground">
                  Co się dzieje? Jak długo? Kogo dotyczy?
                </span>
                <textarea
                  name="problem"
                  required
                  rows={4}
                  minLength={10}
                  maxLength={2000}
                  className="rounded-[var(--radius)] border border-border bg-transparent px-4 py-3 text-foreground outline-none focus:border-accent"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm">
                Czego już próbowaliście?
                <textarea
                  name="probowali"
                  rows={3}
                  maxLength={2000}
                  className="rounded-[var(--radius)] border border-border bg-transparent px-4 py-3 text-foreground outline-none focus:border-accent"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm">
                Co się stanie, jeśli przez kolejne 6 miesięcy nic się nie zmieni?
                <textarea
                  name="konsekwencje"
                  rows={3}
                  maxLength={2000}
                  className="rounded-[var(--radius)] border border-border bg-transparent px-4 py-3 text-foreground outline-none focus:border-accent"
                />
              </label>
            </>
          ) : (
            <label className="flex flex-col gap-1.5 text-sm">
              Wiadomość
              <textarea
                name="wiadomosc"
                required
                rows={5}
                minLength={10}
                maxLength={2000}
                placeholder="Opisz krótko sytuację albo pytanie"
                className="rounded-[var(--radius)] border border-border bg-transparent px-4 py-3 text-foreground outline-none focus:border-accent"
              />
            </label>
          )}

          <div className="hidden" aria-hidden="true">
            <label>
              Strona internetowa
              <input name="strona_www" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <p className="text-xs text-muted-foreground">
            Wysyłając formularz zgadzasz się na kontakt w tej sprawie. Dane z formularza wykorzystujemy
            wyłącznie do odpowiedzi na Twoją wiadomość.
          </p>

          <Button type="submit" disabled={stan === "wysylanie"} size="lg" className="w-fit">
            {stan === "wysylanie" ? "Wysyłam..." : tresc.cta}
          </Button>

          {stan === "ok" && (
            <p className="text-accent">Dziękujemy, wiadomość poszła. Odezwiemy się wkrótce.</p>
          )}
          {stan === "blad" && <p className="text-destructive">{blad}</p>}
        </form>
      </div>
    </section>
  );
}
