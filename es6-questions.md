# ES6 Interview Questions and Answers


|Sl.No|  Questions                                                     |
|----|-----------------------------------------------------------------|
| 01.|[Can you give an example for destructuring an object or an array?](#q-can-you-give-an-example-for-destructuring-an-object-or-an-array)|
| 02.|[List out important features of es6?](#q-list-out-important-features-of-es6)|
| 03.|[ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?](#q-es6-template-literals-offer-a-lot-of-flexibility-in-generating-strings-can-you-give-an-example)|
| 04.|[What is the benefit of using the arrow syntax for a method in a constructor?](#q-what-is-the-benefit-of-using-the-arrow-syntax-for-a-method-in-a-constructor)|
| 05.|[What are fat arrow functions? When you should not use arrow functions in ES6?](#q-what-are-fat-arrow-functions-when-you-should-not-use-arrow-functions-in-es6)|
| 06.|[How does await and async works in es6?](#q-how-does-await-and-async-works-in-es6)|
| 07.|[What are the benefits of using arrow function over es5 function?](#q-what-are-the-benefits-of-using-arrow-function-over-es5-function)|
| 08.|[What are the differences between ES6 class and ES5 function constructors?](#q-what-are-the-differences-between-es6-class-and-es5-function-constructors)|
| 09.|[What are the benefits of using spread syntax and how is it different from rest syntax?](#q-what-are-the-benefits-of-using-spread-syntax-and-how-is-it-different-from-rest-syntax)|
| 10.|[What are the differences between variables created using `let`, `var` or `const`?](#q-what-are-the-differences-between-variables-created-using-let-var-or-const)||
| 11.|[What is the difference between for..in and for..of?](#q-what-is-the-difference-between-forin-and-forof)|
| 12.|[What is the Temporal Dead Zone in ES6?](#q-what-is-the-temporal-dead-zone-in-es6)|
| 13.|[What is the difference between ES6 Map and WeakMap?](#q-what-is-the-difference-between-es6-map-and-weakmap)|
| 14.|[What are default values in destructuring assignment?](#q-what-are-default-values-in-destructuring-assignment)|
| 15.|[How do you swap variables using Destructuring Assignment?](#q-how-do-you-swap-variables-using-destructuring-assignment)|
| 16.|[What is the output of below spread operator array?](#q-what-is-the-output-of-below-spread-operator-array)|
| 17.|[What is modules in ES6?](#q-what-is-modules-in-es6)|
| 18.|[What is a trampoline function? What is it used for?](#q-what-is-a-trampoline-function-what-is-it-used-for)|
| 19.|[What is the difference between Set and WeakSet in ES6?](#q-what-is-the-difference-between-set-and-weakset-in-es6)|
| 20.|[What is difference between fetch() and XMLHttpRequest() in JavaScript?](#q-what-is-difference-between-fetch-and-xmlhttprequest-in-javascript)|
| 21.|[What is the difference between Promise and AJAX?](#q-what-is-the-difference-between-promise-and-ajax)|
| 22.|[What is use of Proxies in es6?](#q-what-is-use-of-proxies-in-es6)|
| 23.|[How could you make sure a const value is garbage collected?](#q-how-could-you-make-sure-a-const-value-is-garbage-collected)|

<br/>

## Q. Can you give an example for destructuring an object or an array?

Destructuring is an expression available in ES6 which enables a succinct and convenient way to extract values of Objects or Arrays and place them into distinct variables.

**Array Destructuring**

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

**Object Destructuring**

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

## Q. List out important features of es6?

**1. Template Strings**  

Template literals are string literals allowing embedded expressions.
 
**Benefits**

* String interpolation
* Embedded expressions
* Multiline strings without hacks
* String formatting
* String tagging for safe HTML escaping, localization and more

```javascript
let greeting = `Hello World!`;

// String Substitution
let name = "Alex";
console.log(`Hi, ${name}!`); // Output: "Hi, Alex!"


// Multiline Strings
let greeting = "Hello \
World";

// Tagged Templates
fn`Hello ${you}! You're looking ${adjective} today!`
```

**2. Spread Operator**  
Spread operator allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements. 
```javascript
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // 6

console.log(sum.apply(null, numbers)); // 6
```
**2.1. Copying an array**

```javascript
let fruits = ['Apple','Orange','Banana'];

let newFruitArray = [...fruits];

console.log(copiedList); // ['Apple','Orange','Banana']
```
**2.2. Concatenating arrays**  
```javascript
let arr1 = ['A', 'B', 'C'];

let arr2 = ['X', 'Y', 'Z'];

let result = [...arr1, ...arr2];

console.log(result); // ['A', 'B', 'C', 'X', 'Y', 'Z']
```
**2.3. Spreading elements together with an individual element**
```javascript
let fruits = ['Apple','Orange','Banana'];

let newFruits = ['Cherry', ...names];

console.log(newFruits); // ['Cherry', 'Apple','Orange','Banana']
```
**2.4. Spreading elements on function calls**
```javascript
let fruits = ['Apple','Orange','Banana'];

var getFruits = (f1, f2, f3) => {
console.log(Fruits: ${f1}, ${f2} and ${f3}); };

getFruits(...fruits); // Fruits: Apple, Orange and Banana
```
**2.5. Spread syntax for object literals**
```javascript
var obj1 = { id: 101, name: 'Jhon Doe' }
var obj2 = { age: 25, country: 'USA'}

const employee = { ...obj1, ...obj2 }

console.log(employee); //{ "id": 101, "name": "Jhon Doe", "age": 25, "country": "USA" }
```

**3. Sets**  

Sets are a new object type with ES6 (ES2015) that allow to create collections of unique values. The values in a set can be either simple primitives like strings or integers, but more complex object types like object literals or arrays can also be part of a set.

```javascript
let animals = new Set();

animals.add('🐷');
animals.add('🐼');
animals.add('🐢');
animals.add('🐿');
console.log(animals.size); // 4
animals.add('🐼');
console.log(animals.size); // 4

console.log(animals.has('🐷')); // true
animals.delete('🐷');
console.log(animals.has('🐷')); // false

animals.forEach(animal => {
  console.log(`Hey ${animal}!`);
});

// Hey 🐼!
// Hey 🐢!
// Hey 🐿!

animals.clear();
console.log(animals.size); // 0


// Example 02: Pass-In Arrray
let myAnimals = new Set(['🐷', '🐢', '🐷', '🐷']);

myAnimals.add(['🐨', '🐑']);
myAnimals.add({ name: 'Rud', type: '🐢' });
console.log(myAnimals.size); // 4

myAnimals.forEach(animal => {
  console.log(animal);
});


// 🐷
// 🐢
// ["🐨", "🐑"]
// Object { name: "Rud", type: "🐢" }


// Example 03: Strings are a valid iterable so they can also be passed-in to initialize a set
console.log('Only unique characters will be in this set.'.length); // 43

let sentence = new Set('Only unique characters will be in this set.');
console.log(sentence.size); // 18


// Example 04: On top of using forEach on a set, for…of loops can also be used to iterate over sets
let moreAnimals = new Set(['🐺', '🐴', '🐕', '🐇']);

for (let animal of moreAnimals) {
  console.log(`Howdy ${ animal }`);
}

// Howdy 🐺
// Howdy 🐴
// Howdy 🐕
// Howdy 🐇
```
**Sets: Keys and Values**  

Sets also have the `keys` and `values` methods, with keys being an alias for values, so both methods do exactly the same thing. Using either of these methods returns a new iterator object with the values of the set in the same order in which they were added to the set.

```javascript
let partyItems = new Set(['🍕', '🍾', '🎊']);
let items = partyItems.values();

console.log(items.next());
console.log(items.next());
console.log(items.next());
console.log(items.next().done);

// Object {
//   done: false,
//   value: "🍕"
// }

// Object {
//   done: false,
//   value: "🍾"
// }

// Object {
//   done: false,
//   value: "🎊"
// }

// true
```

**4. Default Parametrs**
```javascript
function add(x = 10, y = 20) {
  console.log(x + y);
}
add(30, 40); // 70
```

**5. repeat()**  

The `repeat()` method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

```javascript
var cat = {
  meow(times){
    console.log("meow ".repeat(times));
  }
};
cat.meow(2); // meow meow 
```

**6. Arrow Function (=>)**  
```javascript
var add = (x, y) => x + y;
console.log(add(10, 20)); // 30;

```
**7. Arrow function with `this`**
```javascript
var person = {
  first: "Alex",
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
  first: "Alex",
  actions: ["bike", "hike", "ski", "surf"],
  printActions() {
    this.actions.forEach(action => {
      var str = this.first + " likes to " + action;
      console.log(str);
    });
  }
};
```

**8. Destructing Assignment**
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
console.log(title); // iPhone
```
**9. Generators**  

A generator is a function that can stop midway and then continue from where it stopped. In short, a generator appears to be a function but it behaves like an `iterator`.
```javascript
function* generator(num) {
  yield num + 1;
  yield num + 2;
  yield num + 3;
  yield num + 4;
  yield num + 5;
}
var gen = generator(10);
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 14
console.log(gen.next().value); // 15
```  

**9.1. Implementing Iterables**  
```javascript
function * iterableObj() {
  yield 'This';
  yield 'is';
  yield 'iterable.'
}
for (const val of iterableObj()) {
  console.log(val);
}

// This
// is 
// iterable.
```
**9.2 Infinite Data Streams**  
```javascript
function * naturalNumbers() {
  let num = 1;
  while (true) {
    yield num;
    num = num + 1
  }
}
const numbers = naturalNumbers();
console.log(numbers.next().value) // 1
console.log(numbers.next().value) // 2
```
**Advantages of Generators**  

**a) Lazy Evaluation**: Lazy Evaluation is an evaluation model which delays the evaluation of an expression until its value is needed.   
**b) Memory Efficient**: We generate only the values that are needed. With normal functions, we needed to pre-generate all the values and keep them around in case we use them later. However, with generators, we can defer the computation till we need it.

**10. Symbols()**  

They are tokens that serve as unique IDs. We create symbols via the factory function Symbol()
```javascript
const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(typeof symbol1); // symbol
console.log(symbol3.toString()); // Symbol(foo)
console.log(Symbol('foo') === Symbol('foo')); // false
```
**Usage**  

Symbols primary use case is for making private object properties, which can be only of type String or Symbol (Numbers are automatically converted to Strings).

```javascript
const sym = Symbol()

const privateObject = {
  [sym]: 'Hello World'
}

privateObject[sym] // 'Hello World'
```
**10.1 Global Symbols**  

A Global Symbol Registry exists where we can store and access Global Symbols. We can use the `Symbol.for(key)` method to both create and access Global Symbols.
```javascript
const sym1 = Symbol.for('hello') // If the Symbol does not exist, it's created

const sym2 = Symbol.for('hello') // The Symbol exists, so it is returned

sym1 === sym2 // true
```
**11. Iterator**  
  
The iterable is a interface that specifies that an object can be accessible if it implements a method who is key is `[symbol.iterator]`.
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

## Q. ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?

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

## Q. What is the benefit of using the arrow syntax for a method in a constructor?

The main advantage of using an arrow function as a method inside a constructor is that the value of `this` gets set at the time of the function creation and can't change after that. So, when the constructor is used to create a new object, `this` will always refer to that object. 
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
The main takeaway here is that `this` can be changed for a normal function, but the context always stays the same for an arrow function. So even if you are passing around your arrow function to different parts of your application, you wouldn\'t have to worry about the context changing.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What are fat arrow functions? When you should not use arrow functions in ES6?

An arrow function is a shorter syntax for a function expression and does not have its own **this, arguments, super, or new.target**. These function are best suited for non-method functions, and they cannot be used as constructors.


**Arrow functions in ES6 has two limitations**:
* Don't work with new
* Fixed this bound to scope at initialisation

**When should not use Arrow Functions**  
**1. Object methods**  
When you call cat.jumps, the number of lives does not decrease. It is because this is not bound to anything, and will inherit the value of this from its parent scope.
```javascript
var cat = {
  lives: 9,
  jumps: () => {
    this.lives--;
  }
}
```
**2. Callback functions with dynamic context**  
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

## Q. How does await and async works in es6?

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

## Q. What are the benefits of using arrow function over es5 function?

**Arrow functions**  
Arrows is a new syntax for functions, which brings several benefits:

* Arrow syntax automatically binds `this` to the surrounding code’s context
* The syntax allows an implicit return when there is no body block, resulting in shorter and simpler code in some cases
* Last but not least, `=>` is shorter and simpler than `function`, although stylistic issues are often subjective

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

## Q. What are the differences between ES6 class and ES5 function constructors?

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

## Q. What are the benefits of using spread syntax and how is it different from rest syntax?

ES6's spread syntax is very useful when coding in a functional paradigm as we can easily create copies of arrays or objects without resorting to `Object.create`, `slice`, or a library function. This language feature is used often in Redux and Rx.js projects.

```javascript
function addCookiesInArray(arr) {
  return [...arr, 'Cookies'];
}

const result = addCookiesInArray(['I', 'really', "don't", 'like']); 

console.log(result); // ["I", "really", "don't", "like", "Cookies"]
```

```javascript
const person = {
  name: 'Todd',
  age: 29,
};

const copyOfPerson = { ...person };

console.log(copyOfPerson); // {name: "Todd", age: 29}
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

## Q. What are the differences between variables created using `let`, `var` or `const`?

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

## Q. What is the difference between for..in and for..of?
* **for in**: loops over enumerable property names of an object.
* **for of**: (new in ES6) does use an object-specific iterator and loops over the values generated by that.

Both `for..of` and `for..in` statements iterate over lists; the values iterated on are different though, `for..in` returns a **list of keys** on the object being iterated, whereas `for..of` returns a **list of values** of the numeric properties of the object being iterated.  
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

## Q. What is the Temporal Dead Zone in ES6?
In ES6, let bindings are not subject to Variable Hoisting, which means that let declarations do not move to the top of the current execution context. Referencing the variable in the block before the initialization results in a `ReferenceError` (contrary to a variable declared with var, which will just have the undefined value). The variable is in a “temporal dead zone” from the start of the block until the initialization is processed.

```javascript
console.log(aVar); // undefined
console.log(aLet); // causes ReferenceError: aLet is not defined
var aVar = 1;
let aLet = 2;
```
## Q. What is the difference between ES6 Map and WeakMap?
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
The latest Chrome, Firefox, Edge and Safari support Map and WeakMap on desktop. There is no support in IE10. On mobile newer browsers also have support, but IE Mobile doesn\'t.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What are default values in destructuring assignment?

A variable can be assigned a default value when the value unpacked from the array or object is undefined during destructuring assignment. It helps to avoid setting default values separately for each assignment.  

**Array Destructuring**  
```javascript
var x, y, z;

[x=2, y=4, z=6] = [10];
console.log(x); // 10
console.log(y); // 4
console.log(z); // 6
```

**Object Destructuring**  
```javascript
var {x=2, y=4, z=6} = {x: 10};

console.log(x); // 10
console.log(y); // 4
console.log(z); // 6
```
## Q. How do you swap variables using Destructuring Assignment?
```javascript
var x = 10, y = 20;

[x, y] = [y, x];
console.log(x); // 20
console.log(y); // 10
```
## Q. What is the output of below spread operator array?
```javascript
[...'John']
```
**Output**:  ['J', 'o', 'h', 'n']  
**Explanation**: The string is an iterable type and the spread operator with in an array maps every character of an iterable to one element. Hence, each character of a string becomes an element within an Array.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is modules in ES6?

To make objects, functions, classes or variables available to the outside world it’s as simple as exporting them and then importing them where needed in other files.

**Benefits**  

* Code can be split into smaller files of self-contained functionality.
* The same modules can be shared across any number of applications.
* Ideally, modules need never be examined by another developer, because they’ve has been proven to work.
* Code referencing a module understands it’s a dependency. If the module file is changed or moved, the problem is immediately obvious.
* Module code (usually) helps eradicate naming conflicts. Function `x()` in module1 cannot clash with function x() in module2. Options such as namespacing are employed so calls become `module1.x()` and `module2.x()`.

**Exporting**
```javascript
export const myNumbers = [1, 2, 3, 4];
const animals = ['Panda', 'Bear', 'Eagle']; // Not available directly outside the module

export function myLogger() {
  console.log(myNumbers, animals);
}

export class Alligator {
   constructor() {
     // ...
   }
}
```
**Exporting with alias**
```javascript
export { myNumbers, myLogger as Logger, Alligator }
```
**Default export**
```javascript
export const myNumbers = [1, 2, 3, 4];
const animals = ['Panda', 'Bear', 'Eagle'];

export default function myLogger() {
  console.log(myNumbers, pets);
}

export class Alligator {
  constructor() {
    // ...
  }
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is a trampoline function? What is it used for? 

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

## Q. What is the difference between Set and WeakSet in ES6?

**Set**   

Using the `Set()` class we can create an array like heterogeneous iterable object, which will contain only unique values in it. Unique is not just unique by values but also by types. i.e. it will consider `"2"` and `2` separate or different.

Syntax:  
```javascript
var mySet = new Set([iterable]);
```
Example:
```javascript
var mySet= new Set([0,1]);

mySet.add(2); // 0, 1, 2
mySet.add(2); // 0, 1, 2
mySet.add("Hello"); // 0, 1, 2, 'Hello'
mySet.add({a:1, b:2}); // 0, 1, 2, 'Hello', {a:1, b:2}
 
mySet.add(function(){}); // 0, 1, 2, 'Hello', {a:1, b:2}, [Function]
 
mySet.has("Hello"); // ture
mySet.delete("Hello"); // 'Hello' deleted
mySet.has("Hello"); // false
 
mySet.size; // 5
mySet.clear(); // Set Cleared
```
**WeakSet**  

A `WeakSet()` is a collection similar to Set, which holds unique values; but it only holds Objects and nothing else. If an object which is there in your WeakSet object has no other reference variable left, it will automatically be deleted.

Syntax:
```javascript
var myWeakSet = new WeakSet([iterable with only objects]);
```
Example:
```javascript
var myWeakSet = new WeakSet([{a:1}]);
var obj1 = {o:1};
var obj2 = {o:2};

myWeakSet.add(obj1); 
myWeakSet.has(obj1); // true
myWeakSet.has(obj2); // false
myWeakSet.add(obj2); 
myWeakSet.has(obj2); // true
delete obj2; // don't take it literally. You cant delete object like that. Use scope to execute this.
myWeakSet.has(obj2); // false, cause you deleted obj2, so WeakSet releases it automatically
myWeakSet.delete(obj1); //obj1 deleted from the set
myWeakSet.add(2); // ERROR, no primitive value
```
|Set	                          |WeakSet                        |
|-------------------------------|-------------------------------|
|Can contain any type of values |	Can only contain objects      |
|To find number of elements use .size	|To find elements count use .length|
|.forEach() is available to iterate|	No .forEach() to iterate  |
|Nothing is auto destroyed	     |If an element object has no other reference left, it will be auto released to garbage collector|

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is difference between fetch() and XMLHttpRequest() in JavaScript?

**XMLHttpRequest**  

`XMLHttpRequest()` is a built-in browser object that allows to make HTTP requests in JavaScript. XMLHttpRequest has two modes of operation: **synchronous** and **asynchronous**.
```javascript
if (window.XMLHttpRequest) {
  // code for IE7+, Firefox, Chrome, Opera, Safari
  xhr = new XMLHttpRequest();
} else {
  // code for IE6, IE5
  xhr = new ActiveXObject('Microsoft.XMLHTTP');
}

xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
};
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true); // this makes asynchronous true or false
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send();
```
**Fetch**  

Fetch allows to make network requests similar to `XMLHttpRequest`. Fetch makes it easier to make asynchronous requests and handle responses better than with the older XMLHttpRequest. It is an improvement over the `XMLHttpRequest` API. The main difference between `Fetch()` and `XMLHttpRequest()` is that the Fetch API uses Promises, hence avoiding **callback hell**.


**Fetch Interfaces**  

* **fetch()**: The fetch() method used to fetch a resource.
* **Headers**: Represents response/request headers, allows to query them and take different actions depending on the results.
* **Request**: Represents a resource request.
* **Response**: Represents the response to a request.

**Making a request using fetch()**  

A `fetch()` function is available in the global window object. The fetch() function takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise, whether it is successful or not. If request is successful `.then()` function will receive Response object, if request fails then `.catch()` function will receive an error object
```javascript
fetch('https://api.github.com/users/learning-zone')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });
```
**Headers Object**  

The Headers interface allows to create own headers object via the `Headers()` constructor. A headers object is a collection of name-value pairs.
```javascript
let reqHeader = new Headers();
reqHeader.append('Content-Type', 'text/json');
let initObject = {
    method: 'GET', headers: reqHeader,
};

fetch('https://api.github.com/users/learning-zone', initObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });
```
**Request Object**  

The Request Object represents a resource request. Instead of passing an URL of the resource into the fetch() call, you can create a request object using the Request() constructor, and pass that as an argument to fetch(). By passing Request object to the fetch(), you can make customised requests.
```javascript
let reqHeader = new Headers();
reqHeader.append('Content-Type', 'text/json');

let initObject = {
    method: 'GET', headers: reqHeader,
};

var userRequest = new Request('https://api.github.com/users/learning-zone', initObject);

fetch(userRequest)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is the difference between Promise and AJAX?

Promises are a tool for managing asynchronous operations. They keep track of when asynchronous operations complete and what their results are and let you coordinate that completion and those results (including error conditions) with other code or other asynchronous operations. They aren't actually asynchronous operations in themselves. An Ajax call is a specific asynchronous operation that can be used with with a traditional callback interface or wrapped in a promise interface.

An Ajax call is a specific type of asynchronous operation. We can make an Ajax call either with a traditional callback using the `XMLHttpRequest()` interface or we can make an Ajax call (in modern browsers), using a promise with the `fetch()` interface.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. What is use of Proxies in es6?
The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).

There are 3 key terms we need to define before we proceed:

* **handler** — the placeholder object which contains the trap(s)
* **traps** — the method(s) that provide property access
* **target** — object which the proxy virtualizes

Syntax
```javascript
const p = new Proxy(target, handler)
```
Example:
```javascript
const handler = {
  get: function(obj, prop) {
    return prop in obj ?
      obj[prop] :
      37;
  }
};

const p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); 
//  1, undefined

console.log('c' in p, p.c); 
//  false, 37
```

There are many real-world applications for Proxies

* validation
* value correction
* property lookup extensions
* tracing property accesses
* revocable references
* implementing the DOM in javascript


#### Q. How could you make sure a const value is garbage collected?

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
