import Navigation from './components/Navigation'; // Importing the Navigation component   
import { PiCirclesFourLight,PiClipboardLight,PiFolderOpenLight,PiCalendarCheckLight,PiMegaphoneSimpleLight } from "react-icons/pi";


function Dashboard() {

    return (
        <div className="dashboard">
            <Navigation />
            <div className='h-screen  w-50 bg-slate-50 border-r border-gray-100 z-10 fixed p-5'>
                <div className='inline-flex items-center gap-2 w-full hover:bg-gray-100 p-2 rounded-lg my-1'><PiCirclesFourLight className='text-2xl' /><span>Dashboard</span></div>
                <div className='inline-flex items-center gap-2 w-full hover:bg-gray-100 p-2 rounded-lg my-1'><PiClipboardLight className='text-2xl' /><span>Assessments</span></div>
                <div className='inline-flex items-center gap-2 w-full hover:bg-gray-100 p-2 rounded-lg my-1'><PiFolderOpenLight className='text-2xl' /><span>Resources</span></div>
                <div className='inline-flex items-center gap-2 w-full hover:bg-gray-100 p-2 rounded-lg my-1'><PiCalendarCheckLight className='text-2xl' /><span>Timetable</span></div>
                <div className='inline-flex items-center gap-2 w-full hover:bg-gray-100 p-2 rounded-lg my-1'><PiMegaphoneSimpleLight className='text-2xl' /><span>Feedback</span></div>
            </div>
        </div>
    );
}

export default Dashboard;