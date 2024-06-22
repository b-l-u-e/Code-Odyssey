// prototypical inheritance - each instantiated object (from constructor function) inherits from prototype

// Every object has prototype

// Object.getPrototypeOf() - helps to get the prototype of an object in a standard and reliable way
const obj = {};
console.log(Object.getPrototypeOf(obj));


// Object.setPrototypeOf() - helps to set the prototype of an object in a standard and reliable way

const protoObj = {
  greet() {
    console.log("Hello");
  }
};

console.log(Object.getPrototypeOf(obj, protoObj));

console.log(Object.getPrototypeOf({}).constructor);
console.log(Object.getPrototypeOf([]).constructor);

class Student {
  constructor(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
  }

  displayInfo() {
    console.log(`ID: ${this.id}, Name: ${this.name}`);
  }
}

const student1 = new Student(1, "Reed");


console.log(Object.getPrototypeOf(student1).constructor)

// Note: classes === constructor functions
// classes - create objects with shared methods

/* 

The prototype chain is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects.
It is central to JavaScript's prototype-based inheritance model.


key components

1: Every object in JavaScript has a prototype.
2: The prototype is also an object.
3: The prototype object has a prototype of its own.
4: The prototype chain is a series of links between objects.
5: The last link is null, which indicates the end of the chain.


*/

