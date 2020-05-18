import { useState, useEffect } from "react";

export default function useScroll() {
  const [scrollPosition, setSrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;

    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
}
