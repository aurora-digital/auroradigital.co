import React from "react";

import Section from "root/components/Section";
import Typography from "root/components/Typography";
import Contact from "root/components/Contact";
import WavyLink from "root/components/WavyLink";
import InputForm from "root/components/FormInput";
import Button from "root/components/Button";

import "./index.css";

export default function HomeContact() {
  return (
    <Section verticalSpacing={false}>
      <div styleName="root">
        <div styleName="left">
          <div styleName="lets-talk">
            <Typography variant="h2" weight="bold" color="klein-blue">
              Let&apos;s talk?
            </Typography>
          </div>
          <div styleName="reach">
            <Typography color="klein-blue">
              Reach us via this form or drop us a email.
            </Typography>
          </div>
          <div styleName="link">
            <Contact>
              <Typography color="klein-blue">
                contact@auroradigital.co
              </Typography>
            </Contact>
          </div>

          <div styleName="wave-desktop">
            <WavyLink />
          </div>
        </div>
        <div styleName="right">
          <form netlify>
            <InputForm title="Name" id="name" />
            <InputForm title="Email" id="email" />
            <InputForm title="Message" id="message" multiline />
            <Button typeButton="submit">
              <Typography color="white">Send</Typography>
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}
