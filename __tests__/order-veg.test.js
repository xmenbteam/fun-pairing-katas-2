const orderVeg = require("../katas/order-veg");

console.log("Returns an empty array");

let input = [];
let expectedOutput = [];
let actualOutput = orderVeg(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

console.log("Returns the SORTED veg array");

input = [
  { name: "Parsnip", type: "root", quantity: 4 },
  { name: "Broccoli", type: "brassica", quantity: 1 },
];
expectedOutput = [
  { name: "Broccoli", type: "brassica", quantity: 1 },
  { name: "Parsnip", type: "root", quantity: 4 },
];
actualOutput = orderVeg(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);

console.log("Returns the SORTED veg array");

input = [
  { name: "Parsnip", type: "root", quantity: 4 },
  { name: "Broccoli", type: "brassica", quantity: 1 },
  { name: "Carrot", type: "root", quantity: 5 },
  { name: "Onion", type: "bulb", quantity: 3 },
  { name: "Chard", type: "leaf", quantity: 3 },
  { name: "Runner beans", type: "legume", quantity: 8 },
];
expectedOutput = [
  { name: "Broccoli", type: "brassica", quantity: 1 },
  { name: "Onion", type: "bulb", quantity: 3 },
  { name: "Chard", type: "leaf", quantity: 3 },
  { name: "Parsnip", type: "root", quantity: 4 },
  { name: "Carrot", type: "root", quantity: 5 },
  { name: "Runner beans", type: "legume", quantity: 8 },
];
actualOutput = orderVeg(input);

console.log(
  `I expect ${JSON.stringify(actualOutput)} to equal ${JSON.stringify(
    expectedOutput
  )} \n`
);
