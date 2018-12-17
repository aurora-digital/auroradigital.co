import React from "react";
import PropTypes from "prop-types";
import GatsbyLink from "gatsby-link";
import classNames from "classnames/dedupe";

import "./index.css";

export default class Link extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
    underlineColor: PropTypes.oneOf(["light-blue", "dark-blue", "white"]),
    hover: PropTypes.bool,
    isActive: PropTypes.bool,
  };

  static defaultProps = {
    underlineColor: "white",
    hover: false,
    isActive: false,
  };

  render() {
    const { children, to, hover, isActive, underlineColor } = this.props;
    const styles = classNames("root", {
      hover,
      "is-active": isActive,
      [`underline-${underlineColor}`]: true,
    });

    return (
      <GatsbyLink to={to} styleName={styles}>
        {children}
      </GatsbyLink>
    );
  }
}
