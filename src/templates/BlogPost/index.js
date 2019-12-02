import React from "react";
import PropTypes from "prop-types";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import Helmet from "react-helmet";

import Layout from "root/components/Layout";
import Navbar from "root/components/Navbar";
import Typography from "root/components/Typography";
import Footer from "root/components/Footer";
import ParallaxEffect from "root/components/ParallaxEffect";
import Comments from "root/components/Comments";

import "./index.css";

function BlogPost({ pageContext }) {
  const { frontmatter, body } = pageContext.blogPost;
  const author = frontmatter.author.childAuthorsJson;

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <Helmet>
        <meta name="author" property="og:author" content={author.name} />
        <meta
          name="description"
          property="og:description"
          content={frontmatter.description}
        />
        <meta
          name="image"
          property="og:image"
          content={`http://auroradigital.co${frontmatter.featuredImage.image.fluid.src}`}
        />
        <meta
          name="image"
          property="og:image:secure_url"
          content={`https://auroradigital.co${frontmatter.featuredImage.image.fluid.src}`}
        />
        <meta name="title" property="og:title" content={frontmatter.title} />
        <meta name="type" property="og:type" content="article" />
        <meta
          name="url"
          property="og:url"
          content={`https://auroradigital.co${frontmatter.path}`}
        />
        <meta
          name="twitter:card"
          property="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:creator"
          property="twitter:creator"
          content={author.twitter}
        />
        <meta
          name="twitter:description"
          property="twitter:description"
          content={frontmatter.description}
        />
        <meta
          name="twitter:image"
          property="twitter:image"
          content={`https://auroradigital.co${frontmatter.featuredImage.image.fluid.src}`}
        />
        <meta
          name="twitter:image:alt"
          property="twitter:image:alt"
          content={`${frontmatter.title} preview`}
        />
        <meta
          name="twitter:site"
          property="twitter:site"
          content="@AuroraDigitalH1"
        />
        <meta
          name="twitter:title"
          property="twitter:title"
          content={frontmatter.title}
        />
        <meta
          name="twitter:url"
          property="twitter:url"
          content={`https://auroradigital.co${frontmatter.path}`}
        />
      </Helmet>

      <Navbar theme="primary" />

      <div styleName="banner">
        <ParallaxEffect
          image={frontmatter.featuredImage.image.fluid}
          parallaxAmount={0.1}
        />
      </div>

      <article styleName="root">
        <div styleName="author">
          <Typography variant="small-body" color="oxford-blue">
            {author.name} | {frontmatter.date}
          </Typography>
        </div>

        <Typography weight="medium" color="oxford-blue">
          {frontmatter.title}
        </Typography>

        <div styleName="content">
          <MDXRenderer>{body}</MDXRenderer>
        </div>

        <Comments path={frontmatter.path} title={frontmatter.title} />
      </article>

      <Footer />
    </Layout>
  );
}

BlogPost.propTypes = {
  pageContext: PropTypes.shape({
    blogPost: PropTypes.shape({
      frontmatter: PropTypes.shape({
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        featuredImage: PropTypes.object.isRequired,
        author: PropTypes.shape({
          childAuthorsJson: PropTypes.shape({
            name: PropTypes.string.isRequired,
            twitter: PropTypes.string,
            twitterid: PropTypes.string,
          }).isRequired,
        }).isRequired,
      }).isRequired,
      body: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default BlogPost;
