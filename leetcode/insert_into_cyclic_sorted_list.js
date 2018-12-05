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

  insertStartingWith(node, val) {
    if (!node || !this.head) {
      this.head = this.tail = new Node(val);
      this.head.next = this.head;
    } else {
      // loop to find appropriate position
      let currentNode = node.next;
      let prevNode = node; // this will be the target node after which to put a new node
      while (
        (currentNode.value < val || prevNode.value > val)
        && prevNode.value <= currentNode.value
        && currentNode !== node) {
        currentNode = currentNode.next;
        prevNode = prevNode.next;
      }
      // store appropriate node's next as temp
      const temp = prevNode.next;
      // assign appropriate node's next as new node with value
      prevNode.next = new Node(val);
      // assign new node's next as temp
      prevNode.next.next = temp;
      // reassign the tail if necessary
      if (this.tail === prevNode) this.tail = prevNode.next;
    }
  }
}

const a = new Node(2);
const b = a.next = new Node(4);
const c = b.next = new Node(4);
c.next = a;

// will be give a reference to a node in the list, must insert after and maintain the cycle

// what if the list is empty? (given null) - must make the list cyclic with only one element
// what if the reference node is the tail? the head?

const list = new LinkedList(a);
list.tail = c;

list.insertStartingWith(b, 5);
