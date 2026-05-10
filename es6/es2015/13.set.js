let mySet = new Set()

mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add('some text here');
mySet.add({one: 1, two: 2 , three: 3});
console.log(mySet); // Set [ 1, 2, 'some text here', {one: 1, two: 2 , three: 3} ]
console.log(mySet.size) // 4
console.log(mySet.has(2)); // true