/* 
Sort a linked list in O(n log n) time using constant space complexity.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5
*/

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function sortList(head) {
  // base case: no head or solo head
  if (!head || !head.next) return head;
  // use a turtle/rabbit to split the list -- need 3 trackers: a splicer, slow, and fast
  let splicer = head;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    splicer = slow;
    slow = slow.next;
    fast = fast.next.next
  }
  // set splicer's .next to be null to split the list
  splicer.next = null;
  // return the merge sort on the left and the right
  return merge(sortList(head), sortList(slow));
}

function merge(left, right) {
  // start a dummy list
  const dummy = new ListNode(null);
  let cur = dummy;
  // while anything in either list
  while (left || right) {
    // if a list is empty, take the rest of the other one
    if (!left) {
      cur.next = right;
      break;
    }
    if (!right) {
      cur.next = left;
      break;
    }
    // compare first node of left and right and attach smaller to dummy
    // then move along whatever list was taken from
    if (left.val < right.val) {
      cur.next = left;
      left = left.next;
    }
    else {
      cur.next = right;
      right = right.next;
    }
    // move along the list being built
    cur = cur.next
  }
  return dummy.next;
}

const l1 = new Node(1);
l1.next = new Node(3);
l1.next.next = new Node(5);
l1.next.next.next = new Node(8);

const l2 = new Node(2);
l2.next = new Node(4);
l2.next.next = new Node(6);
l2.next.next.next = new Node(7);

console.log(merge(l1, l2));
