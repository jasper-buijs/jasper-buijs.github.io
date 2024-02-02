"use client"

import getWindowDimentions from "./getWindowSize";
import { redirect as rd } from "next/navigation";

const redirect = (path: string, onMobile:boolean) => {
  const { width, height } = getWindowDimentions();
  if (width && width < 768) {
    if (!onMobile) rd(String("/mobile" + path));
  } else if (width && width >= 768) {
    if (onMobile) rd(path);
  }
}

export default redirect;