/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

*/

const trap = (height) => {
  // must find the tallest (right-most) wall (refactor: break apart so its less confusing)
  const { index: tallest } = height.reduce((acc, e, i) => e >= acc.height ? {height: e, index: i} : acc, {height: 0, index: 0});
  let tallestSoFar = 0;
  let waterCount = 0;
  // loop through until tallest overall, checking if the current item is less than tallest encountered so far and adding the difference
  for (let i = 0; i < tallest; i += 1) {
    if (height[i] > tallestSoFar) tallestSoFar = height[i];
    else waterCount += tallestSoFar - height[i];
  }
  // loop backward until tallest overall, same thing in reverse
  tallestSoFar = 0;
  for (let i = height.length - 1; i > tallest; i -= 1) {
    if (height[i] > tallestSoFar) tallestSoFar = height[i];
    else waterCount += tallestSoFar - height[i];
  }
  return waterCount;
};

console.log(trap([3,1,0,0,1]));