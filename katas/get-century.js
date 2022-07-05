/*
  The function getCentury should take a year as a number and return the century.
  E.g. 1999 should return '20th'
  2004 should return '21st'
  1877 should return '19th'
  It should work up to and including the year 10,000 (the '101st' century)
*/

function getCentury(year) {
  if (year === 10000) return "101st";

  let suffix;
  const century = Math.floor(year / 100) + 1;
  const decade = century % 100;

  switch ((century, decade)) {
    case century === 11 || century === 12 || century === 13:
      suffix = "th";
      break;
    case decade === 1:
      suffix = "st";
      break;
    case decade === 2:
      suffix = "nd";
      break;
    case decade === 3:
      suffix = "rd";
      break;
    default:
      suffix = "th";
  }

  return `${century}${suffix}`;
}

module.exports = getCentury;
