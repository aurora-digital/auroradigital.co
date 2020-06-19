import React from "react";
import HeroCopyElement from "root/components/HeroCopyElement";
import HomeHeroNoScroll from "./NoScroll";
import HomeHeroWithScroll from "./WithScroll";

import "./index.css";

function HomeHero() {
  return (
    <>
      <div styleName="no-scroll">
        <HomeHeroNoScroll />
        <div styleName="copy">
          <HeroCopyElement />
        </div>
      </div>

      <div styleName="with-scroll">
        <HomeHeroWithScroll />
        <div styleName="copy">
          <HeroCopyElement />
        </div>
      </div>
    </>
  );
}

export default HomeHero;
