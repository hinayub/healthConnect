import { FileUpload } from "primereact/fileupload";

const UploadFile = ({ placeholder, label, id, icon: Icon }) => {
  return (
    <>
      <div className="px-4">
        <div className="flex gap-2 items-center pb-2">
          <Icon className="text-blue-600" size={20} />
          <label for={id} className="block  text-sm font-medium ">
            {label}
          </label>
        </div>

        <FileUpload
          id={id}
          name="demo[]"
          url={"/api/upload"}
          accept="image/*"
          maxFileSize={1000000}
          emptyTemplate={<p className="m-0">{placeholder}</p>}
        />
      </div>
    </>
  );
};

export default UploadFile;
