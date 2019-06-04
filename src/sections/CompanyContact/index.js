import React from "react";

import Typography from "root/components/Typography";
import Section from "root/components/Section";

import "./index.css";

export default function CompanyContact() {
  return (
    <Section>
      <div styleName="root">
        <div styleName="challenge">
          <Typography color="klein-blue" variant="h3">
            Looking for
          </Typography>
          <Typography color="klein-blue" variant="h3">
            a new challenge?
          </Typography>
        </div>
        <div styleName="contact">
          <div styleName="cv">
            <Typography color="oxford-blue">Send us a CV</Typography>
            <span role="img" aria-label="finger-pointing-down">
              👇🏻
            </span>
          </div>

          <Typography color="klein-blue">contact@auroradigital.co</Typography>
        </div>
      </div>
    </Section>
  );
}
