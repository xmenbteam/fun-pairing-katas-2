/*
  The function getCentury should take a year as a number and return the century.
  E.g. 1999 should return '20th'
  2004 should return '21st'
  1877 should return '19th'
  It should work up to and including the year 10,000 (the '101st' century)
*/

function getCentury(year) {
  const yearStr = (year + 100).toString();

  const sliceNo = yearStr.length === 4 ? 2 : 3;

  const century = yearStr.slice(0, sliceNo);
  let suffix = "th";

  if (century.charAt(century.length - 1) === "1") suffix = "st";
  if (century.charAt(century.length - 1) === "2") suffix = "nd";
  if (century.charAt(century.length - 1) === "3") suffix = "rd";

  if (century === "11" || century === "12" || century === "13") suffix = "th";

  return `${century}${suffix}`;
}

module.exports = getCentury;
