/*
  Create two functions, max and min, which return the maximum and the minimum values in an array.
  If the array has no items, you should return 0.
*/

function max(arr) {
  if (!arr.length) return 0;
  return arr.reduce((max, curr) => {
    if (curr > max) max = curr;
    return max;
  }, -Infinity);
}

function min(arr) {
  if (!arr.length) return 0;
  return arr.reduce((max, curr) => {
    if (curr < max) max = curr;
    return max;
  }, Infinity);
}

module.exports = { max, min };
