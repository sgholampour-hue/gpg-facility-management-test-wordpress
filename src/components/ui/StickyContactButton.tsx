import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const StickyContactButton = () => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <Link
      to="/contact"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-accent text-white px-4 py-3 rounded-full shadow-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 active:scale-95"
      aria-label="Neem contact op"
    >
      <Phone className="w-5 h-5" />
      <span className="font-semibold text-sm">Contact</span>
    </Link>
  );
};

export default StickyContactButton;
