import { PiClock } from "react-icons/pi";
import userIcon from "../assets/profile-ava.svg";

export default function Schedule() {



    const data = [
        {
            time: "08:00 - 09:00",
            teacher: "Mrs. Govender",
            subject: "Geography",
            room: "D23",
            avatar: userIcon,

        },

        {
            time: "09:00 - 10:00",
            teacher: "Mr. Patek",
            subject: "Economics",
            room: "D29",
            avatar: userIcon,

        },

        {
            time: "10:00 - 11:00",
            teacher: "Ms. Johnson",
            subject: "Mathematics",
            room: "D25",
            avatar: userIcon,

        },
        {
            time: "11:00 - 12:00",
            teacher: "Mr. Smith",
            subject: "History",
            room: "D21",
            avatar: userIcon,

        },
        // Add more schedule items as needed
    ];
    //Dummy data for the schedule

    return (
        <div>
            {data.map((item, index) => (
                <div key={index} className='px-2 py-4 my-1 rounded-md bg-slate-50 flex flex-row items-center justify-between '>
                    <div className="flex items-center">
                        <img
                            src={item.avatar}
                            alt={item.subject}
                            className="w-9 h-9 inline-block mr-2"
                        />
                        <p className="text-sm text-zinc-800 py-1 leading-4">
                            {item.teacher}
                            <br />
                            <span className="text-xs text-gray-400">
                                {item.subject} • Room {item.room}
                            </span>
                        </p>
                    </div>
                    <span className="p-1 rounded-md text-xs text-gray-600 bg-indigo-100 inline-flex gap-1 items-center">
                        <PiClock />
                        {item.time}
                    </span>
                </div>
            ))}
        </div>
    );
}

// This component renders a schedule with teacher names, subjects, rooms, and times.