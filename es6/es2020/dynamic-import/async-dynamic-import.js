(async function() {
    const moduleSpecifier = './message.js';
    const messageModule = await import(moduleSpecifier);
    messageModule.default(); // Hello, default export
    messageModule.sayGoodBye(); //Bye, named export
})();