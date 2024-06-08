/*  

Destructuring is a way to extract values from objects and arrays and bind them to variables in a more concise way.

Destructuring is a powerful feature in JavaScript that allows you to extract multiple pieces of data from arrays or objects and assign them to variables in a single statement.

Destructuring can be used in the following ways:
1. Array Destructuring
2. Object Destructuring
3. Parameter Destructuring
4. Nested Destructuring
5. Destructuring with Default Values
6. Destructuring with Rest Pattern
7. Destructuring with Spread Operator
8. Destructuring in Loops
9. Destructuring with Functions


*/

// Array Destructuring

const point = [10, 25, -34];
const [x, y, z] = point;

console.log(x, y, z); // 10 25 -34

// Object Destructuring
const person = { 
    firstName: 'John', 
    age: 30 ,
    city: 'New York'
};

const { firstName, age, city } = person;
console.log(firstName, age, city); // John 30 New York

// Parameter Destructuring
function printUser({ firstName, age, city }) {
    console.log(`Name: ${firstName}, Age: ${age}, City: ${city}`);
}

printUser(person); // Name: John, Age: 30, City: New York

// Nested Destructuring
const student = {
    name: 'Alex',
    age: 22,
    scores: {
        maths: 74,
        english: 63
    }
};

const { name, scores: { maths, english } } = student;
console.log(`${name} scored ${maths} in Maths and ${english} in English.`); // Alex scored 74 in Maths and 63 in English.

// Destructuring with Default Values and also can rename variables.
const employee = {
    name: 'John Doe',
    job: 'Software Engineer'
};

const { name: empName, job: empJob, empstatus = 'Lead' } = employee;
console.log(empName, empJob, empstatus); // John Doe Software Engineer Lead

// Destructuring with Rest Pattern
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first, second, rest); // 1 2 [3, 4, 5]

// Destructuring with Spread Operator
const colors = ['red', 'green', 'blue'];
const newColors = ['yellow', 'purple', ...colors];
console.log(newColors); // ['yellow', 'purple', 'red', 'green', 'blue']

// Destructuring in Loops
const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'Jessica', age: 40 }
];

for(const { name, age } of users) {
    console.log(`${name} is ${age} years old.`);
}


// Destructuring with Functions
function getPerson() {
    return {
        firstName: 'John Doe',
        age: 30
    };
}

const { firstName: userName, age: userAge } = getPerson();
console.log(userName, userAge); // John Doe 30

