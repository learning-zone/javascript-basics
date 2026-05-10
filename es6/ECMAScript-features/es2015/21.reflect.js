// Creating objects using Reflect.construct()
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

let args = ['John', 'Emma'];

let john = Reflect.construct(
    User,
    args
);

console.log(john instanceof User);
console.log(john.fullName); // John Doe

//Calling a function using Reflect.apply()
const max = Reflect.apply(Math.max, Math, [100, 200, 300]);
console.log(max);

//Defining a property using Reflect.defineProperty()
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

let john = new User('John', 'Resig');

if (Reflect.defineProperty(john, 'age', {
    writable: true,
    configurable: true,
    enumerable: false,
    value: 33,
})) {
    console.log(john.age);
} else {
    console.log('Cannot define the age property on the user object.');

}

//Delete property using Reflect.deleteProperty()
const user = {
    name: 'John',
    age: 33
};

console.log(Reflect.deleteProperty(user, 'age')); // true
console.log(user.age); // undefined

//Get property of an object using Reflect.get()
const user = {
    name: 'John',
    age: 33
};

console.log(Reflect.get(user, 'age')); // 33