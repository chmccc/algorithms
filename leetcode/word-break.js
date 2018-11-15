/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
*/

class TrieNode {
  constructor(val) {
    this.data = val;
    this.isWord = false;
    this.children = {};
    this.hasChildren = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode('');
  }

  add(word, parent = this.root) {
    if (!word) return;
    parent.prefixes++;
    const letter = word[0];
    let child = parent.children[letter];
    if (!child) {
      child = new TrieNode(letter);
      parent.children[letter] = child;
      parent.hasChildren = true;
    }
    const remainder = word.slice(1);
    if (!remainder) child.isWord = true;
    this.add(remainder, child);
  }

  contains(word, parent = this.root) {
    if (!word) return false;
    const letter = word[0];
    const child = parent.children[letter];
    if (child) {
      const remainder = word.slice(1);
      if (!remainder && child.isWord) {
        return true;
      }
      return this.contains(remainder, child);
    }
    return false;
  }

  hasPrefix(word, parent = this.root) {
    if (!word) return true;
    const letter = word[0];
    const child = parent.children[letter];
    if (child) {
      const remainder = word.slice(1);
      return this.hasPrefix(remainder, child);
    }
    return false;
  }

}

const wordBreak = (string, dictArray) => {
  const dict = new Trie();
  for (const word of dictArray) { dict.add(word); }
  let valid = false;
  function checkString(string) {
    for (let i = 1; i <= string.length; i++) {
      const stringSoFar = string.slice(0, i);
      if (!dict.hasPrefix(stringSoFar)) return false;
      if (dict.contains(stringSoFar)) {
        if (i === string.length) { valid = true; break; }
        checkString(string.slice(i));
      }
    }
  }
  checkString(string);
  return valid;
}

wordBreak("leetcode", ["leet", "code"]);

