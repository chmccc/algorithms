// input: string - guaranteed to be a single letter a-z or A-Z
// output: boolean
function isConsonant(letter = 'A') {
    // make the letter lowercase
    letter = letter.toLowerCase()
    // create an array of all the lowercase vowels
    const vowels = ['a', 'e', 'i', 'o', 'u']
    // loop through the array
    for (let i = 0; i < vowels.length; i++) {
        // check to see if the letter is equal to the current element in the array
        if (vowels[i] === letter) {
            // if it is, return false
            return false
        } else {
            // otherwise return true
            return true
        }
    }
}

const isBAConsonant = isConsonant('b')

