import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageIcon, Search, Check } from "lucide-react";

interface MediaPickerProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

interface MediaItem {
  id: string;
  file_name: string;
  file_url: string;
  file_type: string | null;
  alt_text: string | null;
}

const MediaPicker = ({ value, onChange, label }: MediaPickerProps) => {
  const [open, setOpen] = useState(false);
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    supabase
      .from("media")
      .select("id, file_name, file_url, file_type, alt_text")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setMedia((data as MediaItem[]) || []);
        setLoading(false);
      });
  }, [open]);

  const filtered = media.filter(
    (m) =>
      m.file_type?.startsWith("image") &&
      (m.file_name.toLowerCase().includes(search.toLowerCase()) ||
        m.alt_text?.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-2">
      {label && <p className="text-xs font-medium capitalize">{label}</p>}
      <div className="flex gap-2">
        <Input
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Afbeelding URL"
          className="flex-1"
        />
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon" type="button">
              <ImageIcon className="w-4 h-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh]">
            <DialogHeader>
              <DialogTitle>Kies een afbeelding</DialogTitle>
            </DialogHeader>
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Zoek op bestandsnaam..."
                className="pl-9"
              />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 overflow-y-auto max-h-[50vh] pr-1">
              {loading && <p className="col-span-full text-center text-sm text-muted-foreground py-8">Laden...</p>}
              {!loading && filtered.length === 0 && (
                <p className="col-span-full text-center text-sm text-muted-foreground py-8">Geen afbeeldingen gevonden.</p>
              )}
              {filtered.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    onChange(item.file_url);
                    setOpen(false);
                  }}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all hover:ring-2 hover:ring-primary/50 ${
                    value === item.file_url ? "border-primary ring-2 ring-primary/30" : "border-border"
                  }`}
                >
                  <img
                    src={item.file_url}
                    alt={item.alt_text || item.file_name}
                    className="w-full h-full object-cover"
                  />
                  {value === item.file_url && (
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                      <Check className="w-6 h-6 text-white drop-shadow-md" />
                    </div>
                  )}
                  <p className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[10px] px-1 py-0.5 truncate">
                    {item.file_name}
                  </p>
                </button>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
      {value && (
        <img src={value} alt="Preview" className="w-20 h-20 object-cover rounded-md border" />
      )}
    </div>
  );
};

export default MediaPicker;
