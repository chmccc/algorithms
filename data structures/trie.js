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