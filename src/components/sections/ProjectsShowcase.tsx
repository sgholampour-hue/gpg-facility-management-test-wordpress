import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import projectBooking from "@/assets/project-booking.jpg";
import projectSchiphol from "@/assets/project-schiphol.jpg";
import projectHub from "@/assets/gsa-hub-locatie.jpg";

const projects = [
  {
    title: "Booking.com HQ",
    category: "Kantoorinrichting",
    image: projectBooking,
    slug: "booking-com",
  },
  {
    title: "Schiphol Office",
    category: "Fit-out",
    image: projectSchiphol,
    slug: "schiphol-kantoor",
  },
  {
    title: "HUB Locaties",
    category: "Integrated Facilities",
    image: projectHub,
    slug: "hub-locaties",
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
          <div className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wide mb-4">
              Projecten
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-primary">
              Recente projecten
            </h2>
          </div>
          <Link 
            to="/projecten"
            className={`inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Alle projecten bekijken
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Projects Grid - Asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Large Project */}
          <Link
            to={`/projecten/${projects[0].slug}`}
            className={`md:col-span-7 group relative rounded-2xl overflow-hidden transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="aspect-[4/3] md:aspect-[16/10]">
              <img 
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-3">
                {projects[0].category}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {projects[0].title}
              </h3>
              <div className={`flex items-center gap-2 text-white/80 text-sm transition-all duration-300 ${
                hoveredIndex === 0 ? "translate-x-2" : ""
              }`}>
                Bekijk project <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Stacked Projects */}
          <div className="md:col-span-5 flex flex-col gap-4 md:gap-6">
            {projects.slice(1).map((project, index) => (
              <Link
                key={project.slug}
                to={`/projecten/${project.slug}`}
                className={`group relative rounded-2xl overflow-hidden flex-1 min-h-[200px] transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                onMouseEnter={() => setHoveredIndex(index + 1)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
