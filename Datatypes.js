
//JavaScript datatypes 

var isTrue = true; // Boolean datatype

var num = 42;    // Number datatype

var str = 'BMSIT'; // String datatype

var obj = new Object();  //Object datatype

var n; //null datatype

console.log(typeof(x)); //undefined datatype



//let vs var

//Example - 01
var num = 10;
function number(){
  var num = 20;
  return num;
}
console.log(number());
console.log("Value : "+num);


//Example - 02
let num1 = 10;
function number(){
 let num1 = 20;
  return num1;
}
console.log(number());
console.log("Value : " + num1);