import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import AdminSidebar from "./AdminSidebar";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Loader2 } from "lucide-react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const { user, loading, isCmsUser } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  if (!isCmsUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold text-primary mb-2">Geen toegang</h1>
          <p className="text-muted-foreground mb-4">
            Je account heeft geen CMS-rechten. Vraag een administrator om je de juiste rol toe te kennen.
          </p>
          <p className="text-xs text-muted-foreground">
            Ingelogd als: {user.email}
          </p>
        </div>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-muted/20">
        <AdminSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 flex items-center border-b bg-background px-4 gap-4 sticky top-0 z-30">
            <SidebarTrigger />
            <span className="text-sm font-semibold text-primary">GPG CMS</span>
          </header>
          <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
