import { useEffect, useRef, useState } from "react";
import aboutTechnician from "@/assets/about-technician.jpg";
import aboutManagers from "@/assets/about-managers.jpg";
import aboutPlanning from "@/assets/about-planning.jpg";

const AboutGallery = () => {
  const [isVisible, setIsVisible] = useState(false);
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
    <section ref={sectionRef} className="py-20 md:py-28 bg-gpg-cream">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left image */}
          <div
            className={`lg:col-span-3 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src={aboutTechnician}
              alt="Technicus aan het werk"
              className="w-full h-auto rounded-lg shadow-card object-cover"
            />
          </div>

          {/* Center content + bottom image */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div
              className={`text-center mb-8 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="accent-bar-left inline-block text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  WE NEMEN ALLES UIT HANDEN: VAN ENGINEERING TOT INSTALLATIE EN BEHEER.
                </h2>
              </div>
            </div>
            <div
              className={`w-full max-w-md transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <img
                src={aboutPlanning}
                alt="Team bij planning"
                className="w-full h-auto rounded-lg shadow-card object-cover"
              />
            </div>
          </div>

          {/* Right image */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src={aboutManagers}
              alt="Managers bij het werk"
              className="w-full h-auto rounded-lg shadow-card object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGallery;
