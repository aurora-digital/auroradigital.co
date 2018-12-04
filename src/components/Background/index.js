import React from "react";
import PropTypes from "prop-types";

const Background = ({ children, image }) => (
  <div
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
  >
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
