import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./index.css";

const Button = ({ handleClick, children, type, size, submit }) => {
  const rootStyles = classNames("root", {
    [type]: true,
    [size]: true,
  });

  return (
    <button
      styleName={rootStyles}
      onClick={handleClick}
      type={submit ? "submit" : "button"}
    >
      <div styleName="content">{children}</div>
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  type: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["small", "medium"]),
  children: PropTypes.node.isRequired,
  submit: PropTypes.bool,
};

Button.defaultProps = {
  handleClick: null,
  type: "primary",
  size: "small",
  submit: false,
};

export default Button;
