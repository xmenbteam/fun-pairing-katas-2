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
  });
});
