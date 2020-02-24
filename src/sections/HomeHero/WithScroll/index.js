import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import classNames from "classnames";

import Section from "root/components/Section";
import Navbar from "root/components/Navbar";
import Typography from "root/components/Typography";

import "../common.css";

function HomeHeroWithScroll() {
  const [ref, inView] = useInView();
  const { scrollYProgress } = useViewportScroll();
  const scrollPositive = useTransform(scrollYProgress, value => value * 3500);
  const scrollNegative = useTransform(scrollYProgress, value => value * -3500);
  const waveStyles = classNames("wave", { animate: inView });

  return (
    <div ref={ref}>
      <div styleName="root">
        <Navbar theme="secondary" />

        <Section verticalSpacing={false}>
          <div styleName="title">
            <div styleName="parallax-container" aria-hidden="true">
              <motion.div style={{ translateX: scrollPositive }}>
                <Typography weight="bold" variant="h1">
                  Nurturing digital
                </Typography>
              </motion.div>
              <motion.div style={{ translateX: scrollNegative }}>
                <Typography weight="bold" variant="h1">
                  healthcare
                </Typography>
              </motion.div>
            </div>

            <div styleName="parallax-fallback" aria-hidden="true">
              <Typography color="oxford-blue" weight="bold" variant="h1">
                Nurturing digital healthcare
              </Typography>
            </div>
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
    </div>
  );
}

export default HomeHeroWithScroll;
