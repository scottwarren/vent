var assert = require('assert'),
  vent = require('./vent.js'),
  // this checks if an event is being run
  hasMyTestRun = false;

assert.equal(vent.hasEvent('test'), false, 'check that no events are bound');

assert.throws(function() { vent.trigger('test'); }, Error, 'check that an error is thrown');


var exampleEvent = vent.on('test', function() {
  hasMyTestRun = true;
});

// run this manually so we can see if the hasMyTestRun value has changed
vent.trigger('test')
assert.equal(hasMyTestRun, true, 'check that the bound event is ran');
assert.equal(vent.hasEvent('test'), true, 'check that an event is bound for test');

vent.off(exampleEvent);
assert.equal(vent.hasEvent('test'), false, 'check that no events are bound');
