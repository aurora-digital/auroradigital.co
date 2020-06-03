import React from "react";
import PropTypes from "prop-types";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import ParallaxEffect from "root/components/ParallaxEffect";
import { map } from "lodash-es";
import classNames from "classnames";

import withQuery from "./withQuery";

import "./index.css";

const HomeServices = ({ data }) => {
  const renderBlock = (title, subtitle, points) => {
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
            {map(points, point => {
              return (
                <Typography variant="small-body" color="white">
                  {point}
                </Typography>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderService = (
    name,
    image,
    blockTitle,
    blockSubtitle,
    blockPoints,
  ) => {
    return (
      <button
        key={name}
        type="button"
        styleName={classNames("image", {
          [`${name}-image`]: true,
        })}
      >
        <ParallaxEffect image={image} alt={`${name} service`} />
        {renderBlock(blockTitle, blockSubtitle, blockPoints)}
      </button>
    );
  };

  return (
    <Section>
      <div styleName="concept-strategy">
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
          )}
        </div>
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
          )}
        </div>
      </div>
      <div styleName="code-design-growth">
        <div styleName="code">
          {renderService(
            "code",
            data.code.image.fluid,
            "We build your",
            "Code",
            ["Web & Mobile", "Integrations", "Hosting", "Deploy"],
          )}
        </div>

        <div styleName="design-growth">
          {renderService(
            "design",
            data.design.image.fluid,
            "We create your",
            "Design",
            ["Content strategy", "Prototyping", "UX/UI", "User testing"],
          )}
          {renderService(
            "code",
            data.code.image.fluid,
            "We build your",
            "Code",
            ["Web & Mobile", "Integrations", "Hosting", "Deploy"],
          )}

          {renderService(
            "growth",
            data.growth.image.fluid,
            "We raise your",
            "Growth",
            ["Product scaling", "Conversion improvment", "Performance"],
          )}
        </div>
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
