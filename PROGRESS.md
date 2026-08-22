# PROGRESS - Post-CI Lab

Status: rdzeń systemu (Etap 1) gotowy - Strona główna + Dla firm + Kontakt. Buduje się i działa lokalnie.

## Zrobione
- [x] Utworzony projekt Next.js (create-next-app, App Router, TS, Tailwind, src/)
- [x] Zainstalowane skille kursu (.claude/skills, .claude/commands, .claude/materialy)
- [x] Skill `kontekst` - profil, persona, procesy (M1)
- [x] Skill `karty` - karta strategiczna, architektura treści, karta wizualna (M3)
- [x] Skill `design` - design tokens, fundament ruchu (M4)
- [x] Szkielet: layout, Nav (z mobilnym Sheet), Footer, SEO metadata podstawowe
- [x] Strona główna: Hero (tekstowy rytm, insp. nobl.io), 3 ścieżki, Jak działa, Dowody, Prowadzący, CTA końcowe
- [x] Podstrona `/dla-firm`: hero, dla kogo/nie, LAB vs INSIDE, współpraca krok po kroku, czego nie robimy, FAQ
- [x] Podstrona `/kontakt`: formularz z wyborem "kim jestem" (firma-lab/firma-inside/partner/specjalista), prefill z query param `?jestem=`
- [x] `/api/contact` - Resend + walidacja + honeypot antyspamowy

## Decyzje (design)
- Kolory: tło kraft `#f2ebe1`, powierzchnia `#e6dcc8`, tekst `#23201b`, akcent rdzawy `#c1502e`
- Fonty: nagłówki Space Grotesk, body Inter (next/font/google, latin-ext)
- Promień: 0.25rem (ostre rogi, surowy charakter)
- UI kit: shadcn na bazie `@base-ui/react` - komponenty Button/Sheet używają `render={<Link .../>}` + `nativeButton={false}` zamiast `asChild`
- Pełne decyzje w `karty/design-decyzje.md`

## Klucze
- `RESEND_API_KEY`, `KONTAKT_TO`, `KONTAKT_FROM` - w `.env.local` (NIE w git). `.env.local` potwierdzony jako ignorowany.
- `RESEND_API_KEY` ustawiony, formularz przetestowany lokalnie - działa (`{"ok":true}`).
- `KONTAKT_TO` = mge@zhaliniezfolderu.com (to jest adres, którym założono konto Resend - na darmowym planie bez zweryfikowanej domeny testowe maile mogą iść WYŁĄCZNIE tam, inny odbiorca zwraca błąd 403 od Resend).
- `KONTAKT_FROM` = onboarding@resend.dev (adres testowy Resend). Do produkcji: zweryfikować własną domenę w Resend i podmienić na adres z tej domeny, żeby móc wysyłać do dowolnych odbiorców.

## Bezpieczeństwo
- [ ] Przed deployem: sprawdz-kod (build + anti-ai-look + sekrety/API)
- [ ] Po deployu: rate limit `/api/contact` w Vercel WAF, jeśli plan to umożliwia
- [ ] Przed produkcją: zweryfikować domenę w Resend, żeby formularz mógł wysyłać maile na dowolny adres (nie tylko na mge@zhaliniezfolderu.com)

## Do zrobienia
- [ ] Skill `obrazy` - dobór zdjęć (M4) - zdjęcia ścian/karteczek z LAB-ów, portrety Krzysztofa i Jakuba, grupa przy pracy
- [ ] Etap 2 (zbuduj-strone): podstrony Dla partnerów + Jak działamy
- [ ] Etap 3 (zbuduj-strone): podstrony Dla specjalistów + O nas
- [ ] Skill `sprawdz-kod` - build + anti-ai-look + bezpieczeństwo (przed deployem)

## Jak wznowić
Napisz w Claude Code: `/strona wznów`
