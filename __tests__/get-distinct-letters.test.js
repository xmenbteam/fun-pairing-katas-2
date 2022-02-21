const { TestWatcher } = require("@jest/core");
const getDistinctLetters = require("../katas/get-distinct-letters");

describe("getDistinctLetters", () => {
  test("returns a string", () => {
    const str1 = "";
    const str2 = "";
    const expectedOutput = "";
    const actualOutput = getDistinctLetters(str1, str2);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("returns a string", () => {
    const str1 = "abc";
    const str2 = "";
    const expectedOutput = "abc";
    const actualOutput = getDistinctLetters(str1, str2);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("returns a string", () => {
    const str1 = "hello";
    const str2 = "world";
    const expectedOutput = "dehrw";
    const actualOutput = getDistinctLetters(str1, str2);
    expect(actualOutput).toBe(expectedOutput);
  });
});
