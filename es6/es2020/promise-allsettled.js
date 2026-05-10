const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve(100), 1000));

const promise2 = new Promise((resolve, reject) => setTimeout(reject, 1000));

Promise.allSettled([promise1, promise2]).then(data => console.log(data)); // [ Object { status: "fulfilled", value: 100}, Object { status: "rejected", reason: undefined}]