/* 
The .map() method creates a new array with the results of calling a provided function on every element in the calling array.

Best case: when you need to transform every element of an array
*/

const temperatures = [
    { degrees: 69, isRecordTemp: false },
    { degrees: 82, isRecordTemp: true },
    { degrees: 73, isRecordTemp: false },
    { degrees: 64, isRecordTemp: false }
]



const temperatureDegrees = temperatures.map(temperature => temperature.degrees);
console.log(temperatureDegrees); // [69, 82, 73, 64]


const newTemps = temperatures.map(temperature => {
    return {
        degrees: temperature.degrees,
        isRecordTemp: true,
        isHigh: temperature.degrees >= 70
    }
})

console.log(newTemps) // [ { degrees: 69, isRecordTemp: true, isHigh: false }, { degrees: 82, isRecordTemp: true, isHigh: true }, { degrees: 73, isRecordTemp: true, isHigh: true }, { degrees: 64, isRecordTemp: true, isHigh: false } ]

const newTemps2 = temperatures.map(temperature => {
    temperature.isRecordTemp = false;
    return temperature;
})

console.log(newTemps2) // [ { degrees: 69, isRecordTemp: false }, { degrees: 82, isRecordTemp: false }, { degrees: 73, isRecordTemp: false }, { degrees: 64, isRecordTemp: false } ]


const newTemps3 = temperatures.map(temp => 
    temp.degrees > 70 ? { ...temp, isHigh: true } : temp
)

console.log(newTemps3) // [ { degrees: 69, isRecordTemp: false }, { degrees: 82, isRecordTemp: true, isHigh: true }, { degrees: 73, isRecordTemp: false, isHigh: true }, { degrees: 64, isRecordTemp: false } ]