const person = {
    species: 'Human',
    planet: 'Earth',
    limbs: 4,
}

const colin = person
 
colin.name = 'Colin'
colin.hair = 'Brown'
// colin.species = 'Alien (in disguise)'

const ryan = person

console.log(ryan.name)
// What's the problem with this?