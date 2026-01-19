import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import InputField from "../../../component/InputField";
const DoctorAvailability = () => {
  const [sheduleData, setSheduleData] = useState({
    startTime: "09:00",
    endTime: "17:00",
    day,
  });
  return (
    <div>
      <h3 className="text-lg font-semi">Add Time Slot</h3>
      <div className="flex flex-col md:flex-row">
        <div>
          <label>Select day</label>
          <select className="h-11 w-full rounded-lg border border-gray-400 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500" onChange={(e)=>}>
            <option value="">Choose a day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thrusday">Thrusday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Thrusday</option>
            <option value="Saturday"></option>
            <option value="Sanday">Sanday</option>
          </select>
        </div>
        <InputField text="Start Time" type="time" />
      </div>
    </div>
  );
};

export default DoctorAvailability;
