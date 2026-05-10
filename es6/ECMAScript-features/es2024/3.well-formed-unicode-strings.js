const str1 = "Hello World \uD815";
const str2 = "Welcome to ES2024";
const str3 = "Welcome to ES2024 😀";

console.log(str1.isWellFormed()); // false
console.log(str2.isWellFormed()); // true
console.log(str2.isWellFormed()); // true

console.log(str1.toWellFormed()); // Hello World �
console.log(str2.toWellFormed()); // Welcome to ES2024

const url = "https://somedomain.com/query=\uD423";
try {
  console.log(encodeURI(url.toWellFormed())); // https://somedomain.com/query=%ED%90%A3
} catch (e) {
  console.log('Error:', e.message);
}