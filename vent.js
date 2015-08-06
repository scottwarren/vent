var vent = {
  /**
   * contains all of the callbacks for all events, the key is the event name
   * @type {Object}
   */
  callbacks: {},

  /**
   * use this to bind an event
   * @param  {string}   eventName name of the event
   * @param  {function} callback  ran when eventName is triggered
   * @return {Object}             use this for an ID to unsubscribe with
   */
  on: function(eventName, callback) {

    /* istanbul ignore else */
    if(!this.hasEvent(eventName)) {
      this.callbacks[eventName] = [];
    }
    this.callbacks[eventName].push(callback);

    // use this as an ID to unsubscribe
    return { eventName: eventName, eventPosition: this.callbacks[eventName].length - 1 };
  },
  /**
   * checks whether an event is bound for eventName
   * @param  {string} eventName name of the event
   * @return {Boolean}          Boolean whether or not the event exists
   */
  hasEvent: function(eventName) {
    return typeof this.callbacks[eventName] != 'undefined' && this.callbacks[eventName].length > 0;
  },

  /**
   * used to unsubscribe a single event subscription
   * @param  {object} eventToRemove object returned from vent.on
   */
  off: function(eventToRemove) {
    this.callbacks[eventToRemove.eventName].splice(eventToRemove.eventPosition, 1);
  },

  /**
   * used to trigger an event, and all subscribed callbacks
   * @param  {string} eventName name of the event to trigger
   */
  trigger: function(eventName) {
    // convert arguments into a 'real' array
    var args = Array.prototype.slice.call(arguments);

    // remove the eventName argument from our new array
    args = args.slice(1);

    if (!this.hasEvent(eventName)) {
      throw new Error("No event bound for " + eventName);
    }

    for (var i = this.callbacks[eventName].length - 1; i >= 0; i--) {
      // Pass arguments from trigger method to the events' method
      this.callbacks[eventName][i].apply(this, args);
    }
  }
};

// added module export so if ran with node, you can load this with require('vent');
/* istanbul ignore else */
if (typeof module != 'undefined' && module.exports) {
  module.exports = vent;
}
