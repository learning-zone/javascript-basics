
/*** 
 * The call() method calls a function with a given this value and arguments provided individually.
 * 
 * The apply() method calls a function with a given this value, and arguments provided as an array.
 * 
 * ***/



//case - 01 
var person = {
  firstName: "Pradeep",
  lastName: "Kumar",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
person.fullName(); 


//case - 02
var person = {
    firstName:"Pradeep",
    lastName: "Kumar",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var myObject = {
  firstName: "BMS Institute of Technology",
  lastName: "& Management"
};
person.fullName.call(myObject);  



//case - 03
var person = {
    firstName:"Pradeep",
    lastName: "Kumar",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var myObject = {
  firstName: "BMS Institute of Technology",
  lastName: "& Management"
};
person.fullName.apply(myObject);  