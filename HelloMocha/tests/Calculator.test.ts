import assert from "node:assert/strict";
import { describe, it } from "node:test";
import calculator from "../src/Calculator";

void describe("calculate", function () {
  void it("add", function () {
    let result = calculator.Sum(5, 2);
    assert.equal(result, 7);
  });

  void it("substract", function () {
    let result = calculator.Difference(5, 2);
    assert.equal(result, 3);
  });
});
