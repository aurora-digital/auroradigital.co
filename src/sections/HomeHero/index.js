import React from "react";
import PropTypes from "prop-types";
import Section from "root/components/Section";
import Navbar from "root/components/Navbar";
import Typography from "root/components/Typography";

import withQuery from "./withQuery";

import "./index.css";

const HomeHero = () => (
  <div>
    <div styleName="root">
      <Navbar theme="secondary" />
      <Section verticalSpacing={false}>
        <div styleName="title-wrapper">
          <div styleName="title">
            <Typography variant="h1">Nurturing digital healthcare</Typography>
          </div>
        </div>

        <div styleName="copy">
          <Typography color="baby-blue">
            We design and develop thoughtful web and mobile healthcare
            solutions, accessible to anyone, anywhere, at anytime.
          </Typography>
        </div>

        <div styleName="overlay">
          <div styleName="wave" />
        </div>
      </Section>
    </div>
  </div>
);

HomeHero.propTypes = {
  data: PropTypes.shape({
    oncostats: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,

    sioslife: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withQuery(HomeHero);
