import { useEffect, useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Trash2, Loader2, Image as ImageIcon, Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface MediaItem {
  id: string;
  file_name: string;
  file_url: string;
  file_type: string | null;
  file_size: number | null;
  alt_text: string | null;
  created_at: string;
}

const MediaManager = () => {
  const { user } = useAuth();
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const fetchMedia = async () => {
    const { data } = await supabase
      .from("media")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setMedia(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchMedia();
  }, []);

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
        toast.error(`Fout bij uploaden van ${file.name}: ${uploadError.message}`);
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
    }

    toast.success("Bestanden geüpload!");
    fetchMedia();
    setUploading(false);
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleDelete = async (item: MediaItem) => {
    if (!confirm(`Weet je zeker dat je "${item.file_name}" wilt verwijderen?`)) return;

    await supabase.storage.from("cms-media").remove([item.file_name]);
    await supabase.from("media").delete().eq("id", item.id);
    setMedia((prev) => prev.filter((m) => m.id !== item.id));
    toast.success("Bestand verwijderd.");
  };

  const copyUrl = (item: MediaItem) => {
    navigator.clipboard.writeText(item.file_url);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const formatSize = (bytes: number | null) => {
    if (!bytes) return "–";
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary">Media</h1>
          <p className="text-muted-foreground text-sm">Beheer afbeeldingen en bestanden.</p>
        </div>
        <div>
          <input
            ref={fileRef}
            type="file"
            multiple
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />
          <Button onClick={() => fileRef.current?.click()} disabled={uploading}>
            {uploading ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <Upload className="w-4 h-4 mr-1" />}
            {uploading ? "Uploaden..." : "Upload bestanden"}
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
        </div>
      ) : media.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            <ImageIcon className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>Nog geen media geüpload.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {media.map((item) => (
            <Card key={item.id} className="overflow-hidden group">
              <div className="aspect-square bg-muted relative">
                {item.file_type?.startsWith("image/") ? (
                  <img
                    src={item.file_url}
                    alt={item.alt_text || item.file_name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-muted-foreground" />
                  </div>
                )}
                {/* Overlay actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => copyUrl(item)}
                  >
                    {copiedId === item.id ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                  <Button
                    variant="destructive"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleDelete(item)}
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-2">
                <p className="text-xs truncate text-foreground">{item.file_name}</p>
                <p className="text-[10px] text-muted-foreground">{formatSize(item.file_size)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaManager;
