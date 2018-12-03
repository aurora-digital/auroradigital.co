import React from "react";
import Link from "gatsby-link";

import "./index.css";

export default () => (
  <div styleName="header">
    <div styleName="header-inner">
      <Link to="/" styleName="header-link">
        Gatsby
      </Link>
    </div>
  </div>
);
