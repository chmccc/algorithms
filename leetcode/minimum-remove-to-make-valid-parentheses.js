class ParenIndexStack {
  constructor() {
    this.indexes = {};
    this.size = 0;
  }

  push(index) {
    this.size++;
    this.indexes[this.size] = index;
  }

  pop() {
    if (this.size === 0) return
    const index = this.indexes[this.size];
    delete this.indexes[this.size];
    this.size--;
    return index;
  }
}

const balanceParens = string => {
  let unmatchedOpenParens = new ParenIndexStack();
  const newStringArray = [];

  for (let i = 0; i < string.length; i++) { // O(n) time
    if (string[i] === '(') unmatchedOpenParens.push(i); // O(n) space
    else if (string[i] === ')') {
      if (unmatchedOpenParens.size > 0) unmatchedOpenParens.pop();
      else {
        newStringArray.push(undefined)
        continue
      }
    }
    newStringArray.push(string[i]); // O(2n) space
  }

  let deleteIndex
  while ((deleteIndex = unmatchedOpenParens.pop())) { // O(2n) time
    delete newStringArray[deleteIndex];
  }

  return newStringArray.filter(Boolean).join(''); // O(4n) time
};

console.log(balanceParens(')((()()()())))((()())()()()(()(()(cool)'))
