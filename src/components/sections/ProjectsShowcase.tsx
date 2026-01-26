import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import projectBooking from "@/assets/project-booking.jpg";
import projectSchiphol from "@/assets/project-schiphol.jpg";
import projectHub from "@/assets/gsa-hub-locatie.jpg";
import projectHub2 from "@/assets/project-hub-2.jpg";

const projects = [
  {
    title: "BOOKING.COM",
    subtitle: "Amsterdam, Nederland",
    year: "2023",
    image: projectBooking,
    slug: "cbre-booking",
    stats: [
      { label: "Oppervlakte", value: "65.000 m²" },
      { label: "Werkplekken", value: "3.500+" },
      { label: "Verdiepingen", value: "12" },
    ],
  },
  {
    title: "HQ SCHIPHOL",
    subtitle: "Schiphol, Nederland",
    year: "Lopend",
    image: projectSchiphol,
    slug: "schiphol-hq",
    stats: [
      { label: "Oppervlakte", value: "45.000 m²" },
      { label: "Werkplekken", value: "2.800+" },
      { label: "Gebouwen", value: "3" },
    ],
  },
  {
    title: "HUB LOCATIES",
    subtitle: "Diverse locaties",
    year: "2024",
    image: projectHub,
    slug: "hub-locaties",
    stats: [
      { label: "Locaties", value: "12" },
      { label: "Onderhoud", value: "Continue" },
      { label: "Medewerkers", value: "50+" },
    ],
  },
  {
    title: "GSA GROEP",
    subtitle: "Hoofdkantoor, Nederland",
    year: "2022",
    image: projectHub2,
    slug: "gsa-groep",
    stats: [
      { label: "Ontzorging", value: "100%" },
      { label: "Services", value: "Full-service" },
      { label: "Jaren", value: "5+" },
    ],
  },
];

const ProjectsShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: "center",
      skipSnaps: false,
    },
    [autoplayPlugin.current]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10 px-4 sm:px-6">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 mb-10 md:mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div>
            <span className="inline-block text-accent text-xs font-semibold uppercase tracking-widest mb-3 md:mb-4">
              Uitgelichte werken
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
              RECENTE PROJECTEN
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              aria-label="Vorig project"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              aria-label="Volgend project"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className={`transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="overflow-hidden -mx-4 sm:-mx-6 md:-mx-12 lg:-mx-24" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, index) => (
                <div 
                  key={project.slug} 
                  className={`flex-shrink-0 px-2 sm:px-3 md:px-4 transition-all duration-500 cursor-pointer ${
                    selectedIndex === index 
                      ? "w-[85%] sm:w-[75%] md:w-[60%] lg:w-[55%]" 
                      : "w-[30%] sm:w-[25%] md:w-[22%] lg:w-[20%]"
                  }`}
                  onClick={() => scrollTo(index)}
                >
                  <Link
                    to={`/projecten/${project.slug}`}
                    className="group relative block rounded-2xl md:rounded-3xl overflow-hidden"
                    onClick={(e) => {
                      if (selectedIndex !== index) {
                        e.preventDefault();
                        scrollTo(index);
                      }
                    }}
                  >
                    <div className={`transition-all duration-500 ${
                      selectedIndex === index ? "aspect-[16/10]" : "aspect-[3/4]"
                    }`}>
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                    
                    {/* Content - Only visible on active slide */}
                    <div className={`absolute inset-0 p-4 sm:p-5 md:p-8 flex flex-col justify-end transition-opacity duration-300 ${
                      selectedIndex === index ? "opacity-100" : "opacity-0"
                    }`}>
                      {/* Year badge */}
                      <span className="inline-block self-start px-3 py-1 rounded bg-accent/80 text-white text-xs font-semibold mb-3">
                        {project.year}
                      </span>
                      
                      <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base text-white/70 mb-4">
                        {project.subtitle}
                      </p>
                      
                      {/* Stats - Enhanced */}
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {project.stats.map((stat, i) => (
                          <div 
                            key={i}
                            className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-sm"
                          >
                            <span className="text-white text-xs md:text-sm font-bold">{stat.value}</span>
                            <span className="text-white/60 text-xs ml-1.5">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Minimal content for inactive slides */}
                    <div className={`absolute bottom-4 left-4 right-4 transition-opacity duration-300 ${
                      selectedIndex === index ? "opacity-0" : "opacity-100"
                    }`}>
                      <span className="inline-block px-2 py-0.5 rounded bg-accent/60 text-white text-[10px] font-medium mb-2">
                        {project.year}
                      </span>
                      <p className="text-xs text-white/60 truncate">
                        {project.subtitle}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className={`flex justify-center gap-2 mt-8 transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                selectedIndex === index 
                  ? "w-8 bg-accent" 
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Ga naar project ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className={`text-center mt-10 md:mt-14 transition-all duration-700 delay-400 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <Link 
            to="/projecten"
            className="inline-flex items-center gap-2 text-white font-semibold uppercase tracking-wide hover:text-accent transition-colors group"
          >
            Bekijk alle projecten
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;