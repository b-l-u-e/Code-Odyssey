/* 

find() method is used to find the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
Best case: when you need to find the first matching element

*/

const restaurants = [
    { name: 'Cap City Diner', milesAway: 2.2 },
    { name: 'Chop Shop', milesAway: 4.1 },
    { name: 'Northstar Cafe', milesAway: 0.9 },
    { name: 'City Tavern', milesAway: 0.5 },
    { name: 'Shake Shack', milesAway: 5.3 }
]

const nearbyRestaurant = restaurants.find(restaurant => 
    restaurant.milesAway < 2
);

console.log(nearbyRestaurant); // { name: 'Northstar Cafe', milesAway: 0.9 }