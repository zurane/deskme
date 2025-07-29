import {
  PiClipboard,
  PiPaperclip,
  PiChartLine,
  PiCrownSimple,
} from "react-icons/pi";

import { ArrowUp, ArrowDown } from "lucide-react";
import { LineChart } from "@mui/x-charts";
import Schedule from "../components/Schedule";
import Submission from "../components/Submission";

// The Dashboard component displays various widgets with statistics and a radar chart.
// It includes widgets for average score, pass rate, completed assignments, and attendance.

function Dashboard() {
  const terms = ["Term 1", "Term 2", "Term 3"];
  const seriesData = [
    { label: "Math", data: [50, 60, 72], color: "#1976d2" },
    { label: "English", data: [60, 80, 70], color: "#ff9800" },
    { label: "Science", data: [65, 75, 70], color: "#4caf50" },
    { label: "History", data: [50, 55, 65], color: "#9c27b0" },
  ];
  return (
    <>
      <div>
        {/* WIDGETS */}
        <div>
          <div className="flex flex-col md:flex-row gap-4">
            <div
              className="bg-white rounded-md p-4 flex-1 border border-gray-100 hover:shadow-[0px_9px_8px_-3px_rgba(0,_0,_0,_0.1)]
 transition-shadow duration-200"
            >
              <div className="flex flex-row justify-between text-slate-500 items-center my-2">
                <div>
                  <p>Average score</p>
                </div>
                <div className="p-3 bg-green-200 rounded-full shadow-xs">
                  <PiChartLine className="text-sm text-slate-700" />
                </div>
              </div>
              <p className="text-3xl font-semibold text-gray-900">68%</p>
              <p className="text-xs text-green-500 py-1 my-1 flex flex-inline items-center gap-1">
                <ArrowUp className="w-4 h-4" />
                +5% from last term
              </p>
              <span className="text-xs text-gray-400 p-1">
                Updated • 6 weeks ago
              </span>
            </div>

            <div
              className="bg-white rounded-md p-4 flex-1 border border-gray-100 hover:shadow-[0px_9px_8px_-3px_rgba(0,_0,_0,_0.1)]
  transition-shadow duration-200"
            >
              <div className="flex flex-row justify-between text-slate-500 items-center my-2 text-md">
                <p>Pass rate</p>
                <span className="p-3 bg-red-100 rounded-full shadow-xs">
                  <PiCrownSimple className="text-sm text-slate-700" />
                </span>
              </div>

              <p className="text-3xl font-semibold text-gray-900">75%</p>
              <p className="text-xs text-green-500 py-1 my-1 flex flex-inline items-center gap-1">
                <ArrowUp className="w-4 h-4" />
                +8% from last term
              </p>

              <span className="text-xs text-gray-400 p-1">
                Updated • 2 days ago
              </span>
            </div>

            <div
              className="bg-white rounded-md p-4 flex-1 border border-gray-100 hover:shadow-[0px_9px_8px_-3px_rgba(0,_0,_0,_0.1)]
 transition-shadow duration-200"
            >
              <div className="flex flex-row justify-between text-slate-500 items-center my-2 text-md">
                <p className="text-md">Completed assignments</p>
                <span className="p-3 bg-purple-200 rounded-full">
                  <PiPaperclip className="text-sm text-slate-700" />
                </span>
              </div>
              <p className="text-3xl font-semibold text-gray-900">12%</p>
              <p className="text-xs text-red-500 py-1 my-1 flex flex-inline items-center gap-1">
                <ArrowDown className="w-4 h-4" />
                -10% from last term
              </p>

              <span className="text-xs text-gray-400 p-1">
                Updated • 1 hour ago
              </span>
            </div>

            <div
              className="bg-white rounded-md p-4 flex-1 border border-gray-100 hover:shadow-[0px_9px_8px_-3px_rgba(0,_0,_0,_0.1)]
 transition-shadow duration-200"
            >
              <div className="flex flex-row justify-between text-slate-500 items-center my-2 text-md">
                <p>Attendance</p>
                <span className="p-3 bg-indigo-200 rounded-full">
                  <PiClipboard className="text-sm text-slate-700" />
                </span>
              </div>
              <p className="text-3xl font-semibold text-gray-900">90%</p>
              <p className="text-xs text-green-500 py-1 my-1 flex flex-inline items-center gap-1">
                <ArrowUp className="w-4 h-4" />
                +50% from last term
              </p>
              <span className="text-xs text-gray-400 p-1">
                Updated • 2 days ago
              </span>
            </div>
          </div>
        </div>

        {/* CHARTS */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
            
<div className="bg-white rounded-md p-4 flex-1 border border-gray-100 hover:shadow-[0px_9px_8px_-3px_rgba(0,_0,_0,_0.1)]
 transition-shadow duration-200">
              <div className="pb-1 mb-2 leading-8">
                <h4 className="text-md text-slate-600 font-medium inline-flex items-center justify-center gap-1">
                  Term Performance
                </h4>
                <p className="text-gray-400 text-sm">
                  Performance across different terms
                </p>
              </div>
              <LineChart
                height={400}
                xAxis={[{ data: terms, scaleType: "point", label: "Term" }]}
                yAxis={[{ min: 0, max: 100, label: "Performance (%)" }]}
                series={seriesData.map((subj) => ({
                  ...subj,
                  curve: "monotoneX",
                  showMark: true,
                }))}
                grid={{ vertical: true, horizontal: true }}
                margin={{ top: 20, right: 20, bottom: 20, left: 15 }}
              />
            </div>

<div className="bg-white rounded-md p-4 flex-1 border border-gray-100 hover:shadow-[0px_9px_8px_-3px_rgba(0,_0,_0,_0.1)]
                transition-shadow duration-200 overflow-hidden">
              <div className="pb-1 mb-2 leading-8">
                <h4 className="text-md text-slate-600 font-medium inline-flex items-center justify-center gap-1">
                  Class Schedule
                </h4>
                <p className="text-gray-400 text-sm">Your classes for today</p>
              </div>
              <Schedule />
            </div>

<div className="bg-white rounded-md p-4 flex-1 border border-gray-100 hover:shadow-[0px_9px_8px_-3px_rgba(0,_0,_0,_0.1)]
 transition-shadow duration-200">
              <div className="pb-1 mb-2 leading-8">
                <h4 className="text-md text-slate-600 font-medium inline-flex items-center justify-center gap-1">
                  Upcoming Submissions
                </h4>
                <p className="text-gray-400 text-sm">
                  Tasks requiring your attention
                </p>
              </div>
              <Submission />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
// This is a simple overview page for a dashboard in a React application.
