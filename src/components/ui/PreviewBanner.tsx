import { Eye } from "lucide-react";

const PreviewBanner = () => (
  <div className="fixed top-0 left-0 right-0 z-[100] bg-amber-500 text-amber-950 text-center py-1.5 text-xs font-medium flex items-center justify-center gap-2">
    <Eye className="w-3.5 h-3.5" />
    <span>Preview modus — Dit is een concept en nog niet gepubliceerd</span>
  </div>
);

export default PreviewBanner;
