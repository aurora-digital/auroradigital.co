import React from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

import Section from "root/components/Section";
import Navbar from "root/components/Navbar";
import Typography from "root/components/Typography";

import "../common.css";

function HomeHeroNoScroll() {
  const [ref, inView] = useInView();
  const waveStyles = classNames("wave", { animate: inView });

  return (
    <div ref={ref}>
      <div styleName="root">
        <Navbar theme="secondary" />

        <Section verticalSpacing={false}>
          <div styleName="title">
            <Typography weight="bold" variant="h1">
              We move health forward
            </Typography>
          </div>

          <div styleName="overlay">
            <div styleName={waveStyles} />
          </div>
        </Section>
      </div>
    </div>
  );
}

export default HomeHeroNoScroll;
