var getGlobal = function () {
    if (typeof self !== 'undefined') { return self; }
    if (typeof window !== 'undefined') { return window; }
    if (typeof global !== 'undefined') { return global; }
    throw new Error('unable to locate global object');
};

var globals = getGlobal();

if (typeof globals.setTimeout !== 'function') {
    console.log('no setTimeout in this environment or runtime');
}

if (typeof globalThis.setTimeout !== 'function') {
    console.log('no setTimeout in this environment or runtime');
}