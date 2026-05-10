// Pad start
const cardNumber = '01234567891234';
const lastFourDigits = cardNumber.slice(-4);
const maskedCardNumber = lastFourDigits.padStart(cardNumber.length, '*');
console.log(maskedCardNumber); // expected output: "**********1234"

// Pad End
const label1 = "Name";
const label2 = "Phone Number";
const value1 = "John"
const value2 = "(222)-333-3456";

console.log((label1 + ': ').padEnd(20, ' ') + value1);
console.log(label2 + ": " + value2); // Name:                John
                                     // Phone Number: (222)-333-3456