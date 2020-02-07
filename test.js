const operations = require('./operations')
const assert = require('assert')

it('sum of 1 and 3', () =>{
    assert.equal(operations.add(1,3), 4)
})

it('sume of -1 and -1', () =>{
    assert.equal(operations.add(-1, -1), -2)
})

it('difference of 33 and 3', () => {
    assert.equal(operations.subtract(33, 3), 30)
})

it('product of 12 and 12', () => {
    assert.equal(operations.multiply(12, 12), 144)
})

it('quotient of 10 of 2', () => {
    assert.equal(operations.divide(10, 2), 5)
})

it('a string is used instead of a number', () =>{
    assert.equal(operations.validateNumber('sample', 5), false)
})

it('both string is used instead of number', () => {
    assert.equal(operations.validateNumber('sample', 'elpmas'), false)
})

it('two numbers are used', () => {
    assert.equal(operations.validateNumber(1, 2), true)
})

// it('should return true', () => {
//     assert.equal(true, true)
// })