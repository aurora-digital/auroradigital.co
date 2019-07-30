import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import Helmet from "react-helmet";

import Layout from "root/components/Layout";
import Navbar from "root/components/Navbar";
import Typography from "root/components/Typography";
import Footer from "root/components/Footer";
import ParallaxEffect from "root/components/ParallaxEffect";
import Comments from "root/components/Comments";

import "./index.css";

export const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        description
        featuredImage {
          image: childImageSharp {
            fluid(maxWidth: 1024, quality: 95) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

function BlogPost({ data, pageContext }) {
  const {
    mdx: { body, frontmatter },
  } = data;
  const { author } = pageContext;

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <Helmet>
        <meta
          property="og:image"
          content={`https://auroradigital.co${frontmatter.featuredImage.image.fluid.src}`}
        />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@AuroraDigitalH1" />
        <meta
          property="twitter:image"
          content={`https://auroradigital.co${frontmatter.featuredImage.image.fluid.src}`}
        />
        <meta
          property="twitter:url"
          content={`https://auroradigital.co${frontmatter.path}`}
        />
        <meta property="twitter:title" content={frontmatter.title} />
        <meta
          property="twitter:description"
          content={frontmatter.description}
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
  data: PropTypes.shape({
    mdx: PropTypes.shape(),
  }).isRequired,
  pageContext: PropTypes.shape({
    author: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
};

export default BlogPost;
