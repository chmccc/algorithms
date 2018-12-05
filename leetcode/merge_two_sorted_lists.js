/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

var mergeTwoLists = function(l1, l2) {
	let p1 = l1;
	let p2 = l2;
	let larger;
	let smaller;
	// loop while p1 and p2 not null
	while (p1 && p2) {
		// advance p1 while next not null and less than p2
		while (p1.next && p1.value < p2.value) { p1 = p1.next; }
		larger = p1.value > p2.value ? p1 : p2;
		smaller = larger === p1 ? p2 : p1;
        console.log(larger, smaller)
		// advance p1
		p1 = p1.next;
		// advance p2
		p2 = p2.next;
		// set smaller next to larger
		smaller.next = larger;
		// set larger next to p2 if p2 not null
		if (p2) larger.next = p2;
	}
	return l1;
};