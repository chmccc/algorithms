/*
Given a string, find the length of the longest substring T that contains at most k distinct characters.

Example 1:

Input: s = "ecddcbbbac", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.
Example 2:

Input: s = "aadaabbaaabbbbbbbbbbbbbbbcccccccccccc", k = 2
Output: 2
Explanation: T is "aa" which its length is 2.
*/

const lengthOfLongestSubstringKDistinct = (s, k) => {
  if (k === 0 || s.length === 0) return 0;
  let start = 0;
  let end = 0;
  let maxSize = 1;
  const foundSet = new Set(); // object to track found characters in current substring
  // sliding window through the string
  while (start < s.length && end <= s.length) {
    // compare the current window length to the max encountered window length and reassign if appropriate
    if (end - start > maxSize) maxSize = end - start;
    // check if end item is in the found set, if so, increment end
    if (foundSet.has(s[end])) {
      end += 1;
    } else if (foundSet.size === k) { // otherwise, check if the found set is at capacity (size k)
      // then reset and start from one spot after start
      foundSet.clear();
      start += 1;
      end = start;
    } else { // if not at capacity, add end item to set & increment end
      foundSet.add(s[end]);
      end += 1;
    }
  }
  return maxSize;
};

const s = "a";
const k = 1;

console.log(lengthOfLongestSubstringKDistinct(s, k));