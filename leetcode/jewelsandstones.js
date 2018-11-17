/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0
Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct.
*/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

const numJewelsInStones = (J, S) => {
  const JSet = new Set();
  // build a Set of stones in J
  for (let i = 0; i < J.length; i+= 1) {
    JSet.add(J[i]);
  }
  let jewelsOwned = 0;
  // loop through S
  for (let i = 0; i < S.length; i++) {
    // if the item is in the set, increase count
    if (JSet.has(S[i])) jewelsOwned += 1;
  }
  return jewelsOwned;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
