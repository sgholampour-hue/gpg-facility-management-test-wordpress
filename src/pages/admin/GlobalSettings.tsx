import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Save, Loader2 } from "lucide-react";
import { toast } from "sonner";
import type { Json } from "@/integrations/supabase/types";

interface SiteSettings {
  id: string;
  company_name: string;
  logo_url: string | null;
  phone: string | null;
  email: string | null;
  address: { street?: string; postal_code?: string; city?: string };
  social_links: { linkedin?: string; facebook?: string; instagram?: string };
  default_seo_title: string | null;
  default_seo_description: string | null;
}

const GlobalSettings = () => {
  const { user } = useAuth();
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.from("site_settings").select("*").limit(1).single();
      if (data) {
        setSettings({
          ...data,
          address: (data.address as any) || {},
          social_links: (data.social_links as any) || {},
        });
      }
      setLoading(false);
    };
    fetch();
  }, []);

  const handleSave = async () => {
    if (!settings || !user) return;
    setSaving(true);
    const { error } = await supabase
      .from("site_settings")
      .update({
        company_name: settings.company_name,
        logo_url: settings.logo_url,
        phone: settings.phone,
        email: settings.email,
        address: settings.address as unknown as Json,
        social_links: settings.social_links as unknown as Json,
        default_seo_title: settings.default_seo_title,
        default_seo_description: settings.default_seo_description,
        updated_by: user.id,
      })
      .eq("id", settings.id);

    if (error) {
      toast.error("Fout bij opslaan: " + error.message);
    } else {
      toast.success("Instellingen opgeslagen!");
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  if (!settings) return <p className="text-muted-foreground">Geen instellingen gevonden.</p>;

  const update = (field: keyof SiteSettings, value: any) =>
    setSettings((prev) => prev ? { ...prev, [field]: value } : prev);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary">Instellingen</h1>
          <p className="text-muted-foreground text-sm">Algemene website instellingen.</p>
        </div>
        <Button onClick={handleSave} disabled={saving}>
          <Save className="w-4 h-4 mr-1" />
          {saving ? "Opslaan..." : "Opslaan"}
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Bedrijfsgegevens</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Bedrijfsnaam</Label>
              <Input value={settings.company_name} onChange={(e) => update("company_name", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Telefoonnummer</Label>
              <Input value={settings.phone || ""} onChange={(e) => update("phone", e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>E-mailadres</Label>
              <Input value={settings.email || ""} onChange={(e) => update("email", e.target.value)} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Adres</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Straat + nummer</Label>
              <Input
                value={settings.address.street || ""}
                onChange={(e) => update("address", { ...settings.address, street: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Postcode</Label>
              <Input
                value={settings.address.postal_code || ""}
                onChange={(e) => update("address", { ...settings.address, postal_code: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Plaats</Label>
              <Input
                value={settings.address.city || ""}
                onChange={(e) => update("address", { ...settings.address, city: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Social media</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>LinkedIn URL</Label>
              <Input
                value={settings.social_links.linkedin || ""}
                onChange={(e) => update("social_links", { ...settings.social_links, linkedin: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Facebook URL</Label>
              <Input
                value={settings.social_links.facebook || ""}
                onChange={(e) => update("social_links", { ...settings.social_links, facebook: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Instagram URL</Label>
              <Input
                value={settings.social_links.instagram || ""}
                onChange={(e) => update("social_links", { ...settings.social_links, instagram: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Standaard SEO</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Standaard meta titel</Label>
              <Input
                value={settings.default_seo_title || ""}
                onChange={(e) => update("default_seo_title", e.target.value)}
                maxLength={60}
              />
            </div>
            <div className="space-y-2">
              <Label>Standaard meta beschrijving</Label>
              <Textarea
                value={settings.default_seo_description || ""}
                onChange={(e) => update("default_seo_description", e.target.value)}
                maxLength={160}
                rows={3}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GlobalSettings;
