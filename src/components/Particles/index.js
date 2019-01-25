import React, { Component } from "react";
import PropTypes from "prop-types";
import Particles from "react-particles-js";
import withWindowDimensions from "root/containers/withWindowDimensions";
import images from "./images";

const breakpointMobile = 768;
const breakpointDesktop = 1268;

@withWindowDimensions
class ParticlesClass extends Component {
  static propTypes = {
    width: PropTypes.number,
  };

  static defaultProps = {
    width: null,
  };

  render() {
    const { width } = this.props;

    let particlesHeight = 1150;

    if (width < breakpointDesktop) {
      particlesHeight = 1000;
    }

    if (width < breakpointMobile) {
      return null;
    }

    return (
      <Particles
        width="100%"
        height={particlesHeight}
        params={{
          particles: {
            number: {
              value: images.length || 0,
              density: {
                enable: false,
                value_area: 800,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 1,
              out_mode: "out",
              random: true,
              attract: {
                enable: true,
              },
            },
            shape: {
              type: ["images"],
              images,
            },
            color: {
              value: "#9C447F",
            },
            opacity: {
              value: 1,
              anim: {
                enable: false,
                speed: 3,
                opacity_min: 0.5,
              },
            },
            size: {
              value: 70,
              random: false,
              anim: {
                enable: false,
                speed: 4,
                size_min: 100,
                sync: false,
              },
            },
          },
          retina_detect: false,
        }}
      />
    );
  }
}
export default ParticlesClass;
