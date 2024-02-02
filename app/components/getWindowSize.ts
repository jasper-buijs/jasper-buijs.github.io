"use client"

import { useState, useEffect } from "react";

type WindowDimentions = {
  width: number | undefined;
  height: number | undefined;
};

const getWindowDimentions = (): WindowDimentions => {
  const [windowDimentions, setWindowDimentions] = useState<WindowDimentions>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize(): void {
      setWindowDimentions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimentions;
}

export default getWindowDimentions;