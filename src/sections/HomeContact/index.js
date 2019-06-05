import React from "react";

import Section from "root/components/Section";
import Typography from "root/components/Typography";
import Contact from "root/components/Contact";
import WavyLink from "root/components/WavyLink";

import "./index.css";

export default function HomeContact() {
  return (
    <Section verticalSpacing={false}>
      <div styleName="root">
        <div styleName="lets-talk">
          <Typography variant="h2" weight="bold" color="klein-blue">
            Let&apos;s talk?
          </Typography>
        </div>

        <div styleName="link">
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
