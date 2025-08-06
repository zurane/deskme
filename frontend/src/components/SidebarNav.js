import {
  BookOpen,
  Calendar,
  FileText,
  GraduationCap,
  HelpCircle,
  Home,
  MessageSquare,
  Settings,
} from "lucide-react";

import brandLogo from "../assets/openbook_platforms.svg";
import { NavLink } from "react-router-dom";

function SidebarNav() {
  const activeNavLinkStyle = {
    backgroundColor: "#F4F5F5",
    borderRadius: "0.24rem",
  };

  const linkActive = ({ isActive }) => (isActive ? activeNavLinkStyle : {})



  return (
    <aside className="h-screen w-60 border-r border-gray-100 p-1 sidebar bg-white shadow-xs ">
      <div className="pb-3 px-2 mb-2">
        {/* Brand Logo */}
        <div className="border-b border-gray-100 py-1">
          <a href="/">
            <img src={brandLogo} alt="Logo" width="200" />
          </a>
        </div>
        {/* Links */}
        <div className="mt-3 border-b border-gray-100 pb-3">
          <div className="hover:bg-slate-100 rounded">
            <NavLink
              to={"/dashboard"}
              end
              style={linkActive}
              className="inline-flex items-center text-gray-500 px-2 py-3 gap-3 w-full text-sm"
            >
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </NavLink>
          </div>

          <div className="hover:bg-slate-100 my-2 rounded">
            <NavLink
              to={"/dashboard/assessments"}
              style={linkActive}
              className="inline-flex items-center text-gray-500  px-2 py-3 gap-3 w-full text-sm"
            >
              <FileText className="w-5 h-5" />
              <span>Assessments</span>
            </NavLink>
          </div>

          <div className="hover:bg-slate-100 rounded my-2">
            <NavLink
              to={"/dashboard/resources"}
              style={linkActive}
              className="inline-flex items-center text-gray-500 px-2 py-3 gap-3 w-full text-sm"
            >
              <BookOpen className="w-5 h-5" />
              <span>Resources</span>
            </NavLink>
          </div>

          <div className="hover:bg-slate-100 rounded my-2">
            <NavLink
              to={"/dashboard/tutorials"}
              style={linkActive}
              className="inline-flex items-center text-gray-500 px-2 py-3 gap-3 w-full text-sm "
            >
              <GraduationCap className="w-5 h-5" />
              <span>Tutorials</span>
            </NavLink>
          </div>

          <div className="hover:bg-slate-100 my-2 rounded">
            <NavLink
              to={"/dashboard/timetable"}
              style={linkActive}
              className="inline-flex items-center text-gray-500 px-2 py-3 gap-3 w-full text-sm "
            >
              <Calendar className="w-5 h-5" />
              <span>Timetable</span>
            </NavLink>
          </div>
        </div>
        <div className="hover:bg-slate-100 rounded my-2">
          <NavLink
            to={"/dashboard/feedback"}
            style={linkActive}
            className="inline-flex items-center text-gray-500  px-2 py-3 gap-3 w-full text-sm "
          >
            <MessageSquare className="w-5 h-5" />
            <span>Feedback</span>
          </NavLink>
        </div>

        <div className="hover:bg-slate-100 my-2 rounded">
          <NavLink
            to={"/dashboard/support"}
            style={linkActive}
            className="inline-flex items-center text-gray-500 px-2 py-3 gap-3 w-full text-sm "
          >
            <HelpCircle className="w-5 h-5" />
            <span>Support</span>
          </NavLink>
        </div>

        <div className="hover:bg-slate-100 my-2 rounded">
          <NavLink
            to={"/dashboard/settings"}
            style={linkActive}
            className="inline-flex items-center text-gray-500 px-2 py-3 gap-3 w-full text-sm"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </NavLink>
        </div>
      </div>
    </aside>
  );
}
export default SidebarNav;
// This is a sidebar navigation component.
