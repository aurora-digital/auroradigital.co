import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.css";

export default class Contact extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;

    return (
      <a styleName="root" href="mailto:contact@svhealth.io">
        {children}
      </a>
    );
  }
}
