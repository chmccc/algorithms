/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/


var groupAnagrams = function(strs) {
  // declare a store object which will store strings in arrays keyed by an ASCII-sorted version of that string
  const store = {};
  // loop through input array
  strs.forEach(word => {
      // create sorted version of the word
      const key = word.split('').sort().join('');
      // add to or create the array in our store for that string
      if (store[key]) store[key].push(word);
      else store[key] = [word];
  });
  // loop through the store object and push each array into a new array to return
  // oddly, this seems to be faster than Object.values()...
  return Object.keys(store).reduce((output, key) => {
      output.push(store[key]);
      return output;
  }, []);
};