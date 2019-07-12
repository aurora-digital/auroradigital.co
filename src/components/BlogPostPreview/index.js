import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import ParallaxEffect from "root/components/ParallaxEffect";
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
      <div styleName="image">
        <ParallaxEffect
          image={featuredImage.image.fluid}
          parallaxAmount={0.1}
        />
      </div>
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
  featuredImage: PropTypes.object.isRequired,
};

export default BlogPostPreview;
