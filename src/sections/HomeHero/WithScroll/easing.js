/* eslint-disable no-param-reassign, no-return-assign, id-length */
export default function easing(t, b, c, d) {
  return c * (t /= d) * t + b;
}
