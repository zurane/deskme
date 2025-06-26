import * as React from "react";
import {
    PiClipboard,
    PiPaperclip,
    PiChartLine,
    PiCrownSimple,
} from "react-icons/pi";

import { LineChart } from '@mui/x-charts';
import Schedule from "../components/Schedule";

// The Dashboard component displays various widgets with statistics and a radar chart.
// It includes widgets for average score, pass rate, completed assignments, and attendance.

function Dashboard() {
    const terms = ['Term 1', 'Term 2', 'Term 3'];
    const seriesData = [
        { label: 'Math', data: [50, 60, 72], color: '#1976d2' },
        { label: 'English', data: [60, 80, 70], color: '#ff9800' },
        { label: 'Science', data: [65, 75, 70], color: '#4caf50' },
        { label: 'History', data: [50, 55, 65], color: '#9c27b0' },

        // add more subjects as needed
    ];
    return (
        <>
            {/* WIDGETS */}
            <div>
                <h1 className="text-lg font-semibold text-gray-900 text-slate-600">
                    Overview
                </h1>
                <div className="flex flex-col md:flex-row gap-4 mt-3 ">
                    <div className="bg-white shadow-xs rounded-md p-4 flex-1 border border-purple-50 hover:shadow-sm transition-shadow duration-200">
                        <h4 className="text-sm text-slate-500 inline-flex items-center justify-center gap-1">
                            <span className="p-2 bg-green-200 rounded-full shadow-xs">
                                <PiChartLine className="text-sm text-slate-700" />
                            </span>
                            Average score
                        </h4>
                        <p className="text-3xl font-semibold text-gray-900 my-2 border-b border-slate-100 py-1">
                            68%
                        </p>
                        <span className="text-xs text-gray-400 p-1 bg-gray-50">
                            Updated • 6 weeks ago
                        </span>
                    </div>

                    <div className="bg-white shadow-xs rounded-md p-4 flex-1 border border-purple-50 hover:shadow-sm  transition-shadow duration-200">
                        <h4 className="text-sm text-slate-500 inline-flex items-center justify-center gap-1">
                            <span className="p-2 bg-red-100 rounded-full shadow-xs">
                                <PiCrownSimple className="text-sm text-slate-700" />
                            </span>
                            Pass rate
                        </h4>
                        <p className="text-3xl font-semibold text-gray-900 my-2 border-b border-slate-100 py-1">
                            75%
                        </p>
                        <span className="text-xs text-gray-400 p-1 bg-gray-50">
                            Updated • 2 days ago
                        </span>
                    </div>

                    <div className="bg-white shadow-xs rounded-md p-4 flex-1 border border-purple-50 hover:shadow-sm transition-shadow duration-200">
                        <h4 className="text-sm text-slate-500 inline-flex items-center justify-center gap-1">
                            <span className="p-2 bg-purple-200 rounded-full">
                                <PiPaperclip className="text-sm text-slate-700" />
                            </span>
                            Completed assignments
                        </h4>
                        <p className="text-3xl font-semibold text-gray-900 my-2 border-b border-slate-100 py-1">
                            12%
                        </p>
                        <span className="text-xs text-gray-400 p-1 bg-gray-50">
                            Updated • 1 hour ago
                        </span>
                    </div>

                    <div className="bg-white shadow-xs rounded-md p-4 flex-1 border border-purple-50 hover:shadow-sm transition-shadow duration-200">
                        <h4 className="text-sm text-slate-500 inline-flex items-center justify-center gap-1">
                            <span className="p-2 bg-indigo-200 rounded-full">
                                <PiClipboard className="text-sm text-slate-700" />
                            </span>
                            Attendance
                        </h4>
                        <p className="text-3xl font-semibold text-gray-900 my-2 border-b border-slate-100 py-1">
                            90%
                        </p>
                        <span className="text-xs text-gray-400 p-1 bg-gray-50">
                            Updated • 2 days ago
                        </span>
                    </div>
                </div>
            </div>

            {/* CHARTS */}
            <div>
                <div className="flex flex-col md:flex-row gap-4 mt-4 ">
                    <div className="bg-white shadow-xs rounded-md p-4 flex-1 border border-slate-50 hover:shadow-sm transition-shadow duration-200 ">
                        <div className="border-b border-slate-100 pb-2 mb-2">
                            <h4 className="text-sm text-slate-600 font-medium inline-flex items-center justify-center gap-1">
                                Upcoming Submissions
                            </h4>
                        </div>

                        <span className="text-xs text-gray-400 p-1 bg-gray-50">
                            Updated • 3 months ago
                        </span>
                    </div>

                    <div className="bg-white shadow-xs rounded-md p-4 flex-1 border border-slate-50 hover:shadow-sm transition-shadow duration-200 ">
                        <div className="border-b border-slate-100 pb-2 mb-2">
                            <h4 className="text-sm text-slate-600 font-medium inline-flex items-center justify-center gap-1">
                                Term Performance
                            </h4>
                        </div>
                        <LineChart
                            width={640}
                            height={400}
                            xAxis={[{ data: terms, scaleType: 'point', label: 'Term' }]}
                            yAxis={[{ min: 0, max: 100, label: 'Performance (%)' }]}
                            series={seriesData.map(subj => ({
                                ...subj,
                                curve: 'monotoneX',
                                showMark: true,
                            }))}
                            grid={{ vertical: true, horizontal: true }}
                            margin={{ top: 20, right: 20, bottom: 40, left: 50 }}
                        />
                        <span className="text-xs text-gray-400 p-1 bg-gray-50">
                            Updated • 1 hour ago
                        </span>
                    </div>

                    <div className="bg-white shadow-xs rounded-md p-4 flex-1 border border-slate-50 hover:shadow-sm transition-shadow duration-200 overflow-hidden  ">
                        <div className="border-b border-slate-100 pb-2 mb-2">
                            <h4 className="text-sm text-slate-600 font-medium inline-flex items-center justify-center gap-1">
                                Class Schedule
                            </h4>
                        </div>
                        <Schedule />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
// This is a simple overview page for a dashboard in a React application.

