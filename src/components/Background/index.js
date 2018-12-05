import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

import "./index.css";

const imageContainerStyle = {
  position: `absolute`,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  height: "100%",
  width: "100%",
  backgroundColor: "#503875",
  zIndex: -1,
};

const imageStyle = { opacity: 0.9, mixBlendMode: "normal" };

const Background = ({ children, image }) => (
  <div styleName="root">
    <Img
      styleName="background-image"
      style={imageContainerStyle}
      imgStyle={imageStyle}
      fluid={image}
      critical
    />
    {children}
  </div>
);

Background.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Background.defaultProps = {
  image: false,
};

export default Background;
