import { memo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ctaImage from "@/assets/cta-worker.jpg";

const FinalCTA = memo(() => {
  return (
    <section className="relative min-h-[400px] flex items-center">
      <div className="absolute inset-0">
        <img
          src={ctaImage}
          alt="GPG vakman aan het werk met professionele gereedschap"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        {/* Blue tint overlay - consistent brand styling */}
        <div className="absolute inset-0 bg-primary/25 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/50 to-primary/30 pointer-events-none" />
      </div>

      <div className="container relative z-10 text-center py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 max-w-2xl mx-auto">
          ONTDEK HOE WIJ JOUW PROJECT NAAR EEN HOGER NIVEAU TILLEN
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
          Neem contact met ons op voor een vrijblijvend adviesgesprek. Wij helpen je graag op weg.
        </p>
        <Button variant="hero" size="xl" asChild>
          <Link to="/contact">Neem contact op</Link>
        </Button>
      </div>
    </section>
  );
});

FinalCTA.displayName = "FinalCTA";

export default FinalCTA;
