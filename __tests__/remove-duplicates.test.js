const removeDuplicates = require("../katas/remove-duplicates");

describe("removeDuplicates", () => {
  test("returns an empty array", () => {
    const input = [];
    const expectedOutput = [];
    const actualOutput = removeDuplicates(input);
    expect(actualOutput).toEqual(expectedOutput);
  });
  test("returns an array full of different values", () => {
    const input = [1, 2, 3, 4];
    const expectedOutput = [1, 2, 3, 4];
    const actualOutput = removeDuplicates(input);
    expect(actualOutput).toEqual(expectedOutput);
  });
  test("returns an array without duplicates ", () => {
    const input = [1, 1, 3, 4];
    const expectedOutput = [1, 3, 4];
    const actualOutput = removeDuplicates(input);
    expect(actualOutput).toEqual(expectedOutput);
  });
  test("returns an array without duplicates cheese ", () => {
    const input = ["cheese", "cheese", "gorgonzola", "cheese"];
    const expectedOutput = ["gorgonzola", "cheese"];
    const actualOutput = removeDuplicates(input);
    expect(actualOutput).toEqual(expectedOutput);
  });
  test("returns an array without duplicates cheese ", () => {
    const input = ["cheese", "cheese", "cheese", "gorgonzola"];
    const expectedOutput = ["cheese", "gorgonzola"];
    const actualOutput = removeDuplicates(input);
    expect(actualOutput).toEqual(expectedOutput);
  });
});
