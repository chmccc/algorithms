const { fetchPromise } = require('./mockRequests');

console.log('first cool thing happens!');
fetchPromise('https://www.dollarshaveclub.com/products/shave-butter')
  .then((productResponse) => {
    console.log('product: ', productResponse);
    return fetchPromise(`https://www.dollarshaveclub.com/brands/${productResponse.brand}`)
  })
  .then((brandResponse) => {
    console.log('brand: ', brandResponse);
    return fetchPromise(`https://www.dollarshaveclub.com/products/${brandResponse.products[2]}`)
  })
  .then((productResponse) => {
    console.log('2nd product: ', productResponse)
  })
