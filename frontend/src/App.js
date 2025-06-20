import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Assessments from "./pages/Assessments";
import Resources from "./pages/Resources";
import Timetable from "./pages/Timetable";
import Feedback from "./pages/Feedback";
import Support from "./pages/Support";
import Settings from "./pages/Settings";
import Tutorials from "./pages/Tutorials";

const Landing = lazy(() => import("./pages/Landing"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const DashboardLayout = lazy(() => import("./DashboardLayout"));

const Loading = () => <div>Loading...</div>;

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* Dashboard Layout Routes */}
          <Route path="/*" element={<DashboardLayout />}>
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
