import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save, ArrowLeft, Loader2, Eye, CheckCircle2, Globe, History, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import type { Json } from "@/integrations/supabase/types";
import SectionEditor from "@/components/admin/SectionEditor";

interface PageData {
  id: string;
  page_slug: string;
  page_name: string;
  sections: Record<string, any>;
  seo_title: string | null;
  seo_description: string | null;
  og_title: string | null;
  og_description: string | null;
  status: string;
}

interface Revision {
  id: string;
  created_at: string;
  status: string;
  saved_by: string | null;
  note: string | null;
  sections: Record<string, any>;
  seo_title: string | null;
  seo_description: string | null;
  og_title: string | null;
  og_description: string | null;
}

const PageEditor = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [page, setPage] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [revisions, setRevisions] = useState<Revision[]>([]);
  const [revisionsLoading, setRevisionsLoading] = useState(false);

  useEffect(() => {
    const fetchPage = async () => {
      const { data } = await supabase
        .from("page_content")
        .select("*")
        .eq("page_slug", slug)
        .single();
      if (data) {
        setPage({
          ...data,
          sections: (data.sections as Record<string, any>) || {},
        });
      }
      setLoading(false);
    };
    if (slug) fetchPage();
  }, [slug]);

  const fetchRevisions = async () => {
    if (!page) return;
    setRevisionsLoading(true);
    const { data } = await supabase
      .from("page_revisions")
      .select("*")
      .eq("page_id", page.id)
      .order("created_at", { ascending: false })
      .limit(30);
    if (data) setRevisions(data as Revision[]);
    setRevisionsLoading(false);
  };

  const handleSave = async (publishStatus?: string) => {
    if (!page || !user) return;
    setSaving(true);

    const status = publishStatus || page.status;

    // Save revision before updating
    await supabase.from("page_revisions").insert({
      page_id: page.id,
      page_slug: page.page_slug,
      sections: page.sections as unknown as Json,
      seo_title: page.seo_title,
      seo_description: page.seo_description,
      og_title: page.og_title,
      og_description: page.og_description,
      status,
      saved_by: user.id,
    });

    const { error } = await supabase
      .from("page_content")
      .update({
        sections: page.sections as unknown as Json,
        seo_title: page.seo_title,
        seo_description: page.seo_description,
        og_title: page.og_title,
        og_description: page.og_description,
        status,
        published_at: status === "published" ? new Date().toISOString() : undefined,
        updated_by: user.id,
      })
      .eq("id", page.id);

    if (error) {
      toast.error("Fout bij opslaan: " + error.message);
    } else {
      setPage((prev) => prev ? { ...prev, status } : prev);
      toast.success(
        status === "published" ? "Pagina gepubliceerd!" : "Concept opgeslagen!"
      );
    }
    setSaving(false);
  };

  const restoreRevision = async (rev: Revision) => {
    if (!confirm("Weet je zeker dat je deze versie wilt terugzetten? De huidige content wordt overschreven.")) return;
    setPage((prev) =>
      prev
        ? {
            ...prev,
            sections: rev.sections,
            seo_title: rev.seo_title,
            seo_description: rev.seo_description,
            og_title: rev.og_title,
            og_description: rev.og_description,
          }
        : prev
    );
    toast.success("Revisie geladen. Klik op 'Publiceren' om live te zetten.");
  };

  const updateSection = (sectionKey: string, value: any) => {
    setPage((prev) =>
      prev ? { ...prev, sections: { ...prev.sections, [sectionKey]: value } } : prev
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  if (!page) {
    return <p className="text-muted-foreground">Pagina niet gevonden.</p>;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate("/admin/paginas")}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-xl font-bold text-primary">{page.page_name}</h1>
            <p className="text-xs text-muted-foreground">/{page.page_slug === "home" ? "" : page.page_slug}</p>
          </div>
          <Badge variant={page.status === "published" ? "default" : "secondary"}>
            {page.status === "published" ? "Gepubliceerd" : "Concept"}
          </Badge>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <a href={`/${page.page_slug === "home" ? "" : page.page_slug}?preview=true`} target="_blank" rel="noopener noreferrer">
              <Eye className="w-4 h-4 mr-1" />
              Preview
            </a>
          </Button>
          <Button size="sm" onClick={() => handleSave("draft")} disabled={saving} variant="secondary">
            <Save className="w-4 h-4 mr-1" />
            Concept
          </Button>
          <Button size="sm" onClick={() => handleSave("published")} disabled={saving}>
            <CheckCircle2 className="w-4 h-4 mr-1" />
            Publiceren
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="content" className="w-full">
        <TabsList>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="preview">
            <Eye className="w-4 h-4 mr-1" />
            Preview
          </TabsTrigger>
          <TabsTrigger value="seo">
            <Globe className="w-4 h-4 mr-1" />
            SEO
          </TabsTrigger>
          <TabsTrigger value="history" onClick={fetchRevisions}>
            <History className="w-4 h-4 mr-1" />
            Geschiedenis
          </TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-4 mt-4">
          <SectionEditor
            pageSlug={page.page_slug}
            sections={page.sections}
            onUpdate={updateSection}
          />
        </TabsContent>

        <TabsContent value="preview" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Live preview
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Sla eerst je wijzigingen op als concept, dan zie je de preview hieronder.
              </p>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg overflow-hidden bg-white" style={{ height: "70vh" }}>
                <iframe
                  src={`/${page.page_slug === "home" ? "" : page.page_slug}?preview=true`}
                  className="w-full h-full border-0"
                  title={`Preview van ${page.page_name}`}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">SEO Instellingen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Meta titel</Label>
                <Input
                  value={page.seo_title || ""}
                  onChange={(e) => setPage((prev) => prev ? { ...prev, seo_title: e.target.value } : prev)}
                  placeholder="Paginatitel voor zoekmachines"
                  maxLength={60}
                />
                <p className="text-xs text-muted-foreground">{(page.seo_title || "").length}/60 tekens</p>
              </div>
              <div className="space-y-2">
                <Label>Meta beschrijving</Label>
                <Textarea
                  value={page.seo_description || ""}
                  onChange={(e) => setPage((prev) => prev ? { ...prev, seo_description: e.target.value } : prev)}
                  placeholder="Korte beschrijving voor zoekmachines"
                  maxLength={160}
                  rows={3}
                />
                <p className="text-xs text-muted-foreground">{(page.seo_description || "").length}/160 tekens</p>
              </div>
              <div className="space-y-2">
                <Label>Open Graph titel</Label>
                <Input
                  value={page.og_title || ""}
                  onChange={(e) => setPage((prev) => prev ? { ...prev, og_title: e.target.value } : prev)}
                  placeholder="Titel voor social media (optioneel)"
                />
              </div>
              <div className="space-y-2">
                <Label>Open Graph beschrijving</Label>
                <Textarea
                  value={page.og_description || ""}
                  onChange={(e) => setPage((prev) => prev ? { ...prev, og_description: e.target.value } : prev)}
                  placeholder="Beschrijving voor social media (optioneel)"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <History className="w-5 h-5" />
                Revisiegeschiedenis
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Elke keer dat je opslaat wordt automatisch een revisie bewaard. Je kunt eerdere versies terugzetten.
              </p>
            </CardHeader>
            <CardContent>
              {revisionsLoading ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="w-5 h-5 animate-spin text-primary" />
                </div>
              ) : revisions.length === 0 ? (
                <p className="text-sm text-muted-foreground py-4">
                  Nog geen revisies. Revisies worden aangemaakt zodra je voor het eerst opslaat.
                </p>
              ) : (
                <div className="space-y-2">
                  {revisions.map((rev) => (
                    <div key={rev.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div>
                        <p className="text-sm font-medium">
                          {new Date(rev.created_at).toLocaleDateString("nl-NL", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <Badge variant={rev.status === "published" ? "default" : "secondary"} className="text-[10px] px-1.5 py-0">
                            {rev.status === "published" ? "Gepubliceerd" : "Concept"}
                          </Badge>
                          {rev.note && <span className="text-xs text-muted-foreground">{rev.note}</span>}
                        </div>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => restoreRevision(rev)}>
                        <RotateCcw className="w-3.5 h-3.5 mr-1" />
                        Terugzetten
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PageEditor;
