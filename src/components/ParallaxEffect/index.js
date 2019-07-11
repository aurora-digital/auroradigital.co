import React from "react";
import { ParallaxBanner, withController } from "react-scroll-parallax";
import Img from "gatsby-image/withIEPolyfill";

import PropTypes from "prop-types";

import "./index.css";

function ParallaxEffect({ image, parallaxAmount = 0.1, parallaxController }) {
  const handleLoad = () => {
    parallaxController.update();
  };

  return (
    <ParallaxBanner
      layers={[
        {
          children: (
            <Img
              fadeIn={false}
              styleName="parallax"
              style={{ height: "100%" }}
              fluid={image}
              onLoad={handleLoad}
            />
          ),
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
  parallaxController: PropTypes.object.isRequired,
  image: PropTypes.node.isRequired,
  parallaxAmount: PropTypes.number,
};

ParallaxEffect.defaultProps = {
  parallaxAmount: 0.1,
};

export default withController(ParallaxEffect);
