import React from "react";
import PropTypes from "prop-types";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import ParallaxEffect from "root/components/ParallaxEffect";
import updateDimensions from "root/hooks/useWindowDimensions";
import { map } from "lodash-es";
import classNames from "classnames";
import { Parallax } from "react-scroll-parallax";

import withQuery from "./withQuery";

import "./index.css";

const breakpointMobile = 800;

const HomeServices = ({ data }) => {
  const dimensions = updateDimensions();

  const renderBlockContent = (name, title, subtitle, serviceTopics) => {
    return (
      <div styleName="block">
        <div styleName="block-content">
          <Typography variant="small-body" color="baby-blue">
            {title}
          </Typography>
          <Typography variant="h3" color="white">
            {subtitle}
          </Typography>
          <div styleName="points">
            {map(serviceTopics, (topic, index) => {
              return (
                <Typography
                  key={`${name}-${index}`}
                  variant="small-body"
                  color="white"
                >
                  {topic}
                </Typography>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderBlock = (
    name,
    title,
    subtitle,
    serviceTopics,
    parallaxY,
    parallaxX,
  ) => {
    if (parallaxX) {
      return (
        <div styleName="parallax-container">
          <Parallax key={`${name}-block`} x={parallaxX}>
            {renderBlockContent(name, title, subtitle, serviceTopics)}
          </Parallax>
        </div>
      );
    }

    return (
      <Parallax key={`${name}-block`} y={parallaxY}>
        {renderBlockContent(name, title, subtitle, serviceTopics)}
      </Parallax>
    );
  };

  const renderService = (
    name,
    image,
    blockTitle,
    blockSubtitle,
    blockPoints,
    parallaxBlockY,
    parallaxBlockX,
  ) => {
    return (
      <div
        key={`${name}-image`}
        styleName={classNames("image", {
          [`${name}-image`]: true,
        })}
      >
        <ParallaxEffect image={image} alt={`${name} service`} />
        {renderBlock(
          name,
          blockTitle,
          blockSubtitle,
          blockPoints,
          parallaxBlockY,
          parallaxBlockX,
        )}
      </div>
    );
  };

  return (
    <Section verticalSpacing={false}>
      <div styleName="services">
        <div styleName="strategy">
          {renderService(
            "strategy",
            data.strategy.image.fluid,
            "We define your",
            "Strategy",
            [
              "Product vision",
              "Design Sprint",
              "Market research",
              "Requirements definition",
            ],
            null,
            dimensions.width > breakpointMobile ? [20, -20] : [10, -10],
          )}
        </div>
        <div styleName="concept">
          {renderService(
            "concept",
            data.concept.image.fluid,
            "We plan your",
            "Concept",
            [
              "Business objectives",
              "User expectations",
              "The scope of the project",
            ],
            null,
            [-16, 16],
          )}
        </div>

        <div styleName="design">
          {renderService(
            "design",
            data.design.image.fluid,
            "We create your",
            "Design",
            ["Content strategy", "Prototyping", "UX/UI", "User testing"],
            [17, -17],
            null,
          )}
        </div>
        <div styleName="code">
          {renderService(
            "code",
            data.code.image.fluid,
            "We build your",
            "Code",
            ["Web & Mobile", "Integrations", "Hosting", "Deploy"],
            [-23, 23],
            null,
          )}
        </div>
        <div styleName="growth">
          {renderService(
            "growth",
            data.growth.image.fluid,
            "We raise your",
            "Growth",
            ["Product scaling", "Conversion improvment", "Performance"],
            null,
            dimensions.width > breakpointMobile ? [20, -20] : [10, -10],
          )}
        </div>
        <div styleName="copy">
          <div styleName="above-text">
            {
              "Healthcare solutions are quite sensitive and need to be built with 100% focus on the user’s needs, safety and privacy.\nWe work alongside our customers, from research to&nbsp;user-testing, to build excellent software."
            }
          </div>
          <div styleName="under-text">
            <Typography color="oxford-blue">
              {
                "Healthcare solutions are quite sensitive and need to be built with 100% focus on the user’s needs, safety and privacy.\nWe work alongside our customers, from research to\nuser-testing, to build excellent software."
              }
            </Typography>
          </div>
        </div>
      </div>
    </Section>
  );
};

HomeServices.propTypes = {
  data: PropTypes.shape({
    concept: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    strategy: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    code: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    design: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    growth: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default withQuery(HomeServices);
