vent
====

Basic JS events

[![Build Status](https://travis-ci.org/scottwarren/vent.png?branch=master)](https://travis-ci.org/scottwarren/vent) [![Coverage Status](https://coveralls.io/repos/scottwarren/vent/badge.png)](https://coveralls.io/r/scottwarren/vent)

Usage:

Include vent.js before your subscriptions

New event subscription:
`vent.on('eventName', callback);`

Trigger event:
`vent.trigger('eventName');`
