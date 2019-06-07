/* eslint-disable no-param-reassign, no-return-assign, id-length, no-cond-assign */
export default function easings(t, b, c, d, s) {
  if (s === undefined) s = 1.70158;

  if ((t /= d / 2) < 1) {
    return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
  }

  return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
}
