import React from "react";
import Layout from "root/components/Layout";
import Navbar from "root/components/Navbar";
import ServicesHero from "root/sections/ServicesHero";

const CompanyPage = () => (
  <Layout>
    <Navbar
      currentPage="services"
      color="dark-blue"
      underlineColor="light-blue"
      logoColor="light-blue"
    />
    <ServicesHero />
  </Layout>
);

export default CompanyPage;
