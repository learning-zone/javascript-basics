class Employee  {
    name = "John";
    #age=35;
   constructor() {
    }

    #getAge() {
      return #age
    }
  
 }

  const employee = new Employee();
  employee.name = "Jack";
  employee.#age = 35; // Throws an error