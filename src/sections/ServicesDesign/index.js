import React from "react";
import Section from "root/components/Section";
import Typography from "root/components/Typography";
import ListItem from "root/components/ListItem";

import "./index.css";

const ServicesDesign = () => (
  <Section>
    <div styleName="root">
      <div styleName="design-matters">
        <div styleName="work">
          <div styleName="title">
            <Typography weight="bold" variant="h2" fontFamily="meta-serif">
              Design matters because people matter
            </Typography>
          </div>
          <div styleName="copy">
            <Typography variant="body">
              It’s not only about pretty pixels. Quality and attention to detail
              is imperative and we test and validate all of our products with
              real users to ensure that. We always strive to deliver the best
              solutions for our partners and users
            </Typography>
          </div>
        </div>

        <div styleName="focus">
          <div styleName="title">
            <Typography weight="bold" variant="body">
              Our focus
            </Typography>
          </div>
          <div styleName="copy">
            <ListItem>Research & Stategy</ListItem>
            <ListItem>Brand Identity</ListItem>
            <ListItem>Product Design</ListItem>
            <ListItem>User Testing</ListItem>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default ServicesDesign;
