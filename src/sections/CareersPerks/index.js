import React from "react";
import { Parallax } from "react-scroll-parallax";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import BackgroundWave from "root/assets/images/careers-perks-wave.inline.svg";
import BackgroundWaveMobile from "root/assets/images/careers-perks-wave-mobile.inline.svg";

import "./index.css";

const renderContent = () => {
  return (
    <div styleName="content">
      <div styleName="title-container">
        <Typography variant="h3" weight="medium">
          Perks
        </Typography>
      </div>
      <div styleName="list1">
        <ul aria-label="Perks">
          <li>
            <Typography>Food everyday</Typography>
          </li>
          <li>
            <Typography>Flexible hours & vacations</Typography>
          </li>
          <li>
            <Typography>Work from home</Typography>
          </li>
        </ul>
      </div>
      <div styleName="list2">
        <ul aria-label="Perks">
          <li>
            <Typography>Health insurance</Typography>
          </li>
          <li>
            <Typography>Physiotherapy & gym</Typography>
          </li>
          <li>
            <Typography>Budget for books & gadgets</Typography>
          </li>
          <div styleName="more">
            <Typography color="baby-blue">...and more</Typography>
          </div>
        </ul>
      </div>
    </div>
  );
};

const CareersPerks = () => (
  <Section verticalSpacing={false}>
    <div styleName="root">
      <Parallax y={[0, -40]}>
        <div styleName="background">
          <BackgroundWave />
          {renderContent()}
        </div>

        <div styleName="background-mobile">
          <BackgroundWaveMobile />
          {renderContent()}
        </div>

        <noscript>
          <div styleName="whitespace-noscript" />
        </noscript>
      </Parallax>
    </div>
  </Section>
);

export default CareersPerks;
