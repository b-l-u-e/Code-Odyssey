/* 
Reduce method -is used to reduce the array to a single value.
- it iterates over each item in the array and returns a single value.

Reduce method is a powerful array method that applies a function against an accumulator and each element 
in the array (from left to right) to reduce it to a single value.

The accumulator is the value that is returned in each iteration of the reduce callback function
and passed into the next iteration. It starts as the initial value provided in the second argument of the reduce method.


Accumulator behavior:
1: Initial Call: The accumulator starts with the initial value (if provided) or the first element of the array.
2: Subsequent Calls: For each element in the array, the callback function is called with the current value of the accumulator and the current element of the array.
3: Return Value: The return value of the callback function becomes the new value of the accumulator.
4: Final Result: After the last element, the final value of the accumulator is returned as the result of the reduce() function.


The reduce method takes two arguments:
1. a callback function
2. an initial value

The callback function takes four arguments:
1. accumulator - accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback
2. currentValue - the current element being processed in the array
3. currentIndex - the index of the current element being processed in the array
4. array - the array reduce was called upon

array.reduce(callback(accumulator, currentValue, currentIndex, array)

The reduce method can be used to:

- multiply all the elements in an array
- sum all the elements in an array
- flatten an array of arrays
- count the instances or occurences of each item in an array   
- group objects by a property
- remove duplicate items in an array
- double the value of each element in an array
- subset an array based on a condition


*/


//  sum all the elements in an array
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15

// sum the values of an object array
const menuItems = [
    { item: 'Blue Cheese Salad', price: 8 },
    { item: 'Spicy Chicken Rigatoni', price: 18 },
    { item: 'Ponzu Glazed Salmon', price: 23 },
    { item: 'Philly Cheese Steak', price: 13 },
    { item: 'Baked Italian Chicken Sub', price: 12 },
    { item: 'Pan Seared Ribeye', price: 31 }
]

const totalPriceMenuItems = menuItems.reduce((accumulator, menuItem) => {
    return accumulator + menuItem.price
}, 0)

console.log(totalPriceMenuItems); // 105


// flatten an array of arrays
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flatArray); // [1, 2, 3, 4, 5, 6]


// count the occurrences of each element in an array
const fruits = ['apple', 'banana', 'cherry', 'apple', 'cherry', 'cherry', 'banana'];
const fruitCount = fruits.reduce((accumulator, fruit) => {
if(!accumulator[fruit]) {
    accumulator[fruit] = 1;
} else {
    accumulator[fruit]++;
}
return accumulator;
}, {}) // Initial value is an empty object

console.log(fruitCount); // { apple: 2, banana: 2, cherry: 3 }


// grouping objects by property
const people = [
    {name: 'Alice', age: 21},
    {name: 'Bob', age: 22},
    {name: 'Alice', age: 24},
    {name: 'Bob', age: 25}
]

const groupedByName = people.reduce((accumulator, currentValue) => {
    if(!accumulator[currentValue.name]) {
        accumulator[currentValue.name] = []
    }
    accumulator[currentValue.name].push(currentValue)
    return accumulator
}, {}) // initial value is an empty object

console.log(groupedByName)

/*
Output:
{
  Alice: [ { name: 'Alice', age: 21 }, { name: 'Alice', age: 24 } ],
  Bob: [ { name: 'Bob', age: 22 }, { name: 'Bob', age: 25 } ]
}

*/

// Remove duplicates from an array
const arrayWithDuplicates = [1, 2, 3, 4, 4, 5, 5, 7, 2, 8, 9, 9, 1, 1, 2]
const uniqueArray = arrayWithDuplicates.reduce((accumulator, currentValue) => {
    // check if the current value is already in the accumulator
    if(!accumulator.includes(currentValue)) {
        accumulator.push(currentValue) // If not, add it to the accumulator
    }
    return accumulator // return updated accumulator
}, []) // Initial value is an empty 



// Use reduce to sum the weights of only the electric cars 

const cars = [
  { name: "Toyota", isElectric: false, weight: 1320 },
  { name: "Ford", isElectric: false, weight: 1400 },
  { name: "Volkswagen", isElectric: false, weight: 1370 },
  { name: "Honda", isElectric: false, weight: 1375 },
  { name: "Tesla", isElectric: true, weight: 1750 },
  { name: "BMW", isElectric: true, weight: 1350 },  
];

const sumWeights = cars.reduce((accumulator, car) => {
    if(car.isElectric) {
        // console.log(accumulator + carWeight.weight)
      return accumulator + car.weight
    }
    return accumulator
},0)

console.log(sumWeights)

// double the value of each element in an array... Here can use map method as well
const numbersArray = [1, 2, 3, 5, 8]
const doubledNumbers = numbersArray.reduce((accumulator, currentValue) => {
    accumulator.push(currentValue * 2)
    return accumulator
}, [])

console.log(doubledNumbers) // [2, 4, 6, 10, 16]


// subset an array based on a condition.. Here can use filter method as well
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers2.reduce((accumulator, currentValue) => {
    if(currentValue % 2 === 0) {
        accumulator.push(currentValue)
    }
    return accumulator
}, [])

console.log(evenNumbers) // [2, 4, 6, 8, 10]

//  to use ternary operation on reduce function...push method doesnt return the array, so use concat method
const greaterNumbers = numbers2.reduce((accumulator, currentValue) => currentValue > 5 ? accumulator.concat(currentValue) : accumulator, [])
console.log(greaterNumbers) // [6, 7, 8, 9, 10]