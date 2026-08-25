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
    naglowek: "Co w Twojej firmie ciągle wraca?",
    opis: "Nie potrzebujemy prezentacji firmy ani idealnie postawionej diagnozy. Opisz sytuację tak, jak ją dziś widzisz. Pierwszym krokiem będzie sprawdzenie, czy POST-CI jest właściwym miejscem do pracy nad tym problemem.",
    cta: "Zgłaszam problem",
  },
  "firma-inside": {
    naglowek: "Porozmawiajmy o problemie Twojej firmy",
    opis: "INSIDE ma sens, gdy problem wymaga wejścia głębiej w kontekst jednej organizacji. Najpierw sprawdzimy, czy jesteśmy właściwym stołem do jego przepracowania.",
    cta: "Umawiam rozmowę o INSIDE",
  },
  partner: {
    naglowek: "Sprawdźmy, czy POST-CI pasuje do Waszych firm",
    opis: "Model współpracy obejmuje 12-miesięczny pilotaż i cztery edycje POST-CI LAB dla Waszych firm członkowskich. Napisz kilka słów o organizacji - umówimy rozmowę o warunkach pilotażu.",
    cta: "Porozmawiajmy o pilotażu",
  },
  specjalista: {
    naglowek: "Co wnosisz do stołu?",
    opis: "Budujemy stałą pulę praktyków z obszaru operacji, finansów, sprzedaży, IT, prawa, HR i strategii. To też jest kwalifikacja - nie każdy specjalista musi wejść do POST-CI.",
    cta: "Zgłaszam się do puli praktyków",
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
  const jestPartner = kimJestem === "partner";
  const jestSpecjalista = kimJestem === "specjalista";

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
            getVal("odKiedy") && `Od jak dawna: ${getVal("odKiedy")}`,
            getVal("problem") && `Jaki problem ciągle wraca:\n${getVal("problem")}`,
            getVal("probowali") && `Czego już próbowali:\n${getVal("probowali")}`,
            getVal("konsekwencje") &&
              `Co ten problem dziś blokuje albo kosztuje:\n${getVal("konsekwencje")}`,
          ]
            .filter(Boolean)
            .join("\n\n")
        : jestPartner
          ? [
              getVal("organizacja") && `Instytucja: ${getVal("organizacja")}`,
              getVal("rola") && `Rola: ${getVal("rola")}`,
              getVal("telefon") && `Telefon: ${getVal("telefon")}`,
              getVal("liczbaFirm") && `Liczba firm członkowskich / zrzeszonych: ${getVal("liczbaFirm")}`,
              getVal("problemyFirm") &&
                `Jakie problemy najczęściej zgłaszają firmy:\n${getVal("problemyFirm")}`,
              getVal("jakPracujecie") && `Jak dziś z nimi pracujecie:\n${getVal("jakPracujecie")}`,
            ]
              .filter(Boolean)
              .join("\n\n")
          : jestSpecjalista
            ? [
                getVal("obszar") && `Obszar doświadczenia: ${getVal("obszar")}`,
                getVal("telefon") && `Telefon: ${getVal("telefon")}`,
                getVal("linkedin") && `LinkedIn: ${getVal("linkedin")}`,
                getVal("zJakimiFirmami") && `Z jakimi firmami pracuje:\n${getVal("zJakimiFirmami")}`,
                getVal("wCzymMocny") &&
                  `W jakich problemach jest naprawdę mocny:\n${getVal("wCzymMocny")}`,
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
    <section className="px-6 py-28">
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

          {jestPartner && (
            <>
              <label className="flex flex-col gap-1.5 text-sm">
                Instytucja
                <Input name="organizacja" required maxLength={120} />
              </label>
              <label className="flex flex-col gap-1.5 text-sm">
                Rola
                <Input name="rola" maxLength={80} />
              </label>
            </>
          )}

          {jestSpecjalista && (
            <label className="flex flex-col gap-1.5 text-sm">
              Obszar doświadczenia
              <Input name="obszar" placeholder="np. operacje, finanse, sprzedaż, IT, HR" maxLength={120} />
            </label>
          )}

          <label className="flex flex-col gap-1.5 text-sm">
            E-mail
            <Input name="email" type="email" required maxLength={120} />
          </label>

          {(jestFirma || jestPartner || jestSpecjalista) && (
            <label className="flex flex-col gap-1.5 text-sm">
              Telefon
              <Input name="telefon" type="tel" maxLength={30} />
            </label>
          )}

          {jestSpecjalista && (
            <label className="flex flex-col gap-1.5 text-sm">
              LinkedIn albo portfolio
              <Input name="linkedin" maxLength={200} />
            </label>
          )}

          {jestFirma && (
            <label className="flex flex-col gap-1.5 text-sm">
              Od jak dawna wraca ten problem?
              <Input name="odKiedy" maxLength={80} />
            </label>
          )}

          {jestPartner && (
            <label className="flex flex-col gap-1.5 text-sm">
              Liczba firm członkowskich / zrzeszonych
              <Input name="liczbaFirm" maxLength={80} />
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
                Co ten problem dziś blokuje albo kosztuje?
                <textarea
                  name="konsekwencje"
                  rows={3}
                  maxLength={2000}
                  className="rounded-[var(--radius)] border border-border bg-transparent px-4 py-3 text-foreground outline-none focus:border-accent"
                />
              </label>
            </>
          ) : jestPartner ? (
            <>
              <label className="flex flex-col gap-1.5 text-sm">
                Jakie problemy najczęściej zgłaszają firmy?
                <textarea
                  name="problemyFirm"
                  required
                  rows={3}
                  minLength={10}
                  maxLength={2000}
                  className="rounded-[var(--radius)] border border-border bg-transparent px-4 py-3 text-foreground outline-none focus:border-accent"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm">
                Jak dziś z nimi pracujecie?
                <textarea
                  name="jakPracujecie"
                  rows={3}
                  maxLength={2000}
                  className="rounded-[var(--radius)] border border-border bg-transparent px-4 py-3 text-foreground outline-none focus:border-accent"
                />
              </label>
            </>
          ) : jestSpecjalista ? (
            <>
              <label className="flex flex-col gap-1.5 text-sm">
                Z jakimi firmami pracujesz?
                <textarea
                  name="zJakimiFirmami"
                  required
                  rows={3}
                  minLength={10}
                  maxLength={2000}
                  className="rounded-[var(--radius)] border border-border bg-transparent px-4 py-3 text-foreground outline-none focus:border-accent"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm">
                W jakich problemach jesteś naprawdę mocny?
                <textarea
                  name="wCzymMocny"
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
