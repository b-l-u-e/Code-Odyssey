/* 
The .filter() method  is to select elements that meet a certain criteria.
returns new array but doesnt mutate the original array.
filter method is used to filter elements and returns subset of the original array. if it doesnt get whats looking for it returns an empty array.
*/

const restaurants = [
    { name: 'Cap City Diner', milesAway: 2.2 },
    { name: 'Chop Shop', milesAway: 4.1 },
    { name: 'Northstar Cafe', milesAway: 0.9 },
    { name: 'City Tavern', milesAway: 0.5 },
    { name: 'Shake Shack', milesAway: 5.3 }
]

const closeByRestaurants = restaurants.filter(restaurant => restaurant.milesAway < 2);
console.log(closeByRestaurants); // [ { name: 'Northstar Cafe', milesAway: 0.9 }, { name: 'City Tavern', milesAway: 0.5 } ]

// starts with z and closeby < 2
const closeByRestaurants2 = restaurants.filter(restaurant => restaurant.milesAway < 2 && restaurant.name.startsWith('C'));
console.log(closeByRestaurants2); // [ { name: 'City Tavern', milesAway: 0.5 } ]


