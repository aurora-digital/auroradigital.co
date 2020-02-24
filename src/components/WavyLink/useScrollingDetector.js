import { useState, useRef } from "react";
import { useViewportScroll } from "framer-motion";

const useScrollingDetector = () => {
  const timeout = useRef();
  const { scrollYProgress } = useViewportScroll();
  const [isScrolling, setIsScrolling] = useState(false);

  scrollYProgress.onChange(_ => {
    clearTimeout(timeout.current);

    setIsScrolling(true);

    timeout.current = setTimeout(() => setIsScrolling(false), 500);
  });

  return isScrolling;
};

export default useScrollingDetector;
