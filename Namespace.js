
var MYNAMESPACE = MYNAMESPACE || {};

MYNAMESPACE.MyFirstClass = function(val) {
  this.value = val;
  this.getValue = function() {
    return this.value;
  };
};

var myFirstInstance = new MYNAMESPACE.MyFirstClass(46);
console.log(myFirstInstance.getValue());
