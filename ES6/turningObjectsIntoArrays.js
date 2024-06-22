/*

Object.keys(), Object.values(), Object.entries() -> Object to Array
Object.keys() -> Object to Array of keys
Object.values() -> Object to Array of values
Object.entries() -> Object to Array of key-value pairs

*/

const user = {
  name: "John",
  age: 30,
};

const keys = Object.keys(user);
console.log(keys); // ['name', 'age']

//  check if the age exits
if (keys.includes("age")) {
  console.log(user.age);
}

const values = Object.values(user);
values.map((value) => console.log(value)); // John, 30

const monthlyExpenses = {
  food: 400,
  rent: 1700,
  insurance: 550,
  internet: 49,
};

const monthlyTotal = Object.values(monthlyExpenses).reduce(
  (acc, expense) => acc + expense,
  0
);
console.log(monthlyTotal); // 2699

/* 

To transform objects into array of objects, use Object.keys to get the users object and then map over these
keys to create an array of user objects

*/

// using map method

const users = {
  2345234: {
    name: "John",
    age: 29,
  },
  8798129: {
    name: "Jane",
    age: 42,
  },
  1092384: {
    name: "Fred",
    age: 17,
  },
};

const usersArray = Object.keys(users).map((id) => {
  return { id, ...users[id] };
});

console.log(usersArray);

// using reduce method

const users2 = {
  2345234: {
    name: "John",
    age: 29,
  },
  8798129: {
    name: "Jane",
    age: 42,
  },
  1092384: {
    name: "Fred",
    age: 17,
  },
};

const usersOver20 = Object.entries(users2).reduce((acc, [id, user]) => {
    if (user.age > 20) {
        acc.push({ id, ...user });
    }
    return acc;
}, [])

console.log(usersOver20);