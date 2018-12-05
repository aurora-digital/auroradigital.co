import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./index.css";

const Section = ({ children, verticalSpacing, separator }) => {
  const styles = classNames("root", { verticalSpacing, separator });

  return <div styleName={styles}>{children}</div>;
};

Section.propTypes = {
  verticalSpacing: PropTypes.bool,
  children: PropTypes.node.isRequired,
  separator: PropTypes.bool,
};

Section.defaultProps = {
  verticalSpacing: true,
  separator: false,
};

export default Section;
