import React from "react";
import { Parallax } from "react-scroll-parallax";

import Typography from "root/components/Typography";
import Section from "root/components/Section";

import "./index.css";

export default function HomeMission() {
  return (
    <Section verticalSpacing={false}>
      <div styleName="root">
        <div styleName="title">
          <div styleName="parallax-container">
            <Parallax styleName="parallax" x={[-50, 20]} tagOuter="figure">
              <Typography color="klein-blue" weight="bold" variant="h1">
                Creating the best
              </Typography>
            </Parallax>

            <Parallax styleName="parallax" x={[20, -20]} tagOuter="figure">
              <Typography color="klein-blue" weight="bold" variant="h1">
                possible experience
              </Typography>
            </Parallax>
          </div>
        </div>

        <div styleName="parallax-fallback">
          <Typography color="klein-blue" weight="bold" variant="h1">
            Creating the best possible experience
          </Typography>
        </div>

        <div styleName="copy">
          <Typography color="oxford-blue" variant="h3">
            Healthcare solutions are quite sensitive and need to be built with
            100% focus on the user’s needs, safety and privacy. We work
            alongside our customers, from research to user-testing, to build
            excellent software.
          </Typography>
        </div>
      </div>
    </Section>
  );
}
