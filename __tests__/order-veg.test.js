const orderVeg = require("../katas/order-veg");

describe("orderVeg", () => {
  test("Returns an empty array", () => {
    let input = [];
    let expectedOutput = [];
    let actualOutput = orderVeg(input);
    expect(actualOutput).toEqual(expectedOutput);
  });
  test("Returns the SORTED veg array", () => {
    const input = [
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Broccoli", type: "brassica", quantity: 1 },
    ];
    const expectedOutput = [
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Parsnip", type: "root", quantity: 4 },
    ];
    const actualOutput = orderVeg(input);
    expect(actualOutput).toEqual(expectedOutput);
  });
  test("Returns the SORTED veg array", () => {
    const input = [
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Runner beans", type: "legume", quantity: 8 },
    ];
    const expectedOutput = [
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Runner beans", type: "legume", quantity: 8 },
    ];
    const actualOutput = orderVeg(input);
    expect(actualOutput).toEqual(expectedOutput);
  });
});
