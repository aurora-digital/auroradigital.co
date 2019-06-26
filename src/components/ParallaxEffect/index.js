import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

import PropTypes from "prop-types";

export default function ParallaxEffect({ children, parallaxAmount }) {
  return (
    <ParallaxBanner
      layers={[
        {
          children: <div style={{ height: "100%" }}>{children}</div>,
          amount: parallaxAmount,
        },
      ]}
      style={{
        height: "100%",
      }}
    />
  );
}

ParallaxEffect.propTypes = {
  children: PropTypes.node.isRequired,
  parallaxAmount: PropTypes.number,
};

ParallaxEffect.defaultProps = {
  parallaxAmount: 0.2,
};
