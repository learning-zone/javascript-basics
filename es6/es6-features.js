//01. Template String

  function print(Name) {
    console.log("Hello " + Name);
    console.log(`Hello ${Name}`);
  }
  print("Pradeep");


//02. Spread Operators

var firstGroup = ["C", "C++", "Java"];
var secondGroup = ["SQL", "MySQL", "BigData"];
var thirdGroup = ["Android", "Python", "Ruby", firstGroup, secondGroup];
var finalGroup = ["Android", "Python", "Ruby", ...firstGroup, ...secondGroup];

console.log(thirdGroup);
console.log(finalGroup);


//03. Sets

const sets = new Set([1, 2, 3, 4, 5]);
	
console.log(sets.has(1)); 
console.log(sets.has(0)); 


//04. Default Parametrs

function add(x = 10, y = 20) {
  console.log(x + y);
}
add(30, 40);


//05. repeat()

    var cat = {
		 meow(times){
			 console.log("meow ".repeat(times));
		 }
	};
    cat.meow(2); 
    

//06. Arrow Function

var companyList = function(company) {
  console.log(company);
};

//ES-6
var companyList = company => console.log(company); //arraow function

companyList(["Apple", "Microsoft", "Google"]);


//07. Arrow function with 'this'

var person = {
  first: "Pradeep",
  actions: ["bike", "hike", "ski", "surf"],
  printActions: function() {
    var _this = this;
    this.actions.forEach(function(action) {
      var str = _this.first + " likes to " + action;
      console.log(str);
    });
  }
};
person.printActions();

//ES-6
var person = {
  first: "Pradeep",
  actions: ["bike", "hike", "ski", "surf"],
  printActions() {
    this.actions.forEach(action => {
      var str = this.first + " likes to " + action;
      console.log(str);
    });
  }
};


//08. Destructing Assignment

var phone = {
  title: "iPhone",
  price: 800,
  description: "The iPhone is a smartphone developed by Apple"
};

console.log(phone.title);
//ES-6
var { title, price } = {
  title: "iPhone",
  price: 800,
  description: "The iPhone is a smartphone developed by Apple"
};

console.log(title);

//09. Generators

/*** Calling a generator function does not execute its body immediately ***/

	function* generator(i) {
		yield i;
		yield i + 10;
	}
	var gen = generator(10);
	console.log(gen.next().value); 
    console.log(gen.next().value); 
    

//10. Symbols

/*** They are tokens that serve as unique IDs. We create symbols via the factory function Symbol() ***/

	const symbol1 = Symbol();
	const symbol2 = Symbol(42);
	const symbol3 = Symbol('foo');

	console.log(typeof symbol1); 

	console.log(symbol3.toString()); 

	console.log(Symbol('foo') === Symbol('foo')); 


// 11. Iterator

/**  The iterable protocol allows JavaScript objects to define or customize their iteration behavior. **/

  var title = 'ES6';
  var iterateIt = title[Symbol.iterator]();

  console.log(iterateIt.next().value); //output: E
  console.log(iterateIt.next().value); //output: S
  console.log(iterateIt.next().value); //output: 6