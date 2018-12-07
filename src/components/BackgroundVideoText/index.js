import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import map from "lodash/map";
import Typography from "../../components/Typography";

import "./index.css";

const fontHeight = 112;

export default class BackgroundVideoText extends Component {
  static propTypes = {
    device: PropTypes.string.isRequired,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    video: PropTypes.string.isRequired,
    poster: PropTypes.string,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
  };

  static defaultProps = {
    poster: "",
  };

  render() {
    const { device, labels, video, poster, width, height } = this.props;

    const rootStyles = classNames("root", {
      [device]: true,
    });

    return (
      <div styleName={rootStyles} style={{ width, height }}>
        <Typography weight="bold" variant="h1" fontFamily="meta-serif">
          <svg>
            <defs>
              <mask id="mask" x="0" y="0" width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" />
                <text x="0" y="0">
                  {map(labels, (label, index) => (
                    <tspan key={index} x="0" y={fontHeight * index}>
                      {label}
                    </tspan>
                  ))}
                </text>
              </mask>
            </defs>
            <rect width="100%" height="100%" />
          </svg>
          <rect width="100%" height="100%" />
          <video
            src={video}
            poster={poster}
            muted
            autoPlay
            loop
            playsInline
            preload
          />
        </Typography>
      </div>
    );
  }
}
