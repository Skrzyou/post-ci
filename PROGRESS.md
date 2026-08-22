# PROGRESS - Post-CI Lab

Status: rdzeń designu gotowy. Następny krok: budowa sekcji (skill `zbuduj-strone`, rdzeń: Strona główna + Dla firm + Kontakt).

## Zrobione
- [x] Utworzony projekt Next.js (create-next-app, App Router, TS, Tailwind, src/)
- [x] Zainstalowane skille kursu (.claude/skills, .claude/commands, .claude/materialy)
- [x] Skill `kontekst` - profil, persona, procesy (M1)
- [x] Skill `karty` - karta strategiczna, architektura treści, karta wizualna (M3)
- [x] Skill `design` - design tokens, fundament ruchu (M4)

## Decyzje (design)
- Kolory: tło kraft `#f2ebe1`, powierzchnia `#e6dcc8`, tekst `#23201b`, akcent rdzawy `#c1502e`
- Fonty: nagłówki Space Grotesk, body Inter (next/font/google, latin-ext)
- Promień: 0.25rem (ostre rogi, surowy charakter)
- Warstwa ruchu: `motion` zainstalowany, `Reveal` + `StaggerList` w `src/components/motion/`, `<MotionConfig reducedMotion="user">` w layout
- Hero: tekstowy rytm krótkich zdań (inspiracja nobl.io), bez zdjęcia w tle
- Pełne decyzje w `karty/design-decyzje.md`

## Do zrobienia
- [ ] Skill `obrazy` - dobór zdjęć (M4) - zdjęcia ścian/karteczek z LAB-ów, portrety Krzysztofa i Jakuba, grupa przy pracy
- [ ] Skill `zbuduj-strone` - budowa systemu, sekcja po sekcji (M5). Etap 1 (rdzeń): Strona główna + Dla firm + Kontakt. Etap 2: Dla partnerów + Jak działamy. Etap 3: Dla specjalistów + O nas.
- [ ] Skill `sprawdz-kod` - build + anti-ai-look + bezpieczeństwo
