/* The function sumArgs should accept any number of arguments, and add them together. If given one argument, it should return that. If it is not given arguments, it should return 0 */

function sumArgs(...args) {
  argsArr = [...args];
  let count = 0;

  //   const add = (acc, a) => acc + a;
  //   return argsArr.reduce(add, 0);

  //   for (let i in argsArr) {
  //     count += argsArr[i];
  //   }

  argsArr.map(function (arg) {
    count += arg;
  });

  return count;
}

module.exports = sumArgs;
