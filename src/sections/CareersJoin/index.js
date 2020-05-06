import React from "react";
import { Parallax } from "react-scroll-parallax";
import PropTypes from "prop-types";
import Typography from "root/components/Typography";
import Section from "root/components/Section";
import ParallaxEffect from "root/components/ParallaxEffect";
import WavyLink from "root/components/WavyLink";

import withQuery from "./withQuery";
import "./index.css";

const CareersJoin = ({ data }) => (
  <Section verticalSpacing={false}>
    <div styleName="title">
      <div styleName="parallax-container-wrapper">
        <div
          styleName="parallax-container"
          aria-label="Creating the best possible experiencies"
        >
          <div aria-hidden="true">
            <Parallax styleName="parallax" x={[-53, 75]} tagOuter="figure">
              <Typography color="klein-blue" weight="bold" variant="h2">
                Sounds like a team
              </Typography>
            </Parallax>

            <Parallax styleName="parallax" x={[40, -15]} tagOuter="figure">
              <Typography color="klein-blue" weight="bold" variant="h2">
                you want to grow with?
              </Typography>
            </Parallax>
          </div>
        </div>
      </div>

      <div styleName="parallax-fallback" aria-hidden="true">
        <Typography color="klein-blue" weight="bold" variant="h2">
          Sounds like a team you want to grow with?
        </Typography>
      </div>
    </div>
    <div styleName="content">
      <div styleName="text">
        <Typography variant="h3" color="oxford-blue" weight="medium">
          Why join us
        </Typography>
        <div styleName="you-will">
          <Typography color="oxford-blue">
            {`You will have a voice \nYou will take responsibility\nYou will learn a lot\nYou will find challenges`}
          </Typography>
        </div>
        <div styleName="link-container">
          <div styleName="link">
            <WavyLink target="self" url="/company" label="Know more">
              <Typography variant="small-body" weight="bold" color="klein-blue">
                Know more
              </Typography>
            </WavyLink>
          </div>
        </div>
      </div>

      <div styleName="image">
        <ParallaxEffect image={data.meeting.image.fluid} alt="meeting" />
        <div styleName="link-mobile">
          <a href="/company">
            <Typography variant="small-body" weight="bold" color="klein-blue">
              Know more
            </Typography>
          </a>
        </div>
      </div>
    </div>
  </Section>
);

CareersJoin.propTypes = {
  data: PropTypes.shape({
    meeting: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withQuery(CareersJoin);
