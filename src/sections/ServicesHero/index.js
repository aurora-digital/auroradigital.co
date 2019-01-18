import React from "react";
import PropTypes from "prop-types";
import Background from "root/components/Background";

import withQuery from "./withQuery";

import "./index.css";

const ServicesHero = ({ image }) => (
  <Background
    alt="background-services-hero"
    image={image}
    maxWidth
    color="none"
    key="hero"
    name="hero"
  >
    <div styleName="image" />
  </Background>
);

ServicesHero.propTypes = {
  image: PropTypes.shape({}).isRequired,
};

export default withQuery(ServicesHero);
