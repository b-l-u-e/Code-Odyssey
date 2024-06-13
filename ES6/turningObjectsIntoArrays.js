/*

Object.keys(), Object.values(), Object.entries() -> Object to Array
Object.keys() -> Object to Array of keys
Object.values() -> Object to Array of values
Object.entries() -> Object to Array of key-value pairs

*/

const user = {
    name: 'John',
    age: 30
};

const keys = Object.keys(user);
console.log(keys); // ['name', 'age']

//  check if the age exits
if (keys.includes('age')) {
    console.log(user.age);
}

const values = Object.values(user);
values.map(value => console.log(value)); // John, 30


const monthlyExpenses = {
    food: 400,
    rent: 1700,
    insurance: 550,
    internet: 49
};

const monthlyTotal = Object.values(monthlyExpenses).reduce((acc, expense) => acc + expense, 0);
console.log(monthlyTotal); // 2699