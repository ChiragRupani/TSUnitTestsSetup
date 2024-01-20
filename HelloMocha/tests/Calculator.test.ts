import { expect } from "chai";
import calculator from "../src/Calculator";

describe("calculate", function () {
  it("add", function () {
    let result = calculator.Sum(5, 2);
    expect(result).equal(7);
  });

  it("substract", function () {
    let result = calculator.Difference(5, 2);
    expect(result).equal(3);
  });
});
