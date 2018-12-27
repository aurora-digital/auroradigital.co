import React, { Component } from "react";
import PropTypes from "prop-types";
import withWindowDimensions from "root/containers/withWindowDimensions";

import Typography from "../../components/Typography";

import "./index.css";

const breakpointMobile = 768;

@withWindowDimensions
export default class BackgroundVideoText extends Component {
  static propTypes = {
    width: PropTypes.number,
    label: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    poster: PropTypes.string,
  };

  static defaultProps = {
    poster: "",
    width: null,
  };

  state = {
    videoHeight: null,
    videoWidth: null,
  };

  componentDidMount = () => {
    this.setState({
      videoHeight: `${this.title.clientHeight}px`,
      videoWidth: `${this.title.clientWidth}px`,
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.width !== this.props.width || nextState !== this.state) {
      if (nextProps.width !== this.props.width) {
        this.setState({
          videoHeight: `${this.title.clientHeight}px`,
          videoWidth: `${this.title.clientWidth}px`,
        });
      }

      return true;
    }

    return false;
  }

  handleRef = element => {
    this.title = element;
  };

  render() {
    const { width, label, poster, video } = this.props;

    if (width >= breakpointMobile) {
      return (
        <div
          styleName="root"
          style={{
            width: this.state.videoWidth,
            height: this.state.videoHeight,
          }}
        >
          <div styleName="title" ref={this.handleRef}>
            <Typography weight="bold" variant="h1" fontFamily="meta-serif">
              {label}
            </Typography>
          </div>
          <video
            src={video}
            poster={poster}
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            type="video/mp4"
          />
        </div>
      );
    }

    return (
      <div styleName="root">
        <div
          styleName="title"
          style={{
            backgroundImage: `url(${poster})`,
          }}
          ref={this.handleRef}
        >
          <Typography weight="bold" variant="h1" fontFamily="meta-serif">
            {label}
          </Typography>
        </div>
      </div>
    );
  }
}
