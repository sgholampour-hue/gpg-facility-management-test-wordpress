import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageIcon, Search, Check, Upload, Loader2, AlertCircle } from "lucide-react";
import { toast } from "sonner";

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

const isValidUrl = (url: string) =>
  /^https?:\/\/.+/i.test(url);

const MediaPicker = ({ value, onChange, label }: MediaPickerProps) => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imgStatus, setImgStatus] = useState<"idle" | "loading" | "loaded" | "error">("idle");
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value && isValidUrl(value)) {
      setImgStatus("loading");
    } else {
      setImgStatus("idle");
    }
  }, [value]);

  const fetchMedia = () => {
    setLoading(true);
    supabase
      .from("media")
      .select("id, file_name, file_url, file_type, alt_text")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setMedia((data as MediaItem[]) || []);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!open) return;
    fetchMedia();
  }, [open]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || !user) return;
    setUploading(true);

    for (const file of Array.from(files)) {
      const fileExt = file.name.split(".").pop();
      const filePath = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("cms-media")
        .upload(filePath, file);

      if (uploadError) {
        toast.error(`Fout bij uploaden: ${uploadError.message}`);
        continue;
      }

      const { data: urlData } = supabase.storage.from("cms-media").getPublicUrl(filePath);

      await supabase.from("media").insert({
        file_name: file.name,
        file_path: filePath,
        file_url: urlData.publicUrl,
        file_type: file.type,
        file_size: file.size,
        uploaded_by: user.id,
      });

      // Auto-select the uploaded image
      onChange(urlData.publicUrl);
    }

    toast.success("Afbeelding geüpload!");
    fetchMedia();
    setUploading(false);
    if (fileRef.current) fileRef.current.value = "";
  };

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
          <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col">
            <DialogHeader>
              <DialogTitle>Kies een afbeelding</DialogTitle>
            </DialogHeader>

            {/* Upload button */}
            <div className="flex gap-2 mb-3">
              <input
                ref={fileRef}
                type="file"
                multiple
                accept="image/*"
                onChange={handleUpload}
                className="hidden"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={() => fileRef.current?.click()}
                disabled={uploading}
              >
                {uploading ? (
                  <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                ) : (
                  <Upload className="w-4 h-4 mr-1" />
                )}
                {uploading ? "Uploaden..." : "Afbeelding uploaden"}
              </Button>
            </div>

            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Zoek op bestandsnaam..."
                className="pl-9"
              />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 overflow-y-auto flex-1 max-h-[50vh] pr-1">
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
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all hover:ring-2 hover:ring-primary/50 focus:outline-none focus:ring-2 focus:ring-primary ${
                    value === item.file_url ? "border-primary ring-2 ring-primary/30" : "border-border"
                  }`}
                >
                  <img
                    src={item.file_url}
                    alt={item.alt_text || item.file_name}
                    className="w-full h-full object-cover"
                    loading="lazy"
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
      {/* Image preview with loading/error states */}
      {value && isValidUrl(value) && (
        <div className="relative w-20 h-20">
          {imgStatus === "loading" && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-md border">
              <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
            </div>
          )}
          {imgStatus === "error" && (
            <div className="w-20 h-20 flex flex-col items-center justify-center bg-muted rounded-md border text-destructive gap-1">
              <AlertCircle className="w-4 h-4" />
              <span className="text-[9px] text-center leading-tight px-1">Kon niet laden</span>
            </div>
          )}
          <img
            src={value}
            alt="Preview"
            className={`w-20 h-20 object-cover rounded-md border ${imgStatus === "error" ? "hidden" : ""}`}
            onLoad={() => setImgStatus("loaded")}
            onError={() => setImgStatus("error")}
          />
        </div>
      )}
      {value && !isValidUrl(value) && (
        <p className="text-[10px] text-destructive flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          URL moet beginnen met http:// of https://
        </p>
      )}
    </div>
  );
};

export default MediaPicker;
