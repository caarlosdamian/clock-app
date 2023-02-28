import { useEffect, useState } from "react";

export const useWidth = () => {
  const [screen, setScreen] = useState(1440);

  const handleResize = () => {
    setScreen(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("mouseover", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mouseover", handleResize);
    };
  }, []);

  return screen;
};
