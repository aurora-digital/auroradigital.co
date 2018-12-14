import React, { Component } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import classNames from "classnames/bind";
import VisibilitySensor from "react-visibility-sensor";
import withWindowDimensions from "root/containers/withWindowDimensions";

import "./index.css";

const breakpointMobile = 768;

@withWindowDimensions
export default class Background extends Component {
  static propTypes = {
    width: PropTypes.number,
    image: PropTypes.shape({
      base64: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    children: PropTypes.node.isRequired,
    blendMode: PropTypes.oneOf(["normal", "difference"]),
    color: PropTypes.oneOf(["light-blue", "lavender"]),
    maxWidth: PropTypes.bool,
    video: PropTypes.string,
    name: PropTypes.string,
    autoPlay: PropTypes.bool,
  };

  static defaultProps = {
    width: null,
    blendMode: "difference",
    color: "light-blue",
    maxWidth: false,
    video: "",
    name: "element",
    autoPlay: false,
  };

  handleRef = name => element => {
    this[name] = element;
  };

  handleChange = isVisible => {
    if (!this.video) {
      return;
    }

    if (isVisible) {
      this.video.play();
    } else {
      this.video.pause();
    }
  };

  renderBackground = () => {
    const { video, image, autoPlay, width } = this.props;

    if (video && width > breakpointMobile) {
      return (
        <video
          style={{
            background: `url(${
              this.props.image.base64
            }) no-repeat center center fixed`,
            backgroundSize: "cover",
          }}
          styleName="video"
          src={video}
          poster={this.props.image.src}
          muted
          playsInline
          preload="auto"
          loop
          autoPlay={autoPlay}
          type="video/mp4"
          ref={this.handleRef("video")}
        />
      );
    }

    return <Img styleName="image" fluid={image} critical />;
  };

  render() {
    const { children, maxWidth, color, blendMode, name } = this.props;

    const rootClassnames = classNames("root", { "max-width": maxWidth });
    const classnames = classNames("rect", {
      [`color-${color}`]: true,
      [`blend-${blendMode}`]: true,
    });

    return (
      <VisibilitySensor
        partialVisibility
        scrollCheck
        onChange={this.handleChange}
      >
        <div styleName={rootClassnames} ref={this.handleRef(name)}>
          <div styleName={classnames} />
          {this.renderBackground()}

          {children}
        </div>
      </VisibilitySensor>
    );
  }
}
