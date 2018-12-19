import React from "react";
import Section from "root/components/Section";
import Typography from "root/components/Typography";

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

const ServicesTechnologies = () => (
  <Section styleName="root">
    <div styleName="title">
      <Typography variant="h2" color="dark-blue" fontFamily="meta-serif">
        Our technologies of choice
      </Typography>
    </div>

    <div styleName="technology-container">
      {renderTechnology(docker, "Docker")}
      {renderTechnology(rails, "Rails")}
      {renderTechnology(react, "React")}
      {renderTechnology(webpack, "Webpack")}
    </div>
  </Section>
);

export default ServicesTechnologies;
