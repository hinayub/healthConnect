import InputField from "./InputField";
import { FiUser } from "react-icons/fi";

const Personal_Info = () => {
  return (
    <>
      <div className="flex gap-2 items-center pb-4">
        <FiUser className="text-blue-600 h-6 w-6" />
        <h3 className="text-xl font-bold">Personal Information</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          type="text"
          text="Username"
          placeholder="hina_ayub"
          iconClass="pi pi-user"
        />
        <InputField
          type="text"
          text="Full Name"
          placeholder="Dr.Hina Ayub"
          iconClass="pi pi-user"
        />
        <InputField
          type="email"
          text="Email"
          placeholder="doctor@example.com"
          iconClass="pi pi-envelope"
        />
        <InputField
          type="password"
          text="Password"
          placeholder="•••••••••"
          iconClass="pi pi-lock"
        />
        <InputField
          type="tel"
          text="Phone Number"
          placeholder="+1 (555) 123-4567"
          iconClass="pi pi-phone"
        />
      </div>
    </>
  );
};

export default Personal_Info;
