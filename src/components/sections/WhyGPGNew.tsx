import { useEffect, useRef, useState } from "react";
import { Users, Award, Calendar, RefreshCw } from "lucide-react";
import { usePageContent } from "@/hooks/useCmsContent";
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
    role: "Teamleider Facilitair",
    image: teamDanny,
    phone: "020 - 795 2100",
    email: "d.moeljoredjo@gsafacilities.nl",
  },
  {
    name: "Patricia Nijholt",
    role: "Algemeen Manager GPG",
    image: teamPatricia,
    phone: "020 - 795 2100",
    email: "p.nijholt@gpgfacilities.nl",
  },
];

const features = [
  {
    icon: Users,
    title: "Persoonlijke benadering",
    description: "Als familiebedrijf behouden we altijd het persoonlijke contact.",
  },
  {
    icon: Award,
    title: "Vakwerk",
    description: "Kwaliteit staat bij ons voorop bij elk project.",
  },
  {
    icon: Calendar,
    title: "Volgens planning",
    description: "We halen de deadline, altijd.",
  },
  {
    icon: RefreshCw,
    title: "Flexibiliteit",
    description: "We denken in oplossingen en passen ons aan.",
  },
];

const WhyGPGNew = () => {
  const { sections } = usePageContent("home");
  const whyGpg = sections?.why_gpg;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent -z-10" />

      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Features in Tabs/Cards */}
          <div className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}>
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wide mb-3 md:mb-4">
              {whyGpg?.badge || "Waarom GPG"}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4">
              {whyGpg?.headline || "40+ jaar facilitaire expertise"}
            </h2>
            <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
              {whyGpg?.description || "Bij GPG begrijpen we dat je behoefte hebt aan een betrouwbare partner die jouw facilitaire diensten naar een hoger niveau tilt."}
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`group/feature p-3 md:p-4 gsa-hoek-sm border border-border bg-background hover:border-accent/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default ${
                    isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-2 md:mb-3 transition-all duration-300 group-hover/feature:bg-accent group-hover/feature:scale-110 group-hover/feature:rotate-3">
                    <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-accent transition-all duration-300 group-hover/feature:text-white group-hover/feature:rotate-6 group-hover/feature:scale-110" />
                  </div>
                  <h4 className="font-semibold text-primary text-xs sm:text-sm mb-0.5 md:mb-1 transition-colors duration-300 group-hover/feature:text-accent line-clamp-1">
                    {feature.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Team */}
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}>
            <div className="bg-muted/50 gsa-hoek-lg p-6 md:p-8 border border-border/50 transition-all duration-300 hover:shadow-lg hover:border-accent/20">
              {/* GPG Logo */}
              <div className="flex justify-center mb-6">
                <img
                  src={gpgLogo}
                  alt="GPG Facility Management"
                  className="h-12 w-auto object-contain"
                />
              </div>

              <h3 className="text-center text-lg font-semibold text-primary mb-6">
                Ons Team
              </h3>

              {/* Team Grid */}
              <div className="grid grid-cols-3 gap-4">
                {teamMembers.map((member) => (
                  <TeamMemberCard
                    key={member.name}
                    member={member}
                    variant="light"
                  />
                ))}
              </div>

              <p className="text-center text-xs text-muted-foreground mt-6">
                Klik op een teamlid voor contactgegevens
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGPGNew;
