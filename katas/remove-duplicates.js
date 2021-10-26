/*
  The function removeDuplicates should take an array and return a new array with any duplicate items removed. The original order should be maintained.
*/

function removeDuplicates(arr) {
  if (arr.length === 0) return arr;
  const result = arr.filter((el, i) => {
    if (arr.lastIndexOf(el) === i) return el;
  });
  return result;
}

module.exports = removeDuplicates;
