import React from "react";
import Image from "next/image";
type ScreenShotImageProps = {
  url: string;
};
const ScreenShotImage = ({ url }: ScreenShotImageProps) => {
  return (
    <>
      <Image alt="screenshot" src={url} height={1080} width={1920}></Image>
    </>
  );
};

export default ScreenShotImage;
