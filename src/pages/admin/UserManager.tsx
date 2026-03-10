import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserPlus, Trash2, Loader2, Shield } from "lucide-react";
import { toast } from "sonner";

interface UserRole {
  id: string;
  user_id: string;
  role: "admin" | "editor";
  created_at: string;
}

const UserManager = () => {
  const { user, isAdmin } = useAuth();
  const [roles, setRoles] = useState<UserRole[]>([]);
  const [loading, setLoading] = useState(true);
  const [newUserId, setNewUserId] = useState("");
  const [newRole, setNewRole] = useState<"admin" | "editor">("editor");

  const fetchRoles = async () => {
    const { data } = await supabase.from("user_roles").select("*").order("created_at");
    if (data) setRoles(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const addRole = async () => {
    if (!newUserId.trim()) {
      toast.error("Voer een gebruikers-ID in.");
      return;
    }
    const { error } = await supabase.from("user_roles").insert({
      user_id: newUserId.trim(),
      role: newRole,
    });
    if (error) {
      toast.error("Fout: " + error.message);
    } else {
      toast.success("Rol toegevoegd!");
      setNewUserId("");
      fetchRoles();
    }
  };

  const removeRole = async (roleId: string) => {
    if (!confirm("Weet je zeker dat je deze rol wilt verwijderen?")) return;
    const { error } = await supabase.from("user_roles").delete().eq("id", roleId);
    if (error) {
      toast.error("Fout: " + error.message);
    } else {
      toast.success("Rol verwijderd.");
      fetchRoles();
    }
  };

  if (!isAdmin) {
    return <p className="text-muted-foreground">Alleen admins hebben toegang tot gebruikersbeheer.</p>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-primary">Gebruikers</h1>
        <p className="text-muted-foreground text-sm">Beheer CMS rollen en toegang.</p>
      </div>

      {/* Add role */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <UserPlus className="w-5 h-5" />
            Rol toekennen
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Kopieer het gebruikers-ID (UUID) van de geregistreerde gebruiker en ken een rol toe.
            Het gebruikers-ID is te vinden in Lovable Cloud → Users.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 space-y-1">
              <Label className="text-xs">Gebruikers-ID (UUID)</Label>
              <Input
                value={newUserId}
                onChange={(e) => setNewUserId(e.target.value)}
                placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
              />
            </div>
            <div className="w-40 space-y-1">
              <Label className="text-xs">Rol</Label>
              <Select value={newRole} onValueChange={(v) => setNewRole(v as "admin" | "editor")}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button onClick={addRole}>
                <UserPlus className="w-4 h-4 mr-1" />
                Toevoegen
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Existing roles */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Actieve rollen
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="w-5 h-5 animate-spin text-primary" />
            </div>
          ) : roles.length === 0 ? (
            <p className="text-sm text-muted-foreground py-4">Nog geen rollen toegekend.</p>
          ) : (
            <div className="space-y-3">
              {roles.map((r) => (
                <div key={r.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="text-sm font-mono text-foreground">{r.user_id}</p>
                    <p className="text-xs text-muted-foreground">
                      Toegevoegd: {new Date(r.created_at).toLocaleDateString("nl-NL")}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={r.role === "admin" ? "default" : "secondary"}>
                      {r.role}
                    </Badge>
                    {r.user_id !== user?.id && (
                      <Button variant="ghost" size="icon" className="text-destructive h-8 w-8" onClick={() => removeRole(r.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserManager;
