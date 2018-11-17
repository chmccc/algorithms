

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = (nums) => {
    // base case, only one item
    if (nums.length === 1) return new TreeNode(nums[0]);
    // get max value from array
    const max = Math.max(...nums);
    // create node whose value is max
    const node = new TreeNode(max);
    // get index of max in array
    const index = nums.indexOf(max);
    // slice off first, second half into separate arrays
    const firstHalf = nums.slice(0, index);
    const secondHalf = nums.slice(index + 1);
    // set left subtree to result of recursion on first half array, vice versa
    node.left = firstHalf.length ? constructMaximumBinaryTree(firstHalf) : null;
    node.right = secondHalf.length ? constructMaximumBinaryTree(secondHalf) : null;
    // return the tree
    return node;
};

constructMaximumBinaryTree([3,2,1,6,0,5]);