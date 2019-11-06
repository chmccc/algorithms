const { fetchCallback } = require('./mockRequests');

console.log('first cool thing happens!');
fetchCallback(
  'http://www.dollarshaveclub.com/products/shave-butter',
  (response) => {
    console.log('product: ', response);
  }
);
console.log('second cool thing happens!');

// callback function executes????
