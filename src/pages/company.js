import React, { Component } from "react";
import Layout from "root/components/Layout";
import Footer from "root/components/Footer";
import CompanyHero from "../sections/CompanyHero";

export default class CompanyPage extends Component {
  render() {
    return (
      <Layout
        title="Thriving for better healthcare solutions | SVHealth"
        description="We want software accessible and readily available to everyone in the world, improve people's lives and guiding them to a healthier and more sustainable lifestyle."
      >
        <CompanyHero />

        <Footer />
      </Layout>
    );
  }
}
