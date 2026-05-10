// flat
const numberArray = [[1, 2], [[3], 4], [5, 6]];
const charArray = ['a', , 'b', , , ['c', 'd'], 'e'];
const flattenedArrOneLevel = numberArray.flat(1);
const flattenedArrTwoLevel = numberArray.flat(2);
const flattenedCharArrOneLevel = charArray.flat(1);

console.log(flattenedArrOneLevel);    // [1, 2, [3], 4, 5, 6]
console.log(flattenedArrTwoLevel);    // [1, 2, 3, 4, 5, 6]
console.log(flattenedCharArrOneLevel);    // ['a', 'b', 'c', 'd', 'e']

// flatMap
const numberArray1 = [[1], [2], [3], [4], [5]];

console.log(numberArray1.flatMap(value => [value * 10]));  // [10, 20, 30, 40, 50]