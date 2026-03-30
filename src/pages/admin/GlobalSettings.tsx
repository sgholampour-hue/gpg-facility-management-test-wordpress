import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Save, Loader2, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import type { Json } from "@/integrations/supabase/types";
import { invalidateSiteSettings } from "@/hooks/useSiteSettings";

interface LinkItem { label: string; href: string; hasDropdown?: boolean; icon?: string }

interface SiteSettings {
  id: string;
  company_name: string;
  logo_url: string | null;
  phone: string | null;
  email: string | null;
  address: { street?: string; postal_code?: string; city?: string };
  social_links: { linkedin?: string; facebook?: string; instagram?: string };
  footer_info: {
    tagline?: string; tagline_sub?: string;
    cta_headline?: string; cta_text?: string; cta_button_label?: string; cta_button_link?: string;
    btw_id?: string; kvk?: string;
    diensten_links?: LinkItem[]; quick_links?: LinkItem[];
    navigation_items?: LinkItem[]; diensten_dropdown?: LinkItem[];
  };
  default_seo_title: string | null;
  default_seo_description: string | null;
}

const LinkListEditor = ({ items, onChange, showIcon = false, showDropdown = false, label }: {
  items: LinkItem[]; onChange: (items: LinkItem[]) => void; showIcon?: boolean; showDropdown?: boolean; label: string;
}) => (
  <div className="space-y-3">
    <Label className="text-sm font-semibold">{label}</Label>
    {items.map((item, i) => (
      <div key={i} className="flex gap-2 items-start p-3 border rounded-lg">
        <div className="flex-1 space-y-2">
          <Input placeholder="Label" value={item.label} onChange={(e) => { const n = [...items]; n[i] = { ...n[i], label: e.target.value }; onChange(n); }} />
          <Input placeholder="Link (bijv. /diensten)" value={item.href} onChange={(e) => { const n = [...items]; n[i] = { ...n[i], href: e.target.value }; onChange(n); }} />
          {showIcon && <Input placeholder="Icon (bijv. Wrench)" value={item.icon || ""} onChange={(e) => { const n = [...items]; n[i] = { ...n[i], icon: e.target.value }; onChange(n); }} />}
        </div>
        <Button variant="ghost" size="icon" className="text-destructive flex-shrink-0" onClick={() => onChange(items.filter((_, idx) => idx !== i))}>
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    ))}
    <Button variant="outline" size="sm" onClick={() => onChange([...items, { label: "", href: "" }])}>
      <Plus className="w-4 h-4 mr-1" /> Toevoegen
    </Button>
  </div>
);

const GlobalSettings = () => {
  const { user } = useAuth();
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    supabase.from("site_settings").select("*").limit(1).single().then(({ data }) => {
      if (data) setSettings({ ...data, address: (data.address as any) || {}, social_links: (data.social_links as any) || {}, footer_info: (data.footer_info as any) || {} });
      setLoading(false);
    });
  }, []);

  const handleSave = async () => {
    if (!settings || !user) return;
    setSaving(true);
    const { error } = await supabase.from("site_settings").update({
      company_name: settings.company_name, logo_url: settings.logo_url, phone: settings.phone, email: settings.email,
      address: settings.address as unknown as Json, social_links: settings.social_links as unknown as Json,
      footer_info: settings.footer_info as unknown as Json,
      default_seo_title: settings.default_seo_title, default_seo_description: settings.default_seo_description, updated_by: user.id,
    }).eq("id", settings.id);
    if (error) toast.error("Fout bij opslaan: " + error.message);
    else { invalidateSiteSettings(); toast.success("Instellingen opgeslagen!"); }
    setSaving(false);
  };

  const update = (field: keyof SiteSettings, value: any) => setSettings((prev) => prev ? { ...prev, [field]: value } : prev);
  const updateFooter = (key: string, value: any) => setSettings((prev) => prev ? { ...prev, footer_info: { ...prev.footer_info, [key]: value } } : prev);

  if (loading) return <div className="flex items-center justify-center py-20"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>;
  if (!settings) return <p className="text-muted-foreground">Geen instellingen gevonden.</p>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary">Instellingen</h1>
          <p className="text-muted-foreground text-sm">Algemene website instellingen, navigatie en footer.</p>
        </div>
        <Button onClick={handleSave} disabled={saving}><Save className="w-4 h-4 mr-1" />{saving ? "Opslaan..." : "Opslaan"}</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Company info */}
        <Card>
          <CardHeader><CardTitle className="text-lg">Bedrijfsgegevens</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2"><Label>Bedrijfsnaam</Label><Input value={settings.company_name} onChange={(e) => update("company_name", e.target.value)} /></div>
            <div className="space-y-2"><Label>Telefoonnummer</Label><Input value={settings.phone || ""} onChange={(e) => update("phone", e.target.value)} /></div>
            <div className="space-y-2"><Label>E-mailadres</Label><Input value={settings.email || ""} onChange={(e) => update("email", e.target.value)} /></div>
          </CardContent>
        </Card>

        {/* Address */}
        <Card>
          <CardHeader><CardTitle className="text-lg">Adres</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2"><Label>Straat + nummer</Label><Input value={settings.address.street || ""} onChange={(e) => update("address", { ...settings.address, street: e.target.value })} /></div>
            <div className="space-y-2"><Label>Postcode</Label><Input value={settings.address.postal_code || ""} onChange={(e) => update("address", { ...settings.address, postal_code: e.target.value })} /></div>
            <div className="space-y-2"><Label>Plaats</Label><Input value={settings.address.city || ""} onChange={(e) => update("address", { ...settings.address, city: e.target.value })} /></div>
          </CardContent>
        </Card>

        {/* Social */}
        <Card>
          <CardHeader><CardTitle className="text-lg">Social media</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2"><Label>LinkedIn URL</Label><Input value={settings.social_links.linkedin || ""} onChange={(e) => update("social_links", { ...settings.social_links, linkedin: e.target.value })} /></div>
            <div className="space-y-2"><Label>Facebook URL</Label><Input value={settings.social_links.facebook || ""} onChange={(e) => update("social_links", { ...settings.social_links, facebook: e.target.value })} /></div>
            <div className="space-y-2"><Label>Instagram URL</Label><Input value={settings.social_links.instagram || ""} onChange={(e) => update("social_links", { ...settings.social_links, instagram: e.target.value })} /></div>
          </CardContent>
        </Card>

        {/* SEO */}
        <Card>
          <CardHeader><CardTitle className="text-lg">Standaard SEO</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2"><Label>Standaard meta titel</Label><Input value={settings.default_seo_title || ""} onChange={(e) => update("default_seo_title", e.target.value)} maxLength={60} /></div>
            <div className="space-y-2"><Label>Standaard meta beschrijving</Label><Textarea value={settings.default_seo_description || ""} onChange={(e) => update("default_seo_description", e.target.value)} maxLength={160} rows={3} /></div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <Card>
        <CardHeader><CardTitle className="text-lg">Navigatie</CardTitle></CardHeader>
        <CardContent className="space-y-6">
          <LinkListEditor label="Hoofdmenu items" items={settings.footer_info.navigation_items || []} onChange={(v) => updateFooter("navigation_items", v)} />
          <LinkListEditor label="Diensten dropdown items" items={settings.footer_info.diensten_dropdown || []} onChange={(v) => updateFooter("diensten_dropdown", v)} showIcon />
        </CardContent>
      </Card>

      {/* Footer */}
      <Card>
        <CardHeader><CardTitle className="text-lg">Footer</CardTitle></CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2"><Label>Tagline</Label><Input value={settings.footer_info.tagline || ""} onChange={(e) => updateFooter("tagline", e.target.value)} /></div>
            <div className="space-y-2"><Label>Tagline ondertitel</Label><Input value={settings.footer_info.tagline_sub || ""} onChange={(e) => updateFooter("tagline_sub", e.target.value)} /></div>
            <div className="space-y-2"><Label>CTA koptekst</Label><Input value={settings.footer_info.cta_headline || ""} onChange={(e) => updateFooter("cta_headline", e.target.value)} /></div>
            <div className="space-y-2"><Label>CTA tekst</Label><Textarea value={settings.footer_info.cta_text || ""} onChange={(e) => updateFooter("cta_text", e.target.value)} rows={2} /></div>
            <div className="space-y-2"><Label>CTA knoptekst</Label><Input value={settings.footer_info.cta_button_label || ""} onChange={(e) => updateFooter("cta_button_label", e.target.value)} /></div>
            <div className="space-y-2"><Label>CTA knop link</Label><Input value={settings.footer_info.cta_button_link || ""} onChange={(e) => updateFooter("cta_button_link", e.target.value)} /></div>
            <div className="space-y-2"><Label>BTW-id</Label><Input value={settings.footer_info.btw_id || ""} onChange={(e) => updateFooter("btw_id", e.target.value)} /></div>
            <div className="space-y-2"><Label>KvK nummer</Label><Input value={settings.footer_info.kvk || ""} onChange={(e) => updateFooter("kvk", e.target.value)} /></div>
          </div>
          <LinkListEditor label="Diensten links (footer)" items={settings.footer_info.diensten_links || []} onChange={(v) => updateFooter("diensten_links", v)} />
          <LinkListEditor label="Snelle links (footer)" items={settings.footer_info.quick_links || []} onChange={(v) => updateFooter("quick_links", v)} />
        </CardContent>
      </Card>
    </div>
  );
};

export default GlobalSettings;
