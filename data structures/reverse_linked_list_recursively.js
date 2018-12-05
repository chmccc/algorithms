class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(node) {
    this.head = node || null;
    this.tail = node || null;
  }
}

function reverseLinkedListNodes(head) {
  if (!head || !head.next) return head;
  const oldTail = reverseLinkedListNodes(head.next);
  head.next.next = head;
  head.next = null;
  return oldTail;
}

function reverseLinkedList(list) {
  const originalTail = list.tail;
  const originalHead = list.head;
  reverseLinkedListNodes(list.head);
  list.head = originalTail;
  list.tail = originalHead;
  return list;
}

const test = new LinkedList(new Node('a'));
test.head.next = new Node('b');
test.head.next.next = new Node('c');
test.head.next.next.next = test.tail = new Node('d');

console.log(JSON.stringify(reverseLinkedList(test)));

