/*
  The function mergeArrays should take 2 arrays and merges them into one array, taking one item from each array at a time.
  If the arrays are of uneven length, then simply continue adding elements from the longest array onto the end of the merged array.
  E.g. [1, 2, 3] and ['a', 'b', 'c'] --> [1, 'a', 2, 'b', 3, 'c']
  [1, 2, 3, 4, 5] and ['a', 'b', 'c'] --> [1, 'a', 2, 'b', 3, 'c', 4, 5]
*/

function mergeArrays(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) return [];
  const result = [];

  const maxOne = arr1.length;
  const maxTwo = arr2.length;

  for (let i = 0; i < Math.max(maxOne, maxTwo); i++) {
    if (i < maxOne) result.push(arr1[i]);
    if (i < maxTwo) result.push(arr2[i]);
  }

  return result;
}

module.exports = mergeArrays;
