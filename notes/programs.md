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
console.log('(null + undefined): '+(null + undefined)); // output: NaN
```

#### Q. Predict the output of the following JavaScript code?
```javascript
(function() {
    var a = (b = 3);
})();

console.log('value of a : ' + a); // undefined
console.log('value of b : ' + b); // 3
```

#### Q. Predict the output of the following JavaScript code?
```javascript
var y = 1;
if (function f() {}) {
    y += typeof f;
}
console.log(y); // output: 1Object
```

#### Q. Predict the output of the following JavaScript code?
```javascript
var k = 1;
if (1) {
    eval(function foo() {});
    k += typeof foo;
}
console.log(k); // output: 1undefined
```

#### Q. Predict the output of the following JavaScript code?
```javascript
var k = 1;
if (1) {
    function foo() {}
    k += typeof foo;
}
console.log(k); // output 1function
```

#### Q. Predict the output of the following JavaScript code?
```javascript
console.log('(-1 / 0): '+(-1 / 0)); // -Infinity
console.log('(1 / 0): '+(1 / 0)); // Infinity
console.log('(0 / 0): '+(0 / 0)); // NaN
console.log('(0 / 1): '+(0 / 1)); // 0
```

#### Q. Predict the output of the following JavaScript code?
```javascript
var a = 4;
var b = '5';
var c = 6;

console.log('(a + b): '+(a + b)); //45
console.log('(a - b): '+(a - b)); //-1
console.log('(a * b): '+(a * b)); //20
console.log('(a / b): '+(a / b)); //0.8
console.log('(a % b): '+(a % b)); //4
```

#### Q. Predict the output of the following JavaScript code?
```javascript
console.log("MAX : " + Math.max(10, 2, NaN));  //NaN
console.log("MAX : " + Math.max()); // -Infinity
```

#### Q. Predict the output of the following JavaScript code?
```javascript
(function(){
    var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined')); //true
console.log("b defined? " + (typeof b !== 'undefined')); //true
```

#### Q. Predict the output of the following JavaScript code?
```javascript
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo); //this.foo = bar
        console.log("outer func:  self.foo = " + self.foo); //self.foo = bar
        (function() {
            console.log("inner func:  this.foo = " + this.foo); //this.foo = function foo() {}
            console.log("inner func:  self.foo = " + self.foo); //self.foo = bar
        }());
    }
};
myObject.func();
```
#### Q. Predict the output of the following JavaScript code?
```javascript
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
```

#### Q. Predict the output of the following JavaScript code?
```javascript
(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();
//output:-  1, 4, 3, 2
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
console.log(1 +  "2" + "2"); //122
console.log(1 +  +"2" + "2"); //32
console.log(1 +  -"1" + "2"); //02
console.log(+"1" +  "1" + "2"); //112
console.log( "A" - "B" + "2"); //NaN2
console.log( "A" - "B" + 2); //NaN
```

#### Q. Predict the output of the following JavaScript code?
```javascript
for (var i = 0; i < 5; i++) {
    setTimeout(function() { console.log(i); }, i * 1000 );
}
//Output:- 
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
console.log("0 || 1 = "+(0 || 1)); //1
console.log("1 || 2 = "+(1 || 2)); //1
console.log("0 && 1 = "+(0 && 1)); //0
console.log("1 && 2 = "+(1 && 2)); //2
```

#### Q. Predict the output of the following JavaScript code?
```javascript
console.log(false == '0') //true
console.log(false === '0') //false
```
#### Q. Predict the output of the following JavaScript code?
```javascript
var a={},
b={key:'b'},
c={key:'c'};

a[b]=123;
a[c]=456;
console.log(a[b]); //456
```
#### Q. Predict the output of the following JavaScript code?
```javascript
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10)); //3628800
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

console.log(stoleSecretIdentity()); //undefined
console.log(hero.getSecretIdentity()); //John Doe
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
//Output:- 10, 2
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
//Output:-  1, undefined, 2 
```
#### Q. Predict the output of the following JavaScript code?
```javascript
var x = 21;
var girl = function () {
    console.log(x); //undefined
    var x = 20;
};
girl ();
```
#### Q. Predict the output of the following JavaScript code?
```javascript
console.log(1 < 2 < 3); //true
console.log(3 > 2 > 1); //false
```
#### Q. Predict the output of the following JavaScript code?
```javascript
console.log(typeof typeof 1); //string
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
var x;
```

#### Q. Predict the output of the following JavaScript code?
```javascript
const arr = [1, 2];
arr.push(3);       // 1, 2, 3
```
#### Q. Predict the output of the following JavaScript code?
```javascript
var o = new F(); 
o.constructor === F; 
```

#### Q. Predict the output of the following JavaScript code?
```javascript
let sum = (a, b) => { a + b;}; 
console.log(sum(10, 20)); // undefined; return keyword is missing 
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