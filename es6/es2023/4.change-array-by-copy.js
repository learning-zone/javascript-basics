const numbers = [1, 3, 2, 4, 5];

// toReversed
const reversedArray = numbers.toReversed();
console.log(reversedArray); // [5, 4, 2, 3, 1]
console.log(numbers); // [1, 3, 2, 4, 5]

// toSorted
const sortedArray = numbers.toSorted();
console.log(sortedArray); // [1, 2, 3, 4, 5]
console.log(numbers); // [1, 3, 2, 4, 5]

// toSpliced
const splicedArray = numbers.toSpliced(1, 3);
console.log(splicedArray); // [1, 5]
console.log(numbers); // [1, 3, 2, 4, 5]

// with
const replaceWithArray = numbers.with(2, 10);
console.log(replaceWithArray); // [1, 3, 10, 4, 5]
console.log(numbers); // [1, 3, 2, 4, 5]