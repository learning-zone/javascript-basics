class Employee{
    name = "John";
    static #employerName="Github"

    static #getEmployerName() {
      return #employerName
    }
  }
  const employee = new Employee();
  employee.emp = "Jack";
  employee.#employerName = 35; // Throws an error