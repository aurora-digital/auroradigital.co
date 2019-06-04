import React, { Component } from "react";
import Layout from "root/components/Layout";
import Footer from "root/components/Footer";
import CompanyHero from "../sections/CompanyHero";
import CompanyMedtechRevolution from "../sections/CompanyMedtechRevolution";
import CompanyTeam from "../sections/CompanyTeam";
import CompanyValues from "../sections/CompanyValues";

export default class CompanyPage extends Component {
  render() {
    return (
      <Layout
        title="Thriving for better healthcare solutions | Aurora"
        description="We want software accessible and readily available to everyone in the world, improve people's lives and guiding them to a healthier and more sustainable lifestyle."
      >
        <CompanyHero />
        <CompanyMedtechRevolution />

        <CompanyTeam />
        <CompanyValues />

        <Footer />
      </Layout>
    );
  }
}
