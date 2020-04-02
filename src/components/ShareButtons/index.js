import React from "react";
import PropTypes from "prop-types";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import Typography from "root/components/Typography";

import "./index.css";

function ShareButtons({ url }) {
  return (
    <div styleName="root">
      <div styleName="button">
        <TwitterShareButton url={url}>
          <Typography color="klein-blue">Tw</Typography>
        </TwitterShareButton>
      </div>
      <div styleName="button">
        <FacebookShareButton url={url}>
          <Typography color="klein-blue">Fb</Typography>
        </FacebookShareButton>
      </div>
      <div styleName="button">
        <LinkedinShareButton url={url}>
          <Typography color="klein-blue">ln</Typography>
        </LinkedinShareButton>
      </div>
    </div>
  );
}

ShareButtons.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ShareButtons;
