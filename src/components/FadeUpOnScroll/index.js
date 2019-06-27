import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";

import "./index.css";

const FadeUpOnScroll = ({ children, className }) => {
  const [animated, setAnimated] = useState(false);
  const [ref, inView] = useInView();

  const styles = classNames("root", {
    animate: inView && !animated,
  });

  return (
    <div
      className={className}
      ref={ref}
      styleName={styles}
      onAnimationEnd={() => setAnimated(true)}
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
