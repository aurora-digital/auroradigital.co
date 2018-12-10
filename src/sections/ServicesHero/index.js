import React, { Component } from "react";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import BackgroundVideoText from "root/components/BackgroundVideoText";

import "./index.css";

const column = 114;
const gutter = 28;
const eightColumns = 8 * column + 7 * gutter;
const sixColumns = 6 * column + 5 * gutter;
const breakpointMobile = 768;
const breakpointDesktop = 1268;

const renderCopy = () => (
  <div>
    <div styleName="left">
      <Typography variant="h2" color="dark-blue" fontFamily="meta-serif">
        Working together to achieve your goals
      </Typography>
    </div>
    <div styleName="right">
      <Typography color="dark-blue">
        We’ll work alongside you from the early stages of product research and
        design to development and deployment, all while continuously delivering
        you product updates.
      </Typography>
    </div>
  </div>
);

const renderDesktop = () => (
  <Section>
    <BackgroundVideoText
      key="desktop"
      labels={["A dynamic team to design", "and develop your product"]}
      poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg"
      video="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm"
      height="195px"
      width={`${eightColumns}px`}
    />
    {renderCopy()}
  </Section>
);

const renderMobile = () => (
  <Section>
    <div>Implement Mobile</div>
    {renderCopy()}
  </Section>
);

const renderTablet = () => (
  <Section>
    <BackgroundVideoText
      key="tablet"
      labels={["A dynamic team to", "design and develop", "your product"]}
      poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg"
      video="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm"
      height="330px"
      width={`${sixColumns}px`}
    />
    {renderCopy()}
  </Section>
);

export default class ServicesHero extends Component {
  state = {
    isJsReady: false,
  };

  componentDidMount = () => {
    this.setState({ isJsReady: true });
  };

  getWidth = () => document.documentElement.clientWidth;

  render() {
    if (!this.state.isJsReady) return null;

    const width = this.getWidth();

    if (width >= breakpointDesktop) {
      return renderDesktop();
    }

    if (width < breakpointMobile) {
      return renderMobile();
    }

    return renderTablet();
  }
}
