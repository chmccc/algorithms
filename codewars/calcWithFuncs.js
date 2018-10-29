/* This time we want to write calculations using functions and get the results. Let's have a look at some examples:

JavaScript:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Ruby:

seven(times(five)) # must return 35
four(plus(nine)) # must return 13
eight(minus(three)) # must return 5
six(divided_by(two)) # must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three)) should return 2, not 2.666666... */


const zero = func => func ? func(0) : 0;
const one = func => func ? func(1) : 1;
const two = func => func ? func(2) : 2;
const three = func => func ? func(3) : 3;
const four = func => func ? func(4) : 4;
const five = func => func ? func(5) : 5;
const six = func => func ? func(6) : 6;
const seven = func => func ? func(7) : 7;
const eight = func => func ? func(8) : 8;
const nine = func => func ? func(9) : 9;

const plus = right => left => left + right;
const minus = right => left => left - right;
const times = right => left => left * right;
const dividedBy = right => left => Math.floor(left / right);

console.log(seven(times(five()))); // , 35);
console.log(four(plus(nine()))); // , 13);
console.log(eight(minus(three()))); // , 5);
console.log(six(dividedBy(two()))); // , 3);