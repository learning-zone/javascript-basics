let str = '𠮷';

// new string form
console.log('\u{20BB7}'); // "𠮷"

// new RegExp u mode
console.log(new RegExp('\u{20BB7}', 'u'));
console.log(/^.$/u.test(str)); // true

//API methods
console.log(str.codePointAt(0)); // 134071
console.log(str.codePointAt(1)); // 57271

console.log(String.fromCodePoint(134071));  // "𠮷"