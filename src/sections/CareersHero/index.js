import React, { useLayoutEffect, useRef } from "react";
import Section from "root/components/Section";
import Navbar from "root/components/Navbar";
import Typography from "root/components/Typography";
import Wave from "root/assets/images/wave-careers-hero.inline.svg";
import useScroll from "root/hooks/useScroll";

import "./index.css";

function CareersHero() {
  const scrollPosition = useScroll();
  const textRef = useRef();
  const textContainerRef = useRef();

  const textPath = textRef ? textRef.current : null;
  const textContainer = textContainerRef ? textContainerRef.current : null;

  useLayoutEffect(() => {
    const path = textPath
      ? document.querySelector(textPath.getAttribute("href"))
      : null;

    if (path) {
      const pathLength = path.getTotalLength();
      const rect = textContainer.getBoundingClientRect();
      const scrollPercent = rect.y / 600;

      updateTextPathOffset(scrollPercent * pathLength);
    }
  }, [scrollPosition]);

  function updateTextPathOffset(offset) {
    const initialPosition = 445;
    const endPosition = 156;

    if (scrollPosition < 250) {
      textPath.setAttribute("startOffset", offset - initialPosition);
    } else {
      textPath.setAttribute("startOffset", endPosition);
    }
  }

  return (
    <div styleName="root">
      <Navbar currentPage="careers" theme="primary" />
      <Section verticalSpacing={false}>
        <div styleName="title-desktopAndTablet">
          <div styleName="first-text">
            <Typography color="oxford-blue" weight="bold" variant="h1">
              Raising your
            </Typography>
          </div>
          <div styleName="second-text-tablet">
            <Typography color="oxford-blue" weight="bold" variant="h1">
              growth
            </Typography>
          </div>
          <div styleName="second-text">
            <svg
              id="text-container"
              ref={textContainerRef}
              viewBox="0 0 1337 123"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="text-curve"
                d="M1 5.00024C1 5.00024 103.311 -1.27267 227.5 62.5002C486.5 195.5 664 64.5 664 64.5C750.5 25.0001 916.5 -50.9996 1128 69.0004C1211.11 116.157 1336.5 117 1336.5 117"
                strokeWidth="0"
                stroke="black"
                fill="none"
              />

              <text>
                <textPath
                  id="text-path"
                  ref={textRef}
                  href="#text-curve"
                  startOffset="750"
                >
                  growth&nbsp;&nbsp;career
                </textPath>
              </text>
            </svg>
            <div styleName="wave-desktop">
              <div styleName="hide-wave">
                <Wave />
              </div>
              <div styleName="visible-wave">
                <Wave />
              </div>
            </div>
            <div styleName="hide-career-letter" />
          </div>
        </div>
        <div styleName="title-mobile">
          <Typography color="oxford-blue" weight="bold" variant="h1">
            Raising your growth
          </Typography>
        </div>
        <div styleName="wave">
          <Wave />
        </div>

        <div styleName="copy">
          <Typography color="oxford-blue" variant="body" weight="regular">
            We don’t care about titles, we care about passion and desire to
            grow. Collaboration and versatility are essential to us. We are very
            different from each other, and each one of us has a fundamental role
            in Aurora’s growth.
          </Typography>
        </div>
      </Section>
    </div>
  );
}

export default CareersHero;
