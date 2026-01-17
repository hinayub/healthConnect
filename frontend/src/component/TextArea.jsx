import { LuMapPin } from "react-icons/lu";

const TextArea = ({ placeholder, location = "", text, row }) => {
  return (
    <>
      <label for={text}>
        {location == "clinicAddress" ? (
          <div className="flex items-center  ">
            {" "}
            <LuMapPin />
            <span>{text}</span>
          </div>
        ) : (
          text
        )}
      </label>
      <textarea
        className="mt-2 rounded-lg  border border-gray-400 text-heading text-sm rounded-base focus:ring-1  focus:ring-blue-500  focus:border-blue-500  focus:outline-none block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
        rows={row}
        id={text}
        placeholder={placeholder}
      ></textarea>
    </>
  );
};

export default TextArea;
