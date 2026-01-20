import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

const InputField = ({
  type,
  text,
  placeholder = "",
  iconClass = "",
  data = "",
  setData,
}) => {
  const renderInputText = () => (
    <InputText
      id={text}
      type={type}
      value={data}
      placeholder={placeholder}
      onChange={(e) => setData(e.target.value)}
      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
    />
  );

  return (
    <div className="w-full">
      <label
        htmlFor={text}
        className="block mb-2 text-sm font-medium text-gray-600"
      >
        {text}
      </label>

      {iconClass ? (
        <IconField iconPosition="left" className="w-full">
          <InputIcon className={iconClass} />
          {renderInputText()}
        </IconField>
      ) : (
        renderInputText()
      )}
    </div>
  );
};

export default InputField;
