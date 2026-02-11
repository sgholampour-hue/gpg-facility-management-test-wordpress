# GPG Facility Management – WordPress Theme

## Installatiehandleiding

### 1. Bestandsstructuur
Zorg dat je mapstructuur er zo uitziet:

```
gpg-facility/
├── style.css              ← Thema-stijlen + thema-header
├── functions.php          ← Thema-functies, enqueue, Customizer
├── index.php              ← Fallback template
├── header.php             ← Header + navigatie
├── footer.php             ← Footer
├── front-page.php         ← One-page homepage
├── screenshot.png         ← Thema-screenshot (vervang met echte 1200×900 screenshot)
├── README.md              ← Dit bestand
└── assets/
    ├── js/
    │   └── main.js        ← JavaScript (menu, scroll, animaties)
    └── images/
        ├── gpg-logo.png   ← Logo (kopieer vanuit src/assets/)
        ├── hero-office.jpg
        ├── dienst-handyman-new.jpg
        ├── dienst-verhuizen-new.jpg
        ├── dienst-facilities-new.jpg
        ├── dienst-fitout-new.jpg
        ├── dienst-inkoop-new.jpg
        ├── dienst-stoffering-new.jpg
        ├── project-booking.jpg
        ├── project-schiphol.jpg
        ├── project-hub.jpg
        ├── project-hub-2.jpg
        └── clients/
            ├── adyen.png
            ├── booking.png
            ├── cbre.png
            ├── dyson.png
            ├── schiphol.png
            ├── tiktok.png
            ├── wework.png
            └── gsa-groep.png
```

### 2. Afbeeldingen kopiëren
Kopieer de afbeeldingen uit `src/assets/` naar `assets/images/` in de themamap.

### 3. Screenshot maken
Vervang `screenshot.png` met een echte screenshot van je thema (1200×900px).

### 4. Installeren in WordPress
1. Zip de hele `gpg-facility/` map
2. Ga naar **WordPress Admin → Weergave → Thema's → Nieuw thema toevoegen → Thema uploaden**
3. Upload de zip en activeer het thema

### 5. Configuratie
Na activering:
- **Weergave → Customizer → Contact Informatie** – Vul telefoon, e-mail, adres in
- **Weergave → Customizer → Hero Sectie** – Pas titel, subtitel en achtergrondafbeelding aan
- **Weergave → Customizer → Bedrijfsinformatie** – BTW-id en KvK-nummer
- **Weergave → Customizer → Identiteit** – Upload je logo via "Custom Logo"
- **Weergave → Menu's** – Maak een menu aan en wijs het toe aan "Hoofdmenu"

### 6. Google Fonts
Titillium Web en Open Sans worden automatisch geladen via Google Fonts.

### Vereisten
- WordPress 5.0+
- PHP 7.4+
