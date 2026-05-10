let vehicle = {
};

let vehicle1 = {
    car: {
        name: 'ABC',
        speed: 90
    }
};


console.log(vehicle.car?.name); // Undefined
console.log(vehicle.car?.speed); // Undefined

console.log(vehicle1.car?.name); // ABC
console.log(vehicle1.car?.speed); // 90

console.log(vehicle.car?.name ?? "Unknown"); // Unknown
console.log(vehicle.car?.speed ?? 90); // 90