/*
  the areOrdered function should take an array of numbers as an input.
  It should return true if all the numbers are in ascending order and false if they are not.
  An empty array should return false.
*/

function areOrdered(arr) {
  const sortFunc = (a, b) => a - b;

  const sorted = [...arr].sort(sortFunc).toString();

  if (arr.length === 0) return false;
  if (arr.toString() === sorted) return true;
  if (arr.toString() !== sorted) return false;
}

module.exports = areOrdered;
