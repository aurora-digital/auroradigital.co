import React from "react";
import Layout from "root/components/Layout";
import Navbar from "root/components/Navbar";
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
  </Layout>
);

export default CompanyPage;
