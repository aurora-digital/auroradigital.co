import React, { Component } from "react";
import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Header from "../Header";

import "./index.css";

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    data: PropTypes.shape({
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          keywords: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const {
      title: siteTitle,
      description: siteDescription,
      keywords: siteKeywords,
    } = this.props.data.site.siteMetadata;

    return (
      <div styleName="root">
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
          <meta name="keywords" content={siteKeywords} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
        </Helmet>
        <Header />
        <div>{this.props.children}</div>
      </div>
    );
  }
}
