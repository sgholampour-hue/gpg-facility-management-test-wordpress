import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import useEmblaCarousel from "embla-carousel-react";
import projectBooking from "@/assets/project-booking.jpg";
import projectSchiphol from "@/assets/project-schiphol.jpg";
import gsaHubLocatie from "@/assets/gsa-hub-locatie.jpg";

const projects = [
  {
    slug: "cbre-booking",
    title: "Booking.com",
    subtitle: "Fit-out en facilitair inhuispakket (via CBRE)",
    image: projectBooking,
    stats: ["65.000 m²", "3.500+ werkplekken"],
  },
  {
    slug: "schiphol-hq",
    title: "HQ Schiphol",
    subtitle: "Refresh en werkplekbeheer (lopend)",
    image: projectSchiphol,
    stats: ["17.000 m²", "7 verdiepingen"],
  },
  {
    slug: "hub-locaties",
    title: "HUB Locaties",
    subtitle: "Bouwlogistieke ondersteuning",
    image: gsaHubLocatie,
    stats: ["4 locaties", "Noord & Zuid Holland"],
  },
];

const ProjectCard = ({ project, isVisible, index }: { 
  project: typeof projects[0]; 
  isVisible: boolean; 
  index: number;
}) => (
  <Link
    to={`/projecten/${project.slug}`}
    className={`group block project-card focus-ring ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`}
    style={{
      transition: `opacity 450ms ease-in-out ${index * 100}ms, transform 450ms ease-in-out ${index * 100}ms`
    }}
  >
    <div className="relative overflow-hidden gsa-hoek-tr-lg mb-3 md:mb-4">
      <img
        src={project.image}
        alt={project.title}
        className="w-full aspect-[4/3] object-cover"
      />
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-200 ease-in-out" />
    </div>
    <h3 className="text-lg md:text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors duration-200 ease-in-out">
      {project.title}
    </h3>
    <p className="text-muted-foreground text-xs md:text-sm mb-2 md:mb-3">
      {project.subtitle}
    </p>
    <div className="flex flex-wrap gap-2">
      {project.stats.map((stat) => (
        <span
          key={stat}
          className="text-xs font-medium text-accent bg-accent/10 px-2 md:px-3 py-1 gsa-hoek-sm transition-colors duration-150 ease-in-out hover:bg-accent/20"
        >
          {stat}
        </span>
      ))}
    </div>
  </Link>
);

const FeaturedProjects = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: "start",
    dragFree: true,
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          projects.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index]);
            }, index * 150);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-28 bg-gpg-cream">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-primary max-w-lg">
            UITGELICHTE PROJECTEN
          </h2>
          <div className="flex items-center gap-3">
            {isMobile && (
              <div className="flex gap-2">
                <button
                  onClick={() => emblaApi?.scrollPrev()}
                  disabled={!canScrollPrev}
                  className="w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center text-primary disabled:opacity-30 hover:bg-primary hover:text-white transition-colors"
                  aria-label="Vorig project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => emblaApi?.scrollNext()}
                  disabled={!canScrollNext}
                  className="w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center text-primary disabled:opacity-30 hover:bg-primary hover:text-white transition-colors"
                  aria-label="Volgend project"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
            <Button variant="outline" size="sm" asChild className="text-xs md:text-sm">
              <Link to="/projecten">Alle projecten</Link>
            </Button>
          </div>
        </div>

        {/* Mobile: Carousel */}
        {isMobile ? (
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4">
                {projects.map((project, index) => (
                  <div key={project.slug} className="flex-shrink-0 w-[80%]">
                    <ProjectCard
                      project={project}
                      isVisible={visibleCards.includes(index)}
                      index={index}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    selectedIndex === index 
                      ? "bg-primary w-6" 
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Ga naar project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop: Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                isVisible={visibleCards.includes(index)}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
