const weak = new WeakMap();
const key = Symbol("ref");
weak.set(key, "ES2023");

console.log(weak.get(key)); //ES2023