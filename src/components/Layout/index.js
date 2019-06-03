import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { ParallaxProvider } from "react-scroll-parallax";

import "./index.css";

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string,
  };

  static defaultProps = {
    keywords: "",
  };

  render() {
    const { title, description, keywords, children } = this.props;

    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
        </Helmet>
        <ParallaxProvider>
          <div>{children}</div>
        </ParallaxProvider>
      </div>
    );
  }
}
