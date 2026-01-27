import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/sections/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import SEO from "@/components/SEO";
import ScrollToTop from "@/components/ui/ScrollToTop";
import MobileCTABar from "@/components/ui/MobileCTABar";
import projectBooking from "@/assets/project-booking.jpg";
import projectSchiphol from "@/assets/project-schiphol.jpg";
import gsaHubLocatie from "@/assets/gsa-hub-locatie.jpg";

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
    image: gsaHubLocatie,
    stats: ["4 locaties", "Noord & Zuid Holland"],
    period: "Doorlopend",
  },
];

const Projecten = () => {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <SEO
        title="Projecten"
        description="Bekijk onze projecten: van Booking.com fit-outs tot Schiphol werkplekbeheer. Ontdek wat GPG Facility Management voor uw organisatie kan betekenen."
        canonical="https://gpg-facility.lovable.app/projecten"
      />
      
      <main>
        {/* Hero section */}
        <section className="pt-24 md:pt-40 pb-12 md:pb-20 bg-gpg-cream">
          <div className="container px-4 md:px-6">
            <RevealOnScroll variant="fade-up" delay={0}>
              <p className="text-accent font-medium mb-3 md:mb-4 tracking-wide font-heading uppercase text-xs md:text-sm">
                ONZE PROJECTEN
              </p>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-up" delay={100}>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 md:mb-6 max-w-3xl">
                PROJECTEN DIE SPREKEN
              </h1>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-up" delay={200}>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl font-body">
                Van kantoorinrichtingen tot bouwlogistiek: bekijk een selectie van onze projecten en ontdek wat wij voor jouw organisatie kunnen betekenen.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Projects grid */}
        <section className="py-12 md:py-20 lg:py-28 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <RevealOnScroll 
                  key={project.slug} 
                  variant="fade-up" 
                  delay={index * 120}
                >
                  <Link
                    to={`/projecten/${project.slug}`}
                    className="group block"
                  >
                    <div className="relative overflow-hidden gsa-hoek-tr-lg mb-3 md:mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full aspect-[4/3] object-cover image-zoom"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                    </div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-heading">
                      {project.period}
                    </span>
                    <h2 className="text-lg md:text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-2 md:mb-3 font-body">
                      {project.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {project.stats.map((stat) => (
                        <span
                          key={stat}
                          className="text-xs font-medium text-accent bg-accent/10 px-2 md:px-3 py-1 gsa-hoek-sm font-heading"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 md:mt-4 flex items-center text-sm font-medium text-primary group-hover:text-accent transition-colors font-heading uppercase">
                      Bekijk project <ArrowRight className="ml-2 w-4 h-4 arrow-slide" />
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection variant="light" />

        {/* CTA */}
        <section className="py-12 md:py-16 bg-primary">
          <div className="container px-4 md:px-6 text-center">
            <RevealOnScroll variant="fade-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-foreground mb-3 md:mb-4">
                Samen aan jouw project werken?
              </h2>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-up" delay={100}>
              <p className="text-primary-foreground/80 mb-6 md:mb-8 max-w-lg mx-auto font-body text-sm md:text-base">
                Neem contact op en ontdek hoe wij jouw facilitaire uitdagingen kunnen oplossen.
              </p>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-up" delay={200}>
              <Button variant="hero" size="lg" asChild className="hover-lift w-full sm:w-auto">
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

export default Projecten;
