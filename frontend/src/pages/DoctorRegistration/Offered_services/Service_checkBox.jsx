import React from "react";

const Service_checkBox = ({ checkFlage, setCheckFlage, text }) => {
  return (
    <>
      <span className="flex gap-3">
        <input
          type="checkbox"
          id="videoCheck"
          checked={checkFlage}
          onChange={(e) => setCheckFlage(e.target.checked)}
        />
        <label htmlFor="videoCheck">{text}</label>
      </span>
    </>
  );
};

export default Service_checkBox;
