import React, { Component } from "react";
import Layout from "root/components/Layout";
import Footer from "root/components/Footer";
import CareersHero from "root/sections/CareersHero";
import CareersHappiness from "root/sections/CareersHappiness";
import CareersJoin from "root/sections/CareersJoin";
import CareersPerks from "root/sections/CareersPerks";
import LetsTalk from "root/sections/LetsTalk";

export default class CareersPage extends Component {
  render() {
    return (
      <Layout
        title="Raising your grow | Aurora"
        description="We don't care about titles, we care about passion and desire to grow. Collaboration and versatility are essential to us. We are very different from each other, and each one of us has a fundamental role in Aurora's growth."
      >
        <CareersHero />
        <CareersHappiness />
        <CareersJoin />
        <CareersPerks />
        <LetsTalk />
        <Footer />
      </Layout>
    );
  }
}
