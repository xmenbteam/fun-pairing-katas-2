/*
  The function sumAscii should take an array of names and calculate each name's score based on the total of each character's lowercase ASCII value. It should return the name with the highest score.
  E.g. the name 'John' would get the score 431 because 'j' has the ASCII code 106, 'o' has the ASCII code 111, 'h' has the ASCII code 104 and 'n' has the ASCII code 110.
*/

function sumAscii(arr) {
  if (arr.length === 0) return 0;

  const nameScore = (name) => {
    let score = 0;
    for (let i in name) {
      score += name.charCodeAt(i);
    }
    return score;
  };

  let highestName = 0;
  arr.forEach((name) => {
    const nameTotal = nameScore(name);
    if (nameTotal > highestName) highestName = nameTotal;
  });

  return highestName;
}

module.exports = sumAscii;
