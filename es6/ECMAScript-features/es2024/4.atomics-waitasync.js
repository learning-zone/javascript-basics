const arrayBuffer = new SharedArrayBuffer(1024);
const arr = new Int32Array(arrayBuffer);

Atomics.waitAsync(arr, 0 , 0 , 500); // { async: true, value: Promise {<pending>}}

Atomics.notify(arr, 0); // { async: true, value: Promise {<fulfilled>: 'ok'} }