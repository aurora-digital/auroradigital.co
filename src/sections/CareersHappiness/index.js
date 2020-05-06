import React from "react";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import PropTypes from "prop-types";
import ParallaxEffect from "root/components/ParallaxEffect";

import withQuery from "./withQuery";

import "./index.css";

const CareersHappiness = ({ data }) => {
  return (
    <Section verticalSpacing={false}>
      <div styleName="root">
        <div styleName="container-left">
          <div styleName="image">
            <ParallaxEffect
              image={data.catarinaFilipe.image.fluid}
              alt="catarina and Filipe working on sofa"
            />
          </div>
          <div styleName="text-desktop">
            <Typography variant="h3" weight="medium" color="oxford-blue">
              We believe in happiness
            </Typography>
            <div styleName="we">
              <Typography variant="body" color="oxford-blue">
                We take care of each other
              </Typography>
              <Typography variant="body" color="oxford-blue">
                We value the team
              </Typography>
              <Typography variant="body" color="oxford-blue">
                We support ourselves
              </Typography>
              <Typography variant="body" color="oxford-blue">
                We have fun
              </Typography>
            </div>
          </div>
        </div>

        <div styleName="container-right">
          <div styleName="image">
            <ParallaxEffect
              image={data.tania.image.fluid}
              alt="tania laughing"
            />
          </div>
          <div styleName="text-mobile">
            <Typography variant="h3" weight="medium" color="oxford-blue">
              We believe in happiness
            </Typography>
            <div styleName="we">
              <Typography variant="body" color="oxford-blue">
                We take care of each other
              </Typography>
              <Typography variant="body" color="oxford-blue">
                We value the team
              </Typography>
              <Typography variant="body" color="oxford-blue">
                We support ourselves
              </Typography>
              <Typography variant="body" color="oxford-blue">
                We have fun
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

CareersHappiness.propTypes = {
  data: PropTypes.shape({
    catarinaFilipe: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    tania: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withQuery(CareersHappiness);
