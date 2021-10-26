/*
  The function range should take up to 3 arguments: a length, a start value and a step value.
  If it has only a length, it should return an array of numbers from 0 with length specified.
  If it also has a start value the returned array should start at this value instead of 0.
  If there is also a step value the numbers in the array should increase by the specified step.
  E.g. range(5) --> [0, 1, 2, 3, 4]
  range(5, 2) --> [2, 3, 4, 5, 6]
  range(5, 2, 2) --> [2, 4, 6, 8, 10]


  (length * step) + start
*/

function range(length, start = 0, step = 1) {
  if (length === 0) return [];
  const result = [];
  const end = length * step + start;
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
}

module.exports = range;
