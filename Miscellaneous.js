//01. Working with console

var date = new Date();
document.body.innerHTML = "<h1>The date today is " + date + "</h1>";
"<h1>The date today is Tue May 08 2018 10:35:24 GMT+0530 (India Standard Time)</h1>"

//formated date
document.body.innerHTML = "<h1>The date today is " + date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear() + "</h1>";

//output:- The date today is 4/8/2018
//note:- Date() always display month less than one, because index start with 0. 

//formated date
document.body.innerHTML = "<h1>The date today is " + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + "</h1>";

//02.