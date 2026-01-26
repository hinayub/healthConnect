import { LuClock4 } from "react-icons/lu";
import { MdAutoDelete } from "react-icons/md";

const TimeSlotCard = ({ day = "", slots = [], setSchedule }) => {
  const deleteTimeSlot = (SlotToDelete) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: prev[day].filter((slot) => slot != SlotToDelete),
    }));
  };
  return (
    <div className="border-2 border-blue-300 rounded-2xl p-4 mx-2 my-4 ">
      <div className="flex justify-between">
        <h4 className="font-semibold text-indigo-900 pb-4">{day}</h4>
        <span className="text-sm text-blue-700 font-medium">
          {slots.length} Slots
        </span>
      </div>
      <div className="flex flex-col flex-wrap gap-2 md:flex-row ">
        {slots.map((time, key) => (
          <div
            key={key}
            className="flex justify-between w-full md:w-2/8 sm:px-2 py-2.5 mr-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
          >
            <div className="flex gap-2 items-center">
              <LuClock4 className=" text-blue-700" />
              <span> {time}</span>
            </div>

            <MdAutoDelete
              size={22}
              className="text-red-500 cursor-pointer"
              onClick={() => deleteTimeSlot(time)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotCard;
