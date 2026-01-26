import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: "website" | "article" | "product";
  image?: string;
  structuredData?: Record<string, unknown>;
}

const defaultMeta = {
  title: "GPG Facility Management",
  description: "Professionele facilitaire dienstverlening voor fit-outs, verhuizingen, handyman services en integrated facilities. Uw betrouwbare partner voor complete projecten.",
  siteUrl: "https://gpg-facility.lovable.app",
};

// Default OG image - professional facility management themed
const defaultOGImage = "https://gpg-facility.lovable.app/og-image.jpg";

// Page-specific OG images and descriptions
export const pageMetaData: Record<string, { description: string; image: string }> = {
  home: {
    description: "GPG Facility Management biedt complete facilitaire ondersteuning: fit-outs, verhuizingen, handyman services en integrated facilities. Al 15+ jaar partner van Schiphol, Booking.com en meer.",
    image: defaultOGImage,
  },
  diensten: {
    description: "Ontdek onze facilitaire diensten: handyman, verhuizingen, fit-outs, integrated facilities, inkoop en stoffering. Complete oplossingen voor kantoren en bedrijven.",
    image: defaultOGImage,
  },
  projecten: {
    description: "Bekijk onze projecten voor Booking.com, Schiphol en HUB-locaties. Van 65.000m² kantoorinrichtingen tot doorlopend werkplekbeheer.",
    image: defaultOGImage,
  },
  overons: {
    description: "GPG Facility Management, onderdeel van GSA Groep sinds 1982. Meer dan 40 jaar ervaring in facilitaire dienstverlening met focus op vakmanschap en duurzaamheid.",
    image: defaultOGImage,
  },
  duurzaamheid: {
    description: "Circulariteit staat centraal bij GPG. 85% materiaalhergebruik, CO₂-reductie en 100% circulaire inkoop. Ontdek onze duurzame aanpak.",
    image: defaultOGImage,
  },
  contact: {
    description: "Neem contact op met GPG Facility Management. Bel +31(0)20 795 21 00 of mail info@gpgfacilities.nl. Wij reageren binnen 24 uur.",
    image: defaultOGImage,
  },
};

export const SEO = ({
  title,
  description = defaultMeta.description,
  canonical,
  type = "website",
  image = defaultOGImage,
  structuredData,
}: SEOProps) => {
  const pageTitle = title
    ? `${title} | GPG Facility Management`
    : defaultMeta.title;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GPG Facility Management",
    url: defaultMeta.siteUrl,
    logo: `${defaultMeta.siteUrl}/gpg-logo.png`,
    description: defaultMeta.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Valkweg 111",
      addressLocality: "Schiphol",
      postalCode: "1118 ED",
      addressCountry: "NL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+31-20-795-21-00",
      contactType: "customer service",
      availableLanguage: ["Dutch", "English"],
    },
    sameAs: ["https://www.linkedin.com/company/gpg-facility-management"],
  };

  const defaultStructuredData = structuredData || organizationSchema;

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title || 'GPG Facility Management'} - Professionele facilitaire dienstverlening`} />
      <meta property="og:locale" content="nl_NL" />
      <meta property="og:site_name" content="GPG Facility Management" />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${title || 'GPG Facility Management'} - Professionele facilitaire dienstverlening`} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="GPG Facility Management" />
      <meta name="geo.region" content="NL-NH" />
      <meta name="geo.placename" content="Schiphol" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(defaultStructuredData)}
      </script>
    </Helmet>
  );
};

// Pre-defined structured data for services
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "Organization",
    name: "GPG Facility Management",
  },
  serviceType: "Facility Management",
  areaServed: {
    "@type": "Country",
    name: "Netherlands",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Facilitaire Diensten",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fit-out & Projectinrichting",
          description: "Complete inrichting van kantoren en werkruimtes",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Verhuizingen",
          description: "Professionele bedrijfsverhuizingen met minimale downtime",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Handyman Services",
          description: "Onderhoud en kleine reparaties door vakbekwame technici",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Integrated Facilities",
          description: "Complete facilitaire ondersteuning onder één dak",
        },
      },
    ],
  },
};

// FAQ structured data helper
export const createFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export default SEO;
