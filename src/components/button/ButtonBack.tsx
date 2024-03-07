"use client";

import { Button } from "frnz-ui";
import React from "react";
type ButtonBackProps = {
  onClickFun: () => void;
};
const ButtonBack = ({ onClickFun }: ButtonBackProps) => {
  return (
    <>
      <Button label="back" variant="Rainbowfill" onClick={onClickFun} />
    </>
  );
};

export default ButtonBack;
