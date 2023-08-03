class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  who() {
    console.log("Im Person");
  }
}
class Employee extends Person {
  companyName;
  constructor(firstName, lastName, companyName) {
    super(firstName, lastName);
    this.companyName = companyName;
  }
  who() {
    console.log("Im Employee");
  }
}
const emplyee1 = new Employee("Yash", "Lathiya", "RKIT");
console.log(employee1);
s1.who();
