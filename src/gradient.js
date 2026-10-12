(function exposeGradientMath(globalObject) {
  "use strict";
  const TARGET_WEIGHT = 0.3;
  const BASE_LOSS = 0.2;
  function lossAt(weight) { return (weight - TARGET_WEIGHT) ** 2 + BASE_LOSS; }
  function gradientAt(weight) { return 2 * (weight - TARGET_WEIGHT); }
  function takeStep(weight, learningRate) { return weight - learningRate * gradientAt(weight); }
  const api = { TARGET_WEIGHT, BASE_LOSS, lossAt, gradientAt, takeStep };
  globalObject.GradientLab = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window === "undefined" ? globalThis : window);

