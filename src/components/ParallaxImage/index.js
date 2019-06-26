import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

import PropTypes from "prop-types";

export default function ParallaxImage({ children, parallaxAmount }) {
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

ParallaxImage.propTypes = {
  children: PropTypes.node.isRequired,
  parallaxAmount: PropTypes.number,
};

ParallaxImage.defaultProps = {
  parallaxAmount: 0.2,
};
