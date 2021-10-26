/*
  The function sumAscii should take an array of names and calculate each name's score based on the total of each character's lowercase ASCII value. It should return the name with the highest score.
  E.g. the name 'John' would get the score 431 because 'j' has the ASCII code 106, 'o' has the ASCII code 111, 'h' has the ASCII code 104 and 'n' has the ASCII code 110.
*/

function sumAscii(arr) {
  if (arr.length === 0) return 0;
  let highestName = 0;
  for (let i in arr) {
    let nameTotal = 0;
    for (let j in arr[i]) {
      nameTotal += arr[i].charCodeAt(j);
    }
    if (nameTotal > highestName) highestName = nameTotal;
  }
  return highestName;
}

module.exports = sumAscii;
