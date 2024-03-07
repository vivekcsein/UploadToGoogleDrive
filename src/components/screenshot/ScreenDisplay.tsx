"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import * as htmlToImage from "html-to-image";
import ButtonCapture from "../button/ButtonCapture";
import ScreenShotUploadDisplay from "./ScreenShotUploadDisplay";
const ScreenDisplay = () => {
  const screenRef = useRef(null);
  const [targetScreen, setTargetScreen] = useState<HTMLElement | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    const node = screenRef.current;
    if (node) {
      setTargetScreen(node);
    } else {
      setTargetScreen(document.body);
    }

    return () => {
      setTargetScreen(null);
    };
  }, []);

  const capture = useCallback(() => {
    if (!targetScreen) return;
    htmlToImage
      .toPng(targetScreen)
      .then(function (dataUrl) {
        setImageUrl(dataUrl);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
    console.log("capture image");
  }, [targetScreen]);

  return (
    <div>
      {imageUrl === "" ? (
        <div className="relative">
          <div
            ref={screenRef}
            className="screenshot w-full h-[400px] bg-red-400"
          >
            <h1 className="text-[100px]">{"Captured Image"}</h1>
          </div>
          <div className="w-full h-5 bg-red-600"></div>
          <div className="w-full grid place-items-center">
            <ButtonCapture onClickFun={capture} />
          </div>
        </div>
      ) : null}
      <ScreenShotUploadDisplay url={imageUrl} setImage={setImageUrl} />
    </div>
  );
};

export default ScreenDisplay;
