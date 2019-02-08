import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  const [dimensions, setDimensions] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  function updateDimensions() {
    setDimensions({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  });

  return dimensions;
}
