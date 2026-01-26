import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import projectBooking from "@/assets/project-booking.jpg";
import projectSchiphol from "@/assets/project-schiphol.jpg";
import projectHub from "@/assets/gsa-hub-locatie.jpg";
import projectHub2 from "@/assets/project-hub-2.jpg";
import gsaGroepLogo from "@/assets/gsa-groep-logo.png";

const projects = [
  {
    title: "Booking.com HQ",
    category: "Kantoorinrichting",
    image: projectBooking,
    slug: "cbre-booking",
  },
  {
    title: "Schiphol Office",
    category: "Fit-out",
    image: projectSchiphol,
    slug: "schiphol-hq",
  },
  {
    title: "HUB Locaties",
    category: "Integrated Facilities",
    image: projectHub,
    slug: "hub-locaties",
  },
  {
    title: "GSA Groep Projecten",
    category: "Complete ontzorging",
    image: projectHub2,
    slug: "gsa-groep",
    hasLogo: true,
  },
];

const ProjectsShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section ref={sectionRef} className="py-12 md:py-20 lg:py-24 bg-muted/30">
      <div className="container px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-4 mb-8 md:mb-14">
          <div className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wide mb-3 md:mb-4">
              Projecten
            </span>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary">
              Recente projecten
            </h2>
          </div>
          <Link 
            to="/projecten"
            className={`inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-sm md:text-base ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Alle projecten bekijken
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Projects Grid - 2x2 layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/projecten/${project.slug}`}
              className={`group relative gsa-hoek-sm overflow-hidden transition-all duration-700 hover:shadow-2xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-[4/3]">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent transition-opacity duration-300 group-hover:from-primary/90" />
              
              {/* GSA Groep Logo for last card */}
              {'hasLogo' in project && project.hasLogo && (
                <div className="absolute bottom-4 left-4 z-10">
                  <img 
                    src={gsaGroepLogo} 
                    alt="GSA Groep" 
                    className="h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-90"
                  />
                </div>
              )}
              
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                {'hasLogo' in project && project.hasLogo ? (
                  <div className="ml-auto max-w-[60%] text-right">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-2 transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                      {project.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 transition-transform duration-300 group-hover:translate-x-1">
                      {project.title}
                    </h3>
                    <div className={`flex items-center gap-2 text-white/80 text-sm justify-end transition-all duration-300 ${
                      hoveredIndex === index ? "translate-x-2 text-white" : ""
                    }`}>
                      Bekijk project <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                  </div>
                ) : (
                  <>
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-2 transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                      {project.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 transition-transform duration-300 group-hover:translate-x-1">
                      {project.title}
                    </h3>
                    <div className={`flex items-center gap-2 text-white/80 text-sm transition-all duration-300 ${
                      hoveredIndex === index ? "translate-x-2 text-white" : ""
                    }`}>
                      Bekijk project <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                  </>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
