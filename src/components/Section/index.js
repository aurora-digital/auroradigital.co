import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";
import "./index.css";

const Section = ({ children, verticalSpacing, animate }) => {
  const [ref, inView] = useInView();
  const [load, setLoad] = useState(false);

  const handleAnimation = () => {
    setLoad(true);
  };

  const styles = classNames("root", {
    verticalSpacing,
    animate: inView && animate && !load,
  });

  return (
    <div ref={ref} styleName={styles} onAnimationEnd={handleAnimation}>
      {children}
    </div>
  );
};

Section.propTypes = {
  verticalSpacing: PropTypes.bool,
  animate: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  verticalSpacing: true,
  animate: false,
};

export default Section;
