import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { Link } from "gatsby";

import Typography from "root/components/Typography";

import "./index.css";

function BlogPostPreview({
  title,
  description,
  author,
  date,
  path,
  featuredImage,
}) {
  return (
    <Link styleName="root" to={`/blog/articles/${path}`}>
      <Img sizes={featuredImage.childImageSharp.sizes} />

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
    </Link>
  );
}

BlogPostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  featuredImage: PropTypes.shape({}).isRequired,
};

export default BlogPostPreview;
