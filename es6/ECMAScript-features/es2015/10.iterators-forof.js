const collection = {
    one: 1,
    two: 2,
    three: 3,
    [Symbol.iterator]() {
        const values = Object.keys(this);
        let i = 0;
        return {
            next: () => {
                return {
                    value: this[values[i++]],
                    done: i > values.length
                }
            }
        };
    }
};

const iterator = collection[Symbol.iterator]();

console.log(iterator.next());    // → {value: 1, done: false}
console.log(iterator.next());    // → {value: 2, done: false}
console.log(iterator.next());    // → {value: 3, done: false}
console.log(iterator.next());    // → {value: undefined, done: true}

for (const value of collection) {
    console.log(value);
}