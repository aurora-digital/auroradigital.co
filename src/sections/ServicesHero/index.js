import React from "react";
import Section from "root/components/Section";
import BackgroundVideoText from "root/components/BackgroundVideoText";

const column = 114;
const gutter = 28;
const eightColumns = 8 * column + 7 * gutter;
const sixColumns = 6 * column + 5 * gutter;
const breakpointMobile = 768;
const breakpointDesktop = 1268;

const ServicesHero = () => {
  const width = document.documentElement.clientWidth;

  if (width >= breakpointDesktop) {
    return (
      <Section>
        <BackgroundVideoText
          key="desktop"
          labels={["A dynamic team to design", "and develop your product"]}
          poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg"
          video="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm"
          height="195px"
          width={`${eightColumns}px`}
        />
      </Section>
    );
  }

  if (width < breakpointMobile) {
    return (
      <Section>
        <div>Implement Mobile</div>
      </Section>
    );
  }

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
};

export default ServicesHero;
