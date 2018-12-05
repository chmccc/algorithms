/*
A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Find all strobogrammatic numbers that are of length = n.

Example:

Input:  n = 2
Output: ["11","69","88","96"]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
const findStrobogrammatic = (n) => {
  const originalN = n;
  function rFindStrobogrammatic(n) {
    if (n === 0) return [''];
    if (n === 1) return ["0", "1", "8"];
    const output = [];
    const strobos = rFindStrobogrammatic(n - 2);
    strobos.forEach((strobo) => {
      if (n !== originalN) output.push("0" + strobo + "0");
      output.push("1" + strobo + "1");
      output.push("6" + strobo + "9");
      output.push("8" + strobo + "8");
      output.push("9" + strobo + "6");
    })
    return output;
  }
  return rFindStrobogrammatic(n);
};