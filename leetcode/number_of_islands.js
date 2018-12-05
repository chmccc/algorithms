/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/


/**
 * @param {character[][]} grid
 * @return {number}
 */

// recursive helper function to traverse and "clear" an island
const clearIsland = (board, y, x) => {
  board[y][x] = '0';
  if (y > 0 && board[y - 1][x] === '1') clearIsland(board, y - 1, x);
  if (y < board.length - 1 && board[y + 1][x] === '1') clearIsland(board, y + 1, x);
  if (x > 0 && board[y][x - 1] === '1') clearIsland(board, y, x - 1);
  if (x < board[y].length - 1 && board[y][x + 1] === '1') clearIsland(board, y, x + 1);
  return;
}

var numIslands = function(grid) {
  let islandCount = 0;
  for (let y = 0; y < grid.length; y++) {
      for (let x = 0; x < grid[y].length; x++) {
          if (grid[y][x] === '1') {
              islandCount++;
              clearIsland(grid, y, x);
          }
      }
  }
  return islandCount;
};