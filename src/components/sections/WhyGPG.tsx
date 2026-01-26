import { useEffect, useRef, useState } from "react";
import { Users, Award, Calendar, RefreshCw } from "lucide-react";
import teamWim from "@/assets/team-wim-gruijters.png";
import teamDanny from "@/assets/team-danny-moeljoredjo.png";
import teamPatricia from "@/assets/team-patricia-nijholt.png";

const features = [
  {
    icon: Users,
    title: "Persoonlijke benadering",
    description:
      "Begonnen als familiebedrijf, zijn we uitgegroeid tot een professionele partner in facility management, zonder onze persoonlijke benadering te verliezen.",
  },
  {
    icon: Award,
    title: "Vakwerk",
    description:
      "Kwaliteit staat bij ons voorop, zodat je met een gerust hart onze diensten kunt inzetten voor jouw opdrachtgevers.",
  },
  {
    icon: Calendar,
    title: "Volgens planning",
    description:
      "Het halen van de deadline is voor ons heel gewoon, zodat jouw opdrachtgever het project op tijd kan opleveren.",
  },
  {
    icon: RefreshCw,
    title: "Flexibiliteit",
    description:
      "Soms loopt de praktijk anders dan gepland. Geen probleem, we denken in oplossingen en passen ons aan.",
  },
];

const WhyGPG = () => {
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
    <section ref={sectionRef} className="py-12 md:py-20 lg:py-28 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6">
              DAAROM GPG FACILITY MANAGEMENT
            </h2>
            <p className="text-muted-foreground mb-6 md:mb-10 leading-relaxed text-sm md:text-base">
              Bij GPG Facility Management begrijpen we dat jij als opdrachtgever behoefte hebt aan een betrouwbare partner die jouw facilitaire diensten naar een hoger niveau tilt. Al meer dan 15 jaar verzorgen we hoogwaardige facilitaire oplossingen voor uiteenlopende projecten. Een persoonlijke benadering en meedenken staan bij ons centraal.
            </p>

            <h3 className="text-base md:text-lg font-semibold text-primary mb-4 md:mb-6 uppercase tracking-wide">
              Met GPG kun je rekenen op:
            </h3>

            <div className="space-y-4 md:space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex gap-3 md:gap-4 transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full border border-border flex items-center justify-center">
                    <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-0.5 md:mb-1 text-sm md:text-base">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Team Members - Hidden on mobile, shown on lg+ */}
          <div
            className={`relative transition-all duration-700 delay-300 hidden lg:block ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <img
                  src={teamWim}
                  alt="Wim Gruijters - GPG Management"
                  className="w-full aspect-square object-cover rounded-full shadow-card mb-3"
                />
                <h4 className="font-semibold text-primary text-sm">Wim Gruijters</h4>
              </div>
              <div className="text-center">
                <img
                  src={teamDanny}
                  alt="Danny Moeljoredjo - GPG Management"
                  className="w-full aspect-square object-cover rounded-full shadow-card mb-3"
                />
                <h4 className="font-semibold text-primary text-sm">Danny Moeljoredjo</h4>
              </div>
              <div className="text-center">
                <img
                  src={teamPatricia}
                  alt="Patricia Nijholt - GPG Management"
                  className="w-full aspect-square object-cover rounded-full shadow-card mb-3"
                />
                <h4 className="font-semibold text-primary text-sm">Patricia Nijholt</h4>
              </div>
            </div>
          </div>

          {/* Mobile Team Members - Shown only on mobile */}
          <div
            className={`relative transition-all duration-700 delay-300 lg:hidden ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <img
                  src={teamWim}
                  alt="Wim Gruijters"
                  className="w-full aspect-square object-cover rounded-full shadow-card mb-2"
                />
                <h4 className="font-semibold text-primary text-xs">Wim Gruijters</h4>
              </div>
              <div className="text-center">
                <img
                  src={teamDanny}
                  alt="Danny Moeljoredjo"
                  className="w-full aspect-square object-cover rounded-full shadow-card mb-2"
                />
                <h4 className="font-semibold text-primary text-xs">Danny Moeljoredjo</h4>
              </div>
              <div className="text-center">
                <img
                  src={teamPatricia}
                  alt="Patricia Nijholt"
                  className="w-full aspect-square object-cover rounded-full shadow-card mb-2"
                />
                <h4 className="font-semibold text-primary text-xs">Patricia Nijholt</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGPG;
