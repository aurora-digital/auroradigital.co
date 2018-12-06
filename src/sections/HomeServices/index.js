import React from "react";
import Section from "root/components/Section";
import Link from "gatsby-link";
import Typography from "root/components/Typography";
import Button from "root/components/Button";
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
          <img styleName="asterisk" src={asterisk} alt="asterisk" />
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

          <div styleName="description">
            <Typography variant="body" color="dark-blue">
              <p>Research & Strategy</p>
              <p>Brand Identity</p>
              <p>Product Design</p>
              <p>User Testing</p>
            </Typography>
          </div>
        </div>
      </div>
      <div styleName="services">
        <div styleName="service-type">
          <img styleName="asterisk" src={asterisk} alt="asterisk" />
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

          <div styleName="description">
            <Typography variant="body" color="dark-blue">
              <p>Hosting Solutions</p>
              <p>Software Development</p>
              <p>Technology Implementation</p>
              <p>System Integration</p>
            </Typography>
          </div>
        </div>
      </div>
      <div styleName="services">
        <Link to="/services" styleName="button">
          <Button type="secondary">
            <Typography
              color="light-blue"
              fontFamily="meta-serif"
              weight="bold"
            >
              View services
            </Typography>
          </Button>
        </Link>
      </div>
    </div>
  </Section>
);

export default HomeServices;
