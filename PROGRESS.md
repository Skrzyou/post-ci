# PROGRESS - Post-CI Lab

Status: cały system (rdzeń + etap 2 + etap 3) zbudowany - 7 podstron, wszystkie kompilują się czysto i działają lokalnie.

## Zrobione
- [x] Utworzony projekt Next.js (create-next-app, App Router, TS, Tailwind, src/)
- [x] Zainstalowane skille kursu (.claude/skills, .claude/commands, .claude/materialy)
- [x] Skill `kontekst` - profil, persona, procesy (M1)
- [x] Skill `karty` - karta strategiczna, architektura treści, karta wizualna (M3)
- [x] Skill `design` - design tokens, fundament ruchu (M4)
- [x] Szkielet: layout, Nav (z mobilnym Sheet, 5 pozycji + Kontakt CTA), Footer, SEO metadata per podstrona
- [x] `/` Strona główna: Hero (tekstowy rytm, insp. nobl.io), 3 ścieżki, Jak działa, Dowody, Prowadzący, CTA końcowe
- [x] `/dla-firm`: hero, dla kogo/nie, LAB vs INSIDE, współpraca krok po kroku, czego nie robimy, FAQ
- [x] `/dla-partnerow`: hero, punkt wyjścia (3 LAB-y), wartość dla partnera, propozycja pilotażu 12M, role
- [x] `/dla-specjalistow`: hero, kryteria wejścia, obszary puli, co wnosi/dostaje specjalista
- [x] `/metoda`: Master Mapa, Góra Lodowa, Laboratorium, Kontrakt 30 Dni + T+30, zasady nienaruszalne
- [x] `/o-nas`: Krzysztof + Jakub (prawdziwe zdjęcia), geneza POST-CI, hasło #ZHaliNieZFolderu
- [x] `/kontakt`: formularz z wyborem "kim jestem" (firma-lab/firma-inside/partner/specjalista), prefill z query param `?jestem=`
- [x] `/api/contact` - Resend + walidacja + honeypot antyspamowy, przetestowany na żywo

## Decyzje (design)
- Kolory: tło kraft `#f2ebe1`, powierzchnia `#e6dcc8`, tekst `#23201b`, akcent rdzawy `#c1502e`
- Fonty: nagłówki Space Grotesk, body Inter (next/font/google, latin-ext)
- Promień: 0.25rem (ostre rogi, surowy charakter)
- UI kit: shadcn na bazie `@base-ui/react` - komponenty Button/Sheet używają `render={<Link .../>}` + `nativeButton={false}` zamiast `asChild`
- Pełne decyzje w `karty/design-decyzje.md`

## Klucze
- `RESEND_API_KEY`, `KONTAKT_TO`, `KONTAKT_FROM` - w `.env.local` (NIE w git). Potwierdzone jako ignorowane.
- `RESEND_API_KEY` ustawiony, formularz przetestowany lokalnie - działa (`{"ok":true}`).
- `KONTAKT_TO` = mge@zhaliniezfolderu.com (adres, którym założono konto Resend - darmowy plan wysyła WYŁĄCZNIE tam).
- `KONTAKT_FROM` = onboarding@resend.dev (adres testowy). Do produkcji: zweryfikować własną domenę w Resend.

## Bezpieczeństwo
- [x] sprawdz-kod: build OK, anti-ai-look OK, SEO OK, bezpieczeństwo OK (2026-08-22)
  - Naprawiono: 3x H1 w hero strony głównej -> 1 semantyczny H1 (SEO)
  - Naprawiono: komunikaty błędów formularza bez polskich ogonków -> poprawione
  - Dodano: podstawowe nagłówki bezpieczeństwa w `next.config.ts` (X-Content-Type-Options, Referrer-Policy, X-Frame-Options, Permissions-Policy)
  - Sekrety: `.env.local` potwierdzone jako ignorowane, brak kluczy w plikach śledzonych przez git, `npm audit` = 0 podatności
- [ ] Po deployu: rate limit `/api/contact` w Vercel WAF, jeśli plan to umożliwia
- [ ] Przed produkcją: zweryfikować domenę w Resend, żeby formularz mógł wysyłać maile na dowolny adres
- [ ] Po deployu (M7): CSP dopiero po dodaniu analityki/CMS, nie ustawiać na sztywno teraz

## Zdjęcia (skill obrazy, 2026-08-23)
7 prawdziwych zdjęć wstawionych przez `next/image` z polskimi altami, źródła: własne materiały użytkownika (`moja strona/public/images/` i `FIRMA KODY/mge/foto postci/`). Duże oryginały (3-6MB) skompresowane do ~0.2-0.35MB (sharp, resize do 2000px szer., jpeg q82).
- `/o-nas` - krzysztof-hala.jpg (Krzysztof w hali), jakub-master-mapa.jpg (Jakub przy ścianie Master Mapy - tożsamość potwierdzona przez użytkownika)
- `/metoda` - master-mapa-sciana.jpg (Master Mapa), gora-lodowa-sciana.jpg (Krzysztof przy Górze Lodowej)
- `/dla-partnerow` - lab-dig-sesja.jpg (sesja LAB z widocznym banerem Dolnośląskiej Izby Gospodarczej)
- `/` (Dowody) - post-ci-lab-sesja.jpg (uczestnicy LAB-u w kręgu, Master Mapa w tle)
- `/dla-firm` - rozmowa-hala.jpg (Krzysztof w rozmowie z właścicielem firmy)

Zdjęcia grupowe (z widocznymi twarzami uczestników LAB-ów) użyte za zgodą użytkownika - potwierdził, że można ich użyć, weryfikacja ostateczna nastąpi gdy strona będzie gotowa.

## Do zrobienia
- [ ] M6 deploy - Vercel + domena, wtedy uzupełnić `metadataBase` w `layout.tsx`
- [ ] M7 - `sitemap.ts`, `robots.ts`, canonical (dopiero po publikacji, wymaga adresu live)
- [ ] Opinie uczestników LAB-ów do sekcji Dowody na stronie głównej (obecnie placeholder "w przygotowaniu")
- [ ] Uruchomić ponownie `sprawdz-kod` po zdjęciach, żeby potwierdzić finalną checklistę anti-ai-look przed deployem

## Możesz pushować
Build zielony, wygląd bez AI-slopu, podstawy SEO i bezpieczeństwa na miejscu. Gotowe do `git push` i deployu (M6).

## Jak wznowić
Napisz w Claude Code: `/strona wznów`
