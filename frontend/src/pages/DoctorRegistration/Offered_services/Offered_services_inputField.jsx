import React from "react";

const Offered_services_inputField = ({ placeholder }) => {
  return (
    <>
      <div className="pl-6 pt-2">
        <input
          type="number"
          placeholder={placeholder}
          className="w-full h-11 pl-5 rounded-lg border border-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
        />
      </div>
    </>
  );
};

export default Offered_services_inputField;
