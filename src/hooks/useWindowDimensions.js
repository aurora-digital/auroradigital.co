import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  const [dimensions, setDimensions] = useState({ width: null, height: null });

  function updateDimensions() {
    setDimensions({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  }

  useEffect(() => {
    updateDimensions();
  }, []);

  useEffect(
    () => {
      window.addEventListener("resize", updateDimensions);

      return () => {
        window.removeEventListener("resize", updateDimensions);
      };
    },
    [
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
    ],
  );

  return dimensions;
}
