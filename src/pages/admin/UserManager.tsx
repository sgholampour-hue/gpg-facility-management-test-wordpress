import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserPlus, Trash2, Loader2, Shield, Mail } from "lucide-react";
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
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRole, setNewRole] = useState<"admin" | "editor">("editor");
  const [creating, setCreating] = useState(false);

  const fetchRoles = async () => {
    const { data } = await supabase.from("user_roles").select("*").order("created_at");
    if (data) setRoles(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const createUser = async () => {
    if (!newEmail.trim() || !newPassword.trim()) {
      toast.error("Vul e-mailadres en wachtwoord in.");
      return;
    }
    if (newPassword.length < 6) {
      toast.error("Wachtwoord moet minimaal 6 tekens zijn.");
      return;
    }
    setCreating(true);

    try {
      // Use edge function to create user + assign role
      const { data, error } = await supabase.functions.invoke("create-cms-user", {
        body: { email: newEmail.trim(), password: newPassword, role: newRole },
      });

      if (error) {
        toast.error("Fout bij aanmaken: " + error.message);
      } else if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(`Gebruiker ${newEmail} aangemaakt met rol "${newRole}".`);
        setNewEmail("");
        setNewPassword("");
        fetchRoles();
      }
    } catch (err: any) {
      toast.error("Fout: " + err.message);
    }
    setCreating(false);
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
        <p className="text-muted-foreground text-sm">Beheer CMS gebruikers en toegang.</p>
      </div>

      {/* Create user */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <UserPlus className="w-5 h-5" />
            Nieuwe gebruiker aanmaken
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Maak direct een CMS-gebruiker aan met e-mailadres, wachtwoord en rol. De gebruiker kan meteen inloggen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="space-y-1">
              <Label className="text-xs">E-mailadres</Label>
              <Input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="naam@bedrijf.nl"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Wachtwoord</Label>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Min. 6 tekens"
              />
            </div>
            <div className="space-y-1">
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
              <Button onClick={createUser} disabled={creating} className="w-full">
                {creating ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <UserPlus className="w-4 h-4 mr-1" />}
                Aanmaken
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
            Actieve gebruikers
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="w-5 h-5 animate-spin text-primary" />
            </div>
          ) : roles.length === 0 ? (
            <p className="text-sm text-muted-foreground py-4">Nog geen gebruikers.</p>
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
