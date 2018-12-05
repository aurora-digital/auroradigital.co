import React from "react";
import Layout from "root/components/Layout";
import Navbar from "root/components/Navbar";
import CompanyHero from "root/sections/CompanyHero";

const CompanyPage = () => (
  <Layout>
    <Navbar
      currentPage="company"
      color="dark-blue"
      underlineColor="light-blue"
      logoColor="light-blue"
    />
    <CompanyHero />
  </Layout>
);

export default CompanyPage;
