const profile = {
    age: 42
};

const descriptors = Object.getOwnPropertyDescriptors(profile);
console.log(descriptors); //  {age: {configurable: true, enumerable: true, writable: true }}