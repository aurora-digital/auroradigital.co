import React from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import { Controller, Scene } from "react-scrollmagic";

import Section from "root/components/Section";
import Navbar from "root/components/Navbar";
import Typography from "root/components/Typography";

import "./index.css";

function HomeHeroWithScroll() {
  const [ref, inView] = useInView();
  const waveStyles = classNames("wave", { animate: inView });

  return (
    <div ref={ref}>
      <Controller>
        <Scene duration={1500} triggerHook="0">
          {progress => (
            <div styleName="root" ref={ref}>
              <Navbar theme="secondary" />

              <Section verticalSpacing={false}>
                <div styleName="title">
                  <div styleName="parallax-container" aria-hidden="true">
                    <div>
                      <div
                        style={{
                          transform: `translate3d(${progress * 100}%, 0, 0)`,
                        }}
                      >
                        <Typography weight="bold" variant="h1">
                          Nurturing digital
                        </Typography>
                      </div>
                      <div
                        style={{
                          transform: `translate3d(${progress * -100}%, 0, 0)`,
                        }}
                      >
                        <Typography weight="bold" variant="h1">
                          healthcare
                        </Typography>
                      </div>
                    </div>
                  </div>

                  <div styleName="parallax-fallback" aria-hidden="true">
                    <Typography color="oxford-blue" weight="bold" variant="h1">
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
                        healthcare solutions, accessible to anyone, anywhere, at
                        anytime.
                      </Typography>
                    </div>
                  </Section>
                </div>
              </Section>
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
}

export default HomeHeroWithScroll;
