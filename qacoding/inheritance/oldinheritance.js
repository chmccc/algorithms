function Person(hair) {
  this.hair = hair;
}

Person.prototype.arms = 2;

Person.prototype.greeting = function greeting() {
  return (
    'Hello, I have ' + this.hair + ' hair, and I have ' + this.arms + ' arms.'
  );
};

const colin = new Person('brown');
const kevin = new Person('blonde');

debugger;
