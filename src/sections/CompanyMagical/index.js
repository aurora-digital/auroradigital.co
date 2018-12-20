import React from "react";
import Section from "root/components/Section";
import PropTypes from "prop-types";
import Typography from "root/components/Typography";
import Background from "root/components/Background";
import magicVideo from "root/assets/videos/section-company.mp4";
import withQuery from "./withQuery";

import "./index.css";

const CompanyMagical = ({ data }) => (
  <Background
    color="magenta"
    blendMode="normal"
    image={data.magicalPower.image.fluid}
    maxWidth
    video={magicVideo}
    alt="background-company"
    key="magical"
    name="magical"
  >
    <Section separator verticalSpacing={false}>
      <div styleName="title">
        <Typography variant="h2" fontFamily="meta-serif">
          The magical power happens when honesty, transparency and commitment
          act together
        </Typography>
      </div>
    </Section>
  </Background>
);

CompanyMagical.propTypes = {
  data: PropTypes.shape({
    magicalPower: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withQuery(CompanyMagical);
