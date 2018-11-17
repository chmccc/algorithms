/*
Return any binary tree that matches the given preorder and postorder traversals.

Values in the traversals pre and post are distinct positive integers.

Example 1:

Input: pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
Output: [1,2,3,4,5,6,7]
 
Note:

1 <= pre.length == post.length <= 30
pre[] and post[] are both permutations of 1, 2, ..., pre.length.
It is guaranteed an answer exists. If there exists multiple answers, you can return any of them.
*/

function Node(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
const constructFromPrePost = (pre, post) => {
  const tree = new Node(pre[0]);
  const treeSet = new Set();
  const parentStack = [];
  let preI = 1;
  let parent = tree;

  while (post.length && pre[preI]) {
    let newNode;
    if (parent.val !== post[0]) {
      parentStack.push(parent);
      newNode = new Node(pre[preI]);
      parent.left = newNode;
    } else {
      parent = parentStack.pop();
      while (treeSet.has(post[0])) post.shift();
      newNode = new Node(pre[preI]);
      parent.right = newNode;
    }
    treeSet.add(newNode.val);
    parent = newNode;
    preI++;
  }

  return tree;
};

const preArray = [1,2,4,5,3,6,7];
const postArray = [4,5,2,6,7,3,1];

const t = constructFromPrePost(preArray, postArray);
console.log(t);