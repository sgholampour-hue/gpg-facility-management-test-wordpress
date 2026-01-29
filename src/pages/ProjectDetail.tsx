import { useParams, Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar, Ruler, Building2 } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CountUp } from "@/components/ui/CountUp";
import SEO from "@/components/SEO";
import projectBooking from "@/assets/project-booking.jpg";
import projectSchiphol from "@/assets/project-schiphol.jpg";
import projectHub from "@/assets/project-hub.jpg";
import projectHub2 from "@/assets/project-hub-2.jpg";
import schipholKantoor1 from "@/assets/schiphol-kantoor-1.jpg";
import schipholKantoor2 from "@/assets/schiphol-kantoor-2.jpg";
import schipholKantoor3 from "@/assets/schiphol-kantoor-3.jpg";
import gsaHubLocatie from "@/assets/gsa-hub-locatie.jpg";
import gsaHubVliegtuig from "@/assets/gsa-hub-vliegtuig.jpg";

const projectsData = {
  "cbre-booking": {
    title: "Booking.com",
    subtitle: "Fit-out en facilitair inhuispakket (via CBRE)",
    image: projectBooking,
    client: "CBRE / Booking.com",
    location: "Amsterdam",
    period: "2018 - 2023",
    stats: [
      { label: "Kantooroppervlakte", value: "65.000 m²", numValue: 65000, suffix: " m²" },
      { label: "Volume inrichtingscomponenten", value: "15.000 m³", numValue: 15000, suffix: " m³" },
      { label: "Werkplekken", value: "3.500+", numValue: 3500, suffix: "+" },
    ],
    description: `Voor CBRE leveren we huismeesterdiensten en in opdracht van CBRE hebben we de complete fit-out van het Booking.com hoofdkantoor in Amsterdam verzorgd.`,
    scope: [
      "2018-2022: Züblin - Bouwlogistiek en support",
      "2022-2023: CBRE / Booking - Facilitair inhuispakket",
      "Levering en montage werkplekmeubilair",
      "Coördinatie met diverse onderaannemers",
      "Huismeesterdiensten voor CBRE",
    ],
    results: [
      "Succesvolle oplevering van 65.000 m² kantoorruimte",
      "Meer dan 3.500 volledig ingerichte werkplekken",
      "Doorlopende facilitaire ondersteuning",
    ],
  },
  "schiphol-hq": {
    title: "Schiphol Hoofdkantoor",
    subtitle: "Refresh en werkplekbeheer (lopend)",
    image: projectSchiphol,
    gallery: [projectSchiphol, schipholKantoor1, schipholKantoor2, schipholKantoor3],
    client: "Schiphol Nederland B.V.",
    location: "Schiphol",
    period: "2025 - heden",
    stats: [
      { label: "Oppervlakte", value: "17.000 m²", numValue: 17000, suffix: " m²" },
      { label: "Verdiepingen", value: "7", numValue: 7, suffix: "" },
    ],
    description: `Als contracthouder werkplekbeheer verzorgen we de complete refresh van het Schiphol hoofdkantoor. Dit lopende project omvat vloerafwerking, meubilair en coördinatie van alle betrokken partijen.`,
    scope: [
      "Verwijderen en aanbrengen nieuwe vloerafwerking",
      "Leveren en monteren van roomdividers",
      "Maatwerk en werkplekmeubilair",
      "Coördineren van elektra, WTB en afbouwwerkzaamheden",
      "Coördineren overige leveranciers (beplanting, belcellen)",
    ],
    results: [
      "Contracthouder werkplekbeheer",
      "Refresh hoofdkantoor in uitvoering",
      "7 verdiepingen in renovatie",
    ],
  },
  "hub-locaties": {
    title: "HUB Locaties",
    subtitle: "Bouwlogistieke ondersteuning",
    image: gsaHubVliegtuig,
    gallery: [gsaHubLocatie, projectHub, projectHub2],
    client: "Diverse opdrachtgevers",
    location: "Noord & Zuid Holland",
    period: "Doorlopend",
    stats: [
      { label: "Locaties", value: "4", numValue: 4, suffix: "" },
      { label: "Regio's", value: "2", numValue: 2, suffix: "" },
    ],
    description: `Onze HUB locaties vormen de logistieke ruggengraat voor bouwprojecten in de Randstad. Van wachtlocaties tot assemblage, wij zorgen voor structuur in het bouwlogistieke proces.`,
    scope: [
      "Wachtlocatie voor bouwplaats (JIT levering)",
      "Aan- en afvoer goederen t.b.v. bouwproject",
      "Assemblages locatie",
      "Opslag retourmaterialen en emballagemateriaal",
      "Coördinatie onaangemelde transporten op HUB",
      "Intensief overleg met uitvoeringsteam",
    ],
    locations: [
      "Valkweg 111, Schiphol - HUB Regio Noord Holland",
      "Kromhoutstraat 20, IJmuiden - HUB Regio Noord Holland",
      "Keileweg 70, Rotterdam - HUB Regio Zuid Holland",
      "Papeweg 1C, Oud Beijerland - HUB Regio Zuid Holland",
    ],
    results: [
      "Structuur in bouwlogistiek proces",
      "4 strategisch gelegen HUB locaties",
      "Dekking Noord & Zuid Holland",
    ],
  },
  "gsa-groep": {
    title: "GSA groep",
    subtitle: "Integrale facilitaire dienstverlening",
    image: projectHub,
    gallery: [projectHub, projectHub2, gsaHubLocatie],
    client: "GSA Groep",
    location: "Randstad",
    period: "Doorlopend",
    stats: [
      { label: "Actieve projecten", value: "25+", numValue: 25, suffix: "+" },
      { label: "Medewerkers", value: "150+", numValue: 150, suffix: "+" },
      { label: "Klanten", value: "50+", numValue: 50, suffix: "+" },
    ],
    description: `GPG is onderdeel van GSA Groep, een familiebedrijf met meer dan 40 jaar ervaring in facilitaire dienstverlening. Samen met onze zusterondernemingen leveren we een breed scala aan diensten: van verhuizingen en handyman services tot complete kantoorinrichtingen en bouwlogistiek.`,
    scope: [
      "Handyman dienstverlening en kleine klussen",
      "Kantoor- en bedrijfsverhuizingen",
      "Integrated Facilities Management",
      "Fit-out projecten en renovaties",
      "Inkoop van meubilair en inrichtingscomponenten",
      "Projectinrichting en stoffering",
      "Bouwlogistiek en HUB-management",
    ],
    results: [
      "Onderdeel van GSA Groep familiebedrijf",
      "40+ jaar ervaring in de sector",
      "Integrale aanpak van A tot Z",
      "Vaste aanspreekpunten per klant",
      "ISO-gecertificeerd kwaliteitsmanagement",
    ],
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <div className="min-h-screen page-enter">
        <main className="pt-40 pb-20">
          <div className="container text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Project niet gevonden
            </h1>
            <Button variant="outline" asChild className="hover-lift">
              <Link to="/projecten">Terug naar projecten</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen page-enter">
      <SEO
        title={project.title}
        description={project.description}
        canonical={`https://gpg-facility.lovable.app/projecten/${slug}`}
        type="article"
      />
      
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-end pt-32">
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {/* Blue tint overlay */}
            <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
          </div>

          <div className="container relative z-10 pb-12">
            <RevealOnScroll variant="fade-up">
              <Link
                to="/projecten"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors font-heading uppercase text-sm hover-lift"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Terug naar projecten
              </Link>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-up" delay={100}>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {project.title}
              </h1>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-up" delay={200}>
              <p className="text-xl text-white/80 font-body">{project.subtitle}</p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Details */}
        <section className="py-16 bg-gpg-cream">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Building2, label: "Opdrachtgever", value: project.client },
                { icon: MapPin, label: "Locatie", value: project.location },
                { icon: Calendar, label: "Periode", value: project.period },
                { icon: Ruler, label: "Omvang", value: project.stats[0].value },
              ].map((item, index) => (
                <RevealOnScroll key={item.label} variant="fade-up" delay={index * 100}>
                  <div className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-heading">
                        {item.label}
                      </p>
                      <p className="font-medium text-primary font-body">{item.value}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <RevealOnScroll variant="fade-up">
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">
                      Over dit project
                    </h2>
                    <p className="text-muted-foreground leading-relaxed font-body">
                      {project.description}
                    </p>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll variant="fade-up" delay={100}>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-4">
                      Scope
                    </h3>
                    <ul className="space-y-2">
                      {project.scope.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-muted-foreground font-body"
                        >
                          <span className="w-1.5 h-1.5 bg-accent mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealOnScroll>

                {"locations" in project && Array.isArray((project as { locations?: string[] }).locations) && (
                  <RevealOnScroll variant="fade-up" delay={200}>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-4">
                        Locaties
                      </h3>
                      <ul className="space-y-2">
                        {((project as { locations: string[] }).locations).map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-muted-foreground font-body"
                          >
                            <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </RevealOnScroll>
                )}

                {"gallery" in project && Array.isArray((project as { gallery?: string[] }).gallery) && (project as { gallery: string[] }).gallery.length > 1 && (
                  <RevealOnScroll variant="fade-up" delay={300}>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-4">
                        Galerij
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {((project as { gallery: string[] }).gallery).map((img, index) => (
                          <div key={index} className="relative gsa-hoek-sm overflow-hidden">
                            <img
                              src={img}
                              alt={`${project.title} afbeelding ${index + 1}`}
                              className="w-full aspect-[4/3] object-cover"
                            />
                            {/* Blue tint overlay */}
                            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </RevealOnScroll>
                )}
              </div>

              <div className="space-y-6">
                <RevealOnScroll variant="slide-left">
                  <div className="bg-gpg-cream p-6 gsa-hoek">
                    <h3 className="text-lg font-semibold text-primary mb-4">
                      Kerncijfers
                    </h3>
                    <div className="space-y-4">
                      {project.stats.map((stat, index) => (
                        <div key={index}>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1 font-heading">
                            {stat.label}
                          </p>
                          <p className="text-2xl font-bold text-accent font-heading">
                            <CountUp 
                              end={stat.numValue} 
                              suffix={stat.suffix}
                              duration={1000}
                              delay={index * 200}
                            />
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll variant="slide-left" delay={150}>
                  <div className="bg-primary p-6 gsa-hoek">
                    <h3 className="text-lg font-semibold text-primary-foreground mb-4">
                      Resultaten
                    </h3>
                    <ul className="space-y-2">
                      {project.results.map((result, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-primary-foreground/80 font-body"
                        >
                          <span className="w-1.5 h-1.5 bg-accent mt-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gpg-cream">
          <div className="container text-center">
            <RevealOnScroll variant="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Samen aan uw project werken?
              </h2>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-up" delay={100}>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto font-body">
                Neem contact op en ontdek hoe wij uw facilitaire uitdagingen
                kunnen oplossen.
              </p>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-up" delay={200}>
              <Button variant="outline" size="lg" asChild className="hover-lift">
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

export default ProjectDetail;
