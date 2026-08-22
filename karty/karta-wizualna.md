# Karta Wizualna

## Nastrój
Surowy, bezpośredni, wiarygodny - bliżej estetyki "z hali, nie z folderu" niż wypolerowanego korpo-konsultingu. Więcej faktury i konkretu, zero błyszczącego lakieru.

## Paleta (design tokens) - rozdziel tło od akcentu
- Tło dominujące (jasny neutral, większość strony): ciepły kraft / papierowy beż - #F2EBE1
- Kolor pomocniczy (sekcje/karty): lekko ciemniejszy kraft / piaskowy - #E6DCC8
- Akcent (przyciski, linki, wyróżnienia - NIE tło): rdzawo-pomarańczowy jak farba przemysłowa - #C1502E
- Tekst główny: ciemny grafit (nie czysta czerń) - #23201B
- Tryb: jasny

## Typografia (next/font/google)
- Nagłówki: Space Grotesk - charakter: nowoczesny, mocny, lekko techniczny/industrialny, dobrze pasuje do "z hali" i do stylu hero z nobl.io
- Tekst (body): Inter
- Liczby/ceny: tabular (monospace dla tekstury - np. przy cenach LAB/INSIDE i liczbach z modelu)

## Zdjęcia i media (realne, NIE plastikowe AI)
- Zdjęcia ścian i karteczek z realnych LAB-ów (Master Mapa, Góra Lodowa, Kontrakty) - bez rozpoznawalnych twarzy bez zgody
- Portrety Krzysztofa i Jakuba (portretowe lub w trakcie prowadzenia LAB-u)
- Zdjęcia z przebiegu LAB-u - grupa przy pracy przy stole/ścianie, z akceptacją na wizerunek gdzie to możliwe
- (do uzupełnienia: konkretne pliki zdjęć do przekazania przed etapem `obrazy` - użytkownik potwierdził, że wszystkie trzy kategorie istnieją)

## Hero strony głównej (NAJWAŻNIEJSZA sekcja - pierwszy ekran)
- Kierunek/układ: mocny, tekstowy hero - seria krótkich, odważnych zdań pojawiających się jedno po drugim (stylistycznie jak nobl.io), BEZ dużego zdjęcia w tle
- Wysokość: pełny ekran
- Główny przekaz (jedno zdanie): coś w rodzaju "Nie budujemy wydarzeń. Budujemy system, w którym prawdziwy problem MŚP trafia na stół i wychodzi z jednym ruchem do sprawdzenia w 30 dni." (do dopracowania w `zbuduj-strone` na bazie kandydatów z `kontekst/procesy.md`)
- Główne CTA: rozgałęzienie na 3 ścieżki (Dla firm / Dla partnerów / Dla specjalistów) - patrz Karta Architektury
- Wizual hero: czyste tło kraft, sama typografia niesie ciężar pierwszego ekranu - zero zdjęcia w tle, zero ilustracji
- Inspiracje hero (linki, CO konkretnie z nich brać): nobl.io - krótkie, mocne zdania jedno po drugim zamiast jednego dużego nagłówka, tekstowy rytm zamiast zdjęcia
- Potwierdzone przez uczestnika: tak

## Referencje (reszta strony, 2-3)
1. nobl.io - podoba się: tekstowy, wyrażeniowy rytm hero (krótkie zdania, duża pewna typografia) - do wykorzystania też przy innych mocnych zdaniach na stronie (np. "Czego nie robimy")

## Inspiracje per sekcja (referencja -> moja sekcja)
- Hero: nobl.io -> bierzemy: rytm krótkich, mocnych zdań zamiast jednego zdjęcia w tle
- Dowody / Czego nie robimy (home, Dla firm): nobl.io -> bierzemy: ten sam styl krótkich, odważnych zdań do sekcji z zasadami LAB-u (zero sprzedaży, poufność)

## Czego NIE chcę (anty-przykłady)
- Nie typowa strona coacha/konsultanta: żadnych uśmiechniętych zdjęć ze stocku, żadnych niebiesko-fioletowych gradientów, żadnych okrągłych ikonek w kółkach, żadnego "Odkryj swój potencjał"
- Nie zimny, sterylny korpo-konsulting (dużo pustej bieli, bezosobowy ton, zdjęcia biznesmenów w garniturach)

## Design system (spójny przez wszystkie podstrony)
- Wspólna nawigacja i stopka na każdej podstronie
- Wielorazowe komponenty: przyciski, karty ścieżek (Dla firm / Dla partnerów / Dla specjalistów), nagłówek podstrony, blok cytatu/opinii
- Te same tokeny (kolory, fonty, radius, spacing) na całej stronie-systemie, zero stylowania per podstrona

## Reguły anti-ai-look (twarde, dla skilli design i sprawdz-kod)
- text-balance na wszystkich nagłówkach, tracking naturalny (zero tracking-tight)
- jeden akcent brandowy, ZERO fioletowo-niebieskich gradientów i gradient-text na nagłówkach
- własny font pairing (powyżej, tylko z dozwolonej listy latin-ext), nie Inter na wszystko
- asymetria i oddech (sekcje py-24+), zero "wszystko text-center mx-auto"
- różne karty (rozmiar/treść/hover), zero gridu identycznych kart z tym samym hover
- min. 3 realne zdjęcia/media, docelowo 5-7 na dłuższej stronie, zero emoji jako ikon, ikony tylko spójny zestaw lucide-react
- copy z konkretami i liczbami (z kontekstu), zero buzzwordów (Elevate/Unlock/Seamless...)
- polskie znaki z ogonkami, zero em-dash
