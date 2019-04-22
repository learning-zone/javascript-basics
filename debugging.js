
//Example - 01
var result;
for (var i = 5; i > 0; i--) {
  result = result + i;
}
console.log(result);


//Example - 02
var a = 1.2;
console.log(typeof a);


//Example - 03
var x = 10;
if (x) {
  let x = 4;
}
console.log(x);


//Example - 05
console.log(0.1 + 0.2 == 0.3);


//Example - 06
console.log(1 + -"1" + 2);


//Example - 07
(function(x) {
  return (function(y) {
    console.log(x);
  })(10);
})(20);


//Example - 08
var a = 21;
var getAge = function() {
  console.log(a);
  var a = 20;
};
getAge();


//Example - 09
function f1() {
  num = 10;
}
f1();
window.num; //output?


//Example - 10
console.log(null + undefined);

//Example - 11
(function(){
	  var a = b = 3;
   })();

	console.log("value of a : "+a); // undefined
  console.log("value of b : "+b); // 3
  
  //Example - 12
  var y = 1;
  if (function f() {}) {
    y += typeof f;
  }
  console.log(y);

  //Example - 13
  var k = 1;
  if (1) {
    eval(function foo() {});
    k += typeof foo;
  }
  console.log(k); 

  //Example - 14
  var k = 1;
  if (1) {
    function foo(){};
    k += typeof foo;
  }
  console.log(k); // output 1function

  //Example - 15
  console.log(-1/0); // -Infinity
  console.log(1/0); // Infinity
  console.log(0/0); // NaN
  console.log(0/1); // 0


 //Example - 16

 var a = 4;
 var b = "5";
 var c = 6;

 console.log(a + b); //45
 console.log(a - b); //-1
 console.log(a * b); //20
 console.log(a / b); //0.8
 console.log(a % b); //4
 