/* Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

1,2,3,4

const spiralOrder = (matrix) => {
  // declare output array
  const output = [];
  while (matrix.length) {
    // add and shift first sub array
    output.push(...matrix.shift());
    // add and pop final element of all middle arrays in order
    for (let i = 0; i < matrix.length - 1; i += 1) {
      if (matrix[i].length) output.push(matrix[i].pop());
    }
    // add and pop last array reversed
    if (matrix.length) output.push(...matrix.pop().reverse());
    // add and shift first element of all middle arrays in reverse order
    for (let i = matrix.length - 1; i >= 1; i -= 1) {
      if (matrix[i].length) output.push(matrix[i].shift());
    }
  }
  // return output array
  return output;
}

const input = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]];

console.log(JSON.stringify(spiralOrder(input)));