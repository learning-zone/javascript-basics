# JavaScript Coding Practice

> *Click &#9733; if you like the project. Your contributions are heartily ♡ welcome.*

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

* [Variables](#-variables)
* [Operators](#-operators)
* [Numbers](#-numbers)
* [Strings](#-strings)
* [Arrays](#-arrays)
* [Functions](#-functions)
* [Objects](#-objects)
* [Classes](#-classes)
* [Error Handling](#-error-handling)
* [Promises](#-promises)
* [Miscellaneous](#-miscellaneous)

<br>

## # Variables

<br>

## Q. Predict the output of the following JavaScript code?

```js
var g = 0;
g = 1 && g++;
console.log(g);
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
console.log(employeeId);
var employeeId = "19000";
```

<details><summary><b>Answer</b></summary>

undefined

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. console.log(employeeId);

<details><summary><b>Answer</b></summary>

ReferenceError: employeeId is not defined

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
var a = 1.2;
console.log(typeof a); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JS code?

```js
const a = { msg: "Hi" };
const b = a;
b.msg = "Hello";

console.log(a, b);
```

<details><summary><b>Answer</b></summary>

```js
{ msg: 'Hello' } { msg: 'Hello' }
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
let text = "hello";
let text = "hello world";

console.log(text);
```

<details><summary><b>Answer</b></summary>

```js
SyntaxError: Identifier 'text' has already been declared
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const text = "Hi";
text = "Hello";

console.log(text);
```

<details><summary><b>Answer</b></summary>

```js
TypeError: Assignment to constant variable.
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
console.log('The value of num is: ' + num);
```

<details><summary><b>Answer</b></summary>

```js
ReferenceError: num is not defined
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
console.log(num);
const num = 10;
```

<details><summary><b>Answer</b></summary>

```js
ReferenceError: Cannot access 'num' before initialization
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
var num = 8;
var num = 10;

console.log(num);
```

<details><summary><b>Answer</b></summary>

With the `var` keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.
You cannot do this with `let` or `const` since they\'re block-scoped.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
(() => {
  let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);
```

<details><summary><b>Answer</b></summary>

`let x = y = 10;` is actually shorthand for:

```js
y = 10;
let x = y;
```

When we set `y` equal to `10`, we actually add a property `y` to the global object (`window` in browser, `global` in Node). In a browser, `window.y` is now equal to `10`.

Then, we declare a variable `x` with the value of `y`, which is `10`. Variables declared with the `let` keyword are _block scoped_, they are only defined within the block they\'re declared in; the immediately-invoked function (IIFE) in this case. When we use the `typeof` operator, the operand `x` is not defined: we are trying to access `x` outside of the block it\'s declared in. This means that `x` is not defined. Values who haven\'t been assigned a value or declared are of type `"undefined"`. `console.log(typeof x)` returns `"undefined"`.

However, we created a global variable `y` when setting `y` equal to `10`. This value is accessible anywhere in our code. `y` is defined, and holds a value of type `"number"`. `console.log(typeof y)` returns `"number"`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const name = "Swarna";
age = 21;

console.log(delete name);
console.log(delete age);
```

<details><summary><b>Answer</b></summary>

The `delete` operator returns a boolean value: `true` on a successful deletion, else it'll return `false`. However, variables declared with the `var`, `const` or `let` keyword cannot be deleted using the `delete` operator.

The `name` variable was declared with a `const` keyword, so its deletion is not successful: `false` is returned. When we set `age` equal to `21`, we actually added a property called `age` to the global object. You can successfully delete properties from objects this way, also the global object, so `delete age` returns `true`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const name = "Akhil Sunder";
console.log(name.padStart(13));
console.log(name.padStart(2));
```

<details><summary><b>Answer</b></summary>

With the `padStart` method, we can add padding to the beginning of a string. The value passed to this method is the _total_ length of the string together with the padding. The string `"Akhil Sunder"` has a length of `12`. `name.padStart(13)` inserts 1 space at the start of the string, because 12 + 1 is 13.

If the argument passed to the `padStart` method is smaller than the length of the array, no padding will be added.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
console.log(String.raw`Hello\nworld`);
```

<details><summary><b>Answer</b></summary>

`String.raw` returns a string where the escapes (`\n`, `\v`, `\t` etc.) are ignored! Backslashes can be an issue since you could end up with something like:

`` const path = `C:\Documents\Projects\table.html` ``

Which would result in:

`"C:DocumentsProjects able.html"`

With `String.raw`, it would simply ignore the escape and print:

`C:\Documents\Projects\table.html`

In this case, the string is `Hello\nworld`, which gets logged.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const { name: myName } = { name: "Anusha Kapadia" };

console.log(name);
```

<details><summary><b>Answer</b></summary>

When we unpack the property `name` from the object on the right-hand side, we assign its value `"Anusha Kapadia"` to a variable with the name `myName`.

With `{ name: myName }`, we tell JavaScript that we want to create a new variable called `myName` with the value of the `name` property on the right-hand side.

Since we try to log `name`, a variable that is not defined, a ReferenceError gets thrown.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const name = "Anima Nagarajan";

console.log(name());
```

<details><summary><b>Answer</b></summary>

The variable `name` holds the value of a string, which is not a function, thus cannot invoke.

TypeErrors get thrown when a value is not of the expected type. JavaScript expected `name` to be a function since we\'re trying to invoke it. It was a string however, so a TypeError gets thrown: name is not a function!

SyntaxErrors get thrown when you\'ve written something that isn\'t valid JavaScript, for example when you\'ve written the word `return` as `retrun`.
ReferenceErrors get thrown when JavaScript isn\'t able to find a reference to a value that you\'re trying to access.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JS code?

```js
const num = 10;
console.log(Num);
```

<details><summary><b>Answer</b></summary>

```js
ReferenceError: Num is not defined
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## # Operators

<br/>

## Q. What is the output?

```js
console.log(isNaN(true));
```

<details><summary><b>Answer</b></summary>

```js
false
```

</details>

## Q. Predict the output of the following JavaScript code?

```js
console.log(0.1 + 0.2 == 0.3); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
console.log(false == "0"); 
console.log(false === "0");
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
console.log(0.1 + 0.2); 
console.log(0.1 + 0.2 == 0.3); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
var x = 10;
if (x) {
  let x = 4;
}
console.log(x); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const numOne = 2;
const numTwo = 3;

const res = numOne ** numTwo;
console.log(res);
```

<details><summary><b>Answer</b></summary>

In the code below we calculate numOne to the power of numTwo with the Exponential operator **. Then, the console.log() statement checks whether the result of this calculation equals 8. Change the code so that the console.log() statement logs true.

```js
8
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```

<details><summary><b>Answer</b></summary>

The **postfix** unary operator `++`:

1. Returns the value (this returns `0`)
2. Increments the value (number is now `1`)

The **prefix** unary operator `++`:

1. Increments the value (number is now `2`)
2. Returns the value (this returns `2`)

This returns `0 2 2`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = (number) => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);
```

<details><summary><b>Answer</b></summary>

The unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `num1` is `10`, since the `increaseNumber` function first returns the value of `num`, which is `10`, and only increments the value of `num` afterwards.

`num2` is `10`, since we passed `num1` to the `increasePassedNumber`. `number` is equal to `10`(the value of `num1`. Again, the unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `number` is `10`, so `num2` is equal to `10`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
+true;
!"Mala Pall";
```

<details><summary><b>Answer</b></summary>

The unary plus tries to convert an operand to a number. `true` is `1`, and `false` is `0`.

The string `'Mala Pall'` is a truthy value. What we\'re actually asking, is "is this truthy value falsy?". This returns `false`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
```

<details><summary><b>Answer</b></summary>

`new Number()` is a built-in function constructor. Although it looks like a number, it\'s not really a number: it has a bunch of extra features and is an object.

When we use the `==` operator, it only checks whether it has the same _value_. They both have the value of `3`, so it returns `true`.

However, when we use the `===` operator, both value _and_ type should be the same. It\'s not: `new Number()` is not a number, it\'s an **object**. Both return `false.`

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Which of these values are falsy?

```js
0;
new Number(0);
("");
(" ");
new Boolean(false);
undefined;
```

<details><summary><b>Answer</b></summary>

There are only six falsy values:

- `undefined`
- `null`
- `NaN`
- `0`
- `''` (empty string)
- `false`

Function constructors, like `new Number` and `new Boolean` are truthy.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
console.log(typeof typeof 1);
```

<details><summary><b>Answer</b></summary>

```js
`typeof 1` returns `"number"`.
`typeof "number"` returns `"string"`
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
!!null;
!!"";
!!1;
```

<details><summary><b>Answer</b></summary>

`null` is falsy. `!null` returns `true`. `!true` returns `false`.

`""` is falsy. `!""` returns `true`. `!true` returns `false`.

`1` is truthy. `!1` returns `false`. `!false` returns `true`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const info = {
  [Symbol("a")]: "b",
};

console.log(info);
console.log(Object.keys(info));
```

<details><summary><b>Answer</b></summary>

A Symbol is not _enumerable_. The Object.keys method returns all _enumerable_ key properties on an object. The Symbol won\'t be visible, and an empty array is returned. When logging the entire object, all properties will be visible, even non-enumerable ones.

This is one of the many qualities of a symbol: besides representing an entirely unique value (which prevents accidental name collision on objects, for example when working with 2 libraries that want to add properties to the same object), you can also "hide" properties on objects this way (although not entirely. You can still access symbols using the `Object.getOwnPropertySymbols()` method).

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the value of output?

```js
const one = false || {} || null;
const two = null || false || "";
const three = [] || 0 || true;

console.log(one, two, three);
```

<details><summary><b>Answer</b></summary>

With the `||` operator, we can return the first truthy operand. If all values are falsy, the last operand gets returned.

`(false || {} || null)`: the empty object `{}` is a truthy value. This is the first (and only) truthy value, which gets returned. `one` is equal to `{}`.

`(null || false || "")`: all operands are falsy values. This means that the past operand, `""` gets returned. `two` is equal to `""`.

`([] || 0 || "")`: the empty array`[]` is a truthy value. This is the first truthy value, which gets returned. `three` is equal to `[]`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the value of output?

```js
const output = `${[] && "Im"}possible!
You should${"" && `n't`} see a therapist after so much JavaScript lol`;
```

<details><summary><b>Answer</b></summary>

`[]` is a truthy value. With the `&&` operator, the right-hand value will be returned if the left-hand value is a truthy value. In this case, the left-hand value `[]` is a truthy value, so `"Im'` gets returned.

`""` is a falsy value. If the left-hand value is falsy, nothing gets returned. `n\'t` doesn\'t get returned.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
console.log(`${((x) => x)("I love")} to program`);
```

<details><summary><b>Answer</b></summary>

Expressions within template literals are evaluated first. This means that the string will contain the returned value of the expression, the immediately invoked function `(x => x)('I love')` in this case. We pass the value `'I love'` as an argument to the `x => x` arrow function. `x` is equal to `'I love'`, which gets returned. This results in `I love to program`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output

```js
if(2 == true) 

if(2 == false)
```

<details><summary><b>Answer</b></summary>

```js
SyntaxError: Unexpected end of input
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JS code?

```js
const length = 4;
const numbers = [];

for (var i = 0; i < length; i++);
{
  numbers.push(i + 1);
}

console.log(numbers);
```

<details><summary><b>Answer</b></summary>

```js
[ 5 ]
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## # Numbers

<br/>

## Q. What is the value of `num`?

```js
const num = parseInt("7*6", 10);
```

<details><summary><b>Answer</b></summary>

Only the first numbers in the string is returned. Based on the _radix_ (the second argument in order to specify what type of number we want to parse it to: base 10, hexadecimal, octal, binary, etc.), the `parseInt` checks whether the characters in the string are valid. Once it encounters a character that isn\'t a valid number in the radix, it stops parsing and ignores the following characters.

`*` is not a valid number. It only parses `"7"` into the decimal `7`. `num` now holds the value of `7`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
console.log(Number(2) === Number(2));
console.log(Boolean(false) === Boolean(false));
console.log(Symbol("foo") === Symbol("foo"));
```

<details><summary><b>Answer</b></summary>

Every Symbol is entirely unique. The purpose of the argument passed to the Symbol is to give the Symbol a description. The value of the Symbol is not dependent on the passed argument. As we test equality, we are creating two entirely new symbols: the first `Symbol('foo')`, and the second `Symbol('foo')`. These two values are unique and not equal to each other, `Symbol('foo') === Symbol('foo')` returns `false`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## # Strings

<br/>

## Q. Predict the output of the following JavaScript code?

```js
console.log(1 + -"1" + 2); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
var result;
for (var i = 5; i > 0; i--) {
  result = result + i;
}
console.log(result); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
console.log(+"Hello"); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What will be the output of the following code?

```js
console.log(eval("10 + 10")); 

console.log(eval("5 + 5" + 10)); 

console.log(eval("5 + 5 + 5" + 10)); 

console.log(eval(10 + "5 + 5")); 

console.log(eval(10 + "5 + 5 + 5")); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What will be the output of the following code?

```js
var x = 10;
var y = 20;
var a = eval("x * y") + "<br>";
var b = eval("2 + 2") + "<br>";
var c = eval("x + 30") + "<br>";

let result = a + b + c;
console.log(result); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is value of `sum`?

```js
const sum = eval("10*10+5");
```

<details><summary><b>Answer</b></summary>

`eval` evaluates codes that\'s passed as a string. If it\'s an expression, like in this case, it evaluates the expression. The expression is `10 * 10 + 5`. This returns the number `105`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the value of `foo`?

```js
var foo = 10 + "20";
```

<details><summary><b>Answer</b></summary>

`'1020'`, because of type coercion from Number to String

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the result of 1+2+'3'?

<details><summary><b>Answer</b></summary>

The output is going to be `33`. Since `1` and `2` are numeric values, the result of first two digits is going to be a numeric value `3`. The next digit is a string type value because of that the addition of numeric value `3` and string type value `3` is just going to be a concatenation value `33`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What value is returned from the following statement?

```js
"i'm a lasagna hog".split("").reverse().join("");
```

<details><summary><b>Answer</b></summary>

It\'s actually a reverse method for a string - `'goh angasal a m\'i'`

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the value of `foo`?

```js
var foo = 10 + "20";
```

<details><summary><b>Answer</b></summary>

`'1020'`, because of type coercion from Number to String

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
var strA = "hi there";
var strB = strA;
strB = "bye there!";
console.log(strA);
```

<details><summary><b>Answer</b></summary>

The output will `'hi there'` because we\'re dealing with strings here. Strings are
passed by value, that is, copied.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
console.log(3 + 4 + "5");
```

<details><summary><b>Answer</b></summary>

Operator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. This only happens if all operators have the _same_ precedence. We only have one type of operator: `+`. For addition, the associativity is left-to-right.

`3 + 4` gets evaluated first. This results in the number `7`.

`7 + '5'` results in `"75"` because of coercion. JavaScript converts the number `7` into a string, see question 15. We can concatenate two strings using the `+`operator. `"7" + "5"` results in `"75"`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JS code?

```js
let a = "7" + 3 + 2;
let b = 7 + 3 + "2";

console.log(a, b);
```

<details><summary><b>Answer</b></summary>

```js
732 
102
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## # Arrays

<br/>

## Q. What is the output?

```js
console.log(typeof [1, [2, [3, [4, [5, 6]]]]][0]);
```

<details><summary><b>Answer</b></summary>

```js
number
```

</details>

## Q. What does this return?

```js
[..."Inika "];
```

<details><summary><b>Answer</b></summary>

A string is an iterable. The spread operator maps every character of an iterable to one element.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```

<details><summary><b>Answer</b></summary>

We can unpack values from arrays or properties from objects through destructuring. For example:

```js
[a, b] = [1, 2];
```

<img src="https://i.imgur.com/ADFpVop.png" width="200">

The value of `a` is now `1`, and the value of `b` is now `2`. What we actually did in the question, is:

```js
[y] = [1, 2, 3, 4, 5];
```

<img src="https://i.imgur.com/NzGkMNk.png" width="200">

This means that the value of `y` is equal to the first value in the array, which is the number `1`. When we log `y`, `1` is returned.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const list = [1 + 2, 1 * 2, 1 / 2];
console.log(list);
```

<details><summary><b>Answer</b></summary>

Array elements can hold any value. Numbers, strings, objects, other arrays, null, boolean values, undefined, and other expressions such as dates, functions, and calculations.

The element will be equal to the returned value. `1 + 2` returns `3`, `1 * 2` returns `2`, and `1 / 2` returns `0.5`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
[
  [0, 1],
  [2, 3],
].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);
```

<details><summary><b>Answer</b></summary>

`[1, 2]` is our initial value. This is the value we start with, and the value of the very first `acc`. During the first round, `acc` is `[1,2]`, and `cur` is `[0, 1]`. We concatenate them, which results in `[1, 2, 0, 1]`.

Then, `[1, 2, 0, 1]` is `acc` and `[2, 3]` is `cur`. We concatenate them, and get `[1, 2, 0, 1, 2, 3]`

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

<details><summary><b>Answer</b></summary>

When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". These actually have the value of `undefined`, but you will see something like:

`[1, 2, 3, 7 x empty, 11]`

depending on where you run it (it\'s different for every browser, node, etc.)

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the value of `foo.length`?

```js
var foo = [];
foo.push(1);
foo.push(2);
```

<details><summary><b>Answer</b></summary>

`.push` is mutable - `2`

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var greet = "Hello World";
  var toGreet = [].filter.call(greet, function (element, index) {
    return index > 5;
  });
  console.log(toGreet);
})();
```

<details><summary><b>Answer</b></summary>

[ 'W', 'o', 'r', 'l', 'd' ]

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var arrayNumb = [2, 8, 15, 16, 23, 42];
  arrayNumb.sort();
  console.log(arrayNumb);
})();
```

<details><summary><b>Answer</b></summary>

```js
[ 15, 16, 2, 23, 42, 8 ]
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var list = ["foo", "bar", "john"];
  console.log(list.splice(1));
  console.log(list.splice(1, 2));
  console.log(list);
})();
```

<details><summary><b>Answer</b></summary>

[ 'bar', 'john' ] [] [ 'foo' ]

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var list = ["foo", "bar", "john", "ritz"];
  console.log(list.slice(1));
  console.log(list.slice(1, 3));
  console.log(list.slice());
  console.log(list.slice(2, 2));
  console.log(list);
})();
```

<details><summary><b>Answer</b></summary>

[ 'bar', 'john', 'ritz' ]
[ 'bar', 'john' ]
[ 'foo', 'bar', 'john', 'ritz' ]
[]
[ 'foo', 'bar', 'john', 'ritz' ]

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var containers = [2, 0, false, "", "12", true];
  var containers = containers.filter(Boolean);
  console.log(containers);
  var containers = containers.filter(Number);
  console.log(containers);
  var containers = containers.filter(String);
  console.log(containers);
  var containers = containers.filter(Object);
  console.log(containers);
})();
```

<details><summary><b>Answer</b></summary>

[ 2, '12', true ]
[ 2, '12', true ]
[ 2, '12', true ]
[ 2, '12', true ]

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var numbers = [2, 3, 4, 8, 9, 11, 13, 12, 16];
  var even = numbers.filter(function (element, index) {
    return element % 2 === 0;
  });
  console.log(even);

  var containsDivisibleby3 = numbers.some(function (element, index) {
    return element % 3 === 0;
  });

  console.log(containsDivisibleby3);
})();
```

<details><summary><b>Answer</b></summary>

[ 2, 4, 8, 12, 16 ] true

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6];
  console.log(array.indexOf(2));
  console.log(array.indexOf(2, 3));
  console.log(array.indexOf(2, 10));
})();
```

<details><summary><b>Answer</b></summary>

1 6 -1

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var animal = ["cow", "horse"];
  animal.push("cat");
  animal.unshift("dog", "rat", "goat");
  console.log(animal);
})();
```

<details><summary><b>Answer</b></summary>

 [ 'dog', 'rat', 'goat', 'cow', 'horse', 'cat' ]

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var array = [1, 2, 3, 4, 5];
  console.log(array.indexOf(2));
  console.log([{ name: "John" }, { name: "John" }].indexOf({ name: "John" }));
  console.log([[1], [2], [3], [4]].indexOf([3]));
  console.log("abcdefgh".indexOf("e"));
})();
```

<details><summary><b>Answer</b></summary>

1) 1 -1 -1 4

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var animal = ["cow", "horse"];
  animal.push("cat");
  animal.push("dog", "rat", "goat");
  console.log(animal.length);
})();
```

<details><summary><b>Answer</b></summary>

```js
6
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var array = new Array("a", "b", "c", "d", "e");
  array[10] = "f";
  delete array[10];
  console.log(array.length);
})();
```

<details><summary><b>Answer</b></summary>

```js
11
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var array1 = [];
  var array2 = new Array(100);
  var array3 = new Array(["1", 2, "3", 4, 5.6]);
  console.log(array1);
  console.log(array2);
  console.log(array3);
  console.log(array3.length);
})();
```

<details><summary><b>Answer</b></summary>

```js
[] [] [Array[5]] 1
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var array = new Array("100");
  console.log(array);
  console.log(array.length);
})();
```

<details><summary><b>Answer</b></summary>

```js
["100"] 1
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
var arrA = [
  { prop1: "value of array A!!" },
  { someProp: "also value of array A!" },
  3,
  4,
  5,
];
var arrB = arrA.slice();
arrB[0].prop1 = 42;
arrB[3] = 20;
console.log(arrA);
```

<details><summary><b>Answer</b></summary>

The output will be `[{prop1: 42}, {someProp: "also value of array A!"}, 3,4,5]`.

The `slice` function copies all the elements of the array returning the new array. However,
it doesn\'t do deep copying. Instead it does shallow copying. You can imagine slice implemented like this:

```js
function slice(arr) {
  var result = [];
  for (i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}
```

Look at the line with `result.push(arr[i])`. If `arr[i]` happens to be a number or string,
it will be passed by value, in other words, copied. If `arr[i]` is an object, it will be passed by reference.

In case of our array `arr[0]` is an object `{prop1: "value of array A!!"}`. Only the reference
to this object will be copied. This effectively means that arrays arrA and arrB share first
two elements.

This is why changing the property of `arrB[0]` in `arrB` will also change the `arrA[0]`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>


## Q. What would be the output of following code?

```js
var arrA = [
  { prop1: "value of array A!!" },
  { someProp: "also value of array A!" },
  3,
  4,
  5,
];
var arrB = arrA;
arrB[0].prop1 = 42;
console.log(arrA);
```

<details><summary><b>Answer</b></summary>

The output will be `[{prop1: 42}, {someProp: "also value of array A!"}, 3,4,5]`.

Arrays are object in JS, so both varaibles arrA and arrB point to the same array. Changing
`arrB[0]` is the same as changing `arrA[0]`

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
var arrA = [0, 1, 2, 3, 4, 5];
var arrB = arrA.slice();
arrB[0] = 42;
console.log(arrA);
```

<details><summary><b>Answer</b></summary>

The output will be `[0,1,2,3,4,5]`.

The `slice` function copies all the elements of the array returning the new array. That\'s why
`arrA` and `arrB` reference two completely different arrays.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
var arrA = [0, 1, 2, 3, 4, 5];
var arrB = arrA;
arrB[0] = 42;
console.log(arrA);
```

<details><summary><b>Answer</b></summary>

The output will be `[42,1,2,3,4,5]`.

Arrays are object in JavaScript and they are passed and assigned by reference. This is why
both `arrA` and `arrB` point to the same array `[0,1,2,3,4,5]`. That\'s why changing the first
element of the `arrB` will also modify `arrA`: it\'s the same array in the memory.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What will be the output of the following code?

```js
var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
delete trees[3];
console.log(trees.length);
```

<details><summary><b>Answer</b></summary>

The code above will output `5` as output. When we used `delete` operator for deleting an array element then, the array length is not affected by this. This holds even if you deleted all elements of an array using `delete` operator.

So when delete operator removes an array element that deleted element is no longer present in the array. In place of value at deleted index `undefined x 1` in **chrome** and `undefined` is placed at the index. If you do `console.log(trees)` output `["xyz", "xxxx", "test", undefined × 1, "apple"]` in Chrome and in Firefox `["xyz", "xxxx", "test", undefined, "apple"]`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>


## Q. Predict the output of the following JavaScript code?

```js
var arr = ["javascript", "typescript", "es6"];

var searchValue = (value) => {
  return arr.filter((item) => {
    return item.indexOf(value) > -1;
  });
};

console.log(searchValue("script"));
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
const arr = [1, 2];
arr.push(3); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JS code?

```js
const arr = [10, 20, 30];
arr.push(40);  
console.log(arr)

const arr1 = [10, 20, 30];
arr1 = []; 
console.log(arr1) 

const arr2 = [10, 20, 30];
arr2[2] = 50; 
console.log(arr2) 
```

<details><summary><b>Answer</b></summary>

```js
[10, 20, 30, 40]
Error
[10, 20, 50]
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JS code?

```js
let a = [1, 2, 3];
let b = [4, 5, 6];

console.log(a + b);
```

<details><summary><b>Answer</b></summary>

```js
1, 2, 34, 5, 6
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JS code?

```js
let a = [1, 2, 3, 4];
let b = a;
let c = [...a];

b.splice(3, 1);

console.log(a, b, c);
```

<details><summary><b>Answer</b></summary>

```js
[ 1, 2, 3 ] 
[ 1, 2, 3 ] 
[ 1, 2, 3, 4 ]
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var arrayNumb = [2, 8, 15, 16, 23, 42];
  Array.prototype.sort = function (a, b) {
    return a - b;
  };
  arrayNumb.sort();
  console.log(arrayNumb);
})();

(function () {
  var numberArray = [2, 8, 15, 16, 23, 42];
  numberArray.sort(function (a, b) {
    if (a == b) {
      return 0;
    } else {
      return a < b ? -1 : 1;
    }
  });
  console.log(numberArray);
})();

(function () {
  var numberArray = [2, 8, 15, 16, 23, 42];
  numberArray.sort(function (a, b) {
    return a - b;
  });
  console.log(numberArray);
})();
```

<details><summary><b>Answer</b></summary>

[ 2, 8, 15, 16, 23, 42 ]
[ 2, 8, 15, 16, 23, 42 ]
[ 2, 8, 15, 16, 23, 42 ]

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What will the following code output?

```js
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log("Index: " + i + ", element: " + arr[i]);
  }, 3000);
}
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Fix the bug using ES5 only?

```js
var arr = [10, 32, 65, 2];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log("The index of this number is: " + i);
  }, 3000);
}
```

<details><summary><b>Answer</b></summary>

For ES6, you can just replace `var i` with `let i`.

For ES5, you need to create a function scope like here:

```js
var arr = [10, 32, 65, 2];
for (var i = 0; i < arr.length; i++) {
  setTimeout(
    (function (j) {
      return function () {
        console.log("The index of this number is: " + j);
      };
    })(i),
    3000
  );
}
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output`?

```js
[1, 2, 3].map((num) => {
  if (typeof num === "number") return;
  return num * 2;
});
```

<details><summary><b>Answer</b></summary>

When mapping over the array, the value of `num` is equal to the element it’s currently looping over. In this case, the elements are numbers, so the condition of the if statement `typeof num === "number"` returns `true`. The map function creates a new array and inserts the values returned from the function.

However, we don\'t return a value. When we don\'t return a value from the function, the function returns `undefined`. For every element in the array, the function block gets called, so for each element we return `undefined`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
```

<details><summary><b>Answer</b></summary>

The `Set` object is a collection of _unique_ values: a value can only occur once in a set.

We passed the iterable `[1, 1, 2, 3, 4]` with a duplicate value `1`. Since we cannot have two of the same values in a set, one of them is removed. This results in `{1, 2, 3, 4}`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the value of output?

```js
const set = new Set();

set.add(1);
set.add("Anima Nagarajan");
set.add({ name: "Anima Nagarajan" });

for (let item of set) {
  console.log(item + 2);
}
```

<details><summary><b>Answer</b></summary>

The `+` operator is not only used for adding numerical values, but we can also use it to concatenate strings. Whenever the JavaScript engine sees that one or more values are not a number, it coerces the number into a string.

The first one is `1`, which is a numerical value. `1 + 2` returns the number 3.

However, the second one is a string `"Anima Nagarajan"`. `"Anima Nagarajan"` is a string and `2` is a number: `2` gets coerced into a string. `"Anima Nagarajan"` and `"2"` get concatenated, which results in the string `"Anima Nagarajan2"`.

`{ name: "Anima Nagarajan" }` is an object. Neither a number nor an object is a string, so it stringifies both. Whenever we stringify a regular object, it becomes `"[Object object]"`. `"[Object object]"` concatenated with `"2"` becomes `"[Object object]2"`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty("1");
obj.hasOwnProperty(1);
set.has("1");
set.has(1);
```

<details><summary><b>Answer</b></summary>

All object keys (excluding Symbols) are strings under the hood, even if you don\'t type it yourself as a string. This is why `obj.hasOwnProperty('1')` also returns true.

It doesn\'t work that way for a set. There is no `'1'` in our set: `set.has('1')` returns `false`. It has the numeric type `1`, `set.has(1)` returns `true`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

<details><summary><b>Answer</b></summary>

The first argument that the `reduce` method receives is the _accumulator_, `x` in this case. The second argument is the _current value_, `y`. With the reduce method, we execute a callback function on every element in the array, which could ultimately result in one single value.

In this example, we are not returning any values, we are simply logging the values of the accumulator and the current value.

The value of the accumulator is equal to the previously returned value of the callback function. If you don\'t pass the optional `initialValue` argument to the `reduce` method, the accumulator is equal to the first element on the first call.

On the first call, the accumulator (`x`) is `1`, and the current value (`y`) is `2`. We don\'t return from the callback function, we log the accumulator and current value: `1` and `2` get logged.

If you don\'t return a value from a function, it returns `undefined`. On the next call, the accumulator is `undefined`, and the current value is `3`. `undefined` and `3` get logged.

On the fourth call, we again don\'t return from the callback function. The accumulator is again `undefined`, and the current value is `4`. `undefined` and `4` get logged.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
let newList = [1, 2, 3].push(4);

console.log(newList.push(5));
```

<details><summary><b>Answer</b></summary>

The `.push` method returns the _new length_ of the array, not the array itself! By setting `newList` equal to `[1, 2, 3].push(4)`, we set `newList` equal to the new length of the array: `4`.

Then, we try to use the `.push` method on `newList`. Since `newList` is the numerical value `4`, we cannot use the `.push` method: a TypeError is thrown.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
console.log("I want pizza"[0]);
```

<details><summary><b>Answer</b></summary>

In order to get an character on a specific index in a string, you can use bracket notation. The first character in the string has index 0, and so on. In this case we want to get the element which index is 0, the character `"I'`, which gets logged.

Note that this method is not supported in IE7 and below. In that case, use `.charAt()`

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## # Functions

<br/>

## Q. Predict the output of the following JavaScript code?

```js
function sayMessage(msg) {
  console.log(msg);
}

function sayMessage(msg) {
  console.log("Default Message");
}

sayMessage("Hello");
```

<details><summary><b>Answer</b></summary>

```js
Default Message
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
(function (x) {
  return (function (y) {
    console.log(x);
  })(10);
})(20); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
var employeeId = "aq123";
function Employee() {
  this.employeeId = "bq1uy";
}
console.log(Employee.employeeId);
```

<details><summary><b>Answer</b></summary>

undefined

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
var employeeId = "aq123";

function Employee() {
  this.employeeId = "bq1uy";
}
console.log(new Employee().employeeId);
Employee.prototype.employeeId = "kj182";
Employee.prototype.JobId = "1BJKSJ";
console.log(new Employee().JobId);
console.log(new Employee().employeeId);
```

<details><summary><b>Answer</b></summary>

```js
bq1uy 1BJKSJ bq1uy
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
function passWordMngr() {
  var password = "12345678";
  this.userName = "John";
  return {
    pwd: password,
  };
}
// Block End
var userInfo = passWordMngr();
console.log(userInfo.pwd);
console.log(userInfo.userName);
```

<details><summary><b>Answer</b></summary>

12345678 undefined

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
function Person(name, age) {
  this.name = name || "John";
  this.age = age || 24;
  this.displayName = function () {
    console.log(this.name);
  };
}

Person.name = "John";
Person.displayName = function () {
  console.log(this.name);
};

var person1 = new Person("John");
person1.displayName();
Person.displayName();
```

<details><summary><b>Answer</b></summary>

John Person

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
function myFunc() {
  console.log(arguments.length);
}
console.log(myFunc());
console.log(myFunc("a", "b"));
console.log(myFunc("a", "b", "c", "d"));
```

<details><summary><b>Answer</b></summary>

```js
0 2 4
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
function myFunc(param1, param2) {
  console.log(myFunc.length);
}
console.log(myFunc());
console.log(myFunc("a", "b"));
console.log(myFunc("a", "b", "c", "d"));
```

<details><summary><b>Answer</b></summary>

```js
2 2 2
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
function myFunc() {
  myFunc.message = "Hi John";
  console.log(myFunc.message);
}
console.log(myFunc());
```

<details><summary><b>Answer</b></summary>

'Hi John'

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
function myFunc() {
  console.log(myFunc.message);
}
myFunc.message = "Hi John";

console.log(myFunc());
```

<details><summary><b>Answer</b></summary>

'Hi John'

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
function myFunc() {
  console.log(this.message);
}
myFunc.message = "Hi John";

console.log(myFunc());
```

<details><summary><b>Answer</b></summary>

```js
undefined
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
function funcA() {
  console.log("funcA ", this);
  (function innerFuncA1() {
    console.log("innerFunc1", this);
    (function innerFunA11() {
      console.log("innerFunA11", this);
    })();
  })();
}

console.log(funcA());
```

<details><summary><b>Answer</b></summary>

```js
funcA  
innerFunc1 
innerFunA11 
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function foo() {
  bar();

  function bar() {
    abc();
    console.log(typeof abc);
  }

  function abc() {
    console.log(typeof bar);
  }
})();
```

<details><summary><b>Answer</b></summary>

function function

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
function foo() {
  employeeId();
  var product = "Car";
  return;

  function employeeId() {
    console.log(product);
  }
}
foo();
```

<details><summary><b>Answer</b></summary>

1) undefined

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
var employeeId = "abc123";

function foo() {
  employeeId();
  return;

  function employeeId() {
    console.log(typeof employeeId);
  }
}
foo();
```

<details><summary><b>Answer</b></summary>

'function'

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
var employeeId = "abc123";

function foo() {
  employeeId = "123bcd";
  return;

  function employeeId() {}
}
foo();
console.log(employeeId);
```

<details><summary><b>Answer</b></summary>

'abc123'

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
var employeeId = "abc123";
function foo() {
  employeeId = "123bcd";
  return;
}
foo();
console.log(employeeId);
```

<details><summary><b>Answer</b></summary>

'123bcd'

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  console.log(typeof displayFunc);
  var displayFunc = function () {
    console.log("Hi I am inside displayFunc");
  };
})();
```

<details><summary><b>Answer</b></summary>

undefined

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>


## Q. What would be the output of following code?

```js
var employeeId = "1234abe";
(function () {
  console.log(employeeId);
  var employeeId = "122345";
})();
```

<details><summary><b>Answer</b></summary>

undefined

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
var employeeId = "1234abe";
(function () {
  console.log(employeeId);
  var employeeId = "122345";
  (function () {
    var employeeId = "abc1234";
  })();
})();
```

<details><summary><b>Answer</b></summary>

```js
undefined
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What will be the output of the following code?

```js
var salary = "1000$";

(function () {
  console.log("Original salary was " + salary);

  var salary = "5000$";

  console.log("My New Salary " + salary);
})();
```

<details><summary><b>Answer</b></summary>

The code above will output: `undefined, 5000$` because of hoisting. In the code presented above, you might be expecting `salary` to retain it values from outer scope until the point that `salary` was re-declared in the inner scope. But due to `hoisting` salary value was `undefined` instead. To understand it better have a look of the following code, here `salary` variable is hoisted and declared at the top in function scope. When we print its value using `console.log` the result is `undefined`. Afterwards the variable is redeclared and the new value `"5000$"` is assigned to it.

```js
var salary = "1000$";

(function () {
  var salary = undefined;
  console.log("Original salary was " + salary);

  salary = "5000$";

  console.log("My New Salary " + salary);
})();
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of the following code?

```js
function User(name) {
  this.name = name || "JsGeeks";
}

var person = (new User("xyz")["location"] = "USA");
console.log(person);
```

<details><summary><b>Answer</b></summary>

The output of above code would be `"USA"`. Here `new User("xyz")` creates a brand new object and created property `location` on that and `USA` has been assigned to object property location and that has been referenced by the person.

Let say `new User("xyz")` created a object called `foo`. The value `"USA"` will be assigned to `foo["location"]`, but according to [ECMAScript Specification](http://www.ecma-international.org/ecma-262/6.0/#sec-assignment-operators-runtime-semantics-evaluation) , pt 12.14.4 the assignment will itself return the rightmost value: in our case it\'s `"USA"`.
Then it will be assigned to person.

To better understand What is going on here, try to execute this code in console, line by line:

```js
function User(name) {
  this.name = name || "JS";
}

var person;
var foo = new User("xyz");
foo["location"] = "USA";
// the console will show you that the result of this is "USA"
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output of the following?

```js
bar();
(function abc() {
  console.log("something");
})();
function bar() {
  console.log("bar got called");
}
```

<details><summary><b>Answer</b></summary>

The output will be :

```js
bar got called
something
```

Since the function is called first and defined during parse time the JS engine will try to find any possible parse time definitions and start the execution loop which will mean function is called first even if the definition is post another function.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

<details><summary><b>Answer</b></summary>

Because of the event queue in JavaScript, the `setTimeout` callback function is called _after_ the loop has been executed. Since the variable `i` in the first loop was declared using the `var` keyword, this value was global. During the loop, we incremented the value of `i` by `1` each time, using the unary operator `++`. By the time the `setTimeout` callback function was invoked, `i` was equal to `3` in the first example.

In the second loop, the variable `i` was declared using the `let` keyword: variables declared with the `let` (and `const`) keyword are block-scoped (a block is anything between `{ }`). During each iteration, `i` will have a new value, and each value is scoped inside the loop.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

bar();
foo();
baz();
```

<details><summary><b>Answer</b></summary>

We have a `setTimeout` function and invoked it first. Yet, it was logged last.

This is because in browsers, we don\'t just have the runtime engine, we also have something called a `WebAPI`. The `WebAPI` gives us the `setTimeout` function to start with, and for example the DOM.

After the _callback_ is pushed to the WebAPI, the `setTimeout` function itself (but not the callback!) is popped off the stack.

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

Now, `foo` gets invoked, and `"First"` is being logged.

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

`foo` is popped off the stack, and `baz` gets invoked. `"Third"` gets logged.

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

The WebAPI can\'t just add stuff to the stack whenever it\'s ready. Instead, it pushes the callback function to something called the _queue_.

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

This is where an event loop starts to work. An **event loop** looks at the stack and task queue. If the stack is empty, it takes the first thing on the queue and pushes it onto the stack.

<img src="https://i.imgur.com/uyiScAI.png" width="200">

`bar` gets invoked, `"Second"` gets logged, and it\'s popped off the stack.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JS code?

```js
var b = function () {
  console.log("1");
};

b();

function b() {
  console.log("2");
}
```

<details><summary><b>Answer</b></summary>

```js
1
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JS code?

```js
b();

function b() {
  console.log("2");
}

var b = function () {
  console.log("1");
};
```

<details><summary><b>Answer</b></summary>

```js
2
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JS code?

```js
var a = 1;

function b() {
  a = 10;
  return;

  function a() {}
}

b();
console.log(a);
```

<details><summary><b>Answer</b></summary>

```js
1
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What does the `setInterval` method return in the browser?

```js
setInterval(() => console.log("Hi"), 1000);
```

<details><summary><b>Answer</b></summary>

It returns a unique id. This id can be used to clear that interval with the `clearInterval()` function.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);
```

<details><summary><b>Answer</b></summary>

In ES6, we can initialize parameters with a default value. The value of the parameter will be the default value, if no other value has been passed to the function, or if the value of the parameter is `"undefined"`. In this case, we spread the properties of the `value` object into a new object, so `x` has the default value of `{ number: 10 }`.

The default argument is evaluated at _call time_! Every time we call the function, a _new_ object is created. We invoke the `multiply` function the first two times without passing a value: `x` has the default value of `{ number: 10 }`. We then log the multiplied value of that number, which is `20`.

The third time we invoke multiply, we do pass an argument: the object called `value`. The `*=` operator is actually shorthand for `x.number = x.number * 2`: we modify the value of `x.number`, and log the multiplied value `20`.

The fourth time, we pass the `value` object again. `x.number` was previously modified to `20`, so `x.number *= 2` logs `40`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const add = () => {
  const cache = {};
  return (num) => {
    if (num in cache) {
      return `From cache! ${cache[num]}`;
    } else {
      const result = num + 10;
      cache[num] = result;
      return `Calculated! ${result}`;
    }
  };
};

const addFunction = add();
console.log(addFunction(10));
console.log(addFunction(10));
console.log(addFunction(5 * 2));
```

<details><summary><b>Answer</b></summary>

The `add` function is a _memoized_ function. With memoization, we can cache the results of a function in order to speed up its execution. In this case, we create a `cache` object that stores the previously returned values.

If we call the `addFunction` function again with the same argument, it first checks whether it has already gotten that value in its cache. If that\'s the case, the caches value will be returned, which saves on execution time. Else, if it\'s not cached, it will calculate the value and store it afterwards.

We call the `addFunction` function three times with the same value: on the first invocation, the value of the function when `num` is equal to `10` isn\'t cached yet. The condition of the if-statement `num in cache` returns `false`, and the else block gets executed: `Calculated! 20` gets logged, and the value of the result gets added to the cache object. `cache` now looks like `{ 10: 20 }`.

The second time, the `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, and `'From cache! 20'` gets logged.

The third time, we pass `5 * 2` to the function which gets evaluated to `10`. The `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, and `'From cache! 20'` gets logged.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
function giveSwarnaPizza() {
  return "Here is pizza!";
}

const giveSwarnaChocolate = () =>
  "Here\'s chocolate... now go hit the gym already.";

console.log(giveSwarnaPizza.prototype);
console.log(giveSwarnaChocolate.prototype);
```

<details><summary><b>Answer</b></summary>

Regular functions, such as the `giveSwarnaPizza` function, have a `prototype` property, which is an object (prototype object) with a `constructor` property. Arrow functions however, such as the `giveSwarnaChocolate` function, do not have this `prototype` property. `undefined` gets returned when trying to access the `prototype` property using `giveSwarnaChocolate.prototype`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
function sum(num1, num2 = num1) {
  console.log(num1 + num2);
}

sum(10);
```

<details><summary><b>Answer</b></summary>

You can set a default parameter\'s value equal to another parameter of the function, as long as they\'ve been defined _before_ the default parameter. We pass the value `10` to the `sum` function. If the `sum` function only receives 1 argument, it means that the value for `num2` is not passed, and the value of `num1` is equal to the passed value `10` in this case. The default value of `num2` is the value of `num1`, which is `10`. `num1 + num2` returns `20`.

If you\'re trying to set a default parameter\'s value equal to a parameter which is defined _after_ (to the right), the parameter\'s value hasn\'t been initialized yet, which will throw an error.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Which option is a way to set `hasName` equal to `true`, provided you cannot pass `true` as an argument?

```js
function getName(name) {
  const hasName = //
}
```

<details><summary><b>Answer</b></summary>

With `!!name`, we determine whether the value of `name` is truthy or falsy. If name is truthy, which we want to test for, `!name` returns `false`. `!false` (which is what `!!name` practically is) returns `true`.

By setting `hasName` equal to `name`, you set `hasName` equal to whatever value you passed to the `getName` function, not the boolean value `true`.

`new Boolean(true)` returns an object wrapper, not the boolean value itself.

`name.length` returns the length of the passed argument, not whether it\'s `true`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you\'re too young.";
  } else {
    const message = "Yay! You\'re old enough!";
  }

  return message;
}

console.log(checkAge(21));
```

<details><summary><b>Answer</b></summary>

Variables with the `const` and `let` keyword are _block-scoped_. A block is anything between curly brackets (`{ }`). In this case, the curly brackets of the if/else statements. You cannot reference a variable outside of the block it\'s declared in, a ReferenceError gets thrown.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

<details><summary><b>Answer</b></summary>

By default, arguments have the value of `undefined`, unless a value has been passed to the function. In this case, we didn\'t pass a value for the `name` argument. `name` is equal to `undefined` which gets logged.

In ES6, we can overwrite this default `undefined` value with default parameters. For example:

`function sayHi(name = "Akash Guha") { ... }`

In this case, if we didn\'t pass a value or if we passed `undefined`, `name` would always be equal to the string `Akash Guha`

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
function Car() {
  this.make = "Lamborghini";
  return { make: "Maserati" };
}

const myCar = new Car();
console.log(myCar.make);
```

<details><summary><b>Answer</b></summary>

When you return a property, the value of the property is equal to the _returned_ value, not the value set in the constructor function. We return the string `"Maserati"`, so `myCar.make` is equal to `"Maserati"`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
function getInfo(member, year) {
  member.name = "Inika";
  year = "1998";
}

const person = { name: "Sarah" };
const birthYear = "1997";

getInfo(person, birthYear);

console.log(person, birthYear);
```

<details><summary><b>Answer</b></summary>

Arguments are passed by _value_, unless their value is an object, then they\'re passed by _reference_. `birthYear` is passed by value, since it\'s a string, not an object. When we pass arguments by value, a _copy_ of that value is created (see question 46).

The variable `birthYear` has a reference to the value `"1997"`. The argument `year` also has a reference to the value `"1997"`, but it\'s not the same value as `birthYear` has a reference to. When we update the value of `year` by setting `year` equal to `"1998"`, we are only updating the value of `year`. `birthYear` is still equal to `"1997"`.

The value of `person` is an object. The argument `member` has a (copied) reference to the _same_ object. When we modify a property of the object `member` has a reference to, the value of `person` will also be modified, since they both have a reference to the same object. `person`\'s `name` property is now equal to the value `"Inika"`

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
```

<details><summary><b>Answer</b></summary>

Regular functions cannot be stopped mid-way after invocation. However, a generator function can be "stopped" midway, and later continue from where it stopped. Every time a generator function encounters a `yield` keyword, the function yields the value specified after it. Note that the generator function in that case doesn\'t _return_ the value, it _yields_ the value.

First, we initialize the generator function with `i` equal to `10`. We invoke the generator function using the `next()` method. The first time we invoke the generator function, `i` is equal to `10`. It encounters the first `yield` keyword: it yields the value of `i`. The generator is now "paused", and `10` gets logged.

Then, we invoke the function again with the `next()` method. It starts to continue where it stopped previously, still with `i` equal to `10`. Now, it encounters the next `yield` keyword, and yields `i * 2`. `i` is equal to `10`, so it returns `10 * 2`, which is `20`. This results in `10, 20`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi());
```

<details><summary><b>Answer</b></summary>

The `sayHi` function returns the returned value of the immediately invoked function (IIFE). This function returned `0`, which is type `"number"`.

FYI: there are only 7 built-in types: `null`, `undefined`, `boolean`, `number`, `string`, `object`, and `symbol`. `"function"` is not a type, since functions are objects, it\'s of type `"object"`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const person = { name: "Inika " };

function sayHi(age) {
  console.log(`${this.name} is ${age}`);
}

sayHi.call(person, 21);
sayHi.bind(person, 21);
```

<details><summary><b>Answer</b></summary>

With both, we can pass the object to which we want the `this` keyword to refer to. However, `.call` is also _executed immediately_!

`.bind.` returns a _copy_ of the function, but with a bound context! It is not executed immediately.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
String.prototype.giveRashmi Pizza = () => {
  return "Just give Rashmi  pizza already!";
};

const name = "Rashmi ";

name.giveRashmi Pizza();
```

<details><summary><b>Answer</b></summary>

`String` is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
function getAge() {
  "use strict";
  age = 21;
  console.log(age);
}

getAge();
```

<details><summary><b>Answer</b></summary>

With `"use strict"`, you can make sure that you don\'t accidentally declare global variables. We never declared the variable `age`, and since we use `"use strict"`, it will throw a reference error. If we didn\'t use `"use strict"`, it would have worked, since the property `age` would have gotten added to the global object.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
```

<details><summary><b>Answer</b></summary>

The rest parameter (`...args`.) lets us "collect" all remaining arguments into an array. An array is an object, so `typeof args` returns `"object"`

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You are an adult!");
  } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
  } else {
    console.log(`Hmm.. You don\'t have an age I guess`);
  }
}

checkAge({ age: 18 });
```

<details><summary><b>Answer</b></summary>

When testing equality, primitives are compared by their _value_, while objects are compared by their _reference_. JavaScript checks if the objects have a reference to the same location in memory.

The two objects that we are comparing don\'t have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.

This is why both `{ age: 18 } === { age: 18 }` and `{ age: 18 } == { age: 18 }` return `false`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = "Zoya Babu";
const age = 21;

getPersonInfo`${person} is ${age} years old`;
```

<details><summary><b>Answer</b></summary>

If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

<details><summary><b>Answer</b></summary>

JavaScript is a **dynamically typed language**: we don\'t specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called _implicit type coercion_. **Coercion** is converting from one type into another.

In this example, JavaScript converts the number `1` into a string, in order for the function to make sense and return a value. During the addition of a numeric type (`1`) and a string type (`'2'`), the number is treated as a string. We can concatenate strings like `"Hello" + "World"`, so What is happening here is `"1" + "2"` which returns `"12"`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const Karthik = new Person("Karthik", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(Karthik);
console.log(sarah);
```

<details><summary><b>Answer</b></summary>

For `sarah`, we didn\'t use the `new` keyword. When using `new`, it refers to the new empty object we create. However, if you don\'t add `new` it refers to the **global object**!

We said that `this.firstName` equals `"Sarah"` and `this.lastName` equals `"Smith"`. What we actually did, is defining `global.firstName = 'Sarah'` and `global.lastName = 'Smith'`. `sarah` itself is left `undefined`, since we don\'t return a value from the `Person` function.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Mala Pall", "Hallie");
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
```

<details><summary><b>Answer</b></summary>

You can\'t add properties to a constructor like you can with regular objects. If you want to add a feature to all objects at once, you have to use the prototype instead. So in this case,

```js
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
```

would have made `member.getFullName()` work. Why is this beneficial? Say that we added this method to the constructor itself. Maybe not every `Person` instance needed this method. This would waste a lot of memory space, since they would still have that property, which takes of memory space for each instance. Instead, if we only add it to the prototype, we just have it at one spot in memory, yet they all have access to it!

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What happens when we do this?

```js
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
```

<details><summary><b>Answer</b></summary>

This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)

A function is a special type of object. The code you write yourself isn\'t the actual function. The function is an object with properties. This property is invocable.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Mala Pall";
  let age = 21;
}

sayHi();
```

<details><summary><b>Answer</b></summary>

Within the function, we first declare the `name` variable with the `var` keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of `undefined`, until we actually get to the line where we define the variable. We haven\'t defined the variable yet on the line where we try to log the `name` variable, so it still holds the value of `undefined`.

Variables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don\'t get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. How many times the createVal function is called?

```js
function createVal() {
  return Math.random();
}

function fun(val = createVal()) {
  console.log(val);
}

fun();
fun(5);
```

`createVal()` function will execute only once.

Output

```
0.2162050091554224
VM298:6 5
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What will be the output of the following code?

```js
var output = (function (x) {
  delete x;
  return x;
})(0);

console.log(output);
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
!function(){}()
function(){}()
true && function(){}()
(function(){})()
function(){}
!function(){}
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What will expression return?

```js
var a = (b = true),
  c = (a) => a;
(function a(a = (c(b).a = c = () => a)) {
  return a();
})();
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
var a = true;
(a = function () {
  return a;
})();
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What will be the output?

```js
function b(b) {
  return this.b && b(b);
}
b(b.bind(b));
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What does the following code print?

```js
console.log("one");
setTimeout(function () {
  console.log("two");
}, 0);
console.log("three");
```

<details><summary><b>Answer</b></summary>

`one`, `three` and `two`. It\'s because `console.log('two');` will be
invoked in the next event loop.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the outcome of the two alerts below?

```js
var foo = "Hello";
(function () {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

<details><summary><b>Answer</b></summary>

_Answer:_

- First: `Hello World`
- Second: Throws an exception, `ReferenceError: bar is not defined`

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. How would you make this work?

```js
add(2, 5); // 7
add(2)(5); // 7
```

<details><summary><b>Answer</b></summary>

A general solution for any number of parameters

```js
"use strict";

let sum = (arr) => arr.reduce((a, b) => a + b);
let addGenerator = (numArgs, prevArgs) => {
  return function () {
    let totalArgs = prevArgs.concat(Array.from(arguments));
    if (totalArgs.length === numArgs) {
      return sum(totalArgs);
    }
    return addGenerator(numArgs, totalArgs);
  };
};

let add = addGenerator(2, []);

add(2, 5); // 7
add(2)(5); // 7
add()(2, 5); // 7
add()(2)(5); // 7
add()()(2)(5); // 7
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
function mul(x) {
  return function (y) {
    return function (z) {
      return function (w) {
        return function (p) {
          return x * y * z * w * p;
        };
      };
    };
  };
}
console.log(mul(2)(3)(4)(5)(6));
```

<details><summary><b>Answer</b></summary>

720

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
function mul(x) {
  return function (y) {
    return {
      result: x * y,
      sum: function (z) {
        return x * y + z;
      },
    };
  };
}
console.log(mul(2)(3).result);
console.log(mul(2)(3).sum(4));
```

<details><summary><b>Answer</b></summary>

6, 10

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
function mul(x) {
  return function (y) {
    return [
      x * y,
      function (z) {
        return x * y + z;
      },
    ];
  };
}

console.log(mul(2)(3)[0]);
console.log(mul(2)(3)[1](4));
```

<details><summary><b>Answer</b></summary>

6, 10

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
function getNumber() {
  return;
}

var numb = getNumber();
console.log(numb);
```

<details><summary><b>Answer</b></summary>

undefined

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
function getNumber() {
  return 2, 4, 5;
}

var numb = getNumber();
console.log(numb);
```

<details><summary><b>Answer</b></summary>

```js
5
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  function sayHello() {
    var name = "Hi John";
    return;
    {
      fullName: name;
    }
  }
  console.log(sayHello().fullName);
})();
```

<details><summary><b>Answer</b></summary>

Uncaught TypeError: Cannot read property 'fullName' of undefined

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
function getDataFromServer(apiUrl) {
  var name = "John";
  return {
    then: function (fn) {
      fn(name);
    },
  };
}

getDataFromServer("www.google.com").then(function (name) {
  console.log(name);
});
```

<details><summary><b>Answer</b></summary>

```js
John
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function greetNewCustomer() {
  console.log("Hello " + this.name);
}.bind({
  name: "John",
})());
```

<details><summary><b>Answer</b></summary>

```js
Hello John
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var fooAccount = {
    name: "John",
    amount: 6000,
    deductAmount: function (amount) {
      this.amount -= amount;
      return this.amount;
    },
  };
  var barAccount = {
    name: "John",
    amount: 4000,
  };
  var withdrawAmountBy = function (totalAmount) {
    return fooAccount.deductAmount.call(barAccount, totalAmount);
  };
  console.log(withdrawAmountBy(400));
  console.log(withdrawAmountBy(300));
  console.log(withdrawAmountBy(200));
})();
```

<details><summary><b>Answer</b></summary>

```js
3600 3300 3100
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var fooAccount = {
    name: "John",
    amount: 4000,
    deductAmount: function (amount) {
      this.amount -= amount;
      return this.amount;
    },
  };
  var barAccount = {
    name: "John",
    amount: 6000,
  };
  var withdrawAmountBy = function (totalAmount) {
    return fooAccount.deductAmount.apply(barAccount, [totalAmount]);
  };
  console.log(withdrawAmountBy(400));
  console.log(withdrawAmountBy(300));
  console.log(withdrawAmountBy(200));
})();
```

<details><summary><b>Answer</b></summary>

```js
5600 5300 5100
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var fooAccount = {
    name: "John",
    amount: 4000,
    deductAmount: function (amount) {
      this.amount -= amount;
      return "Total amount left in account: " + this.amount;
    },
  };
  var barAccount = {
    name: "John",
    amount: 6000,
  };
  var withdrawAmountBy = function (totalAmount) {
    return fooAccount.deductAmount.bind(barAccount, totalAmount);
  };
  console.log(withdrawAmountBy(400)());
  console.log(withdrawAmountBy(300)());
})();
```

<details><summary><b>Answer</b></summary>

Total amount left in account: 5600 Total amount left in account: 5300

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
function nums(a, b) {
  if (a > b) console.log("a is bigger");
  else console.log("b is bigger");
  return;
  a + b;
}

console.log(nums(4, 2));
console.log(nums(1, 2));
```

<details><summary><b>Answer</b></summary>

In JavaScript, we don\'t _have_ to write the semicolon (`;`) explicitly, however the JavaScript engine still adds them after statements. This is called **Automatic Semicolon Insertion**. A statement can for example be variables, or keywords like `throw`, `return`, `break`, etc.

Here, we wrote a `return` statement, and another value `a + b` on a _new line_. However, since it\'s a new line, the engine doesn\'t know that it\'s actually the value that we wanted to return. Instead, it automatically added a semicolon after `return`. You could see this as:

```js
return;
a + b;
```

This means that `a + b` is never reached, since a function stops running after the `return` keyword. If no value gets returned, like here, the function returns `undefined`. Note that there is no automatic insertion after `if/else` statements!

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const person = {
  name: "Kani Palla",
  age: 21,
};

const changeAge = (x = { ...person }) => (x.age += 1);
const changeAgeAndName = (x = { ...person }) => {
  x.age += 1;
  x.name = "Sarah";
};

changeAge(person);
changeAgeAndName();

console.log(person);
```

<details><summary><b>Answer</b></summary>

```js
Both the `changeAge` and `changeAgeAndName` functions have a default parameter, 
namely a _newly_ created object `{ ...person }`. This object has copies of all 
the key/values in the `person` object.

First, we invoke the `changeAge` function and pass the `person` object as its argument. 
This function increases the value of the `age` property by 1. `person` is now 
`{ name: "Kani Palla", age: 22 }`.

Then, we invoke the `changeAgeAndName` function, however we don\'t pass a parameter. 
Instead, the value of `x` is equal to a _new_ object: `{ ...person }`. Since it\'s a 
new object, it doesn\'t affect the values of the properties on the `person` object. 

// Output:
{ name: 'Kani Palla', age: 22 }
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JS code?

```js
const employee = {
  name: "abc",
  location: "IND",
};

employee.age = 1;
console.log(employee);
```

<details><summary><b>Answer</b></summary>

```js
{ name: 'abc', location: 'IND', age: 1 }
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Anima Nagarajan", age: 21 }

console.log(getList(list))
console.log(getUser(user))
```

<details><summary><b>Answer</b></summary>

The `getList` function receives an array as its argument. Between the parentheses of the `getList` function, we destructure this array right away. You could see this as:

`[x, ...y] = [1, 2, 3, 4]`

With the rest parameter `...y`, we put all "remaining" arguments in an array. The remaining arguments are `2`, `3` and `4` in this case. The value of `y` is an array, containing all the rest parameters. The value of `x` is equal to `1` in this case, so when we log `[x, y]`, `[1, [2, 3, 4]]` gets logged.

The `getUser` function receives an object. With arrow functions, we don\'t _have_ to write curly brackets if we just return one value. However, if you want to return an _object_ from an arrow function, you have to write it between parentheses, otherwise no value gets returned! The following function would have returned an object:

`const getUser = user => ({ name: user.name, age: user.age })`

Since no value gets returned in this case, the function returns `undefined`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is its value?

```js
function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log("Not the same!");
  } else {
    console.log("They are the same!");
  }
}

const person = { name: "Surya Jha" };

compareMembers(person);
```

<details><summary><b>Answer</b></summary>

Objects are passed by reference. When we check objects for strict equality (`===`), we\'re comparing their references.

We set the default value for `person2` equal to the `person` object, and passed the `person` object as the value for `person1`.

This means that both values have a reference to the same spot in memory, thus they are equal.

The code block in the `else` statement gets run, and `They are the same!` gets logged.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is its value?

```js
const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
};

const colors = ["pink", "red", "blue"];

console.log(colorConfig.colors[1]);
```

<details><summary><b>Answer</b></summary>

In JavaScript, we have two ways to access properties on an object: bracket notation, or dot notation. In this example, we use dot notation (`colorConfig.colors`) instead of bracket notation (`colorConfig["colors"]`).

With dot notation, JavaScript tries to find the property on the object with that exact name. In this example, JavaScript tries to find a property called `colors` on the `colorConfig` object. There is no proprety called `colors`, so this returns `undefined`. Then, we try to access the value of the first element by using `[1]`. We cannot do this on a value that\'s `undefined`, so it throws a `TypeError`: `Cannot read property '1' of undefined`.

JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket `[` and keeps going until it finds the closing bracket `]`. Only then, it will evaluate the statement. If we would\'ve used `colorConfig[colors[1]]`, it would have returned the value of the `red` property on the `colorConfig` object.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
let name = "Surya Jha";

function getName() {
  console.log(name);
  let name = "Sarah";
}

getName();
```

<details><summary><b>Answer</b></summary>

Each function has its own _execution context_ (or _scope_). The `getName` function first looks within its own context (scope) to see if it contains the variable `name` we\'re trying to access. In this case, the `getName` function contains its own `name` variable: we declare the variable `name` with the `let` keyword, and with the value of `'sarah'`.

Variables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don\'t get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`.

If we wouldn\'t have declared the `name` variable within the `getName` function, the javascript engine would\'ve looked down the _scope chain_. The outer scope has a variable called `name` with the value of `Surya Jha`. In that case, it would\'ve logged `Surya Jha`.

```js
let name = "Surya Jha";

function getName() {
  console.log(name);
}

getName(); // Surya Jha
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
function* generatorOne() {
  yield ["a", "b", "c"];
}

function* generatorTwo() {
  yield* ["a", "b", "c"];
}

const one = generatorOne();
const two = generatorTwo();

console.log(one.next().value);
console.log(two.next().value);
```

<details><summary><b>Answer</b></summary>

With the `yield` keyword, we `yield` values in a generator function. With the `yield*` keyword, we can yield values from another generator function, or iterable object (for example an array).

In `generatorOne`, we yield the entire array `['a', 'b', 'c']` using the `yield` keyword. The value of `value` property on the object returned by the `next` method on `one` (`one.next().value`) is equal to the entire array `['a', 'b', 'c']`.

```js
console.log(one.next().value); // ['a', 'b', 'c']
console.log(one.next().value); // undefined
```

In `generatorTwo`, we use the `yield*` keyword. This means that the first yielded value of `two`, is equal to the first yielded value in the iterator. The iterator is the array `['a', 'b', 'c']`. The first yielded value is `a`, so the first time we call `two.next().value`, `a` is returned.

```js
console.log(two.next().value); // 'a'
console.log(two.next().value); // 'b'
console.log(two.next().value); // 'c'
console.log(two.next().value); // undefined
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What will happen?

```js
let config = {
  alert: setInterval(() => {
    console.log("Alert!");
  }, 1000),
};

config = null;
```

<details><summary><b>Answer</b></summary>

Normally when we set objects equal to `null`, those objects get _garbage collected_ as there is no reference anymore to that object. However, since the callback function within `setInterval` is an arrow function (thus bound to the `config` object), the callback function still holds a reference to the `config` object. As long as there is a reference, the object won\'t get garbage collected. Since it\'s not garbage collected, the `setInterval` callback function will still get invoked every 1000ms (1s).

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Which method(s) will return the value `'Hello world!'`?

```js
const myMap = new Map();
const myFunc = () => "greeting";

myMap.set(myFunc, "Hello world!");

//1
myMap.get("greeting");
//2
myMap.get(myFunc);
//3
myMap.get(() => "greeting");
```

<details><summary><b>Answer</b></summary>

When adding a key/value pair using the `set` method, the key will be the value of the first argument passed to the `set` function, and the value will be the second argument passed to the `set` function. The key is the _function_ `() => 'greeting'` in this case, and the value `'Hello world'`. `myMap` is now `{ () => 'greeting' => 'Hello world!' }`.

1 is wrong, since the key is not `'greeting'` but `() => 'greeting'`.
3 is wrong, since we\'re creating a new function by passing it as a parameter to the `get` method. Object interact by _reference_. Functions are objects, which is why two functions are never strictly equal, even if they are identical: they have a reference to a different spot in memory.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output

```js
function find_max(nums) {
  let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
  for (let num of nums) {
    if (num > max_num) {
      // (Fill in the missing line here)
    }
  }
 return max_num;
}
```

<details><summary><b>Answer</b></summary>

```js
function find_max(nums) {
  let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
  for (let num of nums) {
    if (num > max_num) {
      max_num = num;
    }
  }
  return max_num;
}

const nums = [10, 20, -30];
console.log(find_max(nums));
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/js-code-practice-xjw5n3)**

</details>


<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## # Objects

<br/>

## Q. What is the value of `foo.x`?

```js
var foo = { n: 1 };
var bar = foo;
foo.x = foo = { n: 2 };
```

<details><summary><b>Answer</b></summary>

`undefined`. Rather, `bar.x` is `{n: 2}`.

`foo.x = foo = {n: 2}` is the same as `foo.x = (foo = {n: 2})`. It is because
a left term is first referenced and then a right term is evaluated when an
assignment is performed in JavaScript. When `foo.x` is referenced, it refers
to an original object, `{n: 1}`. So, when the result of the right term, `{n: 2}`, is evaluated, it will assigned to the original object, which is at the
moment referenced by `bar`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What will be the output?

```js
c = (c) => {
  return this.c && c(c);
};
c(c.bind(c));
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JS code?

```js
var obj = {name: "neha", getName: function() {console.log(this.name);}}

var getName = obj.getName;
var obj2 = {name: "naina", getName};
obj.getName();
obj2.getName();
```

<details><summary><b>Answer</b></summary>

```js
Neha
Naina
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JS code?

```js
const person = {name: "neha"};
const array = [person, person, person];

array[1].name = "";
console.log(array[0].name);
```

<details><summary><b>Answer</b></summary>

```js
undefined
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const person = { name: "Swarna" };

Object.defineProperty(person, "age", { value: 21 });

console.log(person);
console.log(Object.keys(person));
```

<details><summary><b>Answer</b></summary>

```js
With the `defineProperty` method, we can add new properties to an object, or modify existing ones. When we add a property to an object using the `defineProperty` method, they are by default _not enumerable_. The `Object.keys` method returns all _enumerable_ property names from an object, in this case only `"name"`.

Properties added using the `defineProperty` method are immutable by default. You can override this behavior using the `writable`, `configurable` and `enumerable` properties. This way, the `defineProperty` method gives you a lot more control over the properties you\'re adding to an object.
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const user = { name: "Swarna", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

<details><summary><b>Answer</b></summary>

```js
{ admin: true, name: 'Swarna', age: 21 }
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const person = {
  name: "Inika",
  age: 21,
};

for (const item in person) {
  console.log(item);
}
```

<details><summary><b>Answer</b></summary>

With a `for-in` loop, we can iterate through object keys, in this case `name` and `age`. Under the hood, object keys are strings (if they\'re not a Symbol). On every loop, we set the value of `item` equal to the current key it’s iterating over. First, `item` is equal to `name`, and gets logged. Then, `item` is equal to `age`, which gets logged.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
let person = { name: "Inika" };
const members = [person];
person = null;

console.log(members);
```

<details><summary><b>Answer</b></summary>

First, we declare a variable `person` with the value of an object that has a `name` property.

<img src="https://i.imgur.com/TML1MbS.png" width="200">

Then, we declare a variable called `members`. We set the first element of that array equal to the value of the `person` variable. Objects interact by _reference_ when setting them equal to each other. When you assign a reference from one variable to another, you make a _copy_ of that reference. (note that they don\'t have the _same_ reference!)

<img src="https://i.imgur.com/FSG5K3F.png" width="300">

Then, we set the variable `person` equal to `null`.

<img src="https://i.imgur.com/sYjcsMT.png" width="300">

We are only modifying the value of the `person` variable, and not the first element in the array, since that element has a different (copied) reference to the object. The first element in `members` still holds its reference to the original object. When we log the `members` array, the first element still holds the value of the object, which gets logged.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

<details><summary><b>Answer</b></summary>

Object keys are automatically converted into strings. We are trying to set an object as a key to object `a`, with the value of `123`.

However, when we stringify an object, it becomes `"[Object object]"`. So what we are saying here, is that `a["Object object"] = 123`. Then, we can try to do the same again. `c` is another object that we are implicitly stringifying. So then, `a["Object object"] = 456`.

Then, we log `a[b]`, which is actually `a["Object object"]`. We just set that to `456`, so it returns `456`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

<details><summary><b>Answer</b></summary>

If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

<details><summary><b>Answer</b></summary>

It logs the object, because we just created an empty object on the global object! When we mistyped `greeting` as `greetign`, the JS interpreter actually saw this as `global.greetign = {}` (or `window.greetign = {}` in a browser).

In order to avoid this, we can use `"use strict"`. This makes sure that you have declared a variable before setting it equal to anything.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);
```

<details><summary><b>Answer</b></summary>

In JavaScript, all objects interact by _reference_ when setting them equal to each other.

First, variable `c` holds a value to an object. Later, we assign `d` with the same reference that `c` has to the object.

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

When you change one object, you change all of them.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Which one is true?

```js
const bird = {
  size: "small",
};

const mouse = {
  name: "Mickey",
  small: true,
};
```

<details><summary><b>Answer</b></summary>

In JavaScript, all object keys are strings (unless it\'s a Symbol). Even though we might not _type_ them as strings, they are always converted into strings under the hood.

JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket `[` and keeps going until it finds the closing bracket `]`. Only then, it will evaluate the statement.

`mouse[bird.size]`: First it evaluates `bird.size`, which is `"small"`. `mouse["small"]` returns `true`

However, with dot notation, this doesn\'t happen. `mouse` does not have a key called `bird`, which means that `mouse.bird` is `undefined`. Then, we ask for the `size` using dot notation: `mouse.bird.size`. Since `mouse.bird` is `undefined`, we\'re actually asking `undefined.size`. This isn\'t valid, and will throw an error similar to `Cannot read property "size" of undefined`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());
```

<details><summary><b>Answer</b></summary>

Note that the value of `diameter` is a regular function, whereas the value of `perimeter` is an arrow function.

With arrow functions, the `this` keyword refers to its current surrounding scope, unlike regular functions! This means that when we call `perimeter`, it doesn\'t refer to the shape object, but to its surrounding scope (window for example).

There is no value `radius` on that object, which returns `undefined`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What will be the output of the following code?

```js
var Employee = {
  company: "xyz",
};
var emp1 = Object.create(Employee);
delete emp1.company;
console.log(emp1.company);
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
var obj = {
  message: "Hello",
  innerMessage: function () {
    var self = this;
    (function () {
      console.log(self.message);
    })();
  },
};
console.log(obj.innerMessage());
```

<details><summary><b>Answer</b></summary>

'Hello'

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
var obj = {
  message: "Hello",
  innerMessage: function () {
    (function () {
      console.log(this.message);
    })();
  },
};
console.log(obj.innerMessage());
```

<details><summary><b>Answer</b></summary>

```js
undefined
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
var obj = {
  message: "Hello",
  innerMessage: function () {
    return this.message;
  },
};

console.log(obj.innerMessage());
```

<details><summary><b>Answer</b></summary>

```js
Hello
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
var obj = {
  message: "Hello",
  innerMessage: !(function () {
    console.log(this.message);
  })(),
};

console.log(obj.innerMessage);
```

<details><summary><b>Answer</b></summary>

```js
undefined true
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  "use strict";

  var person = {
    name: "John",
  };
  person.salary = "10000$";
  person["country"] = "USA";

  Object.defineProperty(person, "phoneNo", {
    value: "8888888888",
    enumerable: true,
  });

  console.log(Object.keys(person));
})();
```

<details><summary><b>Answer</b></summary>

```js
["name", "salary", "country", "phoneNo"]
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  "use strict";

  var person = {
    name: "John",
  };
  person.salary = "10000$";
  person["country"] = "USA";

  Object.defineProperty(person, "phoneNo", {
    value: "8888888888",
    enumerable: false,
  });

  console.log(Object.keys(person));
})();
```

<details><summary><b>Answer</b></summary>

```js
["name", "salary", "country"]
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var objA = {
    foo: "foo",
    bar: "bar",
  };
  var objB = {
    foo: "foo",
    bar: "bar",
  };
  console.log(objA == objB);
  console.log(objA === objB);
})();
```

<details><summary><b>Answer</b></summary>

```js
false false
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var objA = new Object({ foo: "foo" });
  var objB = new Object({ foo: "foo" });
  console.log(objA == objB);
  console.log(objA === objB);
})();
```

<details><summary><b>Answer</b></summary>

```js
false false
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = Object.create({
    foo: "foo",
  });
  console.log(objA == objB);
  console.log(objA === objB);
})();
```

<details><summary><b>Answer</b></summary>

```js
false false
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = Object.create(objA);
  console.log(objA == objB);
  console.log(objA === objB);
})();
```

<details><summary><b>Answer</b></summary>

```js
false false
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = Object.create(objA);
  console.log(objA.toString() == objB.toString());
  console.log(objA.toString() === objB.toString());
})();
```

<details><summary><b>Answer</b></summary>

```js
true true
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = objA;
  console.log(objA == objB);
  console.log(objA === objB);
  console.log(objA.toString() == objB.toString());
  console.log(objA.toString() === objB.toString());
})();
```

<details><summary><b>Answer</b></summary>

```js
true true true true
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = objA;
  objB.foo = "bar";
  console.log(objA.foo);
  console.log(objB.foo);
})();
```

<details><summary><b>Answer</b></summary>

```js
bar bar
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var objA = Object.create({
    foo: "foo",
  });
  var objB = objA;
  objB.foo = "bar";

  delete objA.foo;
  console.log(objA.foo);
  console.log(objB.foo);
})();
```

<details><summary><b>Answer</b></summary>

```js
foo foo
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
(function () {
  var objA = {
    foo: "foo",
  };
  var objB = objA;
  objB.foo = "bar";

  delete objA.foo;
  console.log(objA.foo);
  console.log(objB.foo);
})();
```

<details><summary><b>Answer</b></summary>

```js
undefined undefined
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const settings = {
  username: "Akhil Sunderhallie",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);
```

<details><summary><b>Answer</b></summary>

The second argument of `JSON.stringify` is the _replacer_. The replacer can either be a function or an array, and lets you control what and how the values should be stringified.

If the replacer is an _array_, only the property names included in the array will be added to the JSON string. In this case, only the properties with the names `"level"` and `"health"` are included, `"username"` is excluded. `data` is now equal to `"{"level":19, "health":90}"`.

If the replacer is a _function_, this function gets called on every property in the object you\'re stringifying. The value returned from this function will be the value of the property when it\'s added to the JSON string. If the value is `undefined`, this property is excluded from the JSON string.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const box = { x: 10, y: 20 };

Object.freeze(box);

const shape = box;
shape.x = 100;

console.log(shape);
```

<details><summary><b>Answer</b></summary>

`Object.freeze` makes it impossible to add, remove, or modify properties of an object (unless the property\'s value is another object).

When we create the variable `shape` and set it equal to the frozen object `box`, `shape` also refers to a frozen object. You can check whether an object is frozen by using `Object.isFrozen`. In this case, `Object.isFrozen(shape)` returns true, since the variable `shape` has a reference to a frozen object.

Since `shape` is frozen, and since the value of `x` is not an object, we cannot modify the property `x`. `x` is still equal to `10`, and `{ x: 10, y: 20 }` gets logged.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const person = {
  name: "Rishima Nair",
  age: 21,
};

let city = person.city;
city = "Amsterdam";

console.log(person);
```

<details><summary><b>Answer</b></summary>

We set the variable `city` equal to the value of the property called `city` on the `person` object. There is no property on this object called `city`, so the variable `city` has the value of `undefined`.

Note that we are _not_ referencing the `person` object itself! We simply set the variable `city` equal to the current value of the `city` property on the `person` object.

Then, we set `city` equal to the string `"Amsterdam"`. This doesn\'t change the person object: there is no reference to that object.

When logging the `person` object, the unmodified object gets returned.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
const person = {
  name: "Hari Srinivas",
  age: 21,
};

for (const [x, y] of Object.entries(person)) {
  console.log(x, y);
}
```

<details><summary><b>Answer</b></summary>

`Object.entries(person)` returns an array of nested arrays, containing the keys and objects:

`[ [ 'name', 'Hari Srinivas' ], [ 'age', 21 ] ]`

Using the `for-of` loop, we can iterate over each element in the array, the subarrays in this case. We can destructure the subarrays instantly in the for-of loop, using `const [x, y]`. `x` is equal to the first element in the subarray, `y` is equal to the second element in the subarray.

The first subarray is `[ "name", "Hari Srinivas" ]`, with `x` equal to `"name"`, and `y` equal to `"Hari Srinivas"`, which get logged.
The second subarray is `[ "age", 21 ]`, with `x` equal to `"age"`, and `y` equal to `21`, which get logged.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JS code?

```js
var obj = {
  x: 12,

  getX: function () {
    return this.x;
  },
};

const output = obj.getX;

console.log(output());
```

<details><summary><b>Answer</b></summary>

```js
undefined
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JS code?

```js
const y = {
  1: 'abc',
  2: 'def',
}
    
var x = y;
x.2 = 'zsx'; 
y.img = 'trigger';

console.log(y);
console.log(x);
```

<details><summary><b>Answer</b></summary>

```js
x.2 = 'zsx';
 ^^

SyntaxError: Unexpected number
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## # Classes

<br/>

## Q. What is the output?

```js
class Person {
  constructor() {
    this.name = "Anima Nagarajan";
  }
}

Person = class AnotherPerson {
  constructor() {
    this.name = "Sarah";
  }
};

const member = new Person();
console.log(member.name);
```

<details><summary><b>Answer</b></summary>

We can set classes equal to other classes/function constructors. In this case, we set `Person` equal to `AnotherPerson`. The name on this constructor is `Sarah`, so the name property on the new `Person` instance `member` is `"Sarah"`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" });
console.log(freddie.colorChange("orange"));
```

<details><summary><b>Answer</b></summary>

The `colorChange` function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children. Since `freddie` is a child, the function is not passed down, and not available on the `freddie` instance: a `TypeError` is thrown.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function () {
  console.log(`Woof I am ${this.name}`);
};

const pet = new Dog("Mara");

pet.bark();

delete Dog.prototype.bark;

pet.bark();
```

<details><summary><b>Answer</b></summary>

We can delete properties from objects using the `delete` keyword, also on the prototype. By deleting a property on the prototype, it is not available anymore in the prototype chain. In this case, the `bark` function is not available anymore on the prototype after `delete Dog.prototype.bark`, yet we still try to access it.

When we try to invoke something that is not a function, a `TypeError` is thrown. In this case `TypeError: pet.bark is not a function`, since `pet.bark` is `undefined`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. With which constructor can we successfully extend the `Dog` class?

```js
class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Labrador extends Dog {
  // 1
  constructor(name, size) {
    this.size = size;
  }
  // 2
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  // 3
  constructor(size) {
    super(name);
    this.size = size;
  }
  // 4
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
}
```

<details><summary><b>Answer</b></summary>

In a derived class, you cannot access the `this` keyword before calling `super`. If you try to do that, it will throw a ReferenceError: 1 and 4 would throw a reference error.

With the `super` keyword, we call that parent class\'s constructor with the given arguments. The parent\'s constructor receives the `name` argument, so we need to pass `name` to `super`.

The `Labrador` class receives two arguments, `name` since it extends `Dog`, and `size` as an extra property on the `Labrador` class. They both need to be passed to the constructor function on `Labrador`, which is done correctly using constructor 2.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");
console.log(typeof member);
```

<details><summary><b>Answer</b></summary>

Classes are syntactical sugar for function constructors. The equivalent of the `Person` class as a function constructor would be:

```js
function Person() {
  this.name = name;
}
```

Calling a function constructor with `new` results in the creation of an instance of `Person`, `typeof` keyword returns `"object"` for an instance. `typeof member` returns `"object"`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## # Error Handling

<br/>

## Q. What is the output?

```js
(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
```

<details><summary><b>Answer</b></summary>

The `catch` block receives the argument `x`. This is not the same `x` as the variable when we pass arguments. This variable `x` is block-scoped.

Later, we set this block-scoped variable equal to `1`, and set the value of the variable `y`. Now, we log the block-scoped variable `x`, which is equal to `1`.

Outside of the `catch` block, `x` is still `undefined`, and `y` is `2`. When we want to `console.log(x)` outside of the `catch` block, it returns `undefined`, and `y` returns `2`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
function greeting() {
  throw "Hello world!";
}

function sayHi() {
  try {
    const data = greeting();
    console.log("It worked!", data);
  } catch (e) {
    console.log("Oh no an error:", e);
  }
}

sayHi();
```

<details><summary><b>Answer</b></summary>

With the `throw` statement, we can create custom errors. With this statement, you can throw exceptions. An exception can be a <b>string</b>, a <b>number</b>, a <b>boolean</b> or an <b>object</b>. In this case, our exception is the string `'Hello world'`.

With the `catch` statement, we can specify what to do if an exception is thrown in the `try` block. An exception is thrown: the string `'Hello world'`. `e` is now equal to that string, which we log. This results in `'Oh an error: Hello world'`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What will be the output?

```js
var v = 0;
try {
  throw (v = (function (c) {
    throw (v = function (a) {
      return v;
    });
  })());
} catch (e) {
  console.log(e()());
}
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is g value?

```js
f = g = 0;
(function () {
  try {
    f =
      function () {
        return f();
      } && f();
  } catch (e) {
    return g++ && f();
  } finally {
    return ++g;
  }
  function f() {
    g += 5;
    return 0;
  }
})();
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
(function () {
  try {
    throw new Error();
  } catch (x) {
    var x = 1,
      y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
var employeeId = "aq123";
(function Employee() {
  try {
    throw "foo123";
  } catch (employeeId) {
    console.log(employeeId);
  }
  console.log(employeeId);
})();
```

<details><summary><b>Answer</b></summary>

```js
foo123 aq123
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## # Promises

<br/>

## Q. Predict the output of the following NodeJS code?

```js
console.log('A');

setImmediate(()=>{console.log('setImmediate')});

process.nextTick(()=>{console.log('nextTick')});

setTimeout(()=>{
  console.log('setTimeout');
},0);

console.log('C');
```

<details><summary><b>Answer</b></summary>

```js
A
C
nextTick
setTimeout
setImmediate
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What kind of information would get logged?

```js
fetch("https://www.website.com/api/user/1")
  .then((res) => res.json())
  .then((res) => console.log(res));
```

<details><summary><b>Answer</b></summary>

The value of `res` in the second `.then` is equal to the returned value of the previous `.then`. You can keep chaining `.then`s like this, where the value is passed to the next handler.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
async function something() {
  console.log("something");

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("promise");
      resolve("done!");
    }, 0);
  });

  await promise;

  setTimeout(() => {
    console.log("setTimeout");
  }, 0);
  console.log("end");
}

something();
console.log("start");
```

<details><summary><b>Answer</b></summary>

```js
something
start
promise
end
setTimeout
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following NodeJS code?

```js
console.log(1);

setTimeout(() => { console.log("setTimeout")}, 0);

console.log(2);

new Promise((resolve, reject) => {
   setTimeout(() => {
     console.log("Promise");
     resolve("done")}, 0);
});

console.log(3);
```

<details><summary><b>Answer</b></summary>

```js
1
2
3
setTimeout
Promise
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the value of output?

```js
const myPromise = () => Promise.resolve("I have resolved!");

function firstFunction() {
  myPromise().then((res) => console.log(res));
  console.log("second");
}

async function secondFunction() {
  console.log(await myPromise());
  console.log("second");
}

firstFunction();
secondFunction();
```

<details><summary><b>Answer</b></summary>

With a promise, we basically say _I want to execute this function, but I'll put it aside for now while it\'s running since this might take a while. Only when a certain value is resolved (or rejected), and when the call stack is empty, I want to use this value._

We can get this value with both `.then` and the `await` keyword in an `async` function. Although we can get a promise\'s value with both `.then` and `await`, they work a bit differently.

In the `firstFunction`, we (sort of) put the myPromise function aside while it was running, but continued running the other code, which is `console.log('second')` in this case. Then, the function resolved with the string `I have resolved`, which then got logged after it saw that the callstack was empty.

With the await keyword in `secondFunction`, we literally pause the execution of an async function until the value has been resolved befoer moving to the next line.

This means that it waited for the `myPromise` to resolve with the value `I have resolved`, and only once that happened, we moved to the next line: `second` got logged.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What does this return?

```js
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));
```

<details><summary><b>Answer</b></summary>

When we pass multiple promises to the `Promise.race` method, it resolves/rejects the _first_ promise that resolves/rejects. To the `setTimeout` method, we pass a timer: 500ms for the first promise (`firstPromise`), and 100ms for the second promise (`secondPromise`). This means that the `secondPromise` resolves first with the value of `'two'`. `res` now holds the value of `'two'`, which gets logged.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
async function getData() {
  return await Promise.resolve("I made it!");
}

const data = getData();
console.log(data);
```

<details><summary><b>Answer</b></summary>

An async function always returns a promise. The `await` still has to wait for the promise to resolve: a pending promise gets returned when we call `getData()` in order to set `data` equal to it.

If we wanted to get access to the resolved value `"I made it"`, we could have used the `.then()` method on `data`:

`data.then(res => console.log(res))`

This would\'ve logged `"I made it!"`

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is its value?

```js
Promise.resolve(5);
```

<details><summary><b>Answer</b></summary>

We can pass any type of value we want to `Promise.resolve`, either a promise or a non-promise. The method itself returns a promise with the resolved value. If you pass a regular function, it\'ll be a resolved promise with a regular value. If you pass a promise, it'll be a resolved promise with the resolved value of that passed promise.

In this case, we just passed the numerical value `5`. It returns a resolved promise with the value `5`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JS code?

```js
const abc = async function () {
  console.log("2");
  await setTimeout(async function () {
    console.log("boo");
  }, 1000);

  console.log("3");
};
abc();
```

<details><summary><b>Answer</b></summary>

```js
2
3
boo
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## # Miscellaneous

<br/>

## Q. What is the output?

```js
// counter.js
let counter = 10;
export default counter;
```

```js
// index.js
import myCounter from "./counter";

myCounter += 1;

console.log(myCounter);
```

<details><summary><b>Answer</b></summary>

An imported module is _read-only_: you cannot modify the imported module. Only the module that exports them can change its value.

When we try to increment the value of `myCounter`, it throws an error: `myCounter` is read-only and cannot be modified.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
// module.js
export default () => "Hello world";
export const name = "Rishima Nair";

// index.js
import * as data from "./module";

console.log(data);
```

<details><summary><b>Answer</b></summary>

With the `import * as name` syntax, we import _all exports_ from the `module.js` file into the `index.js` file as a new object called `data` is created. In the `module.js` file, there are two exports: the default export, and a named export. The default export is a function which returns the string `"Hello World"`, and the named export is a variable called `name` which has the value of the string `"Rishima Nair"`.

The `data` object has a `default` property for the default export, other properties have the names of the named exports and their corresponding values.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
// index.js
console.log("running index.js");
import { sum } from "./sum.js";
console.log(sum(1, 2));

// sum.js
console.log("running sum.js");
export const sum = (a, b) => a + b;
```

<details><summary><b>Answer</b></summary>

With the `import` keyword, all imported modules are _pre-parsed_. This means that the imported modules get run _first_, the code in the file which imports the module gets executed _after_.

This is a difference between `require()` in CommonJS and `import`! With `require()`, you can load dependencies on demand while the code is being run. If we would have used `require` instead of `import`, `running index.js`, `running sum.js`, `3` would have been logged to the console.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
var num = 20;
var getNumber = function () {
  console.log(num);
  var num = 10;
};
getNumber(); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
function f1() {
  num = 10;
}
f1();
console.log("window.num: " + window.num); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
console.log("(null + undefined): " + (null + undefined)); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
(function () {
  var a = (b = 3);
})();

console.log("value of a : " + a); 
console.log("value of b : " + b); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
var k = 1;
if (1) {
  eval(function foo() {});
  k += typeof foo;
}
console.log(k); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
var k = 1;
if (1) {
  function foo() {}
  k += typeof foo;
}
console.log(k); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
console.log("(-1 / 0): " + -1 / 0); 
console.log("(1 / 0): " + 1 / 0); 
console.log("(0 / 0): " + 0 / 0); 
console.log("(0 / 1): " + 0 / 1); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
var a = 4;
var b = "5";
var c = 6;

console.log("(a + b): " + (a + b)); 
console.log("(a - b): " + (a - b)); 
console.log("(a * b): " + a * b); 
console.log("(a / b): " + a / b); 
console.log("(a % b): " + (a % b)); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
console.log("MAX : " + Math.max(10, 2, NaN)); 
console.log("MAX : " + Math.max()); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
(function () {
  var a = (b = 3);
})();

console.log("a defined? " + (typeof a !== "undefined")); 
console.log("b defined? " + (typeof b !== "undefined")); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo); 
    console.log("outer func:  self.foo = " + self.foo); 
    (function () {
      console.log("inner func:  this.foo = " + this.foo); 
      console.log("inner func:  self.foo = " + self.foo); 
    })();
  },
};
myObject.func();
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
})();
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
var arr1 = "john".split("");
var arr2 = arr1.reverse();
var arr3 = "jones".split("");

arr2.push(arr3);

console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1)); 
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1)); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
console.log(1 + "2" + "2"); 
console.log(1 + +"2" + "2"); 
console.log(1 + -"1" + "2"); 
console.log(+"1" + "1" + "2"); 
console.log("A" - "B" + "2"); 
console.log("A" - "B" + 2); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
for (var i = 0; i < 5; i++) {
  (function (x) {
    setTimeout(function () {
      console.log(x);
    }, x * 1000);
  })(i);
}
//Output:- 0, 1, 2, 3, 4
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
console.log("0 || 1 = " + (0 || 1)); 
console.log("1 || 2 = " + (1 || 2)); 
console.log("0 && 1 = " + (0 && 1)); 
console.log("1 && 2 = " + (1 && 2)); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
var a = {},
  b = { key: "b" },
  c = { key: "c" };

a[b] = 123;
a[c] = 456;
console.log(a[b]); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
console.log(
  (function f(n) {
    return n > 1 ? n * f(n - 1) : n;
  })(10)
);
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
(function (x) {
  return (function (y) {
    console.log(x); //1
  })(2);
})(1);
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
var hero = {
  _name: "John Doe",
  getSecretIdentity: function () {
    return this._name;
  },
};
var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity()); 
console.log(hero.getSecretIdentity()); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
var length = 10;
function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function (fn) {
    fn();
    arguments[0]();
  },
};

obj.method(fn, 1);
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
var x = 21;
var girl = function () {
  console.log(x); 
  var x = 20;
};
girl();
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
console.log(1 < 2 < 3); 
console.log(3 > 2 > 1); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
console.log(typeof typeof 1); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
var b = 1;
function outer() {
  var b = 2;
  function inner() {
    b++;
    var b = 3;
    console.log(b);
  }
  inner();
}
outer();
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
x = 10;
console.log(x);
var x; 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
var o = new F();
o.constructor === F;
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. Predict the output of the following JavaScript code?

```js
let sum = (a, b) => {
  a + b;
};
console.log(sum(10, 20)); 
```

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What will be the output of the following code?

```js
var output = (function (x) {
  delete x;
  return x;
})(0);

console.log(output);
```

<details><summary><b>Answer</b></summary>

The code above will output `0` as output. `delete` operator is used to delete a property from an object. Here `x` is not an object it\'s **local variable**. `delete` operator doesn\'t affect local variables.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What will be the output of the following code?

```js
var x = 1;
var output = (function () {
  delete x;
  return x;
})();

console.log(output);
```

<details><summary><b>Answer</b></summary>

The code above will output `1` as output. `delete` operator is used to delete a property from an object. Here `x` is not an object it\'s **global variable** of type `number`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What will be the output of the following code?

```js
var x = { foo: 1 };
var output = (function () {
  delete x.foo;
  return x.foo;
})();

console.log(output);
```

<details><summary><b>Answer</b></summary>

The code above will output `undefined` as output. `delete` operator is used to delete a property from an object. Here `x` is an object which has foo as a property and from a self-invoking function, we are deleting the `foo` property of object `x` and after deletion, we are trying to reference deleted property `foo` which result `undefined`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What will be the output of the following code?

```js
var Employee = {
  company: "xyz",
};
var emp1 = Object.create(Employee);
delete emp1.company;
console.log(emp1.company);
```

<details><summary><b>Answer</b></summary>

The code above will output `xyz` as output. Here `emp1` object got company as **prototype** property. delete operator doesn\'t delete prototype property.

`emp1` object doesn\'t have **company** as its own property. you can test it `console.log(emp1.hasOwnProperty('company')); //output : false` However, we can delete company property directly from `Employee` object using `delete Employee.company` or we can also delete from `emp1` object using `__proto__` property `delete emp1.__proto__.company`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What will be the output of the following code?

```js
var bar = true;
console.log(bar + 0);
console.log(bar + "xyz");
console.log(bar + true);
console.log(bar + false);
```

<details><summary><b>Answer</b></summary>

The code above will output `1, "truexyz", 2, 1` as output. Here\'s a general guideline for the plus operator:

- Number + Number -> Addition
- Boolean + Number -> Addition
- Boolean + Boolean -> Addition
- Number + String -> Concatenation
- String + Boolean -> Concatenation
- String + String -> Concatenation

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What will be the output of the following code?

```js
var z = 1,
  y = (z = typeof y);
console.log(y);
```

<details><summary><b>Answer</b></summary>

The code above will print string `"undefined"` as output. According to associativity rule operator with the same precedence are processed based on their associativity property of operator. Here associativity of the assignment operator is `Right to Left` so first `typeof y` will evaluate first which is string `"undefined"` and assigned to `z` and then `y` would be assigned the value of z. The overall sequence will look like that:

```js
var z;
z = 1;
var y;
z = typeof y;
y = z;
```

</details>

## Q. What will be the output of the following code?

```js
// NFE (Named Function Expression)
var foo = function bar() {
  return 12;
};
typeof bar();
```

<details><summary><b>Answer</b></summary>

The output will be `Reference Error`. To fix the bug we can try to rewrite the code a little bit:

**Sample 1:**

```js
var bar = function () {
  return 12;
};
typeof bar();
```

or

**Sample 2:**

```js
function bar() {
  return 12;
}
typeof bar();
```

The function definition can have only one reference variable as a function name, In **sample 1** `bar` is reference variable which is pointing to `anonymous function` and in **sample 2** we have function statement and `bar` is the function name.

```js
var foo = function bar() {
  // foo is visible here
  // bar is visible here
  console.log(typeof bar()); // Works here :)
};
// foo is visible here
// bar is undefined here
```

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
var objA = { prop1: 42 };
var objB = objA;
objB.prop1 = 90;
console.log(objA);
```

<details><summary><b>Answer</b></summary>

The output will `{prop1: 90}` because we\'re dealing with objects here. Objects are
passed by reference, that is, `objA` and `objB` point to the same object in memory.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What would be the output of following code?

```js
var objA = { prop1: 42 };
var objB = objA;
objB = {};
console.log(objA);
```

<details><summary><b>Answer</b></summary>

The output will `{prop1: 42}`.

When we assign `objA` to `objB`, the `objB` variable will point
to the same object as the `objB` variable.

However, when we reassign `objB` to an empty object, we simply change where `objB` variable references to.
This doesn\'t affect where `objA` variable references to.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the value of `window.foo`?

```js
window.foo || (window.foo = "bar");
```

<details><summary><b>Answer</b></summary>

Always `'bar'`

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. For which value of x the results of the following statements are not the same?

```js
//  if( x <= 100 ) {...}
if( !(x > 100) ) {...}
```

<details><summary><b>Answer</b></summary>

`NaN <= 100` is `false` and `NaN > 100` is also false, so if the value of `x` is `NaN`, the statements are not the same.

The same holds true for any value of x that being converted to Number, returns NaN, e.g.: `undefined`, `[1,2,5]`, `{a:22}`, etc.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What are the three phases of event propagation?

- [ ] Target > Capturing > Bubbling
- [ ] Bubbling > Target > Capturing
- [ ] Target > Bubbling > Capturing
- [ ] Capturing > Target > Bubbling

<details><summary><b>Answer</b></summary>

**Answer: D**

During the **capturing** phase, the event goes through the ancestor elements down to the target element. It then reaches the **target** element, and **bubbling** begins.

<img src="https://i.imgur.com/N18oRgd.png" width="200">

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. All object have prototypes?

- [ ] `true`
- [ ] `false`

<details><summary><b>Answer</b></summary>

**Answer: B**

All objects have prototypes, except for the **base object**. The base object is the object created by the user, or an object that is created using the `new` keyword. The base object has access to some methods and properties, such as `.toString`. This is the reason why you can use built-in JavaScript methods! All of such methods are available on the prototype. Although JavaScript can\'t find it directly on your object, it goes down the prototype chain and finds it there, which makes it accessible for you.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. How long is cool_secret accessible?

```js
sessionStorage.setItem("cool_secret", 123);
```

<details><summary><b>Answer</b></summary>



The data stored in `sessionStorage` is removed after closing the _tab_.

If you used `localStorage`, the data would\'ve been there forever, unless for example `localStorage.clear()` is invoked.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the output?

```js
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

<details><summary><b>Answer</b></summary>

The `continue` statement skips an iteration if a certain condition returns `true`.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. What is the event.target when clicking the button?

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">Click!</button>
  </div>
</div>
```

<details><summary><b>Answer</b></summary>

The deepest nested element that caused the event is the target of the event. You can stop bubbling by `event.stopPropagation`

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>

## Q. When you click the paragraph, What is the logged output?

```html
<div onclick="console.log('div')">
  <p onclick="console.log('p')">Click here!</p>
</div>
```

<details><summary><b>Answer</b></summary>

If we click `p`, we see two logs: `p` and `div`. During event propagation, there are 3 phases: capturing, target, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set `useCapture` to `true`). It goes from the deepest nested element outwards.

</details>

<div align="right">
    <b><a href="#javascript-coding-practice">↥ back to top</a></b>
</div>
