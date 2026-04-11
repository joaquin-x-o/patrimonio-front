import { BrowserRouter } from "react-router-dom";
import AppSidebar from "./app/AppSidebar";
import Topbar from "./components/layout/topbar/Topbar";
import { SidebarProvider } from "./components/layout/sidebar/SidebarProvider";
import Dashboard from "./pages/Dashboard";



function App() {
  return (
    <div className="flex h-screen bg-background overflow-hidden text-foreground">

      <BrowserRouter>
        <SidebarProvider>
          {/* SIDEBAR */}
          <AppSidebar />

          <div className="flex flex-col flex-1 overflow-hidden">
            {/*TOPBAR*/}
            <Topbar />

            <main>
              <Dashboard />
            </main>

          </div>
        </SidebarProvider>

      </BrowserRouter>
    </div>
  );
}
export default App;