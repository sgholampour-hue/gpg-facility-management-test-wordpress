import { useEffect, useState, memo } from "react";

// Import logo images
import gsaGroepLogo from "@/assets/clients/gsa-groep.png";
import dysonLogo from "@/assets/clients/dyson.png";
import adyenLogo from "@/assets/clients/adyen.png";
import weworkLogo from "@/assets/clients/wework.png";
import tiktokLogo from "@/assets/clients/tiktok.png";
import cbreLogo from "@/assets/clients/cbre.png";
import schipholLogo from "@/assets/clients/schiphol.png";
import bookingLogo from "@/assets/clients/booking.png";

const ClientLogo = memo(({ name, src }: { name: string; src: string }) => (
  <div className="flex items-center justify-center px-6 md:px-10 lg:px-14">
    <div className="w-28 md:w-40 lg:w-44 h-12 md:h-14 flex items-center justify-center">
      <img 
        src={src} 
        alt={`${name} - klant van GPG Facility Management`}
        className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-all duration-200 ease-out grayscale hover:grayscale-0 hover:scale-[1.02]"
        loading="lazy"
        decoding="async"
        width="176"
        height="56"
      />
    </div>
  </div>
));

ClientLogo.displayName = "ClientLogo";

const clients = [
  { name: "GSA Groep", src: gsaGroepLogo },
  { name: "Schiphol", src: schipholLogo },
  { name: "Adyen", src: adyenLogo },
  { name: "CBRE", src: cbreLogo },
  { name: "Booking.com", src: bookingLogo },
  { name: "WeWork", src: weworkLogo },
  { name: "TikTok", src: tiktokLogo },
  { name: "Dyson", src: dysonLogo },
];

const ClientMarquee = memo(() => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  // For reduced motion: show static grid
  if (prefersReducedMotion) {
    return (
      <section className="py-12 bg-background border-y border-border">
        <div className="container mb-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">
            Zij gingen je voor:
          </p>
        </div>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {clients.map((client) => (
              <ClientLogo key={client.name} name={client.name} src={client.src} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-background border-y border-border overflow-hidden">
      <div className="container mb-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          Zij gingen je voor:
        </p>
      </div>
      
      <div className="marquee-container">
        <div className="marquee-content">
          {/* Duplicate the list for seamless loop */}
          {[...clients, ...clients].map((client, index) => (
            <ClientLogo key={`${client.name}-${index}`} name={client.name} src={client.src} />
          ))}
        </div>
      </div>
    </section>
  );
});

ClientMarquee.displayName = "ClientMarquee";

export default ClientMarquee;
