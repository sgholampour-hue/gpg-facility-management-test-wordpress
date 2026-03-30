
-- Update Homepage with complete content + SEO
UPDATE public.page_content SET
  seo_title = 'GPG Facility Management | Professionele Facilitaire Dienstverlening',
  seo_description = 'GPG biedt complete facilitaire diensten: huismeesterdiensten, verhuizingen, fit-out, inkoop en integrated facilities management. 40+ jaar ervaring.',
  og_title = 'GPG Facility Management | Facilitaire Dienstverlening',
  og_description = 'Professionele facilitaire diensten met een persoonlijke benadering. Onderdeel van de GSA Groep.'
WHERE page_slug = 'home';

-- Update Over Ons with complete sections + SEO
UPDATE public.page_content SET
  sections = '{
    "hero": {
      "label": "Over Ons",
      "headline": "Wij zijn GPG Facility Management",
      "subheadline": "Onderdeel van de GSA Groep – Al meer dan 40 jaar specialist in facilitaire dienstverlening."
    },
    "intro": {
      "label": "Onze Missie",
      "headline": "Ontzorgen van organisaties met facilitaire dienstverlening",
      "text": "GPG Facility Management is gespecialiseerd in huismeesterdiensten, verhuizingen, integrated facilities en fit-out projecten. Of het nu gaat om dagelijks onderhoud of complete kantoorinrichtingen—circulariteit staat altijd voorop met duurzame materialen en slim hergebruik.",
      "text2": "Onze kracht? Vakmanschap gecombineerd met een no-nonsense aanpak en focus op circulaire oplossingen."
    },
    "duurzaamheid": {
      "label": "Duurzame Visie",
      "headline": "Werken aan de toekomst",
      "text": "Circulariteit staat voorop in ons proces. Wij focussen op circulaire economie, energiezuinige oplossingen en CO2-reductie bij elk project."
    }
  }'::jsonb,
  seo_title = 'Over Ons | GPG Facility Management',
  seo_description = 'Leer GPG Facility Management kennen: onderdeel van de GSA Groep, 40+ jaar ervaring in facilitaire dienstverlening.',
  og_title = 'Over GPG Facility Management',
  og_description = 'Onderdeel van de GSA Groep. Al meer dan 40 jaar specialist in facilitaire dienstverlening.'
WHERE page_slug = 'over-ons';

-- Update Diensten with complete sections + SEO
UPDATE public.page_content SET
  sections = '{
    "hero": {
      "label": "Onze diensten",
      "headline": "Complete facilitaire dienstverlening",
      "subheadline": "Van huismeesterdiensten tot complete fit-out projecten. GPG Facility Management is jouw partner voor alle facilitaire vraagstukken."
    },
    "cta": {
      "headline": "Klaar om te starten?",
      "text": "Neem contact met ons op voor een vrijblijvend gesprek over jouw facilitaire behoeften.",
      "button_label": "Neem contact op",
      "button_link": "/contact"
    }
  }'::jsonb,
  seo_title = 'Diensten | GPG Facility Management',
  seo_description = 'Ontdek onze facilitaire diensten: huismeesterdiensten, verhuizingen, integrated facilities, fit-outs, inkoop en stoffering.',
  og_title = 'Onze Diensten | GPG Facility Management',
  og_description = 'Complete facilitaire ondersteuning: van verhuizingen tot kantoorinrichtingen.'
WHERE page_slug = 'diensten';

-- Update Contact with complete sections + SEO
UPDATE public.page_content SET
  sections = '{
    "hero": {
      "label": "Contact",
      "headline": "Neem contact met ons op",
      "subheadline": "Heb je vragen of wil je meer informatie? Wij staan voor je klaar."
    },
    "form": {
      "title": "Stuur ons een bericht",
      "subtitle": "Vul het formulier in en wij nemen binnen 24 uur contact met je op."
    }
  }'::jsonb,
  seo_title = 'Contact | GPG Facility Management',
  seo_description = 'Neem contact op met GPG Facility Management. Bel +31(0)20 795 21 00 of mail info@gpgfacilities.nl.',
  og_title = 'Contact GPG Facility Management',
  og_description = 'Neem contact op voor een vrijblijvend adviesgesprek over facilitaire diensten.'
WHERE page_slug = 'contact';

-- Update Projecten with complete sections + SEO
UPDATE public.page_content SET
  seo_title = 'Projecten | GPG Facility Management',
  seo_description = 'Bekijk onze projecten: van Booking.com fit-outs tot Schiphol werkplekbeheer. Ontdek wat GPG voor jouw organisatie kan doen.',
  og_title = 'Onze Projecten | GPG Facility Management',
  og_description = 'Van kantoorinrichtingen tot bouwlogistiek: een selectie van onze projecten.'
WHERE page_slug = 'projecten';

-- Update Duurzaamheid SEO
UPDATE public.page_content SET
  og_title = 'Duurzaamheid & Circulariteit | GPG Facility Management',
  og_description = 'Ontdek onze circulaire aanpak: duurzame materialen, slim hergebruik en CO2-reductie.'
WHERE page_slug = 'duurzaamheid';

-- Update Voorwaarden SEO
UPDATE public.page_content SET
  seo_title = 'Algemene Voorwaarden | GPG Facility Management',
  seo_description = 'Lees de algemene voorwaarden van GPG Facility Management.',
  og_title = 'Algemene Voorwaarden | GPG',
  og_description = 'Algemene voorwaarden van GPG Facility Management.'
WHERE page_slug = 'voorwaarden';

-- Update Privacy SEO
UPDATE public.page_content SET
  seo_title = 'Privacyverklaring | GPG Facility Management',
  seo_description = 'Lees de privacyverklaring van GPG Facility Management over hoe wij omgaan met persoonsgegevens.',
  og_title = 'Privacyverklaring | GPG',
  og_description = 'Hoe GPG Facility Management omgaat met uw persoonsgegevens.'
WHERE page_slug = 'privacy';
