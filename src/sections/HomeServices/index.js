import React from "react";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import asterisk from "root/assets/images/asterisk.svg";
import designImg from "root/assets/images/design.svg";
import developmentImg from "root/assets/images/development.svg";

import "./index.css";

const HomeServices = () => (
  <Section>
    <div styleName="title">
      <Typography variant="h2" color="dark-blue" fontFamily="meta-serif">
        What works best for your project
      </Typography>
    </div>
    <div styleName="services-container">
      <div styleName="services">
        <div styleName="service-type">
          <img src={asterisk} alt="asterisk" />
          <div styleName="type">
            <Typography variant="h3" color="dark-blue">
              Design
            </Typography>
          </div>
        </div>
        <div styleName="service-description">
          <div styleName="image">
            <img src={designImg} alt="design" />
          </div>

          <div styleName="description-design">
            <Typography variant="body" color="dark-blue">
              Research & Strategy Brand Identity Product Design User Testing
            </Typography>
          </div>
        </div>
      </div>
      <div styleName="services">
        <div styleName="service-type">
          <img src={asterisk} alt="asterisk" />
          <div styleName="type">
            <Typography variant="h3" color="dark-blue">
              Development
            </Typography>
          </div>
        </div>
        <div styleName="service-description">
          <div styleName="image">
            <img src={developmentImg} alt="development" />
          </div>

          <div styleName="description-development">
            <Typography variant="body" color="dark-blue">
              Hosting Solutions Software Development Technology Implementation
              System Integration
            </Typography>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default HomeServices;
