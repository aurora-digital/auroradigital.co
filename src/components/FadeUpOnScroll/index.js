import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";

import "./index.css";

const FadeUpOnScroll = ({ children }) => {
  const [ref, inView] = useInView();
  const [load, setLoad] = useState(false);

  const handleAnimation = () => {
    setLoad(true);
  };

  const styles = classNames("root", {
    "animate-start": inView && !load,
    "animate-end": inView && load,
  });

  return (
    <div ref={ref} styleName={styles} onAnimationEnd={handleAnimation}>
      {children}
    </div>
  );
};

FadeUpOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FadeUpOnScroll;
