import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";
import { get } from "lodash";

import useScrollDirection from "root/hooks/useScrollDirection";

import "./index.css";

function WavyLink({ url, children, label, animate }) {
  const [ref, inView] = useInView();
  const scrollDirection = useScrollDirection();

  const waveStyles = classNames("wave", {
    moving: get(scrollDirection, "velocity.y") !== 0 && inView && animate,
  });
  const waveDarkStyles = classNames("wave darker", {
    moving: get(scrollDirection, "velocity.y") !== 0 && inView && animate,
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
