# PROGRESS - Post-CI Lab

Status: strona opublikowana i żywa - https://post-gray.vercel.app (Vercel, repo github.com/Skrzyou/post-ci). Przeszła pełną redakcję po szczegółowej recenzji (2026-08-23).

## Zrobione
- [x] Utworzony projekt Next.js, skille kursu, kontekst, karty, design (M1-M4)
- [x] 7 podstron zbudowanych: `/`, `/dla-firm`, `/dla-partnerow`, `/dla-specjalistow`, `/metoda`, `/o-nas`, `/kontakt`
- [x] `/api/contact` - Resend + walidacja + honeypot, przetestowany lokalnie i na produkcji (działa)
- [x] `sprawdz-kod` - build, anti-ai-look, SEO, bezpieczeństwo
- [x] Deploy: GitHub (Skrzyou/post-ci, branch main) + Vercel (post-gray.vercel.app), zmienne środowiskowe ustawione
- [x] Fix po deployu: Resend klient przenosiony do wnętrza handlera (build padał na Vercelu bez kluczy przy starcie modułu)
- [x] Prawdziwe opinie uczestników w sekcji Dowody (Andrzej Frasek, Igor Zlatojev)
- [x] Sekcja `/o-nas` "Drugi filar POST-CI: specjaliści" - podziękowanie specjalistom
- [x] **Pełna redakcja treści po recenzji (2026-08-23)** - patrz sekcja niżej

## Redakcja 2026-08-23 (po recenzji zewnętrznej)
Naprawione fakty i błędy:
- `og.png` (404) -> `og.jpg` z prawdziwym zdjęciem, dodano `metadataBase`, unikalny OpenGraph title/description per podstrona
- Rola DIG skorygowana wszędzie: dała przestrzeń i wsparcie organizacyjne, NIE finansowała LAB-u (usunięto błędne "Finansuje partner np. DIG")
- Usunięto niepotwierdzone nazwy DFR/WPT/UMWD jako "sieci partnerskiej" (to na razie tylko cele robocze, nie potwierdzona współpraca)
- Usunięto cytat przypisany DIG (nie był dosłowną, zatwierdzoną wypowiedzią) - zastąpiony faktem
- Usunięto wskaźnik "70% Kontraktów 30 Dni" ze strony publicznej (cel wewnętrzny, nie wynik)
- Usunięto wzmiankę o "50 wcześniej kontaktowanych izbach" (pokazywała odrzucenia, nie sukces)
- Rozwiązano niespójności liczbowe: 10-12 specjalistów wszędzie (było też 8-12), usunięto spekulatywne 80-96 miejsc / 3-4 udziały rocznie
- Naprawiono błąd renderowania w hero ("miesięcy.Jeden" bez spacji), urwane zdanie "partner trzeciej"
- Zredukowano nadmiar przeczeń ("nie X, nie Y") w /dla-partnerow i innych podstronach
- Dodano rzeczywisty czas trwania LAB-u (5,5 godziny) zamiast "kilka godzin roboty"
- Zamieniono żargon: case'y -> problemy firm, cashflow -> przepływy pieniężne, pitch -> prezentacja handlowa, feedback -> informacja zwrotna, "Lead merytoryczny/Case A/Case B" -> plain language
- Poprawiono czas w T+30 (przeszły zamiast przyszłego), mniej ceremonialny opis podpisania kontraktu
- Ujednolicono metaforę: usunięto konkurujące "linia muru" (zostaje ściana + góra lodowa)
- Dodano brakujące CTA na końcu `/metoda`
- Formularz: widoczne etykiety pól, neutralny wybór tematu (nie domyślnie "firma-lab"), informacja o wykorzystaniu danych
- Liczebniki w zakresach na półpauzie (10–12, 15–20, 20–30, 21–24)
- Nazwa produktu ujednolicona: POST-CI LAB (było też "POST-CI Lab") wszędzie

## Decyzje (design)
- Kolory: tło kraft `#f2ebe1`, powierzchnia `#e6dcc8`, tekst `#23201b`, akcent rdzawy `#c1502e`
- Fonty: nagłówki Space Grotesk, body Inter
- UI kit: shadcn na bazie `@base-ui/react` - `render={<Link .../>}` + `nativeButton={false}` zamiast `asChild`
- Pełne decyzje w `karty/design-decyzje.md`

## Zdjęcia (stan na 2026-08-23)
Źródła: `moja strona/public/images/`, `FIRMA KODY/mge/foto postci/`. Duże oryginały skompresowane (sharp, 2000px szer., jpeg q82).
- `/` Hero - hero-zamyslenie.jpg (uczestnik przy ścianie Master Mapy, ulubione zdjęcie użytkownika)
- `/` Dowody - lab-dig-sesja.jpg (sesja z widocznym banerem DIG - dopasowane do faktu o DIG)
- `/o-nas` - duet-radio-afera.jpg (Krzysztof + Jakub razem, studio Radia Afera) obok obu bio
- `/metoda` - master-mapa-sciana.jpg, gora-lodowa-sciana.jpg (Krzysztof przy ścianie Kliniki Procesowej)
- `/dla-partnerow` - post-ci-lab-sesja.jpg (LAB #1, bez DIG - pasuje do opisu pierwszych edycji)
- `/dla-firm` - lab-zespol-whiteboard.jpg (zespół specjalistów przy pracy, nie portret Krzysztofa)
- `/og.jpg` - wygenerowany z duet-radio-afera.jpg (1200x630)

Zdjęcie duet-itm-scena.jpg (Krzysztof+Jakub na scenie ITM) zostało usunięte - pochodziło z innego eventu (sparing procesowy Jakuba), niespójne z genezą POST-CI. Można wrócić do niego z właściwym opisem kontekstu.

Zdjęcia grupowe z widocznymi twarzami uczestników użyte za zgodą użytkownika.

## Klucze
- `RESEND_API_KEY`, `KONTAKT_TO`, `KONTAKT_FROM` - w `.env.local` (NIE w git) i w Vercel Environment Variables.
- `KONTAKT_TO` = mge@zhaliniezfolderu.com (adres konta Resend - darmowy plan wysyła WYŁĄCZNIE tam).
- `KONTAKT_FROM` = onboarding@resend.dev. Do produkcji: zweryfikować własną domenę w Resend.

## Do zrobienia
- [ ] Pełna polityka prywatności (osobna strona) - na razie krótka notka w formularzu, wystarczająca na start, nie docelowo
- [ ] Zebrać zgody i mini-bio specjalistów do sekcji "Drugi filar POST-CI" na `/o-nas`
- [ ] Dodać 2-3 konkretne zdania budujące kompetencję Krzysztofa i Jakuba na `/o-nas` (potrzebne realne fakty/CV od użytkownika)
- [ ] Rozważyć gdzie wykorzystać zdjęcie duet-itm-scena.jpg z właściwym opisem
- [ ] Własna domena zamiast post-gray.vercel.app (Vercel Settings -> Domains), jeśli użytkownik chce
- [ ] Zweryfikować domenę w Resend, żeby formularz przyjmował zgłoszenia od dowolnych osób
- [ ] M7 - `sitemap.ts`, `robots.ts`, canonical
- [ ] Więcej opinii uczestników LAB-ów, gdy spłyną kolejne
- [ ] Doprecyzować z użytkownikiem: czy DFR/WPT/UMWD można nazwać po potwierdzeniu współpracy

## Jak wznowić
Napisz w Claude Code: `/strona wznów`
