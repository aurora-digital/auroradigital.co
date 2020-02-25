import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";

import useScrollingDetector from "./useScrollingDetector";

import "./index.css";

function WavyLink({ url, children, label, animate }) {
  const [ref, inView] = useInView();
  const isScrolling = useScrollingDetector();

  const waveStyles = classNames("wave", {
    moving: isScrolling && inView && animate,
  });
  const waveDarkStyles = classNames("wave darker", {
    moving: isScrolling && inView && animate,
  });

  return (
    <div styleName="root" ref={ref}>
      {url ? (
        <a
          styleName="children"
          rel="noopener noreferrer"
          target="_blank"
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

WavyLink.propTypes = {
  url: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  animate: PropTypes.bool,
};

WavyLink.defaultProps = {
  url: null,
  label: "",
  animate: true,
  children: null,
};

export default WavyLink;
