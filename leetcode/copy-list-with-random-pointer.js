/**
 * Definition for singly-linked list with a random pointer.
 */

function RandomListNode(label) {
    this.label = label;
    this.next = this.random = null;
}

const l = RandomListNode('A');
l.next = RandomListNode('B');
l.next.next = RandomListNode('C');
l.next.next.next = RandomListNode('D');
l.next.next.next.next = RandomListNode('E');
l.next.random = l.next.next.next; // B (1) --> D (3)
l.next.next.next.random = l.next.next; // D(3) --> C(2)
l.random = l.nex.next.next.next; // A(0) --> E(4)

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
const copyRandomList = (head) => {
  // declare counter variables for tracking positions during iteration
  let position = 0;
  // assign a dummy whose next value we will utimately return
  let dummy = new RandomListNode(head.value);
  // hash table of key: label to store stacks of cloned nodes and original nodes and their positions
  const encountered = { originals: {}, clones: {} };
  // hash table of key: label to store stacks of random new nodes created
  const randoms = {};
  // declare tracker variables
  let tracker = head;
  let cloneTracker = dummy;

  // iterate through the original list
  while (tracker) {
    const label = { tracker };
    // add original node to object of encountered nodes
    if (encountered.originals[label]) encountered.originals[label].push({ node: tracker, position });
    else encountered.originals[label] = { node: tracker, position }

    // check the random pointer to see if it points to a label we've encountered already
    if (tracker.random) {
      if (encountered.originals[tracker.random.label]) {
        // if so, identify the position of that random node in the original list
        let randPos;
        const origNodeArray = encountered.originals[tracker.random.label];
        for (let i = 0; i < origNodeArray.length; i++) {
          if (origNodeArray[i].label) 
        }
        // point the random to the associated node in the new list
        cloneTracker.random = encountered.clones[label][pos];
      // otherwise, clone original's random and add to random nodes table
      } else {
        randomNode = new RandomListNode(tracker.random.label);
      }
    }

    // check the next pointer to see if it points to a random node
      // if so, pop it out of its stack and assign clone's next to it
      // otherwise, clone original list item's next pointer (or null)

    // add new node to object of encountered nodes
    // move on

  // return dummy.next

};