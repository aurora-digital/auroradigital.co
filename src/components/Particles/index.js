import React from "react";
import ReactParticles from "react-particles-js";
import useWindowDimensions from "root/hooks/useWindowDimensions";
import images from "./images";

const breakpointMobile = 768;
const breakpointDesktop = 1268;

export default function Particles() {
  const { width } = useWindowDimensions();

  let particlesHeight = 1150;

  if (width < breakpointDesktop) {
    particlesHeight = 1000;
  }

  if (width < breakpointMobile) {
    return null;
  }

  return (
    <ReactParticles
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
