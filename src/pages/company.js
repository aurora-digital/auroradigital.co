import React from "react";
import Layout from "root/components/Layout";
import Navbar from "root/components/Navbar";
import CompanyHero from "root/sections/CompanyHero";
import TechRevolutionSection from "root/sections/TechRevolutionSection";
import CompanyTeamSection from "root/sections/CompanyTeamSection";

const CompanyPage = () => (
  <Layout>
    <Navbar
      currentPage="company"
      color="dark-blue"
      underlineColor="light-blue"
      logoColor="light-blue"
    />
    <CompanyHero />
    <TechRevolutionSection />
    <CompanyTeamSection />
  </Layout>
);

export default CompanyPage;
