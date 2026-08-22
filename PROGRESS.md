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
- [x] `/o-nas`: Krzysztof + Jakub (z placeholderami na zdjęcia), geneza POST-CI, hasło #ZHaliNieZFolderu
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
- [ ] Przed deployem: sprawdz-kod (build + anti-ai-look + sekrety/API)
- [ ] Po deployu: rate limit `/api/contact` w Vercel WAF, jeśli plan to umożliwia
- [ ] Przed produkcją: zweryfikować domenę w Resend, żeby formularz mógł wysyłać maile na dowolny adres

## Do zrobienia
- [ ] Skill `obrazy` - dobór i wstawienie realnych zdjęć (zdjęcia ścian/karteczek z LAB-ów, portrety Krzysztofa i Jakuba na `/o-nas`, grupa przy pracy) - placeholdery czekają w `KtoJestKim.tsx`
- [ ] Skill `sprawdz-kod` - build + anti-ai-look + bezpieczeństwo (przed deployem)
- [ ] M6 deploy - Vercel + domena, wtedy uzupełnić `metadataBase` w `layout.tsx`
- [ ] Opinie uczestników LAB-ów do sekcji Dowody na stronie głównej (obecnie placeholder "w przygotowaniu")

## Jak wznowić
Napisz w Claude Code: `/strona wznów`
