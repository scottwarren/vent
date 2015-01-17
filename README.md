vent
====

Basic JS events with no dependencies

[![Build Status](https://travis-ci.org/scottwarren/vent.png?branch=master)](https://travis-ci.org/scottwarren/vent) [![Coverage Status](https://coveralls.io/repos/scottwarren/vent/badge.png?branch=master)](https://coveralls.io/r/scottwarren/vent?branch=master)

**Installation:***

`npm install vent.js`

**Usage:**

Include vent.js before your subscriptions

New event subscription:
```
vent.on('eventName', callback);
```

Trigger event:
```
vent.trigger('eventName');
```

Unsubscribe:
```
var eventToUnSub = vent.on('example', function() {
  console.log('test');
});
vent.off(eventToUnSub);
```

Check whether an event has any callbacks to run:
```
vent.hasEvent('eventName');
```
