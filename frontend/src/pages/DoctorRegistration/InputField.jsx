import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

const InputField = ({ type, text, placeholder, iconClass = "" }) => {
  const renderInputText = () => (
    <InputText
      id={text}
      type={type}
      placeholder={placeholder}
      className="h-11 w-full rounded-lg border border-gray-400 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
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
