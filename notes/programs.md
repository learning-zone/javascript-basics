## Programming in JavaScript

#### Question - 01
```javascript
var result;
for (var i = 5; i > 0; i--) {
    result = result + i;
}
console.log(result); // Output: NaN
```
#### Question - 02
```javascript
var a = 1.2;
console.log(typeof a); // Output: Number
```
#### Question - 03
```javascript
var x = 10;
if (x) {
    let x = 4;
}
console.log(x); // Output: 10
```

#### Question - 05
```javascript
console.log(0.1 + 0.2 == 0.3); // Output: false
```

#### Question - 06
```javascript
console.log(1 + -'1' + 2); // Output: 2
```

#### Question - 07
```javascript
(function(x) {
    return (function(y) {
    console.log(x);
    })(10);
})(20);   // Output: 20
```

#### Question - 08
```javascript
var num = 20;
var getNumber = function() {
    console.log(num);
    var num = 10;
};
getNumber(); // Output: undefined
```

#### Question - 09
```javascript
function f1() {
    num = 10;
}
f1();
console.log('window.num: '+window.num); // output: 10
```

#### Question - 10
```javascript
console.log('(null + undefined): '+(null + undefined)); // output: NaN
```

#### Question - 11
```javascript
(function() {
    var a = (b = 3);
})();

console.log('value of a : ' + a); // undefined
console.log('value of b : ' + b); // 3
```

#### Question - 12
```javascript
var y = 1;
if (function f() {}) {
    y += typeof f;
}
console.log(y); // output: 1Object
```

#### Question - 13
```javascript
var k = 1;
if (1) {
    eval(function foo() {});
    k += typeof foo;
}
console.log(k); // output: 1undefined
```

#### Question - 14
```javascript
var k = 1;
if (1) {
    function foo() {}
    k += typeof foo;
}
console.log(k); // output 1function
```

#### Question - 15
```javascript
console.log('(-1 / 0): '+(-1 / 0)); // -Infinity
console.log('(1 / 0): '+(1 / 0)); // Infinity
console.log('(0 / 0): '+(0 / 0)); // NaN
console.log('(0 / 1): '+(0 / 1)); // 0
```

#### Question - 16
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

#### Question - 17
```javascript
console.log("MAX : " + Math.max(10, 2, NaN));  //NaN
console.log("MAX : " + Math.max()); // -Infinity
```

#### Question - 18
```javascript
(function(){
    var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined')); //true
console.log("b defined? " + (typeof b !== 'undefined')); //true
```

#### Question - 19
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

#### Question - 20
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
```

#### Question - 21
```javascript
(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();
//output:-  1, 4, 3, 2
```

#### Question - 22
```javascript
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1)); //array 1: length=5 last=j,o,n,e,s
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1)); //array 2: length=5 last=j,o,n,e,s

#### Question - 23
console.log(1 +  "2" + "2"); //122
console.log(1 +  +"2" + "2"); //32
console.log(1 +  -"1" + "2"); //02
console.log(+"1" +  "1" + "2"); //112
console.log( "A" - "B" + "2"); //NaN2
console.log( "A" - "B" + 2); //NaN
```

#### Question - 24
```javascript
for (var i = 0; i < 5; i++) {
    setTimeout(function() { console.log(i); }, i * 1000 );
}
//Output:- 
```

#### Question - 25
```javascript
for (var i = 0; i < 5; i++) {
    (function(x) {
        setTimeout(function() { console.log(x); }, x * 1000 );
    })(i);
}
//Output:- 0, 1, 2, 3, 4
```
#### Question - 26
```javascript
console.log("0 || 1 = "+(0 || 1)); //1
console.log("1 || 2 = "+(1 || 2)); //1
console.log("0 && 1 = "+(0 && 1)); //0
console.log("1 && 2 = "+(1 && 2)); //2
```

#### Question - 27
```javascript
console.log(false == '0') //true
console.log(false === '0') //false
```
#### Question - 28
```javascript
var a={},
b={key:'b'},
c={key:'c'};

a[b]=123;
a[c]=456;
console.log(a[b]); //456
```

#### Question - 29
```javascript
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10)); //3628800
```

#### Question - 30
```javascript
(function(x) {
    return (function(y) {
        console.log(x); //1
    })(2)
})(1); 
```

#### Question - 31
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
#### Question - 32
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
#### Question - 33
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
#### Question - 34
```javascript
var x = 21;
var girl = function () {
    console.log(x); //undefined
    var x = 20;
};
girl ();

#### Question - 35
console.log(1 < 2 < 3); //true
console.log(3 > 2 > 1); //false
```
#### Question - 36
```javascript
console.log(typeof typeof 1); //string
```

#### Question - 37
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

#### Question - 38: Hoisting
```javascript
x = 10
console.log(x);
var x;
```

#### Question - 39:
```javascript
const arr = [1, 2];
arr.push(3);       // 1, 2, 3
```
#### Question - 40
```javascript
var o = new F(); 
o.constructor === F; 
```

#### Question - 41
```javascript
let sum = (a, b) => { a + b;}; 
console.log(sum(10, 20)); // undefined; return keyword is missing 
```
#### Question - 42
```javascript
var arr = ['javascript', 'typescript', 'es6']; 
var searchValue = (value) => {  
        return arr.filter(item => {    
        return item. indexOf(value) > -1; 
        }); 
} 
console.log(searchValue ('script'));
```