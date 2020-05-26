import React from "react";
import { Parallax } from "react-scroll-parallax";
import Typography from "root/components/Typography";
import Section from "root/components/Section";
import WavyLink from "root/components/WavyLink";
import PropTypes from "prop-types";
import ParallaxEffect from "root/components/ParallaxEffect";

import withQuery from "./withQuery";

import "./index.css";

const CompanyContact = ({ data }) => {
  return (
    <Section verticalSpacing={false}>
      <div styleName="root">
        <div styleName="container">
          <div styleName="left">
            <div styleName="title">
              <Typography color="oxford-blue" variant="h3" weight="medium">
                {`Looking for\na new challenge?`}
              </Typography>
            </div>
            <div styleName="description">
              <Typography color="oxford-blue" variant="body">
                We are looking for passionate people who are eager to learn and
                grow with us.
              </Typography>
            </div>
          </div>
          <div styleName="right">
            <div styleName="wave">
              <WavyLink target="self" url="/careers" label="Join us">
                <Typography
                  variant="small-body"
                  weight="bold"
                  color="klein-blue"
                >
                  Join us
                </Typography>
              </WavyLink>
            </div>
            <div styleName="image">
              <ParallaxEffect
                image={data.pedrowriting.image.fluid}
                alt="pedro writing on the board"
              />
              <div styleName="link-mobile">
                <a href="/careers">
                  <Typography
                    variant="small-body"
                    weight="bold"
                    color="klein-blue"
                  >
                    Join us
                  </Typography>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div styleName="small-team-title">
          <div styleName="parallax-container-wrapper">
            <div
              styleName="parallax-container"
              aria-label="Creating the best possible experiencies"
            >
              <div aria-hidden="true">
                <Parallax styleName="parallax" x={[-30, 75]} tagOuter="figure">
                  <Typography color="klein-blue" weight="bold" variant="h2">
                    We are a small team
                  </Typography>
                </Parallax>

                <Parallax styleName="parallax" x={[80, -10]} tagOuter="figure">
                  <Typography color="klein-blue" weight="bold" variant="h2">
                    fully commmitted
                  </Typography>
                </Parallax>
              </div>
            </div>
          </div>

          <div styleName="parallax-fallback" aria-hidden="true">
            <Typography color="klein-blue" weight="bold" variant="h2">
              We are a small team fully commmitted
            </Typography>
          </div>
        </div>
      </div>
    </Section>
  );
};

CompanyContact.propTypes = {
  data: PropTypes.shape({
    pedrowriting: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withQuery(CompanyContact);
