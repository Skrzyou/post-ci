import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1100px] px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-[32ch]">
            <p className="font-heading text-lg font-semibold">POST-CI LAB</p>
            <p className="mt-2 text-sm text-muted-foreground text-pretty">
              Kuratorowane laboratorium decyzji dla MŚP z Dolnego Śląska. #ZHaliNieZFolderu
            </p>
          </div>

          <nav className="flex flex-col gap-2 text-sm">
            <Link href="/dla-firm" className="text-foreground/80 hover:text-foreground">
              Dla firm
            </Link>
            <Link href="/dla-partnerow" className="text-foreground/80 hover:text-foreground">
              Dla partnerów
            </Link>
            <Link href="/dla-specjalistow" className="text-foreground/80 hover:text-foreground">
              Dla specjalistów
            </Link>
            <Link href="/metoda" className="text-foreground/80 hover:text-foreground">
              Jak działamy
            </Link>
            <Link href="/o-nas" className="text-foreground/80 hover:text-foreground">
              O nas
            </Link>
            <Link href="/kontakt" className="text-foreground/80 hover:text-foreground">
              Kontakt
            </Link>
          </nav>

          <div className="text-sm text-muted-foreground">
            <p>Krzysztof Skrzypczak + Jakub Giełbaga</p>
            <p className="mt-1">Wrocław, Dolny Śląsk</p>
          </div>
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} POST-CI LAB. Partner instytucjonalny: Dolnośląska Izba Gospodarcza.
        </p>
      </div>
    </footer>
  );
}
