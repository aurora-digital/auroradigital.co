import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import classNames from "classnames";

import "./index.css";

const lavenderColor = "#503875";

const imageContainerStyle = {
  position: `absolute`,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: lavenderColor,
  zIndex: -1,
};

const imageStyle = { opacity: 0.9, mixBlendMode: "normal" };

const Background = ({ children, image, color, blendMode, maxWidth }) => {
  const classnames = classNames("background-image", {
    [`color-${color}`]: true,
    [`blend-${blendMode}`]: true,
  });

  const rootClassnames = classNames("root", { "max-width": maxWidth });

  return (
    <div styleName={rootClassnames}>
      <Img
        styleName={classnames}
        style={imageContainerStyle}
        imgStyle={imageStyle}
        fluid={image}
        critical
      />
      {children}
    </div>
  );
};

Background.propTypes = {
  image: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
  blendMode: PropTypes.oneOf(["normal", "difference"]),
  color: PropTypes.oneOf(["light-blue", "lavender", "magenta"]),
  maxWidth: PropTypes.bool,
};

Background.defaultProps = {
  blendMode: "difference",
  color: "light-blue",
  maxWidth: false,
};

export default Background;
