const getCentury = require("../katas/get-century");

console.log("TEST 1 - returns an empty string with a number");

let input = 1000;
let expectedOutput = "11th";
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

console.log("TEST 3 - returns 21st");

input = 2000;
expectedOutput = "21st";
actualOutput = getCentury(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

console.log("TEST 3 - returns 22nd");

input = 2100;
expectedOutput = "22nd";
actualOutput = getCentury(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

console.log("TEST 3 - returns 23rd");

input = 2200;
expectedOutput = "23rd";
actualOutput = getCentury(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

console.log("TEST 3 - returns 11th");

input = 1000;
expectedOutput = "11th";
actualOutput = getCentury(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

console.log("TEST 3 - returns 12th");

input = 1100;
expectedOutput = "12th";
actualOutput = getCentury(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

console.log("TEST 3 - returns 12th");

input = 1200;
expectedOutput = "13th";
actualOutput = getCentury(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

console.log("TEST 3 - returns 101st");

input = 10000;
expectedOutput = "101st";
actualOutput = getCentury(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);
