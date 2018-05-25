'use strict';

// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer.js');


// unit test for our 'fizzBuzzer' function
describe('fizzBuzzer', function() {

  it('should return "fizz" if input is divisible by 3', function() {
    const normalInputs = [9, 12, 36];
    normalInputs.forEach(function(each) {
      const result = fizzBuzzer(each);
      expect(result).to.equal('fizz');
    });
  });

  it('should return "buzz" if input is divisible by 5', function() {
    const normalInputs = [10, 20, 55];
    normalInputs.forEach(function(each) {
      const result = fizzBuzzer(each);
      expect(result).to.equal('buzz');
    });
  });

  it('should return "fizz-buzz" if input is divisible by 3 and 5', function() {
    const normalInputs = [30, 75, 105];
    normalInputs.forEach(function(each) {
      const result = fizzBuzzer(each);
      expect(result).to.equal('fizz-buzz');
    });
  });

  it('should return an erorr if input is not a number', function() {
    const badInputs = ['1', 'a', [], {}, function() {}, true, undefined, null]; // NaN would NOT throw an error...
    badInputs.forEach(function(each) {
      expect(function() {
        fizzBuzzer(each);
      }).to.throw(Error);
    });
  });

});
