/*
  The function sumAscii should take an array of names and calculate each name's score based on the total of each character's lowercase ASCII value. It should return the name with the highest score.
  E.g. the name 'John' would get the score 431 because 'j' has the ASCII code 106, 'o' has the ASCII code 111, 'h' has the ASCII code 104 and 'n' has the ASCII code 110.
*/

function sumAscii(arr) {
  return arr.reduce((highest, current) => {
    const nameTotal = [...current].reduce((score, char) => {
      score += char.charCodeAt(char);
      return score;
    }, 0);
    if (nameTotal > highest) highest = nameTotal;
    return highest;
  }, 0);
}

module.exports = sumAscii;
