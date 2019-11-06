const { fetchCallback } = require('./mockRequests');

console.log('first cool thing happens!');
fetchCallback(
  'http://www.dollarshaveclub.com/products/shave-butter',
  (productResponse) => {
    console.log('product: ', productResponse);
    fetchCallback(`http://www.dollarshaveclub.com/brands/${productResponse.brand}`,
      (brandResponse) => {
        console.log('brand: ', brandResponse)
        fetchCallback(`http://www.dollarshaveclub.com/products/${brandResponse.products[0]}`,
          (productResponse) => {
            console.log('2nd product: ', productResponse)
          }
        )
      }
    )
  }
);
console.log('second cool thing happens!');