/* 
A set is a built-in object that  allows to store unique value of any type,
primitive values or object references.

To create a set, use the new Set() constructor. The Set object takes an iterable object as an argument, such as an array or string, and it will add all unique elements to the set.

*/

const numbers = [1, 2, 3, 4, 5, 5, 5, 5];

// Using 'set' to get unique values
const uniqueNumbers = [...new Set(numbers)];
console.log('UniqueNumbers: ',uniqueNumbers); // [1, 2, 3, 4, 5]


// Using filter method to get unique values
const uniqueNumbers2 = numbers.filter((number, index) => numbers.indexOf(number) === index);
console.log('UniqueNumbers2: ',uniqueNumbers2); // [1, 2, 3, 4, 5]


// Using reduce method to get unique values
const uniqueNumbers3 = numbers.reduce((unique, number) => {
  return unique.includes(number) ? unique : [...unique, number];
}, []);

console.log('UniqueNumbers3: ',uniqueNumbers3); // [1, 2, 3, 4, 5]

// Using forEach method to get unique values
const uniqueNumbers4 = [];
numbers.forEach((number) => {
  if (!uniqueNumbers4.includes(number)) {
    uniqueNumbers4.push(number);
  }
});
console.log('UniqueNumbers4: ',uniqueNumbers4); // [1, 2, 3, 4, 5]

// Using for...of loop to get unique values
const uniqueNumbers5 = [];
for (const number of numbers) {
  if (!uniqueNumbers5.includes(number)) {
    uniqueNumbers5.push(number);
  }
}
console.log('UniqueNumbers5: ',uniqueNumbers5); // [1, 2, 3, 4, 5]

// Using while loop to get unique values
const uniqueNumbers6 = [];
let i = 0;
while (i < numbers.length) {
  if (!uniqueNumbers6.includes(numbers[i])) {
    uniqueNumbers6.push(numbers[i]);
  }
  i++;
}
console.log('UniqueNumbers6: ',uniqueNumbers6); // [1, 2, 3, 4, 5]

//  Using an object to track uniqueness
const array = [1, 2, 3, 4, 5, 5, 5, 5];
const uniqueArray = Object.keys(array.reduce((unique, number) => {
  return { ...unique, [number]: true };
}, {})).map(Number);

console.log('UniqueArray: ',uniqueArray); // [1, 2, 3, 4, 5]

const uniqueArray2 = array.filter((value, index, self) => {
  if (!self._seen) self._seen = {};
  if (self._seen[value]) return false;
  self._seen[value] = true;
  return true;
});

console.log('UniqueArray2: ',uniqueArray2); // [1, 2, 3, 4, 5]


// unique strings
const stringArray = ['apple', 'banana', 'apple', 'orange', 'banana'];
const uniqueStringArray = [...new Set(stringArray)];

console.log(uniqueStringArray); // ['apple', 'banana', 'orange']



// converting to an array
const numbersArray = [...uniqueNumbers];
console.log('NumbersArray: ',numbersArray); // [1, 2, 3, 4, 5]