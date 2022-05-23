const getDistinctLetters = require("../katas/get-distinct-letters");

describe("get-distinct-letters", () => {
  test("Returns a string", () => {
    const input = "";
    const expected = "";
    const actual = getDistinctLetters(input);
    expect(actual).toEqual(expected);
  });
  test("Returns letters in order", () => {
    const inputOne = "abc";
    const inputTwo = "def";

    const expected = "abcdef";
    const actual = getDistinctLetters(inputOne, inputTwo);
    expect(actual).toEqual(expected);
  });
  test("Returns letters in order", () => {
    const inputOne = "cba";
    const inputTwo = "def";

    const expected = "abcdef";
    const actual = getDistinctLetters(inputOne, inputTwo);
    expect(actual).toEqual(expected);
  });
  test("Returns letters in order - one repeat", () => {
    const inputOne = "ccba";
    const inputTwo = "def";

    const expected = "abcdef";
    const actual = getDistinctLetters(inputOne, inputTwo);
    expect(actual).toEqual(expected);
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
