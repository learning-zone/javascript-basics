

var Person = {}; //Object creation

var Person = { name: "Pradeep", Address: "BTM" }; //Object key value pair

console.log(Person.name); //Access Object value uing key


var Person = [{ name: "Pradeep", Address: "BTM" }, //Array of Object
              { name: "Pradeep", Address: "BTM" },
              { name: "Pradeep", Address: "BTM" }
            ];

console.log(Person[0].name); //Access Object value uing key




//Multiple ways of creating object in javascript

//1. Using the Object() constructor:

	var d = new Object();
	
//2. Using Object.create() method:

	var a = Object.create(null);
	
//3. Using the bracket's syntactig sugar:

	var b = {};
	
//4. Using a function constructor

	var Obj = function(name) {
	  this.name = name;
	}
	var c = new Obj("hello"); 

	
//5. Using ES6 class syntax:

	class myObject  {
	  constructor(name) {
		this.name = name;
	  }
	}
	var e = new myObject("hello");
	
//6. Singleton pattern:

	var sp = new function(){
	  this.name = "hello";
	}