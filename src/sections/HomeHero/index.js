import React from "react";

import HomeHeroNoScroll from "./NoScroll";
import HomeHeroWithScroll from "./WithScroll";

import "./index.css";

function HomeHero() {
  return (
    <>
      <div styleName="no-scroll">
        <HomeHeroNoScroll />
      </div>

      <div styleName="with-scroll">
        <HomeHeroWithScroll />
      </div>
    </>
  );
}

export default HomeHero;
