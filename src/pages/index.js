import React from "react";
import Navbar from "root/components/Navbar";
import Background from "root/components/Background";
import heroMolecules from "root/assets/images/hero-molecules.png";
import Layout from "root/components/Layout";
import HomePageHero from "root/sections/HomeHero";

const IndexPage = () => (
  <Layout>
    <Background image={heroMolecules}>
      <Navbar currentPage="home" />
      <HomePageHero />
    </Background>
  </Layout>
);

export default IndexPage;
