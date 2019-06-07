import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { withController } from "react-scroll-parallax";
import { Controller, Scene } from "react-scrollmagic";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import skrolltop from "skrolltop";

import Section from "root/components/Section";
import Navbar from "root/components/Navbar";
import Typography from "root/components/Typography";

import easing from "./easing";

import "./index.css";

function HomeHeroWithScroll({ parallaxController }) {
  const [scrolled, setScrolled] = useState(false);
  const [ref, inView] = useInView();
  const waveStyles = classNames("wave", { animate: inView });

  if (parallaxController && !inView) parallaxController.update();

  useLayoutEffect(
    () => {
      const height = document.body.offsetHeight;

      if (!inView || scrolled) return;

      skrolltop.scrollTo({
        element: window,
        to: height * 0.08,
        duration: 1000,
        easing,
      });

      setScrolled(true);
    },
    [inView],
  );

  return (
    <div ref={ref}>
      <Controller>
        <Scene triggerHook="0" duration={1000} pin enabled={inView}>
          {progress => (
            <div>
              <div styleName="root">
                <Navbar theme="secondary" />
                <Section verticalSpacing={false}>
                  <div styleName="title-wrapper">
                    <div
                      styleName="title"
                      style={{
                        transform: `translateX(${progress * -100}%)`,
                      }}
                    >
                      <Typography weight="bold" variant="h1">
                        Nurturing digital healthcare
                      </Typography>
                    </div>
                  </div>

                  <div styleName="overlay">
                    <div styleName={waveStyles} />

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
