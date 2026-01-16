import { useState } from "react";
import { FiUserPlus } from "react-icons/fi";
import "./style.css";
import { Link } from "react-router-dom";
import InputField from "../DoctorRegistration/InputField";

const Login = () => {
  const [isDoctor, setDoctor] = useState(true);

  return (
    <>
      <div className="flex bg-blue-100 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full md:w-120 max-h-full">
          <div className=" bg-white relative bg-neutral-primary-soft  rounded-xl shadow-2xl p-4 md:p-6">
            <div className="flex flex-col items-center justify-between pb-4 md:pb-5">
              <h2 className="text-3xl mb-2 text-black font-semibold">
                Welcome to HealthConnect
              </h2>
              <p className="text-grey">Sign in to continue</p>
              <div className="mt-4 flex w-full h-13 bg-gray-100 rounded-lg justify-around items-center">
                <div
                  className={`w-1/2 flex items-center justify-center h-11 rounded-lg ml-1 cursor-pointer ${
                    isDoctor ? "bg-white text-blue-600" : ""
                  }`}
                  onClick={() => setDoctor(true)}
                >
                  Doctor
                </div>
                <div
                  className={`w-1/2 flex items-center justify-center h-11 rounded-lg mr-1 cursor-pointer  ${
                    isDoctor == false ? "bg-white text-blue-600" : ""
                  }`}
                  onClick={() => setDoctor(false)}
                >
                  Patient
                </div>
              </div>
            </div>
            <form action="#" className="pt-4 md:pt-6 ">
              <div className="flex flex-col gap-4">
                <InputField
                  type="email"
                  text="Enter Email"
                  placeholder="example@company.com"
                  iconClass="pi pi-envelope"
                />
                <InputField
                  type="password"
                  text="Enter password"
                  placeholder="•••••••••"
                  iconClass="pi pi-lock"
                />
              </div>

              <div className="flex items-start my-6">
                <a
                  href="#"
                  className="ms-auto text-sm font-medium text-fg-brand hover:underline"
                >
                  Lost Password?
                </a>
              </div>
              <button
                type="submit"
                className="loginSubmit bg-[var(--color-blue-600)] h-12 rounded-lg hover:bg-[var(--color-blue-700)] text-white  shadow-xs text-lg rounded-base text-sm px-4 py-2.5 focus:outline-none w-full mb-3"
              >
                Sign In
              </button>

              <div className="text-gray-600 text-sm text-center text-body mt-2 ">
                Not registered yet?
              </div>

              <Link
                to={isDoctor ? "/RegistrationForm" : "/signUp"}
                className="flex text-blue-600 gap-2 justify-center items-center hover:underline cursor-pointer mt-5"
              >
                <FiUserPlus className="h-5 w-" />
                <span>{isDoctor ? "Register as a Doctor" : "SignUp"}</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
