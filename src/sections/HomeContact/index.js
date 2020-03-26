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
            <div styleName="wave-mobile">
              <WavyLink />
            </div>
          </div>
          <div styleName="reach">
            <Typography color="klein-blue">
              Reach us via this form or drop us a email.
            </Typography>
          </div>
          <div styleName="link">
            <Contact underlineColor="klein-blue">
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
          <form
            id="email-form"
            name="email-form"
            data-name="Email Form"
            netlify
          >
            <InputForm title="Name" id="name" type="email" />
            <InputForm title="Email" id="email" />
            <InputForm title="Message" id="message" multiline />
            <div styleName="button">
              <Button typeButton="submit">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}
