import React from "react";
import PropTypes from "prop-types";
import Typography from "root/components/Typography";
import classNames from "classnames";

import "./index.css";

const Button = ({ handleClick, children, disabled, type }) => {
  const styles = classNames("root", {
    disabled,
  });

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      disabled={disabled}
      styleName={styles}
      onClick={handleClick}
      type={type}
    >
      <Typography variant="small-body" color="white">
        {children}
      </Typography>
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit"]),
};

Button.defaultProps = {
  handleClick: null,
  disabled: false,
  type: "button",
};

export default Button;
