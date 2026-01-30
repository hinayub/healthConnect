import { Link } from "react-router-dom";
import Personal_Info from "./PersonalInfo";
import Professional_info from "./ProfessionalInfo";
import { Button } from "primereact/button";
import LinkButton from "../../../component/LinkButton";
import Footer from "../../../component/footer/Footer";

const PersonalProfessionalForm = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center  ">
        <div className="w-3/5 shadow-lg h-1/3 rounded-xl bg-white right-0 left-0 mt-1rem h-full ">
          <div className="relative px-7">
            <h1 className="text-4xl pt-5 font-bold">Doctor Registration</h1>
            <p className="text-gray-500 pt-2 pb-7">
              Join our network of healthcare professionals
            </p>
            <Personal_Info />
            <Professional_info />
            <LinkButton page="/offeredServices" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PersonalProfessionalForm;
