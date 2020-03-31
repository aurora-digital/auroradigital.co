import React from "react";
import { Link } from "gatsby";

import Typography from "root/components/Typography";

import "./index.css";

const FormReceivedFeedback = () => {
  return (
    <div styleName="root">
      <div styleName="container">
        <div styleName="title">
          <Typography variant="h3" weight="bold" color="oxford-blue">
            Thank you!
          </Typography>
        </div>
        <Typography variant="small-body" color="oxford-blue">
          Your form submission has been received.
        </Typography>
        <div styleName="button">
          <Typography variant="small-body" color="klein-blue">
            <Link to="/">Back to our site</Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default FormReceivedFeedback;
