import { useState } from "react";
import Offered_services_inputField from "./Offered_services_inputField";
import Service_checkBox from "./Service_checkBox";
import TextArea from "../TextArea";
import Doctor_availability from "./Doctor_availability";
import { MdOutlineMedicalServices } from "react-icons/md";

const Offered_sevices = () => {
  const [videoCheckFlage, setVideoCheckFlage] = useState(false);
  const [homeVisitCheckFlage, sethomeVisitCheckFlage] = useState(false);
  const [clinicCheckFlage, setclinicCheckFlage] = useState(false);

  return (
    <>
      <div className="flex gap-2 items-center pt-7 pb-4">
        <MdOutlineMedicalServices className="text-blue-600 h-6 w-6" />
        <h3 className="text-xl font-bold">Services Offered</h3>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Service_checkBox
            text="Video Session"
            checkFlage={videoCheckFlage}
            setCheckFlage={setVideoCheckFlage}
          />
          {videoCheckFlage == true && (
            <Offered_services_inputField placeholder="Fee per Session ($)" />
          )}
        </div>
        <div>
          <Service_checkBox
            text="Home Visit"
            checkFlage={homeVisitCheckFlage}
            setCheckFlage={sethomeVisitCheckFlage}
          />
          {homeVisitCheckFlage == true && (
            <Offered_services_inputField placeholder="Fee per visit ($)" />
          )}
        </div>
        <div>
          <Service_checkBox
            text="Clinic Visit"
            checkFlage={clinicCheckFlage}
            setCheckFlage={setclinicCheckFlage}
          />
          {clinicCheckFlage == true && (
            <>
              <Offered_services_inputField placeholder="Fee per visit ($)" />
              <div className="pl-6 pt-4">
                <TextArea
                  row={2}
                  placeholder="123 Health Street, Medical District, NY 10001"
                  text="Clinic Address"
                  location="clinicAddress"
                />
              </div>
            </>
          )}
        </div>
        <h3 className="text-xl mt-6 pb-4">Avalability</h3>
        <Doctor_availability />
      </div>
    </>
  );
};

export default Offered_sevices;
