import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./index.css";

export default class Typography extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(["h1", "h2", "h3", "body", "small-body"]),
    fontFamily: PropTypes.oneOf(["visuelt"]),
    color: PropTypes.oneOf([
      "oxford-blue",
      "white",
      "klein-blue",
      "baby-blue",
      "alice-blue",
    ]),
    weight: PropTypes.oneOf(["regular", "medium", "bold"]),
  };

  static defaultProps = {
    variant: "body",
    fontFamily: "visuelt",
    color: "white",
    weight: "regular",
  };

  get textComponent() {
    const { variant } = this.props;

    switch (variant) {
      case "body":
        return "p";
      case "small-body":
        return "small";
      default:
        return variant;
    }
  }

  render() {
    const { children, variant, fontFamily, color, weight } = this.props;
    const styles = classNames({
      [variant]: true,
      [fontFamily]: true,
      [color]: true,
      [weight]: true,
    });
    const TextComponent = this.textComponent;

    return <TextComponent styleName={styles}>{children}</TextComponent>;
  }
}
