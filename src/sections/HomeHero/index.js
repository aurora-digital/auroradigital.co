import React from "react";
import Img from "gatsby-image";
import Section from "root/components/Section";
import Typography from "root/components/Typography";

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
          <div styleName="image-wrapper">
            <div styleName="image-title">
              <Typography
                variant="h2"
                color="white"
                weight="bold"
                fontFamily="meta-serif"
              >
                Oncostats
              </Typography>
            </div>
            <Img styleName="image" fluid={data.oncostats.image.fluid} />
            <div styleName="project-link">
              <Typography variant="body" color="white" weight="bold">
                View Project
              </Typography>
            </div>
          </div>

          <div styleName="image-wrapper">
            <div styleName="image-title">
              <Typography
                variant="h2"
                color="white"
                weight="bold"
                fontFamily="meta-serif"
              >
                siosLIFE
              </Typography>
            </div>
            <Img styleName="image" fluid={data.sioslife.image.fluid} />
            <div styleName="project-link">
              <Typography variant="body" color="white" weight="bold">
                View Project
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div styleName="costumer-needs">
        <div styleName="left">
          <Typography variant="h2" color="white" weight="bold">
            Focus on our customers and their user needs
          </Typography>
        </div>

        <div styleName="right">
          <Typography variant="body" color="white">
            Healthcare solutions are quite sensitive and need to be built with
            100% focus on the user’s needs, safety and privacy. We work
            alongside our customers, from research to user-testing, to build
            excellent software.
          </Typography>
        </div>
      </div>
    </div>
  </Section>
);

export default withQuery(HomeHero);
