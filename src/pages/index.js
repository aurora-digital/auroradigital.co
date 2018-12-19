import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Navbar from "root/components/Navbar";
import Footer from "root/components/Footer";
import Background from "root/components/Background";
import Layout from "root/components/Layout";
import HomePageHero from "root/sections/HomeHero";
import HomeCostumers from "root/sections/HomeCostumers";
import HomePageServices from "root/sections/HomeServices";
import heroVideo from "root/assets/videos/hero-home.mp4";
import costumersVideo from "root/assets/videos/section-home.mp4";

import "./index.css";

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
        <div styleName="costumers">
          <Background
            video={costumersVideo}
            image={data.costumersPoster.image.fluid}
            maxWidth
            key="costumers"
            name="costumers"
            color="lavender"
            blendMode="normal"
          >
            <HomeCostumers />
          </Background>
        </div>
        <Footer />
      </Layout>
    );
  }
}
