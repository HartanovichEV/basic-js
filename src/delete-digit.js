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
  let arr1 = String(n).split('');
  let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for(let i=0; arr1.length >= String(n).length; i++){
    if(arr1.includes(String(arr2[i]))){
      let ind = arr1.indexOf(String(arr2[i]));
      arr1.splice(ind, 1);      
    } 
  }
  return +arr1.join('')
}

module.exports = {
  deleteDigit
};
