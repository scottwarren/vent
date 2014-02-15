var vent = {
  callbacks: {},
  on: function(eventName, callback) {
    if(!this.callbacks[eventName]) {
      this.callbacks[eventName] = [];
    }
    this.callbacks[eventName].push(callback);
  },
  trigger: function(eventName) {
    for (var i = this.callbacks[eventName].length - 1; i >= 0; i--) {
      this.callbacks[eventName][i]();
    }
  }
};
