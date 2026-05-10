// In function and constructor calls
console.log(Math.max(...[-10, 30, 10, 20])); //30
console.log(Math.max(-10, ...[-50, 10], 30)); //30

// In Array literals and strings
console.log([1, ...[2,3], 4, ...[5, 6, 7]]); // 1, 2, 3, 4, 5, 6, 7