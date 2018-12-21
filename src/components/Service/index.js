import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import Typography from "root/components/Typography";
import capitalize from "lodash/capitalize";

import "./index.css";

export default class Service extends React.Component {
  static propTypes = {
    serviceName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    specificServices: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  componentDidMount = () => {
    const { serviceName } = this.props;
    const options = {
      paths: `#circle-path-${serviceName}`,
      color: "#5764F7",
      intensity: 0.7,
      pointsNumber: 8,
      fastness: 1 / 40,
      mouseIncidence: 20,
      maxDistance: 40,
    };

    const Jelly = require("jelly.js"); // eslint-disable-line

    this[`jelly-${serviceName}`] = new Jelly(
      `#jelly-canvas-${serviceName}`,
      options,
    );
  };

  render() {
    const { serviceName, image, specificServices } = this.props;

    return (
      <div styleName="services">
        <div styleName="link">
          <Link to="/services" styleName="button">
            <Typography
              color="light-blue"
              fontFamily="meta-serif"
              weight="bold"
            >
              View services
            </Typography>
          </Link>
        </div>
        <div styleName="service-description">
          <div styleName="shape-container">
            <svg
              height="220"
              width="220"
              viewBox="0 0 220 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              styleName="svg"
            >
              <path
                id={`circle-path-${serviceName}`}
                d="M87.6203 3.86589C170.068 -22.4362 267.077 91.1204 184.67 175.467C140.801 220.37 69.7691 191.213 22.4752 148.651C-24.8187 106.089 5.17273 30.168 87.6203 3.86589Z"
              />
            </svg>

            <canvas id={`jelly-canvas-${serviceName}`} styleName="canvas" />

            <img styleName="image" src={image} alt={serviceName} />
          </div>

          <div styleName="description">
            <div styleName="type">
              <Typography variant="body" weight="bold" color="dark-blue">
                {capitalize(serviceName)}
              </Typography>
            </div>
            <div styleName="description-services">
              {specificServices.map(specificService => (
                <Typography
                  variant="body"
                  color="dark-blue"
                  key={specificService}
                >
                  {specificService}
                </Typography>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
