import { useState, useEffect } from "react";

const useScrollDirection = () => {
  if (typeof window === "undefined") return null;

  // eslint-disable-next-line global-require
  const { watchViewport, unwatchViewport } = require("tornis");
  const [scrollState, setScroll] = useState();

  const updateValues = ({ scroll }) => {
    if (scroll.changed) {
      if (scroll.velocity.y === 0) setTimeout(() => setScroll(scroll), 500);
      else setScroll(scroll);
    }
  };

  useEffect(() => {
    watchViewport(updateValues, false);

    return () => {
      unwatchViewport(updateValues);
    };
  }, []);

  return scrollState;
};

export default useScrollDirection;
