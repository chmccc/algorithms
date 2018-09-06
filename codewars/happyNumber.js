/* Math geeks and computer nerds love to anthropomorphize numbers and assign emotions and personalities to them. Thus there is defined the concept of a "happy" number. A happy number is defined as an integer in which the following sequence ends with the number 1.

Start with the number itself.
Calculate the sum of the square of each individual digit.
If the sum is equal to 1, then the number is happy. If the sum is not equal to 1, then repeat steps 1 and 2. A number is considered unhappy once the same number occurs multiple times in a sequence because this means there is a loop and it will never reach 1.
For example, the number 7 is a "happy" number:

72 = 49 --> 42 + 92 = 97 --> 92 + 72 = 130 --> 12 + 32 + 02 = 10 --> 12 + 02 = 1

Once the sequence reaches the number 1, it will stay there forever since 12 = 1

On the other hand, the number 6 is not a happy number as the sequence that is generated is the following: 6, 36, 45, 41, 17, 50, 25, 29, 85, 89, 145, 42, 20, 4, 16, 37, 52, 29

Once the same number occurs twice in the sequence, the sequence is guaranteed to go on infinitely, never hitting the number 1, since it repeat this cycle.

Your task is to write a program which will print a list of all happy numbers between 1 and x (both inclusive) */

function happyNumbers(x) {
  const happyNumberSet = new Set([1]);
  const unhappyNumberSet = new Set();
  function tryNumber(n, sequenceSoFar = new Set()) {
    if (happyNumberSet.has(n)) return sequenceSoFar.forEach(value => happyNumberSet.add(value));
    if (sequenceSoFar.has(n) || unhappyNumberSet.has(n)) {
      return sequenceSoFar.forEach(value => unhappyNumberSet.add(value));
    }
    sequenceSoFar.add(n);
    const sum = n.toString().split('').reduce((acc, e) => acc + (parseInt(e, 10) ** 2), 0);
    if (sum === 1 || happyNumberSet.has(sum)) {
      return sequenceSoFar.forEach(value => happyNumberSet.add(value));
    }
    tryNumber(sum, sequenceSoFar);
  }
  for (let i = 2; i <= x; i += 1) {
    if (!happyNumberSet.has(i) && !unhappyNumberSet.has(i)) tryNumber(i);
  }
  const output = [];
  happyNumberSet.forEach(val => {
    if (val <= x) output.push(val);
  });
  return output.sort((a, b) => a - b);
}

happyNumbers(10); // [ 1, 7, 10 ])
happyNumbers(50); // [ 1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49 ])
console.log(happyNumbers(800)); // [ 1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97, 100 ])
