import { Button } from "primereact/button";

const ButtonWithIcon = ({ day = "" }) => {
  return (
    <Button
      label="Add Time Slot"
      icon="pi pi-plus"
      //   disabled={!day}
      className="my-button h-11 "
    />
  );
};

export default ButtonWithIcon;
