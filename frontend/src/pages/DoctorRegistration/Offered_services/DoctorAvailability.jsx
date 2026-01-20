import React, { useEffect, useState } from "react";
import InputField from "../../../component/InputField";
import ButtonWithIcon from "../../../component/ButtonWithIcon";
import { IoCalendarOutline } from "react-icons/io5";
import TimeSlotCard from "./TimeSlotCard";

const DoctorAvailability = () => {
  const [sheduleData, setSheduleData] = useState({
    startTime: "09:00",
    endTime: "17:00",
    day: "",
  });

  const [schedule, setSchedule] = useState({});

  const updateShedule = () => {
    if (!sheduleData.day) return;

    const slot = `${sheduleData.startTime} - ${sheduleData.endTime}`;
    const day = sheduleData.day;

    setSchedule((prev) => {
      const existingSlots = prev[day] || [];

      if (existingSlots.includes(slot)) return prev;

      return {
        ...prev,
        [day]: [...existingSlots, slot],
      };
    });
  };

  return (
    <div className="px-4 pt-4 border-t-2 border-gray-200 rounded-2xl bg-white  ">
      <h2 className="text-2xl font-bold text-gray-900  flex gap-2 items-center">
        <IoCalendarOutline className="text-blue-600" />
        Availability Schedule *
      </h2>
      <div className="border-2 border-blue-300 rounded-2xl p-4 mx-2 my-4 bg-blue-50">
        <h3 className="text-lg font-semi text-gray-900">Add Time Slot</h3>
        <div className="w-full flex flex-col md:flex-row gap-4 py-4  ">
          <div className="w-full md:w-1/2">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Select day
            </label>
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
              value={sheduleData.day}
              onChange={(e) =>
                setSheduleData((prev) => ({
                  ...prev,
                  day: e.target.value,
                }))
              }
            >
              <option value="">Choose a day</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 flex flex-col sm:flex-row gap-4 ">
            <InputField
              text="Start Time"
              type="time"
              data={sheduleData.startTime}
              setData={(value) =>
                setSheduleData((prev) => ({
                  ...prev,
                  startTime: value,
                }))
              }
              iconClass="pi pi-clock"
            />

            <InputField
              text="End Time"
              type="time"
              data={sheduleData.endTime}
              setData={(value) =>
                setSheduleData((prev) => ({
                  ...prev,
                  endTime: value,
                }))
              }
              iconClass="pi pi-clock"
            />
          </div>
        </div>

        <ButtonWithIcon day={sheduleData.day} updateShedule={updateShedule} />
      </div>
      {Object.keys(schedule).map((key) => (
        <TimeSlotCard
          key={key}
          day={key}
          slots={schedule[key]}
          setSchedule={setSchedule}
        />
      ))}
    </div>
  );
};

export default DoctorAvailability;
