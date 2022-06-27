/*
  The function sumDigits should take a number (not necessarily an integer) and return the total of its digits.
  E.g.
  sumDigits(99)
    --> 18
  sumDigits(10.5)
    --> 6
*/

function sumDigits(num) {
  if (!num) return 0;
  return [...num.toString()].reduce((acc, num) => {
    if (parseInt(num)) acc += parseInt(num);
    return acc;
  }, 0);
}

module.exports = sumDigits;
