//1. Object properties
let id = Symbol("id");
let user = {
    name: "John",
    age: 40,
    [id]: 111
};

for (let key in user) {
    console.log(key); // name, age without symbols
}

console.log(JSON.stringify(user)); // {"name":"John", "age": 40}
console.log(Object.keys(user)); // ["name", "age"]

console.log( "User Id: " + user[id] ); // Direct access by the symbol works

//2. Unique constants
const logLevels = {
    DEBUG: Symbol('debug'),
    INFO: Symbol('info'),
    WARN: Symbol('warn'),
    ERROR: Symbol('error'),
};
console.log(logLevels.DEBUG, 'debug message');
console.log(logLevels.INFO, 'info message');

//3. Equality Checks

console.log(Symbol('foo') === Symbol('foo'));  // false
console.log(Symbol.for('foo') === Symbol.for('foo'));  // true