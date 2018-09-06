/*
Given a string representation of a 2d map, return the number of islands in the map.

Land spaces are denoted by a zero.
Water is denoted by a dot.
Rows are denoted by newlines ('\n').
Two land spaces are considered connected if they are adjacent (horizontal or vertical, but not diagonal).
Too easy? Try solving it without recursion..

##Example:

You may be given the string ".0...\n.00..\n....0" as input.

This correlates to a grid, like this:

.0...
.00..
....0

This would be an example of a map that contains two islands; one with 3 pieces of land, one with 1 piece of land.
*/

function printMap(map) {
  console.log('island cleared!\n');
  map.forEach(row => console.log(row.join('') + '\n'));
}

function countIslands (mapStr) {
  const map = mapStr.split('\n').map(e => e.split(''));
  let count = 0;
  // loop through looking for land tiles, once found, increase count & clear the island
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[0].length; x++) {
      if (map[y][x] === '0') {
        count += 1;
        let spotsToVisit = [[x, y]];
        while (spotsToVisit.length) {
          let [x2, y2] = spotsToVisit.pop();
          if (map[y2][x2 + 1] !== undefined && map[y2][x2 + 1] === '0') spotsToVisit.push([x2 + 1, y2]); // look east
          if (map[y2 + 1] !== undefined && map[y2 + 1][x2] === '0') spotsToVisit.push([x2, y2 + 1]); // move south
          if (map[y2][x2 - 1] !== undefined && map[y2][x2 - 1] === '0') spotsToVisit.push([x2 - 1, y2]); // move west
          if (map[y2 - 1] !== undefined && map[y2 - 1][x2] === '0') spotsToVisit.push([x2, y2 - 1]); // move north
          map[y2][x2] = '.';
        }
      }
    }
  }
  return count;
}

console.log(countIslands('00...0\n0...00\n......\n0.0.0.\n0.....'));