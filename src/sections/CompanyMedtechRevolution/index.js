import React from "react";
import Section from "root/components/Section";
import FadeUpOnScroll from "root/components/FadeUpOnScroll";
import Typography from "root/components/Typography";
import PropTypes from "prop-types";
import Img from "gatsby-image/withIEPolyfill";
import ParallaxEffect from "root/components/ParallaxEffect";
import withQuery from "./withQuery";

import "./index.css";

const renderParallaxEffect = image => (
  <ParallaxEffect parallaxAmount={0.1}>
    <Img
      fadeIn={false}
      styleName="parallax"
      style={{ height: "100%" }}
      fluid={image}
    />
  </ParallaxEffect>
);

const CompanyMedtechRevolution = ({ data }) => (
  <Section verticalSpacing={false}>
    <div styleName="root">
      <FadeUpOnScroll>
        <div styleName="container-top">
          <div styleName="text">
            <Typography variant="body" color="oxford-blue">
              We want to be a part of the new medtech revolution, we want
              software to be accessible and readily available to everyone in the
              world.
            </Typography>
          </div>
          <div styleName="right-image">
            {renderParallaxEffect(data.teamtalk.image.fluid)}
          </div>
        </div>
      </FadeUpOnScroll>

      <FadeUpOnScroll>
        <div styleName="container-bottom">
          <div styleName="left-image">
            {renderParallaxEffect(data.teamwork.image.fluid)}
          </div>
          <div styleName="text">
            <Typography variant="body" color="oxford-blue">
              Most importantly, we want technology to improve people&apos;s
              lives, guiding them to a healthier and more sustainable lifestyle.
            </Typography>
          </div>
        </div>
      </FadeUpOnScroll>
    </div>
  </Section>
);

CompanyMedtechRevolution.propTypes = {
  data: PropTypes.shape({
    teamtalk: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    teamwork: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withQuery(CompanyMedtechRevolution);
