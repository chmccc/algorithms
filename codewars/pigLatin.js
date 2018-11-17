/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway ! */

function pigIt(str) {
  return str.split(' ').reduce((newString, word, i, array) => {
    if (/[a-zA-Z]/.test(word[0])) {
      newString += word.slice(1) + word[0] + 'ay' + (i === array.length - 1 ? '' : ' ');
    }
    else newString += word[0] + (i === array.length - 1 ? '' : ' ');
    return newString;
  }, '');
}

console.log(pigIt('Pig latin is cool!')); // ,'igPay atinlay siay oolcay')
console.log(pigIt('This is my string')); // ,'hisTay siay ymay tringsay')