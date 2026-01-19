import { FaVideo } from "react-icons/fa";
import { InputSwitch } from "primereact/inputswitch";
import DoctorAvailability from "./DoctorAvailability";

const OfferedServices = ({ placeholder, checked, setChecked, icon: Icon }) => {
  return (
    <>
      <div className="flex flex-col justify-start border border-gray-200 border-2 rounded-lg px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <Icon className="text-blue-400 " size={20} />
            <span className="font-bold">{placeholder}</span>
          </div>
          <InputSwitch
            className="scale-75"
            checked={checked}
            onChange={(e) => setChecked(e.value)}
          />
        </div>
        <DoctorAvailability />
      </div>
    </>
  );
};

export default OfferedServices;
