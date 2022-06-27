/*
  The getFrequencies function should take a string and return an object that represents the frequencies of each character in the string. It should ignore spaces and special characters.
  E.g. 'hello world' would return:
  {
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    w: 1,
    r: 1,
    d: 1
  }
*/

function getFrequencies(str) {
  return [...str].reduce((result, char) => {
    if (/[a-z]/i.test(char)) {
      result[char] ? result[char]++ : (result[char] = 1);
    }
    return result;
  }, {});
}

module.exports = getFrequencies;
