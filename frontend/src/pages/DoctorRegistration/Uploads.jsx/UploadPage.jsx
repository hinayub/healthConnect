import { HiDocumentArrowDown } from "react-icons/hi2";
import UploadFile from "../../../component/UploadFile";
import { FaRegIdCard } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import LinkButton from "../../../component/LinkButton";

const UploadPage = () => {
  return (
    <div className="flex bg-blue-50 overflow-y-auto overflow-x-hidden fixed justify-center top-0 right-0 left-0 z-50  w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative  w-3/5  max-h-full">
        <div className=" bg-white relative bg-neutral-primary-soft  rounded-xl shadow-2xl p-4 pb-0 md:p-6 md:pb-0">
          <h1 className="text-4xl pt-5 font-bold">Doctor Registration</h1>
          <p className="text-gray-500 pt-2 ">
            Join our network of healthcare professionals
          </p>
          <div className="flex gap-2 items-center pt-7 pb-4">
            <HiDocumentArrowDown className="text-blue-600 h-6 w-6" />
            <h3 className="text-xl font-bold">Required Document</h3>
          </div>
          <div className="flex flex-col gap-4">
            <UploadFile
              id="cnic"
              placeholder="Drag and drop CNIC photo here to upload."
              label="Upload CNIC back and front photo "
              icon={FaRegIdCard}
            />
            <UploadFile
              id="degree"
              placeholder="Drag and drop degree photo here to upload."
              label="Upload Degree photo "
              icon={PiCertificateBold}
            />
          </div>
          <LinkButton />
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
