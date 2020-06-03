import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Typography from "root/components/Typography";
import updateDimensions from "root/hooks/useWindowDimensions";

import "./index.css";

const breakpointMobile = 800;

function HeroCopyElement() {
  const [seconds, setSeconds] = useState(0);
  const [position, setPosition] = useState(0);
  const dimensions = updateDimensions();
  const textPlaceholder = [
    { message: "For founders", title: "We materialize ideas" },
    { message: "For companies", title: "We are advisors" },
    { message: "For everyone", title: "We scale solutions" },
  ];
  const transitionMessage = {
    duration: 4.1,
    ease: "circOut",
    times: [0, 0.2, 0.75, 0.9, 1],
    delay: 0.2,
  };
  const transitionTitle = {
    yoyo: 1,
    duration: 0.5,
    ease: "easeInOut",
    repeatDelay: 1.2,
    delay: 1,
  };
  const transitionTitleMobile = {
    yoyo: 1,
    duration: 0.5,
    ease: "easeInOut",
    repeatDelay: 1.75,
    delay: 1,
  };
  const transitionLine = {
    duration: 0.75,
    ease: "linear",
    times: [0, 1],
  };
  const transitionLineMobile = {
    duration: 0.75,
    ease: "easeIn",
    times: [0, 1],
  };
  const initialTitle = { y: "84px" };

  function getClassName(place) {
    return position === place ? "line-klein-blue" : "line-baby-blue";
  }

  function display(place) {
    return position === place ? "block" : "none";
  }

  function animateMessage(place) {
    if (dimensions.width > breakpointMobile) {
      return position === place
        ? { x: [-117, 0, 0, 310, 310], opacity: [0, 1, 1, 0, 0] }
        : "";
    }

    return position === place
      ? {
          x: [-117, 0, 0, 0, 0],
          y: [0, 0, 0, 75, 75],
          opacity: [0, 1, 1, 1, 1],
        }
      : "";
  }

  function animateTitle(place) {
    return position === place ? { y: 0 } : "";
  }

  function reset(place) {
    setSeconds(place);
    setPosition(place);
  }

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      const newSeconds = seconds + 1;

      setSeconds(newSeconds);
      setPosition(newSeconds % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, [seconds, position]);

  function renderLine(transition, place) {
    let animateLine;

    if (dimensions.width > breakpointMobile) {
      animateLine =
        position === place ? { width: ["calc(15px)", "calc(117px)"] } : "";
    } else {
      animateLine =
        position === place ? { width: ["calc(10%)", "calc(100%)"] } : "";
    }

    return (
      <motion.div
        type="button"
        transition={transition}
        animate={animateLine}
        aria-label={`clickable info ${place}`}
        styleName={getClassName(place)}
        style={{ "--top": place }}
        onClick={() => reset(place)}
      />
    );
  }

  function renderDesktop() {
    return (
      <>
        <div styleName="copy-section">
          <div styleName="lines">
            {renderLine(transitionLine, 0)}
            {renderLine(transitionLine, 1)}
            {renderLine(transitionLine, 2)}
          </div>

          {textPlaceholder.map((text, index) => (
            <div
              key={`${text.message}_${text.title}`}
              styleName="message-content"
              style={{ display: display(index) }}
            >
              <motion.div
                styleName="message"
                transition={transitionMessage}
                animate={animateMessage(index)}
              >
                <Typography color="oxford-blue">{text.message}</Typography>
              </motion.div>

              <div styleName="hide-message" />

              <motion.div
                styleName="message-title"
                transition={transitionTitle}
                initial={initialTitle}
                animate={animateTitle(index)}
              >
                <Typography color="klein-blue" weight="bold" variant="h2">
                  {text.title}
                </Typography>
              </motion.div>

              <div styleName="hide-title" />
            </div>
          ))}

          <div styleName="hide-title" />
        </div>
      </>
    );
  }

  function renderMobile() {
    return (
      <>
        <div styleName="copy-section">
          <div styleName="lines">
            {renderLine(transitionLineMobile, 0)}
            {renderLine(transitionLineMobile, 1)}
            {renderLine(transitionLineMobile, 2)}
          </div>

          <div styleName="slider">
            {textPlaceholder.map((text, index) => (
              <div
                key={`${text.message}_${text.title}`}
                styleName="message-content"
                style={{ display: display(index) }}
              >
                <motion.div
                  styleName="message"
                  transition={{ ...transitionMessage, ease: "easeInOut" }}
                  animate={animateMessage(index)}
                >
                  <Typography color="oxford-blue">{text.message}</Typography>
                </motion.div>

                <div styleName="hide-message" />

                <motion.div
                  styleName="message-title"
                  transition={transitionTitleMobile}
                  initial={initialTitle}
                  animate={animateTitle(index)}
                >
                  <Typography color="klein-blue" weight="bold" variant="h2">
                    {text.title}
                  </Typography>
                </motion.div>

                <div styleName="hide-title" />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  return dimensions.width > breakpointMobile ? renderDesktop() : renderMobile();
}

export default HeroCopyElement;
