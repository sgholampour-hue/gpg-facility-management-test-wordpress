import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Target, Award, Handshake, TrendingUp, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CountUp } from "@/components/ui/CountUp";
import SEO from "@/components/SEO";
import ScrollToTop from "@/components/ui/ScrollToTop";
import MobileCTABar from "@/components/ui/MobileCTABar";
import gsaLogo from "@/assets/gsa-groep-logo.png";
import gpgFullTeam from "@/assets/gpg-full-team.jpg";
import teamWorkingTogether from "@/assets/team-working-together.jpg";
import businessInteriorPerson from "@/assets/business-interior-person.jpg";
import gsaDochtersImage from "@/assets/gsa-groep-dochters.png";
import gsaOrganisatie from "@/assets/gsa-organisatie.png";
import teamWim from "@/assets/team-wim-gruijters.png";
import teamDanny from "@/assets/team-danny-moeljoredjo.png";
import teamPatricia from "@/assets/team-patricia-nijholt.png";
import gpgLogo from "@/assets/gpg-logo.png";
import TeamMemberCard from "@/components/ui/TeamMemberCard";

const teamMembers = [
  {
    name: "Wim Gruijters",
    role: "Directeur GPG",
    image: teamWim,
    phone: "020 - 795 2100",
    email: "w.gruijters@gpgfacilities.nl",
  },
  {
    name: "Danny Moeljoredjo",
    role: "Facility Coördinator/Planner",
    image: teamDanny,
    email: "d.moeljoredjo@gsafacilities.nl",
  },
  {
    name: "Patricia Nijholt",
    role: "Algemeen Manager GPG",
    image: teamPatricia,
    phone: "020 - 795 2146",
  },
];

const kernwaarden = [
  { icon: Handshake, title: "Betrouwbaar" },
  { icon: Users, title: "Samenwerken" },
  { icon: Target, title: "Resultaatgericht" },
  { icon: Award, title: "Vakmanschap" },
  { icon: TrendingUp, title: "Duurzaam" },
];

const OverOns = () => {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <SEO
        title="Over Ons"
        description="GPG Facility Management, onderdeel van de GSA Groep, levert al 40+ jaar professionele facilitaire diensten."
        canonical="https://gpg-facility.lovable.app/over-ons"
      />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 md:pt-28 pb-8 md:pb-12 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl">
              <RevealOnScroll variant="fade-up">
                <p className="text-accent font-medium mb-2 uppercase tracking-wider text-xs font-heading">
                  Over Ons
                </p>
              </RevealOnScroll>
              <RevealOnScroll variant="fade-up" delay={100}>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
                  Wij zijn GPG Facility Management
                </h1>
              </RevealOnScroll>
              <RevealOnScroll variant="fade-up" delay={200}>
                <p className="text-sm md:text-lg text-white/80 leading-relaxed font-body">
                  Onderdeel van de GSA Groep – Al meer dan 40 jaar specialist in facilitaire dienstverlening.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Kernwaarden Strip */}
        <section className="py-3 md:py-6 bg-muted/50 border-b border-border overflow-x-auto">
          <div className="container px-4 md:px-6">
            <div className="flex justify-start md:justify-center gap-3 md:gap-6 lg:gap-10 min-w-max md:min-w-0">
              {kernwaarden.map((waarde, index) => (
                <RevealOnScroll key={index} variant="fade-up" delay={index * 50}>
                  <div className="flex items-center gap-1.5 text-primary">
                    <waarde.icon className="w-3.5 h-3.5 md:w-5 md:h-5 text-accent" />
                    <span className="font-medium text-xs md:text-sm font-heading whitespace-nowrap">{waarde.title}</span>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* About Intro */}
        <section className="py-10 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center">
              <div>
                <RevealOnScroll variant="fade-up">
                  <p className="text-accent font-medium uppercase tracking-wider text-xs font-heading mb-2">
                    Onze Missie
                  </p>
                </RevealOnScroll>
                <RevealOnScroll variant="fade-up" delay={100}>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3">
                    Ontzorgen van organisaties met facilitaire dienstverlening
                  </h2>
                </RevealOnScroll>
                <RevealOnScroll variant="fade-up" delay={200}>
                  <p className="text-muted-foreground leading-relaxed mb-3 font-body text-sm md:text-base">
                    GPG Facility Management is gespecialiseerd in handyman diensten, verhuizingen, integrated facilities en fit-out projecten. Of het nu gaat om dagelijks onderhoud of complete kantoorinrichtingen—circulariteit staat altijd voorop met duurzame materialen en slim hergebruik.
                  </p>
                </RevealOnScroll>
                <RevealOnScroll variant="fade-up" delay={300}>
                  <p className="text-muted-foreground leading-relaxed mb-4 md:mb-6 font-body text-sm md:text-base">
                    Onze kracht? Vakmanschap gecombineerd met een no-nonsense aanpak en focus op circulaire oplossingen.
                  </p>
                </RevealOnScroll>
                <RevealOnScroll variant="fade-up" delay={400}>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Button asChild size="sm" className="hover-lift w-full sm:w-auto text-sm">
                      <Link to="/contact">Neem contact op</Link>
                    </Button>
                    <Button variant="outline" asChild size="sm" className="hover-lift w-full sm:w-auto text-sm">
                      <Link to="/projecten">Bekijk projecten</Link>
                    </Button>
                  </div>
                </RevealOnScroll>
              </div>
              <RevealOnScroll variant="slide-left" delay={200}>
                <div className="relative mt-4 lg:mt-0">
                  <div className="relative gsa-hoek-lg shadow-elegant overflow-hidden">
                    <img
                      src={gpgFullTeam}
                      alt="Het volledige GPG team - meer dan 50 professionals"
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-[16/9] object-cover"
                    />
                    {/* Blue tint overlay */}
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply pointer-events-none" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-primary gsa-hoek-sm px-3 py-1.5 md:px-5 md:py-3 shadow-lg">
                    <p className="text-lg md:text-2xl font-bold font-heading text-white">
                      <CountUp end={40} suffix="+" duration={1000} className="text-white" />
                    </p>
                    <p className="text-[10px] md:text-xs font-medium font-body text-white/80">Jaar ervaring</p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* GSA Groep Section */}
        <section className="py-10 md:py-16 lg:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center">
              {/* Mobile: GSA logo block first, Desktop: second */}
              <RevealOnScroll variant="slide-right" className="order-1 md:order-2 lg:order-1">
                <div className="space-y-4 md:space-y-6">
                  <div className="bg-white gsa-hoek-lg p-4 md:p-6 lg:p-8 shadow-elegant w-2/3 md:w-full">
                    <img
                      src={gsaLogo}
                      alt="GSA Groep - moederbedrijf van GPG Facility Management"
                      className="h-12 md:h-20 w-auto mb-3 md:mb-6 object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                    <h3 className="text-base md:text-xl font-bold text-primary mb-2">
                      Verrassend Veelzijdig & Betrokken
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-body">
                      GSA Groep is opgericht in 1982 en uitgegroeid tot een full-service organisatie met meerdere gespecialiseerde dochterbedrijven. Met de hoofdvestiging op Schiphol bedienen wij klanten in heel Nederland.
                    </p>
                  </div>
                  {/* GSA Organisatie afbeelding */}
                  <img
                    src={gsaOrganisatie}
                    alt="GSA Groep organogram - Eén groep met zeven specialismen waaronder GPG"
                    className="w-full max-w-lg md:max-w-xl gsa-hoek-lg shadow-elegant"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </RevealOnScroll>
              
              {/* Mobile: Dochterondernemingen second, Desktop: first */}
              <div className="order-2 md:order-1 lg:order-2">
                <RevealOnScroll variant="fade-up">
                  <p className="text-accent font-medium uppercase tracking-wider text-xs font-heading mb-2">
                    Onderdeel van
                  </p>
                </RevealOnScroll>
                <RevealOnScroll variant="fade-up" delay={100}>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2 md:mb-4">
                    De GSA Groep
                  </h2>
                </RevealOnScroll>
                <RevealOnScroll variant="fade-up" delay={200}>
                  <p className="text-muted-foreground leading-relaxed mb-4 md:mb-6 font-body text-sm md:text-base">
                    GPG Facility Management is een trotse dochteronderneming van de GSA Groep.
                  </p>
                </RevealOnScroll>
                
                <RevealOnScroll variant="fade-up" delay={300}>
                  <div className="bg-white gsa-hoek-lg p-3 md:p-6 shadow-elegant">
                    <img
                      src={gsaDochtersImage}
                      alt="Overzicht dochterondernemingen GSA Groep met GPG, Flexas en GSA World"
                      className="w-full max-w-xs md:max-w-sm object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-10 md:py-16 lg:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-14 items-center">
              <div>
                <RevealOnScroll variant="fade-up">
                  <p className="text-accent font-medium uppercase tracking-wider text-xs font-heading mb-2">
                    Ons Team
                  </p>
                </RevealOnScroll>
                <RevealOnScroll variant="fade-up" delay={100}>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2 md:mb-4">
                    Vakmanschap in de praktijk
                  </h2>
                </RevealOnScroll>
                <RevealOnScroll variant="fade-up" delay={200}>
                  <p className="text-muted-foreground leading-relaxed mb-3 md:mb-5 font-body text-sm md:text-base">
                    Onze kracht zit in onze mensen. Van ervaren vakmensen tot projectmanagers.
                  </p>
                </RevealOnScroll>
                <RevealOnScroll variant="fade-up" delay={300}>
                  <ul className="space-y-2 text-muted-foreground">
                    {[
                      "Gecertificeerde medewerkers",
                      "Continue investering in opleiding",
                      "Focus op veiligheid en kwaliteit",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 font-body text-sm">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </RevealOnScroll>
              </div>
              
              {/* Team Member Photos with White Background */}
              <RevealOnScroll variant="scale-in" delay={200}>
                <div className="bg-white gsa-hoek-lg p-6 md:p-8 shadow-elegant">
                  {/* GPG Logo above team photos */}
                  <div className="flex justify-center mb-4 md:mb-6">
                    <img
                      src={gpgLogo}
                      alt="GPG Facility Management"
                      className="h-10 md:h-14 w-auto object-contain"
                    />
                  </div>
                  
                  <h3 className="text-center text-primary font-bold text-sm md:text-base mb-4 uppercase tracking-wider">
                    Ons Team
                  </h3>
                  
                  <div className="grid grid-cols-3 gap-3 md:gap-4">
                    {teamMembers.map((member) => (
                      <TeamMemberCard
                        key={member.name}
                        member={member}
                        variant="light"
                      />
                    ))}
                  </div>
                  
                  <p className="text-center text-muted-foreground text-xs mt-4">
                    Klik op een teamlid voor contactgegevens
                  </p>
                </div>
              </RevealOnScroll>
            </div>
            
            {/* Team in action photos */}
            <div className="grid grid-cols-2 gap-2 md:gap-4 mt-8 md:mt-12">
              <RevealOnScroll variant="scale-in" delay={300}>
                <div className="relative gsa-hoek-tr-lg overflow-hidden">
                  <img
                    src={teamWorkingTogether}
                    alt="Divers team van facility professionals werkt samen aan een project"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-28 sm:h-36 md:h-48 object-cover"
                  />
                  {/* Blue tint overlay */}
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply pointer-events-none" />
                </div>
              </RevealOnScroll>
              <RevealOnScroll variant="scale-in" delay={400}>
                <div className="relative gsa-hoek-tl-lg overflow-hidden">
                  <img
                    src={businessInteriorPerson}
                    alt="Professioneel kantoorinterieur met gastvrije medewerker"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-28 sm:h-36 md:h-48 object-cover"
                  />
                  {/* Blue tint overlay */}
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply pointer-events-none" />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Duurzaamheid Preview */}
        <section className="py-10 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <RevealOnScroll variant="fade-up">
                <p className="text-accent font-medium uppercase tracking-wider text-xs font-heading mb-2">
                  Duurzame Visie
                </p>
              </RevealOnScroll>
              <RevealOnScroll variant="fade-up" delay={100}>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2 md:mb-4">
                  Werken aan de toekomst
                </h2>
              </RevealOnScroll>
              <RevealOnScroll variant="fade-up" delay={200}>
                <p className="text-muted-foreground leading-relaxed mb-4 md:mb-6 font-body text-sm md:text-base">
                  Circulariteit staat voorop in ons proces. Wij focussen op circulaire economie, energiezuinige oplossingen en CO2-reductie bij elk project.
                </p>
              </RevealOnScroll>
              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6">
                {[
                  { value: "CO₂", label: "Reductie" },
                  { value: "100%", label: "Circulair" },
                  { value: "♻️", label: "Hergebruik" }
                ].map((stat, index) => (
                  <RevealOnScroll key={index} variant="scale-in" delay={300 + index * 100}>
                    <div className="p-2 md:p-4 gsa-hoek-sm bg-muted/50 hover-lift">
                      <p className="text-lg md:text-2xl font-bold text-accent mb-0.5 font-heading">{stat.value}</p>
                      <p className="text-[10px] md:text-xs text-muted-foreground font-body">{stat.label}</p>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
              <RevealOnScroll variant="fade-up" delay={600}>
                <Button asChild variant="outline" size="sm" className="group">
                  <Link to="/duurzaamheid">
                    Meer over duurzaamheid
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-8 md:py-12 bg-primary">
          <div className="container px-4 md:px-6 text-center">
            <RevealOnScroll variant="fade-up">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                Samenwerken met GPG?
              </h2>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-up" delay={100}>
              <p className="text-white/80 mb-4 max-w-md mx-auto text-sm font-body">
                Ontdek wat wij voor jouw organisatie kunnen betekenen.
              </p>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-up" delay={200}>
              <Button size="sm" variant="hero" className="hover-lift w-full sm:w-auto" asChild>
                <Link to="/contact">Neem contact op</Link>
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

export default OverOns;
