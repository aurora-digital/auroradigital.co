/* eslint-disable react/no-danger */
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import PropTypes from "prop-types";

function Noscript({ children }) {
  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: renderToStaticMarkup(children).replace(/noscript/g, "div"),
      }}
    />
  );
}

Noscript.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Noscript;
