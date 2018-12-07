import React from "react";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import Advisors from "root/components/Advisors";

import "./index.css";

const CompanyAdvisorsSection = () => (
  <Section separator>
    <div styleName="left">
      <Typography variant="h2" color="dark-blue" fontFamily="meta-serif">
        We are backed by an excellent advisory board
      </Typography>
    </div>
    <div styleName="right">
      <Typography color="dark-blue">
        Our advisors have a vast experience in launching multiple large-scale
        technological products in both the Medtech and Fintech areas. Their
        direct insight will empower us to deliver you a even better experience.
      </Typography>
    </div>
    <Advisors />
  </Section>
);

export default CompanyAdvisorsSection;
