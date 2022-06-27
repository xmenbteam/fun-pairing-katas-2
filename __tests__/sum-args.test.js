const sumArgs = require("../katas/sum-args");

describe("sumArgs", () => {
  test("no args", () => {
    const expectedOutput = 0;
    const actualOutput = sumArgs();
    expect(actualOutput).toBe(expectedOutput);
  });
  test("returns a number", () => {
    const input = 0;
    const expectedOutput = 0;
    const actualOutput = sumArgs(input);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("returns two args added together", () => {
    const input1 = 1;
    const input2 = 2;
    const expectedOutput = 3;
    const actualOutput = sumArgs(input1, input2);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("returns loads", () => {
    const inputs = [1, 2, 3, 4, 5];
    const expectedOutput = 15;
    const actualOutput = sumArgs(...inputs);
    expect(actualOutput).toBe(expectedOutput);
  });
});
