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

  static isArray(something) {
    console.log('isArray this: ', this);
    if (typeof something !== 'object' || something === null) return false;
    if (typeof something.length !== 'number') return false;
    if (something instanceof Array === false) return false;
    if (something.push && something.pop) return true; // duck-typing
    return false;
  }
}

const sweetArray = new MyArray(0);

sweetArray.push(1)
sweetArray.includes(1)

debugger;
