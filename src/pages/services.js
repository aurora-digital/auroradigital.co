import React from "react";
import Layout from "root/components/Layout";
import Navbar from "root/components/Navbar";
import Footer from "root/components/Footer";
import ServicesHero from "root/sections/ServicesHero";

import ServicesTechnologies from "root/sections/ServicesTechnologies";

const CompanyPage = () => (
  <Layout>
    <Navbar
      currentPage="services"
      color="dark-blue"
      underlineColor="light-blue"
      logoColor="light-blue"
    />
    <ServicesHero />
    <ServicesTechnologies />
    <Footer />
  </Layout>
);

export default CompanyPage;
