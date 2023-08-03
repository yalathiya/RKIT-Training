class Employee {
  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}
const emp1 = new Employee(1, "Yash", "Lathiya");
emp1.company = "RKIT";
const emp2 = new Employee(2, "Sachin", "Tendulkar");
console.log("Name : " + emp1.fullName());
console.log("Comapny : " + emp1.company);
console.log("Name : " + emp2.fullName());
