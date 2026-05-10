let myUserSet = new WeakSet();

let john = { name: "John" };
let rocky = { name: "Rocky" };
let alex = { name: "Alex" };
let nick = { name: "Nick" };

myUserSet.add(john);
myUserSet.add(rocky);
myUserSet.add(john);
myUserSet.add(nick);

console.log(myUserSet.has(john)); // true
console.log(myUserSet.has(alex)); // false
console.log(myUserSet.delete(nick));
console.log(myUserSet.has(nick)); // false

john = null;