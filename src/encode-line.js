const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  var match = str.match(/(.)\1*/g);
  let arr = match.map(function(s) {
    return s.length==1?s.charAt(0):s.length + s.charAt(0);
  });
  return arr.join("")
}

module.exports = {
  encodeLine
};
