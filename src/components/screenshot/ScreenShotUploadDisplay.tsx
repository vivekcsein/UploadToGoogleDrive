"use client";
import React, { useCallback, useRef, useState } from "react";
import ButtonUpload from "../button/ButtonUpload";
// import ButtonBack from "../button/ButtonBack";
import ScreenShotImage from "./ScreenShotImage";

type ScreenShotUploadDisplayProps = {
  url: string;
  setImage: (url: string) => void;
};
const ScreenShotUploadDisplay = ({
  url,
  setImage,
}: ScreenShotUploadDisplayProps) => {
  //upload image to google drive
  const uploadToDrive = useCallback(async () => {
    console.log("upload to drive");
    try {
      const img = new Image();
      img.src = url;
      const data = new FormData();
      const blob = new Blob([url], { type: "image/png" });
      data.append("image", blob);
      const response = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      if (!response.ok) throw new Error("Faild to Upload Image");
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // const backToScreenDisplay = useCallback(() => {
  //   setImage("");
  // }, []);

  return (
    <div>
      {url === "" ? null : (
        <div className="w-full h-full absolute top-0 left-0 bg-green-700 ">
          {/* <div className="w-full flex justify-start pl-10 pt-5">
            <ButtonBack onClickFun={backToScreenDisplay} />
          </div> */}
          <div className="w-full h-2/3 flex justify-center items-center">
            <div className="w-2/3 h-2/3">
              <ScreenShotImage url={url} />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-full flex justify-center">
              <ButtonUpload onClickFun={uploadToDrive} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScreenShotUploadDisplay;
