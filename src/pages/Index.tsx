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
import CTANew from "@/components/sections/CTANew";
import StickyContactButton from "@/components/ui/StickyContactButton";
import ScrollToTop from "@/components/ui/ScrollToTop";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Professionele Facilitaire Dienstverlening"
        description="GPG Facility Management is uw partner voor fit-outs, verhuizingen, handyman services en integrated facilities. Al 15+ jaar ervaring met projecten voor Schiphol, Booking.com en meer."
        canonical="https://gpg-facility.lovable.app/"
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
        <CTANew />
      </main>
      <Footer />
      <StickyContactButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;
