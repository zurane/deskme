import userIcon from '../assets/profile-ava.svg'; // Assuming you have a user icon image
import { PiBellLight } from "react-icons/pi";


function Navigation() {
  return (
    <nav className="border-b border-gray-200 sticky top-0 z-50">
      <div className="container-fluid flex flex-row justify-between items-center bg-white px-6">
        <div>

        </div>
        {/* Button to create account */}
        <div className="flex flex-row items-center gap-5">
          <div className="text-2xl"><PiBellLight /></div>
          <div className="flex inline-flex items-center gap-3 px-3 py-2 hover:bg-gray-100 border-l border-gray-100 cursor-pointer">
            <img src={userIcon} alt="User Icon" className="w-9 h-9 rounded-full" />
            <p className="leading-4 text-sm">Mpho Lebona</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
// This is a simple navigation component for a React application.
