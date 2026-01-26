import { useEffect, useState, memo } from "react";

import gsaGroepLogo from "@/assets/clients/gsa-groep.png";
import dysonLogo from "@/assets/clients/dyson.png";
import adyenLogo from "@/assets/clients/adyen.png";
import weworkLogo from "@/assets/clients/wework.png";
import tiktokLogo from "@/assets/clients/tiktok.png";
import cbreLogo from "@/assets/clients/cbre.png";
import schipholLogo from "@/assets/clients/schiphol.png";
import bookingLogo from "@/assets/clients/booking.png";

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

const ClientLogosNew = memo(() => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  return (
    <section className="py-10 md:py-14 bg-background border-y border-border/50 overflow-hidden">
      <div className="container mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Vertrouwd door toonaangevende organisaties
          </p>
        </div>
      </div>

      {prefersReducedMotion ? (
        <div className="container">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-8">
            {clients.map((client) => (
              <div key={client.name} className="flex items-center justify-center h-16 md:h-20">
                <img 
                  src={client.src} 
                  alt={client.name}
                  className="max-h-[60px] md:max-h-[72px] max-w-[150px] md:max-w-[210px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee-slow hover:[animation-play-state:paused]">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div 
                key={`${client.name}-${index}`} 
                className="flex-shrink-0 px-12 md:px-20 flex items-center justify-center h-16 md:h-20"
              >
                <img 
                  src={client.src} 
                  alt={client.name}
                  className="max-h-[60px] md:max-h-[72px] max-w-[150px] md:max-w-[210px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
});

ClientLogosNew.displayName = "ClientLogosNew";

export default ClientLogosNew;
