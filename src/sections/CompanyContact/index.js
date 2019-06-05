import React from "react";
import Contact from "root/components/Contact";
import Typography from "root/components/Typography";
import Section from "root/components/Section";
import WavyLink from "root/components/WavyLink";

import "./index.css";

export default function CompanyContact() {
  return (
    <Section verticalSpacing={false}>
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

          <Contact>
            <Typography color="klein-blue">contact@auroradigital.co</Typography>
          </Contact>
        </div>

        <div styleName="wave">
          <WavyLink />
        </div>
      </div>
    </Section>
  );
}
