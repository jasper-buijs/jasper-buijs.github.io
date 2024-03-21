/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { useState, useEffect } from "react";

type WindowDimensions = {
  width: number | undefined;
  height: number | undefined;
};

const getWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default getWindowDimensions;