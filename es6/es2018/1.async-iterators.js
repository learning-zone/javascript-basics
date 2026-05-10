const arr = ['a', 'b', 'c', 'd'];
const syncIterator = arr[Symbol.iterator]();

console.log(syncIterator.next());    //{value: a, done: false}
console.log(syncIterator.next());    //{value: b, done: false}
console.log(syncIterator.next());    //{value: c, done: false}
console.log(syncIterator.next());    //{value: d, done: false}
console.log(syncIterator.next());    //{value: undefined, done: true}