let vehicle = {
    car: {
        name: "",
        speed: 0
    }
};

console.log(vehicle.car.name || "Unknown"); // Unknown
console.log(vehicle.car.speed || 90); // 90

console.log(vehicle.car.name ?? "Unknown"); // ""(empty is valid case for name)
console.log(vehicle.car.speed ?? 90); // 0(zero is valid case for speed)