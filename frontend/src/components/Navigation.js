import { Bell, CircleUserRound } from "lucide-react"


function Navigation() {
  //  const getToday = new Date();
  //   const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
  //   const getDayOfWeek = getToday.getDay();
  //   const getYear = getToday.getFullYear();
  //   const getDay = getToday.getDate();
  //   const date = getDay + ' ' + days[getDayOfWeek - 1] + ' ' + getYear
  return (
    <nav className="sticky top-0 z-50">
      <div className="container-fluid flex flex-row justify-between items-center px-5 py-3">
        <div className="leading-5">
          <p className="font-bold text-lg">Dashboard</p>
          <span className="text-sm text-gray-400">Welcome back, Mpho Lebona</span>
        </div>
        {/* Button to create account */}
        <div className="flex flex-row items-center gap-7">
          <div className="text-2xl"><Bell /></div>
          <div className="flex inline-flex items-center gap-3 px-2 py-2 bg-gray-100  cursor-pointer rounded-full">
            <CircleUserRound />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
// This is a simple navigation component for a React application.
