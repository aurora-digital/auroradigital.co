import React, { Component } from "react";
import Section from "root/components/Section";
import BackgroundVideoText from "root/components/BackgroundVideoText";
import BackgroundImageText from "root/components/BackgroundImageText";
import Typography from "root/components/Typography";

import video from "root/assets/videos/text-video.mp4";
import textBackground from "root/assets/images/text-img.jpg";

const column = 114;
const gutter = 28;
const sixColumns = 6 * column + 5 * gutter;
const fourColumns = 4 * column + 3 * gutter;

const breakpointMobile = 768;
const breakpointDesktop = 1268;

export default class CompanyHero extends Component {
  state = {
    isJsReady: false,
  };

  componentDidMount = () => {
    this.updateDimensions();

    window.addEventListener("resize", this.updateDimensions);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  };

  updateDimensions = () => {
    this.setState({
      width: document.documentElement.clientWidth,
      isJsReady: true,
    });
  };

  renderDesktop = () => (
    <Section>
      <BackgroundVideoText
        key="desktop"
        labels={["Thriving for better", "healthcare solutions"]}
        poster={textBackground}
        video={video}
        height="195px"
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
        height="420px"
        width={`${fourColumns}px`}
      />
    </Section>
  );

  renderNoScript = () => (
    <>
      <noscript>{this.renderMobile()}</noscript>
      {this.renderMobile()}
    </>
  );

  render() {
    if (!this.state.isJsReady) return this.renderNoScript();

    const { width } = this.state;

    if (width >= breakpointDesktop) {
      return this.renderDesktop();
    }

    if (width < breakpointMobile) {
      return this.renderMobile();
    }

    return this.renderTablet();
  }
}
