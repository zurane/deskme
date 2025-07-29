import { PiClock } from "react-icons/pi";
import WeekPicker from "./WeekPicker";

export default function Schedule() {
    
    const data = [
        {
            time: "08:00 - 09:00",
            teacher: "Mrs. Govender",
            subject: "Geography",
            room: "D23",
            avatar: 'MG',

        },

        {
            time: "09:00 - 10:00",
            teacher: "Mr. Patek",
            subject: "Economics",
            room: "D29",
            avatar: 'MP',

        },

        {
            time: "10:00 - 11:00",
            teacher: "Ms. Johnson",
            subject: "Mathematics",
            room: "D25",
            avatar: 'MJ',

        },
        {
            time: "11:00 - 12:00",
            teacher: "Mr. Smith",
            subject: "History",
            room: "D21",
            avatar: 'MS',

        },
         {
            time: "12:00 - 13:00",
            teacher: "Mr. Smith",
            subject: "History",
            room: "D21",
            avatar: 'MS',

        },
        // Add more schedule items as needed
    ];
    //Dummy data for the schedule

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
           <div>
             {data.map((item, index) => (
                <div key={index} className='px-2 py-2 border border-stone-100 my-2 rounded-md flex flex-row items-center justify-between'>
                    <div className="flex items-center">
                        <div className="w-9 h-9 bg-blue-950 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3">
                            {item.avatar}
                            </div>
                        <p className="text-sm text-zinc-800 py-1 leading-5">
                            {item.teacher}
                            <br />
                            <span className="text-xs text-gray-400">
                                {item.subject} • Room {item.room}
                            </span>
                        </p>
                    </div>
                    <span className="p-1 rounded-md text-xs text-gray-600 inline-flex gap-1 items-center">
                        <PiClock />
                        {item.time}
                    </span>
                </div>
            ))}
           </div>
           <div className="bg-sky-50">
             <WeekPicker/>
           </div>
        </div>
    );
}

// This component renders a schedule with teacher names, subjects, rooms, and times.