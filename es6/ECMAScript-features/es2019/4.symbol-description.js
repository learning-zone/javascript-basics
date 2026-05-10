console.log(Symbol('one').description); // one

console.log(Symbol.for('one').description); // "one"

console.log(Symbol('').description); // ''

console.log(Symbol().description); // unefined

console.log(Symbol.iterator.description); // "Symbol.iterator"