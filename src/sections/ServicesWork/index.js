import React from "react";
import PropTypes from "prop-types";
import Section from "root/components/Section";
import Background from "root/components/Background";
import Typography from "root/components/Typography";
import servicesVideo from "root/assets/videos/Services-vertical.mp4";

import withQuery from "./withQuery";

import "./index.css";

const designServices = [
  "Research & Strategy",
  "Brand Identity",
  "Product Design",
  "User Testing",
];

const developmentServices = [
  "Hosting Solutions",
  "Software Development",
  "Technology Implementation",
  "System Integration",
];

const renderServices = services => (
  <div styleName="services">
    {services.map(specificService => (
      <div styleName="specific-service">
        <div styleName="asterisk">
          <Typography variant="h3" color="white">
            *
          </Typography>
        </div>
        <Typography variant="h3" color="white" key={specificService}>
          {specificService}
        </Typography>
      </div>
    ))}
  </div>
);

const renderDesign = () => (
  <div>
    <div styleName="left">
      <Typography weight="bold" variant="h2" fontFamily="meta-serif">
        Design matters because people matter
      </Typography>
    </div>
    <div styleName="right">
      <Typography variant="body">
        It’s not only about pretty pixels. Quality and attention to detail is
        imperative and we test and validate all of our products with real users
        to ensure that. We always strive to deliver the best solutions for our
        partners and users
      </Typography>
      {renderServices(designServices)}
    </div>
  </div>
);

const renderWork = () => (
  <div styleName="work">
    <div styleName="left">
      <Typography weight="bold" variant="h2" fontFamily="meta-serif">
        Our work goes far behind what you actually see
      </Typography>
    </div>
    <div styleName="right">
      <Typography variant="body">
        We specialize in web based products. From blazing fast websites to
        carefully crafted mobile-first webapps, our main goal is to use the
        power of the fantastic web technologies out there to give you the best
        work possible.
      </Typography>
      {renderServices(developmentServices)}
    </div>
  </div>
);

const ServicesWork = ({ data }) => (
  <Background
    color="lavender"
    blendMode="normal"
    image={data.heroMolecules.image.fluid}
    maxWidth
    video={servicesVideo}
    key="services"
    name="services"
  >
    <Section>
      {renderDesign()}
      {renderWork()}
    </Section>
  </Background>
);

ServicesWork.propTypes = {
  data: PropTypes.shape({
    heroMolecules: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withQuery(ServicesWork);
