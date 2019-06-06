import React from "react";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import PropTypes from "prop-types";
import Img from "gatsby-image/withIEPolyfill";
import withQuery from "./withQuery";

import "./index.css";

const CompanyMedtechRevolution = ({ data }) => (
  <Section verticalSpacing={false} animate>
    <div styleName="root">
      <div styleName="container-top">
        <div styleName="text">
          <Typography variant="body" color="oxford-blue">
            We want to be a part of the new medtech revolution, we want software
            to be accessible and readily available to everyone in the world.
          </Typography>
        </div>
        <div styleName="right-image">
          <Img fluid={data.teamtalk.image.fluid} objectFit="cover" />
        </div>
      </div>

      <div styleName="container-bottom">
        <div styleName="left-image">
          <Img fluid={data.teamwork.image.fluid} objectFit="cover" />
        </div>
        <div styleName="text">
          <Typography variant="body" color="oxford-blue">
            Most importantly, we want technology to improve people&apos;s lives,
            guiding them to a healthier and more sustainable lifestyle.
          </Typography>
        </div>
      </div>
    </div>
  </Section>
);

CompanyMedtechRevolution.propTypes = {
  data: PropTypes.shape({
    teamtalk: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    teamwork: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withQuery(CompanyMedtechRevolution);
