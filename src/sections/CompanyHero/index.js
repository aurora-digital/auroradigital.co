import React, { useEffect } from "react";
import { Parallax, withController } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import Section from "root/components/Section";
import Navbar from "root/components/Navbar";
import Typography from "root/components/Typography";

import "./index.css";

const CompanyHero = ({ parallaxController }) => {
  const [ref, inView] = useInView();

  useEffect(() => {
    parallaxController.update();
  }, [inView]);

  return (
    <div styleName="root">
      <Navbar currentPage="company" theme="primary" />
      <Section verticalSpacing={false}>
        <div styleName="title" ref={ref}>
          <div styleName="parallax-container" aria-hidden="true">
            <Parallax styleName="parallax" x={[-78, 20]} tagOuter="figure">
              <Typography color="oxford-blue" weight="bold" variant="h1">
                Striving for
              </Typography>
            </Parallax>

            <Parallax styleName="parallax" x={[30, -30]} tagOuter="figure">
              <Typography color="oxford-blue" weight="bold" variant="h1">
                better healthcare
              </Typography>
            </Parallax>
          </div>

          <div styleName="parallax-fallback" aria-hidden="true">
            <Typography color="oxford-blue" weight="bold" variant="h1">
              Striving for better healthcare
            </Typography>
          </div>
        </div>
        <div styleName="copy">
          <Typography color="oxford-blue" variant="h3" weight="medium">
            The tech revolution came to change the world, but digital healthcare
            it’s still in its infancy
          </Typography>
        </div>
      </Section>
    </div>
  );
};

CompanyHero.propTypes = {
  parallaxController: PropTypes.object.isRequired,
};

export default withController(CompanyHero);
