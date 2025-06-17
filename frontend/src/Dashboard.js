import Navigation from "./components/Navigation";
import SidebarNav from "./components/SidebarNav";

function Dashboard() {
    return (
        <div className="dashboard">
            <Navigation />
            <SidebarNav />
        </div>
    );
}

export default Dashboard;
