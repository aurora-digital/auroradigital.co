import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";

import "./index.css";
import useDetectJavascript from "root/hooks/useDetectJavascript";

const FadeUpOnScroll = ({ children, className }) => {
  const hasJavascript = useDetectJavascript();
  const [readyToAnimate, setReadyToAnimate] = useState(false);
  const [ref, inView] = useInView();
  const styles = classNames("root", {
    animate: readyToAnimate,
    hide: !hasJavascript,
  });

  useEffect(
    () => {
      if (inView) setReadyToAnimate(true);
    },
    [inView],
  );

  return (
    <>
      <noscript>
        <div styleName="noscript">{children}</div>
      </noscript>
      <div className={className} ref={ref} styleName={styles}>
        {children}
      </div>
    </>
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
