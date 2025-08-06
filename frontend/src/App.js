import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Assessments from "./pages/Assessments";
import Resources from "./pages/Resources";
import Timetable from "./pages/Timetable";
import Feedback from "./pages/Feedback";
import Support from "./pages/Support";
import Settings from "./pages/Settings";
import Tutorials from "./pages/Tutorials";
import Loader from "./components/Loader";


const Landing = lazy(() => import("./pages/Landing"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const DashboardLayout = lazy(() => import("./DashboardLayout"));
const LoginPage = lazy(() => import("./LoginPage"));



function App() {

  // Routing Structure Visualization:
  // /
  // ├── (index) Landing
  // ├── /login LoginPage
  // └── /dashboard/* DashboardLayout
  //     ├── (index) Dashboard
  //     ├── /assessments Assessments
  //     ├── /resources Resources
  //     ├── /timetable Timetable
  //     ├── /feedback Feedback
  //     ├── /tutorials Tutorials
  //     ├── /support Support
  //     └── /settings Settings

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Dashboard Layout Routes */}
          <Route path="/dashboard/*" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="assessments" element={<Assessments />} />
            <Route path="resources" element={<Resources />} />
            <Route path="timetable" element={<Timetable />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="tutorials" element={<Tutorials />} />
            <Route path="support" element={<Support />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
