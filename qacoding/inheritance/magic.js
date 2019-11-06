const colin = {
  hair: 'brown',
  arms: 2,
  greeting() {
    return (
      'Hello, I have ' + this.hair + ' hair, and I have ' + this.arms + ' arms.'
    );
  }
};

console.log(colin.toString()); // wtf?

debugger;
