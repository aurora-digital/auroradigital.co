import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Navbar from "root/components/Navbar";
import Background from "root/components/Background";
import Layout from "root/components/Layout";
import HomePageHero from "root/sections/HomeHero";

export const query = graphql`
  query {
    heroMolecules: file(relativePath: { eq: "images/hero-molecules.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <Background image={data.heroMolecules.image.fluid}>
      <Navbar currentPage="home" />
      <HomePageHero />
    </Background>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    heroMolecules: PropTypes.shape({
      image: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default IndexPage;
