import React, { Component } from "react";
import Section from "root/components/Section";
import BackgroundVideoText from "root/components/BackgroundVideoText";
import BackgroundImageText from "root/components/BackgroundImageText";
import Typography from "root/components/Typography";
import ResponsiveRenderer from "root/components/ResponsiveRenderer";

import video from "root/assets/videos/text-video.mp4";
import textBackground from "root/assets/images/text-img.jpg";

const column = 114;
const gutter = 28;
const sixColumns = 6 * column + 5 * gutter;
const fourColumns = 4 * column + 3 * gutter;

export default class CompanyHero extends Component {
  renderDesktop = () => (
    <Section>
      <BackgroundVideoText
        key="desktop"
        labels={["Thriving for better", "healthcare solutions"]}
        poster={textBackground}
        video={video}
        height="240px"
        width={`${sixColumns}px`}
      />
    </Section>
  );

  renderMobile = () => (
    <Section>
      <BackgroundImageText image={textBackground}>
        <Typography
          weight="bold"
          variant="h1"
          fontFamily="meta-serif"
          color="dark-blue"
        >
          &#8203;Thriving for better healthcare solutions
        </Typography>
      </BackgroundImageText>
    </Section>
  );

  renderTablet = () => (
    <Section>
      <BackgroundVideoText
        key="mobile"
        labels={["Thriving for", "better", "healthcare", "solutions"]}
        poster={textBackground}
        video={video}
        height="450px"
        width={`${fourColumns}px`}
      />
    </Section>
  );

  renderDefault = () => (
    <>
      <noscript>{this.renderMobile()}</noscript>
      {this.renderMobile()}
    </>
  );

  render() {
    return (
      <ResponsiveRenderer
        renderDefault={this.renderDefault}
        renderDesktop={this.renderDesktop}
        renderTablet={this.renderTablet}
        renderMobile={this.renderMobile}
      />
    );
  }
}
