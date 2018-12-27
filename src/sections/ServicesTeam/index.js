import React, { Component } from "react";
import PropTypes from "prop-types";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import BackgroundVideoText from "root/components/BackgroundVideoText";
import Img from "gatsby-image";
import video from "root/assets/videos/hero-services.mp4";
import textBackground from "root/assets/images/hero-services.jpg";
import withQuery from "./withQuery";

import "./index.css";

class ServicesTeam extends Component {
  static propTypes = {
    image: PropTypes.shape({}).isRequired,
  };

  renderCopy = () => {
    const { image } = this.props;

    return (
      <div styleName="work">
        <div styleName="copy-title">
          <Typography variant="h2" color="dark-blue" fontFamily="meta-serif">
            Working together to achieve your goals
          </Typography>
        </div>
        <div styleName="work-alongside">
          <div styleName="alongside">
            <Typography color="dark-blue">
              We’ll work alongside you from the early stages of product research
              and design to development and deployment, all while continuously
              delivering you product updates.
            </Typography>
          </div>
          <div styleName="root-image">
            <div styleName="image-wrapper">
              <div styleName="rect" />
              <Img styleName="image" fluid={image} critical />
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <Section>
        <BackgroundVideoText
          label="Thriving for better healthcare solutions"
          poster={textBackground}
          video={video}
          alt="services team"
        />
        {this.renderCopy()}
      </Section>
    );
  }
}

export default withQuery(ServicesTeam);
