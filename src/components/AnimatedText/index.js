import React, { useRef, useLayoutEffect, useState } from "react";
import Typography from "root/components/Typography";
import useScroll from "root/hooks/useScroll";
import { times, reverse, map } from "lodash-es";

import "./index.css";

function AnimatedText() {
  const wordRef = useRef();
  const maxScroll = 400;
  const allWords = ["growth", "careers"];
  const [textHeight, setTextHeight] = useState(null);
  const [animationValue, setAnimationValue] = useState(0);
  const { scrollPosition, lastScrollPosition } = useScroll();
  const [animationData, setAnimationData] = useState(null);

  useLayoutEffect(() => {
    const { current } = wordRef;

    if (!textHeight) {
      const words = Math.ceil(maxScroll / current.offsetHeight);
      const textPositions = [];
      const scrollPositions = [];
      const wordsH = current.offsetHeight * words;

      times(words, index => {
        const pos = index * current.offsetHeight;

        textPositions.push(pos);
        scrollPositions.push((pos * maxScroll) / wordsH);
      });

      setAnimationData({
        textPositions,
        scrollPositions,
      });
      setTextHeight(current.offsetHeight);
    }
  }, []);

  const getNewAnimationvalue = () => {
    if (animationData) {
      map(animationData.scrollPositions, (position, index) => {
        const nextIndex =
          index >= animationData.scrollPositions
            ? animationData.scrollPositions
            : index + 1;

        if (scrollPosition > position) {
          const newV =
            scrollPosition > lastScrollPosition
              ? -animationData.textPositions[index]
              : -animationData.textPositions[-index];

          if (animationData.scrollPositions[nextIndex]) {
            if (
              scrollPosition > position &&
              scrollPosition <= animationData.scrollPositions[nextIndex]
            ) {
              setAnimationValue(newV);
            }
          } else if (scrollPosition > position) {
            setAnimationValue(newV);
          }
        }
      });
    }
  };

  useLayoutEffect(() => {
    if (scrollPosition < maxScroll) {
      getNewAnimationvalue();
    }
  }, [scrollPosition]);

  const renderWords = () => {
    if (textHeight) {
      const words = Math.ceil(maxScroll / textHeight);
      const reversedWords = reverse(allWords);

      return times(words, index => {
        return (
          <div key={index}>
            <Typography color="oxford-blue" weight="bold" variant="h1">
              {reversedWords[index >= reversedWords.length ? 0 : index]}
            </Typography>
          </div>
        );
      });
    }
  };

  return (
    <div styleName="root" style={{ height: `${textHeight}px` }}>
      <div
        style={{
          transform: `translate3d(0, ${animationValue}px, 0)`,
          transition: "all 500ms linear",
        }}
      >
        <div ref={wordRef}>
          <Typography color="oxford-blue" weight="bold" variant="h1">
            {allWords[0]}
          </Typography>
        </div>
        {renderWords()}
      </div>
    </div>
  );
}

export default AnimatedText;
