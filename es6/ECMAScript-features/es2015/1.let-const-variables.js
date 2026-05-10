let a = 1;

if (a === 1) {
    let a = 2;

    console.log(a); //2
}

console.log(a); //1

const x = 1;

if (x === 1) {
    const y = 2; // You cannot re-assign the value similar to let variable

    console.log(y); //2
}

console.log(x); //1