const { fetchCallback } = require('./mockRequests');

console.log('first cool thing happens!');

fetchCallback(
  'https://www.dollarshaveclub.com/products/shave-butter',
  (response) => {
    console.log('product: ', response);
  }
);

console.log('second cool thing happens!');
