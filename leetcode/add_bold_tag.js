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
    if (word === '') return;
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
    if (word === '') return false;
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
    if (word === '') return true;
    const letter = word[0];
    const child = parent.children[letter];
    if (child) {
      const remainder = word.slice(1);
      return this.hasPrefix(remainder, child);
    }
    return false;
  }

  construct(array) {
    for (let i = 0; i < array.length; i++) {
      this.add(array[i]);
    }
  }
}

const addBoldTag = (s, dict) => {
  const dictTrie = new Trie();
  dictTrie.construct(dict);
  const ranges = [];
  let start = 0;
  let end = 0;
  let substring = '';
  // loop through string
  while (start < s.length && end <= s.length) {
      // if start = end, increase end
      if (start === end) {
          substring += s[end];
          end++;
      }
      // if a prefix, 
      else if (dictTrie.hasPrefix(substring)) {
        if (dictTrie.contains(substring) && !dictTrie.hasPrefix(substring + s[end + 1])) {
            // add start, end to ranges
            if (ranges[ranges.length - 1] && start <= ranges[ranges.length - 1][1]) {
                ranges[ranges.length - 1][1] = end;
            }
            else ranges.push([start, end]);
            // remove start from substring
            substring = substring.slice(1);
            // and increase start
            start++;
          } else {
            substring += s[end];
            end++;
          }
      }
      // if not a prefix,
      else {
          // remove start from substring
          if (substring) substring = substring.slice(1);
          // increase start 
          start++;
      }
    }
    // loop through ranges and insert open & closing bold tags
    let offset = 0;
    for (let i = 0; i < ranges.length; i++) {
        const range = ranges[i];
        s = s.slice(0, range[0] + offset) + '<b>' + s.slice(range[0] + offset);
        offset += 3;
        s = s.slice(0, range[1] + offset) + '</b>' + s.slice(range[1] + offset);
        offset += 4;
    }
    return s;
};