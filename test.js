var assert = require('assert'),
  vent = require('./vent.js');

assert.equal(vent.hasEvent('test'), false, 'check that no events are bound');

assert.throws(function() { vent.trigger('test'); }, Error, 'check that an error is thrown');

var exampleEvent = vent.on('test', function() {
  return 'I ran!'
});

// need some way to check if an event is being run
assert.equal(vent.trigger('test'), 'I ran!', 'check that the bound event is ran');
assert.equal(vent.hasEvent('test'), true, 'check that an event is bound for test');

vent.off(exampleEvent);
assert.equal(vent.hasEvent('test'), false, 'check that no events are bound');
