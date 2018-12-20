import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Typography from "root/components/Typography";

import "./index.css";

const ListItem = ({ color, children }) => {
  const styles = classNames("root", { [color]: true });

  return (
    <div styleName={styles}>
      <svg
        styleName="icon"
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        viewBox="0 0 8 8"
      >
        <path d="M3.96234 7.96764C0.330195 8.3033 -8.96959e-08 5.948 -1.48497e-07 4.60279C-2.07298e-07 3.25758 0.0188298 2.83838 2 0.819506C3.98117 -1.19937 7.59514 0.901678 7.92501 2.9215C8.25488 4.94133 7.59449 7.63197 3.96234 7.96764Z" />
      </svg>

      <Typography color={color} variant="body">
        {children}
      </Typography>
    </div>
  );
};

ListItem.propTypes = {
  color: PropTypes.oneOf(["dark-blue", "white"]),
  children: PropTypes.node.isRequired,
};

ListItem.defaultProps = {
  color: "white",
};

export default ListItem;
