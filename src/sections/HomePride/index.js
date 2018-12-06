import React from "react";
import Section from "root/components/Section";
import Typography from "root/components/Typography";

import "./index.css";

const HomePride = () => (
  <Section separator>
    <div styleName="left">
      <Typography variant="h2" fontFamily="meta-serif">
        Pride in creating the best possible experiences
      </Typography>
    </div>
    <div styleName="right">
      <Typography>
        Our work speaks for itself. We take pride in working with healthcare
        experts to create the best possible experience for all kinds of users.
        From medical doctors to the elderly.
      </Typography>
    </div>
  </Section>
);

export default HomePride;
