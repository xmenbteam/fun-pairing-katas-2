const countVeg = require("../katas/veg-counter");

console.log("TEST 1 - returns 0 with an empty string");

describe("veg-counter", () => {
  test("TEST 1 - returns 0 with an empty string", () => {
    const vegList = [];
    const vegType = "";
    const expectedOutput = 0;
    const actualOutput = countVeg(vegList, vegType);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("TEST 2 - returns quantity of array of length 1", () => {
    const vegList = [{ name: "Parsnip", type: "root", quantity: 4 }];
    const vegType = "root";
    const expectedOutput = 4;
    const actualOutput = countVeg(vegList, vegType);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("TEST 3 - returns quantity of array of length > 1 and one class of type", () => {
    const vegList = [
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Broccoli", type: "brassica", quantity: 1 },
    ];
    const vegType = "brassica";
    const expectedOutput = 1;
    const actualOutput = countVeg(vegList, vegType);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("TEST 4 - returns quantity of array of length > 1 and more than one class of type", () => {
    const vegList = [
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Broccoli", type: "brassica", quantity: 1 },
    ];
    const vegType = "root";
    const expectedOutput = 9;
    const actualOutput = countVeg(vegList, vegType);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("TEST 5 - More complex", () => {
    const vegList = [
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Runner beans", type: "legume", quantity: 8 },
    ];
    const vegType = "root";
    const expectedOutput = 9;
    const actualOutput = countVeg(vegList, vegType);
    expect(actualOutput).toBe(expectedOutput);
  });
  test("TEST 6 - No Veg", () => {
    const vegList = [
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Runner beans", type: "legume", quantity: 8 },
    ];
    const vegType = "cheese";
    const expectedOutput = 0;
    const actualOutput = countVeg(vegList, vegType);
    expect(actualOutput).toBe(expectedOutput);
  });
});
