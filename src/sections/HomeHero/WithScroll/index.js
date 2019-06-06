import React, { useLayoutEffect } from "react";
import { withController } from "react-scroll-parallax";
import { Controller, Scene } from "react-scrollmagic";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

import Section from "root/components/Section";
import Navbar from "root/components/Navbar";
import Typography from "root/components/Typography";

import "./index.css";
import scrollTo from "./scrollTo";

function HomeHeroWithScroll({ parallaxController }) {
  const [ref, inView] = useInView();
  const waveStyles = classNames("wave", { animate: true });

  if (parallaxController && !inView) parallaxController.update();

  useLayoutEffect(() => {
    const height = document.body.offsetHeight;

    scrollTo(height * 0.08, 2000);
  }, []);

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
                    <div>
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
                  </div>

                  <div styleName="copy">
                    <Typography color="baby-blue">
                      We design and develop thoughtful web and mobile healthcare
                      solutions, accessible to anyone, anywhere, at anytime.
                    </Typography>
                  </div>

                  <div styleName="overlay">
                    <div styleName={waveStyles} />
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

export default withController(HomeHeroWithScroll);
