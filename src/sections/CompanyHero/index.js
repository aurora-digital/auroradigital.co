import React, { Component } from "react";
import Section from "root/components/Section";
import BackgroundVideoText from "root/components/BackgroundVideoText";

import video from "root/assets/videos/hero-company.mp4";
import textBackground from "root/assets/images/hero-company.jpg";

export default class CompanyHero extends Component {
  render() {
    return (
      <Section>
        <BackgroundVideoText
          label="Thriving for better healthcare solutions"
          poster={textBackground}
          video={video}
          alt="company hero"
        />
      </Section>
    );
  }
}
