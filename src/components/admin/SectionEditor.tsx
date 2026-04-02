import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import MediaPicker from "@/components/admin/MediaPicker";

interface SectionEditorProps {
  pageSlug: string;
  sections: Record<string, any>;
  onUpdate: (key: string, value: any) => void;
}

// Field renderer for nested objects
const FieldEditor = ({
  label,
  value,
  onChange,
  multiline = false,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  multiline?: boolean;
}) => (
  <div className="space-y-1.5">
    <Label className="text-xs font-medium capitalize">{label.replace(/_/g, " ")}</Label>
    {multiline ? (
      <Textarea value={value || ""} onChange={(e) => onChange(e.target.value)} rows={3} />
    ) : (
      <Input value={value || ""} onChange={(e) => onChange(e.target.value)} />
    )}
  </div>
);

// Labels in Dutch for known fields
const fieldLabels: Record<string, string> = {
  headline: "Koptekst",
  subheadline: "Subtekst",
  button_label: "Knoptekst",
  button_link: "Knop link",
  button_secondary_label: "Secundaire knoptekst",
  button_secondary_link: "Secundaire knop link",
  badge: "Badge tekst",
  description: "Beschrijving",
  text: "Tekst",
  quote: "Quote",
  author: "Auteur",
  role: "Functie",
  company: "Bedrijf",
  question: "Vraag",
  answer: "Antwoord",
  value: "Waarde",
  label: "Label",
  suffix: "Achtervoegsel",
  title: "Titel",
  subtitle: "Subtitel",
  slug: "Slug (URL)",
  period: "Periode",
  nummer: "Nummer",
  titel: "Titel",
  beschrijving: "Beschrijving",
  stats: "Statistieken",
  image: "Afbeelding URL",
};

const getLabel = (key: string) => fieldLabels[key] || key.replace(/_/g, " ");

const isLongField = (key: string) =>
  ["description", "subheadline", "text", "answer", "quote", "beschrijving", "body"].includes(key);

const isImageField = (key: string) =>
  ["image", "image_url", "logo", "logo_url", "photo", "avatar", "thumbnail", "background_image", "icon_url", "bg_image", "hero_image", "cover", "cover_image", "banner"].includes(key) ||
  key.endsWith("_image") || key.endsWith("_url") && (key.includes("image") || key.includes("logo") || key.includes("photo") || key.includes("icon"));

// Section labels in Dutch
const sectionLabels: Record<string, string> = {
  hero: "Hero sectie",
  services: "Diensten overzicht",
  stats: "Statistieken",
  why_gpg: "Waarom GPG",
  process: "Werkwijze",
  testimonial: "Testimonial",
  faq: "Veelgestelde vragen",
  cta: "Call-to-Action",
  intro: "Introductie",
  duurzaamheid: "Duurzaamheid",
  projects: "Projecten",
  principes_intro: "Principes introductie",
  principes: "Circulaire principes",
  aanpak_intro: "Aanpak introductie",
  aanpak: "Aanpak stappen",
  certificeringen_intro: "Certificeringen",
  form: "Formulier",
  content: "Inhoud",
};

const SectionEditor = ({ pageSlug, sections, onUpdate }: SectionEditorProps) => {
  const sectionKeys = Object.keys(sections);

  if (sectionKeys.length === 0) {
    return (
      <Card>
        <CardContent className="py-8 text-center text-muted-foreground">
          Deze pagina heeft nog geen bewerkbare secties.
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {sectionKeys.map((sectionKey) => {
        const section = sections[sectionKey];

        // Handle arrays (FAQ, stats, highlights)
        if (Array.isArray(section)) {
          return (
            <Card key={sectionKey}>
              <CardHeader>
                <CardTitle className="text-lg">
                  {sectionLabels[sectionKey] || sectionKey}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {section.map((item: any, index: number) => (
                  <div key={index} className="p-4 border rounded-lg space-y-3 relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-muted-foreground uppercase">
                        Item {index + 1}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-destructive"
                        onClick={() => {
                          const newArr = [...section];
                          newArr.splice(index, 1);
                          onUpdate(sectionKey, newArr);
                        }}
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                    {typeof item === "string" ? (
                      <Input
                        value={item}
                        onChange={(e) => {
                          const newArr = [...section];
                          newArr[index] = e.target.value;
                          onUpdate(sectionKey, newArr);
                        }}
                      />
                    ) : (
                      Object.keys(item).map((fieldKey) => 
                        isImageField(fieldKey) ? (
                          <MediaPicker
                            key={fieldKey}
                            label={getLabel(fieldKey)}
                            value={item[fieldKey] || ""}
                            onChange={(val) => {
                              const newArr = [...section];
                              newArr[index] = { ...newArr[index], [fieldKey]: val };
                              onUpdate(sectionKey, newArr);
                            }}
                          />
                        ) : (
                          <FieldEditor
                            key={fieldKey}
                            label={getLabel(fieldKey)}
                            value={item[fieldKey]}
                            onChange={(val) => {
                              const newArr = [...section];
                              newArr[index] = { ...newArr[index], [fieldKey]: val };
                              onUpdate(sectionKey, newArr);
                            }}
                            multiline={isLongField(fieldKey)}
                          />
                        )
                      )
                    )}
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const template =
                      section.length > 0 && typeof section[0] === "object"
                        ? Object.fromEntries(Object.keys(section[0]).map((k) => [k, ""]))
                        : "";
                    onUpdate(sectionKey, [...section, template]);
                  }}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Item toevoegen
                </Button>
              </CardContent>
            </Card>
          );
        }

        // Handle objects
        if (typeof section === "object" && section !== null) {
          return (
            <Card key={sectionKey}>
              <CardHeader>
                <CardTitle className="text-lg">
                  {sectionLabels[sectionKey] || sectionKey}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.keys(section).map((fieldKey) => {
                  const fieldValue = section[fieldKey];

                  // Handle nested arrays inside objects (like hero.highlights)
                  if (Array.isArray(fieldValue) && fieldValue.every((v: any) => typeof v === "string")) {
                    return (
                      <div key={fieldKey} className="space-y-2">
                        <Label className="text-xs font-medium">{getLabel(fieldKey)}</Label>
                        {fieldValue.map((item: string, idx: number) => (
                          <div key={idx} className="flex gap-2">
                            <Input
                              value={item}
                              onChange={(e) => {
                                const newArr = [...fieldValue];
                                newArr[idx] = e.target.value;
                                onUpdate(sectionKey, { ...section, [fieldKey]: newArr });
                              }}
                            />
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-10 w-10 text-destructive flex-shrink-0"
                              onClick={() => {
                                const newArr = fieldValue.filter((_: any, i: number) => i !== idx);
                                onUpdate(sectionKey, { ...section, [fieldKey]: newArr });
                              }}
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        ))}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            onUpdate(sectionKey, { ...section, [fieldKey]: [...fieldValue, ""] });
                          }}
                        >
                          <Plus className="w-4 h-4 mr-1" />
                          Toevoegen
                        </Button>
                      </div>
                    );
                  }

                  // Skip non-string fields
                  if (typeof fieldValue !== "string") return null;

                  if (isImageField(fieldKey)) {
                    return (
                      <MediaPicker
                        key={fieldKey}
                        label={getLabel(fieldKey)}
                        value={fieldValue}
                        onChange={(val) => onUpdate(sectionKey, { ...section, [fieldKey]: val })}
                      />
                    );
                  }

                  return (
                    <FieldEditor
                      key={fieldKey}
                      label={getLabel(fieldKey)}
                      value={fieldValue}
                      onChange={(val) => onUpdate(sectionKey, { ...section, [fieldKey]: val })}
                      multiline={isLongField(fieldKey)}
                    />
                  );
                })}
              </CardContent>
            </Card>
          );
        }

        return null;
      })}
    </div>
  );
};

export default SectionEditor;
