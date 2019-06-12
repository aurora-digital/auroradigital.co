import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { withController } from "react-scroll-parallax";
import { Controller, Scene } from "react-scrollmagic";
import classNames from "classnames";

import Section from "root/components/Section";
import Navbar from "root/components/Navbar";
import Typography from "root/components/Typography";

import useDetectJavascript from "root/hooks/useDetectJavascript";

import "./index.css";

function HomeHeroWithScroll({ parallaxController }) {
  const hasJavascript = useDetectJavascript();
  const [animate, setAnimate] = useState(false);
  const waveStyles = classNames("root", { animate });

  useLayoutEffect(() => {
    if (parallaxController && hasJavascript) parallaxController.update();

    if (!animate) setAnimate(true);
  });

  return (
    <div>
      <Controller>
        <Scene triggerHook="0" duration={2000} pin>
          {progress => (
            <div>
              <div styleName={waveStyles}>
                <Navbar theme="secondary" />
                <Section verticalSpacing={false}>
                  <div styleName="title-wrapper">
                    <div styleName="title">
                      <div
                        style={{
                          transform: `translateX(${progress * -100}%)`,
                        }}
                      >
                        <Typography weight="bold" variant="h1">
                          Nurturing digital healthcare
                        </Typography>
                      </div>
                    </div>
                  </div>

                  <div styleName="overlay">
                    <div styleName="wave" />

                    <Section verticalSpacing={false}>
                      <div styleName="copy">
                        <Typography color="baby-blue">
                          We design and develop thoughtful web and mobile
                          healthcare solutions, accessible to anyone, anywhere,
                          at anytime.
                        </Typography>
                      </div>
                    </Section>
                  </div>
                </Section>
              </div>
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
}

HomeHeroWithScroll.propTypes = {
  parallaxController: PropTypes.shape({}).isRequired,
};

export default withController(HomeHeroWithScroll);
