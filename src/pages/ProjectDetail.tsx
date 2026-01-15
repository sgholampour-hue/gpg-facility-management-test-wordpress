import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar, Ruler, Building2 } from "lucide-react";
import projectBooking from "@/assets/project-booking.jpg";
import projectSchiphol from "@/assets/project-schiphol.jpg";
import projectHub from "@/assets/project-hub.jpg";

const projectsData = {
  "cbre-booking": {
    title: "Booking.com",
    subtitle: "Fit-out en facilitair inhuispakket (via CBRE)",
    image: projectBooking,
    client: "CBRE / Booking.com",
    location: "Amsterdam",
    period: "2018 - 2023",
    stats: [
      { label: "Kantooroppervlakte", value: "65.000 m²" },
      { label: "Volume inrichtingscomponenten", value: "15.000 m³" },
      { label: "Werkplekken", value: "3.500+" },
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
    title: "HQ Schiphol",
    subtitle: "Refresh en werkplekbeheer (lopend)",
    image: projectSchiphol,
    client: "Schiphol Nederland B.V.",
    location: "Schiphol",
    period: "2025 - heden",
    stats: [
      { label: "Oppervlakte", value: "17.000 m²" },
      { label: "Verdiepingen", value: "7" },
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
    image: projectHub,
    client: "Diverse opdrachtgevers",
    location: "Noord & Zuid Holland",
    period: "Doorlopend",
    stats: [
      { label: "Locaties", value: "4" },
      { label: "Regio's", value: "2" },
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
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-40 pb-20">
          <div className="container text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Project niet gevonden
            </h1>
            <Button variant="outline" asChild>
              <Link to="/projecten">Terug naar projecten</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-end pt-32">
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
          </div>

          <div className="container relative z-10 pb-12">
            <Link
              to="/projecten"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Terug naar projecten
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {project.title}
            </h1>
            <p className="text-xl text-white/80">{project.subtitle}</p>
          </div>
        </section>

        {/* Details */}
        <section className="py-16 bg-gpg-cream">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Opdrachtgever
                  </p>
                  <p className="font-medium text-primary">{project.client}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Locatie
                  </p>
                  <p className="font-medium text-primary">{project.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Periode
                  </p>
                  <p className="font-medium text-primary">{project.period}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Ruler className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Omvang
                  </p>
                  <p className="font-medium text-primary">
                    {project.stats[0].value}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    Over dit project
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4">
                    Scope
                  </h3>
                  <ul className="space-y-2">
                    {project.scope.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

{"locations" in project && Array.isArray((project as { locations?: string[] }).locations) && (
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-4">
                      Locaties
                    </h3>
                    <ul className="space-y-2">
                      {((project as { locations: string[] }).locations).map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div className="bg-gpg-cream p-6 gsa-hoek">
                  <h3 className="text-lg font-semibold text-primary mb-4">
                    Kerncijfers
                  </h3>
                  <div className="space-y-4">
                    {project.stats.map((stat, index) => (
                      <div key={index}>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                          {stat.label}
                        </p>
                        <p className="text-2xl font-bold text-accent">
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-primary p-6 gsa-hoek">
                  <h3 className="text-lg font-semibold text-primary-foreground mb-4">
                    Resultaten
                  </h3>
                  <ul className="space-y-2">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-primary-foreground/80"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gpg-cream">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Samen aan uw project werken?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Neem contact op en ontdek hoe wij uw facilitaire uitdagingen
              kunnen oplossen.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Neem contact op</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
