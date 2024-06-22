/*

The 'this' keyword in javascript often causes confusion for beginners especially when it comes to method binding. 
Using the '.bind()' method is one way to bind the 'this' keyword to a function.
Using the '.bind()' method can create a new function with a specific 'this' value. This is particularly useful
when passing methods as callbacks or event handlers where the context('this' value) might otherwise be lost.

A constructor function is a special type of function used to create and initialize objects.
Constructor functions provide a blueprint for creating multiple objects with the same properties and methods.

*/

//  using .bind() method
const user = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const greet = user.greet;
greet(); // Hello, my name is undefined

// method above has lost the context of the user object, to fix this, use the .bind() method
const greetBound = user.greet.bind(user);
greetBound(); // Hello, my name is John


//  another example with event listeners
class Singer{
  constructor(name){
    this.name = name;
    // bind the sing method to the Singer object
    this.sing = this.sing.bind(this);
  }
  sing(){
    console.log(`${this.name} is singing`);
  }

}

const singer = new Singer("Adele");

//  Adding an event listener with a bound method, in this eg: singer.sing is bound to the singer instance 
// document.getElementById("singButton").addEventListener("click", singer.sing);


// using arrow functions for Lexical "this"
// Arrow functions do not have their own 'this' value. Instead, they inherit the 'this' value from the enclosing lexical context.
// This makes arrow functions particularly useful for preserving the value of 'this' when passing methods as callbacks or event handlers.

class Person2 {
  constructor(name) {
    this.name = name;
  }

  greet = () => {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person2 = new Person2("Kevin");
const greet2 = person2.greet;
greet2(); // Hello, my name is Kevin

// Example 1
// Create a constructor function for a Person object
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;

    this.sayHello = function () {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    };
  }
}

// Create a new Person object
const person1 = new Person("John", 30);

// Call the sayHello method
person1.sayHello(); // Hello, my name is John

// Example 2
// Create a constructor function for a Car object
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log(`Driving a ${this.year} ${this.make} ${this.model}`);
  }
}

// Create a new Car object
const car1 = new Car("Toyota", "Corolla", 2020);
console.log(car1); // Car { make: 'Toyota', model: 'Corolla', year: 2020 }

// Call the drive method
car1.drive(); // Driving a 2020 Toyota Corolla

/*
Note:
if you adding a method on constructor function use function expression instead of arrow function because,
 function expression/declaration will have access to the this keyword(data of the object) while arrow function will not have access to the this keyword(data of the object

*/

/* 
Using Prototype for methods
- To avoid creating duplicate methods for each instance, it's more efficient to define methods on the constructor function's prototype.
*/

// Example 3
// Create a constructor function for a Book object
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  // Add a method to the Book prototype
  read() {
    console.log(`Reading ${this.title} by ${this.author}`);
  }
}


// Create a new Book object
const book1 = new Book("The Alchemist", "Paulo Coelho");
console.log(book1); // Book { title: 'The Alchemist', author: 'Paulo Coelho' }

// Call the read method
book1.read(); // Reading The Alchemist by Paulo Coelho

// Example 4
class Student {
  constructor(id, name, subjects) {
    this.id = id;
    this.name = name;
    this.subjects = Array.isArray(subjects) ? subjects : [];
  }
  addSubject(subject) {
    this.subjects = [...this.subjects, subject];
  }
  removeSubject(subject) {
    this.subjects = this.subjects.filter((s) => s !== subject);
  }
}



const student1 = new Student(1, "John", ["Math", "Science"]);
const student2 = new Student(2, "Doug");

student1.addSubject("History");
student2.addSubject("English");

console.log(student1); // Student { id: 1, name: 'John', subjects: [ 'Math', 'Science', 'History' ] }
console.log(student2); // Student { id: 2, name: 'Doug', subjects: [ 'English' ] }

student1.removeSubject("Science");
console.log(student1); // Student { id: 1, name: 'John', subjects: [ 'Math', 'History' ] }
