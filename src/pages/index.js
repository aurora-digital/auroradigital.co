import React from "react";
import Layout from "../components/Layout";
import Typography from "../components/Typography";
import Button from "../components/Button";

const IndexPage = () => (
  <Layout>
    <Typography variant="h1" fontFamily="meta-serif">
      h1
    </Typography>
    <Typography variant="h2" fontFamily="meta-serif">
      h2
    </Typography>
    <Typography variant="body">body</Typography>
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
