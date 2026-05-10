const isOdd = (number) => number % 2 === 1;
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.findLast(isOdd)); // 5
console.log(numbers.findLastIndex(isOdd)); // 4