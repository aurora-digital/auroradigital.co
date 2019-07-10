import React from "react";
import { Parallax } from "react-scroll-parallax";

import Typography from "root/components/Typography";
import Section from "root/components/Section";

import "./index.css";

export default function HomeMission() {
  return (
    <Section verticalSpacing={false}>
      <div styleName="title">
        <div styleName="parallax-container-wrapper">
          <div
            styleName="parallax-container"
            aria-label="Creating the best possible experiencies"
          >
            <div aria-hidden="true">
              <Parallax styleName="parallax" x={[-20, 60]} tagOuter="figure">
                <Typography color="klein-blue" weight="bold" variant="h2">
                  Creating the best
                </Typography>
              </Parallax>

              <Parallax styleName="parallax" x={[55, -20]} tagOuter="figure">
                <Typography color="klein-blue" weight="bold" variant="h2">
                  possible experiences
                </Typography>
              </Parallax>
            </div>
          </div>
        </div>

        <div styleName="parallax-fallback" aria-hidden="true">
          <Typography color="klein-blue" weight="bold" variant="h2">
            Creating the best possible experiences
          </Typography>
        </div>
      </div>

      <div styleName="copy">
        <div styleName="above-text">
          Healthcare solutions are quite sensitive and need to be built with
          100% focus on the user’s needs, safety and privacy. We&nbsp;work
          alongside our customers, from research to user-testing, to build
          excellent software.
        </div>
        <div styleName="under-text">
          <Typography color="oxford-blue">
            Healthcare solutions are quite sensitive and need to be built with
            100% focus on the user’s needs, safety and privacy. We&nbsp;work
            alongside our customers, from research to user-testing, to build
            excellent software.
          </Typography>
        </div>
      </div>
    </Section>
  );
}
