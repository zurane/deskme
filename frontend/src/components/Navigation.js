import brandLogo from "../assets/deskme-logo.png";
import userIcon from '../assets/profile-ava.svg'; // Assuming you have a user icon image
import { PiBellLight } from "react-icons/pi";


function Navigation() {
  return (
    <nav className="border-b border-gray-200">
      <div className="container-fluid flex flex-row justify-between items-center bg-slate-50 px-8 py-3">
        <div>
          <a className="navbar-brand" href="/">
            <img
              src={brandLogo}
              alt="Logo"
              width="100"
            />
          </a>
        </div>
        {/* Button to create account */}
        <div className="flex flex-row items-center gap-5">
          <div className="text-2xl"><PiBellLight /></div>
          <div className="flex inline-flex items-center px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <span>Mpho Lebona</span>
            <img src={userIcon} alt="User Icon" className="w-7 h-7 rounded-full ml-2" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
// This is a simple navigation component for a React application.
