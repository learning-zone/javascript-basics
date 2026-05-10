let typeMap = new Map();

var keyObj = {'one': 1}

typeMap.set('10', 'string');   // a string key
typeMap.set(10, 'number');     // a numeric key
typeMap.set(true, 'boolean'); // a boolean key
typeMap.set(keyObj, 'object'); // an object key


console.log(typeMap.get(10)   ); // number
console.log(typeMap.get('10') ); // string
console.log(typeMap.get(keyObj)) // object
console.log(typeMap.get({'one': 1})) // undefined

console.log(typeMap.size ); // 4

for(let item of typeMap) {
    console.log(item);
}


for(let item in typeMap) {
    console.log(item);
}