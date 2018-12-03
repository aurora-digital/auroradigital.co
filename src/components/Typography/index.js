import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import "./index.css";

export default class Typography extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(["h1", "h2", "body"]),
    fontFamily: PropTypes.oneOf(["meta", "meta-serif"]),
    color: PropTypes.oneOf(["dark-blue", "white"]),
    weight: PropTypes.oneOf(["regular", "bold"]),
  };

  static defaultProps = {
    variant: "p",
    fontFamily: "meta",
    color: "dark-blue",
    weight: "regular",
  };

  render() {
    const { children, variant, fontFamily, color, weight } = this.props;
    const styles = classNames({
      [variant]: true,
      [fontFamily]: true,
      [color]: true,
      [weight]: true,
    });
    const TextComponent = variant === "body" ? "p" : variant;

    return <TextComponent styleName={styles}>{children}</TextComponent>;
  }
}
