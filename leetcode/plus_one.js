/*
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/

const plusOne = (digits) => {
  let carrying = true;
  // iterate backward through array while carrying is true
  for (let i = digits.length - 1; i >= 0 && carrying; i -= 1) {
    // if digit is 9, change to 0 and set carrying true
    if (digits[i] === 9) {
      digits[i] = 0;
      // if 9 is the starting digit, we need a 1 added in before it
      if (i === 0) digits.unshift(1);
    } else { // otherwise, add 1 to it and set carrying to false
      digits[i] = digits[i] + 1
      carrying = false;
    }
  }
  return digits;
};

const input = [9,9,9];
console.log(plusOne(input).join(''));