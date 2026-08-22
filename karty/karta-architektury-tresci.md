# Karta Architektury Treści

## Mapa systemu (lista podstron z rolą)

1. **Strona główna** (`/`) - węzeł systemu, rozgałęzia na 3 ścieżki (MŚP / Partner / Specjalista), skrót metody i dowodów.
2. **Dla firm** (`/dla-firm`) - LAB i INSIDE, jak wygląda współpraca, dla kogo / dla kogo nie, FAQ, CTA "Zgłoś firmę na LAB" i "Umów rozmowę o INSIDE".
3. **Dla partnerów** (`/dla-partnerow`) - propozycja 12-miesięcznego pilotażu, rola partnera, granice współpracy, CTA "Umów rozmowę o pilotażu".
4. **Dla specjalistów** (`/dla-specjalistow`) - kryteria wejścia do puli, obszary ekspertyzy, zasady, formularz zgłoszeniowy.
5. **Jak działamy** (`/metoda`) - Master Mapa, Mini-Klinika (Góra Lodowa), Laboratorium, Kontrakt 30 Dni, T+30. Wspólna dla wszystkich trzech ścieżek jako dowód metody.
6. **O nas** (`/o-nas`) - Krzysztof + Jakub, historia POST-CI, #ZHaliNieZFolderu.
7. **Kontakt** (`/kontakt`) - jeden formularz z wyborem "kim jestem" (firma / partner / specjalista), kieruje temat wiadomości.

## Nawigacja główna
Pasek: Strona główna (logo) | Dla firm | Dla partnerów | Dla specjalistów | Jak działamy | O nas | **Kontakt** (CTA-przycisk, wyróżniony).

Stopka (na każdej podstronie): skrócone menu, #ZHaliNieZFolderu / link do LinkedIn, dane kontaktowe, wzmianka o DIG jako partnerze.

## Treść dynamiczna w CMS
- **Opinie** - kolekcja w CMS (Sanity, dokłada się w skillu `sanity`, M8). Na start (przed podłączeniem CMS) statyczny placeholder "opinie w przygotowaniu" lub 1-2 opinie wpisane ręcznie, jeśli użytkownik dostarczy je przed budową.
- Reszta treści (LAB, INSIDE, metoda, o nas, partnerzy) jest **statyczna** na start - zmienia się rzadko, nie wymaga CMS w pierwszym etapie.

(do potwierdzenia z uzytkownikiem: czy w kolejnym etapie warto dodać kolekcję "Raport Rzeczywistości MŚP" / wnioski z LAB-ów jako CMS - na razie za mało materiału, bo raport planowany dopiero po 6-8 edycjach)

## Sekcje per podstrona

**Strona główna:**
1. Hero pełnoekranowe - "to jest inne niż zwykła konferencja", jedno zdanie + wybór ścieżki
2. Trzy karty-ścieżki (Dla firm / Dla partnerów / Dla specjalistów) z osobnym CTA każda
3. Czym jest POST-CI w jednym akapicie (definicja: "kuratorowane laboratorium decyzji dla MŚP")
4. Jak to działa w skrócie (4 kroki: problem -> stół -> Kontrakt 30 Dni -> T+30)
5. Dowody (3 edycje, DIG jako partner, liczby celu 70%)
6. Opinie (placeholder/CMS)
7. O prowadzących w skrócie (Krzysztof + Jakub) z linkiem do "O nas"
8. Zamykające CTA (powrót do 3 ścieżek)

**Dla firm:**
1. Hero - "wreszcie ktoś, kto rozumie moją ścianę", przykłady przekonań ("klient jest święty" itd.)
2. Dla kogo / dla kogo nie (segmentacja z profil.md)
3. Dwie opcje obok siebie: LAB (bezpłatny, opis, CTA) vs INSIDE (płatny 15-20 tys. zł netto, opis, CTA)
4. Jak wygląda współpraca krok po kroku (z procesy.md)
5. Czego się nie robi (zero sprzedaży przy stole, poufność)
6. FAQ
7. CTA końcowe

**Dla partnerów:**
1. Hero - "sprawdzony format, nie event pod logo"
2. Punkt wyjścia: 3 zrealizowane LAB-y, DIG jako pierwszy partner
3. Co zyskuje partner (wartość dla członków, wyróżnik, wiedza o MŚP, wejście do dalszych partnerstw)
4. Propozycja pilotażu: 12 miesięcy, 4 edycje, model finansowania (widełki)
5. Role: kto wnosi co (partner / POST-CI / partner finansujący)
6. CTA "Umów rozmowę o pilotażu"

**Dla specjalistów:**
1. Hero - "praca merytoryczna, nie targ wizytówek"
2. Kryteria wejścia (realne doświadczenie, pytania > rady, brak sprzedaży przy stole)
3. Obszary puli (operacje, finanse, sprzedaż, ludzie, IT, prawo, marketing, strategia)
4. Co specjalista wnosi / co dostaje
5. Formularz zgłoszeniowy

**Jak działamy:**
1. Master Mapa (Geneza + Ściana)
2. Mini-Klinika - Góra Lodowa (Objawy / Struktura / Modele mentalne)
3. Laboratorium (Proces / Ludzie / Strategia)
4. Kontrakt 30 Dni + T+30
5. Zasady nienaruszalne (mała grupa, zero sprzedaży, poufność, follow-up obowiązkowy)

**O nas:**
1. Krzysztof + Jakub - kto jest kim, uzupełniające się perspektywy
2. Geneza POST-CI (3 zrealizowane LAB-y, jak powstał format)
3. #ZHaliNieZFolderu - skąd to hasło
4. Zdjęcia z realnych LAB-ów (jeśli dostępne, bez ujawniania twarzy firm bez zgody)

**Kontakt:**
1. Formularz z polem wyboru "kim jestem" (firma / partner / specjalista) + wiadomość
2. Alternatywny kontakt (LinkedIn, e-mail)

## Gdzie pada główne CTA
- Home: trzy równorzędne CTA do ścieżek (nie jedno dominujące, zgodnie z decyzją o 3 równych grupach).
- Dla firm: dwa CTA obok siebie (LAB / INSIDE).
- Dla partnerów: jedno CTA "Umów rozmowę o pilotażu".
- Dla specjalistów: jedno CTA "Dołącz do puli specjalistów" (formularz).
- Każda podstrona kończy się CTA właściwym dla swojej ścieżki - żadna nie przekierowuje do ogólnego "Skontaktuj się" bez kontekstu.

## Etapy budowy (rdzeń teraz / reszta później)
**Etap 1 (rdzeń):** Strona główna + Dla firm + Kontakt. To najkrótsza droga do pierwszego, najważniejszego efektu: zgłoszeń od MŚP.

**Etap 2:** Dla partnerów + Jak działamy (metoda). Wspiera rozmowy z DIG/DFR/WPT, które są priorytetem "A" w pipeline.

**Etap 3:** Dla specjalistów + O nas. Domyka system, mniej pilne bo pula specjalistów rośnie wolniej.

**Etap 4 (po deployu, M7-M8):** CMS dla opinii (skill `sanity`), analityka, ewentualny Raport Rzeczywistości MŚP jako osobna podstrona/kolekcja gdy będzie materiał.
