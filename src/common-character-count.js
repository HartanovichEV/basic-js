const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  return arr1.map(element => {
    if(arr2.includes(element)){
      let ind = arr2.indexOf(element);
      arr2.splice(ind, 1)
      return 1;
    } else{
      return 0;
    }
  }).reduce((c,s)=>c+s,0); 
}

module.exports = {
  getCommonCharacterCount
};
