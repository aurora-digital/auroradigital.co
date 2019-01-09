import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "root/components/Link";

import "./index.css";

export default class Contact extends Component {
  static propTypes = {
    underlineColor: PropTypes.oneOf(["light-blue", "dark-blue", "white"]),
    hover: PropTypes.bool,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    underlineColor: "white",
    hover: false,
  };

  render() {
    const { underlineColor, hover, children } = this.props;

    return (
      <Link
        internal={false}
        underlineColor={underlineColor}
        hover={hover}
        to="mailto:contact@svhealth.io"
      >
        {children}
      </Link>
    );
  }
}
