const sumAscii = require("../katas/sum-ascii");

describe("sum ascii", () => {
  test("returns 0 with an empty array", () => {
    const input = [];
    const expectedOutput = 0;
    const actualOutput = sumAscii(input);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("returns the sum of ascii in a string", () => {
    const input = ["Sam"];
    const expectedOutput = 289;
    const actualOutput = sumAscii(input);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("returns the sum of ascii in a string", () => {
    const input = ["Sam", "San"];
    const expectedOutput = 290;
    const actualOutput = sumAscii(input);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("returns the sum of ascii in a string", () => {
    const input = ["Sam", "San", "Sao"];
    const expectedOutput = 291;
    const actualOutput = sumAscii(input);
    expect(actualOutput).toBe(expectedOutput);
  });
});
