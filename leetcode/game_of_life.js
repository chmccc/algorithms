/*
According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

Example:

Input: 
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
Output: 
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]
*/

const gameOfLife = (board) => {
  const original = board.map(row => row.map(e => e));
  for (let i = 0; i < board.length; i++) {
    for (let k = 0; k < board[i].length; k++) {
      // check all positions for a count of living neighbors
      let count = 0;
      if (original[i - 1] !== undefined) {
        if (original[i - 1][k - 1]) count += 1;
        if (original[i - 1][k]) count += 1;
        if (original[i - 1][k + 1]) count += 1;
      }
      if (original[i][k - 1]) count += 1;
      if (original[i][k + 1]) count += 1;
      if (original[i + 1] !== undefined) {
        if (original[i + 1][k - 1]) count += 1;
        if (original[i + 1][k]) count += 1;
        if (original[i + 1][k + 1]) count += 1;
      }
      // console.log('at r/c ' + i + ' ' + k + ' and count is ' + count + 'and state is ' + original[i][k])
      if (original[i][k] === 1) {
        // if cell is live...
        if (count < 2) board[i][k] = 0;
        else if (count > 3) board[i][k] = 0;
        else board[i][k] = 1;
      } else if (original[i][k] === 0 && count === 3) board[i][k] = 1;
    }
  }
  return board;
};