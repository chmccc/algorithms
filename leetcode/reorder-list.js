/**
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:

Given 1->2->3->4, reorder it to 1->4->2->3.
Example 2:

Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
 */

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head || !head.next) return;
  // using a turtle/rabbit, split the list in two
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  const splicer = slow;
  // iterate the second half, pushing each node into a stack (array)
  const stack = [];
  slow = slow.next;
  while (slow) {
    stack.push(slow);
    slow = slow.next;
  }
  if (splicer.next) splicer.next = null;
  let curr = head;
  while (stack.length) {
    let newCurr = curr.next;
    curr.next = stack.pop();
    if (curr.next) curr.next.next = newCurr;
    curr = newCurr;
  }
}

let array = [1,2,3,4];
let curr = new ListNode(array[0])
let list = curr;
for (let i = 1; i < array.length; i++) {
  curr.next = new ListNode(array[i]);
  curr = curr.next;
}

reorderList(list);