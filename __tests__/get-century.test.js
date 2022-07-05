const getCentury = require("../katas/get-century");

describe("getCentury", () => {
  test("TEST 1 - returns an empty string with a number ", () => {
    const input = 1000;
    const expectedOutput = "11th";
    const actualOutput = getCentury(input);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("TEST 2 - returns 20th with 1998", () => {
    const input = 1998;
    const expectedOutput = "20th";
    const actualOutput = getCentury(input);
    expect(actualOutput).toBe(expectedOutput);
  });
  test.only("TEST 3 - returns 21st", () => {
    const input = 2000;
    const expectedOutput = "21st";
    const actualOutput = getCentury(input);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("TEST 3 - returns 22nd", () => {
    const input = 2100;
    const expectedOutput = "22nd";
    const actualOutput = getCentury(input);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("TEST 3 - returns 23rd", () => {
    const input = 2200;
    const expectedOutput = "23rd";
    const actualOutput = getCentury(input);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("TEST 3 - returns 11th", () => {
    const input = 1000;
    const expectedOutput = "11th";
    const actualOutput = getCentury(input);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("TEST 3 - returns 12th", () => {
    const input = 1100;
    const expectedOutput = "12th";
    const actualOutput = getCentury(input);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("TEST 3 - returns 12th", () => {
    const input = 1200;
    const expectedOutput = "13th";
    const actualOutput = getCentury(input);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("TEST 3 - returns 101st", () => {
    const input = 10000;
    const expectedOutput = "101st";
    const actualOutput = getCentury(input);
    expect(actualOutput).toBe(expectedOutput);
  });
});
