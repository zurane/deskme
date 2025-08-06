import { Bell, CircleUserRound } from "lucide-react"
import React, { useState } from "react";


function Navigation() {
  //  const getToday = new Date();
  //   const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
  //   const getDayOfWeek = getToday.getDay();
  //   const getYear = getToday.getFullYear();
  //   const getDay = getToday.getDate();
  //   const date = getDay + ' ' + days[getDayOfWeek - 1] + ' ' + getYear
  // Import useState from React

  // State for popover visibility
  const [showBellMenu, setShowBellMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Handlers
  const toggleBellMenu = () => setShowBellMenu((prev) => !prev);
  const toggleUserMenu = () => setShowUserMenu((prev) => !prev);

  return (
    <nav className="sticky top-0 z-50">
      <div className="container-fluid flex flex-row justify-between items-center px-5 py-3">
        <div className="leading-5">
          <p className="font-bold text-lg">Dashboard</p>
          <span className="text-sm text-gray-400">Welcome back, Mpho Lebona</span>
        </div>
        <div className="flex flex-row items-center gap-7 pr-3">
          {/* Bell Icon with Popover */}
          <div className="relative">
            <button className="flex inline-flex items-center gap-3 px-2 py-2 bg-gray-100 cursor-pointer rounded-full" onClick={toggleBellMenu}>
              <Bell />
            </button>
            {showBellMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 z-10">
                <p className="font-semibold mb-2">Notifications</p>
                <p className="text-sm text-gray-500">No new notifications.</p>
              </div>
            )}
          </div>
          {/* User Icon with Popover */}
          <div className="relative">
            <button
              className="flex inline-flex items-center gap-3 px-2 py-2 bg-gray-100 cursor-pointer rounded-full"
              onClick={toggleUserMenu}
            >
              <CircleUserRound />
            </button>
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 z-10">
                <p className="font-semibold mb-2 p-2 border-b border-stone-200">Account</p>
                <button className="block w-full text-left p-2 text-sm hover:bg-gray-100 rounded">Profile</button>
                <button className="block w-full text-left p-2 text-sm hover:bg-gray-100 rounded">Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
// This is a simple navigation component for a React application.
