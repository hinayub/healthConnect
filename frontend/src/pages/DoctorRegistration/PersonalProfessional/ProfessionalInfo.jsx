import InputField from "../../../component/InputField";
import TextArea from "../../../component/TextArea";
import { GrDocumentText } from "react-icons/gr";

const ProfessionalInfo = () => {
  return (
    <>
      <div className="flex gap-2 items-center pt-7 pb-4">
        <GrDocumentText className="text-blue-600 h-6 w-6" />
        <h3 className="text-xl font-bold">Professional Information</h3>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-4 ">
        <div>
          <label
            for="role"
            className="block mb-2 text-sm font-medium text-heading text-gray-500 "
          >
            Specialization
          </label>
          <select
            id="role"
            className="text-base h-11 rounded-lg  border border-gray-400 text-heading  rounded-base focus:ring-1  focus:ring-blue-500  focus:border-blue-500  focus:outline-none block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          >
            <option value="Physiotherapist">Physiotherapist</option>
            <option value="Psychologist">Psychologist</option>
            <option value="Speech Therapist">Speech Therapist</option>
          </select>
        </div>
        <InputField
          type="text"
          text="Medical License Number  "
          placeholder="ABC123456"
        />
        <InputField
          type="text"
          text="Qualification "
          placeholder="MD, PhD in Clinical Psychology"
        />
        <InputField type="number" text="Years of Experience " placeholder="5" />
      </div>
      <div className="grid grid-cols-1 mt-4 gap-4 ">
        <div>
          <TextArea
            placeholder="Tell patients about your expertise and experience..."
            row={4}
            text="Bio"
          />
        </div>
      </div>
    </>
  );
};

export default ProfessionalInfo;
