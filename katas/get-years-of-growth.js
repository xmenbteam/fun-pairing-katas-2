/*
  The function getYearsOfGrowth should take 4 parameters: a starting population, an end population, 
  a percentage of growth and a netMigration figure.
  If the population grows by the given percentage each year, 
  plus an additional number of net migrants, 
  the function should calculate how many years it takes until the end population total is reached.
  E.g.
  getYearsOfGrowth(1000, 2000, 2, 12);
  --> 25
*/

function getYearsOfGrowth(
  initialPopulation,
  targetPopulation,
  growthRate,
  netMigration
) {
  let yearsOfGrowth = 0;
  let currentPopulation = initialPopulation;

  while (currentPopulation < targetPopulation) {
    yearsOfGrowth++;
    currentPopulation *= 1 + growthRate / 100;
    currentPopulation += netMigration;
  }
  return yearsOfGrowth;
}

module.exports = getYearsOfGrowth;
