import React from "react";
import PropTypes from "prop-types";
import Section from "root/components/Section";
import Background from "root/components/Background";
import Typography from "root/components/Typography";

import withQuery from "./withQuery";

import "./index.css";

const TechRevolutionSection = ({ data }) => (
  <Background
    color="lavender"
    blendMode="normal"
    image={data.svhealthteam.image.fluid}
    maxWidth
  >
    <Section verticalSpacing={false} separator>
      <div styleName="left">
        <Typography weight="bold" variant="h2" fontFamily="meta-serif">
          The tech revolution came to change the world, but digital healthcare
          it’s still on its infancy
        </Typography>
      </div>
      <div styleName="right">
        <Typography variant="body">
          We want to be a part of the new medtech revolution, we want software
          to be accessible and readily available to everyone in the world. And
          most importantly we want technology to improve people&apos;s lives,
          guiding them to a healthier and more sustainable lifestyle.
        </Typography>
      </div>
    </Section>
  </Background>
);

TechRevolutionSection.propTypes = {
  data: PropTypes.shape({
    svhealthteam: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withQuery(TechRevolutionSection);
