const person = {
  species: 'Human',
  planet: 'Earth'
};

// Make a function that returns a new object with the given
// properties of both person and the object passed in

function createPerson(specifics) {
  // Make a copy of the person object
  const newObject = {};
  for (const key in person) {
    newObject[key] = person[key];
  }
  // Add specifics' properties to that copy
  for (const key in specifics) {
    newObject[key] = specifics[key];
  }
  return newObject;
}

const colin = createPerson({
  name: 'Colin',
  hair: 'Brown'
});

console.log(colin.name)
console.log(colin.planet)