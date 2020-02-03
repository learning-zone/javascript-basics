## Programming in JavaScript

#### Q. Write a program in javascript. sum(2)(3); // Expected output is 5
```javascript
function sum(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function(y) { return x + y; };
  }
}
```
Output
```
console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How to do Javascript file size and extension validation before upload?
```html
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-type" content="text/html;charset=UTF-8">
<title>Show File Data</title>
<script type='text/javascript'>
function showFileSize() {
    var input, file, extension;

    // (Can't use `typeof FileReader === "function"` because apparently
    // it comes back as "object" on some browsers. So just see if it's there
    // at all.)
    if (!window.FileReader) {
        bodyAppend("p", "The file API isn't supported on this browser yet.");
        return;
    }

    input = document.getElementById('fileinput');
    if (!input) {
        bodyAppend("p", "Um, couldn't find the fileinput element.");
    } else if (!input.files) {
        bodyAppend("p", "This browser doesn't seem to support the `files` property of file inputs.");
    } else if (!input.files[0]) {
        bodyAppend("p", "Please select a file before clicking 'Load'");
    } else {
        file = input.files[0];
        extension = file.name.substring(file.name.lastIndexOf('.') + 1);
        bodyAppend("p", "File Name: " + file.name + "<br/>File Size: " + file.size + " bytes <br/>File Extension: " + extension);
    }
}

function bodyAppend(tagName, innerHTML) {
    var elm;

    elm = document.createElement(tagName);
    elm.innerHTML = innerHTML;
    document.body.appendChild(elm);
}
</script>
</head>
<body>
<form action='#' onsubmit="return false;">
  <input type='file' id='fileinput'>
  <input type='button' id='btnLoad' value='Load' onclick='showFileSize();'>
</form>
</body>
</html>
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How to create captcha using javascript?
```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Captcha Example</title>
</head>
<script>
    var captcha;
        
    function generateCaptcha() {
        var a = Math.floor((Math.random() * 10));
        var b = Math.floor((Math.random() * 10));
        var c = Math.floor((Math.random() * 10));
        var d = Math.floor((Math.random() * 10));
        
        captcha = a.toString() + b.toString() + c.toString() + d.toString();
        document.getElementById("captcha").value = captcha;
    }
        
    function check() {
        var input=document.getElementById("inputText").value;
        
        if(input == captcha) {
            alert("Valid Captcha");
        } else {
            alert("Invalid Captcha");
        }
    }
</script>
<body onload="generateCaptcha()">
  <input type="text" id="captcha" disabled/><br/><br/>
  <input type="text" id="inputText"/><br/><br/>
  <button onclick="generateCaptcha()">Refresh</button>
  <button onclick="check()">Submit</button>
</body>
</html>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Create a Stopwatch program in javascript.
```html
<!DOCTYPE html>
<html>
<head>
  <title>Stopwatch Example</title>
</head>
<body>
    <form action="" method="post">
        <h4>Simple stopwatch made in JavaScript</h4>
        <input type="button" onclick="startWatch()" value="START" />
        <input type="button" onclick="stopWatch()" value="STOP" />
        <input type="button" onclick="resetWatch()" value="ZERO" />
    </form>
    <p id="res"><span id="min">0</span> : <span id="sec">00</span> : <span id="msec">000</span></p>
    <p>In this example Date() methods co-operate with timing function setInterval().</p>

    <script type="text/javascript">
    var timer = null;
    var min_txt = document.getElementById("min");
    var min = Number(min_txt.innerHTML);
    var sec_txt = document.getElementById("sec");
    var sec = Number(sec_txt.innerHTML);
    var msec_txt = document.getElementById("msec"); 
    var msec = Number(msec_txt.innerHTML);
    function stopTimeMilliseconds(timer) {
        if (timer) { 
            clearInterval(timer);
            return timer;
        }
        else return timer;
    }
    function startTimeMilliseconds() {
        var currDate = new Date();
        return currDate.getTime();	
    }
    function getElapsedTimeMilliseconds(startMilliseconds) {
        if (startMilliseconds > 0) {
            var currDate = new Date();
            elapsedMilliseconds = (currDate.getTime() - startMilliseconds);
            return elapsedMilliseconds;
        } else {
          return elapsedMilliseconds = 0;
        }
    }
    function startWatch() { 
        // START TIMER
        timer = stopTimeMilliseconds(timer); 
        var startMilliseconds = startTimeMilliseconds();
        timer = setInterval(function() { 
            var elapsedMilliseconds = getElapsedTimeMilliseconds(startMilliseconds); 
            if (msec < 10) {
                msec_txt.innerHTML = "00" + msec; 
            } else if (msec < 100) {
                msec_txt.innerHTML = "0" + msec;
            } else {
                msec_txt.innerHTML = msec;
            }
            if (sec < 10) {
                sec_txt.innerHTML = "0" + sec;
            } else {
                sec_txt.innerHTML = sec; 
            }
            min_txt.innerHTML = min; 
            msec = elapsedMilliseconds;
            if (min >= 59 && sec >=59 && msec > 900) {
                timer = stopTimeMilliseconds(timer);
                return true;
            }
            if (sec > 59) {
                sec = 0;
                min++;
            }
            if (msec > 999) {
                msec = 0;
                sec++;
                startWatch();
            }
        }, 10);
    }
    function stopWatch() {
        // STOP TIMER
        timer = stopTimeMilliseconds(timer);
        return true;
    }
    function resetWatch() {
        // REZERO TIMER
        timer = stopTimeMilliseconds(timer);
        msec_txt.innerHTML = "000"; 
        msec = 0;
        sec_txt.innerHTML = "00"; 
        sec = 0;
        min_txt.innerHTML = "0"; 
        min = 0;
        return true;
    }
</script>
</body>
</html>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Write a program to reverse a string?
```javascript
function reverseString(str){
    let stringRev ="";
    for(let i = str.length; i >= 0; i--) {
        stringRev = stringRev + str.charAt(i);
    }
    return stringRev;
}
alert(reverseString("Pradeep")); // Output: peedarP
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How to check if object is empty or not in javaScript?
```javascript
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
```
#### Q. JavaScript Regular Expression to validate Email

```javascript
var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
```
#### Q. Use RegEx to test password strength in JavaScript?

```javascript

var newPassword = "Pq5*@a{J";
var regularExpression = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

if(!regularExpression.test(newPassword)) {
    alert("Password should contain atleast one number and one special character !");   
}
```

|RegEx	           |Description                                                           |
|------------------|----------------------------------------------------------------------|
|^	               | The password string will start this way                              |
|(?=.*[a-z])	   | The string must contain at least 1 lowercase alphabetical character  |
|(?=.*[A-Z])	   | The string must contain at least 1 uppercase alphabetical character  |
|(?=.*[0-9])	   | The string must contain at least 1 numeric character                 |
|(?=.[!@#\$%\^&])| The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict  |
|(?=.{8,})	       |The string must be eight characters or longer                          |

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How to compare objects ES6?
Example 01:
```javascript
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);

console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false
```
Example 02:
```javascript
const k1 = {fruit: '🥝'};
const k2 = {fruit: '🥝'};

// Using JavaScript
JSON.stringify(k1) === JSON.stringify(k2); // true
```
Example 03:
```javascript
const one = {
  fruit: '🥝',
  energy: '255kJ',
};

const two = {
  energy: '255kJ',
  fruit: '🥝',
};

// Using JavaScript
JSON.stringify(one) === JSON.stringify(two); // false
```
#### Q. How to remove array element based on object property?
```javascript
var myArray = [
    {field: 'id', operator: 'eq'}, 
    {field: 'cStatus', operator: 'eq'}, 
    {field: 'money', operator: 'eq'}
];

myArray = myArray.filter(function( obj ) {
    return obj.field !== 'money';
});

Console.log(myArray); 
```
Output
```
myArray = [
    {field: "id", operator: "eq"}
    {field: "cStatus", operator: "eq"}
]
```
#### Q. Predict the output of the following JavaScript code?
```javascript
console.log(+'meow'); // Output: NaN
```
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
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

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
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

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
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

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
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

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
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

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
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

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
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

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
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

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
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

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
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

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

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

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
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What will be the output of the following code?

```javascript
var output = (function(x) {
  delete x;
  return x;
})(0);

console.log(output);
```


The code above will output `0` as output. `delete` operator is used to delete a property from an object. Here `x` is not an object it's **local variable**. `delete` operator doesn't affect local variables.


#### Q. What will be the output of the following code?

```javascript
var x = 1;
var output = (function() {
  delete x;
  return x;
})();

console.log(output);
```

The code above will output `1` as output. `delete` operator is used to delete a property from an object. Here `x` is not an object it's **global variable** of type `number`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What will be the output of the following code?

```javascript
var x = { foo : 1};
var output = (function() {
  delete x.foo;
  return x.foo;
})();

console.log(output);
```


The code above will output `undefined` as output. `delete` operator is used to delete a property from an object. Here `x` is an object which has foo as a property and from a self-invoking function, we are deleting the `foo` property of object `x` and after deletion, we are trying to reference deleted property `foo` which result `undefined`.


#### Q. What will be the output of the following code?

```javascript
var Employee = {
  company: 'xyz'
}
var emp1 = Object.create(Employee);
delete emp1.company
console.log(emp1.company);
```

The code above will output `xyz` as output. Here `emp1` object got company as **prototype** property. delete operator doesn't delete prototype property.

`emp1` object doesn't have **company** as its own property. you can test it `console.log(emp1.hasOwnProperty('company')); //output : false` However, we can delete company property directly from `Employee` object using `delete Employee.company` or we can also delete from `emp1` object using `__proto__` property `delete emp1.__proto__.company`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What will be the output of the following code?

```javascript
var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
delete trees[3];
console.log(trees.length);
```

The code above will output `5` as output. When we used `delete` operator for deleting an array element then, the array length is not affected by this. This holds even if you deleted all elements of an array using `delete` operator.

So when delete operator removes an array element that deleted element is no longer present in the array. In place of value at deleted index `undefined x 1` in **chrome** and `undefined` is placed at the index. If you do `console.log(trees)` output `["xyz", "xxxx", "test", undefined × 1, "apple"]` in Chrome and in Firefox `["xyz", "xxxx", "test", undefined, "apple"]`.


#### Q. What will be the output of the following code?

```javascript
var bar = true;
console.log(bar + 0);   
console.log(bar + "xyz");  
console.log(bar + true);  
console.log(bar + false);
```

The code above will output `1, "truexyz", 2, 1` as output. Here's a general guideline  for the plus operator:
  - Number + Number  -> Addition
  - Boolean + Number -> Addition
  - Boolean + Boolean -> Addition
  - Number + String  -> Concatenation
  - String + Boolean -> Concatenation
  - String + String  -> Concatenation
  
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What will be the output of the following code?

```javascript
var z = 1, y = z = typeof y;
console.log(y);
```

The code above will print string `"undefined"` as output. According to associativity rule operator with the same precedence are processed based on their associativity property of operator. Here associativity of the assignment operator is `Right to Left` so first `typeof y` will evaluate first which is string `"undefined"` and assigned to `z` and then `y` would be assigned the value of z. The overall sequence will look like that: 

```javascript
var z;
z = 1;
var y;
z = typeof y;
y = z;
```

#### Q. What will be the output of the following code?

```javascript
// NFE (Named Function Expression)
var foo = function bar() { return 12; };
typeof bar();
```


The output will be `Reference Error`. To fix the bug we can try to rewrite the code a little bit: 

**Sample 1**

```javascript
var bar = function() { return 12; };
typeof bar();
```

or

**Sample 2**

```javascript
function bar() { return 12; };
typeof bar();
```

The function definition can have only one reference variable as a function name, In **sample 1** `bar` is reference variable which is pointing to `anonymous function` and in **sample 2** we have function statement and `bar` is the function name.

```javascript
var foo = function bar() {
  // foo is visible here
  // bar is visible here
  console.log(typeof bar()); // Works here :)
};
// foo is visible here
// bar is undefined here
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the output of the following?

```javascript
bar();
(function abc(){console.log('something')})();
function bar(){console.log('bar got called')};
```


The output will be :
``` 
bar got called
something
```
Since the function is called first and defined during parse time the JS engine will try to find any possible parse time definitions and start the execution loop which will mean function is called first even if the definition is post another function.

#### Q. What will be the output of the following code?

```javascript
var salary = "1000$";

(function () {
  console.log("Original salary was " + salary);

  var salary = "5000$";

  console.log("My New Salary " + salary);
})();
```

The code above will output: `undefined, 5000$` because of hoisting. In the code presented above, you might be expecting `salary` to retain it values from outer scope until the point that `salary` was re-declared in the inner scope. But due to `hoisting` salary value was `undefined` instead. To understand it better have a look of the following code, here `salary` variable is hoisted and declared at the top in function scope. When we print its value using `console.log` the result is `undefined`. Afterwards the variable is redeclared and the new value `"5000$"` is assigned to it.

```javascript
var salary = "1000$";

(function () {
  var salary = undefined;
  console.log("Original salary was " + salary);

  salary = "5000$";

  console.log("My New Salary " + salary);
})();
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of the following code?

```javascript
function User(name) {
  this.name = name || "JsGeeks";
}

var person = new User("xyz")["location"] = "USA";
console.log(person);
```

The output of above code would be `"USA"`. Here `new User("xyz")` creates a brand new object and created property `location` on that and `USA` has been assigned to object property location and that has been referenced by the person.

Let say `new User("xyz")` created a object called `foo`. The value `"USA"` will be assigned to `foo["location"]`, but according to [ECMAScript Specification](http://www.ecma-international.org/ecma-262/6.0/#sec-assignment-operators-runtime-semantics-evaluation) , pt 12.14.4 the assignment will itself return the rightmost value: in our case it's `"USA"`.
 Then it will be assigned to person. 
 
 To better understand what's going on here, try to execute this code in console, line by line:
 ```javascript
function User(name) {
  this.name = name || "JsGeeks";
}

var person;
var foo = new User("xyz");
foo["location"] = "USA";
// the console will show you that the result of this is "USA"
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
var strA = "hi there";
var strB = strA;
strB="bye there!";
console.log (strA)
```

The output will `'hi there'` because we're dealing with strings here. Strings are 
passed by value, that is, copied. 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?
```javascript
var objA = {prop1: 42};
var objB = objA; 
objB.prop1 = 90;
console.log(objA) 
```
The output will `{prop1: 90}` because we're dealing with objects here. Objects are 
passed by reference, that is, `objA` and `objB` point to the same object in memory. 

#### Q. What would be the output of following code?

```javascript
var objA = {prop1: 42};
var objB = objA;
objB = {};
console.log(objA)
```

The output will `{prop1: 42}`. 

When we assign `objA` to `objB`, the `objB` variable will point
to the same object as the `objB` variable.

However, when we reassign `objB` to an empty object, we simply change where `objB` variable references to.
This doesn't affect where `objA` variable references to. 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
var arrA = [0,1,2,3,4,5];
var arrB = arrA;
arrB[0]=42;
console.log(arrA)
```

The output will be `[42,1,2,3,4,5]`. 

Arrays are object in JavaScript and they are passed and assigned by reference. This is why
both `arrA` and `arrB` point to the same array `[0,1,2,3,4,5]`. That's why changing the first
element of the `arrB` will also modify `arrA`: it's the same array in the memory.

#### Q. What would be the output of following code?
```javascript
var arrA = [0,1,2,3,4,5];
var arrB = arrA.slice();
arrB[0]=42;
console.log(arrA)
```

The output will be `[0,1,2,3,4,5]`. 

The `slice` function copies all the elements of the array returning the new array. That's why
`arrA` and `arrB` reference two completely different arrays. 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
var arrA = [{prop1: "value of array A!!"},  {someProp: "also value of array A!"}, 3,4,5];
var arrB = arrA;
arrB[0].prop1=42;
console.log(arrA);
```
The output will be `[{prop1: 42},  {someProp: "also value of array A!"}, 3,4,5]`. 

Arrays are object in JS, so both varaibles arrA and arrB point to the same array. Changing
`arrB[0]` is the same as changing `arrA[0]`


#### Q. What would be the output of following code?

```javascript
var arrA = [{prop1: "value of array A!!"}, {someProp: "also value of array A!"},3,4,5];
var arrB = arrA.slice();
arrB[0].prop1=42;
arrB[3] = 20;
console.log(arrA);
```

The output will be `[{prop1: 42},  {someProp: "also value of array A!"}, 3,4,5]`. 

The `slice` function copies all the elements of the array returning the new array. However,
it doesn't do deep copying. Instead it does shallow copying. You can imagine slice implemented like this: 
 
 ```javascript
function slice(arr) {
    var result = [];
    for (i = 0; i< arr.length; i++) {
        result.push(arr[i]);
    }
    return result; 
}
```

Look at the line with `result.push(arr[i])`. If `arr[i]` happens to be a number or string, 
it will be passed by value, in other words, copied. If `arr[i]` is an object, it will be passed by reference. 

In case of our array `arr[0]` is an object `{prop1: "value of array A!!"}`. Only the reference
to this object will be copied. This effectively means that arrays arrA and arrB share first
two elements. 

This is why changing the property of `arrB[0]` in `arrB` will also change the `arrA[0]`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. console.log(employeeId);

1.  Some Value
2.  Undefined 
3.  Type Error
4.  ReferenceError: employeeId is not defined 

*Answer:* 4) ReferenceError: employeeId is not defined 

#### Q. What would be the output of following code?

```javascript
console.log(employeeId);
var employeeId = '19000';
```

1.  Some Value
2.  undefined 
3.  Type Error
4.  ReferenceError: employeeId is not defined 

*Answer:* 2) undefined 

#### Q. What would be the output of following code?

```javascript
var employeeId = '1234abe';
(function(){
	console.log(employeeId);
	var employeeId = '122345';
})();
```

1.  '122345'
2.  undefined 
3.  Type Error
4.  ReferenceError: employeeId is not defined 

*Answer:* 2) undefined 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
var employeeId = '1234abe';
(function() {
	console.log(employeeId);
	var employeeId = '122345';
	(function() {
		var employeeId = 'abc1234';
	}());
}());
```

1.  '122345'
2.  undefined 
3.  '1234abe'
4.  ReferenceError: employeeId is not defined 

*Answer:* 2) undefined 

#### Q. What would be the output of following code?

```javascript
(function() {
	console.log(typeof displayFunc);
	var displayFunc = function(){
		console.log("Hi I am inside displayFunc");
	}
}());
```

1.  undefined
2.  function 
3.  'Hi I am inside displayFunc'
4.  ReferenceError: displayFunc is not defined 

*Answer:* 1) undefined 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
var employeeId = 'abc123';
function foo(){
	employeeId = '123bcd';
	return;
}
foo();
console.log(employeeId);
```

1.  undefined
2.  '123bcd' 
3.  'abc123'
4.  ReferenceError: employeeId is not defined 

*Answer:* 2) '123bcd' 

#### Q. What would be the output of following code?

```javascript
var employeeId = 'abc123';

function foo() {
	employeeId = '123bcd';
	return;

	function employeeId() {}
}
foo();
console.log(employeeId);
```

1.  undefined
2.  '123bcd' 
3.  'abc123'
4.  ReferenceError: employeeId is not defined 

*Answer:* 3) 'abc123' 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
var employeeId = 'abc123';

function foo() {
	employeeId();
	return;

	function employeeId() {
		console.log(typeof employeeId);
	}
}
foo();
```

1.  undefined
2.  function 
3.  string
4.  ReferenceError: employeeId is not defined 

*Answer:* 2) 'function'

#### Q. What would be the output of following code?

```javascript
function foo() {
	employeeId();
	var product = 'Car'; 
	return;

	function employeeId() {
		console.log(product);
	}
}
foo();
```

1.  undefined
2.  Type Error 
3.  'Car'
4.  ReferenceError: product is not defined 

*Answer:* 1) undefined

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
(function foo() {
	bar();

	function bar() {
		abc();
		console.log(typeof abc);
	}

	function abc() {
		console.log(typeof bar);
	}
}());
```

1.  undefined undefined
2.  Type Error 
3.  function function
4.  ReferenceError: bar is not defined 

*Answer:* 3) function function

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
(function() {
	'use strict';

	var person = {
		name: 'John'
	};
	person.salary = '10000$';
	person['country'] = 'USA';

	Object.defineProperty(person, 'phoneNo', {
		value: '8888888888',
		enumerable: true
	})

	console.log(Object.keys(person)); 
})();
```
1.  Type Error
2.  undefined 
3.  ["name", "salary", "country", "phoneNo"]
4.  ["name", "salary", "country"]
	
*Answer:* 3) ["name", "salary", "country", "phoneNo"]

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
(function() {
	'use strict';

	var person = {
		name: 'John'
	};
	person.salary = '10000$';
	person['country'] = 'USA';

	Object.defineProperty(person, 'phoneNo', {
		value: '8888888888',
		enumerable: false
	})

	console.log(Object.keys(person)); 
})();
```
1.  Type Error
2.  undefined 
3.  ["name", "salary", "country", "phoneNo"]
4.  ["name", "salary", "country"]
	
*Answer:* 4) ["name", "salary", "country"]

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
(function() {
	var objA = {
		foo: 'foo',
		bar: 'bar'
	};
	var objB = {
		foo: 'foo',
		bar: 'bar'
	};
	console.log(objA == objB);
	console.log(objA === objB);
}());
```
1.  false true
2.  false false 
3.  true false
4.  true true
	
*Answer:* 2) false false

#### Q. What would be the output of following code ?

```javascript
(function() {
	var objA = new Object({foo: "foo"});
	var objB = new Object({foo: "foo"});
	console.log(objA == objB);
	console.log(objA === objB);
}());
```
1.  false true
2.  false false 
3.  true false
4.  true true
	
*Answer:* 2) false false

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code ?

```javascript
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = Object.create({
		foo: 'foo'
	});
	console.log(objA == objB);
	console.log(objA === objB);
}());
```
1.  false true
2.  false false 
3.  true false
4.  true true
	
*Answer:* 2) false false

#### Q. What would be the output of following code ?

```javascript
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = Object.create(objA);
	console.log(objA == objB);
	console.log(objA === objB);
}());
```
1.  false true
2.  false false 
3.  true false
4.  true true
	
*Answer:* 2) false false

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code ?

```javascript
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = Object.create(objA);
	console.log(objA.toString() == objB.toString());
	console.log(objA.toString() === objB.toString());
}());
```
1.  false true
2.  false false 
3.  true false
4.  true true
	
*Answer:* 4) true true

#### Q. What would be the output of following code ?

```javascript
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = objA;
	console.log(objA == objB);
	console.log(objA === objB);
	console.log(objA.toString() == objB.toString());
	console.log(objA.toString() === objB.toString());
}());
```
1.  true true true false
2.  true false true true 
3.  true true true true
4.  true true false false
	
*Answer:* 3) true true true true

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code ?

```javascript
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = objA;
	objB.foo = 'bar';
	console.log(objA.foo);
	console.log(objB.foo);
}());
```
1.  foo bar
2.  bar bar 
3.  foo foo
4.  bar foo
	
*Answer:* 2) bar bar

#### Q. What would be the output of following code ?

```javascript
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = objA;
	objB.foo = 'bar';

	delete objA.foo;
	console.log(objA.foo);
	console.log(objB.foo);
}());
```
1.  foo bar
2.  bar bar 
3.  foo foo
4.  bar foo
	
*Answer:* 3) foo foo

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code ?

```javascript
(function() {
	var objA = {
		foo: 'foo'
	};
	var objB = objA;
	objB.foo = 'bar';

	delete objA.foo;
	console.log(objA.foo);
	console.log(objB.foo);
}());
```
1.  foo bar
2.  undefined undefined 
3.  foo foo
4.  undefined bar
	
*Answer:* 2) undefined undefined 


#### Q. What would be the output of following code?

```javascript
(function() {
	var array = new Array('100');
	console.log(array);
	console.log(array.length);
}());
```

1.  undefined undefined
2.  [undefined × 100] 100 
3.  ["100"] 1
4.  ReferenceError: array is not defined 

*Answer:* 3) ["100"] 1

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
(function() {
	var array1 = [];
	var array2 = new Array(100);
	var array3 = new Array(['1',2,'3',4,5.6]);
	console.log(array1);
	console.log(array2);
	console.log(array3);
	console.log(array3.length);
}());
```

1.  [] [] [Array[5]] 1
2.  [] [undefined × 100] Array[5] 1
3.  [] [] ['1',2,'3',4,5.6] 5
4.  [] [] [Array[5]] 5 

*Answer:* 1) [] [] [Array[5]] 1

#### Q. What would be the output of following code?

```javascript
(function () {
  var array = new Array('a', 'b', 'c', 'd', 'e');
  array[10] = 'f';
  delete array[10];
  console.log(array.length);
}());
```

1.  11
2.  5
3.  6
4.  undefined

*Answer:* 1) 11

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
(function(){
	var animal = ['cow','horse'];
		animal.push('cat');
		animal.push('dog','rat','goat');
		console.log(animal.length);
})();
```

1.  4
2.  5
3.  6
4.  undefined

*Answer:* 3) 6

#### Q. What would be the output of following code?

```javascript
(function(){
	var animal = ['cow','horse'];
		animal.push('cat');
		animal.unshift('dog','rat','goat');
		console.log(animal);
})();
```

1.  [ 'dog', 'rat', 'goat', 'cow', 'horse', 'cat' ]
2.  [ 'cow', 'horse', 'cat', 'dog', 'rat', 'goat' ]
3.  Type Error
4.  undefined

*Answer:* 1) [ 'dog', 'rat', 'goat', 'cow', 'horse', 'cat' ]

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
(function(){
	var array = [1,2,3,4,5];
	console.log(array.indexOf(2));
	console.log([{name: 'John'},{name : 'John'}].indexOf({name:'John'}));
	console.log([[1],[2],[3],[4]].indexOf([3]));
	console.log("abcdefgh".indexOf('e'));
})();
```

1.  1 -1 -1 4
2.  1 0 -1 4
3.  1 -1 -1 -1
4.  1 undefined -1 4

*Answer:* 1) 1 -1 -1 4

#### Q. What would be the output of following code?

```javascript
(function(){
	var array = [1,2,3,4,5,1,2,3,4,5,6];
	console.log(array.indexOf(2));
	console.log(array.indexOf(2,3));
	console.log(array.indexOf(2,10));
})();
```

1.  1 -1 -1
2.  1 6 -1
3.  1 1 -1 
4.  1 undefined undefined

*Answer:* 2) 1 6 -1

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
(function(){
	var numbers = [2,3,4,8,9,11,13,12,16];
	var even = numbers.filter(function(element, index){
		return element % 2 === 0; 
	});
	console.log(even);

	var containsDivisibleby3 = numbers.some(function(element, index){
		return element % 3 === 0;
	});

	console.log(containsDivisibleby3);	
})();
```

1.  [ 2, 4, 8, 12, 16 ] [ 0, 3, 0, 0, 9, 0, 12]
2.  [ 2, 4, 8, 12, 16 ] [ 3, 9, 12]
3.  [ 2, 4, 8, 12, 16 ] true 
4.  [ 2, 4, 8, 12, 16 ] false

*Answer:* 3) [ 2, 4, 8, 12, 16 ] true 

#### Q. What would be the output of following code?

```javascript
(function(){
	var containers = [2,0,false,"", '12', true];
	var containers = containers.filter(Boolean);
	console.log(containers);
	var containers = containers.filter(Number);
	console.log(containers);
	var containers = containers.filter(String);
	console.log(containers);
	var containers = containers.filter(Object);
	console.log(containers);		
})();
```

1.	[ 2, '12', true ]
	[ 2, '12', true ]
	[ 2, '12', true ]
	[ 2, '12', true ]
2.	[false, true]
	[ 2 ]
	['12']
	[ ]
3.	[2,0,false,"", '12', true]
	[2,0,false,"", '12', true]
	[2,0,false,"", '12', true]
	[2,0,false,"", '12', true]
4. [ 2, '12', true ]
	[ 2, '12', true, false ]
	[ 2, '12', true,false ]
	[ 2, '12', true,false]


*Answer:* 1) [ 2, '12', true ]
			 [ 2, '12', true ]
			 [ 2, '12', true ]
			 [ 2, '12', true ]

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
(function(){
	var list = ['foo','bar','john','ritz'];
	    console.log(list.slice(1));	
	    console.log(list.slice(1,3));
	    console.log(list.slice());
	    console.log(list.slice(2,2));
	    console.log(list);				
})();
```

1. [ 'bar', 'john', 'ritz' ]
   [ 'bar', 'john' ]
   [ 'foo', 'bar', 'john', 'ritz' ]
   []
   [ 'foo', 'bar', 'john', 'ritz' ]
2. [ 'bar', 'john', 'ritz' ]
   [ 'bar', 'john','ritz ]
   [ 'foo', 'bar', 'john', 'ritz' ]
   []
   [ 'foo', 'bar', 'john', 'ritz' ]
3. [ 'john', 'ritz' ]
   [ 'bar', 'john' ]
   [ 'foo', 'bar', 'john', 'ritz' ]
   []
   [ 'foo', 'bar', 'john', 'ritz' ]
4. [ 'foo' ]
   [ 'bar', 'john' ]
   [ 'foo', 'bar', 'john', 'ritz' ]
   []
   [ 'foo', 'bar', 'john', 'ritz' ]

*Answer:* 1) [ 'bar', 'john', 'ritz' ]
		 	 [ 'bar', 'john' ]
           [ 'foo', 'bar', 'john', 'ritz' ]
           []
           [ 'foo', 'bar', 'john', 'ritz' ]		

#### Q. What would be the output of following code?

```javascript
(function(){
	var list = ['foo','bar','john'];
	    console.log(list.splice(1));		
	    console.log(list.splice(1,2));
	    console.log(list);			
})();
```

1.  [ 'bar', 'john' ] [] [ 'foo' ]
2.  [ 'bar', 'john' ] [] [ 'bar', 'john' ]
3.  [ 'bar', 'john' ] [ 'bar', 'john' ] [ 'bar', 'john' ]
4.  [ 'bar', 'john' ] [] []

*Answer:* 1.  [ 'bar', 'john' ] [] [ 'foo' ] 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
(function(){
	var arrayNumb = [2, 8, 15, 16, 23, 42];
	arrayNumb.sort();
	console.log(arrayNumb);
})();
```

1.  [2, 8, 15, 16, 23, 42]
2.  [42, 23, 26, 15, 8, 2]
3.  [ 15, 16, 2, 23, 42, 8 ]
4.  [ 2, 8, 15, 16, 23, 42 ]

*Answer:* 3.  [ 15, 16, 2, 23, 42, 8 ]

#### Q. What would be the output of following code?

```javascript
function funcA(){
	console.log("funcA ", this);
	(function innerFuncA1(){
		console.log("innerFunc1", this);
		(function innerFunA11(){
			console.log("innerFunA11", this);
		})();
	})();
}
	
console.log(funcA());
```

1.  funcA  Window {...} 
    innerFunc1 Window {...} 
    innerFunA11 Window {...}
2.  undefined 
3.  Type Error
4.  ReferenceError: this is not defined 
	
*Answer:* 1) 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
var obj = {
	message: "Hello",
	innerMessage: !(function() {
		console.log(this.message);
	})()
};
	
console.log(obj.innerMessage);
```

1.  ReferenceError: this.message is not defined 
2.  undefined 
3.  Type Error
4.  undefined true
	
*Answer:* 4) undefined true

#### Q. What would be the output of following code?

```javascript
var obj = {
	message: "Hello",
	innerMessage: function() {
		return this.message;
	}
};
	
console.log(obj.innerMessage());
```

1.  Hello 
2.  undefined 
3.  Type Error
4.  ReferenceError: this.message is not defined
	
*Answer:* 1) Hello

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
var obj = {
  message: 'Hello',
  innerMessage: function () {
    (function () {
      console.log(this.message);
    }());
  }
};
console.log(obj.innerMessage());
```

1.  Type Error 
2.  Hello 
3.  undefined
4.  ReferenceError: this.message is not defined
	
*Answer:* 3) undefined
	
#### Q. What would be the output of following code?

```javascript
var obj = {
  message: 'Hello',
  innerMessage: function () {
  	var self = this;
    (function () {
      console.log(self.message);
    }());
  }
};
console.log(obj.innerMessage());
```

1.  Type Error 
2.  'Hello' 
3.  undefined
4.  ReferenceError: self.message is not defined
	
*Answer:* 2) 'Hello'

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
function myFunc(){
	console.log(this.message);
}
myFunc.message = "Hi John";
	
console.log(myFunc());
```

1.  Type Error 
2.  'Hi John' 
3.  undefined
4.  ReferenceError: this.message is not defined
	
*Answer:* 3) undefined

#### Q. What would be the output of following code?

```javascript
function myFunc(){
	console.log(myFunc.message);
}
myFunc.message = "Hi John";
	
console.log(myFunc());
```

1.  Type Error 
2.  'Hi John' 
3.  undefined
4.  ReferenceError: this.message is not defined
	
*Answer:* 2) 'Hi John'

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
function myFunc() {
  myFunc.message = 'Hi John';
  console.log(myFunc.message);
}
console.log(myFunc());
```

1.  Type Error 
2.  'Hi John' 
3.  undefined
4.  ReferenceError: this.message is not defined
	
*Answer:* 2) 'Hi John'

#### Q. What would be the output of following code?

```javascript
function myFunc(param1,param2) {
  console.log(myFunc.length);
}
console.log(myFunc());
console.log(myFunc("a","b"));
console.log(myFunc("a","b","c","d"));
```

1.  2 2 2 
2.  0 2 4
3.  undefined
4.  ReferenceError
	
*Answer:* a) 2 2 2 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
function myFunc() {
  console.log(arguments.length);
}
console.log(myFunc());
console.log(myFunc("a","b"));
console.log(myFunc("a","b","c","d"));
```

1.  2 2 2 
2.  0 2 4
3.  undefined
4.  ReferenceError
	
*Answer:* 2) 0 2 4 

#### Q. What would be the output of following code?

```javascript
function Person(name, age){
	this.name = name || "John";
	this.age = age || 24;
	this.displayName = function(){
		console.log(this.name);
	}
}

Person.name = "John";
Person.displayName = function(){
	console.log(this.name);
}

var person1 = new Person('John');
	person1.displayName();
	Person.displayName();
```

1.  John Person
2.  John John
3.  John undefined
4.  John John
	
*Answer:* 1) John Person 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
function passWordMngr() {
	var password = '12345678';
	this.userName = 'John';
	return {
		pwd: password
	};
}
// Block End
var userInfo = passWordMngr();
console.log(userInfo.pwd);
console.log(userInfo.userName);
```

1.  12345678 Window
2.  12345678 John
3.  12345678 undefined
4.  undefined undefined
	
*Answer:* 3) 12345678 undefined 

#### Q. What would be the output of following code?

```javascript
var employeeId = 'aq123';
function Employee() {
  this.employeeId = 'bq1uy';
}
console.log(Employee.employeeId);
```

1.  Reference Error
2.  aq123
3.  bq1uy
4.  undefined
	
*Answer:* 4) undefined 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
var employeeId = 'aq123';

function Employee() {
	this.employeeId = 'bq1uy';
}
console.log(new Employee().employeeId);
Employee.prototype.employeeId = 'kj182';
Employee.prototype.JobId = '1BJKSJ';
console.log(new Employee().JobId);
console.log(new Employee().employeeId);
```

1.  bq1uy 1BJKSJ bq1uy undefined
2.  bq1uy 1BJKSJ bq1uy
3.  bq1uy 1BJKSJ kj182
4.  undefined 1BJKSJ kj182
	
*Answer:* 2) bq1uy 1BJKSJ bq1uy 

#### Q. What would be the output of following code?

```javascript
var employeeId = 'aq123';
(function Employee() {
	try {
		throw 'foo123';
	} catch (employeeId) {
		console.log(employeeId);
	}
	console.log(employeeId);
}());
```

1.  foo123 aq123
2.  foo123 foo123
3.  aq123 aq123
4.  foo123 undefined 
	
*Answer:* 1) foo123 aq123 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
(function() {
	var greet = 'Hello World';
	var toGreet = [].filter.call(greet, function(element, index) {
		return index > 5;
	});
	console.log(toGreet);
}());
```

1.  Hello World
2.  undefined
3.  World
4.  [ 'W', 'o', 'r', 'l', 'd' ] 
	
*Answer:* 4) [ 'W', 'o', 'r', 'l', 'd' ]  

#### Q. What would be the output of following code?

```javascript
(function() {
	var fooAccount = {
		name: 'John',
		amount: 4000,
		deductAmount: function(amount) {
			this.amount -= amount;
			return 'Total amount left in account: ' + this.amount;
		}
	};
	var barAccount = {
		name: 'John',
		amount: 6000
	};
	var withdrawAmountBy = function(totalAmount) {
		return fooAccount.deductAmount.bind(barAccount, totalAmount);
	};
	console.log(withdrawAmountBy(400)());
	console.log(withdrawAmountBy(300)());
}());
```

1. Total amount left in account: 5600 Total amount left in account: 5300
2.  undefined undefined
3.  Total amount left in account: 3600 Total amount left in account: 3300
4.  Total amount left in account: 5600 Total amount left in account: 5600
	
*Answer:* 1) Total amount left in account: 5600 Total amount left in account: 5300 

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
(function() {
	var fooAccount = {
		name: 'John',
		amount: 4000,
		deductAmount: function(amount) {
			this.amount -= amount;
			return this.amount;
		}
	};
	var barAccount = {
		name: 'John',
		amount: 6000
	};
	var withdrawAmountBy = function(totalAmount) {
		return fooAccount.deductAmount.apply(barAccount, [totalAmount]);
	};
	console.log(withdrawAmountBy(400));
	console.log(withdrawAmountBy(300));
	console.log(withdrawAmountBy(200));
}());
```

1. 5600 5300 5100
2. 3600 3300 3100
3. 5600 3300 5100
4. undefined undefined undefined
	
*Answer:* 1) 5600 5300 5100

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
(function() {
	var fooAccount = {
		name: 'John',
		amount: 6000,
		deductAmount: function(amount) {
			this.amount -= amount;
			return this.amount;
		}
	};
	var barAccount = {
		name: 'John',
		amount: 4000
	};
	var withdrawAmountBy = function(totalAmount) {
		return fooAccount.deductAmount.call(barAccount, totalAmount);
	};
	console.log(withdrawAmountBy(400));
	console.log(withdrawAmountBy(300));
	console.log(withdrawAmountBy(200));
}());
```

1. 5600 5300 5100
2. 3600 3300 3100
3. 5600 3300 5100
4. undefined undefined undefined
	
*Answer:* 2) 3600 3300 3100

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
(function greetNewCustomer() {
	console.log('Hello ' + this.name);
}.bind({
	name: 'John'
})());
```

1. Hello John
2. Reference Error
3. Window
4. undefined
	
*Answer:* 1) Hello John

#### Q. What would be the output of following code ?

```javascript
function getDataFromServer(apiUrl){
    var name = "John";
	return {
		then : function(fn){
			fn(name);
		}
	}
}

getDataFromServer('www.google.com').then(function(name){
	console.log(name);
});

```

1. John
2. undefined
3. Reference Error
4. fn is not defined
	
*Answer:* 1) John

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
(function(){
	var arrayNumb = [2, 8, 15, 16, 23, 42];
	Array.prototype.sort = function(a,b){
		return a - b;
	};
	arrayNumb.sort();
	console.log(arrayNumb);
})();

(function(){
	var numberArray = [2, 8, 15, 16, 23, 42];
	numberArray.sort(function(a,b){
		if(a == b){
			return 0;
		}else{
			return a < b ? -1 : 1;
		}
	});
	console.log(numberArray);
})();

(function(){
	var numberArray = [2, 8, 15, 16, 23, 42];
	numberArray.sort(function(a,b){
		return a-b;
	});
	console.log(numberArray);
})();
```

1. [ 2, 8, 15, 16, 23, 42 ]
   [ 2, 8, 15, 16, 23, 42 ]
   [ 2, 8, 15, 16, 23, 42 ]
2. undefined undefined undefined
3. [42, 23, 16, 15, 8, 2]
   [42, 23, 16, 15, 8, 2]
   [42, 23, 16, 15, 8, 2]
4. Reference Error
	
*Answer:* 1) [ 2, 8, 15, 16, 23, 42 ]
			 [ 2, 8, 15, 16, 23, 42 ]
			 [ 2, 8, 15, 16, 23, 42 ]
			

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
(function(){
	function sayHello(){
		var name = "Hi John";
		return 
		{
			fullName: name
		}
	}
	console.log(sayHello().fullName);
})();
```

1. Hi John
2. undefined
3. Reference Error
4. Uncaught TypeError: Cannot read property 'fullName' of undefined
	
*Answer:* 4) Uncaught TypeError: Cannot read property 'fullName' of undefined

#### Q. What would be the output of following code?

```javascript
function getNumber(){
	return (2,4,5);
}

var numb = getNumber();
console.log(numb);
```

1. 5
2. undefined
3. 2
4. (2,4,5)
	
*Answer:* 1) 5

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
function getNumber(){
	return;
}

var numb = getNumber();
console.log(numb);
```

1. null
2. undefined
3. ""
4. 0
	
*Answer:* 2) undefined

#### Q. What would be the output of following code?

```javascript
function mul(x){
	return function(y){
		return [x*y, function(z){
			return x*y + z;
		}];
	}
}

console.log(mul(2)(3)[0]);
console.log(mul(2)(3)[1](4));
```

1. 6, 10
2. undefined undefined
3. Reference Error
4. 10, 6
	
*Answer:* 1) 6, 10

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the output of following code?

```javascript
function mul(x) {
	return function(y) {
		return {
			result: x * y,
			sum: function(z) {
				return x * y + z;
			}
		};
	};
}
console.log(mul(2)(3).result);
console.log(mul(2)(3).sum(4));
```

1. 6, 10
2. undefined undefined
3. Reference Error
4. 10, 6
	
*Answer:* 1) 6, 10

#### Q. What would be the output of following code?

```javascript
function mul(x) {
	return function(y) {
		return function(z) {
			return function(w) {
				return function(p) {
					return x * y * z * w * p;
				};
			};
		};
	};
}
console.log(mul(2)(3)(4)(5)(6));
```

1. 720
2. undefined
3. Reference Error
4. Type Error
	
*Answer:* 1) 720

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the value of `foo`?
```javascript
var foo = 10 + '20';
```

*Answer:* `'1020'`, because of type coercion from Number to String

#### Q. How would you make this work?
```javascript
add(2, 5); // 7
add(2)(5); // 7
```

*Answer:* A general solution for any number of parameters
```javascript
'use strict';

let sum = (arr) => arr.reduce((a, b) => a + b);
let addGenerator = (numArgs, prevArgs) => {
  return function () {
    let totalArgs = prevArgs.concat(Array.from(arguments));
    if (totalArgs.length === numArgs) {
      return sum(totalArgs);
    }
    return addGenerator(numArgs, totalArgs);
  };
};

let add = addGenerator(2, []);

add(2, 5); // 7
add(2)(5); // 7
add()(2, 5); // 7
add()(2)(5); // 7
add()()(2)(5); // 7
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What value is returned from the following statement?
```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

*Answer:* It's actually a reverse method for a string - `'goh angasal a m\'i'`

#### Q. What is the value of `window.foo`?
```javascript
( window.foo || ( window.foo = "bar" ) );
```

*Answer:* Always `'bar'`

#### Q. What is the outcome of the two alerts below?
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

*Answer:*
- First: `Hello World`
- Second: Throws an exception, `ReferenceError: bar is not defined`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the value of `foo.length`?
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

*Answer:* `.push` is mutable - `2`

#### Q. What is the value of `foo.x`?
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

*Answer:* `undefined`. Rather, `bar.x` is `{n: 2}`.

`foo.x = foo = {n: 2}` is the same as `foo.x = (foo = {n: 2})`. It is because
a left term is first referenced and then a right term is evaluated when an
assignment is performed in JavaScript. When `foo.x` is referenced, it refers
to an original object, `{n: 1}`. So, when the result of the right term, `{n:
2}`, is evaluated, it will assigned to the original object, which is at the
moment referenced by `bar`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What does the following code print?*
```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
```

*Answer:* `one`, `three` and `two`. It's because `console.log('two');` will be
invoked in the next event loop.

#### Q. What would be the result of 1+2+'3'?
The output is going to be `33`. Since `1` and `2` are numeric values, the result of first two digits is going to be a numeric value `3`. The next digit is a string type value because of that the addition of numeric value `3` and string type value `3` is just going to be a concatenation value `33`.

#### Q. Write a script that returns the number of occurrences of character given a string as input?
```javascript
function countCharacters(str) {
  return str.replace(/ /g, '').toLowerCase().split('').reduce((arr, character) => {
    if (character in arr) {
      arr[character]++;
    } else {
      arr[character] = 1;
    }
    return arr;
  }, {});
}
console.log(countCharacters("the brown fox jumps over the lazy dog"));
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the value of `foo`?
```javascript
var foo = 10 + '20';
```

*Answer:* `'1020'`, because of type coercion from Number to String

#### Q. How would you make this work?
```javascript
add(2, 5); // 7
add(2)(5); // 7
```

*Answer:* A general solution for any number of parameters
```js
'use strict';

let sum = (arr) => arr.reduce((a, b) => a + b);
let addGenerator = (numArgs, prevArgs) => {
  return function () {
    let totalArgs = prevArgs.concat(Array.from(arguments));
    if (totalArgs.length === numArgs) {
      return sum(totalArgs);
    }
    return addGenerator(numArgs, totalArgs);
  };
};

let add = addGenerator(2, []);

add(2, 5); // 7
add(2)(5); // 7
add()(2, 5); // 7
add()(2)(5); // 7
add()()(2)(5); // 7
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What value is returned from the following statement?
```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

*Answer:* It's actually a reverse method for a string - `'goh angasal a m\'i'`

#### Q. What is the value of `window.foo`?
```javascript
( window.foo || ( window.foo = "bar" ) );
```

*Answer:* Always `'bar'`

#### Q. What is the outcome of the two alerts below?
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

*Answer:*
- First: `Hello World`
- Second: Throws an exception, `ReferenceError: bar is not defined`

#### Q. What is the value of `foo.length`?
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

*Answer:* `.push` is mutable - `2`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the value of `foo.x`?
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

*Answer:* `undefined`. Rather, `bar.x` is `{n: 2}`.

`foo.x = foo = {n: 2}` is the same as `foo.x = (foo = {n: 2})`. It is because
a left term is first referenced and then a right term is evaluated when an
assignment is performed in JavaScript. When `foo.x` is referenced, it refers
to an original object, `{n: 1}`. So, when the result of the right term, `{n:
2}`, is evaluated, it will assigned to the original object, which is at the
moment referenced by `bar`.

#### Q. What does the following code print?
```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
```

*Answer:* `one`, `three` and `two`. It's because `console.log('two');` will be
invoked in the next event loop.

#### Q. For which value of x the results of the following statements are not the same?
```javascript
//  if( x <= 100 ) {...}
if( !(x > 100) ) {...}
```
*Answer:* `NaN <= 100` is `false` and `NaN > 100` is also false, so if the value of `x` is `NaN`, the statements are not the same.

The same holds true for any value of x that being converted to Number, returns NaN, e.g.: `undefined`, `[1,2,5]`, `{a:22}`, etc.

#### Q. What is g value?
```javascript
f = g = 0;
(function () {
  try {
    f = function() {
      return f();
    };
    f();
  } catch (e) {
    return g++ && f();
  } finally {
    return ++g;
  }
  function f() { g += 5; return 0; }
}) ();
```
#### Q. What is g value?
```javascript
f = g = 0;
(function () {
  try {
    f = function() {
      return f();
    } && f();
  } catch (e) {
    return g++ && f();
  } finally {
    return ++g;
  }
  function f() { g += 5; return 0; }
}) ();
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What will be the output?
```javascript
function b(b) {
  return this.b && b(b)
}
b(b.bind(b))
```
#### Q. What will be the output?
```javascript
c = (c) => {
  return this.c && c(c)
}
c(c.bind(c))
```
#### Q. Predict the output of the following JavaScript code?
```javascript
var g = 0;
g = 1 && g++;
console.log(g);
```
#### Q. Predict the output of the following JavaScript code?
```javascript
!function(){}()
function(){}()
true && function(){}()
(function(){})()
function(){}
!function(){}
```
#### Q. What will expression return?
```javascript
var a = b = true, c = (a) => a;
(function a(a = c(b).a = c = () => a) { return a(); })()
```
#### Q. Predict the output of the following JavaScript code?
```javascript
var a = true;
(a = function () { return a })()
```
#### Q. What will be the output?
```javascript
var v = 0;
try {
  throw v = (function(c) { throw v = function(a){ return v; } })();
} catch (e) {
  console.log (e()());
}
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What will the following code output?
```javascript
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}
```
#### Q. What will be the output of the following code?
```javascript
var output = (function(x) {
  delete x;
  return x;
})(0);

console.log(output);
```
#### Q. What will be the output of the following code?
```javascript
var Employee = {
  company: 'xyz'
}
var emp1 = Object.create(Employee);
delete emp1.company
console.log(emp1.company);
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Make this work:

```javascript
duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]
```

```javascript
function duplicate(arr) {
  return arr.concat(arr);
}

duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]
```
#### Q. Fix the bug using ES5 only

```javascript
var arr = [10, 32, 65, 2];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 3000);
}
```
For ES6, you can just replace `var i` with `let i`. 

For ES5, you need to create a function scope like here:

```javascript 
var arr = [10, 32, 65, 2];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function(j) {
    return function () {
      console.log('The index of this number is: ' + j)
    };
  }(i), 3000);
}
```
#### Q. What will be the output of the following code?
```javascript

console.log(eval("10 + 10")); // 20

console.log(eval("5 + 5" + 10)); // 515

console.log(eval("5 + 5 + 5" + 10)); // 520

console.log(eval(10 + "5 + 5")); // 110

console.log(eval(10 + "5 + 5 + 5")); // 115
```
#### Q. What will be the output of the following code?
```javascript
var x = 10;
var y = 20;
var a = eval("x * y") + "<br>";
var b = eval("2 + 2") + "<br>";
var c = eval("x + 30") + "<br>";

let result = a + b + c;
console.log(result); // 200<br>4<br>40<br>
```
#### Q. What will be the output of the following code?
```javascript
// Example 01:
var prices = [12, 20, 18];
var newPriceArray = [...prices];
console.log(newPriceArray);

// Example 02:
var alphabets = ["A", ..."BCD", "E"];
console.log(alphabets);

// Example 03:
var prices = [12, 20, 18];
var maxPrice = Math.max(...prices);
console.log(maxPrice);

// Example 04:
var max = Math.max(..."43210");
console.log(max);

// Example 05:
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// Example 06:
const country = "USA";
console.log([...country]);
```
