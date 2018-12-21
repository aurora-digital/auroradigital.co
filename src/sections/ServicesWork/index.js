import React from "react";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import ListItem from "root/components/ListItem";

import webpack from "root/assets/images/webpack.svg";
import rails from "root/assets/images/rails.svg";
import react from "root/assets/images/react.svg";
import docker from "root/assets/images/docker.svg";

import "./index.css";

const renderTechnology = (icon, name) => (
  <div styleName="technology">
    <div styleName="icon">
      <img src={icon} alt={name} />
    </div>
    <Typography color="dark-blue">{name}</Typography>
  </div>
);

const ServicesWork = () => (
  <Section>
    <div styleName="root">
      <div styleName="work-and-focus">
        <div styleName="work">
          <div styleName="title">
            <Typography
              color="dark-blue"
              weight="bold"
              variant="h2"
              fontFamily="meta-serif"
            >
              Our work goes far beyond what you actually see
            </Typography>
          </div>
          <div styleName="copy">
            <Typography color="dark-blue" variant="body">
              We specialize in web-based products. From blazing fast websites to
              carefully crafted mobile-first web apps, our main goal is to use
              the power of the fantastic web technologies out there to give you
              the best work possible.
            </Typography>
          </div>
        </div>

        <div styleName="focus">
          <div styleName="title">
            <Typography color="dark-blue" weight="bold" variant="body">
              Our focus
            </Typography>
          </div>
          <div styleName="copy">
            <ListItem color="dark-blue">Hosting Solutions</ListItem>
            <ListItem color="dark-blue">Software Development</ListItem>
            <ListItem color="dark-blue">Technology Implementation</ListItem>
            <ListItem color="dark-blue">System Integration</ListItem>
          </div>
        </div>
      </div>

      <div styleName="technologies">
        <div styleName="title">
          <Typography color="dark-blue" variant="h2">
            Our technologies of choice
          </Typography>
        </div>
        <div styleName="copy">
          {renderTechnology(docker, "Docker")}
          {renderTechnology(rails, "Rails")}
          {renderTechnology(react, "React")}
          {renderTechnology(webpack, "Webpack")}
        </div>
      </div>
    </div>
  </Section>
);

export default ServicesWork;
