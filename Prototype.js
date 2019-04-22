
//Person Class
function Person(name, address) {
    this.name = name;
    this.address = address;
}

Person.prototype.sayHello = function() {  //Using prototype to add new function to class Person
   console.log(this.name + " says hello");
};


function init() {
  var PersonObj = new Person("Pradeep", "Bangalore"); //Person Object
  PersonObj.sayHello();
  console.log(PersonObj);
}

init(); //function call
