// Property shorthand
var a = 1, b = 2, c = 3;
obj = {
    a,
    b,
    c
};
console.log(obj);

// Method shorthand
var calculation = {
    sum(a, b) { return a + b; },
    multiply(a, b) { return a * b; }
};

console.log( calculation.sum(5, 3) );  // 15
console.log( calculation.multiply(5, 3) ); // 15

// Computed Property Names
const
    key = 'three',
    computedObj = {
        one: 1,
        two: 2,
        [key]: 3
    };