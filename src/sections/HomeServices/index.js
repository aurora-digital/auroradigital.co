import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image/withIEPolyfill";

import Section from "root/components/Section";
import Typography from "root/components/Typography";
import FadeUpOnScroll from "root/components/FadeUpOnScroll";
import ParallaxEffect from "root/components/ParallaxEffect";

import BackgroundWave from "root/assets/images/home-services-wave.inline.svg";
import BackgroundWaveMobile from "root/assets/images/home-services-wave-mobile.inline.svg";

import "./index.css";
import withQuery from "./withQuery";

function HomeServices({ data }) {
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

  return (
    <Section>
      <div styleName="root">
        <div styleName="images">
          <div styleName="image left-image">
            {renderParallaxEffect(data.left.image.fluid)}
          </div>
          <div styleName="image right-image">
            {renderParallaxEffect(data.right.image.fluid)}
          </div>
        </div>

        <div styleName="copy-working-together">
          <Typography variant="h3" weight="medium" color="oxford-blue">
            Working together to achieve your goals
          </Typography>

          <Typography color="oxford-blue">
            We’ll work alongside you from the early stages of product research
            and design to development and deployment, all while continuously
            delivering you product updates.
          </Typography>
        </div>

        <div styleName="copy-services">
          <div styleName="copy-services-background">
            <BackgroundWave />
          </div>

          <div styleName="copy-services-background-mobile">
            <BackgroundWaveMobile />
          </div>

          <div styleName="left-column">
            <div styleName="title" aria-hidden="true">
              <FadeUpOnScroll>
                <Typography weight="medium" color="baby-blue">
                  Design
                </Typography>
              </FadeUpOnScroll>
            </div>
            <ul styleName="list" aria-label="Design Services">
              <FadeUpOnScroll>
                <li>
                  <Typography>Research & Strategy</Typography>
                </li>
                <li>
                  <Typography>Brand Identity</Typography>
                </li>
                <li>
                  <Typography>Product Design</Typography>
                </li>
                <li>
                  <Typography>User Testing</Typography>
                </li>
              </FadeUpOnScroll>
            </ul>
          </div>

          <div styleName="right-column">
            <div styleName="title" aria-hidden="true">
              <FadeUpOnScroll>
                <Typography weight="medium" color="baby-blue">
                  Development
                </Typography>
              </FadeUpOnScroll>
            </div>
            <ul styleName="list" aria-label="Development Services">
              <FadeUpOnScroll>
                <li>
                  <Typography>Hosting Solutions</Typography>
                </li>
                <li>
                  <Typography>Software Development</Typography>
                </li>
                <li>
                  <Typography>Technology Implementation</Typography>
                </li>
                <li>
                  <Typography>System Integration</Typography>
                </li>
              </FadeUpOnScroll>
            </ul>
          </div>
        </div>

        <div styleName="copy-our-work">
          <div styleName="title">
            <Typography variant="h3" weight="medium" color="oxford-blue">
              Our work goes far beyond what you actually see
            </Typography>
          </div>

          <div styleName="copy">
            <Typography color="oxford-blue">
              We specialize in web-based products - from blazing fast websites
              to carefully crafted mobile-first web apps, our main goal is to
              use the power of the fantastic web technologies out there to give
              you the best work possible.
            </Typography>
          </div>
        </div>
      </div>
    </Section>
  );
}

HomeServices.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default withQuery(HomeServices);
