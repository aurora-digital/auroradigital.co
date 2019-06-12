import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./index.css";

const Section = ({ children, verticalSpacing }) => {
  const styles = classNames("root", {
    verticalSpacing,
  });

  return <div styleName={styles}>{children}</div>;
};

Section.propTypes = {
  verticalSpacing: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  verticalSpacing: true,
};

export default Section;
