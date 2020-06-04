require("./src/styles/reset.css");
require("./src/styles/default.css");
require("./src/styles/fonts.css");

// eslint-disable-next-line import/prefer-default-export
export const onClientEntry = async () => {
  if (
    typeof window.IntersectionObserver === "undefined" ||
    typeof IntersectionObserver === "undefined"
  ) {
    await import("intersection-observer");
  }

  if (typeof Map === "undefined") {
    await import("core-js/es6/map");
  }

  if (typeof Set === "undefined") {
    await import("core-js/es6/set");
  }

  if (typeof window.requestAnimationFrame === "undefined") {
    import("raf/polyfill");
  }

  await import("babel-polyfill");
};
