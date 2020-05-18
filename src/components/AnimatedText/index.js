import React, { useRef, useLayoutEffect, useState } from "react";
import Typography from "root/components/Typography";
import useScroll from "root/hooks/useScroll";
import classNames from "classnames";

import "./index.css";

function AnimatedText() {
  const wordRef = useRef();
  const containerRef = useRef();
  const [textHeight, setTextHeight] = useState(null);
  const scrollPosition = useScroll();
  const [word, setWord] = useState(0);
  const [oldWord, setOldWord] = useState(2);

  useLayoutEffect(() => {
    const { current } = wordRef;

    setTextHeight({ height: `${current.offsetHeight}px` });

    if (scrollPosition > 0 && scrollPosition < 400) {
      setTimeout(() => {
        const nextWord = word === 1 ? 0 : word + 1;

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
