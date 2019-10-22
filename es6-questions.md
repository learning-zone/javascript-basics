## ES6 Interview Questions and Answers

|Sl.No| ES6 Questions|
|------|---------------|
|01. |[Can you give an example for destructuring an object or an array?](#q-can-you-give-an-example-for-destructuring-an-object-or-an-array)|
|02. |[List out important features of es6?](#q-list-out-important-features-of-es6)|
|03. |[ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?](#q-es6-template-literals-offer-a-lot-of-flexibility-in-generating-strings-can-you-give-an-example)|
|04. |[What advantage is there for using the arrow syntax for a method in a constructor?](#q-what-advantage-is-there-for-using-the-arrow-syntax-for-a-method-in-a-constructor)|
|05. |[What are fat arrow functions? When you should not use arrow functions in ES6?](#q-what-are-fat-arrow-functions-when-you-should-not-use-arrow-functions-in-es6)|
|06. |[How does await and async works in es6?](#q-how-does-await-and-async-works-in-es6)|
|07. |[What are the benefits of using arrow function over es5 function?](#q-what-are-the-benefits-of-using-arrow-function-over-es5-function)|
|08. |[What is a trampoline function? What is it used for?](#q-what-is-a-trampoline-function-what-is-it-used-for)|
|09. |[What are the differences between ES6 class and ES5 function constructors?](#q-what-are-the-differences-between-es6-class-and-es5-function-constructors)|
|10. |[Can you give an example of one of the ways that working with this has changed in ES6?](#q-can-you-give-an-example-of-one-of-the-ways-that-working-with-this-has-changed-in-es6)|
|11. |[What are the benefits of using spread syntax and how is it different from rest syntax?](#q-what-are-the-benefits-of-using-spread-syntax-and-how-is-it-different-from-rest-syntax)|
|12. |[What is the difference between let and var?](#q-what-is-the-difference-between-let-and-var)|
|13. |[Can you give an example for destructuring an object or an array?](#q-can-you-give-an-example-for-destructuring-an-object-or-an-array)
|14. |[What are the benefits of using spread syntax and how is it different from rest syntax?](#q-what-are-the-benefits-of-using-spread-syntax-and-how-is-it-different-from-rest-syntax)
|15. |[What is the purpose of let keyword?](#q-what-is-the-purpose-of-let-keyword)|
|16. |[What are the differences between variables created using `let`, `var` or `const`?](#q-what-are-the-differences-between-variables-created-using-let-var-or-const)|
|17. |[Have you ever used JavaScript templating? If so, what libraries have you used?](#q-have-you-ever-used-javascript-templating-if-so-what-libraries-have-you-used)|
|18. |[What is the difference between for..in and for..of?](#q-what-is-the-difference-between-for-in-and-for-of)|
|19. |[What are the differences between ES6 class and ES5 function constructors?](#q-what-are-the-differences-between-es6-class-and-es5-function-constructors)|
|20. |[What is the Temporal Dead Zone in ES6?](#q-what-is-the-temporal-dead-zone-in-es6)|
|21. |[What is the difference between ES6 Map and WeakMap?](#q-what-is-the-difference-between-es6-map-and-weakmap)|


#### Q. Can you give an example for destructuring an object or an array?

Destructuring is an expression available in ES6 which enables a succinct and convenient way to extract values of Objects or Arrays and place them into distinct variables.

**Array destructuring**

```javascript
// Variable assignment.
const foo = ['one', 'two', 'three'];

const [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"
```

```javascript
// Swapping variables
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
```

**Object destructuring**

```javascript
// Variable assignment.
const o = { p: 42, q: true };
const { p, q } = o;

console.log(p); // 42
console.log(q); // true
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. List out important features of es6?
* **Template String**
```javascript
function print(Name) {
  console.log("Hello " + Name); // Hello Pradeep
  console.log(`Hello ${Name}`); // Hello Pradeep
}
print("Pradeep");
```

* **Spread Operators**  
Spread operator allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements. Let's take an example to see this behavior,
```javascript
function calculateSum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(calculateSum(...numbers)); // 6
```

* **Sets**
```javascript
const sets = new Set([1, 2, 3, 4, 5]);
	
console.log(sets.has(1)); 
console.log(sets.has(0)); 
```

* **Default Parametrs**
```javascript
function add(x = 10, y = 20) {
  console.log(x + y);
}
add(30, 40);
```

* **repeat()**
```javascript
var cat = {
  meow(times){
    console.log("meow ".repeat(times));
  }
};
cat.meow(2); 
```

* **Arrow Function**
```javascript
var companyList = function(company) {
  console.log(company);
};

//ES-6
var companyList = company => console.log(company); //arraow function

companyList(["Apple", "Microsoft", "Google"]);

```
* **Arrow function with 'this'**
```javascript
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
```

* **Destructing Assignment**
```javascript
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
```
* **Generators**

Calling a generator function does not execute its body immediately
```javascript
function* generator(i) {
  yield i;
  yield i + 10;
}
var gen = generator(10);
console.log(gen.next().value); 
console.log(gen.next().value); 
```  

* **Symbols**

They are tokens that serve as unique IDs. We create symbols via the factory function Symbol()
```javascript
const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(typeof symbol1); 
console.log(symbol3.toString()); 
console.log(Symbol('foo') === Symbol('foo')); 
```

* **Iterator**

The iterable protocol allows JavaScript objects to define or customize their iteration behavior. 
```javascript
var title = 'ES6';
var iterateIt = title[Symbol.iterator]();

console.log(iterateIt.next().value); //output: E
console.log(iterateIt.next().value); //output: S
console.log(iterateIt.next().value); //output: 6
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?

Template literals help make it simple to do string interpolation, or to include variables in a string. Before ES2015, it was common to do something like this:

```javascript
var person = { name: 'Tyler', age: 28 };
console.log('Hi, my name is ' + person.name + ' and I am ' + person.age + ' years old!');
// 'Hi, my name is Tyler and I am 28 years old!'
```

With template literals, you can now create that same output like this instead:

```javascript
const person = { name: 'Tyler', age: 28 };
console.log(`Hi, my name is ${person.name} and I am ${person.age} years old!`);
// 'Hi, my name is Tyler and I am 28 years old!'
```

Note that you use backticks, not quotes, to indicate that you are using a template literal and that you can insert expressions inside the `${}` placeholders.

A second helpful use case is in creating multi-line strings. Before ES2015, you could create a multi-line string like this:

```javascript
console.log('This is line one.\nThis is line two.');
// This is line one.
// This is line two.
```

Or if you wanted to break it up into multiple lines in your code so you didn't have to scroll to the right in your text editor to read a long string, you could also write it like this:

```javascript
console.log('This is line one.\n' +
	'This is line two.');
// This is line one.
// This is line two.
```

Template literals, however, preserve whatever spacing you add to them. For example, to create that same multi-line output that we created above, you can simply do:

```javascript
console.log(`This is line one.
This is line two.`);
// This is line one.
// This is line two.
```

Another use case of template literals would be to use as a substitute for templating libraries for simple variable interpolations:

```javascript
const person = { name: 'Tyler', age: 28 };
document.body.innerHTML = `
  <div>
    <p>Name: ${person.name}</p>
    <p>Name: ${person.age}</p>
  </div>
`
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What advantage is there for using the arrow syntax for a method in a constructor?

The main advantage of using an arrow function as a method inside a constructor is that the value of `this` gets set at the time of the function creation and can't change after that. So, when the constructor is used to create a new object, `this` will always refer to that object. For example, let's say we have a `Person` constructor that takes a first name as an argument has two methods to `console.log` that name, one as a regular function and one as an arrow function:

```javascript
const Person = function(firstName) {
  this.firstName = firstName;
  this.sayName1 = function() { console.log(this.firstName); };
  this.sayName2 = () => { console.log(this.firstName); };
};

const john = new Person('John');
const dave = new Person('Dave');

john.sayName1(); // John
john.sayName2(); // John

// The regular function can have its 'this' value changed, but the arrow function cannot
john.sayName1.call(dave); // Dave (because "this" is now the dave object)
john.sayName2.call(dave); // John

john.sayName1.apply(dave); // Dave (because 'this' is now the dave object)
john.sayName2.apply(dave); // John

john.sayName1.bind(dave)(); // Dave (because 'this' is now the dave object)
john.sayName2.bind(dave)(); // John

var sayNameFromWindow1 = john.sayName1;
sayNameFromWindow1(); // undefined (because 'this' is now the window object)

var sayNameFromWindow2 = john.sayName2;
sayNameFromWindow2(); // John
```

The main takeaway here is that `this` can be changed for a normal function, but the context always stays the same for an arrow function. So even if you are passing around your arrow function to different parts of your application, you wouldn't have to worry about the context changing.
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What are fat arrow functions? When you should not use arrow functions in ES6?
An arrow function is a shorter syntax for a function expression and does not have its own **this, arguments, super, or new.target**. These function are best suited for non-method functions, and they cannot be used as constructors.


**Arrow functions in ES6 has two limitations**:
* Don't work with new
* Fixed this bound to scope at initialisation

**When you should not use Arrow Functions**
1. Object methods
When you call cat.jumps, the number of lives does not decrease. It is because this is not bound to anything, and will inherit the value of this from its parent scope.
```javascript
var cat = {
  lives: 9,
  jumps: () => {
    this.lives--;
  }
}
```
2. Callback functions with dynamic context
If we click the button, we would get a TypeError. It is because this is not bound to the button, but instead bound to its parent scope.
```javascript
var button = document.getElementById('press');
button.addEventListener('click', () => {
  this.classList.toggle('on');
});
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How does await and async works in es6?
* **Promises**
```javascript
const delay = seconds => {
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000)
    });
};

console.log("Zero seconds wait");
delay(1).then(() => console.log('One seconds wait'));
delay(5).then(() => console.log('Five seconds wait'));
```
* **Loading data with fetch()**
```javascript
const getPeopleInSpace = () =>
    fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json());

getPeopleInSpace()
    .then(console.log);
```
* **Async() and await()**
```javascript
const delay = seconds => {
    return new Promise(
        resolve => setTimeout(resolve, seconds * 1000)
    )
};

const countToFive = async() => {
    console.log('zero seconds wait');
    await delay(2);
    console.log('Two seconds wait');
    await delay(5);
    console.log('Five seconds wait');
}

countToFive();
```
* **Async with fetch**
```javascript
const githubRequest = async(loginName) => {
    try{
        var response = await fetch(`http://api.github.com/users/${loginName}/followers`);
        var json = await response.json();
        var followerList = json.map(user => user.login);
        console.log(followerList);
    } catch(e){
        console.log("Data didn't load", e);
    }
};

//githubRequest('eveporcello');
githubRequest('pradeepkumar2');
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What are the benefits of using arrow function over es5 function? 
**Arrow functions**  
Arrows is a new syntax for functions, which brings several benefits:

* Arrow syntax automatically binds `this` to the surrounding code’s context
* The syntax allows an implicit return when there is no body block, resulting in shorter and simpler code in some cases
* Last but not least, `=>` is shorter and simpler than `function`, although stylistic issues are often subjective

The syntax is quite flexible:
```javascript
//arrow function with no parameters
var a1 = () => 1;
 
//arrow with one parameter can be defined without parentheses
var a2 = x => 1;
var a3 = (x) => 1;
 
//arrow with multiple params requires parentheses
var a4 = (x, y) => 1;
 
//arrow with body has no implicit return
var a5 = x => { return 1; };
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is a trampoline function? What is it used for? 
The trampoline is just a technique to optimize **recursion** and prevent `stack-overflow` exceptions in languages that don't support tail call optimization like Javascript ES5 implementation. However, ES6 will probably have support for tail call optimization.

The problem with regular recursion is that every recursive call adds a stack frame to the call stack, which you can visualize as a **pyramid** of calls. Here is a visualization of calling a factorial function recursively:
```
(factorial 3)
(* 3 (factorial 2))
(* 3 (* 2 (factorial 1)))
(* 3 (* 2 (* 1 (factorial 0)))) 
(* 3 (* 2 (* 1 1)))
(* 3 (* 2 1))
(* 3 2)
6
```
Here is a visualization of the stack where each vertical dash is a stack frame:
```
         ---|---
      ---|     |---
   ---|            |--- 
---                    ---
```
The problem is that the stack has limited size, and stacking up these stack frames can overflow the stack. Depending on the stack size, a calculation of a larger factorial would overflow the stack. That is why regular recursion in Javascript could be considered dangerous.

An optimal execution model would be something like a **trampoline** instead of a **pyramid**, where each recursive call is executed in place, and does not stack up on the call stack. That execution in languages supporting tail call optimization could look like:
```
(fact 3)
(fact-tail 3 1)
(fact-tail 2 3)
(fact-tail 1 6)
(fact-tail 0 6)
6
```
You can visualize the stack like a bouncing trampoline:
```
   ---|---   ---|---   ---|---
---      ---       ---       
```
This is clearly better since the stack has always only one frame, and from the visualization you can also see why it is called a trampoline. This prevents the stack from overflowing.

Since we don't have the luxury of `tail call optimization` in Javascript, we need to figure out a way to turn regular recursion into an optimized version that will execute in trampoline-fashion.

One obvious way is to **get rid of recursion**, and rewrite the code to be iterative.

When that is not possible we need a bit more complex code where instead of executing directly the recursive steps, we will utilize `higher order functions` to return a wrapper function instead of executing the recursive step directly, and let another function control the execution.

In your example, the **repeat** function wraps the regular recursive call with a function, and it returns that function instead of executing the recursive call:
```javascript
function repeat(operation, num) {
    return function() {
       if (num <= 0) return
       operation()
       return repeat(operation, --num)
    }
}
```
The returned function is the next step of recursive execution and the trampoline is a mechanism to execute these steps in a controlled and iterative fashion in the while loop:
```javascript
function trampoline(fn) {
    while(fn && typeof fn === 'function') {
        fn = fn()
    }
}
```
So the sole purpose of the trampoline function is to control the execution in an iterative way, and that ensures the stack to have only a single stack frame on the stack at any given time.

Using a trampoline is obviously less performant than simple recursion, since you are "blocking" the normal recursive flow, but it is much safer.
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What are the differences between ES6 class and ES5 function constructors?

Let's first look at example of each:

```javascript
// ES5 Function Constructor
function Person(name) {
  this.name = name;
}

// ES6 Class
class Person {
  constructor(name) {
    this.name = name;
  }
}
```

For simple constructors, they look pretty similar.

The main difference in the constructor comes when using inheritance. If we want to create a `Student` class that subclasses `Person` and add a `studentId` field, this is what we have to do in addition to the above.

```javascript
// ES5 Function Constructor
function Student(name, studentId) {
  // Call constructor of superclass to initialize superclass-derived members.
  Person.call(this, name);

  // Initialize subclass's own members.
  this.studentId = studentId;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// ES6 Class
class Student extends Person {
  constructor(name, studentId) {
    super(name);
    this.studentId = studentId;
  }
}
```

It's much more verbose to use inheritance in ES5 and the ES6 version is easier to understand and remember.
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Can you give an example of one of the ways that working with this has changed in ES6?

ES6 allows you to use [arrow functions](http://2ality.com/2017/12/alternate-this.html#arrow-functions) which uses the [enclosing lexical scope](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_separate_this). This is usually convenient, but does prevent the caller from controlling context via `.call` or `.apply`—the consequences being that a library such as `jQuery` will not properly bind `this` in your event handler functions. Thus, it's important to keep this in mind when refactoring large legacy applications.

#### Q. What are the benefits of using spread syntax and how is it different from rest syntax?

ES6's spread syntax is very useful when coding in a functional paradigm as we can easily create copies of arrays or objects without resorting to `Object.create`, `slice`, or a library function. This language feature is used often in Redux and rx.js projects.

```javascript
function putDookieInAnyArray(arr) {
  return [...arr, 'dookie'];
}

const result = putDookieInAnyArray(['I', 'really', "don't", 'like']); // ["I", "really", "don't", "like", "dookie"]

const person = {
  name: 'Todd',
  age: 29,
};

const copyOfTodd = { ...person };
```

ES6's rest syntax offers a shorthand for including an arbitrary number of arguments to be passed to a function. It is like an inverse of the spread syntax, taking data and stuffing it into an array rather than unpacking an array of data, and it works in function arguments, as well as in array and object destructuring assignments.

```javascript
function addFiveToABunchOfNumbers(...numbers) {
  return numbers.map(x => x + 5);
}

const result = addFiveToABunchOfNumbers(4, 5, 6, 7, 8, 9, 10); // [9, 10, 11, 12, 13, 14, 15]

const [a, b, ...rest] = [1, 2, 3, 4]; // a: 1, b: 2, rest: [3, 4]

const { e, f, ...others } = {
  e: 1,
  f: 2,
  g: 3,
  h: 4,
}; // e: 1, f: 2, others: { g: 3, h: 4 }
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the difference between let and var?
You can list out the differences in a tabular format

| var | let |
|---- | ---------
| It is been available from the beginning of JavaScript  | Introduced as part of ES6 |
| It has function scope | It has block scope  |
| Variables will be hoisted | Won't get hoisted|

Let's take an example to see the difference,
```javascript
function userDetails(username) {
   if(username) {
     console.log(salary); // undefined(due to hoisting)
     console.log(age); // error: age is not defined
     let age = 30;
     var salary = 10000;
   }
   console.log(salary); //10000 (accessible to due function scope)
   console.log(age); //error: age is not defined(due to block scope)
}
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Can you give an example for destructuring an object or an array?

Destructuring is an expression available in ES6 which enables a succinct and convenient way to extract values of Objects or Arrays and place them into distinct variables.

**Array destructuring**

```javascript
// Variable assignment.
const foo = ['one', 'two', 'three'];

const [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"
```

```javascript
// Swapping variables
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
```

**Object destructuring**

```javascript
// Variable assignment.
const o = { p: 42, q: true };
const { p, q } = o;

console.log(p); // 42
console.log(q); // true
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What are the benefits of using spread syntax and how is it different from rest syntax?

ES6's spread syntax is very useful when coding in a functional paradigm as we can easily create copies of arrays or objects without resorting to `Object.create`, `slice`, or a library function. This language feature is used often in Redux and rx.js projects.

```javascript
function putDookieInAnyArray(arr) {
  return [...arr, 'dookie'];
}

const result = putDookieInAnyArray(['I', 'really', "don't", 'like']); // ["I", "really", "don't", "like", "dookie"]

const person = {
  name: 'Todd',
  age: 29,
};

const copyOfTodd = { ...person };
```

ES6's rest syntax offers a shorthand for including an arbitrary number of arguments to be passed to a function. It is like an inverse of the spread syntax, taking data and stuffing it into an array rather than unpacking an array of data, and it works in function arguments, as well as in array and object destructuring assignments.

```javascript
function addFiveToABunchOfNumbers(...numbers) {
  return numbers.map(x => x + 5);
}

const result = addFiveToABunchOfNumbers(4, 5, 6, 7, 8, 9, 10); // [9, 10, 11, 12, 13, 14, 15]

const [a, b, ...rest] = [1, 2, 3, 4]; // a: 1, b: 2, rest: [3, 4]

const { e, f, ...others } = {
  e: 1,
  f: 2,
  g: 3,
  h: 4,
}; // e: 1, f: 2, others: { g: 3, h: 4 }
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the purpose of let keyword?

The let statement declares a **block scope local variable**. Hence the variables defined with let keyword are limited in scope to the block, statement, or expression on which it is used. Whereas variables declared with the var keyword used to define a variable globally, or locally to an entire function regardless of block scope. Let's take an example to demonstrate the usage,
```javascript
let counter = 30;
if (counter === 30) {
  let counter = 31;
  console.log(counter); // 31
}
console.log(counter); // 30 (because if block variable won't exist here)
```

#### Q. What are the differences between variables created using `let`, `var` or `const`?

Variables declared using the `var` keyword are scoped to the function in which they are created, or if created outside of any function, to the global object. `let` and `const` are _block scoped_, meaning they are only accessible within the nearest set of curly braces (function, if-else block, or for-loop).

```javascript
function foo() {
  // All variables are accessible within functions.
  var bar = 'bar';
  let baz = 'baz';
  const qux = 'qux';

  console.log(bar); // bar
  console.log(baz); // baz
  console.log(qux); // qux
}

console.log(bar); // ReferenceError: bar is not defined
console.log(baz); // ReferenceError: baz is not defined
console.log(qux); // ReferenceError: qux is not defined
```

```javascript
if (true) {
  var bar = 'bar';
  let baz = 'baz';
  const qux = 'qux';
}

// var declared variables are accessible anywhere in the function scope.
console.log(bar); // bar
// let and const defined variables are not accessible outside of the block they were defined in.
console.log(baz); // ReferenceError: baz is not defined
console.log(qux); // ReferenceError: qux is not defined
```

`var` allows variables to be hoisted, meaning they can be referenced in code before they are declared. `let` and `const` will not allow this, instead throwing an error.

```javascript
console.log(foo); // undefined

var foo = 'foo';
console.log(baz); // ReferenceError: can't access lexical declaration 'baz' before initialization

let baz = 'baz';
console.log(bar); // ReferenceError: can't access lexical declaration 'bar' before initialization

const bar = 'bar';
```

Redeclaring a variable with `var` will not throw an error, but 'let' and 'const' will.

```javascript
var foo = 'foo';
var foo = 'bar';
console.log(foo); // "bar"

let baz = 'baz';
let baz = 'qux'; // Uncaught SyntaxError: Identifier 'baz' has already been declared
```

`let` and `const` differ in that `let` allows reassigning the variable's value while `const` does not.

```javascript
// This is fine.
let foo = 'foo';
foo = 'bar';

// This causes an exception.
const baz = 'baz';
baz = 'qux';
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Have you ever used JavaScript templating? If so, what libraries have you used?

Yes. Handlebars, Underscore, Lodash, AngularJS, and JSX. I disliked templating in AngularJS because it made heavy use of strings in the directives and typos would go uncaught. JSX is my new favorite as it is closer to JavaScript and there is barely any syntax to learn. Nowadays, you can even use ES2015 template string literals as a quick way for creating templates without relying on third-party code.

```javascript
const template = `<div>My name is: ${name}</div>`;
```

However, do be aware of a potential XSS in the above approach as the contents are not escaped for you, unlike in templating libraries.

#### Q. What is the difference between for..in and for..of?
* **for in**: loops over enumerable property names of an object.

* **for of**: (new in ES6) does use an object-specific iterator and loops over the values generated by that.

Both for..of and for..in statements iterate over lists; the values iterated on are different though, for..in returns a list of keys on the object being iterated, whereas for..of returns a list of values of the numeric properties of the object being iterated.  
Example:
```javascript
let list = [4, 5, 6];

for (let i in list) {
   console.log(i); // "0", "1", "2",
}

for (let i of list) {
   console.log(i); // "4", "5", "6"
}
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What are the differences between ES6 class and ES5 function constructors?
```javascript
// ES5 Function Constructor
function Person(name) {
  this.name = name;
}

// ES6 Class
class Person {
  constructor(name) {
    this.name = name;
  }
}
```
#### Q. What is the Temporal Dead Zone in ES6?
In ES6, let bindings are not subject to Variable Hoisting, which means that let declarations do not move to the top of the current execution context. Referencing the variable in the block before the initialization results in a `ReferenceError` (contrary to a variable declared with var, which will just have the undefined value). The variable is in a “temporal dead zone” from the start of the block until the initialization is processed.

```javascript
console.log(aVar); // undefined
console.log(aLet); // causes ReferenceError: aLet is not defined
var aVar = 1;
let aLet = 2;
```
#### Q. What is the difference between ES6 Map and WeakMap?
**Map**  
It is used to associate a key to a value irrespective of the datatype such as strings, numbers, objects etc. To assign values to a map you need to use the set method:
```javascript
window.obj = {}
var map = new Map()
map.set(window.obj, 123)
```
Then, to retrieve the object call get:
```javascript
map.get(window.obj) // => 123
```
**WeakMap**  
WeakMap accepts only objects but not any primitive values (strings, numbers)
```javascript
function Obj(){
    this.val = new Array(10000000).join("---")
}

window.obj = new Obj();
var map = new WeakMap()
map.set(window.obj, 123)
delete window.obj
```
**Differences between Map and WeakMap**  
1. A WeakMap accepts only objects as keys whereas a Map,in addition to objects, accepts primitive datatype such as strings, numbers etc.
2. WeakMap objects doesn't avert garbage collection if there are no references to the object which is acting like a key. Therefore there is no method to retrieve keys in WeakMap, whereas in Map there are methods such as Map.prototype.keys() to get the keys.
3. There is no size property exists in WeakMap.

**Browser support for Map and WeakMap**  
The latest Chrome, Firefox, Edge and Safari support Map and WeakMap on desktop. There’s no support in IE10. On mobile newer browsers also have support, but IE Mobile doesn’t.
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What are default values in destructuring assignment?
A variable can be assigned a default value when the value unpacked from the array or object is undefined during destructuring assignment. It helps to avoid setting default values separately for each assignment.  

**Arrays destructuring:**  
```javascript
var x, y, z;

[x=2, y=4, z=6] = [10];
console.log(x); // 10
console.log(y); // 4
console.log(z); // 6
```

**Objects destructuring:**  
```javascript
var {x=2, y=4, z=6} = {x: 10};

console.log(x); // 10
console.log(y); // 4
console.log(z); // 6
```
#### Q. How do you swap variables in destructuring assignment?
```javascript
var x = 10, y = 20;

[x, y] = [y, x];
console.log(x); // 20
console.log(y); // 10
```
#### Q. What is the output of below spread operator array?
```javascript
[...'John Resig']
```
The output of the array is ['J', 'o', 'h', 'n', '', 'R', 'e', 's', 'i', 'g']
Explanation: The string is an iterable type and the spread operator with in an array maps every character of an iterable to one element. Hence, each character of a string becomes an element within an Array.
