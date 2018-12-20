import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

import withQuery from "./withQuery";

import "./index.css";

const ServicesHero = ({ image }) => (
  <div styleName="root">
    <Img styleName="image" fluid={image} critical />
  </div>
);

ServicesHero.propTypes = {
  image: PropTypes.shape({}).isRequired,
};

export default withQuery(ServicesHero);
