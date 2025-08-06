import userIcon from "../assets/profile-ava.svg";
import { CirclePlus, Hourglass, Clock } from "lucide-react";


export default function Submission() {

    const data = [
        {

            assignment: "Report on Climate Change",
            subject: "Geography",
            room: "Due in 3 days",
            color: 'w-3 h-3 bg-green-500 rounded-full overflow-hidden mr-2',

        },

        {

            assignment: "Economic Analysis report",
            subject: "Economics",
            room: "Due in 3 days",
            color: 'w-3 h-3 bg-blue-500 rounded-full overflow-hidden mr-2',

        },

        {

            assignment: "Assignment 1: Exponents",
            subject: "Mathematics",
            room: "Due in 1 week",
            color: 'w-3 h-3 bg-yellow-500 rounded-full overflow-hidden mr-2',

        },
        {

            assignment: "History Essay",
            subject: "History",
            room: "Due in 2 days",
            color: 'w-3 h-3 bg-indigo-400 rounded-full overflow-hidden mr-2',

        },
        // Add more schedule items as needed
    ];
    //Dummy data for the submissions
    return (
        <div>
            {data.map((item, index) => (
                <div key={index} className='px-2 py-2 rounded-md border border-slate-100 my-2 flex flex-row items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors'>
                    <div className="flex items-center">
                        <div className={item.color}>

                        </div>
                        <p className="text-sm text-zinc-800 py-1 leading-5">
                            {item.assignment}
                            <br />
                            <span className="text-xs text-gray-400 flex flex-inline items-center">
                                {item.subject}
                            </span>
                        </p>
                    </div>
                    <span className="p-1 rounded-md text-xs text-gray-600 inline-flex gap-1 items-center">
                        <Clock className="w-3 h-3" />{item.room}
                    </span>
                </div>
            ))}
        </div>
    );
}

// This component renders a schedule with teacher names, subjects, rooms, and times.