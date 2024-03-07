import React from "react";
import { Button } from "frnz-ui";
type ButtonUploadProps = {
  onClickFun: () => void;
};
const ButtonUpload = ({ onClickFun }: ButtonUploadProps) => {
  return (
    <>
      <Button
        label="Upload to Drive"
        variant="I_wantAttention"
        onClick={onClickFun}
      />
    </>
  );
};

export default ButtonUpload;
