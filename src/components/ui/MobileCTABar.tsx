import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const MobileCTABar = () => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary border-t border-primary-foreground/10 safe-area-bottom">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Phone button */}
        <a
          href="tel:+31207952100"
          className="flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors"
          aria-label="Bel ons"
        >
          <div className="w-10 h-10 gsa-hoek-sm bg-primary-foreground/10 flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-primary-foreground/60 uppercase tracking-wide">Bel direct</span>
            <span className="text-xs font-semibold">020 - 795 21 00</span>
          </div>
        </a>

        {/* CTA button */}
        <Link
          to="/contact"
          className="flex items-center gap-2 bg-accent text-white px-4 py-2.5 gsa-hoek-sm font-semibold text-sm hover:bg-accent/90 transition-all duration-200 active:scale-95"
        >
          Neem contact op
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default MobileCTABar;
