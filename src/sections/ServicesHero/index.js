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

export default class ServicesHero extends Component {
  state = {
    isJsReady: false,
  };

  componentDidMount = () => {
    this.setState({ isJsReady: true });
  };

  getWidth = () => document.documentElement.clientWidth;

  renderCopy = () => (
    <div>
      <div styleName="left">
        <Typography variant="h2" color="dark-blue" fontFamily="meta-serif">
          Working together to achieve your goals
        </Typography>
      </div>
      <div styleName="right">
        <Typography color="dark-blue">
          We’ll work alongside you from the early stages of product research and
          design to development and deployment, all while continuously
          delivering you product updates.
        </Typography>
      </div>
    </div>
  );

  renderDesktop = () => (
    <Section>
      <BackgroundVideoText
        key="desktop"
        labels={["A dynamic team to design", "and develop your product"]}
        poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg"
        video="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm"
        height="195px"
        width={`${eightColumns}px`}
      />
      {this.renderCopy()}
    </Section>
  );

  renderMobile = () => (
    <Section>
      <div styleName="title">
        <Typography variant="h1" color="lavender" fontFamily="meta-serif">
          A dynamic team to design and develop your product
        </Typography>
        {this.renderCopy()}
      </div>
    </Section>
  );

  renderTablet = () => (
    <Section>
      <BackgroundVideoText
        key="tablet"
        labels={["A dynamic team to", "design and develop", "your product"]}
        poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg"
        video="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm"
        height="330px"
        width={`${sixColumns}px`}
      />
      {this.renderCopy()}
    </Section>
  );

  renderNoScript = () => (
    <noscript>
      <Section>
        <div styleName="title">
          <Typography variant="h1" color="lavender" fontFamily="meta-serif">
            A dynamic team to design and develop your product
          </Typography>
        </div>
        {this.renderCopy()}
      </Section>
    </noscript>
  );

  render() {
    if (!this.state.isJsReady) return this.renderNoScript();

    const width = this.getWidth();

    if (width >= breakpointDesktop) {
      return this.renderDesktop();
    }

    if (width < breakpointMobile) {
      return this.renderMobile();
    }

    return this.renderTablet();
  }
}
