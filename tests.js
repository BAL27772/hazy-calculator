var calculate = require('./hazyCalculator').calculate
var expect = require('chai').expect

describe('HazyCalculator', () => {
  it('multiplies two numbers when one is stringified', () => {
    const calculationSteps = ['2', '*', 4]
    expect(calculate(calculationSteps)).to.equal(8)
  })

  it('treats null values as zeroes and includes them in the calculation', () => {
    const calculationSteps = [10, '+', null]
    expect(calculate(calculationSteps)).to.equal(10)
  })

  it('ignores undefined and empty string values and continues operation', () => {
    const calculationSteps = [, , '', 23, '-', , 12]
    expect(calculate(calculationSteps)).to.equal(11)
  })

  it('can perform a complex operation with multiple steps', () => {
    const calculationSteps = [6, '/', '3', '*', 5]
    expect(calculate(calculationSteps)).to.equal(10)
  })

  it('throws an error when the sequence has two operators in a row', () => {
    const calculationSteps = [6, '/', '+', 3]
    expect(() => calculate(calculationSteps)).to.throw('Invalid input!')
  })

  it('throws an error when the sequence contains non-numeric and non-operator elements', () => {
    const calculationSteps = [9, 'NINE', 9]
    expect(() => calculate(calculationSteps)).to.throw('Invalid input!')
  })
})
