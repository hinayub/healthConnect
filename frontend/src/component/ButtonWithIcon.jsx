import { Button } from "primereact/button";

const ButtonWithIcon = ({ day = "", updateShedule }) => {
  return (
    <Button
      label="Add Time Slot"
      icon="pi pi-plus"
      disabled={!day}
      className="my-button h-11 "
      onClick={() => updateShedule()}
    />
  );
};

export default ButtonWithIcon;
