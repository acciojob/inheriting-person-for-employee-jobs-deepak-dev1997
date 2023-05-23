// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding greet() method to the Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Employee constructor function
function Employee(name, age, jobTitle) {
  // Call the Person constructor function with the given arguments
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit the Person prototype in the Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Set the constructor of Employee to Employee itself
Employee.prototype.constructor = Employee;

// Adding jobGreet() method to the Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Example usage:



// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
