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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <ClientMarquee />
        <AboutGallery />
        <WhyGPG />
        <FeaturedProjects />
        <Testimonials />
        <CTASection />
        <PartnerSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
