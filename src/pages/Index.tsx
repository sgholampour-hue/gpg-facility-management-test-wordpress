import HeaderNew from "@/components/layout/HeaderNew";
import Footer from "@/components/layout/Footer";
import HeroSplit from "@/components/sections/HeroSplit";
import ClientLogosNew from "@/components/sections/ClientLogosNew";
import ServicesBento from "@/components/sections/ServicesBento";
import StatsTicker from "@/components/sections/StatsTicker";
import WhyGPGNew from "@/components/sections/WhyGPGNew";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";
import TestimonialsNew from "@/components/sections/TestimonialsNew";
import FAQHomepage from "@/components/sections/FAQHomepage";
import CTANew from "@/components/sections/CTANew";
import MobileCTABar from "@/components/ui/MobileCTABar";
import ScrollToTop from "@/components/ui/ScrollToTop";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import CookieConsent from "@/components/ui/CookieConsent";
import SEO, { pageMetaData, createFAQSchema } from "@/components/SEO";

// FAQ data for structured data
const homeFAQs = [
  { question: "Wat maakt GPG anders dan andere facilitaire dienstverleners?", answer: "GPG combineert meer dan 40 jaar ervaring met een persoonlijke aanpak. Jij krijgt één vast aanspreekpunt, flexibele oplossingen en we denken proactief mee." },
  { question: "Welke diensten bieden jullie aan?", answer: "Wij bieden complete facilitaire ondersteuning: handyman services, kantoorverhuizingen, integrated facilities management, fit-out projecten, inkoop van meubilair en projectinrichting." },
  { question: "In welke regio's zijn jullie actief?", answer: "Wij zijn actief in heel Nederland met focus op de Randstad. Onze HUB-locaties in Schiphol, IJmuiden, Rotterdam en Oud Beijerland zorgen voor optimale dekking." },
  { question: "Hoe werkt het aanvraagproces?", answer: "Neem contact op via telefoon, e-mail of ons contactformulier. We plannen een kennismaking, inventariseren je wensen en leveren een helder voorstel." },
];

const Index = () => {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <SEO
        title="Professionele Facilitaire Dienstverlening"
        description={pageMetaData.home.description}
        canonical="https://gpg-facility.lovable.app/"
        structuredData={createFAQSchema(homeFAQs)}
      />
      <HeaderNew />
      <main>
        <HeroSplit />
        <ClientLogosNew />
        <RevealOnScroll variant="fade-up" delay={0}>
          <ServicesBento />
        </RevealOnScroll>
        <StatsTicker />
        <RevealOnScroll variant="fade-up" delay={0}>
          <WhyGPGNew />
        </RevealOnScroll>
        <RevealOnScroll variant="fade-up" delay={0}>
          <ProcessTimeline />
        </RevealOnScroll>
        <RevealOnScroll variant="fade-up" delay={0}>
          <ProjectsShowcase />
        </RevealOnScroll>
        <TestimonialsNew />
        <FAQHomepage />
        <CTANew />
      </main>
      <Footer />
      <MobileCTABar />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
};

export default Index;
