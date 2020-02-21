const { fetchBlocking } = require('./mockRequests')

console.log('first cool thing happens!')

const product = fetchBlocking('http://www.dollarshaveclub.com/products/shave-butter')
console.log('product: ', product)

console.log('second cool thing happens!')