const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr=[+String(n).slice(1)];
  for (let index = 1; index < String(n).length; index++) {
    arr = arr.concat(+(String(n).slice(0, index) + String(n).slice(index+1)));
  }
  return arr.sort( (a, b) => a - b )[String(n).length-1];
}

module.exports = {
  deleteDigit
};
