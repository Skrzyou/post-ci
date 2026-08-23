# PROGRESS - Post-CI Lab

Status: strona opublikowana i żywa - https://post-gray.vercel.app (Vercel, repo github.com/Skrzyou/post-ci).

## Zrobione
- [x] Utworzony projekt Next.js, skille kursu, kontekst, karty, design (M1-M4)
- [x] 7 podstron zbudowanych: `/`, `/dla-firm`, `/dla-partnerow`, `/dla-specjalistow`, `/metoda`, `/o-nas`, `/kontakt`
- [x] `/api/contact` - Resend + walidacja + honeypot, przetestowany lokalnie i na produkcji (działa)
- [x] `sprawdz-kod` - build, anti-ai-look, SEO, bezpieczeństwo (2026-08-22) - naprawione: 3xH1 w hero, ogonki w błędach formularza, nagłówki bezpieczeństwa w `next.config.ts`
- [x] Deploy: GitHub (Skrzyou/post-ci, branch main) + Vercel (post-gray.vercel.app), zmienne środowiskowe ustawione
- [x] Fix po deployu: Resend klient przenosiony do wnętrza handlera (build padał na Vercelu bez kluczy przy starcie modułu)
- [x] Prawdziwe opinie uczestników w sekcji Dowody (Andrzej Frasek, Igor Zlatojev) zamiast placeholdera
- [x] Nowa sekcja `/o-nas` "POST-CI nie istniałoby bez nich" - podziękowanie specjalistom, miejsce na mini-bio za zgodą (placeholder)

## Decyzje (design)
- Kolory: tło kraft `#f2ebe1`, powierzchnia `#e6dcc8`, tekst `#23201b`, akcent rdzawy `#c1502e`
- Fonty: nagłówki Space Grotesk, body Inter
- UI kit: shadcn na bazie `@base-ui/react` - `render={<Link .../>}` + `nativeButton={false}` zamiast `asChild`
- Pełne decyzje w `karty/design-decyzje.md`

## Zdjęcia (stan na 2026-08-23)
Źródła: `moja strona/public/images/`, `FIRMA KODY/mge/foto postci/`. Duże oryginały skompresowane (sharp, 2000px szer., jpeg q82, ~0.1-0.6MB/szt.).
- `/o-nas` - duet-radio-afera.jpg (Krzysztof + Jakub razem, studio Radia Afera) obok obu bio; Geneza - bez zdjęcia (usunięto niespójne zdjęcie z innego eventu - sparing procesowy Jakuba na ITM Poznań)
- `/metoda` - master-mapa-sciana.jpg, gora-lodowa-sciana.jpg (Krzysztof przy ścianie)
- `/dla-partnerow` - post-ci-lab-sesja.jpg (LAB #1, bez DIG - pasuje do opisu pierwszych edycji)
- `/` (Dowody) - lab-dig-sesja.jpg (sesja z widocznym banerem DIG - dopasowane do cytatu DIG)
- `/dla-firm` - rozmowa-hala.jpg (Krzysztof w rozmowie)

Zdjęcia grupowe z widocznymi twarzami uczestników użyte za zgodą użytkownika.

## Klucze
- `RESEND_API_KEY`, `KONTAKT_TO`, `KONTAKT_FROM` - w `.env.local` (NIE w git) i w Vercel Environment Variables.
- `KONTAKT_TO` = mge@zhaliniezfolderu.com (adres konta Resend - darmowy plan wysyła WYŁĄCZNIE tam).
- `KONTAKT_FROM` = onboarding@resend.dev. Do produkcji: zweryfikować własną domenę w Resend.

## Do zrobienia
- [ ] Zebrać zgody i mini-bio specjalistów do sekcji "POST-CI nie istniałoby bez nich" na `/o-nas`
- [ ] Rozważyć gdzie wykorzystać zdjęcie duet-itm-scena.jpg (Krzysztof+Jakub, scena ITM) - usunięte z Genezy jako niespójne kontekstowo, może wrócić z właściwym opisem
- [ ] Własna domena zamiast post-gray.vercel.app (Vercel Settings -> Domains), jeśli użytkownik chce
- [ ] Zweryfikować domenę w Resend, żeby formularz przyjmował zgłoszenia od dowolnych osób
- [ ] M7 - `sitemap.ts`, `robots.ts`, canonical, `metadataBase` w `layout.tsx` (mamy już adres live)
- [ ] Więcej opinii uczestników LAB-ów, gdy spłyną kolejne

## Jak wznowić
Napisz w Claude Code: `/strona wznów`
