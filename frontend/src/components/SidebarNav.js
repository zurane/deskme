import {
    PiCirclesFourLight,
    PiClipboardLight,
    PiFolderOpenLight,
    PiCalendarCheckLight,
    PiMegaphoneSimpleLight,
    PiQuestionLight,
    PiGearFineLight,
} from "react-icons/pi";


function SidebarNav() {
    return (
        <div className="h-screen w-60 bg-slate-50 border-r border-gray-100 z-10 fixed p-3">
            <div className="border-b border-gray-200 pb-3 mb-3">
                <div className="inline-flex items-center gap-2 w-full hover:bg-gray-100 px-2 py-3 rounded-lg my-2">
                    <PiCirclesFourLight className="text-2xl" />
                    <span>Dashboard</span>
                </div>
                <div className="inline-flex items-center gap-2 w-full hover:bg-gray-100 px-2 py-3 rounded-lg my-2">
                    <PiClipboardLight className="text-2xl" />
                    <span>Assessments</span>
                </div>
                <div className="inline-flex items-center gap-2 w-full hover:bg-gray-100 px-2 py-3 rounded-lg my-2">
                    <PiFolderOpenLight className="text-2xl" />
                    <span>Resources</span>
                </div>
                <div className="inline-flex items-center gap-2 w-full hover:bg-gray-100 px-2 py-3 rounded-lg my-2">
                    <PiCalendarCheckLight className="text-2xl" />
                    <span>Timetable</span>
                </div>
                <div className="inline-flex items-center gap-2 w-full hover:bg-gray-100 px-2 py-3 rounded-lg my-2">
                    <PiMegaphoneSimpleLight className="text-2xl" />
                    <span>Feedback</span>
                </div>
                <div className="inline-flex items-center gap-2 w-full hover:bg-gray-100 px-2 py-3 rounded-lg my-2">
                    <PiQuestionLight className="text-2xl" />
                    <span>Support</span>
                </div>
                <div className="inline-flex items-center gap-2 w-full hover:bg-gray-100 px-2 py-3 rounded-lg my-2">
                    <PiGearFineLight className="text-2xl" />
                    <span>Settings</span>
                </div>
            </div>
        </div>
    )
}

export default SidebarNav;
// This is a sidebar navigation component for a React application.
