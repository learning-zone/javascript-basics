let promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'Resolves after 100ms'));
let promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'Resolves after 200ms'));
let promise3 = new Promise((resolve, reject) => setTimeout(reject, 0) );

let promises = [promise1, promise2, promise3];

 Promise.any(promises)
     .then( value => console.log(value)); // Resolves after 100ms