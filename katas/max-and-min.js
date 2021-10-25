/*
  Create two functions, max and min, which return the maximum and the minimum values in an array.
  If the array has no items, you should return 0.
*/

function max(arr) {
  if (arr.length === 0) return 0;
  let max = arr[0];
  for (let i in arr) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

function min(arr) {
  if (arr.length === 0) return 0;
  let min = arr[0];
  for (let i in arr) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

module.exports = { max, min };
