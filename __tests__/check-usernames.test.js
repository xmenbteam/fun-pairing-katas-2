const checkUsernames = require("../katas/check-usernames");

describe("single false", () => {
  test("returns false with an empty array", () => {
    const input = [];
    const expectedOutput = false;
    const actualOutput = checkUsernames(input);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("returns false with a username that is too short", () => {
    const input = ["abc"];
    const expectedOutput = false;
    const actualOutput = checkUsernames(input);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("returns false with a username that is long enough but has a capital letter", () => {
    const input = ["abcdE"];
    const expectedOutput = false;
    const actualOutput = checkUsernames(input);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("returns false with a username that is long enough but has a special character", () => {
    const input = ["ab$dE"];
    const expectedOutput = false;
    const actualOutput = checkUsernames(input);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("returns false with a username that is too long", () => {
    const input = ["abcdefghijklmnopqrstuvwxyz"];
    const expectedOutput = false;
    const actualOutput = checkUsernames(input);
    expect(actualOutput).toBe(expectedOutput);
  });
});
describe("single true", () => {
  test("returns true with a username that is long enough", () => {
    const input = ["abcde"];
    const expectedOutput = true;
    const actualOutput = checkUsernames(input);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("returns true with a username that is long enough and has a number", () => {
    const input = ["abcd3"];
    const expectedOutput = true;
    const actualOutput = checkUsernames(input);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("returns true with a username that is long enough and has a number and an underscore", () => {
    const input = ["ab_d3"];
    const expectedOutput = true;
    const actualOutput = checkUsernames(input);
    expect(actualOutput).toBe(expectedOutput);
  });
});
describe("array of usernames", () => {
  test("array of valid users", () => {
    const input = ["ab_d3", "abcd3", "abcde"];
    const expectedOutput = true;
    const actualOutput = checkUsernames(input);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("one invalid user", () => {
    const input = ["abCd3", "abcd3", "abcde"];
    const expectedOutput = false;
    const actualOutput = checkUsernames(input);
    expect(actualOutput).toBe(expectedOutput);
  });
});
