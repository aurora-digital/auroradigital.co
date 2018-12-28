import React from "react";
import PropTypes from "prop-types";
import Particles from "react-particles-js";
import images from "./images";

const ParticlesClass = ({ height }) => (
  <Particles
    width="100%"
    height={height}
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

ParticlesClass.propTypes = {
  height: PropTypes.string.isRequired,
};

export default ParticlesClass;
