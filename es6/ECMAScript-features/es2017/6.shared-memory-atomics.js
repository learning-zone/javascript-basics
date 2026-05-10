// Atomic operations
const sharedMemory = new SharedArrayBuffer(1024);
const sharedArray = new Uint8Array(sharedMemory);
sharedArray[0] = 10;

Atomics.add(sharedArray, 0, 20);
console.log(Atomics.load(sharedArray, 0)); // 30

Atomics.sub(sharedArray, 0, 10);
console.log(Atomics.load(sharedArray, 0)); // 20

Atomics.and(sharedArray, 0, 5);
console.log(Atomics.load(sharedArray, 0));  // 4

Atomics.or(sharedArray, 0, 1);
console.log(Atomics.load(sharedArray, 0));  // 5

Atomics.xor(sharedArray, 0, 1);
console.log(Atomics.load(sharedArray, 0)); // 4

Atomics.store(sharedArray, 0, 10); // 10

Atomics.compareExchange(sharedArray, 0, 5, 10);
console.log(Atomics.load(sharedArray, 0)); // 10

Atomics.exchange(sharedArray, 0, 10);
console.log(Atomics.load(sharedArray, 0)); //10

Atomics.isLockFree(1); // true

// waiting to be notified
const sharedMemory = new SharedArrayBuffer(1024);
const sharedArray = new Int32Array(sharedMemory);

Atomics.wait(sharedArray, 0, 10);
console.log(sharedArray[0]); // 100

Atomics.store(sharedArray, 0, 100);
Atomics.notify(sharedArray, 0, 1);