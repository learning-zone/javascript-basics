// Iterator Helpers - New in ES2025
// ES2025 introduces several helper methods for working with iterators and iterables

// Iterator helpers provide a set of utility methods that can be chained together
// to perform operations on iterators in a more readable and functional way

// 1. Basic Iterator Creation
console.log("--- Basic Iterator Creation ---");

// Create an iterator from an array
const numbers = [1, 2, 3, 4, 5];
const numbersIterator = numbers[Symbol.iterator]();

console.log(numbersIterator.next()); // { value: 1, done: false }
console.log(numbersIterator.next()); // { value: 2, done: false }
console.log(numbersIterator.next()); // { value: 3, done: false }

// 2. Iterator.prototype.map()
// Maps each value in the iterator to a new value
console.log("\n--- Iterator.prototype.map() ---");

function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const doubledIterator = generateNumbers()[Symbol.iterator]()
  .map(x => x * 2);

console.log([...doubledIterator]); // [2, 4, 6, 8, 10]

// 3. Iterator.prototype.filter()
// Filters values in the iterator based on a predicate
console.log("\n--- Iterator.prototype.filter() ---");

const evenIterator = generateNumbers()[Symbol.iterator]()
  .filter(x => x % 2 === 0);

console.log([...evenIterator]); // [2, 4]

// 4. Iterator.prototype.take()
// Takes a specified number of values from the iterator
console.log("\n--- Iterator.prototype.take() ---");

const firstThreeIterator = generateNumbers()[Symbol.iterator]()
  .take(3);

console.log([...firstThreeIterator]); // [1, 2, 3]

// 5. Iterator.prototype.drop()
// Skips a specified number of values from the iterator
console.log("\n--- Iterator.prototype.drop() ---");

const afterTwoIterator = generateNumbers()[Symbol.iterator]()
  .drop(2);

console.log([...afterTwoIterator]); // [3, 4, 5]

// 6. Iterator.prototype.flatMap()
// Maps each value and flattens the result
console.log("\n--- Iterator.prototype.flatMap() ---");

const flatMappedIterator = generateNumbers()[Symbol.iterator]()
  .flatMap(x => [x, x * 10]);

console.log([...flatMappedIterator]); // [1, 10, 2, 20, 3, 30, 4, 40, 5, 50]

// 7. Iterator.prototype.reduce()
// Reduces the iterator to a single value
console.log("\n--- Iterator.prototype.reduce() ---");

const sum = generateNumbers()[Symbol.iterator]()
  .reduce((acc, val) => acc + val, 0);

console.log("Sum:", sum); // 15

// 8. Iterator.prototype.toArray()
// Converts the iterator to an array
console.log("\n--- Iterator.prototype.toArray() ---");

const numbersArray = generateNumbers()[Symbol.iterator]()
  .toArray();

console.log("Array:", numbersArray); // [1, 2, 3, 4, 5]

// 9. Iterator.prototype.forEach()
// Executes a function for each value in the iterator
console.log("\n--- Iterator.prototype.forEach() ---");

let forEachSum = 0;
generateNumbers()[Symbol.iterator]()
  .forEach(x => {
    forEachSum += x;
    console.log("Processing:", x);
  });

console.log("forEach Sum:", forEachSum); // 15

// 10. Iterator.prototype.some() and Iterator.prototype.every()
// Check if some or all values satisfy a condition
console.log("\n--- Iterator.prototype.some() and Iterator.prototype.every() ---");

const hasSomeEven = generateNumbers()[Symbol.iterator]()
  .some(x => x % 2 === 0);

const allEven = generateNumbers()[Symbol.iterator]()
  .every(x => x % 2 === 0);

console.log("Has some even numbers:", hasSomeEven); // true
console.log("All numbers are even:", allEven); // false

// 11. Chaining Iterator Helpers
// Iterator helpers can be chained together for complex operations
console.log("\n--- Chaining Iterator Helpers ---");

const result = generateNumbers()[Symbol.iterator]()
  .filter(x => x > 1)
  .map(x => x * 10)
  .take(3)
  .toArray();

console.log("Chained result:", result); // [20, 30, 40]

// 12. Practical Example: Processing a Stream of Data
console.log("\n--- Practical Example: Processing a Stream of Data ---");

function* generateUserData() {
  yield { id: 1, name: "Alice", age: 25 };
  yield { id: 2, name: "Bob", age: 30 };
  yield { id: 3, name: "Charlie", age: 35 };
  yield { id: 4, name: "Dave", age: 40 };
  yield { id: 5, name: "Eve", age: 45 };
}

// Find users over 30, extract their names, and take the first 2
const olderUserNames = generateUserData()[Symbol.iterator]()
  .filter(user => user.age > 30)
  .map(user => user.name)
  .take(2)
  .toArray();

console.log("Names of first 2 users over 30:", olderUserNames); // ["Charlie", "Dave"]

// Calculate the average age of all users
const totalUsers = generateUserData()[Symbol.iterator]()
  .toArray();

const totalAge = totalUsers.reduce((sum, user) => sum + user.age, 0);
const averageAge = totalAge / totalUsers.length;

console.log("Average age:", averageAge); // 35