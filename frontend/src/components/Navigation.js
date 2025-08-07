import { Bell, CircleUserRound, Globe, CirclePlus, CircleChevronRight, ChevronRightCircle } from "lucide-react";
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
  // Handler for user nav item
  const handleUserMenuMouseEnter = () => setShowUserMenu(true);
  const handleUserMenuMouseLeave = () => setShowUserMenu(false);
  // Handler for bell nav item
  const handleBellMenuMouseEnter = () => setShowBellMenu(true);
  const handleBellMenuMouseLeave = () => setShowBellMenu(false);

  return (
    <nav className="sticky top-0 z-50">
      <div className="container-fluid flex flex-row justify-between items-center px-5 py-3">
        <div className="leading-5">
          <p className="font-bold text-lg">Dashboard</p>
          <span className="text-sm text-gray-400">
            Welcome back, Mpho Lebona
          </span>
        </div>
        <div className="flex flex-row items-center gap-7 pr-3">
          {/* Bell Icon with Popover */}
          <div onMouseEnter={handleBellMenuMouseEnter}
            onMouseLeave={handleBellMenuMouseLeave} className="relative">
            <button
              className="flex inline-flex items-center gap-3 px-2 py-2 bg-gray-100 cursor-pointer rounded-full"
            >
              <Bell />
            </button>
            {showBellMenu && (
              <div className="absolute right-0 mt-2 w-65 bg-white shadow-lg rounded-lg p-4 z-10">
                <p className="font-semibold mb-2">Notifications</p>
                <p className="text-sm text-gray-500">No new notifications.</p>
              </div>
            )}
          </div>
          {/* User Icon with Popover */}
          <div onMouseEnter={handleUserMenuMouseEnter}
            onMouseLeave={handleUserMenuMouseLeave} className="relative">
            <button

              className="flex inline-flex items-center gap-3 px-2 py-2 bg-gray-100 cursor-pointer rounded-full"

            >
              <CircleUserRound />
            </button>
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-2xs bg-white shadow-lg rounded-lg z-10">
                <div className="border-b border-stone-200">
                  <div className="flex flex-inline items-center p-4 ">
                    <div className="w-9 h-9 bg-blue-950 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3 p-4">
                      ML
                    </div>
                    <div className="leading-5">
                      <span className="text-md">Mpho Lebona</span>
                      <div>
                        <span className="text-xs text-gray-500">
                          hola.mpho@gmail.com
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-3 py-2">
                  <button className="block w-full text-left p-2 text-sm">
                    Manage profile
                  </button>
                  <button className="block w-full text-left p-2 text-sm">
                    Logout
                  </button>
                </div>
                <div className="px-3 py-2 border-t border-stone-200 leading-8">
                  <button className="block w-full text-left px-2 py-3 text-sm flex flex-inline items-center gap-2">
                    <Globe strokeWidth={1.25} className="text-gray-600 text-xs w-5 h-5" />Language settings
                  </button>
                  <button className="block w-full text-left px-2 py-3 text-sm flex flex-inline items-center gap-2">
                    <CirclePlus strokeWidth={1.25} className="text-gray-600 text-xs w-5 h-5" />Add a parent / Guardian
                  </button>
                </div>
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
