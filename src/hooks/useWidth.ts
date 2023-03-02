import { useEffect, useState } from "react";

export const useWidth = () => {
  const [screen, setScreen] = useState(1440);

  const handleResize = () => {
    setScreen(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("mouseover", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
      window.removeEventListener("mouseover", handleResize);
    };
  }, []);

  return screen;
};
