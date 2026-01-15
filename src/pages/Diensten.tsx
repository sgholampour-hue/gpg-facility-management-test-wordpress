import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Truck, Building2, HardHat, ShoppingCart, Palette } from "lucide-react";
import SEO, { serviceSchema } from "@/components/SEO";
import LazyImage from "@/components/ui/LazyImage";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

import dienstHandyman from "@/assets/dienst-handyman.jpg";
import dienstVerhuizen from "@/assets/dienst-verhuizen.jpg";
import dienstFacilities from "@/assets/dienst-facilities.jpg";
import dienstFitout from "@/assets/dienst-fitout.jpg";
import dienstInkoop from "@/assets/dienst-inkoop.jpg";
import dienstStoffering from "@/assets/dienst-stoffering.jpg";

const services = [
  {
    id: "handyman",
    icon: Wrench,
    title: "Handyman dienstverlening",
    subtitle: "Professioneel onderhoud en reparatie",
    description: "Van kleine reparaties tot uitgebreid onderhoud - onze vakkundige handymen zorgen ervoor dat uw kantoor altijd in topconditie blijft. Wij bieden snelle, betrouwbare service voor al uw facilitaire behoeften.",
    features: [
      "24/7 beschikbaarheid voor noodgevallen",
      "Preventief onderhoud en inspectie",
      "Elektra en verlichtingswerk",
      "Sanitair en loodgieterswerk",
      "Meubelreparatie en montage",
      "Schilderwerk en afwerking"
    ],
    image: dienstHandyman
  },
  {
    id: "verhuizen",
    icon: Truck,
    title: "Verhuizen",
    subtitle: "Zorgeloze kantoorverhuizing",
    description: "Een kantoorverhuizing vraagt om specialistische kennis en een strak gecoördineerde aanpak. GPG verzorgt uw complete verhuizing van A tot Z, zodat u zich kunt focussen op uw core business.",
    features: [
      "Volledige projectcoördinatie",
      "Professionele in- en uitpak service",
      "IT-apparatuur en serververhuizing",
      "Weekendverhuizingen mogelijk",
      "Tijdelijke opslag faciliteiten",
      "Minimale bedrijfsonderbreking"
    ],
    image: dienstVerhuizen
  },
  {
    id: "integrated-facilities",
    icon: Building2,
    title: "Integrated Facilities",
    subtitle: "Complete facilitaire ontzorging",
    description: "Eén aanspreekpunt voor al uw facilitaire diensten. Wij integreren alle aspecten van gebouwbeheer tot één naadloze service, waardoor u zich volledig kunt richten op uw kernactiviteiten.",
    features: [
      "Gebouwbeheer en -onderhoud",
      "Schoonmaak en hygiëne",
      "Beveiliging en toegangsbeheer",
      "Receptie en hospitality",
      "Catering ondersteuning",
      "Duurzaamheidsadvies"
    ],
    image: dienstFacilities
  },
  {
    id: "fitouts",
    icon: HardHat,
    title: "Fit-out's",
    subtitle: "Van leeg pand tot werkplek",
    description: "Wij transformeren lege kantoorruimtes tot volledig ingerichte, functionele werkplekken. Van eerste ontwerp tot oplevering - GPG coördineert het complete fit-out proces.",
    features: [
      "Projectmanagement en coördinatie",
      "Bouwkundige werkzaamheden",
      "Elektrotechnische installaties",
      "Klimaatbeheersing (HVAC)",
      "Akoestische oplossingen",
      "Brandveiligheid en compliance"
    ],
    image: dienstFitout
  },
  {
    id: "inkoop",
    icon: ShoppingCart,
    title: "Inkoop van inrichtingscomponenten",
    subtitle: "Slim en voordelig inkopen",
    description: "Profiteer van onze inkoopkracht en expertise. Wij leveren hoogwaardige kantoormeubilair en inrichtingscomponenten tegen scherpe prijzen, met advies over ergonomie en duurzaamheid.",
    features: [
      "Bureaus en werkpleksystemen",
      "Ergonomische bureaustoelen",
      "Vergadermeubilair",
      "Opbergsystemen en kasten",
      "Akoestische panelen",
      "Planten en groenvoorziening"
    ],
    image: dienstInkoop
  },
  {
    id: "stoffering",
    icon: Palette,
    title: "Projectinrichting & stoffering",
    subtitle: "Sfeer en functionaliteit",
    description: "De finishing touch voor uw kantoor. Onze stofferings- en inrichtingsspecialisten zorgen voor een professionele uitstraling die past bij uw bedrijfsidentiteit en bijdraagt aan het werkplezier.",
    features: [
      "Raambekleding op maat",
      "Vloerbedekking en tapijttegels",
      "Meubelstoffering",
      "Akoestische wandbekleding",
      "Kunst en decoratie",
      "Signing en wayfinding"
    ],
    image: dienstStoffering
  }
];

const ServiceSection = ({ 
  service, 
  index 
}: { 
  service: typeof services[0]; 
  index: number;
}) => {
  const isReversed = index % 2 === 1;
  const Icon = service.icon;

  return (
    <section 
      id={service.id}
      className={`py-12 md:py-20 lg:py-28 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
    >
      <div className="container px-4 md:px-6">
        <RevealOnScroll>
          <div className={`grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
            {/* Content */}
            <div className={`space-y-4 md:space-y-6 ${isReversed ? 'lg:order-2' : ''}`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 gsa-hoek-sm bg-accent/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <span className="text-xs md:text-sm font-medium text-accent uppercase tracking-wider">
                  Dienst {index + 1}
                </span>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">
                  {service.title}
                </h2>
                <p className="text-base md:text-lg text-accent font-medium">
                  {service.subtitle}
                </p>
              </div>
              
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {service.description}
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-accent mt-0.5 md:mt-1 flex-shrink-0" />
                    <span className="text-sm md:text-base text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-2 md:pt-4">
                <Button asChild size="lg" className="group w-full sm:w-auto">
                  <Link to="/contact">
                    Neem contact op
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Image */}
            <div className={`relative ${isReversed ? 'lg:order-1' : ''}`}>
              <div className="gsa-hoek-lg overflow-hidden shadow-elegant">
                <LazyImage 
                  src={service.image} 
                  alt={service.title}
                  aspectRatio="4/3"
                  className="hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
              {/* Decorative element - hidden on mobile for cleaner look */}
              <div className={`absolute -z-10 w-full h-full bg-accent/10 gsa-hoek-lg hidden md:block ${isReversed ? '-left-4 -bottom-4' : '-right-4 -bottom-4'}`} />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

const Diensten = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Diensten"
        description="Ontdek onze facilitaire diensten: handyman, verhuizingen, integrated facilities, fit-outs, inkoop en stoffering. Complete oplossingen voor uw organisatie."
        canonical="https://gpg-facility.lovable.app/diensten"
        structuredData={serviceSchema}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl">
              <p className="text-accent font-medium mb-3 md:mb-4 uppercase tracking-wider text-xs md:text-sm">
                Onze diensten
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                Complete facilitaire dienstverlening
              </h1>
              <p className="text-base md:text-xl text-white/80 leading-relaxed">
                Van handyman services tot complete fit-out projecten. GPG Facility Management is uw partner voor alle facilitaire vraagstukken.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-4 md:py-8 bg-background border-b border-border sticky top-20 z-40 backdrop-blur-sm bg-background/95">
          <div className="container px-4 md:px-6">
            <nav className="flex overflow-x-auto gap-2 md:gap-4 md:flex-wrap md:justify-center scrollbar-hide pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="px-3 md:px-4 py-2 gsa-hoek-sm text-xs md:text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-200 whitespace-nowrap flex-shrink-0"
                >
                  {service.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Service Sections */}
        {services.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-primary">
          <div className="container px-4 md:px-6 text-center">
            <RevealOnScroll>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
                Klaar om te starten?
              </h2>
              <p className="text-base md:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto">
                Neem contact met ons op voor een vrijblijvend gesprek over uw facilitaire behoeften.
              </p>
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

export default Diensten;
