import React from "react";
import Section from "root/components/Section";
import Typography from "root/components/Typography";

import "./index.css";

const CompanyTeamSection = () => (
  <Section separator>
    <div styleName="left">
      <Typography variant="h2" color="dark-blue" fontFamily="meta-serif">
        A multidisciplinary team always ready to face new challenges
      </Typography>
    </div>
    <div styleName="right">
      <Typography color="dark-blue">
        Our team comes from vastly different backgrounds that work together to
        create amazing technology. From market research and web design to
        bioinformatics and IoT, we are ready to help you and your company create
        fantastic digital experiences.
      </Typography>
    </div>
  </Section>
);

export default CompanyTeamSection;
