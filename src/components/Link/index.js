import React from "react";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";
import classNames from "classnames";

import "./index.css";

export default class Link extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    internal: PropTypes.bool,
    to: PropTypes.string.isRequired,
    underlineColor: PropTypes.oneOf([
      "klein-blue",
      "oxford-blue",
      "white",
      "transparent",
      "baby-blue",
    ]),
    hover: PropTypes.bool,
    isActive: PropTypes.bool,
    label: PropTypes.string,
  };

  static defaultProps = {
    internal: true,
    underlineColor: "transparent",
    hover: false,
    isActive: false,
    label: "",
  };

  render() {
    const {
      children,
      internal,
      to,
      hover,
      isActive,
      underlineColor,
      label,
    } = this.props;
    const styles = classNames("root", {
      hover,
      "is-active": isActive,
      [`underline-${underlineColor}`]: true,
    });

    if (internal) {
      return (
        <GatsbyLink aria-label={label} to={to} styleName={styles}>
          {children}
        </GatsbyLink>
      );
    }

    return (
      <a styleName={styles} aria-label={label} href={to}>
        {children}
      </a>
    );
  }
}
