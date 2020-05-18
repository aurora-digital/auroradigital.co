import React, { useRef, useLayoutEffect, useState } from "react";
import Typography from "root/components/Typography";
import useScroll from "root/hooks/useScroll";
import classNames from "classnames";

import "./index.css";

function AnimatedText() {
  const wordRef = useRef();
  const containerRef = useRef();
  const [textHeight, setTextHeight] = useState(null);
  const { scrollPosition, lastScrollPosition } = useScroll();
  const [word, setWord] = useState(0);
  const [oldWord, setOldWord] = useState(2);

  const animationY = [0, -25, -50, -75, -50, -25, 0];
  const scrollY = [0, 83, 166, 249, 332, 415, 500];
  const increment = 71;

  useLayoutEffect(() => {
    const { current } = wordRef;

    setTextHeight({ height: `${current.offsetHeight}px` });

    console.log(scrollPosition);

    if (scrollPosition > 0) {
      setTimeout(() => {
        const nextWord = word === 1 ? 0 : word + 1;
        console.log("set word ", word, nextWord);
        setOldWord(word);
        setWord(nextWord);
      }, 2000);
    }
  }, [word, scrollPosition]);

  const word0Style = classNames("word", {
    isVisible: word === 0,
    isHidden: oldWord === 0,
  });

  const word1Style = classNames("word", {
    isVisible: word === 1,
    isHidden: oldWord === 1,
  });

  return (
    <div styleName="root">
      <div
        styleName="animation-container"
        style={textHeight}
        ref={containerRef}
      >
        <span styleName={word0Style} ref={wordRef}>
          <Typography color="oxford-blue" weight="bold" variant="h1">
            growth
          </Typography>
        </span>
        <span styleName={word1Style}>
          <Typography color="oxford-blue" weight="bold" variant="h1">
            career
          </Typography>
        </span>
      </div>
    </div>
  );
}

export default AnimatedText;
