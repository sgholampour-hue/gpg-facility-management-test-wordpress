import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import ClientMarquee from "@/components/sections/ClientMarquee";
import AboutGallery from "@/components/sections/AboutGallery";
import WhyGPG from "@/components/sections/WhyGPG";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import PartnerSection from "@/components/sections/PartnerSection";
import FinalCTA from "@/components/sections/FinalCTA";
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
      <Header />
      <main>
        <Hero />
        <RevealOnScroll variant="fade-up" delay={0}>
          <Services />
        </RevealOnScroll>
        <RevealOnScroll variant="fade-in" delay={0}>
          <ClientMarquee />
        </RevealOnScroll>
        <RevealOnScroll variant="fade-up" delay={0}>
          <AboutGallery />
        </RevealOnScroll>
        <RevealOnScroll variant="fade-up" delay={0}>
          <WhyGPG />
        </RevealOnScroll>
        <RevealOnScroll variant="fade-up" delay={0}>
          <FeaturedProjects />
        </RevealOnScroll>
        <RevealOnScroll variant="fade-up" delay={0}>
          <Testimonials />
        </RevealOnScroll>
        <RevealOnScroll variant="scale-in" delay={0}>
          <CTASection />
        </RevealOnScroll>
        <RevealOnScroll variant="fade-up" delay={0}>
          <PartnerSection />
        </RevealOnScroll>
        <RevealOnScroll variant="fade-up" delay={0}>
          <FinalCTA />
        </RevealOnScroll>
      </main>
      <Footer />
      <StickyContactButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;
