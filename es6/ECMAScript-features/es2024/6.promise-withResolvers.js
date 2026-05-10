const { promise, resolve, reject} = Promise.withResolvers();

setTimeout(() =>  { Math.random() > 0.5 ? resolve("Success") : reject("Error")},1000);
promise.then(result => console.log(result)).catch(error => console.error(error));