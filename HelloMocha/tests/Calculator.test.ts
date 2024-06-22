import assert from "node:assert/strict";
import calculator from "../src/Calculator";

describe("calculate", function () {
  it("add", function () {
    let result = calculator.Sum(5, 2);
    assert.equal(result, 7);
  });

  it("substract", function () {
    let result = calculator.Difference(5, 2);
    assert.equal(result, 3);
  });
});
