import React from "react";
import Section from "root/components/Section";
import BackgroundVideoText from "root/components/BackgroundVideoText";
import { isMobile, isTablet } from "react-device-detect";

const column = 114;
const gutter = 28;
const eightColumns = 8 * column + 7 * gutter;

const sixColumns = 6 * column + 5 * gutter;

const renderBackgroundVideoText = () => {
  if (isTablet) {
    return (
      <Section>
        <BackgroundVideoText
          key="tablet"
          labels={["A dynamic team to", "design and develop", "your product"]}
          poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg"
          video="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm"
          height="330px"
          width={`${sixColumns}px`}
        />
      </Section>
    );
  }

  if (isMobile) {
    return (
      <Section>
        <div>Implement Mobile</div>
      </Section>
    );
  }

  return (
    <Section>
      <BackgroundVideoText
        key="desktop"
        labels={["A dynamic team to design", "and developyour product"]}
        poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg"
        video="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm"
        height="330px"
        width={`${eightColumns}px`}
      />
    </Section>
  );
};

const ServicesHero = () => renderBackgroundVideoText();

export default ServicesHero;
