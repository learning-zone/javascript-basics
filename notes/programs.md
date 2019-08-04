## Programming in JavaScript

#### Q. Predict the output of the following JavaScript code?
```javascript
var result;
for (var i = 5; i > 0; i--) {
    result = result + i;
}
console.log(result); // Output: NaN
```
#### Q. Predict the output of the following JavaScript code?
```javascript
var a = 1.2;
console.log(typeof a); // Output: Number
```
#### Q. Predict the output of the following JavaScript code?
```javascript
var x = 10;
if (x) {
    let x = 4;
}
console.log(x); // Output: 10
```

#### Q. Predict the output of the following JavaScript code?
```javascript
console.log(0.1 + 0.2 == 0.3); // Output: false
```

#### Q. Predict the output of the following JavaScript code?
```javascript
console.log(1 + -'1' + 2); // Output: 2
```

#### Q. Predict the output of the following JavaScript code?
```javascript
(function(x) {
    return (function(y) {
    console.log(x);
    })(10);
})(20);   // Output: 20
```

#### Q. Predict the output of the following JavaScript code?
```javascript
var num = 20;
var getNumber = function() {
    console.log(num);
    var num = 10;
};
getNumber(); // Output: undefined
```

#### Q. Predict the output of the following JavaScript code?
```javascript
function f1() {
    num = 10;
}
f1();
console.log('window.num: '+window.num); // output: 10
```

#### Q. Predict the output of the following JavaScript code?
```javascript
console.log('(null + undefined): '+(null + undefined)); // Output: NaN
```

#### Q. Predict the output of the following JavaScript code?
```javascript
(function() {
    var a = (b = 3);
})();

console.log('value of a : ' + a); // Output: undefined
console.log('value of b : ' + b); // Output: 3
```

#### Q. Predict the output of the following JavaScript code?
```javascript
var y = 1;
if (function f() {}) {
    y += typeof f;
}
console.log(y); // Output: 1Object
```

#### Q. Predict the output of the following JavaScript code?
```javascript
var k = 1;
if (1) {
    eval(function foo() {});
    k += typeof foo;
}
console.log(k); // Output: 1undefined
```

#### Q. Predict the output of the following JavaScript code?
```javascript
var k = 1;
if (1) {
    function foo() {}
    k += typeof foo;
}
console.log(k); // Output: 1function
```

#### Q. Predict the output of the following JavaScript code?
```javascript
console.log('(-1 / 0): '+(-1 / 0)); // Output: -Infinity
console.log('(1 / 0): '+(1 / 0));   // Output: Infinity
console.log('(0 / 0): '+(0 / 0));   // Output: NaN
console.log('(0 / 1): '+(0 / 1));   // Output: 0
```

#### Q. Predict the output of the following JavaScript code?
```javascript
var a = 4;
var b = '5';
var c = 6;

console.log('(a + b): '+(a + b)); // Output: 45
console.log('(a - b): '+(a - b)); // Output: -1
console.log('(a * b): '+(a * b)); // Output: 20
console.log('(a / b): '+(a / b)); // Output: 0.8
console.log('(a % b): '+(a % b)); // Output: 4
```

#### Q. Predict the output of the following JavaScript code?
```javascript
console.log("MAX : " + Math.max(10, 2, NaN));  // Output: NaN
console.log("MAX : " + Math.max());            // Output: -Infinity
```

#### Q. Predict the output of the following JavaScript code?
```javascript
(function(){
    var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined')); // Output: true
console.log("b defined? " + (typeof b !== 'undefined')); // Output: true
```

#### Q. Predict the output of the following JavaScript code?
```javascript
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo); // Output: this.foo = bar
        console.log("outer func:  self.foo = " + self.foo); // Output: self.foo = bar
        (function() {
            console.log("inner func:  this.foo = " + this.foo); // Output: this.foo = function foo() {}
            console.log("inner func:  self.foo = " + self.foo); // Output: self.foo = bar
        }());
    }
};
myObject.func();
```
#### Q. Predict the output of the following JavaScript code?
```javascript
console.log(0.1 + 0.2);        // Output: 0.30000000000000004
console.log(0.1 + 0.2 == 0.3); // Output: false
```

#### Q. Predict the output of the following JavaScript code?
```javascript
(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();
// Output: 1, 4, 3, 2
```

#### Q. Predict the output of the following JavaScript code?
```javascript
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1)); //array 1: length=5 last=j,o,n,e,s
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1)); //array 2: length=5 last=j,o,n,e,s
```
#### Q. Predict the output of the following JavaScript code?
```javascript
console.log(1 +  "2" + "2");    // Output: 122
console.log(1 +  +"2" + "2");   // Output: 32
console.log(1 +  -"1" + "2");   // Output: 02
console.log(+"1" +  "1" + "2"); // Output: 112
console.log( "A" - "B" + "2");  // Output: NaN2
console.log( "A" - "B" + 2);    // Output: NaN
```

#### Q. Predict the output of the following JavaScript code?
```javascript
for (var i = 0; i < 5; i++) {
    setTimeout(function() { console.log(i); }, i * 1000 );
}
// Output: 145, 5, 5, 5, 5, 5
```

#### Q. Predict the output of the following JavaScript code?
```javascript
for (var i = 0; i < 5; i++) {
    (function(x) {
        setTimeout(function() { console.log(x); }, x * 1000 );
    })(i);
}
//Output:- 0, 1, 2, 3, 4
```
#### Q. Predict the output of the following JavaScript code?
```javascript
console.log("0 || 1 = "+(0 || 1)); // Output: 1
console.log("1 || 2 = "+(1 || 2)); // Output: 1
console.log("0 && 1 = "+(0 && 1)); // Output: 0
console.log("1 && 2 = "+(1 && 2)); // Output: 2
```

#### Q. Predict the output of the following JavaScript code?
```javascript
console.log(false == '0')  // Output: true
console.log(false === '0') // Output: false
```
#### Q. Predict the output of the following JavaScript code?
```javascript
var a={},
b={key:'b'},
c={key:'c'};

a[b]=123;
a[c]=456;
console.log(a[b]); // Output: 456
```
#### Q. Predict the output of the following JavaScript code?
```javascript
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10)); // Output: 3628800
```
#### Q. Predict the output of the following JavaScript code?
```javascript
(function(x) {
    return (function(y) {
        console.log(x); //1
    })(2)
})(1); 
```

#### Q. Predict the output of the following JavaScript code?
```javascript
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};
var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());    // Output: undefined
console.log(hero.getSecretIdentity()); // Output: John Doe
```
#### Q. Predict the output of the following JavaScript code?
```javascript
var length = 10;
function fn() {
    console.log(this.length); 
}

var obj = {
    length: 5,
    method: function(fn) {
    fn();
    arguments[0]();
    }
};

obj.method(fn, 1);
//Output: 10, 2
```
#### Q. Predict the output of the following JavaScript code?
```javascript
(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();
//Output:  1, undefined, 2 
```
#### Q. Predict the output of the following JavaScript code?
```javascript
var x = 21;
var girl = function () {
    console.log(x); // Output: undefined
    var x = 20;
};
girl ();
```
#### Q. Predict the output of the following JavaScript code?
```javascript
console.log(1 < 2 < 3); // Output: true
console.log(3 > 2 > 1); // Output: false
```
#### Q. Predict the output of the following JavaScript code?
```javascript
console.log(typeof typeof 1); // Output: string
```

#### Q. Predict the output of the following JavaScript code?
```javascript
var b = 1;
function outer(){
    var b = 2
    function inner(){
        b++;
        var b = 3;
        console.log(b) //3
    }
    inner();
}
outer();
```

#### Q. Hoisting example in javascript
```javascript
x = 10
console.log(x);
var x; // Output: 10
```

#### Q. Predict the output of the following JavaScript code?
```javascript
const arr = [1, 2];
arr.push(3);       // Output: 1, 2, 3
```
#### Q. Predict the output of the following JavaScript code?
```javascript
var o = new F(); 
o.constructor === F; 
```

#### Q. Predict the output of the following JavaScript code?
```javascript
let sum = (a, b) => { a + b;}; 
console.log(sum(10, 20)); // Output: undefined; return keyword is missing 
```
#### Q. Predict the output of the following JavaScript code?
```javascript
var arr = ['javascript', 'typescript', 'es6']; 
var searchValue = (value) => {  
        return arr.filter(item => {    
        return item. indexOf(value) > -1; 
        }); 
} 
console.log(searchValue ('script'));
```
#### Q. Write the program using fatarrow function?
```javascript
var a = [1, 2, 3, 4]; 
function sumUsingFunction (acc, value) {   
  return acc + value; 
} 
var sumOfArrayUsingFunc = a.reduce(sumUsingFunc);
```
#### Q. Write a program that prints the numbers from 1 to 15. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”?
```javascript
for (var i=1; i <= 15; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}
```
Output:
```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
```
Solution - 02 
```javascript
for (var i = 1; i <= 15; i++) {
  var f = i % 3 == 0, b = i % 5 == 0;
  console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
}
```