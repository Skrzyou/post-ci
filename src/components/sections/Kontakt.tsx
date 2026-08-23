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

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStan("wysylanie");
    setBlad("");

    const form = e.currentTarget;
    const dane = {
      imie: (form.elements.namedItem("imie") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      wiadomosc: (form.elements.namedItem("wiadomosc") as HTMLTextAreaElement).value,
      kimJestem,
      firma: (form.elements.namedItem("firma") as HTMLInputElement).value,
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
      setKimJestem("");
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
            Napisz do nas
          </h1>
          <p className="mt-4 max-w-[48ch] text-pretty text-muted-foreground">
            Wybierz temat i opisz sytuację w kilku zdaniach - odpiszemy tak szybko, jak się da.
          </p>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1.5 text-sm">
            Temat wiadomości
            <select
              name="kimJestem"
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
            Imię
            <Input name="imie" required maxLength={80} />
          </label>

          <label className="flex flex-col gap-1.5 text-sm">
            E-mail
            <Input name="email" type="email" required maxLength={120} />
          </label>

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

          <div className="hidden" aria-hidden="true">
            <label>
              Firma
              <input name="firma" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <p className="text-xs text-muted-foreground">
            Wysyłając formularz zgadzasz się na kontakt w tej sprawie. Dane z formularza wykorzystujemy
            wyłącznie do odpowiedzi na Twoją wiadomość.
          </p>

          <Button type="submit" disabled={stan === "wysylanie"} size="lg" className="w-fit">
            {stan === "wysylanie" ? "Wysyłam..." : "Wyślij wiadomość"}
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
