import React, { Component } from "react";
import PropTypes from "prop-types";
import map from "lodash/map";
import Typography from "../../components/Typography";

import "./index.css";

const fontHeight = 112;

export default class BackgroundVideoText extends Component {
  static propTypes = {
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
    const { labels, video, poster, width, height } = this.props;

    return (
      <div styleName="root" style={{ width, height }}>
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
          <video
            src={video}
            poster={poster}
            muted
            autoPlay
            loop
            playsInline
            preload="true"
          />
        </Typography>
      </div>
    );
  }
}
