import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/sections/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Target, Award, Handshake, TrendingUp, Building2 } from "lucide-react";
import gpgLogo from "@/assets/gpg-logo.png";
import gsaLogo from "@/assets/gsa-groep-logo.png";
import teamPhoto from "@/assets/team-photo.jpg";
import aboutTechnician from "@/assets/about-technician.jpg";
import aboutManagers from "@/assets/about-managers.jpg";

const kernwaarden = [
  {
    icon: Handshake,
    title: "Betrouwbaarheid",
    description: "Wij komen onze afspraken na en leveren consistente kwaliteit.",
  },
  {
    icon: Users,
    title: "Samenwerken",
    description: "Partnerships vormen de basis van ons succes.",
  },
  {
    icon: Target,
    title: "Resultaatgericht",
    description: "Wij focussen op concrete oplossingen en meetbare resultaten.",
  },
  {
    icon: Award,
    title: "Vakmanschap",
    description: "Onze medewerkers zijn experts in hun vakgebied.",
  },
  {
    icon: TrendingUp,
    title: "Duurzaamheid",
    description: "Wij werken aan een circulaire economie en CO2-reductie.",
  },
  {
    icon: Building2,
    title: "Flexibiliteit",
    description: "Onze aanpak past zich aan op uw specifieke behoeften.",
  },
];

const gsaDochters = [
  { name: "GOV Vloerenspecialist", description: "Advies, leggen en nabewerken van vloeren" },
  { name: "GPB Bouw", description: "Bouw, afbouw en renovatie" },
  { name: "Active Bouwlogistiek", description: "Bouwlogistiek en technisch onderhoud" },
  { name: "SST Security & Training", description: "Beveiliging en veiligheidstrainingen" },
  { name: "HPG W-techniek", description: "Installatietechniek en onderhoud" },
  { name: "GPG Facility Management", description: "Facilitaire dienstverlening" },
];

const OverOns = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <p className="text-accent font-medium mb-4 uppercase tracking-wider text-sm">
                Over Ons
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Wij zijn GPG Facility Management
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Onderdeel van de GSA Groep – Al meer dan 40 jaar specialist in facilitaire dienstverlening.
              </p>
            </div>
          </div>
        </section>

        {/* About Intro */}
        <section className="py-20 lg:py-28">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="accent-bar-left mb-6">
                  <p className="text-accent font-medium uppercase tracking-wider text-sm">
                    Onze Missie
                  </p>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Ontzorgen van organisaties met facilitaire dienstverlening
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  GPG Facility Management is een volledige facilitair dienstverlener gespecialiseerd in handyman diensten, 
                  verhuizingen, integrated facilities, fit-out projecten en projectinrichting. Wij ondersteunen organisaties 
                  bij al hun facilitaire vraagstukken – van dagelijks onderhoud tot complete kantoorinrichtingen.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Met onze kennis, ervaring en betrokken teams leveren wij resultaten waar onze opdrachtgevers op kunnen bouwen. 
                  Onze kracht ligt in de combinatie van vakmanschap, flexibiliteit en een no-nonsense aanpak.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link to="/contact">Neem contact op</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/projecten">Bekijk projecten</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src={teamPhoto}
                  alt="GPG team aan het werk"
                  className="gsa-hoek-lg shadow-elegant w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground gsa-hoek p-6 shadow-lg">
                  <p className="text-4xl font-bold">40+</p>
                  <p className="text-sm font-medium">Jaar ervaring</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GSA Groep Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white gsa-hoek-lg p-8 md:p-10 shadow-elegant">
                  <img
                    src={gsaLogo}
                    alt="GSA Groep logo"
                    className="h-24 w-auto mb-8"
                  />
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Verrassend Veelzijdig & Betrokken
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    GSA Groep is opgericht in 1982 als "Gordijnen Service Amstelveen" en is uitgegroeid tot een 
                    full-service organisatie met meerdere gespecialiseerde dochterbedrijven. Met de hoofdvestiging 
                    op Schiphol bedienen wij klanten in heel Nederland.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    De GSA Groep levert diensten op het gebied van facility management, logistiek, maintenance, 
                    staffing, projecten en calamiteiten. Onze medewerkers leveren resultaten.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="accent-bar-left mb-6">
                  <p className="text-accent font-medium uppercase tracking-wider text-sm">
                    Onderdeel van
                  </p>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  De GSA Groep
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  GPG Facility Management is een trotse dochteronderneming van de GSA Groep. Samen met onze 
                  zusterorganisaties bieden wij een complete range aan diensten, van bouwlogistiek tot beveiliging.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {gsaDochters.map((dochter, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 gsa-hoek-sm bg-white border border-border"
                    >
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-primary text-sm">{dochter.name}</p>
                        <p className="text-muted-foreground text-xs">{dochter.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kernwaarden */}
        <section className="py-20 lg:py-28">
          <div className="container">
            <div className="text-center mb-16">
              <p className="text-accent font-medium mb-2 uppercase tracking-wider text-sm">
                Waar wij voor staan
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Onze Kernwaarden
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Deze waarden vormen het fundament van onze organisatie en bepalen hoe wij samenwerken met opdrachtgevers, 
                partners en elkaar.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {kernwaarden.map((waarde, index) => (
                <div
                  key={index}
                  className="group p-8 gsa-hoek bg-white border border-border hover:shadow-elegant transition-all duration-300"
                >
                  <div className="w-14 h-14 gsa-hoek-sm bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <waarde.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{waarde.title}</h3>
                  <p className="text-muted-foreground">{waarde.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Gallery */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-accent font-medium mb-2 uppercase tracking-wider text-sm">
                  Ons Team
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Vakmanschap in de praktijk
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Onze kracht zit in onze mensen. Van ervaren vakmensen tot projectmanagers – iedereen 
                  draagt bij aan het succes van onze opdrachtgevers.
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Ervaren en gecertificeerde medewerkers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Continue investering in opleiding en ontwikkeling</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Focus op veiligheid en kwaliteit</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Korte lijnen en persoonlijke aandacht</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={aboutTechnician}
                  alt="GPG technicus aan het werk"
                  className="gsa-hoek-br-lg w-full h-64 object-cover"
                />
                <img
                  src={aboutManagers}
                  alt="GPG projectmanagers in overleg"
                  className="gsa-hoek-tl-lg w-full h-64 object-cover mt-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Duurzaamheid */}
        <section className="py-20 lg:py-28">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-accent font-medium mb-2 uppercase tracking-wider text-sm">
                Duurzame Visie
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Werken aan de toekomst
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                GSA Groep en haar dochterondernemingen werken actief aan een duurzame toekomst. 
                Wij focussen op circulaire economie, energiezuinige oplossingen en CO2-reductie. 
                Daarnaast investeren wij in de duurzame inzetbaarheid van onze medewerkers.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="p-6 gsa-hoek-sm bg-muted/50">
                  <p className="text-3xl font-bold text-accent mb-2">CO₂</p>
                  <p className="text-sm text-muted-foreground">Actieve reductie</p>
                </div>
                <div className="p-6 gsa-hoek-sm bg-muted/50">
                  <p className="text-3xl font-bold text-accent mb-2">100%</p>
                  <p className="text-sm text-muted-foreground">Circulair denken</p>
                </div>
                <div className="p-6 gsa-hoek-sm bg-muted/50">
                  <p className="text-3xl font-bold text-accent mb-2">♻️</p>
                  <p className="text-sm text-muted-foreground">Hergebruik materialen</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection variant="light" />

        {/* CTA */}
        <section className="py-20 bg-accent">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-4">
              Samenwerken met GPG?
            </h2>
            <p className="text-accent-foreground/80 mb-8 max-w-lg mx-auto">
              Ontdek wat wij voor uw organisatie kunnen betekenen. Neem vrijblijvend contact op.
            </p>
            <Button size="lg" variant="outline-accent" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent" asChild>
              <Link to="/contact">Neem contact op</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OverOns;
