import { useState, useLayoutEffect } from "react";

export default function useWindowDimensions() {
  if (typeof document === "undefined") return { width: null, height: null };

  const [dimensions, setDimensions] = useState({ width: null, height: null });

  function updateDimensions() {
    setDimensions({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  }

  useLayoutEffect(() => {
    updateDimensions();
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [
    document.documentElement.clientWidth,
    document.documentElement.clientHeight,
  ]);

  return dimensions;
}
