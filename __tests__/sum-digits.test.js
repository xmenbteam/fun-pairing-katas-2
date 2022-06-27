const sumDigits = require("../katas/sum-digits");

describe("sumDigits", () => {
  test("returns a number", () => {
    const expected = 0;
    const actual = sumDigits();
    expect(actual).toBe(expected);
  });
  test("returns a single digit number", () => {
    const input = 6;
    const expected = 6;
    const actual = sumDigits(input);
    expect(actual).toBe(expected);
  });
  test("returns 4 when passed 22", () => {
    const input = 22;
    const expected = 4;
    const actual = sumDigits(input);
    expect(actual).toBe(expected);
  });
  test("returns 15 when passed 555", () => {
    const input = 555;
    const expected = 15;
    const actual = sumDigits(input);
    expect(actual).toBe(expected);
  });
  test("returns 15 when passed 5.55", () => {
    const input = 5.55;
    const expected = 15;
    const actual = sumDigits(input);
    expect(actual).toBe(expected);
  });
});
