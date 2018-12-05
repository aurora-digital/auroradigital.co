import React from "react";
import Section from "root/components/Section";
import BackgroundVideoText from "root/components/BackgroundVideoText";

const column = 114;
const gutter = 28;
const sixColumns = 6 * column + 5 * gutter;

const CompanyHero = () => (
  <Section>
    <BackgroundVideoText
      labels={["Thriving for better", "healthcare solutions"]}
      poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg"
      video="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm"
      height="195px"
      width={`${sixColumns}px`}
    />
  </Section>
);

export default CompanyHero;
