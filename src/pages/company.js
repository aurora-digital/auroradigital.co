import React from "react";
import Layout from "root/components/Layout";
import Navbar from "root/components/Navbar";
import Footer from "root/components/Footer";
import CompanyHero from "root/sections/CompanyHero";
import TechRevolutionSection from "root/sections/TechRevolutionSection";
import CompanyTeamSection from "root/sections/CompanyTeamSection";
import CompanyMagical from "root/sections/CompanyMagical";
import CompanyAdvisorsSection from "root/sections/CompanyAdvisorsSection";

const CompanyPage = () => (
  <Layout
    title="Thriving for better healthcare solutions | SVHealth"
    description="We want software accessible and readily available to everyone in the world, improve people's lives and guiding them to a healthier and more sustainable lifestyle."
  >
    <Navbar currentPage="company" theme="primary" />
    <CompanyHero />
    <TechRevolutionSection />
    <CompanyTeamSection />
    <CompanyMagical />
    <CompanyAdvisorsSection />
    <Footer />
  </Layout>
);

export default CompanyPage;
