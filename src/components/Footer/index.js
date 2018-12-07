import React from "react";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import Button from "root/components/Button";
import Logo from "root/components/Logo";

import "./index.css";

const Footer = () => (
  <Section>
    <div styleName="root">
      <div>
        <div styleName="lets-work">
          <Typography variant="h3" color="dark-blue">
            Let’s work together
          </Typography>
          <Button>
            <Typography color="white" weight="bold">
              Tell us everything
            </Typography>
          </Button>
        </div>

        <div>
          <Logo />
        </div>
      </div>
    </div>
  </Section>
);

export default Footer;
