function factorial(n, acc = 1) {
    if (n === 0) {
        return acc
    }
    return factorial(n - 1, n * acc)
}
console.log(factorial(5)); //120

console.log(factorial(10));
console.log(factorial(100));
console.log(factorial(1000));
console.log(factorial(10000));