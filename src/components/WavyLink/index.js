import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";
import { get } from "lodash";

import useScrollDirection from "root/hooks/useScrollDirection";

import "./index.css";

function WavyLink({ url, children }) {
  const [ref, inView] = useInView();
  const scrollDirection = useScrollDirection();

  const waveStyles = classNames("wave", {
    moving: get(scrollDirection, "velocity.y") !== 0 && inView,
  });
  const waveDarkStyles = classNames("wave darker", {
    moving: get(scrollDirection, "velocity.y") !== 0 && inView,
  });

  return (
    <div styleName="root" ref={ref}>
      <a styleName="children" href={url}>
        {children}
      </a>

      <div styleName="wave-wrapper">
        <div styleName={waveStyles} />

        <div styleName={waveDarkStyles} />
      </div>
    </div>
  );
}

WavyLink.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default WavyLink;
