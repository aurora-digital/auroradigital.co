import React from "react";
import DesktopWave from "root/assets/images/company-values-desktop-wave.inline.svg";
import TabletWave from "root/assets/images/company-values-tablet-wave.inline.svg";
import MobileWave from "root/assets/images/company-values-mobile-wave.inline.svg";

import Section from "root/components/Section";
import Typography from "root/components/Typography";

import "./index.css";

const CompanyValues = () => (
  <div styleName="root">
    <div styleName="wave-desktop">
      <DesktopWave />
    </div>
    <div styleName="wave-tablet">
      <TabletWave />
    </div>
    <div styleName="wave-mobile">
      <MobileWave />
    </div>

    <div styleName="values">
      <Section verticalSpacing={false}>
        <div styleName="title">
          <Typography variant="h3">Honesty Transparency Commitment</Typography>
        </div>
        <div styleName="copy">
          <div>
            <Typography>
              Our team comes from vastly different backgrounds that work
              together to create amazing technology.
            </Typography>
          </div>
          <div>
            <Typography>
              From market research and web design to bioinformatics and IoT, we
              are ready to help you and your company create fantastic digital
              experiences.
            </Typography>
          </div>
        </div>
      </Section>
    </div>
  </div>
);

export default CompanyValues;
