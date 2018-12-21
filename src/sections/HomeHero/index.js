import React from "react";
import PropTypes from "prop-types";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import Project from "root/components/Project";

import withQuery from "./withQuery";

import "./index.css";

const HomeHero = ({ data }) => (
  <Section>
    <div styleName="root">
      <div styleName="we-are">
        <Typography variant="h1" color="white" fontFamily="meta-serif">
          Nurturing digital healthcare solutions
        </Typography>

        <div styleName="we-design-and-develop">
          <Typography variant="body">
            We design and develop thoughtful web and mobile healthcare
            solutions, accessible to anyone, everywhere, at anytime.
          </Typography>
        </div>
      </div>

      <div>
        <Typography variant="body" color="white" weight="bold">
          Projects
        </Typography>

        <div styleName="images">
          <Project
            image={data.oncostats.image.fluid}
            projectName="Oncostats"
            projectUrl="https://oncostats.io"
            description="Unlocking the access to real-world data"
          />
          <Project
            image={data.sioslife.image.fluid}
            projectName="siosLIFE"
            projectUrl="http://sioslife.com/"
            description="For younger spirits"
          />
        </div>
      </div>

      <div styleName="pride">
        <div styleName="left">
          <Typography
            variant="h2"
            color="white"
            weight="bold"
            fontFamily="meta-serif"
          >
            Pride in creating the best possible experiences
          </Typography>
        </div>

        <div styleName="right">
          <Typography variant="body" color="white">
            Our work speaks for itself. We take pride in working with healthcare
            experts to create the best possible experience for all kinds of
            users. From medical doctors to the elderly.
          </Typography>
        </div>
      </div>
    </div>
  </Section>
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
