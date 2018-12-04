import React from "react";
import PropTypes from "prop-types";

import "./index.css";

const Background = ({ children, image }) => (
  <div
    styleName="root"
    style={{
      backgroundImage: `url(${image})`,
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
