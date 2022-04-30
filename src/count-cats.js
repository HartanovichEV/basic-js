const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let arr=[];
  for(let i = 0; i < matrix.length; i++){
    arr = arr.concat(matrix[i]);
  }
  return arr.map(elem => elem=='^^'?1:0).reduce((s,c)=>s+c,0)
}

module.exports = {
  countCats
};
