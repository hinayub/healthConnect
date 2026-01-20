import { LuClock4 } from "react-icons/lu";
import { MdAutoDelete } from "react-icons/md";

const TimeSlotCard = ({ day = "", slots = [] }) => {
  return (
    <div className="border-2 border-blue-300 rounded-2xl p-4 mx-2 my-4 ">
      <div className="flex justify-between">
        <h4 className="font-semibold text-indigo-900">{day}</h4>
        <span className="text-sm text-blue-700 font-medium">1 Slot</span>
      </div>
      <div className="flex gap-2 flex-wrap">
        {slots.map((key, time) => (
          <div
            key={key}
            className="flex justify-between h-11 w-1/3 px-2 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          >
            <LuClock4 size={20} />
            {time}
            <MdAutoDelete size={22} className="text-red-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotCard;
