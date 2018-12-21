import React from "react";
import Section from "root/components/Section";
import Typography from "root/components/Typography";

import "./index.css";

const HomeCostumers = () => (
  <Section separator verticalSpacing={false}>
    <div styleName="left">
      <Typography variant="h2" fontFamily="meta-serif">
        Focus on our customers and their user needs
      </Typography>
    </div>
    <div styleName="right">
      <Typography>
        Healthcare solutions are quite sensitive and need to be built with 100%
        focus on the user’s needs, safety and privacy. We work alongside our
        customers, from research to user-testing, to build excellent software.
      </Typography>
    </div>
  </Section>
);

export default HomeCostumers;
