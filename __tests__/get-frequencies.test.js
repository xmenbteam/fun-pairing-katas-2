const getFrequencies = require("../katas/get-frequencies");

describe("getFrequencies", () => {
  test("returns an object", () => {
    const input = "";
    const expected = {};
    const actual = getFrequencies(input);
    expect(actual).toEqual(expected);
  });
  test("returns {a : 1} when passed 'a'", () => {
    const input = "a";
    const expected = { a: 1 };
    const actual = getFrequencies(input);
    expect(actual).toEqual(expected);
  });
  test("returns {a : 2} when passed 'aa'", () => {
    const input = "aa";
    const expected = { a: 2 };
    const actual = getFrequencies(input);
    expect(actual).toEqual(expected);
  });
  test("returns {a : 2, b:1} when passed 'aab'", () => {
    const input = "aab";
    const expected = { a: 2, b: 1 };
    const actual = getFrequencies(input);
    expect(actual).toEqual(expected);
  });
  test("returns {a : 2, b:1} when passed 'aa b'", () => {
    const input = "aa b";
    const expected = { a: 2, b: 1 };
    const actual = getFrequencies(input);
    expect(actual).toEqual(expected);
  });
  test("returns {a : 2, b:1} when passed 'aab!'", () => {
    const input = "aab!";
    const expected = { a: 2, b: 1 };
    const actual = getFrequencies(input);
    expect(actual).toEqual(expected);
  });
  test("hello, world!", () => {
    const input = "hello, world!";
    const expected = {
      h: 1,
      e: 1,
      l: 3,
      o: 2,
      w: 1,
      r: 1,
      d: 1,
    };
    const actual = getFrequencies(input);
    expect(actual).toEqual(expected);
  });
});
