import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.css";

export default class Background extends Component {
  static propTypes = {
    backgroundChildren: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { backgroundChildren, children } = this.props;

    return (
      <div styleName="root">
        <div styleName="background" aria-hidden="true">
          {backgroundChildren}
        </div>

        <div styleName="children">{children}</div>
      </div>
    );
  }
}
