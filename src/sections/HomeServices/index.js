import React from "react";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
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
        key="design"
        serviceName="design"
        image={designImg}
        specificServices={designServices}
      />

      <Service
        key="development"
        serviceName="development"
        image={developmentImg}
        specificServices={developmentServices}
      />
    </div>
  </Section>
);

export default HomeServices;
