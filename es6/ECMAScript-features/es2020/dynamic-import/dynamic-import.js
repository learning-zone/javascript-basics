const moduleSpecifier = './message.js';
import(moduleSpecifier)
    .then((module) => {
        module.default(); // Hello, default export
        module.sayGoodBye(); //Bye, named export
    })
    .catch( err => console.log('loading error'));