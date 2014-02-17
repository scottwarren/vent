vent
====

Basic JS events

[![Build Status](https://travis-ci.org/scottwarren/vent.png?branch=master)](https://travis-ci.org/scottwarren/vent)

Usage:

Include vent.js before your subscriptions

New event subscription:
`vent.on('eventName', callback);`

Trigger event:
`vent.trigger('eventName');`
