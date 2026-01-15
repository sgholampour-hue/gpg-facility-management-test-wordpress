import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Recycle, Leaf, TrendingDown, Award, CheckCircle, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import SEO from "@/components/SEO";
import CountUp from "@/components/ui/CountUp";

const circularPrincipes = [
  {
    icon: Recycle,
    title: "Circulair Ontwerp",
    description: "Elk project begint met circulair denken. Wij selecteren materialen die herbruikbaar, recyclebaar of biologisch afbreekbaar zijn."
  },
  {
    icon: Leaf,
    title: "Duurzame Materialen",
    description: "Wij werken uitsluitend met gecertificeerde leveranciers die onze duurzaamheidsvisie delen en circulaire materialen leveren."
  },
  {
    icon: TrendingDown,
    title: "CO₂ Reductie",
    description: "Actieve CO₂-reductie door slimme logistiek, elektrisch wagenpark en energie-efficiënte werkprocessen."
  },
  {
    icon: Award,
    title: "Certificeringen",
    description: "Wij voldoen aan de hoogste duurzaamheidsstandaarden en werken continu aan verbetering van onze certificeringen."
  }
];

const aanpakStappen = [
  {
    nummer: "01",
    titel: "Inventarisatie & Analyse",
    beschrijving: "Wij analyseren bestaande materialen en inventaris om hergebruikmogelijkheden te identificeren."
  },
  {
    nummer: "02", 
    titel: "Circulair Ontwerp",
    beschrijving: "Elk ontwerp wordt gemaakt met oog voor demontage, hergebruik en recyclebaarheid van materialen."
  },
  {
    nummer: "03",
    titel: "Duurzame Inkoop",
    beschrijving: "Inkoop van nieuwe materialen gebeurt bij gecertificeerde leveranciers met focus op circulariteit."
  },
  {
    nummer: "04",
    titel: "Verantwoorde Afvoer",
    beschrijving: "Materialen die niet hergebruikt kunnen worden, worden verantwoord gerecycled of gedoneerd."
  }
];

const certificeringen = [
  "ISO 14001 - Milieumanagementsysteem",
  "MVO Prestatieladder",
  "CO₂ Prestatieladder",
  "Circulair Inkopen Certificaat",
  "Erkend Leerbedrijf Duurzaamheid"
];

const Duurzaamheid = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Duurzaamheid & Circulariteit"
        description="Ontdek onze circulaire aanpak bij GPG Facility Management. Circulariteit staat voorop in elk project: van duurzame materialen tot verantwoorde afvoer."
        canonical="https://gpg-facility.lovable.app/duurzaamheid"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl">
              <RevealOnScroll variant="fade-up">
                <p className="text-accent font-medium mb-3 md:mb-4 uppercase tracking-wider text-xs md:text-sm">
                  Duurzaamheid & Circulariteit
                </p>
              </RevealOnScroll>
              <RevealOnScroll variant="fade-up" delay={100}>
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                  Circulariteit voorop in elk project
                </h1>
              </RevealOnScroll>
              <RevealOnScroll variant="fade-up" delay={200}>
                <p className="text-base md:text-xl text-white/80 leading-relaxed">
                  Bij GPG staat circulariteit centraal. Wij geloven dat duurzame facilitaire dienstverlening de standaard moet zijn, niet de uitzondering.
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
                  Onze Aanpak
                </p>
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
                  Circulaire principes
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                  Circulariteit is geen toevoeging, maar de basis van hoe wij werken. Van ontwerp tot uitvoering, elk aspect is doordacht.
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {circularPrincipes.map((principe, index) => (
                <RevealOnScroll key={index} variant="fade-up" delay={index * 100}>
                  <div className="bg-muted/30 gsa-hoek-lg p-5 md:p-6 h-full hover-lift">
                    <div className="w-12 h-12 md:w-14 md:h-14 gsa-hoek-sm bg-accent/10 flex items-center justify-center mb-4">
                      <principe.icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-primary mb-2">
                      {principe.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {principe.description}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
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
                    Werkwijze
                  </p>
                </RevealOnScroll>
                <RevealOnScroll variant="fade-up" delay={100}>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-6">
                    Zo pakken wij circulariteit aan
                  </h2>
                </RevealOnScroll>
                <RevealOnScroll variant="fade-up" delay={200}>
                  <p className="text-muted-foreground leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                    Ons circulaire proces is geïntegreerd in elke fase van het project. Van de eerste inventarisatie tot de uiteindelijke oplevering, circulariteit is de rode draad.
                  </p>
                </RevealOnScroll>
                
                <div className="space-y-4 md:space-y-6">
                  {aanpakStappen.map((stap, index) => (
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
                    Onze certificeringen
                  </h3>
                  <p className="text-white/80 mb-6 text-sm md:text-base leading-relaxed">
                    Wij voldoen aan de hoogste duurzaamheidsstandaarden en werken continu aan verbetering.
                  </p>
                  <ul className="space-y-3">
                    {certificeringen.map((cert, index) => (
                      <li key={index} className="flex items-start gap-3 text-white/90">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Impact Cijfers */}
        <section className="py-12 md:py-20 bg-primary">
          <div className="container px-4 md:px-6">
            <RevealOnScroll variant="fade-up">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">
                  Onze duurzame impact
                </h2>
                <p className="text-white/80 max-w-lg mx-auto text-sm md:text-base">
                  Concrete resultaten van onze circulaire aanpak
                </p>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-white/10 gsa-hoek-sm p-4 md:p-6 text-center">
                <CountUp 
                  end={85} 
                  suffix="%" 
                  duration={2000}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
                  labelClassName="text-xs md:text-sm text-white/80"
                  label="Materiaal hergebruik"
                />
              </div>
              <div className="bg-white/10 gsa-hoek-sm p-4 md:p-6 text-center">
                <CountUp 
                  end={40} 
                  suffix="%" 
                  duration={2000}
                  delay={100}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
                  labelClassName="text-xs md:text-sm text-white/80"
                  label="CO₂ reductie"
                />
              </div>
              <div className="bg-white/10 gsa-hoek-sm p-4 md:p-6 text-center">
                <CountUp 
                  end={100} 
                  suffix="%" 
                  duration={2000}
                  delay={200}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
                  labelClassName="text-xs md:text-sm text-white/80"
                  label="Circulaire inkoop"
                />
              </div>
              <div className="bg-white/10 gsa-hoek-sm p-4 md:p-6 text-center">
                <CountUp 
                  end={0} 
                  duration={1500}
                  delay={300}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
                  labelClassName="text-xs md:text-sm text-white/80"
                  label="Afval naar stort"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-primary">
          <div className="container px-4 md:px-6 text-center">
            <RevealOnScroll variant="fade-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                Samen werken aan een duurzame toekomst?
              </h2>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-up" delay={100}>
              <p className="text-base md:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto">
                Neem contact op en ontdek hoe onze circulaire aanpak jouw project kan versterken.
              </p>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-up" delay={200}>
              <Button asChild size="xl" variant="hero" className="group w-full sm:w-auto">
                <Link to="/contact">
                  Neem contact op
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Duurzaamheid;
