const range = require("../katas/range");

describe("range", () => {
  test("returns an array", () => {
    const length = 0;
    const expected = [];
    const actual = range(length);
    expect(actual).toEqual(expected);
  });
  test("returns an array of length 4", () => {
    const length = 4;
    const expected = [0, 1, 2, 3];
    const actual = range(length);
    expect(actual).toEqual(expected);
  });
  test("returns an array of length 4, starting at 2", () => {
    const length = 4;
    const start = 2;
    const expected = [2, 3, 4, 5];
    const actual = range(length, start);
    expect(actual).toEqual(expected);
  });
  test("returns an array of length 4, starting at 2, step = 2", () => {
    const length = 4;
    const start = 2;
    const step = 2;
    const expected = [2, 4, 6, 8];
    const actual = range(length, start, step);
    expect(actual).toEqual(expected);
  });
  test("returns an array of length 5, starting at 2, step = 2", () => {
    const expected = [2, 4, 6, 8, 10];
    const actual = range(5, 2, 2);
    expect(actual).toEqual(expected);
  });
  test("returns an array of length 7, starting at 2, step = 3", () => {
    const expected = [2, 5, 8, 11, 14, 17, 20];
    const actual = range(7, 2, 3);
    expect(actual).toEqual(expected);
  });
});
