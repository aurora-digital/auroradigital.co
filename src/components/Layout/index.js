import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

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
    const { title, description, keywords } = this.props;

    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
