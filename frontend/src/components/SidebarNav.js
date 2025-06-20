import {
  PiCirclesFour,
  PiClipboard,
  PiFolderOpen,
  PiCalendarCheck,
  PiMegaphoneSimple,
  PiQuestion,
  PiGearFine,
  PiChalkboardSimple
} from "react-icons/pi";
import brandLogo from "../assets/openbook_platforms.svg";
import { NavLink } from "react-router-dom";

function SidebarNav() {
  const activeNaLinkStyle = {
    backgroundColor: "#F8F9FA",

  };

  return (
    <div className="h-screen w-60 bg-white border-r border-gray-100 p-1">
      <div className="border-b border-gray-200 pb-3 mb-2">
        {/* Brand Logo */}
        <div className="border-b border-gray-200">
          <a href="/">
            <img src={brandLogo} alt="Logo" width="200" />
          </a>
        </div>

        <div className="hover:bg-gray-100 my-2">
          <NavLink
            to={"/"}
            style={({ isActive }) => (isActive ? activeNaLinkStyle : {})}
            className="inline-flex items-center px-2 py-3 gap-3 w-full text-sm"
          >
            <PiCirclesFour className="text-2xl" />
            <span>Dashboard</span>
          </NavLink>
        </div>

        <div className="hover:bg-gray-100 my-2">
          <NavLink
            to={"/assessments"}
            style={({ isActive }) => (isActive ? activeNaLinkStyle : {})}
            className="inline-flex items-center px-2 py-3 gap-3 w-full text-sm"
          >
            <PiClipboard className="text-2xl" />
            <span>Assessments</span>
          </NavLink>
        </div>

        <div className="hover:bg-gray-100 my-2">
          <NavLink
            to={"/resources"}
            style={({ isActive }) => (isActive ? activeNaLinkStyle : {})}
            className="inline-flex items-center px-2 py-3 gap-3 w-full text-sm"
          >
            <PiFolderOpen className="text-2xl" />
            <span>Resources</span>
          </NavLink>
        </div>
        <div className="hover:bg-gray-100 my-2">
          <NavLink
            to={"/tutorials"}
            style={({ isActive }) => (isActive ? activeNaLinkStyle : {})}
            className="inline-flex items-center px-2 py-3 gap-3 w-full text-sm"
          >
            <PiChalkboardSimple className="text-2xl" />
            <span>Tutorials</span>
          </NavLink>
        </div>
        <div className="hover:bg-gray-100 my-2">
          <NavLink
            to={"/timetable"}
            style={({ isActive }) => (isActive ? activeNaLinkStyle : {})}
            className="inline-flex items-center px-2 py-3 gap-3 w-full text-sm"
          >

            <PiCalendarCheck className="text-2xl" />
            <span>Timetable</span>
          </NavLink>
        </div>

        <div className="hover:bg-gray-100 my-2">
          <NavLink
            to={"/feedback"}
            style={({ isActive }) => (isActive ? activeNaLinkStyle : {})}
            className="inline-flex items-center px-2 py-3 gap-3 w-full text-sm"
          >
            <PiMegaphoneSimple className="text-2xl" />
            <span>Feedback</span>
          </NavLink>
        </div>

        <div className="hover:bg-gray-100 my-2">
          <NavLink
            to={"/support"}
            style={({ isActive }) => (isActive ? activeNaLinkStyle : {})}
            className="inline-flex items-center px-2 py-3 gap-3 w-full text-sm"
          >
            <PiQuestion className="text-2xl" />
            <span>Support</span>
          </NavLink>
        </div>

        <div className="hover:bg-gray-100 my-2">
          <NavLink
            to={"/settings"}
            style={({ isActive }) => (isActive ? activeNaLinkStyle : {})}
            className="inline-flex items-center px-2 py-3 gap-3 w-full text-sm"
          >
            <PiGearFine className="text-2xl" />
            <span>Settings</span>
          </NavLink>
        </div>

      </div>
    </div>
  );
}
export default SidebarNav;
// This is a sidebar navigation component.
