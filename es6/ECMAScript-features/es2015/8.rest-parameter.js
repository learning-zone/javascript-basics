function sum(...args) {
    return args.reduce((previous, current) => {
        return previous + current;
    });
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(1, 2, 3, 4, 5)); // 15