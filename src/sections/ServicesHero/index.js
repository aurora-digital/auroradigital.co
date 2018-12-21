import React, { Component } from "react";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import BackgroundVideoText from "root/components/BackgroundVideoText";
import BackgroundImageText from "root/components/BackgroundImageText";
import ResponsiveRenderer from "root/components/ResponsiveRenderer";

import video from "root/assets/videos/hero-services.mp4";
import textBackground from "root/assets/images/hero-services.jpg";

import "./index.css";

const column = 114;
const gutter = 28;
const eightColumns = 8 * column + 7 * gutter;
const fiveColumns = 5 * column + 4 * gutter;

export default class ServicesHero extends Component {
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
        poster={textBackground}
        video={video}
        height="240px"
        width={`${eightColumns}px`}
      />
      {this.renderCopy()}
    </Section>
  );

  renderTablet = () => (
    <Section>
      <BackgroundVideoText
        key="tablet"
        labels={["A dynamic", "team to design", "and develop", "your product"]}
        poster={textBackground}
        video={video}
        height="470px"
        width={`${fiveColumns}px`}
      />
      {this.renderCopy()}
    </Section>
  );

  renderMobile = () => (
    <Section>
      <BackgroundImageText image={textBackground}>
        <Typography weight="bold" variant="h1" fontFamily="meta-serif">
          &#8203;A dynamic team to design and develop your product
        </Typography>
      </BackgroundImageText>
      {this.renderCopy()}
    </Section>
  );

  render() {
    return (
      <ResponsiveRenderer
        renderDesktop={this.renderDesktop}
        renderTablet={this.renderTablet}
        renderMobile={this.renderMobile}
        renderDefault={this.renderMobile}
      />
    );
  }
}
