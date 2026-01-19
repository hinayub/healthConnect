import React from "react";
import OfferedServices from "./OfferedServices";
import { MdMedicalServices } from "react-icons/md";
import { useState } from "react";
import { FaClinicMedical } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { FaVideo } from "react-icons/fa";

const OfferedSevicesPage = () => {
  const [offeredVideoSession, setofferedVideoSession] = useState(false);
  const [offeredClinicVisit, setofferedClinicVisit] = useState(false);
  const [offeredHomeVisit, setofferedHomeVisit] = useState(false);

  return (
    <div className="min-h-screen flex justify-center  ">
      <div className="w-4/5 shadow-lg h-1/3   right-0 left-0 mt-1rem h-full ">
        <div className="relative px-7">
          <h1 className="text-4xl pt-5 font-bold">Doctor Registration</h1>
          <p className="text-gray-500 pt-2 pb-7">
            Join our network of healthcare professionals
          </p>
          <div className="flex gap-2 items-center pb-4">
            <MdMedicalServices className="text-blue-600 h-6 w-6" />
            <h3 className="text-xl font-bold">Personal Information</h3>
          </div>
          <div className="px-4 flex flex-col gap-4">
            <OfferedServices
              placeholder="Video Session"
              checked={offeredVideoSession}
              setChecked={setofferedVideoSession}
              icon={FaVideo}
            />
            <OfferedServices
              placeholder="Clinic Visit"
              checked={offeredClinicVisit}
              setChecked={setofferedClinicVisit}
              icon={FaClinicMedical}
            />
            <OfferedServices
              placeholder="Home Visit"
              checked={offeredHomeVisit}
              setChecked={setofferedHomeVisit}
              icon={ImHome}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferedSevicesPage;
