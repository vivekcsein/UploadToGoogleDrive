"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import ButtonUpload from "../button/ButtonUpload";
import ButtonBack from "../button/ButtonBack";

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
  }, []);

  const backToScreenDisplay = useCallback(() => {
    setImage("");
  }, []);

  return (
    <div>
      {url === "" ? null : (
        <div className="w-full h-full absolute top-0 left-0 bg-green-700 ">
          {/* <div className="w-full flex justify-start pl-10 pt-5">
            <ButtonBack onClickFun={backToScreenDisplay} />
          </div> */}
          <div className="w-full h-2/3 flex justify-center items-center">
            <div className="w-2/3 h-2/3">
              <Image
                alt="screenshot"
                src={url}
                height={1080}
                width={1920}
              ></Image>
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
