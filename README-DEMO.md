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
- Fonturi self-hosted: **Bodoni Moda** (titluri) + **Poppins** (body) — aceeași pereche
  ca în referință
- Imagini optimizate la build de `astro:assets` (WebP, dimensiuni multiple)

## Structura

```
src/
  data/site.ts        brand, contact, nav, servicii, cifre, testimoniale
  data/portfolio.ts   galeria (imagine + alt + caption + categorie)
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
public/video/hero.mp4              clipul de fundal de pe pagina de video
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
2. **Performanță** — `public/video/hero.mp4` are 1,7 MB necomprimat, pentru că `ffmpeg` de pe
   mașina asta e stricat (lipsește `libx265`). De comprimat înainte de lansare:
   ```bash
   ffmpeg -i hero.mp4 -an -c:v libx264 -crf 30 -preset slow -movflags +faststart hero-opt.mp4
   ffmpeg -i hero.mp4 -an -c:v libvpx-vp9 -crf 38 -b:v 0 hero.webm
   ```
   Apoi adaugă și sursa `.webm` în `video-eveniment.astro`, înaintea celei `.mp4`.
3. **Pachet legal** — banner cookie/GDPR + Termeni + Politica de confidențialitate +
   Politica de cookies, plus creditul „made by RTR" în footer.
4. **Editare de către client** (dacă o cere) — Keystatic peste conținutul din `src/data/`,
   build prin GitHub Actions, deploy static pe Hostinger.

## Imaginile

Cele 28 de fotografii sunt generate (Higgsfield, model `soul_2`) special pentru demo:
studio, nuntă, botez, corporate, aniversare, echipament, montaj. Sunt brandless și fără
oameni recognoscibili, exact ca să poată fi înlocuite una câte una cu materialul clientului.

Trei imagini au fost regenerate pentru că aveau text inventat vizibil (ecran de monitor,
ecran de proiecție, cartonaș de masă) — semnul cel mai clar de imagine generată. Dacă mai
adaugi imagini generate, verifică-le pe toate la mărime mare pentru text.
