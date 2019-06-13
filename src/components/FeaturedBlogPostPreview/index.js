import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { Link } from "gatsby";

import Typography from "root/components/Typography";

import "./index.css";
import WavyLink from "../WavyLink";

function FeaturedBlogPostPreview({
  title,
  description,
  author,
  date,
  path,
  featuredImage,
}) {
  return (
    <div styleName="root">
      <div styleName="copy">
        <div styleName="author">
          <Typography variant="small-body" color="oxford-blue">
            {author.name} | {date}
          </Typography>
        </div>

        <div styleName="title">
          <Typography weight="medium" color="oxford-blue">
            {title}
          </Typography>
        </div>

        <div styleName="description">
          <Typography variant="small-body" color="oxford-blue">
            {description}
          </Typography>
        </div>

        <div styleName="link">
          <WavyLink>
            <Typography variant="small-body" weight="bold" color="oxford-blue">
              <Link to={`/blog/articles/${path}`}>Read More</Link>
            </Typography>
          </WavyLink>
        </div>
      </div>

      <div styleName="image">
        <Img sizes={featuredImage.childImageSharp.sizes} objectFit="cover" />
      </div>
    </div>
  );
}

FeaturedBlogPostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  featuredImage: PropTypes.shape({}).isRequired,
};

export default FeaturedBlogPostPreview;
