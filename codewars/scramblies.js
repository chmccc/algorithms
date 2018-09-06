/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered

*/

console.log(scramble('rkqodlw','world')); // ,true);
console.log(scramble('cedewaraaossoqqyt','codewars')); // ,true);
console.log(scramble('katas','steak')); // ,false);
console.log(scramble('scriptjava','javascript')); // ,true);
console.log(scramble('scriptingjava','javascript')); // ,true);
console.log(scramble('scriptsjava','javascripts')); // ,true);
console.log(scramble('jscripts','javascript')); // ,false);
console.log(scramble('aabbcamaomsccdd','commas')); // ,true);

function scramble(str1, str2) {
  if (!str1 || !str2) return false;
  // map letters available
  const pool = {};
  for (let i = 0; i < str1.length; i += 1) {
    pool[str1[i]] = pool[str1[i]] + 1 || 1;
  }
  // loop through target, lookup letter and decrement availability
  for (let i = 0; i < str2.length; i += 1) {
    // return false if letter unavailable
    if (!pool[str2[i]]) return false;
    pool[str2[i]] -= 1;
  }
  return true;
}