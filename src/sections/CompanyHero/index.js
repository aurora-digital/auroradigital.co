import React from "react";
import { Parallax } from "react-scroll-parallax";
import Section from "root/components/Section";
import Navbar from "root/components/Navbar";
import Typography from "root/components/Typography";

import "./index.css";

const CompanyHero = () => (
  <div styleName="root">
    <Navbar currentPage="company" theme="primary" />
    <Section verticalSpacing={false}>
      <div styleName="title">
        <div styleName="parallax-container">
          <Parallax styleName="parallax" x={[-78, 20]} tagOuter="figure">
            <Typography color="oxford-blue" weight="bold" variant="h1">
              Thriving for
            </Typography>
          </Parallax>

          <Parallax styleName="parallax" x={[30, -30]} tagOuter="figure">
            <Typography color="oxford-blue" weight="bold" variant="h1">
              better healthcare
            </Typography>
          </Parallax>
        </div>

        <div styleName="parallax-fallback">
          <Typography color="oxford-blue" weight="bold" variant="h1">
            Thriving for better healthcare
          </Typography>
        </div>
      </div>
      <div styleName="copy">
        <Typography color="oxford-blue" variant="h3" weight="medium">
          The tech revolution came to change the world, but digital healthcare
          it’s still in its infancy
        </Typography>
      </div>
    </Section>
  </div>
);

export default CompanyHero;
