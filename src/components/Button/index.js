import React from "react";
import PropTypes from "prop-types";
import Typography from "root/components/Typography";

import "./index.css";

const Button = ({ handleClick, children }) => {
  return (
    <button styleName="root" onClick={handleClick} type="submit">
      <Typography variant="small-body" color="white">
        {children}
      </Typography>
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  handleClick: null,
};

export default Button;
