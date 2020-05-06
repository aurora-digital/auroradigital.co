import React from "react";

import Section from "root/components/Section";
import Navbar from "root/components/Navbar";
import Typography from "root/components/Typography";
import Wave from "../../assets/images/wave-careers-hero.inline.svg";

import "./index.css";

const CareersHero = () => (
  <div styleName="root">
    <Section verticalSpacing={false}>
      <Navbar currentPage="careers" theme="primary" />
      <div styleName="title">
        <div styleName="first-text">
          <Typography color="oxford-blue" weight="bold" variant="h1">
            Raising your
          </Typography>
        </div>
        <div styleName="second-text">
          <Typography color="oxford-blue" weight="bold" variant="h1">
            grow
          </Typography>
        </div>
      </div>
      <div styleName="wave">
        <Wave />
      </div>

      <div styleName="copy">
        <Typography color="oxford-blue" variant="body" weight="regular">
          We don't care about titles, we care about passion and desire to grow.
          Collaboration and versatility are essential to us. We are very
          different from each other, and each one of us has a fundamental role
          in Aurora's growth.
        </Typography>
      </div>
    </Section>
  </div>
);

export default CareersHero;
