// Arrow functions were introduced in ES6 (ES2015) as a new syntax for writing JavaScript functions.
// They provide a more concise syntax and lexical 'this' binding.

// 1. Single parameter and single statement
// No parentheses needed for single parameter
const message = name => console.log(`Hello, ${name}!`);
message("Sudheer"); // Hello, Sudheer!

// 2. Multiple parameters and single statement
// Parentheses required for multiple parameters
const multiply = (x, y) => x * y;
console.log(multiply(2, 3)); // 6

// 3. Single parameter and multiple statements
// Curly braces required for multiple statements
const even = number => {
    if(number % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
};
even(5); // Odd

// 4. Multiple parameters and multiple statements
const divide = (x, y) => {
    if(y !== 0) {
        return x / y;
    }
    return "Cannot divide by zero";
};
console.log(divide(100, 5)); // 20
console.log(divide(100, 0)); // Cannot divide by zero

// 5. No parameter and single statement
// Empty parentheses required when no parameters
const greet = () => console.log('Hello World!');
greet(); // Hello World!

// 6. Lexical 'this' binding
// Arrow functions don't have their own 'this' context
const person = {
    name: 'John',
    regularFunction: function() {
        console.log(this.name); // 'John'
    },
    arrowFunction: () => {
        console.log(this.name); // undefined (or global 'name' if defined)
    }
};
// person.regularFunction();
// person.arrowFunction();
