import { useEffect, useRef, useState, memo } from "react";
import aboutCarpetInstall from "@/assets/about-carpet-install.jpg";
import aboutDeskInstall from "@/assets/about-desk-install.jpg";
import gpgTeam from "@/assets/gpg-team.jpg";
const AboutGallery = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section ref={sectionRef} className="py-12 md:py-28 bg-gpg-cream">
      <div className="container">
        {/* Mobile layout - matches reference image */}
        <div className="lg:hidden">
          {/* Top row: 2 images side by side */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <img src={aboutCarpetInstall} alt="GPG technicus installeert tapijt" className="w-full aspect-[3/4] object-cover gsa-hoek-tr-lg shadow-card" loading="lazy" decoding="async" />
            </div>
            <div className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <img src={aboutDeskInstall} alt="GPG monteur installeert bureau" className="w-full aspect-[4/3] object-cover gsa-hoek-tl-lg shadow-card mt-8" loading="lazy" decoding="async" />
            </div>
          </div>

          {/* Title with accent bar */}
          <div className={`mb-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="accent-bar-left">
              <h2 className="text-xl font-bold text-primary leading-tight">
                WE NEMEN ALLES UIT HANDEN: VAN ENGINEERING TOT INSTALLATIE EN BEHEER.
              </h2>
            </div>
          </div>

          {/* Bottom image - full width */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <img src={gpgTeam} alt="GPG team bij projectoverleg op kantoor" className="w-full aspect-[4/3] object-cover gsa-hoek-bl-lg shadow-card" loading="lazy" decoding="async" />
          </div>
        </div>

        {/* Desktop layout - original grid */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center">
          {/* Left image */}
          <div className={`col-span-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <img src={aboutCarpetInstall} alt="GPG technicus installeert tapijt" className="w-full h-auto gsa-hoek-tr-lg shadow-card object-cover" loading="lazy" decoding="async" />
          </div>

          {/* Center content + bottom image */}
          <div className="col-span-6 flex flex-col items-center">
            <div className={`text-center mb-8 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="accent-bar-left inline-block text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  WE NEMEN ALLES UIT HANDEN: VAN ENGINEERING TOT INSTALLATIE EN BEHEER.
                </h2>
              </div>
            </div>
            <div className={`w-full max-w-md transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <img src={aboutDeskInstall} alt="GPG monteur installeert bureau" className="w-full h-auto gsa-hoek-bl-lg shadow-card object-cover" loading="lazy" decoding="async" />
            </div>
          </div>

          {/* Right image */}
          <div className={`col-span-3 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <img src={gpgTeam} alt="GPG team bij projectoverleg op kantoor" className="w-full h-auto gsa-hoek-tl-lg shadow-card object-cover" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>;
});
AboutGallery.displayName = "AboutGallery";
export default AboutGallery;