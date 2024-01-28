//example.test.js
const isEven = require("../main");

describe("isEven", () => {
  test("returns true if number is even", () => {
    expect(isEven(2)).toBe(true);
  });

  test("returns false if number is odd", () => {
    expect(isEven(3)).toBe(false);
  });
});
