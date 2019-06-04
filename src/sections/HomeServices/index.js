import React from "react";

import Section from "root/components/Section";
import Typography from "root/components/Typography";

import BackgroundWave from "root/assets/images/home-services-wave.inline.svg";
import BackgroundWaveMobile from "root/assets/images/home-services-wave-mobile.inline.svg";

import "./index.css";

export default function HomeServices() {
  return (
    <Section>
      <div styleName="root">
        <div styleName="images">
          <div styleName="first-image" />
          <div styleName="second-image" />
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
            <div styleName="title">
              <Typography weight="bold" color="baby-blue">
                Design
              </Typography>
            </div>
            <div styleName="list">
              <Typography>Research & Strategy</Typography>
              <Typography>Brand Identity</Typography>
              <Typography>Product Design</Typography>
              <Typography>User Testing</Typography>
            </div>
          </div>

          <div styleName="right-column">
            <div styleName="title">
              <Typography weight="bold" color="baby-blue">
                Devolpment
              </Typography>
            </div>
            <div styleName="list">
              <Typography>Hosting Solution</Typography>
              <Typography>Software Development</Typography>
              <Typography>Technology Implementation</Typography>
              <Typography>System Integration</Typography>
            </div>
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
