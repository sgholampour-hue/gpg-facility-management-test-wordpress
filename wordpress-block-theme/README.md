# GPG Facility Management – WordPress Block Theme

## Overzicht

Pixel-perfect WordPress Block Theme (Full Site Editing) dat exact overeenkomt met het Lovable React-project. Gebouwd met `theme.json` design tokens, template parts, en custom PHP patterns.

## Systeemvereisten

- WordPress 6.0+
- PHP 7.4+

## Installatie

1. Zip de map `wordpress-block-theme/` als `gpg-facility.zip`
2. Ga naar **WordPress Admin → Weergave → Thema's → Nieuw toevoegen → Thema uploaden**
3. Upload de zip en activeer het thema

## Bestandsstructuur

```
wordpress-block-theme/
├── style.css                          ← Thema-header
├── theme.json                         ← Design tokens (kleuren, fonts, spacing, shadows)
├── functions.php                      ← CPT, menus, customizer, image sizes
├── assets/
│   ├── css/custom.css                 ← Alle animaties, hover states, responsiveness
│   ├── js/main.js                     ← Counters, FAQ, marquee, scroll reveals
│   └── images/                        ← Alle afbeeldingen
│       ├── gpg-logo.png
│       ├── hero-office.jpg
│       ├── dienst-*.jpg
│       ├── project-*.jpg
│       ├── team-*.png
│       ├── cta-meeting.jpg
│       ├── cert-*.png
│       ├── gsa-*.png
│       └── clients/                   ← Client logo's
├── templates/
│   ├── front-page.html                ← Homepage (alle patterns)
│   ├── page.html                      ← Standaard pagina
│   ├── page-diensten.html             ← Diensten template
│   ├── page-over-ons.html             ← Over Ons template
│   ├── page-contact.html              ← Contact template
│   ├── page-duurzaamheid.html         ← Duurzaamheid template
│   ├── page-projecten.html            ← Projecten template
│   ├── page-privacy.html              ← Privacy template
│   ├── page-voorwaarden.html          ← Voorwaarden template
│   ├── single.html                    ← Enkel bericht
│   ├── archive.html                   ← Archief
│   ├── search.html                    ← Zoekresultaten
│   ├── home.html                      ← Blog
│   └── 404.html                       ← 404 pagina
├── parts/
│   ├── header.html                    ← Sticky header met navigatie
│   └── footer.html                    ← Footer met CTA banner
└── patterns/
    ├── hero-split.php                 ← Homepage hero (split layout)
    ├── client-logos.php               ← Client logo marquee
    ├── services-bento.php             ← Diensten bento grid
    ├── stats-ticker.php               ← Statistieken balk
    ├── why-gpg.php                    ← Waarom GPG sectie
    ├── process-timeline.php           ← Werkwijze tijdlijn
    ├── projects-showcase.php          ← Projecten showcase
    ├── testimonial.php                ← Testimonial card
    ├── faq-homepage.php               ← FAQ accordion
    ├── cta-contact.php                ← Contact CTA sectie
    ├── page-hero.php                  ← Inner page hero
    └── footer-cta.php                 ← Footer CTA banner
```

## Pagina Mapping (React → WordPress)

| React Route          | WP Template             | Hoe aanmaken in WP                                          |
|----------------------|-------------------------|--------------------------------------------------------------|
| `/` (Index.tsx)      | `front-page.html`       | Automatisch (front page)                                     |
| `/diensten`          | `page-diensten.html`    | Maak pagina "Diensten", kies template "Diensten"             |
| `/over-ons`          | `page-over-ons.html`    | Maak pagina "Over Ons", kies template "Over Ons"             |
| `/projecten`         | `page-projecten.html`   | Maak pagina "Projecten", kies template "Projecten"           |
| `/duurzaamheid`      | `page-duurzaamheid.html`| Maak pagina "Duurzaamheid", kies template "Duurzaamheid"     |
| `/contact`           | `page-contact.html`     | Maak pagina "Contact", kies template "Contact"               |
| `/privacy`           | `page-privacy.html`     | Maak pagina "Privacy", kies template "Privacy"               |
| `/voorwaarden`       | `page-voorwaarden.html` | Maak pagina "Voorwaarden", kies template "Voorwaarden"       |
| `/projecten/:slug`   | `single.html` (CPT)     | Maak berichten in CPT "Projecten"                            |

## Content Aanmaken

### Stap 1: Pagina's aanmaken
Maak voor elke bovenstaande pagina een WordPress-pagina aan:
1. Ga naar **Pagina's → Nieuwe pagina**
2. Geef de pagina de juiste titel (bijv. "Diensten")
3. In de **paginasjabloon** dropdown, kies het juiste template
4. Voeg content toe met de Block Editor

### Stap 2: Homepage instellen
1. Ga naar **Instellingen → Lezen**
2. Kies "Een statische pagina" bij "Homepagina toont"
3. Selecteer de gewenste pagina als homepage (of laat leeg voor front-page.html)

### Stap 3: Menu instellen
1. Ga naar **Weergave → Editor → Navigatie**
2. Bewerk de navigatie in de header template part
3. Voeg links toe: Home, Over Ons, Diensten, Projecten, Duurzaamheid

### Stap 4: Logo uploaden
1. Ga naar **Weergave → Editor → Site-identiteit**
2. Upload het GPG logo (gpg-logo.png)

## Patterns Gebruiken

Patterns zijn beschikbaar in de Block Editor:
1. Klik op "+" om een blok toe te voegen
2. Zoek op "GPG" in het patterns tabblad
3. Selecteer het gewenste pattern (bijv. "GPG Hero Split")

Beschikbare categorieën:
- **GPG Sections** – Inhoudssecties (diensten, stats, FAQ, etc.)
- **GPG Heroes** – Hero secties
- **GPG CTA** – Call-to-action secties

## Customizer Instellingen

Ga naar **Weergave → Customizer** (of **Weergave → Editor**):

### Contactgegevens
- **Telefoon**: +31(0)20 795 21 00
- **E-mail**: info@gpgfacilities.nl
- **Adres**: Valkweg 111, 1118 ED Schiphol
- **BTW-id**: NL854426036B01
- **KvK**: 61641987

### Custom Post Type: Projecten
Het thema registreert een CPT `gpg_project` voor projecten. Gebruik dit voor individuele projectpagina's.

## Design Tokens (theme.json)

| Token               | Waarde     | Gebruik                    |
|---------------------|-----------|----------------------------|
| Primary             | `#16216a` | GSA Navy (koppen, accenten) |
| Accent              | `#6b8a2e` | GPG Olive (knoppen, iconen) |
| Background          | `#ffffff` | Pagina achtergrond          |
| Muted               | `#f3f4f6` | Lichte secties              |
| Border              | `#e2e6ed` | Randen                      |
| Cream               | `#f9f8f5` | Warme achtergrond           |
| Font Heading        | Titillium Web | Koppen (uppercase)      |
| Font Body           | Open Sans | Body tekst                  |

## Animaties & Interacties

Alle animaties uit het React-project zijn geïmplementeerd:

- **Scroll reveal** (450ms ease-in-out, threshold 0.1)
- **Hero entrance** (700ms staggered, translate + fade)
- **Stats counter** (2s count-up animatie, threshold 0.3)
- **Marquee** (30s infinite linear, pauzeer op hover)
- **FAQ accordion** (300ms max-height transitie)
- **Process timeline** (staggered step activation, 300ms per stap)
- **GSA Hoekje** (250ms border-radius transitie op hover)
- **Card hover lifts** (200ms translateY + shadow)
- **Service card** (500ms translateY-8 + accent glow)
- **Project card** (200ms scale + 450ms image zoom)
- **Button hover** (180ms translateY-2)
- **Nav underline** (300ms width expand from center)
- **Reduced motion** support (alle animaties worden uitgeschakeld)

## Afbeeldingen

Kopieer alle afbeeldingen uit `src/assets/` naar `wordpress-block-theme/assets/images/`:
- Logo: `gpg-logo.png`
- Hero: `hero-office.jpg`
- Diensten: `dienst-*-new.jpg`
- Projecten: `project-*.jpg`
- Team: `team-*.png`
- Certificeringen: `cert-*.png`
- GSA: `gsa-*.png`
- CTA: `cta-meeting.jpg`
- Clients: `clients/*.png`

## Breakpoints

Exact dezelfde breakpoints als het Lovable project (Tailwind CSS defaults):
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **Container**: max-width 1400px

## Toegankelijkheid

- Semantische HTML (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`)
- `aria-label` op interactieve elementen
- `aria-expanded` op menu toggles
- Focus states via `:focus-visible`
- `prefers-reduced-motion` support
- Correcte heading hiërarchie (H1 → H4)
