import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import projectBooking from "@/assets/project-booking.jpg";
import projectSchiphol from "@/assets/project-schiphol.jpg";
import projectHub from "@/assets/project-hub.jpg";

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
    image: projectHub,
    stats: ["4 locaties", "Noord & Zuid Holland"],
  },
];

const FeaturedProjects = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section ref={sectionRef} className="py-20 md:py-28 bg-gpg-cream">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary max-w-lg">
            UITGELICHTE PROJECTEN
          </h2>
          <Button variant="outline" asChild>
            <Link to="/projecten">Bekijk alle projecten</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/projecten/${project.slug}`}
              className={`group block project-card focus-ring rounded-lg ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transition: `opacity 450ms ease-in-out ${index * 100}ms, transform 450ms ease-in-out ${index * 100}ms`
              }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-200 ease-in-out" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors duration-200 ease-in-out">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                {project.subtitle}
              </p>
              <div className="flex gap-4">
                {project.stats.map((stat) => (
                  <span
                    key={stat}
                    className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full transition-colors duration-150 ease-in-out hover:bg-accent/20"
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
