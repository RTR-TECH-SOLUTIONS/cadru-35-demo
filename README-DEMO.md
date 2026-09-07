# Cadru 35 — demo de prezentare (studio foto + foto/video de eveniment)

**Live:** https://rtr-tech-solutions.github.io/cadru-35-demo/
**Repo:** https://github.com/RTR-TECH-SOLUTIONS/cadru-35-demo

Se publică singur: orice push pe `main` declanșează workflow-ul din
`.github/workflows/deploy.yml`, care rulează `npm run build` și urcă `dist/` pe Pages.

Demo pentru clientul care a cerut „ceva asemănător cu socialcarbonara.ro", plus pagini
separate pentru **foto studio**, **foto de eveniment** și **video de eveniment**.

Brandul `Cadru 35` e **inventat**, ca placeholder. Se schimbă dintr-un singur loc:
`src/data/site.ts`.

## Cum îl pornești

```bash
npm install       # doar prima dată
npm run dev       # http://localhost:4321
npm run build     # generează dist/ (static)
npm run preview   # servește dist/ local, ca să vezi exact ce se urcă
```

Deploy: automat pe GitHub Pages la fiecare push pe `main`. Pentru Hostinger, `dist/` se
urcă direct (static, fără server).

**Base path:** pe GitHub Pages site-ul stă la `/cadru-35-demo/`, deci `astro.config.mjs` are
`base: '/cadru-35-demo'`. Toate link-urile interne trec prin helperul din `src/lib/url.ts`.
La mutarea pe domeniul clientului, scoți `site` și `base` din config și nu mai atingi nimic —
helperul devine identitate.

## Stack

- **Astro 7** static (zero JS by default; scripturile de mai jos sunt vanilla, mici)
- **Tailwind 4** + tokens CSS proprii în `src/styles/global.css`
- Fonturi self-hosted: **Fraunces** (titluri, axa `opsz` activă) + **Archivo** (body)
- Imagini optimizate la build de `astro:assets` (WebP, dimensiuni multiple)

## Sistemul de design

Structura secțiunilor (container, ritm, ierarhie) e ancorată în referința pe care a
aprobat-o clientul. Identitatea vizuală e proprie: alt accent, altă serifă, alt limbaj
decorativ. Tokenii stau în `src/styles/global.css`.

| | Valoare |
|---|---|
| Container | 1320px + 60px gutter (24px sub 1024) |
| H1 | Fraunces 400, 70px, lh 1.06, ls -0.022em |
| H2 | Fraunces 400, 54px, lh 1.1 |
| Lead / body | Archivo 20px / 17px, lh 32 / 30 |
| Etichete de secțiune | Archivo 12px 600, ls .18em, uppercase, cu liniuță în față |
| Butoane | colț 2px, padding 17/26, uppercase 14px ls .08em |
| Fundaluri | `#fcfbf9`, secundar `#f4f2ee`, închis `#1a1816` |
| Accent | `#bc420d` (rust de rebate) |
| Accent pe închis | `#e8853c` |
| Secțiuni | 58px sus/jos; `section-lg` 96px |

### Contrastul, verificat

Accentul e ales ca să treacă **AA peste tot**, nu doar ca să arate bine:

| Combinație | Raport |
|---|---|
| `#bc420d` pe `#fcfbf9` | 5.18:1 |
| `#bc420d` pe `#f4f2ee` | 4.79:1 |
| alb pe `#bc420d` | 5.35:1 |
| `#e8853c` pe `#1a1816` | 6.62:1 |

Pe fundal închis (header, footer, hero) se folosește **doar** `--color-accent-hi`;
accentul de bază pică AA acolo (3.31:1).

Verificarea rulează pe toate cele 8 pagini, cu culorile compuse pe canvas ca să prindă și
notațiile `oklab` pe care Tailwind le emite pentru `text-white/60` și similare.

### Limbajul vizual

Decorul vorbește limba meseriei, nu limba de landing:

- **`Perfs.astro`** — bandă de perforații de film 35 mm, ca separator între secțiuni
- **`.rebate`** — numerotarea de pe marginea filmului (`30`, `30A`, `31`…), folosită pe
  cadre, pe listele numerotate și ca etichetă pe imagini
- **`ContactSheet.astro`** — o rolă întreagă de 12 cadre, cu perforații sus și jos, iar
  cadrele alese însemnate cu chenar rust, ca selecțiile marcate cu creion de un editor
- **`Ornament.astro`** — `sprocket`, `crosshair`, `crop`, `grid`, `meter`
- **`Mark.astro`** — colțare de vizor în jurul unui cuvânt (CSS pur, scalează cu
  `font-size`). Se folosește de **5 ori pe tot site-ul**, doar unde cuvântul duce ideea

Toate imaginile au colțuri drepte (`.frame`). Un cadru de film nu e rotunjit.

### Gradul de culoare

Toate fotografiile color trec prin **același grad**, aplicat o singură dată cu un script
Python (curbă de film: umbre ridicate și ușor reci, lumini spre chihlimbar, saturație la
86%, grain fin, seed fix). De aia setul arată ca o singură zi de lucru, nu ca 40 de poze
adunate de peste tot.

Cele trei imagini de la Servicii sunt **alb-negru**, pe aceeași curbă, cu filtru galben ca
la film. Contrastul lor separă secțiunea fără să introducă o culoare care se bate cu
accentul.

## Structura

```
src/
  data/site.ts        brand, contact, nav, servicii, cifre, testimoniale
  data/portfolio.ts   galeria (imagine + alt + caption + categorie)
  data/contactsheet.ts rola de 12 cadre, cu numerele de rebate
  components/         Header, Footer, Gallery, ContactForm, PriceCards, Faq, Steps, ...
  pages/
    index.astro                    Acasă
    despre-noi.astro
    servicii.astro                 hub-ul de servicii + pachete
    servicii/foto-studio.astro     tipuri ședințe, dotări studio, tarife, FAQ
    servicii/foto-eveniment.astro  tipuri, proces în 4 pași, pachete, FAQ
    servicii/video-eveniment.astro hero cu video, livrabile, proces, pachete, FAQ
    portofoliu.astro               galerie filtrabilă + lightbox
    contact.astro                  formular + date + program
public/video/hero.mp4              clipul de fundal (341 KB)
public/video/hero.webm             același clip, VP9 (330 KB)
```

## Ce funcționează în demo

- Meniu mobil (hamburger, panou full-screen, blochează scroll-ul în spate)
- Filtre pe portofoliu (Toate / Foto studio / Foto eveniment / Video), cu `aria-pressed`
- Lightbox: click pe imagine, săgeți stânga/dreapta, `Esc`, click pe fundal, focus gestionat
- Formular de contact cu validare client-side (nume, telefon, email opțional, tip serviciu)
  → deschide WhatsApp cu mesajul pre-completat
- Buton WhatsApp flotant
- Reveal la scroll, oprit automat la `prefers-reduced-motion`
- Video de fundal pe pagina de video: `muted autoplay loop playsinline` + poster, oprit la
  `prefers-reduced-motion`

## Ce e mock (`TODO(real)` în cod)

| Loc | Ce e mock | Ce se face la proiectul real |
|---|---|---|
| `data/site.ts` | nume brand, telefon `+40 721 000 000`, email, adresă, program | datele reale ale clientului |
| `data/site.ts` | cele 3 testimoniale | recenzii reale, cu acordul clienților |
| `data/portfolio.ts` + `assets/img` | toate imaginile sunt generate, brandless | fotografiile clientului |
| `components/ContactForm.astro` | trimiterea merge pe WhatsApp | Resend (email) sau Supabase + notificare |
| `pages/contact.astro` | fără hartă | Google Maps embed cu adresa reală |
| `pages/despre-noi.astro` | echipa (Andrei / Cristina / Robert) | numele reale + portrete făcute în studio |
| `pages/servicii/video-eveniment.astro` | galeria video e din cadre statice | embed-uri Vimeo/YouTube cu filmele reale |
| `components/Footer.astro` | fără pagini legale | Termeni, Confidențialitate, Cookies + banner GDPR + credit RTR |
| toate paginile | prețurile din pachete sunt inventate, plauzibile | tarifele reale ale clientului |

**Prețurile din pachete** (750 lei ședință, 5.800 lei nuntă etc.) sunt puse ca să arate
structura paginii. Trebuie confirmate cu clientul înainte de orice publicare.

## Ce a rămas pe listă pentru proiectul real

1. **SEO** — la preview e doar baza (`lang`, `title`, `description`). La proiectul real:
   research de keyworduri RO pe nișă + oraș („fotograf nuntă București", „închiriere studio
   foto București"), maparea unui keyword principal per pagină, JSON-LD `LocalBusiness`,
   `sitemap.xml`, `robots.txt`, Google Business Profile.
2. **Performanță** — video-ul e deja comprimat: 1,81 MB → **341 KB** (H.264) plus **330 KB**
   (VP9), ambele fără pistă audio, cu `faststart`, iar `.webm` e prima sursă în
   `video-eveniment.astro`. Rămâne de măsurat Lighthouse pe domeniul real.

   Notă pentru mașina asta: `ffmpeg` din Homebrew e rupt, Homebrew a urcat `x265` la 4.3
   (`libx265.217`) fără să reconstruiască `ffmpeg`, care cere `libx265.216`. Fixul curat e
   `brew reinstall ffmpeg`. Fără el, merge și așa:
   ```bash
   export DYLD_FALLBACK_LIBRARY_PATH=/opt/homebrew/Cellar/x265/4.2/lib:/opt/homebrew/lib
   ```
3. **Pachet legal** — banner cookie/GDPR + Termeni + Politica de confidențialitate +
   Politica de cookies, plus creditul „made by RTR" în footer.
4. **Editare de către client** (dacă o cere) — Keystatic peste conținutul din `src/data/`,
   build prin GitHub Actions, deploy static pe Hostinger.

## Imaginile

Cele **41 de fotografii** sunt generate (Higgsfield, model `soul_2`) special pentru demo:
studio, nuntă, botez, corporate, aniversare, echipament, plus rola de 12 cadre de pe
contact sheet. Sunt brandless și fără oameni recognoscibili, exact ca să poată fi înlocuite
una câte una cu materialul clientului.

Toate trec prin `grade.py`, gradul unitar descris mai sus. Dacă adaugi o imagine nouă,
treci-o și pe ea prin același script, altfel iese din familie imediat.

**Ce am păstrat din referință și ce nu.** Structura și ritmul secțiunilor: da, ăla i-a
plăcut clientului. Restul, nu: accentul, serifa, grotescul, decorul, măștile de imagine și
banda de sub hero sunt toate altele. Logo-ul, fotografiile și textele referinței sunt ale
lor și rămân ale lor.

Banda de sub hero are la ei logo-urile clienților; la noi are serviciile, ca să nu
inventăm branduri care ne recomandă.

**Textul inventat în imagini** e semnul cel mai clar de imagine generată. Șase imagini au
fost regenerate din cauza asta (monitor, ecran de proiecție, cartonaș de masă, exponometru
cu scală scrisă, capac de obiectiv, bandă de film peste cadru). Dacă mai adaugi imagini
generate, deschide-le la mărime mare și caută litere.
