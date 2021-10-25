const areOrdered = require("../katas/are-ordered");

console.log("returns false with empty array");

let input = [];
let expectedOutput = false;
let actualOutput = areOrdered(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

console.log("returns true with length of 1");

input = [1];
expectedOutput = true;
actualOutput = areOrdered(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

console.log("returns true for 2 numbers in order");

input = [1, 2];
expectedOutput = true;
actualOutput = areOrdered(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

console.log("returns false for 2 numbers not in order");

input = [3, 1];
expectedOutput = false;
actualOutput = areOrdered(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

console.log("returns false for 5 numbers not in order");

input = [3, 1, 4, 2, 5];
expectedOutput = false;
actualOutput = areOrdered(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

console.log("returns true for 5 numbers in order");

input = [1, 2, 3, 4, 5];
expectedOutput = true;
actualOutput = areOrdered(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

console.log("numbers over 10");

input = [1, 21, 316, 4160, 56100];
expectedOutput = true;
actualOutput = areOrdered(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

console.log("numbers over 10 not in order");

input = [1, 316, 21, 4160, 56100];
expectedOutput = false;
actualOutput = areOrdered(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);
