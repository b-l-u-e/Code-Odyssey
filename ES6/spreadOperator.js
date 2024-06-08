/* 
- How to avoid mutation of original array? 
  - Use the spread operator to create a new array as the copy of the original array and not the reference to the original array.

The spread operator(`...`) is used to expand an iterable like an array into individual elements.

The spread operator is a powerful and versatile tool that allows you to expand elements of an iterable
(like an array or object) in places where multiple elements or arguments are expected..

The spread operator can be used in the following ways:
1. To copy an array
2. To concatenate arrays
3. To pass elements of an array as arguments to a function
4. To add elements to an array
5. To add key-value pairs to an object
6. To copy an object
7. To merge objects
8: To expand properties of an object
*/



//  first approach - concat method
const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'];

const allMenuIdeas = lunchMenuIdeas.concat(['Club Sandwich', 'Fish Tacos']);

console.log(allMenuIdeas); // ['Harvest Salad', 'Southern Fried Chicken', 'Club Sandwich', 'Fish Tacos']
console.log(lunchMenuIdeas); // ['Harvest Salad', 'Southern Fried Chicken']

//  second approach - spread operator

const menuIdeas = [...lunchMenuIdeas, 'Club Sandwich', 'Burritos'];
console.log(menuIdeas); // ['Harvest Salad', 'Southern Fried Chicken', 'Club Sandwich', 'Fish Tacos']



const breakfastMenuIdeas = ['Bacon and Eggs', 'Pancakes', 'Berry Parfait'];
const dinnerMenuIdeas = ['Hamburger', 'Lasagna', 'Grilled Salmon'];

const MenuIdeas = [...breakfastMenuIdeas, 'Waffles', 'French Toast', ...dinnerMenuIdeas];

console.log(MenuIdeas); // ['Bacon and Eggs', 'Pancakes', 'Berry Parfait', 'Waffles', 'French Toast', 'Hamburger', 'Lasagna', 'Grilled Salmon']

// to delete element and replace with new element
// Step 1: find the index of the element
const breakfastIndex = MenuIdeas.findIndex(idea => idea === 'Waffles');

// Step 2: create a new array with the element removed
const finalMenuIdeas = [
    ...MenuIdeas.slice(0, breakfastIndex),
    'Green Tea',
    ...MenuIdeas.slice(breakfastIndex + 1)
]

console.log(finalMenuIdeas); // ['Bacon and Eggs', 'Pancakes', 'Berry Parfait', 'Green Tea', 'French Toast', 'Hamburger', 'Lasagna', 'Grilled Salmon']