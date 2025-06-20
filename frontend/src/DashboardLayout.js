import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Sidebar from "./components/SidebarNav";

const DashboardLayout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Navigation />
        <main style={{ padding: "1rem", flex: 1, overflowY: "auto" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
