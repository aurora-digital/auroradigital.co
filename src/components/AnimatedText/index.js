import React, { useRef, useLayoutEffect, useState } from "react";
import Typography from "root/components/Typography";
import useScroll from "root/hooks/useScroll";

import "./index.css";

function AnimatedText() {
  const wordRef = useRef();
  const [textHeight, setTextHeight] = useState(null);
  const { scrollPosition, lastScrollPosition } = useScroll();
  const animationY = [0, -25, -50, -75, -50, -25, 0];
  const scrollY = [0, 83, 166, 249, 332, 415, 500];
  const increment = 71;

  //   useLayoutEffect(() => {
  //     const { current } = wordRef;

  //     setTextHeight({ height: `${current.offsetHeight}px` });
  //   }, []);

  //   if (scrollPosition < 500) {
  //     console.log(scrollPosition / 7);
  //   }

  //   console.log(scrollPosition);

  // <div styleName="root" style={textHeight}>
  return (
    <div styleName="root">
      <div styleName="animation-container">
        <span>
          <Typography color="oxford-blue" weight="bold" variant="h1">
            growth
          </Typography>
        </span>
        <span>
          <Typography color="oxford-blue" weight="bold" variant="h1">
            career
          </Typography>
        </span>
        <span>
          <Typography color="oxford-blue" weight="bold" variant="h1">
            growth
          </Typography>
        </span>
        <span>
          <Typography color="oxford-blue" weight="bold" variant="h1">
            career
          </Typography>
        </span>
      </div>
    </div>
  );
}

export default AnimatedText;
