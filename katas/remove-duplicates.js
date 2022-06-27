/*
  The function removeDuplicates should take an array and return a new array with any duplicate items removed. The original order should be maintained.
*/

function removeDuplicates(arr) {
  if (!arr.length) return arr;
  return arr.filter((el, i) => {
    if (arr.lastIndexOf(el) === i) return el;
  });
}

module.exports = removeDuplicates;
