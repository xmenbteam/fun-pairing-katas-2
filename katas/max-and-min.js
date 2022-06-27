/*
  Create two functions, max and min, which return the maximum and the minimum values in an array.
  If the array has no items, you should return 0.
*/

const max = (arr) => (arr.length ? Math.max(...arr) : 0);

const min = (arr) => (arr.length ? Math.min(...arr) : 0);

module.exports = { max, min };
