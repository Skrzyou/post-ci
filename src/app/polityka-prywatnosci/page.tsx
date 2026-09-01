import type { Metadata } from "next";

const title = "Polityka prywatności - POST-CI LAB";
const description = "Klauzula informacyjna dotycząca przetwarzania danych osobowych w związku ze zgłoszeniem i udziałem w POST-CI LAB.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
};

export default function PolitykaPrywatnosciPage() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-[760px]">
        <p className="font-mono text-sm text-accent">Dokument</p>
        <h1 className="mt-4 text-balance font-heading text-4xl font-semibold leading-tight sm:text-5xl">
          Polityka prywatności
        </h1>
        <p className="mt-6 text-pretty text-lg text-muted-foreground">
          Klauzula informacyjna dotycząca danych osobowych przekazanych w związku ze zgłoszeniem i
          udziałem w POST-CI LAB.
        </p>

        <div className="mt-14 flex flex-col gap-10 text-pretty text-foreground/90">
          <div>
            <h2 className="font-heading text-xl font-semibold">Administrator danych</h2>
            <p className="mt-3">
              Administratorem Twoich danych osobowych jest MGE Krzysztof Skrzypczak, ul. Północna 24
              lok. 5, 54-105 Wrocław, NIP: 6931524116, REGON: 391072568.
            </p>
            <p className="mt-3">
              Kontakt w sprawach dotyczących danych osobowych:{" "}
              <a href="mailto:mge@zhaliniezfolderu.com" className="text-accent hover:underline">
                mge@zhaliniezfolderu.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold">Po co przetwarzamy dane</h2>
            <p className="mt-3">
              Dane osobowe przekazane w związku ze zgłoszeniem i udziałem w POST-CI LAB przetwarzamy w
              celu:
            </p>
            <ul className="mt-3 flex flex-col gap-2 pl-5 [&>li]:list-disc">
              <li>przyjęcia i oceny zgłoszenia,</li>
              <li>kontaktu dotyczącego kwalifikacji i organizacji LAB-u,</li>
              <li>realizacji udziału w POST-CI LAB,</li>
              <li>prowadzenia niezbędnej dokumentacji organizacyjnej,</li>
              <li>przeprowadzenia follow-upu po około 30 dniach,</li>
              <li>ustalenia, dochodzenia lub obrony ewentualnych roszczeń.</li>
            </ul>
            <p className="mt-3">
              Podstawą przetwarzania danych jest przede wszystkim podjęcie działań związanych z
              udziałem w POST-CI LAB oraz prawnie uzasadniony interes Organizatora polegający na
              organizacji i ocenie skuteczności formatu.
            </p>
            <p className="mt-3">
              Jeżeli wyrazisz dodatkową zgodę, np. na publikację wizerunku, opinii lub innych
              materiałów, dane w tym zakresie będą przetwarzane na podstawie tej zgody.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold">Jakie dane przetwarzamy</h2>
            <p className="mt-3">W zależności od sposobu zgłoszenia mogą to być w szczególności:</p>
            <ul className="mt-3 flex flex-col gap-2 pl-5 [&>li]:list-disc">
              <li>imię i nazwisko,</li>
              <li>stanowisko lub funkcja,</li>
              <li>nazwa firmy,</li>
              <li>dane kontaktowe,</li>
              <li>informacje przekazane w formularzu zgłoszeniowym,</li>
              <li>informacje niezbędne do organizacji udziału i follow-upu.</li>
            </ul>
            <p className="mt-3">
              Prosimy, aby w formularzu zgłoszeniowym nie przekazywać danych osobowych innych osób,
              jeżeli nie jest to niezbędne do opisania problemu.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold">Jak długo przechowujemy dane</h2>
            <p className="mt-3">
              Dane związane z organizacją i udziałem w POST-CI LAB przechowujemy przez okres potrzebny
              do przeprowadzenia LAB-u, follow-upu oraz rozliczenia i udokumentowania danej edycji, a
              następnie przez okres niezbędny do zabezpieczenia ewentualnych roszczeń.
            </p>
            <p className="mt-3">
              Dane przetwarzane na podstawie zgody, np. dotyczące publikacji wizerunku lub opinii, będą
              przetwarzane do czasu wycofania zgody albo ustania celu, dla którego zostały zebrane.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold">Komu możemy przekazać dane</h2>
            <p className="mt-3">
              Dostęp do danych mogą mieć podmioty wspierające Organizatora w realizacji POST-CI LAB, np.
              dostawcy usług informatycznych, poczty elektronicznej, formularzy zgłoszeniowych lub
              innych usług organizacyjnych - wyłącznie w zakresie niezbędnym do realizacji tych usług.
            </p>
            <p className="mt-3">
              Jeżeli dana edycja jest realizowana z partnerem, zakres ewentualnego przekazywania danych
              zależy od jego roli oraz sposobu prowadzenia zgłoszeń.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold">Twoje prawa</h2>
            <p className="mt-3">Masz prawo - odpowiednio do podstawy przetwarzania - do:</p>
            <ul className="mt-3 flex flex-col gap-2 pl-5 [&>li]:list-disc">
              <li>dostępu do swoich danych,</li>
              <li>ich sprostowania,</li>
              <li>usunięcia,</li>
              <li>ograniczenia przetwarzania,</li>
              <li>wniesienia sprzeciwu wobec przetwarzania,</li>
              <li>przenoszenia danych,</li>
              <li>wycofania udzielonej zgody w dowolnym momencie.</li>
            </ul>
            <p className="mt-3">
              Wycofanie zgody nie wpływa na zgodność z prawem działań wykonanych przed jej wycofaniem.
            </p>
            <p className="mt-3">
              Jeżeli uznasz, że dane są przetwarzane niezgodnie z przepisami, możesz również złożyć
              skargę do Prezesa Urzędu Ochrony Danych Osobowych.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold">Czy podanie danych jest obowiązkowe</h2>
            <p className="mt-3">
              Podanie danych niezbędnych do zgłoszenia i organizacji udziału jest dobrowolne, ale bez
              nich udział w POST-CI LAB może nie być możliwy.
            </p>
            <p className="mt-3">
              Zgody dotyczące m.in. publikacji wizerunku, opinii, nazwy firmy czy logo są dobrowolne i
              ich brak nie wpływa na możliwość udziału w POST-CI LAB.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
