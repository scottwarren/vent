var assert = require('assert'),
  vent = require('./vent.js'),
  // this checks if an event is being run
  hasMyTestRun = false,
  test,
  testone,
  testtwo;

assert.equal(vent.hasEvent('test'), false, 'check that no events are bound');

assert.throws(function() {
  vent.trigger('test');
}, Error, 'check that an error is thrown');


var exampleEvent = vent.on('test', function() {
  hasMyTestRun = true;
});

var exampleEventOne = vent.on('anotherTest', function(some, arg, uments) {
  test = some;
  testone = arg;
  testtwo = uments;
});

// run this manually so we can see if the hasMyTestRun value has changed
vent.trigger('test');

vent.trigger('anotherTest', 'some', 'arg', 'uments aaa');

assert.equal(test, 'some', 'assert arguments are passed');
assert.equal(testone, 'arg', 'assert arguments are passed');
assert.equal(testtwo, 'uments aaa', 'assert arguments are passed');

assert.equal(hasMyTestRun, true, 'check that the bound event is ran');
assert.equal(vent.hasEvent('test'), true, 'check that an event is bound for test');

vent.off(exampleEvent);
assert.equal(vent.hasEvent('test'), false, 'check that no events are bound');
