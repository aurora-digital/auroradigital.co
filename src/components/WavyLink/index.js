import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";

import useScrollingDetector from "./useScrollingDetector";

import "./index.css";

function WavyLink({ url, children, label, animate, target, position }) {
  const [ref, inView] = useInView();
  const [hover, setHover] = useState("0");
  const isScrolling = useScrollingDetector();

  const waveStyles = classNames("wave", {
    moving: isScrolling && inView && animate,
  });
  const waveDarkStyles = classNames("wave darker", {
    moving: isScrolling && inView && animate,
  });
  const waveDarkWidth = "578px";

  function renderRight() {
    return (
      <div styleName="root" ref={ref}>
        {url ? (
          <a
            styleName="children"
            rel="noopener noreferrer"
            target={`_${target}`}
            href={url}
            aria-label={label}
          >
            {children}
          </a>
        ) : (
          <span styleName="children">{children}</span>
        )}

        <div styleName="wave-wrapper">
          <div styleName={waveStyles} />

          <div styleName={waveDarkStyles} />
        </div>
      </div>
    );
  }

  function renderLeft() {
    return (
      <div styleName="root-left" ref={ref}>
        <div styleName="wave-wrapper">
          <div styleName={waveStyles} />

          <div styleName={waveDarkStyles} style={{ maxWidth: hover }} />
        </div>

        {url ? (
          <a
            styleName="children-left"
            rel="noopener noreferrer"
            target={`_${target}`}
            href={url}
            aria-label={label}
            onMouseEnter={() => setHover(waveDarkWidth)}
            onMouseLeave={() => setHover("0")}
          >
            {children}
          </a>
        ) : (
          <span
            styleName="children-left"
            onMouseEnter={() => setHover(waveDarkWidth)}
            onMouseLeave={() => setHover("0")}
          >
            {children}
          </span>
        )}
      </div>
    );
  }

  return position === "right" ? renderRight() : renderLeft();
}

WavyLink.propTypes = {
  url: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  animate: PropTypes.bool,
  target: PropTypes.oneOf(["blank", "self"]),
  position: PropTypes.oneOf(["right", "left"]),
};

WavyLink.defaultProps = {
  url: null,
  label: "",
  animate: true,
  children: null,
  target: "self",
  position: "right",
};

export default WavyLink;
