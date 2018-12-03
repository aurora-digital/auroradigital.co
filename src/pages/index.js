import React from "react";
import Button from "../components/Button";

import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout>
    <div style={{ margin: 20 }}>
      <Button>Contact us</Button>
    </div>
    <div style={{ margin: 20 }}>
      <Button type="secondary">View Services</Button>
    </div>
    <div style={{ margin: 20 }}>
      <Button size="medium">Tell us everything</Button>
    </div>
  </Layout>
);

export default IndexPage;
