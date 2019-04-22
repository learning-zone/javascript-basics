
//Example - 01 : Using search()

var str = "BMS Institute of Technology & Management";

console.log(str.search(/Technology/i));


//Example - 02 : Using replace()

console.log( '12-30-45'.replace( /-/g, ":" ) );  // 12:30:45


//Example - 03 : Using match()

var re = /\w+\s/g;
var str = "BMS Institute of Technology & Management";
var arr = str.match(re);
console.log(arr);


//Example - 04 : Using exec() 

console.log(/BMS/.exec("BMS Institute of Technology & Management"));



/*
 NOTE: for more inforamtion please visit
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
 
 */