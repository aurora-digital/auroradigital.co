import React from "react";
import { withController } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

import Section from "root/components/Section";
import Navbar from "root/components/Navbar";
import Typography from "root/components/Typography";

import "./index.css";

function HomeHeroNoScroll() {
  const [ref, inView] = useInView();
  const waveStyles = classNames("wave", { animate: inView });

  return (
    <div styleName="root" ref={ref}>
      <div styleName="background" />

      <div styleName="navbar">
        <Navbar theme="secondary" />
      </div>

      <Section verticalSpacing={false}>
        <div styleName="title">
          <Typography weight="bold" variant="h1">
            Nurturing digital healthcare
          </Typography>
        </div>

        <div styleName="overlay">
          <div styleName={waveStyles} />

          <Section verticalSpacing={false}>
            <div styleName="copy">
              <Typography color="baby-blue">
                We design and develop thoughtful web and mobile healthcare
                solutions, accessible to anyone, anywhere, at anytime.
              </Typography>
            </div>
          </Section>
        </div>
      </Section>
    </div>
  );
}

export default withController(HomeHeroNoScroll);
