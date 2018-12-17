import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Navbar from "root/components/Navbar";
import Footer from "root/components/Footer";
import Background from "root/components/Background";
import Layout from "root/components/Layout";
import HomePageHero from "root/sections/HomeHero";
import HomePagePartners from "root/sections/HomePartners";
import HomePride from "root/sections/HomePride";
import HomePageServices from "root/sections/HomeServices";
import heroVideo from "root/assets/videos/Hero-vertical.mp4";
import prideVideo from "root/assets/videos/pride.mp4";

export const query = graphql`
  query {
    heroMolecules: file(relativePath: { eq: "images/hero-molecules.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    pridePoster: file(relativePath: { eq: "images/pride-poster.jpg" }) {
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
    const { data } = this.props;

    return (
      <Layout>
        <Background
          video={heroVideo}
          image={data.heroMolecules.image.fluid}
          key="hero"
          name="hero"
          autoPlay
        >
          <Navbar currentPage="home" theme="secondary" />
          <HomePageHero />
        </Background>
        <HomePageServices />
        <Background
          video={prideVideo}
          image={data.pridePoster.image.fluid}
          maxWidth
          key="pride"
          name="pride"
          color="lavender"
          blendMode="normal"
        >
          <HomePride />
        </Background>
        <HomePagePartners />
        <Footer />
      </Layout>
    );
  }
}
