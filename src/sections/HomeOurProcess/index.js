import React from "react";
import PropTypes from "prop-types";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import ParallaxEffect from "root/components/ParallaxEffect";
import WavyLink from "root/components/WavyLink";
import { Parallax } from "react-scroll-parallax";

import withQuery from "./withQuery";

import "./index.css";

function HomeOurProcess({ data }) {
  return (
    <Section>
      <div>
        <div>
          <div styleName="parallax-container-wrapper">
            <div
              styleName="parallax-container"
              aria-label="Creating the best possible experiencies"
            >
              <div aria-hidden="true">
                <Parallax styleName="parallax" x={[-20, 60]} tagOuter="figure">
                  <Typography color="klein-blue" weight="bold" variant="h2">
                    Our process excels
                  </Typography>
                </Parallax>

                <Parallax styleName="parallax" x={[40, -20]} tagOuter="figure">
                  <Typography color="klein-blue" weight="bold" variant="h2">
                    when building products
                  </Typography>
                </Parallax>
              </div>
            </div>
          </div>

          <div styleName="parallax-fallback" aria-hidden="true">
            <Typography color="klein-blue" weight="bold" variant="h2">
              Our process excels when building products
            </Typography>
          </div>
        </div>

        <div styleName="content">
          <div styleName="text">
            <Typography variant="h3" color="oxford-blue" weight="medium">
              It allows us to
            </Typography>
            <div styleName="description">
              <Typography color="oxford-blue">
                {
                  "Unpack the complexity\nReduce the risk of investment\nFocus on what matters\nBe resourceful"
                }
              </Typography>
            </div>
            <div styleName="link-container">
              <div styleName="link">
                <WavyLink target="self" url="/company" label="Know more">
                  <Typography
                    variant="small-body"
                    weight="bold"
                    color="klein-blue"
                  >
                    Get to know us
                  </Typography>
                </WavyLink>
              </div>
            </div>
          </div>
          <div styleName="image">
            <ParallaxEffect
              image={data.designsprint.image.fluid}
              alt="elders using sioslife"
            />
            <div styleName="link-mobile">
              <a href="/company">
                <Typography
                  variant="small-body"
                  weight="bold"
                  color="klein-blue"
                >
                  Get to know us
                </Typography>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

HomeOurProcess.propTypes = {
  data: PropTypes.object.isRequired,
};

export default withQuery(HomeOurProcess);
