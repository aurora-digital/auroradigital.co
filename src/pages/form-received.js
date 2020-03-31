import React, { Component } from "react";
import Layout from "root/components/Layout";
import FormReceivedFeedback from "root/components/FormReceivedFeedback";

import "./form-received.css";

export default class FormReceived extends Component {
  render() {
    return (
      <Layout
        title="Striving for better healthcare solutions | Aurora"
        description="We want software accessible and readily available to everyone in the world, improve people's lives and guiding them to a healthier and more sustainable lifestyle."
      >
        <div styleName="root">
          <FormReceivedFeedback />
        </div>
      </Layout>
    );
  }
}
