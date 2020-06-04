import React from "react";
import PropTypes from "prop-types";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import ParallaxEffect from "root/components/ParallaxEffect";
import { map } from "lodash-es";

import withQuery from "./withQuery";

import "./index.css";

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

const HomeServices = ({ data }) => {
  return (
    <Section>
      <div styleName="root">
        <div styleName="concept-stategy">
          <div styleName="concept">
            <div styleName="image concept-image">
              <ParallaxEffect
                image={data.concept.image.fluid}
                alt="concept service"
              />
              {renderBlock("We plan your", "Concept", [
                "Business objectives",
                "User expectations",
                "The scope of the project",
              ])}
            </div>
          </div>
          <div styleName="strategy">
            <div styleName="image stategy-image">
              <ParallaxEffect
                image={data.stategy.image.fluid}
                alt="stategy service"
              />
              {renderBlock("We define your", "Strategy", [
                "Product vision",
                "Design Sprint",
                "Market research",
                "Requirements definition",
              ])}
            </div>
          </div>
        </div>
        <div styleName="code-design-growth">
          <div styleName="code">
            <div styleName="image code-image">
              <ParallaxEffect
                image={data.code.image.fluid}
                alt="code service"
              />
              {renderBlock("We build your", "Code", [
                "Web & Mobile",
                "Integrations",
                "Hosting",
                "Deploy",
              ])}
            </div>
          </div>
          <div styleName="design-growth">
            <div styleName="image design-image">
              <ParallaxEffect
                image={data.design.image.fluid}
                alt="design service"
              />
              {renderBlock("We create your", "Design", [
                "Content strategy",
                "Prototyping",
                "UX/UI",
                "User testing",
              ])}
            </div>
            <div styleName="image growth-image">
              <ParallaxEffect
                image={data.growth.image.fluid}
                alt="growth service"
              />
              {renderBlock("We raise your", "Growth", [
                "Product scaling",
                "Conversion improvment",
                "Performance",
              ])}
            </div>
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
    stategy: PropTypes.shape({
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
