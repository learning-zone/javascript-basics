
/*** 
 * A closure is the combination of a function bundled together (enclosed) with references 
 * to its surrounding state (the lexical environment). In other words, a closure gives 
 * you access to an outer function’s scope from an inner function. 
 * 
 * ***/

 //Example - 01
 
var Person = function(name) {
  var text = "Hello " + name; // Local variable
  var say = function() {  // Closure makes this function private to this class
    console.log(text);
  };
  return say;
};

var obj = new Person("Pradeep");
obj(); 
