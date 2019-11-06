class Person {
  arms = 2
  
  greet() {
    console.log(
      'Hello, I have ' + this.hair + ' hair, and I have ' + this.arms + ' arms.'
    );
  }
}

const colin = new Person('brown') // {}
colin.greet()
