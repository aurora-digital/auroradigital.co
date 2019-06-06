import React from "react";
import Typography from "root/components/Typography";
import Section from "root/components/Section";

import "./index.css";

export default function CompanyAdvisorsCopy() {
  return (
    <Section verticalSpacing={false}>
      <div styleName="root">
        <div styleName="title">
          <Typography variant="h3" color="oxford-blue">
            We are backed
          </Typography>
          <Typography variant="h3" color="oxford-blue">
            by an excellent advisory board
          </Typography>
        </div>

        <Typography color="oxford-blue">
          Our advisors have a vast experience in launching multiple large-scale
          technological products in both the Medtech and Fintech areas - their
          direct insight will empower us to deliver you an even better
          experience.
        </Typography>
      </div>
    </Section>
  );
}
