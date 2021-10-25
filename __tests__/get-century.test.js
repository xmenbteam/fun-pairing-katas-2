const getCentury = require("../katas/get-century");

console.log("TEST 1 - returns an empty string with a number");

let input = 1;
let expectedOutput = "1st";
let actualOutput = getCentury(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

console.log("TEST 2 - returns 20th with 1998");

input = 1998;
expectedOutput = "20th";
actualOutput = getCentury(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);
