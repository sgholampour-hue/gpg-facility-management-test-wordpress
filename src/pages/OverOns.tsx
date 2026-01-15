import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/sections/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Target, Award, Handshake, TrendingUp, Building2 } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CountUp } from "@/components/ui/CountUp";
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
    <div className="min-h-screen page-enter">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <RevealOnScroll variant="fade-up">
                <p className="text-accent font-medium mb-4 uppercase tracking-wider text-sm font-heading">
                  Over Ons
                </p>
              </RevealOnScroll>
              <RevealOnScroll variant="fade-up" delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Wij zijn GPG Facility Management
                </h1>
              </RevealOnScroll>
              <RevealOnScroll variant="fade-up" delay={200}>
                <p className="text-xl text-white/80 leading-relaxed font-body">
                  Onderdeel van de GSA Groep – Al meer dan 40 jaar specialist in facilitaire dienstverlening.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* About Intro */}
        <section className="py-20 lg:py-28">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <RevealOnScroll variant="fade-up">
                  <div className="accent-bar-left mb-6">
                    <p className="text-accent font-medium uppercase tracking-wider text-sm font-heading">
                      Onze Missie
                    </p>
                  </div>
                </RevealOnScroll>
                <RevealOnScroll variant="fade-up" delay={100}>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                    Ontzorgen van organisaties met facilitaire dienstverlening
                  </h2>
                </RevealOnScroll>
                <RevealOnScroll variant="fade-up" delay={200}>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-body">
                    GPG Facility Management is een volledige facilitair dienstverlener gespecialiseerd in handyman diensten, 
                    verhuizingen, integrated facilities, fit-out projecten en projectinrichting. Wij ondersteunen organisaties 
                    bij al hun facilitaire vraagstukken – van dagelijks onderhoud tot complete kantoorinrichtingen.
                  </p>
                </RevealOnScroll>
                <RevealOnScroll variant="fade-up" delay={300}>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-body">
                    Met onze kennis, ervaring en betrokken teams leveren wij resultaten waar onze opdrachtgevers op kunnen bouwen. 
                    Onze kracht ligt in de combinatie van vakmanschap, flexibiliteit en een no-nonsense aanpak.
                  </p>
                </RevealOnScroll>
                <RevealOnScroll variant="fade-up" delay={400}>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild className="hover-lift">
                      <Link to="/contact">Neem contact op</Link>
                    </Button>
                    <Button variant="outline" asChild className="hover-lift">
                      <Link to="/projecten">Bekijk projecten</Link>
                    </Button>
                  </div>
                </RevealOnScroll>
              </div>
              <RevealOnScroll variant="slide-left" delay={200}>
                <div className="relative">
                  <img
                    src={teamPhoto}
                    alt="GPG team aan het werk"
                    loading="lazy"
                    className="gsa-hoek-lg shadow-elegant w-full"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground gsa-hoek p-6 shadow-lg">
                    <p className="text-4xl font-bold font-heading">
                      <CountUp end={40} suffix="+" duration={1000} />
                    </p>
                    <p className="text-sm font-medium font-body">Jaar ervaring</p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* GSA Groep Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <RevealOnScroll variant="slide-right" className="order-2 lg:order-1">
                <div className="bg-white gsa-hoek-lg p-8 md:p-10 shadow-elegant">
                  <img
                    src={gsaLogo}
                    alt="GSA Groep logo"
                    className="h-24 w-auto mb-8"
                  />
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Verrassend Veelzijdig & Betrokken
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 font-body">
                    GSA Groep is opgericht in 1982 als "Gordijnen Service Amstelveen" en is uitgegroeid tot een 
                    full-service organisatie met meerdere gespecialiseerde dochterbedrijven. Met de hoofdvestiging 
                    op Schiphol bedienen wij klanten in heel Nederland.
                  </p>
                  <p className="text-muted-foreground leading-relaxed font-body">
                    De GSA Groep levert diensten op het gebied van facility management, logistiek, maintenance, 
                    staffing, projecten en calamiteiten. Onze medewerkers leveren resultaten.
                  </p>
                </div>
              </RevealOnScroll>
              <div className="order-1 lg:order-2">
                <RevealOnScroll variant="fade-up">
                  <div className="accent-bar-left mb-6">
                    <p className="text-accent font-medium uppercase tracking-wider text-sm font-heading">
                      Onderdeel van
                    </p>
                  </div>
                </RevealOnScroll>
                <RevealOnScroll variant="fade-up" delay={100}>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                    De GSA Groep
                  </h2>
                </RevealOnScroll>
                <RevealOnScroll variant="fade-up" delay={200}>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-body">
                    GPG Facility Management is een trotse dochteronderneming van de GSA Groep. Samen met onze 
                    zusterorganisaties bieden wij een complete range aan diensten, van bouwlogistiek tot beveiliging.
                  </p>
                </RevealOnScroll>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {gsaDochters.map((dochter, index) => (
                    <RevealOnScroll key={index} variant="fade-up" delay={300 + index * 80}>
                      <div className="flex items-start gap-3 p-4 gsa-hoek-sm bg-white border border-border hover-lift">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-primary text-sm font-heading">{dochter.name}</p>
                          <p className="text-muted-foreground text-xs font-body">{dochter.description}</p>
                        </div>
                      </div>
                    </RevealOnScroll>
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
              <RevealOnScroll variant="fade-up">
                <p className="text-accent font-medium mb-2 uppercase tracking-wider text-sm font-heading">
                  Waar wij voor staan
                </p>
              </RevealOnScroll>
              <RevealOnScroll variant="fade-up" delay={100}>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Onze Kernwaarden
                </h2>
              </RevealOnScroll>
              <RevealOnScroll variant="fade-up" delay={200}>
                <p className="text-muted-foreground max-w-2xl mx-auto font-body">
                  Deze waarden vormen het fundament van onze organisatie en bepalen hoe wij samenwerken met opdrachtgevers, 
                  partners en elkaar.
                </p>
              </RevealOnScroll>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {kernwaarden.map((waarde, index) => (
                <RevealOnScroll key={index} variant="fade-up" delay={index * 100}>
                  <div className="group p-8 gsa-hoek bg-white border border-border hover:shadow-elegant transition-all duration-300 hover-lift">
                    <div className="w-14 h-14 gsa-hoek-sm bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                      <waarde.icon className="w-7 h-7 text-accent icon-hover" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{waarde.title}</h3>
                    <p className="text-muted-foreground font-body">{waarde.description}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Team Gallery */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <RevealOnScroll variant="fade-up">
                  <p className="text-accent font-medium mb-2 uppercase tracking-wider text-sm font-heading">
                    Ons Team
                  </p>
                </RevealOnScroll>
                <RevealOnScroll variant="fade-up" delay={100}>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Vakmanschap in de praktijk
                  </h2>
                </RevealOnScroll>
                <RevealOnScroll variant="fade-up" delay={200}>
                  <p className="text-white/80 text-lg leading-relaxed mb-6 font-body">
                    Onze kracht zit in onze mensen. Van ervaren vakmensen tot projectmanagers – iedereen 
                    draagt bij aan het succes van onze opdrachtgevers.
                  </p>
                </RevealOnScroll>
                <RevealOnScroll variant="fade-up" delay={300}>
                  <ul className="space-y-3 text-white/80">
                    {[
                      "Ervaren en gecertificeerde medewerkers",
                      "Continue investering in opleiding en ontwikkeling",
                      "Focus op veiligheid en kwaliteit",
                      "Korte lijnen en persoonlijke aandacht"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 font-body">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </RevealOnScroll>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <RevealOnScroll variant="scale-in">
                  <img
                    src={aboutTechnician}
                    alt="GPG technicus aan het werk"
                    loading="lazy"
                    className="gsa-hoek-br-lg w-full h-64 object-cover"
                  />
                </RevealOnScroll>
                <RevealOnScroll variant="scale-in" delay={150}>
                  <img
                    src={aboutManagers}
                    alt="GPG projectmanagers in overleg"
                    loading="lazy"
                    className="gsa-hoek-tl-lg w-full h-64 object-cover mt-8"
                  />
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* Duurzaamheid */}
        <section className="py-20 lg:py-28">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <RevealOnScroll variant="fade-up">
                <p className="text-accent font-medium mb-2 uppercase tracking-wider text-sm font-heading">
                  Duurzame Visie
                </p>
              </RevealOnScroll>
              <RevealOnScroll variant="fade-up" delay={100}>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Werken aan de toekomst
                </h2>
              </RevealOnScroll>
              <RevealOnScroll variant="fade-up" delay={200}>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-body">
                  GSA Groep en haar dochterondernemingen werken actief aan een duurzame toekomst. 
                  Wij focussen op circulaire economie, energiezuinige oplossingen en CO2-reductie. 
                  Daarnaast investeren wij in de duurzame inzetbaarheid van onze medewerkers.
                </p>
              </RevealOnScroll>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { value: "CO₂", label: "Actieve reductie" },
                  { value: "100%", label: "Circulair denken" },
                  { value: "♻️", label: "Hergebruik materialen" }
                ].map((stat, index) => (
                  <RevealOnScroll key={index} variant="scale-in" delay={300 + index * 100}>
                    <div className="p-6 gsa-hoek-sm bg-muted/50 hover-lift">
                      <p className="text-3xl font-bold text-accent mb-2 font-heading">{stat.value}</p>
                      <p className="text-sm text-muted-foreground font-body">{stat.label}</p>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection variant="light" />

        {/* CTA */}
        <section className="py-20 bg-accent">
          <div className="container text-center">
            <RevealOnScroll variant="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-4">
                Samenwerken met GPG?
              </h2>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-up" delay={100}>
              <p className="text-accent-foreground/80 mb-8 max-w-lg mx-auto font-body">
                Ontdek wat wij voor uw organisatie kunnen betekenen. Neem vrijblijvend contact op.
              </p>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-up" delay={200}>
              <Button size="lg" variant="outline-accent" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent hover-lift" asChild>
                <Link to="/contact">Neem contact op</Link>
              </Button>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OverOns;
