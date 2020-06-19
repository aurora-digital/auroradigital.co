import React from "react";
import PropTypes from "prop-types";
import { Parallax } from "react-scroll-parallax";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import BackgroundWave from "root/assets/images/home-working-together-wave.inline.svg";
import BackgroundWaveMobile from "root/assets/images/home-working-together-wave-mobile.inline.svg";
import ParallaxEffect from "root/components/ParallaxEffect";

import withQuery from "./withQuery";

import "./index.css";

const renderContent = () => {
  return (
    <div styleName="content">
      <div styleName="title">
        <Typography weight="medium" variant="h3">
          {`Working together\nto achieve your goals`}
        </Typography>
      </div>
      <div styleName="description">
        <Typography>
          Our mission is to build digital healthcare solutions that fuel an
          easier and healthier life for everyone.
        </Typography>
      </div>
    </div>
  );
};

function HomeWorkingTogether({ data }) {
  return (
    <Section verticalSpacing={false}>
      <div styleName="root">
        <Parallax y={[0, -40]}>
          <div styleName="background">
            <BackgroundWave />
            {renderContent()}
          </div>

          <div styleName="background-mobile">
            <BackgroundWaveMobile />
            {renderContent()}
          </div>

          <noscript>
            <div styleName="whitespace-noscript" />
          </noscript>
        </Parallax>
        <div styleName="container-images">
          <div styleName="left">
            <div styleName="image-left">
              <ParallaxEffect
                image={data.image1.image.fluid}
                alt="another lyftonomie pill bottle"
              />
            </div>
          </div>
          <div styleName="right">
            <div styleName="image-right">
              <ParallaxEffect
                image={data.image2.image.fluid}
                alt="another lyftonomie pill bottle"
              />
            </div>
          </div>
        </div>
        <div styleName="we-deliver">
          <Typography variant="h3" color="oxford-blue">
            {" We deliver value in a fast\n and sustainable way"}
          </Typography>
          <div styleName="description">
            <Typography color="oxford-blue">
              We invest time upfront to understand the full scope of your
              requirements, implement solutions from conception to production
              and stand beside you throughout the journey.
            </Typography>
          </div>
        </div>
      </div>
    </Section>
  );
}

HomeWorkingTogether.propTypes = {
  data: PropTypes.object.isRequired,
};

export default withQuery(HomeWorkingTogether);
