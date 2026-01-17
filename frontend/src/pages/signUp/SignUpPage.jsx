import InputField from "../../component/InputField";

const SignUpPage = () => {
  return (
    <>
      <div className="flex bg-blue-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full md:w-120 max-h-full">
          <div className=" bg-white relative bg-neutral-primary-soft  rounded-xl shadow-2xl p-4 md:p-6">
            <div className="flex flex-col items-center justify-between pb-4 md:pb-5">
              <h2 className="text-3xl mb-2 text-black font-semibold">
                Welcome to HealthConnect
              </h2>
              <p className="text-grey">SignUp to continue</p>
            </div>
            <form action="#" className=" flex flex-col gap-4 pt-4 md:pt-6">
              <InputField
                type="text"
                text="Enter username"
                placeholder="hina_ayub"
              />
              <InputField
                type="text"
                text="Enter full name"
                placeholder="Hina Ayub"
              />
              <InputField
                type="email"
                text="Enter email"
                placeholder="example@company.com"
              />
              <InputField
                type="tel"
                text="Enter Phone number"
                placeholder="+1 (555) 123-4567"
              />
              <InputField
                type="password"
                text="Enter password"
                placeholder="•••••••••"
              />

              <button
                type="submit"
                className="mt-4 loginSubmit bg-[var(--color-blue-600)] h-12 rounded-lg hover:bg-[var(--color-blue-700)] text-white  shadow-xs text-lg rounded-base text-sm px-4 py-2.5 focus:outline-none w-full mb-3"
              >
                SignUp
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
