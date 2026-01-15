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
  image: "https://lovable.dev/opengraph-image-p98pqg.png",
  siteUrl: "https://gpg-facility.lovable.app",
};

export const SEO = ({
  title,
  description = defaultMeta.description,
  canonical,
  type = "website",
  image = defaultMeta.image,
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
      streetAddress: "Siriusdreef 17-27",
      addressLocality: "Hoofddorp",
      postalCode: "2132 WT",
      addressCountry: "NL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+31-23-303-0684",
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

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="nl_NL" />
      <meta property="og:site_name" content="GPG Facility Management" />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

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
