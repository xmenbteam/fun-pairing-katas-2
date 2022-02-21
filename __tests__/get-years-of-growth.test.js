const { TestWatcher } = require("@jest/core");
const getYearsOfGrowth = require("../katas/get-years-of-growth");

describe("getYearsOfGrowth", () => {
  test("returns a number", () => {
    const startPop = 1;
    const endPop = 1;
    const growthPerc = 0;
    const netMigration = 0;
    const expectedOutput = 0;
    const actualOutput = getYearsOfGrowth(
      startPop,
      endPop,
      growthPerc,
      netMigration
    );
    expect(actualOutput).toBe(expectedOutput);
  });
  test("+1, 100%, no migration", () => {
    const startPop = 1;
    const endPop = 2;
    const growthPerc = 100;
    const netMigration = 0;
    const expectedOutput = 1;
    const actualOutput = getYearsOfGrowth(
      startPop,
      endPop,
      growthPerc,
      netMigration
    );
    expect(actualOutput).toBe(expectedOutput);
  });
});
