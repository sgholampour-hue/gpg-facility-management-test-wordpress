import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Recycle, Leaf, TrendingDown, Award, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import SEO from "@/components/SEO";
import ScrollToTop from "@/components/ui/ScrollToTop";
import MobileCTABar from "@/components/ui/MobileCTABar";
import { usePageContent } from "@/hooks/useCmsContent";
import PreviewBanner from "@/components/ui/PreviewBanner";
import certIso14001 from "@/assets/cert-iso-14001.png";
import certMvoRegister from "@/assets/cert-mvo-register.png";

// Icons mapped by index (can't store icons in CMS)
const principeIcons = [Recycle, Leaf, TrendingDown, Award];

const certificeringen = [
  { name: "ISO 14001 – Milieumanagementsysteem", logo: certIso14001 },
  { name: "MVO register", logo: certMvoRegister }
];

const Duurzaamheid = () => {
  const { sections: cms, seo, isPreview } = usePageContent("duurzaamheid");
  const hero = cms?.hero;
  const principesIntro = cms?.principes_intro;
  const principes = cms?.principes || [];
  const aanpakIntro = cms?.aanpak_intro;
  const aanpak = cms?.aanpak || [];
  const certIntro = cms?.certificeringen_intro;
  const cta = cms?.cta;

  return (
    <div className={`min-h-screen pb-16 md:pb-0 ${isPreview ? "pt-8" : ""}`}>
      {isPreview && <PreviewBanner />}
      <SEO
        title={seo?.seo_title || "Duurzaamheid & Circulariteit"}
        description={seo?.seo_description || "Ontdek onze circulaire aanpak bij GPG Facility Management."}
        canonical="https://gpg-facility.lovable.app/duurzaamheid"
      />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl">
              <RevealOnScroll variant="fade-up">
                <p className="text-accent font-medium mb-3 md:mb-4 uppercase tracking-wider text-xs md:text-sm">
                  {hero?.label || "Duurzaamheid & Circulariteit"}
                </p>
              </RevealOnScroll>
              <RevealOnScroll variant="fade-up" delay={100}>
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                  {hero?.headline || "Circulariteit voorop in elk project"}
                </h1>
              </RevealOnScroll>
              <RevealOnScroll variant="fade-up" delay={200}>
                <p className="text-base md:text-xl text-white/80 leading-relaxed">
                  {hero?.description || "Bij GPG staat circulariteit centraal. Wij geloven dat duurzame facilitaire dienstverlening de standaard moet zijn, niet de uitzondering."}
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Circulaire Principes */}
        <section className="py-12 md:py-20 lg:py-28 bg-background">
          <div className="container px-4 md:px-6">
            <RevealOnScroll variant="fade-up">
              <div className="text-center mb-10 md:mb-16">
                <p className="text-accent font-medium uppercase tracking-wider text-xs md:text-sm mb-2 md:mb-3">
                  {principesIntro?.label || "Onze Aanpak"}
                </p>
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
                  {principesIntro?.headline || "Circulaire principes"}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                  {principesIntro?.description || "Circulariteit is geen toevoeging, maar de basis van hoe wij werken."}
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {principes.map((principe: any, index: number) => {
                const Icon = principeIcons[index] || Award;
                return (
                  <RevealOnScroll key={index} variant="fade-up" delay={index * 100}>
                    <div className="bg-muted/30 gsa-hoek-lg p-5 md:p-6 h-full hover-lift">
                      <div className="w-12 h-12 md:w-14 md:h-14 gsa-hoek-sm bg-accent/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-primary mb-2">
                        {principe.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {principe.description}
                      </p>
                    </div>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        {/* Onze Aanpak Stappen */}
        <section className="py-12 md:py-20 lg:py-28 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <RevealOnScroll variant="fade-up">
                  <p className="text-accent font-medium uppercase tracking-wider text-xs mb-2 md:mb-3">
                    {aanpakIntro?.label || "Werkwijze"}
                  </p>
                </RevealOnScroll>
                <RevealOnScroll variant="fade-up" delay={100}>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-6">
                    {aanpakIntro?.headline || "Zo pakken wij circulariteit aan"}
                  </h2>
                </RevealOnScroll>
                <RevealOnScroll variant="fade-up" delay={200}>
                  <p className="text-muted-foreground leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                    {aanpakIntro?.description || "Ons circulaire proces is geïntegreerd in elke fase van het project."}
                  </p>
                </RevealOnScroll>
                
                <div className="space-y-4 md:space-y-6">
                  {aanpak.map((stap: any, index: number) => (
                    <RevealOnScroll key={index} variant="fade-up" delay={300 + index * 100}>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 gsa-hoek-sm bg-primary flex items-center justify-center">
                          <span className="text-white font-bold text-sm md:text-base">{stap.nummer}</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-primary mb-1 text-sm md:text-base">{stap.titel}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{stap.beschrijving}</p>
                        </div>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>

              <RevealOnScroll variant="slide-left" delay={200}>
                <div className="bg-primary gsa-hoek-lg p-6 md:p-8 lg:p-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                    {certIntro?.headline || "Onze certificeringen & registraties"}
                  </h3>
                  <p className="text-white/80 mb-6 text-sm md:text-base leading-relaxed">
                    {certIntro?.description || "Wij voldoen aan de hoogste duurzaamheidsstandaarden en werken continu aan verbetering."}
                  </p>
                  <div className="space-y-4">
                    {certificeringen.map((cert, index) => (
                      <div key={index} className="flex items-center gap-4 bg-white/10 gsa-hoek-sm p-3">
                        <img src={cert.logo} alt={cert.name} className="w-12 h-12 object-contain bg-white rounded p-1" />
                        <span className="text-sm md:text-base text-white/90">{cert.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-16 lg:py-20 bg-primary">
          <div className="container px-4 md:px-6 text-center">
            <RevealOnScroll variant="fade-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                {cta?.headline || "Samen werken aan een duurzame toekomst?"}
              </h2>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-up" delay={100}>
              <p className="text-sm md:text-lg text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto">
                {cta?.text || "Neem contact op en ontdek hoe onze circulaire aanpak jouw project kan versterken."}
              </p>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-up" delay={200}>
              <Button asChild size="lg" variant="hero" className="group w-full sm:w-auto">
                <Link to={cta?.button_link || "/contact"}>
                  {cta?.button_label || "Neem contact op"}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTABar />
      <ScrollToTop />
    </div>
  );
};

export default Duurzaamheid;
