/* Description:
Given a string str that contains some "(" or ")". Your task is to find the longest substring in str(all brackets in the substring are closed). The result is the length of the longest substring.

For example:

 str = "()()("
 findLongest(str) === 4 
 "()()" is the longest substring 

All inputs are valid.
If no such substring found, return 0.
Please pay attention to the performance of code. ;-)
In the performance test(100000 brackets str x 100 testcases), the time consuming of each test case should be within 35ms. This means, your code should run as fast as a rocket ;-)

Some Examples
 findLongest("()") === 2
 findLongest("()(") === 2
 findLongest("()()") === 4
 findLongest("()()(") === 4
 findLongest("(()())") === 6
 findLongest("(()(())") === 6
 findLongest("())(()))") === 4
 findLongest("))((") === 0
 findLongest("") === 0
 */



console.log(findLongest("()")); // , 2)
console.log(findLongest("()(")); // , 2)
console.log(findLongest("()()")); // , 4)
console.log(findLongest("()()(")); // , 4)
console.log(findLongest("(()())")); // , 6)
console.log(findLongest("(()(())")); // , 6)
console.log(findLongest("())(()))")); // , 4)
console.log(findLongest("))((")); // , 0)
console.log(findLongest("")); // , 0)