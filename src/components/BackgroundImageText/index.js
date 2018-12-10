import React from "react";
import PropTypes from "prop-types";

import "./index.css";

const BackgroundImageText = ({ image, children }) => (
  <div style={{ backgroundImage: `url(${image})` }} styleName="root">
    {children}
  </div>
);

BackgroundImageText.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
};

export default BackgroundImageText;
