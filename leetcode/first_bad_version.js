function isBadVersion(version) {
  return version >= 5;
}

let recursions = 0;

const solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function scan(n, target, formerTarget) {
    recursions++;
    target = target || Math.ceil(n / 2);
    if (target === formerTarget) return target;
    // if bad, increase
    if (isBadVersion(target)) return scan(n, Math.ceil((n - target) / 2), target)
    // if good, decrease
    else return scan(n, Math.ceil(target / 2), target)
  };
};

const scanThisBitch = solution(isBadVersion);

console.log(scanThisBitch(10));