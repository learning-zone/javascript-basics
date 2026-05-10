const persons = [
    {name:"John", age:70},
    {name:"Kane", age:5},
    {name:"Jack", age:50},
    {name:"Rambo", age:15}
  ];

  // Callback function to categorize people based on age 
  function callbackFunc({ age }) {
    if(age >= 60) {
        return "senior";
    } else if(age > 17 && age < 60) {
        return "adult";
    }
    else {
        return "kid";
    }
  }

  //Object groupBy
  const result = Object.groupBy(persons, callbackFunc);

  console.log("Kids: ");
  for (let [x,y] of result.kid.entries()) {
    console.log(y.name + " " + y.age);
  }

  console.log("Adults: ");
  for (let [x,y] of result.adult.entries()) {
    console.log(y.name + " " + y.age);
  }

  console.log("Seniors: ");
  for (let [x,y] of result.senior.entries()) {
    console.log(y.name + " " + y.age);
  }

 //Map groupBy
  const result1 = Map.groupBy(persons, callbackFunc);

  console.log("Kids: ");
  for (let x of result1.get("kid")) {
    console.log(x.name + " " + x.age);
  }

  console.log("Adults: ");
  for (let x of result1.get("adult")) {
    console.log(x.name + " " + x.age);
  }

  console.log("Seniors: ");
  for (let x of result1.get("senior")) {
    console.log(x.name + " " + x.age);
  }