import React from "react";
import Day_Card from "./Day_Card";

const Doctor_availability = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "thursday",
    "Friday",
    "Saturday",
    "Sanday",
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      {days.map((day, index) => (
        <Day_Card key={index} day={day} />
      ))}
    </div>
  );
};

export default Doctor_availability;
