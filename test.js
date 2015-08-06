var assert = require('assert'),
  vent = require('./vent.js'),
  // this checks if an event is being run
  hasMyTestRun = false,
  test = [];

assert.equal(vent.hasEvent('test'), false, 'check that no events are bound');

assert.throws(function() {
  vent.trigger('test');
}, Error, 'check that an error is thrown');


var exampleEvent = vent.on('test', function() {
  hasMyTestRun = true;
});

var exampleEventOne = vent.on('anotherTest', function(some, arg, uments) {
  test[0] = some;
  test[1] = arg;
  test[2] = uments;
});


// run this manually so we can see if the hasMyTestRun value has changed
vent.trigger('test');

vent.trigger('anotherTest', 'some', 'arg', 'uments aaa');

assert.equal(test[0], 'some', 'assert some arg is passed and is the expected value');
assert.equal(test[1], 'arg', 'assert arguments are passed');
assert.equal(test[2], 'uments aaa', 'assert arguments are passed');

assert.equal(hasMyTestRun, true, 'check that the bound event is ran');
assert.equal(vent.hasEvent('test'), true, 'check that an event is bound for test');

vent.off(exampleEvent);
assert.equal(vent.hasEvent('test'), false, 'check that no events are bound');
