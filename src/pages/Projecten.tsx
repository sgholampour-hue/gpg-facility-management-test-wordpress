import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/sections/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import projectBooking from "@/assets/project-booking.jpg";
import projectSchiphol from "@/assets/project-schiphol.jpg";
import projectHub from "@/assets/project-hub.jpg";

const projects = [
  {
    slug: "cbre-booking",
    title: "Booking.com",
    subtitle: "Fit-out en facilitair inhuispakket (via CBRE)",
    image: projectBooking,
    stats: ["65.000 m²", "15.000 m³", "3.500+ werkplekken"],
    period: "2018 - 2023",
  },
  {
    slug: "schiphol-hq",
    title: "HQ Schiphol",
    subtitle: "Refresh en werkplekbeheer (lopend)",
    image: projectSchiphol,
    stats: ["17.000 m²", "7 verdiepingen"],
    period: "2025 - heden",
  },
  {
    slug: "hub-locaties",
    title: "HUB Locaties",
    subtitle: "Bouwlogistieke ondersteuning",
    image: projectHub,
    stats: ["4 locaties", "Noord & Zuid Holland"],
    period: "Doorlopend",
  },
];

const Projecten = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero section */}
        <section className="pt-40 pb-20 bg-gpg-cream">
          <div className="container">
            <p className="text-accent font-medium mb-4 tracking-wide">
              ONZE PROJECTEN
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 max-w-3xl">
              PROJECTEN DIE SPREKEN
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Van kantoorinrichtingen tot bouwlogistiek: bekijk een selectie van onze projecten en ontdek wat wij voor jouw organisatie kunnen betekenen.
            </p>
          </div>
        </section>

        {/* Projects grid */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  to={`/projecten/${project.slug}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden gsa-hoek-br-lg mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                  </div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {project.period}
                  </span>
                  <h2 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-3">
                    {project.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stats.map((stat) => (
                      <span
                        key={stat}
                        className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 gsa-hoek-sm"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary group-hover:text-accent transition-colors">
                    Bekijk project <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection variant="light" />

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Samen aan uw project werken?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Neem contact op en ontdek hoe wij uw facilitaire uitdagingen kunnen oplossen.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Neem contact op</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projecten;
