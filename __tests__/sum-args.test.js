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
    const input1 = 1;
    const input2 = 2;
    const input3 = 3;
    const input4 = 4;
    const input5 = 5;
    const expectedOutput = 15;
    const actualOutput = sumArgs(input1, input2, input3, input4, input5);
    expect(actualOutput).toBe(expectedOutput);
  });
});
