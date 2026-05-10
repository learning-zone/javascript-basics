// Destructuring is a JavaScript expression that allows us to extract data from arrays,
// objects, and maps and set them into new, distinct variables.
// Introduced in ES6 (ES2015), it provides a more concise and readable way to extract values.

// 1. OBJECT DESTRUCTURING
console.log("--- OBJECT DESTRUCTURING ---");

// Basic object destructuring
const user = { firstName: 'John', lastName: 'Kary', age: 30 };
const { firstName, lastName } = user;
console.log("Basic:", firstName, lastName); // John Kary

// Assigning to new variable names
const { firstName: fName, lastName: lName } = user;
console.log("New variable names:", fName, lName); // John Kary

// Default values (used when property doesn't exist)
const { firstName: first, middleName = 'M', age } = user;
console.log("With defaults:", first, middleName, age); // John M 30

// Nested object destructuring
const employee = {
    id: 1001,
    name: {
        first: 'Jane',
        last: 'Smith'
    },
    department: 'Engineering'
};
const { name: { first: employeeFirst, last: employeeLast }, department } = employee;
console.log("Nested:", employeeFirst, employeeLast, department); // Jane Smith Engineering

// Rest operator in object destructuring
const { firstName: userFirst, ...rest } = user;
console.log("Rest operator:", userFirst, rest); // John { lastName: 'Kary', age: 30 }

// 2. ARRAY DESTRUCTURING
console.log("\n--- ARRAY DESTRUCTURING ---");

// Basic array destructuring
const colors = ['red', 'green', 'blue'];
const [first1, second, third] = colors;
console.log("Basic:", first1, second, third); // red green blue

// Skipping elements
const [red, , blue] = colors;
console.log("Skipping elements:", red, blue); // red blue

// Default values
const [primary, secondary, tertiary, quaternary = 'yellow'] = colors;
console.log("With defaults:", primary, secondary, tertiary, quaternary); // red green blue yellow

// Swapping variables without a temporary variable
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log("Swapped variables:", a, b); // 2 1

// Rest operator in array destructuring
const [first2, ...remaining] = colors;
console.log("Rest operator:", first2, remaining); // red ['green', 'blue']

// 3. FUNCTION PARAMETER DESTRUCTURING
console.log("\n--- FUNCTION PARAMETER DESTRUCTURING ---");

// Object parameter destructuring
function printUserInfo({ firstName, lastName, age = 25 }) {
    console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
}
printUserInfo(user); // Name: John Kary, Age: 30

// Array parameter destructuring
function printRGB([r, g, b]) {
    console.log(`RGB: ${r}, ${g}, ${b}`);
}
printRGB(colors); // RGB: red, green, blue

// 4. PRACTICAL USE CASES
console.log("\n--- PRACTICAL USE CASES ---");

// Returning multiple values from a function
function getUserInfo() {
    return {
        id: 123,
        name: 'Alice',
        email: 'alice@example.com'
    };
}
const { id, name, email } = getUserInfo();
console.log("Multiple return values:", id, name, email); // 123 Alice alice@example.com

// Destructuring in loops
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
];
for (const { id: userId, name: userName } of users) {
    console.log(`User: ${userId} - ${userName}`);
}
// User: 1 - John
// User: 2 - Jane
