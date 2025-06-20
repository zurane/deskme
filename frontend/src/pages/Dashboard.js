import { PiClipboard,PiPaperclip,PiChartLine,PiCrownSimple } from "react-icons/pi";



function Dashboard() {

    return (
        // Widgets
        <div>
            <h1 className="text-lg font-semibold  mb-1 text-gray-900 text-slate-600">Dashboard</h1>
            <div className="flex flex-col md:flex-row gap-4 mt-4 ">
                <div className="bg-white shadow-xs rounded-md p-4 flex-1 border border-slate-50 hover:shadow-sm transition-shadow duration-200">
                    <h4 className="text-sm text-slate-500 inline-flex items-center justify-center gap-1"><span className="p-2 bg-green-200 rounded-full shadow-xs"><PiChartLine className="text-sm text-slate-700"/></span>Average Score</h4>
                    <p className="text-3xl font-semibold text-gray-900 my-2 border-b border-slate-100 py-1">68%</p>
                    <span className="text-xs text-gray-400 p-1 bg-gray-50">Updated › 6 weeks ago</span>
                </div>

                <div className="bg-white shadow-xs rounded-md p-4 flex-1 border border-slate-50 hover:shadow-sm transition-shadow duration-200">
                    <h4 className="text-sm text-slate-500 inline-flex items-center justify-center gap-1"><span className="p-2 bg-red-100 rounded-full shadow-xs"><PiCrownSimple className="text-sm text-slate-700"/></span>Pass Rate</h4>
                    <p className="text-3xl font-semibold text-gray-900 my-2 border-b border-slate-100 py-1">75%</p>
                    <span className="text-xs text-gray-400 p-1 bg-gray-50">Updated › 2 days ago</span>
                </div>

                <div className="bg-white shadow-xs rounded-md p-4 flex-1 border border-slate-50 hover:shadow-sm transition-shadow duration-200">
                    <h4 className="text-sm text-slate-500 inline-flex items-center justify-center gap-1"><span className="p-2 bg-purple-200 rounded-full"><PiPaperclip className="text-sm text-slate-700"/></span>Completed Assignments</h4>
                    <p className="text-3xl font-semibold text-gray-900 my-2 border-b border-slate-100 py-1">12%</p>
                    <span className="text-xs text-gray-400 p-1 bg-gray-50">Updated › 1 hour ago</span>
                </div>
                <div className="bg-white shadow-xs rounded-md p-4 flex-1 border border-slate-50 hover:shadow-sm transition-shadow duration-200">
                    <h4 className="text-sm text-slate-500 inline-flex items-center justify-center gap-1"><span className="p-2 bg-indigo-200 rounded-full"><PiClipboard className="text-sm text-slate-700"/></span>Attendance</h4>
                    <p className="text-3xl font-semibold text-gray-900 my-2 border-b border-slate-100 py-1">90%</p>
                    <span className="text-xs text-gray-400 p-1 bg-gray-50">Updated › 2 days ago</span>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
// This is a simple overview page for a dashboard in a React application.