function* myGenerator(i) {
    yield i + 10;
    yield i + 20;
    return i + 30;
}

const myGenObj = myGenerator(10);

console.log(myGenObj.next().value); // 20
console.log(myGenObj.next().value); // 30
console.log(myGenObj.next().value); // 40