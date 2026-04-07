import assert from "assert";
import add from "../src/add.js";

describe("Add function", () => {
  it("should add two numbers correctly", () => {
    assert.strictEqual(add(2, 3), 5);
  });
});