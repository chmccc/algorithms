const { fetchBlocking } = require('./mockRequests')

console.log('first cool thing happens!')

const product = fetchBlocking('http://www.dollarshaveclub.com/products/shave-butter')
console.log('product: ', product)
const brand = fetchBlocking(`http://www.dollarshaveclub.com/brands/${product.brand}`)
console.log('brand: ', brand)
const secondProduct = fetchBlocking(`http://www.dollarshaveclub.com/products/${brand.products[2]}`)
console.log('2nd product: ', secondProduct)

console.log('second cool thing happens!')