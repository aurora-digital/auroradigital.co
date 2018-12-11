import React from "react";
import Layout from "root/components/Layout";
import Navbar from "root/components/Navbar";
import Footer from "root/components/Footer";
import ServicesHero from "root/sections/ServicesHero";
import ServicesWork from "root/sections/ServicesWork";
import ServicesTechnologies from "root/sections/ServicesTechnologies";

const ServicesPage = () => (
  <Layout>
    <Navbar
      currentPage="services"
      theme="primary"
    />
    <ServicesHero />
    <ServicesWork />
    <ServicesTechnologies />
    <Footer />
  </Layout>
);

export default ServicesPage;
