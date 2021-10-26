const checkStudents = require("../katas/check-students");

describe("checkStudents", () => {
  test("returns a bool if arr.length = 0/no cohort", () => {
    const students = [];
    const cohort = "";
    const expectedOutput = false;
    const actualOutput = checkStudents(students, cohort);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("true if cohort is correct", () => {
    const students = [{ name: "Ben", cohort: "October" }];
    const cohort = "October";
    const expectedOutput = true;
    const actualOutput = checkStudents(students, cohort);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("false if cohort is NOT correct", () => {
    const students = [
      { name: "Ben", cohort: "October" },
      { name: "Amanda", cohort: "April" },
    ];
    const cohort = "October";
    const expectedOutput = false;
    const actualOutput = checkStudents(students, cohort);
    expect(actualOutput).toBe(expectedOutput);
  });
});
