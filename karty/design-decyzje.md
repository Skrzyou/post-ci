# Design decyzje (POST-CI Lab)

Ten plik jest skondensowanym kontekstem dla skilla `zbuduj-strone` - nie trzeba czytać całej Karty Wizualnej ponownie.

## Tokeny (żywe w src/app/globals.css)
- Tło dominujące: `--background` #f2ebe1 (ciepły kraft/papier)
- Powierzchnia/sekcje/karty: `--surface` #e6dcc8
- Tekst: `--foreground` #23201b
- Akcent (WYŁĄCZNIE przyciski/linki/wyróżnienia, NIGDY tło): `--accent` #c1502e (rdzawo-pomarańczowy jak farba przemysłowa)
- Tekst na akcencie: `--accent-foreground` #fdfaf5
- Tekst drugorzędny: `--muted-foreground` #6b6358
- Ramki/linie: `--border` #d8cbb0
- Promień: `--radius` 0.25rem (ostre, prawie kwadratowe rogi - surowy charakter)
- Fonty: nagłówki `--font-heading` (Space Grotesk), body `--font-body` (Inter). Zawsze `font-family: var(--font-heading)` / `var(--font-body)`, nigdy hardkod.
- Warstwa ruchu gotowa: `Reveal` i `StaggerList` w `src/components/motion/`, `<MotionConfig reducedMotion="user">` już w layout.

## Nastrój
Surowy, bezpośredni, wiarygodny. "Z hali, nie z folderu" - więcej faktury i konkretu, zero błyszczącego korpo-lakieru.

## Inspiracje per sekcja
- **Hero (strona główna)**: nobl.io -> bierzemy rytm krótkich, mocnych zdań pojawiających się jedno po drugim, BEZ dużego zdjęcia w tle. Czyste tło kraft, sama typografia niesie ciężar pierwszego ekranu. Hero rozgałęzia się na 3 ścieżki (Dla firm / Dla partnerów / Dla specjalistów).
- **Sekcja "Czego nie robimy" (home, Dla firm)**: nobl.io -> ten sam styl krótkich, odważnych zdań zastosowany do zasad LAB-u (zero sprzedaży przy stole, poufność, brak gotowych wdrożeń).

## Głos marki (kopiuj 1:1 z kontekst/procesy.md)
Mówimy: "realny problem", "LAB", "jeden ruch na 30 dni", "partner wnosi konkretną rolę", "sprawdzamy, czy działa", "2 firmy, 8-12 osób, kilka godzin roboty".

Nie mówimy: "innowacyjne wyzwanie", "event / konferencja", "kompleksowa transformacja", "pakiet sponsorski", "wdrażamy najlepsze praktyki", "platforma synergii ekosystemu".

Hasztag marki: #ZHaliNieZFolderu.

## Czego NIE chcemy (anty-przykłady)
- Zero typowej strony coacha/konsultanta: uśmiechnięte zdjęcia ze stocku, niebiesko-fioletowe gradienty, okrągłe ikonki w kółkach, "Odkryj swój potencjał".
- Zero zimnego, sterylnego korpo-konsultingu (dużo pustej bieli, bezosobowy ton, biznesmeni w garniturach ze stocku).

## Zdjęcia dostępne
Realne zdjęcia ścian/karteczek z LAB-ów, portrety Krzysztofa i Jakuba, zdjęcia grupy przy pracy. Zero plastikowych AI-ilustracji. Konkretne pliki dostarczy użytkownik przed/w trakcie etapu `obrazy`.

## ZAKAZANE (skrót z anti-ai-look.md)
- Zero `tracking-tight`, zero eyebrow CAPSLOCKIEM, zero nagłówków bez `text-balance`.
- Zero fioletowo-niebieskich gradientów i gradient-text na nagłówkach.
- Zero 3+ identycznych kart w gridzie z tym samym hover.
- Zero `rounded-2xl border shadow-sm` jako jedyny styl boxa wszędzie.
- Zero całej strony w `text-center mx-auto`.
- Zero buzzwordów (Elevate/Unlock/Seamless/Empower/Revolutionize/"all-in-one").
- Zero długiego myślnika, tylko krótki "-".

## NAKAZANE (skrót z anti-ai-look.md)
- Hero pełnoekranowy (`min-h-screen`), z tekstowym rytmem zdań (patrz Inspiracje wyżej), jedno jasne CTA per ścieżka.
- Asymetria i oddech, sekcje `py-24`+, kolumny 7/5 lub 8/4 zamiast wszędzie 50/50.
- Różne karty (rozmiar/treść/hover), min. 3 realne zdjęcia/media (cel 5-7 na dłuższej stronie).
- Każda sekcja w `Reveal`, listy w `StaggerList`. Tylko transform/opacity, `viewport once`. Max jeden akcent WOW na całą stronę.
- Copy z konkretami i liczbami z `kontekst/` (np. 3 zrealizowane LAB-y, 70% Kontraktów 30 Dni, 15-20 tys. zł netto INSIDE).
- Polskie znaki z ogonkami zawsze, zero em-dash.

## Szybka checklista (bramka przed pokazaniem sekcji)
1. Nagłówki mają `text-balance` i normalny tracking?
2. Brak eyebrow capslockiem?
3. Brak fioletowo-niebieskich gradientów i gradient-text?
4. Karty zróżnicowane, nie identyczne z tym samym hover?
5. Min. 3 realne zdjęcia/media?
6. Wszystkie kolory ze zmiennych CSS?
7. Copy ma min. jedną konkretną liczbę/nazwę, zero em-dash?
8. Layout ma oddech i asymetrię?
9. Sekcje mają `Reveal`, brak ruchu w pętli?

Próg: max 1 odpowiedź "nie". Więcej = przeróbka sekcji.
