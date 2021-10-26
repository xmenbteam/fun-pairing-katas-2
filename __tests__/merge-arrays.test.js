const mergeArrays = require("../katas/merge-arrays");

describe("mergeArrays", () => {
  test("returns an array", () => {
    const arr1 = [];
    const arr2 = [];
    const expectedOutput = [];
    const actualOutput = mergeArrays(arr1, arr2);
    expect(actualOutput).toEqual(expectedOutput);
  });
  test("returns an array made up of 2 arrays", () => {
    const arr1 = ["a"];
    const arr2 = [2];
    const expectedOutput = ["a", 2];
    const actualOutput = mergeArrays(arr1, arr2);
    expect(actualOutput).toEqual(expectedOutput);
  });
  test("2 arrays same length", () => {
    const arr1 = ["a", "b"];
    const arr2 = [2, 3];
    const expectedOutput = ["a", 2, "b", 3];
    const actualOutput = mergeArrays(arr1, arr2);
    expect(actualOutput).toEqual(expectedOutput);
  });
  test("2 arrays different lengths", () => {
    const arr1 = ["a", "b", "c"];
    const arr2 = [2, 3];
    const expectedOutput = ["a", 2, "b", 3, "c"];
    const actualOutput = mergeArrays(arr1, arr2);
    expect(actualOutput).toEqual(expectedOutput);
  });
  test("2 arrays different lengths longer", () => {
    const arr1 = ["a", "b", "c", "d"];
    const arr2 = [2, 3];
    const expectedOutput = ["a", 2, "b", 3, "c", "d"];
    const actualOutput = mergeArrays(arr1, arr2);
    expect(actualOutput).toEqual(expectedOutput);
  });
  test("2 arrays different lengths longer", () => {
    const arr1 = ["a", "b", "c", "d"];
    const arr2 = [2, 3, 4, 5, 6, 7];
    const expectedOutput = ["a", 2, "b", 3, "c", 4, "d", 5, 6, 7];
    const actualOutput = mergeArrays(arr1, arr2);
    expect(actualOutput).toEqual(expectedOutput);
  });
});
