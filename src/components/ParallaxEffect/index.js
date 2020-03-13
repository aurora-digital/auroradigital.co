import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import Img from "gatsby-image/withIEPolyfill";

import PropTypes from "prop-types";

function ParallaxEffect({ image, parallaxAmount = 0.1, alt }) {
  return (
    <ParallaxBanner
      layers={[
        {
          children: <Img style={{ height: "100%" }} fluid={image} alt={alt} />,
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
  image: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  parallaxAmount: PropTypes.number,
};

ParallaxEffect.defaultProps = {
  parallaxAmount: 0.1,
};

export default ParallaxEffect;
