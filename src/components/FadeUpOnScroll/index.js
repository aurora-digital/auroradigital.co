import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";

import "./index.css";

const FadeUpOnScroll = ({ children, className }) => {
  const [ref, inView] = useInView();
  const [animationHasFinished, setFinished] = useState(false);
  const [animationStart, setStart] = useState(false);

  const handleAnimationEnd = () => (animationStart ? setFinished(true) : null);

  const handleAnimationStart = () =>
    !animationHasFinished ? setStart(true) : null;

  useEffect(
    () => {
      if (!inView && animationStart && !animationHasFinished) setFinished(true);
    },
    [inView],
  );

  const styles = classNames("root", {
    "animate-start": inView && !animationHasFinished,
    "animate-end": animationHasFinished,
  });

  return (
    <div
      className={className}
      ref={ref}
      styleName={styles}
      onAnimationStart={handleAnimationStart}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  );
};

FadeUpOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

FadeUpOnScroll.defaultProps = {
  className: "",
};

export default FadeUpOnScroll;
