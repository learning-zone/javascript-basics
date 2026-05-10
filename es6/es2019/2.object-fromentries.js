// Iterable to objects
const arr = [ ['a', '1'], ['b', '2'], ['c', '3'] ];
const obj = Object.fromEntries(arr);
console.log(obj); // { a: "1", b: "2", c: "3" }

// URLParams
const paramsString = 'param1=foo&param2=baz';
const searchParams = new URLSearchParams(paramsString);

Object.fromEntries(searchParams);    // => {param1: "foo", param2: "baz"}