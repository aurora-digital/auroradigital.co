import React, { useRef, useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import useScroll from "root/hooks/useScroll";
import { pull, indexOf, isEmpty, cloneDeep } from "lodash-es";

import Section from "root/components/Section";
import Typography from "root/components/Typography";
import ParallaxEffect from "root/components/ParallaxEffect";
import { InView } from "react-intersection-observer";
import classNames from "classnames";
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
        <Typography variant="small-body" color="white">
          {points}
        </Typography>
      </div>
    </div>
  );
};

const HomeServices = ({ data }) => {
  const [inView, setInView] = useState([]);
  const [blockVisible, setBlockVisible] = useState(null);
  const scrollPosition = useScroll();
  const conceptRef = useRef();
  const strategyRef = useRef();

  const handleClickConcept = () => {
    // setInView({ service: "concept" });
  };

  const handleChangeConcept = intersecting => {
    const newInView = cloneDeep(inView);

    if (intersecting) {
      newInView.push("concept");
    } else {
      pull(newInView, "concept");
    }

    setInView(newInView);
  };

  const handleClickStrategy = () => {
    // setInView("strategy");
  };

  const handleChangeStrategy = intersecting => {
    const newInView = cloneDeep(inView);

    if (intersecting) {
      newInView.push("strategy");
    } else {
      pull(newInView, "strategy");
    }

    setInView(newInView);
  };

  const isBetweenPositions = (ref, space, percentage) => {
    const initial = ref.current.node.offsetTop - space;
    const end = initial + ref.current.node.offsetHeight * percentage;

    if (scrollPosition >= initial && scrollPosition < end) {
      return true;
    }

    return false;
  };

  useLayoutEffect(() => {
    if (!isEmpty(inView)) {
      if (
        indexOf(inView, "strategy") !== -1 &&
        isBetweenPositions(strategyRef, 400, 0.4)
      ) {
        setBlockVisible("strategy");
      } else if (
        indexOf(inView, "concept") !== -1 &&
        isBetweenPositions(conceptRef, 50, 0.5)
      ) {
        setBlockVisible("concept");
      } else {
        setBlockVisible(null);
      }
    }
  }, [scrollPosition, inView]);

  return (
    <Section>
      <div styleName="root">
        <div styleName="concept-stategy">
          <div styleName="concept">
            <InView
              as="div"
              styleName={classNames("image", {
                "concept-image": true,
                selected: blockVisible === "concept",
              })}
              onClick={handleClickConcept}
              onChange={handleChangeConcept}
              ref={conceptRef}
            >
              <ParallaxEffect
                image={data.concept.image.fluid}
                alt="our team on a meeting"
              />
              {renderBlock(
                "We plan your",
                "Concept",
                "Business objectives\nUser expectations\nThe scope of the project",
              )}
            </InView>
          </div>
          <div styleName="strategy">
            <InView
              as="div"
              styleName={classNames("image", {
                "stategy-image": true,
                selected: blockVisible === "strategy",
              })}
              onClick={handleClickStrategy}
              onChange={handleChangeStrategy}
              ref={strategyRef}
            >
              <ParallaxEffect
                image={data.stategy.image.fluid}
                alt="developers working on a whiteboard"
              />
              {renderBlock(
                "We define your",
                "Strategy",
                "Product vision\nDesign Sprint\nMarket research\nRequirements definition",
              )}
            </InView>
          </div>
        </div>
        <div styleName="code-design-growth">
          <div styleName="code">
            <div styleName="image code-image">
              <ParallaxEffect
                image={data.code.image.fluid}
                alt="our team on a meeting"
              />
            </div>
          </div>
          <div styleName="design-growth">
            <div styleName="image design-image">
              <ParallaxEffect
                image={data.design.image.fluid}
                alt="our team on a meeting"
              />
            </div>
            <div styleName="image growth-image">
              <ParallaxEffect
                image={data.growth.image.fluid}
                alt="our team on a meeting"
              />
            </div>
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
