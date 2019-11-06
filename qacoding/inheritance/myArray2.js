class MyArray extends Array {
  constructor(length) {
    super(length);
    this.originalLength = length;
  }

  includes(value) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === value) return true;
    }
    return false;
  }

  // CHALLENGE: create a class method called `hasGrown` which returns true
  // if the MyArray is larger than it was when it was created.
}

const sweetArray = new MyArray(0);

sweetArray.push(1);
console.log(sweetArray.includes(1)) // true

console.log(sweetArray.hasGrown()); // should log true
