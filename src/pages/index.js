import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "root/components/Layout";
import Footer from "root/components/Footer";
import HomeHero from "../sections/HomeHero";
import HomePortfolio from "../sections/HomePortfolio";

export const query = graphql`
  query {
    heroMolecules: file(relativePath: { eq: "images/hero-home.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    costumersPoster: file(relativePath: { eq: "images/section-home.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default class IndexPage extends Component {
  static propTypes = {
    data: PropTypes.shape({
      heroMolecules: PropTypes.shape({
        image: PropTypes.shape({
          fluid: PropTypes.shape({}).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    return (
      <Layout
        title="Building health tech solutions | SV Health"
        description="We design and develop thoughtful web and mobile healthcare solutions, accessible to anyone, everywhere, at anytime."
      >
        <HomeHero />
        <HomePortfolio />
        <Footer />
      </Layout>
    );
  }
}
