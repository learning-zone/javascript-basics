// BigInt is a built-in object introduced in ES2020 (ES11) that provides a way to represent 
// integers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent 
// with the Number primitive.

// 1. Limitations of the current number system
console.log("Maximum safe integer in JavaScript:", Number.MAX_SAFE_INTEGER); // 9007199254740991
const max = Number.MAX_SAFE_INTEGER;
console.log("max + 1:", max + 1); // 9007199254740992
console.log("max + 2:", max + 2); // 9007199254740992 (Notice this is the same as max + 1, showing precision loss)

// 2. BigInt representation - three ways to create BigInts
// a) Using the 'n' suffix
const bigInt = 9007199254740991n;
console.log("Using 'n' suffix:", bigInt);

// b) Using BigInt constructor with a number
const bigIntFromNumber = BigInt(9007199254740991);
console.log("Using BigInt constructor with number:", bigIntFromNumber); // 9007199254740991n

// c) Using BigInt constructor with a string (useful for very large numbers)
const bigIntFromString = BigInt("9007199254740991");
console.log("Using BigInt constructor with string:", bigIntFromString); // 9007199254740991n

// 3. Type checking with typeof
console.log("\nType checking:");
console.log("typeof 1:", typeof 1);           // number
console.log("typeof 1n:", typeof 1n);         // bigint
console.log("typeof BigInt('1'):", typeof BigInt('1')); // bigint

// 4. Arithmetic operators with BigInt
console.log("\nArithmetic operations with BigInt:");
const previousMaxNum = BigInt(Number.MAX_SAFE_INTEGER);
console.log("Addition:", previousMaxNum + 2n);       // 9007199254740993n (this was not possible with regular numbers)
console.log("Subtraction:", previousMaxNum - 2n);    // 9007199254740989n
console.log("Multiplication:", previousMaxNum * 2n); // 18014398509481982n
console.log("Division:", previousMaxNum / 2n);       // 4503599627370495n
console.log("Modulus:", previousMaxNum % 2n);        // 1n

// 5. Comparison operations
console.log("\nComparison operations:");
console.log("1n === 1:", 1n === 1);           // false (strict equality checks type)
console.log("1n === BigInt(1):", 1n === BigInt(1)); // true (same type and value)
console.log("1n == 1:", 1n == 1);             // true (loose equality converts types)

// 6. Limitations of BigInt
console.log("\nLimitations of BigInt:");
// Cannot mix BigInt and other types in operations
try {
    console.log(1n + 1);
} catch (error) {
    console.log("Error when mixing types:", error.message); // Cannot mix BigInt and other types
}

// No support for decimal points
console.log("BigInt(1.5):", BigInt(1.5)); // 1n (decimal part is truncated)

// 7. Use cases for BigInt
console.log("\nUse cases for BigInt:");
console.log("- Working with large integers beyond Number.MAX_SAFE_INTEGER");
console.log("- Cryptography and security applications");
console.log("- High-precision timestamps");
console.log("- Scientific calculations requiring high precision");
