const { max, min } = require("../katas/max-and-min");

describe("max", () => {
  test("returns 0 with an empty array", () => {
    const input = [];
    const actualOutput = max(input);
    const expectedOutput = 0;

    expect(actualOutput).toBe(expectedOutput);
  });
  test("returns number in array", () => {
    const input = [3];
    const actualOutput = max(input);
    const expectedOutput = 3;

    expect(actualOutput).toBe(expectedOutput);
  });
  test("returns largest number in array", () => {
    const input = [3, -2, 5, 6];
    const actualOutput = max(input);
    const expectedOutput = 6;

    expect(actualOutput).toBe(expectedOutput);
  });
});

describe("min", () => {
  test("returns 0 with an empty array", () => {
    const input = [];
    const actualOutput = min(input);
    const expectedOutput = 0;

    expect(actualOutput).toBe(expectedOutput);
  });
  test("returns number in array", () => {
    const input = [3];
    const actualOutput = min(input);
    const expectedOutput = 3;

    expect(actualOutput).toBe(expectedOutput);
  });
  test("returns smallest number in array", () => {
    const input = [3, -2, 5, 6];
    const actualOutput = min(input);
    const expectedOutput = -2;

    expect(actualOutput).toBe(expectedOutput);
  });
});
