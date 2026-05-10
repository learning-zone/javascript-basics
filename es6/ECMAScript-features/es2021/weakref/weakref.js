const myObject = new WeakRef({
    name: ‘Sudheer’,
    age: 34
    });
  console.log(myObject.deref()); //output: {name: “Sudheer”, age: 35}
  console.log(myObject.deref().name); //output: Sudheer