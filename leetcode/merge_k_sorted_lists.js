/*
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function(lists) {
  // sort object whose keys are the values of the nodes
  // and whose values are arrays containing those nodes
  // time complexity: n log n
  // space complexity: n
  const nodeCounter = {};
  lists.forEach(list => { // O(n)
      while (list) {
          const node = list;
          list = list.next;
          node.next = null;
          if (nodeCounter[node.val]) nodeCounter[node.val].push(node);
          else nodeCounter[node.val] = [node]; 
      }
  })
  let head = new ListNode();
  const dummy = head;
  Object.keys(nodeCounter) // O(n) worst case, better the more duplicate values there are
      .sort((a, b) => a - b) // depending on engine, this is probably O(n log n)
      .forEach(key => { // O(n)
          while (nodeCounter[key].length > 0) { 
              head.next = nodeCounter[key].pop();
              head = head.next;
          }
      });
  head.next = null;
  return dummy.next;
};