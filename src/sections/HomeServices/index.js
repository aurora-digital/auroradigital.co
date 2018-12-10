import React from "react";
import Section from "root/components/Section";
import Link from "gatsby-link";
import Typography from "root/components/Typography";
import Button from "root/components/Button";
import designImg from "root/assets/images/design.svg";
import developmentImg from "root/assets/images/development.svg";
import Service from "root/components/Service";

import "./index.css";

const designServices = [
  "Research & Strategy",
  "Brand Identity",
  "Product Design",
  "User Testing",
];

const developmentServices = [
  "Hosting Solutions",
  "Software Development",
  "Technology Implementation",
  "System Integration",
];

const HomeServices = () => (
  <Section>
    <div styleName="title">
      <Typography variant="h2" color="dark-blue" fontFamily="meta-serif">
        What works best for your project
      </Typography>
    </div>

    <div styleName="services-container">
      <Service
        serviceName="design"
        image={designImg}
        specificServices={designServices}
      />

      <Service
        serviceName="development"
        image={developmentImg}
        specificServices={developmentServices}
      />

      <Link to="/services" styleName="button">
        <Button type="secondary">
          <Typography color="light-blue" fontFamily="meta-serif" weight="bold">
            View services
          </Typography>
        </Button>
      </Link>
    </div>
  </Section>
);

export default HomeServices;
