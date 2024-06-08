/* 

The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
The method is case-sensitive.

Best case: when you need to check if an array includes a certain value

*/

const restaurants = [
    { name: 'Cap City Diner', milesAway: 2.2 },
    { name: 'Chop Shop', milesAway: 4.1 },
    { name: 'Northstar Cafe', milesAway: 0.9 },
    { name: 'City Tavern', milesAway: 0.5 },
    { name: 'Shake Shack', milesAway: 5.3 }
]

const result = restaurants.find(
    restaurant => restaurant.name.includes('Tavern')
)

//  or 

const result2 = restaurants.find(
    restaurant => restaurant.name.toLowerCase().includes('tavern')
)

console.log(result)
console.log(result2)