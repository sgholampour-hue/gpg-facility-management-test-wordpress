import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Truck, Building2, HardHat, ShoppingCart, Palette } from "lucide-react";

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
      className={`py-20 lg:py-28 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
    >
      <div className="container">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className={`space-y-6 ${isReversed ? 'lg:order-2' : ''}`}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 gsa-hoek-sm bg-accent/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                Dienst {index + 1}
              </span>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {service.title}
              </h2>
              <p className="text-lg text-accent font-medium">
                {service.subtitle}
              </p>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              {service.description}
            </p>
            
            <ul className="grid sm:grid-cols-2 gap-3">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <Button asChild size="lg" className="group">
                <Link to="/contact">
                  Vraag offerte aan
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className={`relative ${isReversed ? 'lg:order-1' : ''}`}>
            <div className="aspect-[4/3] gsa-hoek-lg overflow-hidden shadow-elegant">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
            {/* Decorative element */}
            <div className={`absolute -z-10 w-full h-full bg-accent/10 gsa-hoek-lg ${isReversed ? '-left-4 -bottom-4' : '-right-4 -bottom-4'}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

const Diensten = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-primary">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-accent font-medium mb-4 uppercase tracking-wider text-sm">
                Onze diensten
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Complete facilitaire dienstverlening
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Van handyman services tot complete fit-out projecten. GPG Facility Management is uw partner voor alle facilitaire vraagstukken.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-8 bg-background border-b border-border sticky top-20 z-40 backdrop-blur-sm bg-background/95">
          <div className="container">
            <nav className="flex flex-wrap gap-4 justify-center">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="px-4 py-2 gsa-hoek-sm text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-200"
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
        <section className="py-20 bg-primary">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Klaar om te starten?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Neem contact met ons op voor een vrijblijvend gesprek over uw facilitaire behoeften.
            </p>
            <Button asChild size="xl" variant="hero" className="group">
              <Link to="/contact">
                Neem contact op
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Diensten;
