const countVeg = require("../katas/veg-counter");

console.log("TEST 1 - returns 0 with an empty string");

let vegList = [];
let vegType = "";
let expectedOutput = 0;
let actualOutput = countVeg(vegList, vegType);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

console.log("TEST 2 - returns quantity of array of length 1");

vegList = [{ name: "Parsnip", type: "root", quantity: 4 }];
vegType = "root";
expectedOutput = 4;
actualOutput = countVeg(vegList, vegType);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

console.log(
  "TEST 3 - returns quantity of array of length > 1 and one class of type"
);

vegList = [
  { name: "Parsnip", type: "root", quantity: 4 },
  { name: "Broccoli", type: "brassica", quantity: 1 },
];
vegType = "brassica";
expectedOutput = 1;
actualOutput = countVeg(vegList, vegType);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

console.log(
  "TEST 4 - returns quantity of array of length > 1 and more than one class of type"
);

vegList = [
  { name: "Parsnip", type: "root", quantity: 4 },
  { name: "Carrot", type: "root", quantity: 5 },
  { name: "Broccoli", type: "brassica", quantity: 1 },
];
vegType = "root";
expectedOutput = 9;
actualOutput = countVeg(vegList, vegType);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

console.log("TEST 5 - More complex");

vegList = [
  { name: "Parsnip", type: "root", quantity: 4 },
  { name: "Broccoli", type: "brassica", quantity: 1 },
  { name: "Carrot", type: "root", quantity: 5 },
  { name: "Onion", type: "bulb", quantity: 3 },
  { name: "Chard", type: "leaf", quantity: 3 },
  { name: "Runner beans", type: "legume", quantity: 8 },
];
vegType = "root";
expectedOutput = 9;
actualOutput = countVeg(vegList, vegType);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

console.log("TEST 6 - No Veg");

vegList = [
  { name: "Parsnip", type: "root", quantity: 4 },
  { name: "Broccoli", type: "brassica", quantity: 1 },
  { name: "Carrot", type: "root", quantity: 5 },
  { name: "Onion", type: "bulb", quantity: 3 },
  { name: "Chard", type: "leaf", quantity: 3 },
  { name: "Runner beans", type: "legume", quantity: 8 },
];
vegType = "cheese";
expectedOutput = 0;
actualOutput = countVeg(vegList, vegType);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);
