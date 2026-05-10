const users = [
    { name: "Albert",  age: 30 },
    { name: "Bravo",   age: 30 },
    { name: "Colin",   age: 30 },
    { name: "Rock",    age: 50 },
    { name: "Sunny",   age: 50 },
    { name: "Talor",    age: 50 },
    { name: "John",   age: 25 },
    { name: "Kindo",  age: 25 },
    { name: "Lary",   age: 25 },
    { name: "Minjie",   age: 25 },
    { name: "Nova",    age: 25 }
]
users.sort((a, b) => a.age - b.age);