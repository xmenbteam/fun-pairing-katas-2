/*
  The function getDistinctLetters should take 
  two strings and return a string of all the 
  letters that are unique to either of the 
  input strings, in alphabetical order.

  For example, when given 'hello' and 'world', 
  the function should return 'dehrw'
  This is because h and e are in 'hello' 
  but not in 'world', and w, 
  r and d are in 'world' but not in 'hello'. 
  hewrd' sorted => 'dehrw'
*/

function getDistinctLetters(strOne, strTwo) {
  if (!strOne || !strTwo) return "";
  function getDistinctLetters(str1, str2) {
    const result = [];

    for (let letter of str1) if (!str2.includes(letter)) result.push(letter);
    for (let letter of str2) if (!str1.includes(letter)) result.push(letter);

    return result.sort().join("");
  }

  const combined = strOne + strTwo;

  const sorted = combined.split("").sort();

  const set = Array.from(new Set(sorted));

  const joined = set.join("");

  return joined;
}
module.exports = getDistinctLetters;
