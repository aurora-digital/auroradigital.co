import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import "./index.css";

export default class Typography extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(["h1", "h2", "h3", "body"]),
    fontFamily: PropTypes.oneOf(["meta", "meta-serif"]),
    color: PropTypes.oneOf(["dark-blue", "white", "light-blue", "lavender"]),
    weight: PropTypes.oneOf(["regular", "bold"]),
    underline: PropTypes.bool,
    underlineColor: PropTypes.oneOf(["light-blue", "white"]),
  };

  static defaultProps = {
    variant: "body",
    fontFamily: "meta",
    color: "white",
    weight: "regular",
    underline: false,
    underlineColor: "white",
  };

  render() {
    const {
      children,
      variant,
      fontFamily,
      color,
      weight,
      underline,
      underlineColor,
    } = this.props;
    const styles = classNames({
      [variant]: true,
      [fontFamily]: true,
      [color]: true,
      [weight]: true,
      [`underline-${underlineColor}`]: underline,
    });
    const TextComponent = variant === "body" ? "p" : variant;

    return <TextComponent styleName={styles}>{children}</TextComponent>;
  }
}
