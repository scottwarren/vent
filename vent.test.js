// const assert = require('assert')
// const vent = require('./vent')

// import jest from 'jest'
// import vent from './vent'
const vent = require('./vent')

// This checks if an event has fired
let hasMyTestRun = false
let testArgs = [];

describe('vent', () => {
test('that no events are bound', () => {
  expect(vent.hasEvent('test')).toEqual(false)
})

test('that an error is thrown', () => {
  expect(() => vent.trigger('test')).toThrowError(Error)
})

test('that events are triggered', () => {
  var exampleEvent = vent.on('test', function() {
    hasMyTestRun = true;
  });

  var exampleEventOne = vent.on('anotherTest', function(some, arg, uments) {
    testArgs[0] = some;
    testArgs[1] = arg;
    testArgs[2] = uments;
  });


  // run this manually so we can see if the hasMyTestRun value has changed
  vent.trigger('test');

  vent.trigger('anotherTest', 'some', 'arg', 'uments aaa');

  // , 'assert some arg is passed and is the expected value');
  expect(testArgs[0]).toEqual('some')
  // , 'assert arguments are passed');
  expect(testArgs[1]).toEqual('arg')
  // , 'assert arguments are passed');
  expect(testArgs[2]).toEqual('uments aaa')

  // , 'check that the bound event is ran');
  expect(hasMyTestRun).toEqual(true)
  //, 'check that an event is bound for test');
  expect(vent.hasEvent('test')).toEqual(true)

  vent.off(exampleEvent);
  expect(vent.hasEvent('test')).toEqual(false)
  // , 'check that no events are bound');
})
})


// assert.throws(function() {
//   vent.trigger('test');
// }, Error, 'check that an error is thrown');



