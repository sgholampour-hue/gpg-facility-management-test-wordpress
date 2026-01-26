import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const COOKIE_CONSENT_KEY = "gpg-cookie-consent";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay before showing for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
        setTimeout(() => setIsAnimating(true), 50);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-20 md:bottom-6 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 transition-all duration-300 ${
        isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="bg-background gsa-hoek-sm border border-border shadow-2xl p-5 relative">
        {/* Close button */}
        <button
          onClick={handleDecline}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Sluiten"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="pr-6">
          <h3 className="font-semibold text-primary mb-2">
            🍪 Cookies
          </h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            Wij gebruiken cookies om uw ervaring te verbeteren en onze website te analyseren. 
            Door verder te gaan, gaat u akkoord met ons{" "}
            <a href="/privacy" className="text-accent hover:underline">
              privacybeleid
            </a>.
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleDecline}
            className="flex-1"
          >
            Weigeren
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            onClick={handleAccept}
            className="flex-1"
          >
            Accepteren
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
