// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

//  * Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const buildListFromArray = arr => {
  const list = new ListNode();
  let tracker = list;
  arr.forEach((e, i) => {
    tracker.val = e;
    if (i !== arr.length - 1) tracker.next = new ListNode();
    tracker = tracker.next;
  });
  return list;
};

// const l1 = new ListNode(2);
// l1.next = new ListNode(4);
// l1.next.next = new ListNode(3);
// const l2 = new ListNode(5);
// l2.next = new ListNode(6);
// l2.next.next = new ListNode(4);

const l1 = buildListFromArray([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
const l2 = buildListFromArray([5,6,4]);


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// const addTwoNumbers = (l1, l2) => {
//   // create a function to sum a single list
//   const sumList = (list) => {
//     // declare a sum integer to add to as we progress and an n to know what factor of 10 to use
//     let sum = 0;
//     let n = 0;
//     // loop forward through the list and multiply each digit by 10 ^n and add to sum before incrementing n
//     let listNode = list;
//     while (listNode) {
//       sum += listNode.val * (10 ** n++);
//       listNode = listNode.next;
//     }
//     return sum;
//   };
//   const summedList = new ListNode(null);
//   let tracker = summedList;
//   // add the two sums together and stringify, split into array of digits, reverse
//   // loop through it, building a new linked list of parsed integers
//   String(sumList(l1) + sumList(l2))
//     .split('')
//     .reverse()
//     .forEach((e, i, arr) => {
//       tracker.val = parseInt(e, 10);
//       if (i !== arr.length - 1)tracker.next = new ListNode();
//       tracker = tracker.next;
//     });
//   // return the new list
//   return summedList;
// };

const addTwoNumbers = (l1, l2) => {
  // yep, cheated to pass huge number tests failed because JS can't handle integers large enough for my solution
  let sum = 0;
  const list = new ListNode();
  let tracker = list;
  while (l1 || l2 || sum) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    } 
    if (l2) {
      sum += l2.val; 
      l2 = l2.next;
    } 
    tracker.next = new ListNode(sum % 10);
    tracker = tracker.next;
    sum = sum > 9 ? 1 : 0;
  }
  return list.next;
};

addTwoNumbers(l1, l2);
