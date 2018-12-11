import React, { Component } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import classNames from "classnames/bind";

import "./index.css";

const breakpointMobile = 768;

export default class Background extends Component {
  static propTypes = {
    image: PropTypes.shape({}).isRequired,
    children: PropTypes.node.isRequired,
    blendMode: PropTypes.oneOf(["normal", "difference"]),
    color: PropTypes.oneOf(["light-blue", "lavender"]),
    maxWidth: PropTypes.bool,
    video: PropTypes.string,
    poster: PropTypes.string,
  };

  static defaultProps = {
    blendMode: "difference",
    color: "light-blue",
    maxWidth: false,
    video: "",
    poster: "",
  };

  state = {
    width: undefined,
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  };

  updateDimensions = () => {
    this.setState({ width: document.documentElement.clientWidth });
  };

  renderBackground = () => {
    const { width } = this.state;
    const { video, image, poster } = this.props;

    if (video && width > breakpointMobile) {
      return (
        <video
          styleName="video"
          src={video}
          poster={poster}
          muted
          autoPlay
          loop
          playsInline
          preload
        />
      );
    }

    return <Img styleName="image" fluid={image} critical />;
  };

  render() {
    const { children, maxWidth, color, blendMode } = this.props;

    const rootClassnames = classNames("root", { "max-width": maxWidth });
    const classnames = classNames("rect", {
      [`color-${color}`]: true,
      [`blend-${blendMode}`]: true,
    });

    return (
      <div styleName={rootClassnames}>
        <div styleName={classnames} />
        {this.renderBackground()}

        {children}
      </div>
    );
  }
}
