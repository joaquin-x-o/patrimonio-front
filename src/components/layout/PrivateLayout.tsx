import AppSidebar from "../../app/AppSidebar";
import Topbar from "./topbar/Topbar";
import { SidebarProvider } from "./sidebar/SidebarProvider";
import { Outlet } from "react-router-dom";

// layout para rutas privadas. Solo accesible para usuarios autenticados.
export default function PrivateLayout() {
    return (
        <div className="flex h-screen bg-background overflow-hidden text-foreground">
            <SidebarProvider>
                <AppSidebar />
                <div className="flex flex-col flex-1 overflow-hidden">
                    <Topbar />
                    <main className="flex-1 overflow-y-auto p-4">
                        <Outlet />
                    </main>
                </div>
            </SidebarProvider>
        </div>
    );
}