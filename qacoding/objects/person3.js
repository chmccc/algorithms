const person = {
  species: 'Human',
  planet: 'Earth'
};

const car = {
  wheels: 4
};

const colinsHonda = {
  model: 'Accord',
  color: 'White'
};

const colin = {
  name: 'Colin',
  hair: 'Brown',
  car: colinsHonda
};

// Make this work
console.log(colin.car.color);
console.log(colin.car.wheels);
