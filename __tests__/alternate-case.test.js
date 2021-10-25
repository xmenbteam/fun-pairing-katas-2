const alternateCase = require("../katas/alternate-case");

console.log("TEST 1 - returns an empty string");

let input = "";
let expectedOutput = "";
let actualOutput = alternateCase(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

console.log("TEST 2 - returns a capital letter with a lowercase letter");

input = "a";
expectedOutput = "A";
actualOutput = alternateCase(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

console.log("TEST 3 - returns Aa with aa");

input = "aa";
expectedOutput = "Aa";
actualOutput = alternateCase(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

console.log("TEST 4 - word");

input = "hello";
expectedOutput = "HeLlO";
actualOutput = alternateCase(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

console.log("TEST 5 - two words");

input = "hello world";
expectedOutput = "HeLlO wOrLd";
actualOutput = alternateCase(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);
