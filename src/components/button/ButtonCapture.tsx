"use client";
import React from "react";
import { Button } from "frnz-ui";
type ButtonCaptureProps = {
  onClickFun: () => void;
};
const ButtonCapture = ({ onClickFun }: ButtonCaptureProps) => {
  return (
    <>
      <Button label="Capture" variant="I_wantAttention" onClick={onClickFun} />
    </>
  );
};

export default ButtonCapture;
