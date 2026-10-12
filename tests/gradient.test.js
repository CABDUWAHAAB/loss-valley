"use strict";
const assert = require("node:assert/strict");
const { TARGET_WEIGHT, lossAt, gradientAt, takeStep } = require("../src/gradient.js");
assert.equal(lossAt(TARGET_WEIGHT), 0.2);
assert.equal(gradientAt(TARGET_WEIGHT), 0);
assert.ok(lossAt(takeStep(-2.6, 0.18)) < lossAt(-2.6));
assert.ok(lossAt(takeStep(-2.6, 1.1)) > lossAt(-2.6));
console.log("Gradient math checks passed.");

