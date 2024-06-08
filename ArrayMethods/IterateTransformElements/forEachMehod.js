/* 
The .forEach() method perform operation on every element of an array. 
Works similar with map method.
The difference between .map() and .forEach():
 -> .map() returns a new array with the results of calling a provided function on every element in the calling array while,
 .forEach() does not return anything.

 -> .forEach() allows to just iterate through the array.

*/

const temperatures = [
    { degrees: 69, isRecordTemp: false },
    { degrees: 82, isRecordTemp: true },
    { degrees: 73, isRecordTemp: false },
    { degrees: 64, isRecordTemp: false }
]

const newTemps = temperatures.map(temperature =>
    temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature
)

// console.log(newTemps)

newTemps.forEach(temperature => {
    if(temperature.isHigh) {
        console.log(`Temperature ${temperature.degrees} was a record high last week!`)
    }
})




