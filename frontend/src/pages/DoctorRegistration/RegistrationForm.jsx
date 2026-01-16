import React from "react";
import Personal_Info from "./Personal_Info";
import Professional_info from "./Professional_info";
import Offered_sevices from "./Offered_services/Offered_sevices_page";

const RegistrationForm = () => {
  return (
    <div className="min-h-screen flex justify-center  ">
      <div className="w-3/5 shadow-lg h-1/3   right-0 left-0 mt-1rem h-full ">
        <div className="relative px-7">
          <h1 className="text-4xl pt-5 font-bold">Doctor Registration</h1>
          <p className="text-gray-500 pt-2 pb-7">
            Join our network of healthcare professionals
          </p>
          <Personal_Info />
          <Professional_info />
          <Offered_sevices />
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
