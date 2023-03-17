import assert from "node:assert";
import { describe, it } from "node:test";
import Calculator from "../src/Calculator";

describe("calculate", function () {
  it("add", function () {
    let result = Calculator.Sum(5, 2);
    assert.equal(result, 7);
  });

  it("substract", function () {
    let result = Calculator.Difference(5, 2);
    assert.equal(result, 3);
  });
});
